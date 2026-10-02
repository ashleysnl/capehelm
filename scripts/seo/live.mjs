import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
import { metadata, localReferences, sitemapUrls, origin } from './checks.mjs';
const exec = promisify(execFile);
const failures=[];
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function request(url) {
  const {stdout}=await exec('curl',['--silent','--show-error','--max-time','25','--retry','2','--dump-header','-','--write-out','\nSEO_STATUS:%{http_code}',url],{maxBuffer:8*1024*1024,encoding:'utf8'});
  const split=stdout.lastIndexOf('\nSEO_STATUS:');const status=Number(stdout.slice(split+12));
  let data=stdout.slice(0,split),headers='';
  // Discard CONNECT proxy and interim responses, retaining the actual response headers.
  while(data.startsWith('HTTP/')) {const end=data.indexOf('\r\n\r\n');if(end<0)break;headers=data.slice(0,end);data=data.slice(end+4);}
  return {status,headers,body:data,location:headers.match(/^location:\s*(.+)$/im)?.[1].trim()};
}
async function check(label,fn) {try{await fn();}catch(e){failures.push(`${label}: ${e.message}`);}}
async function pool(items,fn) {let next=0;await Promise.all(Array.from({length:Math.min(8,items.length)},async()=>{while(next<items.length){const item=items[next++];await fn(item);}}));}
async function redirect(url,target) {const r=await request(url);assert.ok([301,308].includes(r.status),`expected 301/308, got ${r.status}`);assert.equal(r.location,target,'incorrect Location');}
const revision=process.env.SEO_EXPECTED_REVISION;
if(revision) {
  let ready=false;
  for(let attempt=0;attempt<12;attempt++) {try {const r=await request(`${origin}/seo-release.json?revision=${revision}&attempt=${attempt}`);ready=r.status===200&&JSON.parse(r.body).revision===revision;}catch{/* propagation can briefly serve the old artifact */}
    if(ready)break; if(attempt<11)await sleep(10000);
  }
  assert.ok(ready,`deployed revision ${revision} not visible after bounded retries`);
}
const sitemap=await request(`${origin}/sitemap.xml`);assert.equal(sitemap.status,200);const urls=sitemapUrls(sitemap.body);
// Use the checked-out sitemap to prevent an old/partial release from passing with fewer routes.
const expected=sitemapUrls(await readFile(new URL('../../public/sitemap.xml',import.meta.url),'utf8'));
assert.deepEqual([...urls].sort(),[...expected].sort(),'production sitemap differs from checkout');
const robots=await request(`${origin}/robots.txt`);assert.equal(robots.status,200);assert.match(robots.body,/^Sitemap: https:\/\/capehelm.com\/sitemap.xml\s*$/m);assert.doesNotMatch(robots.body,/^Disallow:\s*\/\s*$/m);
const pages=new Map(),assets=new Set(),titles=new Set(),descriptions=new Set();
await pool(urls,u=>check(u,async()=>{const r=await request(u);assert.equal(r.status,200);const m=metadata(r.body,u,r.headers);assert.ok(!titles.has(m.title),'duplicate title');assert.ok(!descriptions.has(m.description),'duplicate description');titles.add(m.title);descriptions.add(m.description);pages.set(u,r.body);}));
for(const [u,html] of pages)for(const r of localReferences(html,u)) {const clean=new URL(r.url);clean.hash='';clean.search='';if(r.kind==='asset')assets.add(clean.href);else if(!pages.has(clean.href))failures.push(`${u}: missing/noncanonical link ${r.url.href}`);}
await pool([...assets],u=>check(u,async()=>{const r=await request(u);assert.equal(r.status,200,'asset must return 200 without redirect');assert.doesNotMatch(r.headers,/content-type:\s*text\/html/i,'asset returned HTML');}));
const aliases=[[`${origin}/index.html?seo_check=1`,`${origin}/?seo_check=1`]];
for(const u of urls)if(new URL(u).pathname!=='/')for(const suffix of ['/','.html','/index.html'])aliases.push([`${u}${suffix}?seo_check=1`,`${u}?seo_check=1`]);
await pool(aliases,([u,target])=>check(u,()=>redirect(u,target)));
await pool(['','/','.html'].map(s=>`${origin}/seo-check-does-not-exist-8ef217${s}`),u=>check(u,async()=>assert.equal((await request(u)).status,404,'unknown page must return genuine 404')));
for(const [u,target] of [[`https://capehelm.ca/features?seo_check=1`,`${origin}/features?seo_check=1`],[`https://www.capehelm.com/features?seo_check=1`,`${origin}/features?seo_check=1`],[`http://capehelm.com/features`,`${origin}/features`],[`https://ashleysnl.github.io/capehelm/features`,`${origin}/features`]])await check(u,()=>redirect(u,target));
console.log(JSON.stringify({pages:pages.size,assets:assets.size,aliases:aliases.length,failures},null,2));
if(failures.length)process.exitCode=1;
