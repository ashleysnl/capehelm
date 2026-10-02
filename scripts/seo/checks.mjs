import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
export const origin = 'https://capehelm.com';
export function decode(s) { return s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))); }
export function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m=>[m[1].toLowerCase(),decode(m[2]??m[3])])));
}
export function metadata(html, url, headers = '') {
  const head=html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? html;
  const titles=[...head.matchAll(/<title\b[^>]*>([^<]*)<\/title>/gi)].map(m=>decode(m[1]).trim());
  const metas=tags(html,'meta');
  const descriptions=metas.filter(m=>m.name?.toLowerCase()==='description').map(m=>m.content?.trim());
  const canonicals=tags(html,'link').filter(m=>m.rel?.toLowerCase()==='canonical').map(m=>m.href);
  assert.equal(titles.length,1,`${url}: title count`); assert.ok(titles[0],`${url}: empty title`);
  assert.equal(descriptions.length,1,`${url}: description count`); assert.ok(descriptions[0],`${url}: empty description`);
  assert.equal(canonicals.length,1,`${url}: canonical count`);
  assert.equal(new URL(canonicals[0]).href,new URL(url).href,`${url}: incorrect canonical`);
  assert.equal((html.match(/<h1\b[^>]*>/gi)??[]).length,1,`${url}: h1 count`);
  for(const m of metas.filter(m=>/^(robots|googlebot|bingbot)$/i.test(m.name??''))) assert.doesNotMatch(m.content??'',/\b(noindex|none)\b/i,`${url}: non-indexable meta`);
  assert.doesNotMatch(headers,/^x-robots-tag:.*\b(noindex|none)\b/im,`${url}: non-indexable header`);
  return {title:titles[0],description:descriptions[0]};
}
export function localReferences(html,url) {
  const references=[];
  const add=(v,kind)=>{ if(!v || /^(data:|mailto:|tel:|javascript:)/i.test(v))return; const u=new URL(v,url); if(u.origin===origin && !u.pathname.startsWith('/cdn-cgi/'))references.push({url:u,kind}); };
  for(const a of tags(html,'a'))add(a.href,'page');
  for(const t of [...tags(html,'img'),...tags(html,'script'),...tags(html,'source')]) {
    add(t.src,'asset'); for(const item of (t.srcset??'').split(','))add(item.trim().split(/\s+/)[0],'asset');
  }
  for(const t of tags(html,'link'))if(/(?:stylesheet|icon|preload|modulepreload)/i.test(t.rel??'')) {add(t.href,'asset');for(const item of (t.imagesrcset??'').split(','))add(item.trim().split(/\s+/)[0],'asset');}
  return references;
}
export function sitemapUrls(xml) {
  assert.match(xml,/<urlset\b[^>]*xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
  const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>decode(m[1]));
  assert.ok(urls.length,'empty sitemap');assert.equal(new Set(urls).size,urls.length,'duplicate sitemap URL');
  for(const u of urls) {const x=new URL(u);assert.equal(x.origin,origin);assert.ok(!x.search&&!x.hash);assert.ok(x.pathname==='/'||(!x.pathname.endsWith('/')&&!x.pathname.endsWith('.html')));}
  return urls;
}
export async function builtPages(root) {
  const pages=new Map();
  async function walk(dir) {for(const e of await readdir(dir,{withFileTypes:true})) {const f=path.join(dir,e.name);if(e.isDirectory())await walk(f);else if(e.name.endsWith('.html')&&e.name!=='404.html') {const relative=path.relative(root,f).replaceAll(path.sep,'/');const route=relative==='index.html'?'/':'/'+relative.slice(0,-5);pages.set(new URL(route,origin).href,await readFile(f,'utf8'));}}}
  await walk(root);return pages;
}
export async function checkBuild(root) {
  const pages=await builtPages(root);const urls=sitemapUrls(await readFile(path.join(root,'sitemap.xml'),'utf8'));
  assert.deepEqual([...pages.keys()].sort(),[...urls].sort(),'sitemap/build route coverage');
  const robots=await readFile(path.join(root,'robots.txt'),'utf8');assert.match(robots,/^Sitemap: https:\/\/capehelm.com\/sitemap.xml\s*$/m);
  const titles=new Set(),descriptions=new Set();let assets=0;
  for(const [u,html] of pages) {const m=metadata(html,u);assert.ok(!titles.has(m.title),`${u}: duplicate title`);assert.ok(!descriptions.has(m.description),`${u}: duplicate description`);titles.add(m.title);descriptions.add(m.description);
    for(const r of localReferences(html,u)) {const clean=new URL(r.url);clean.hash='';clean.search='';
      if(r.kind==='page') {assert.ok(pages.has(clean.href),`${u}: missing page ${r.url.href}`);if(r.url.hash) {const ids=tags(pages.get(clean.href),'[a-z][a-z0-9]*').map(t=>t.id);assert.ok(ids.includes(decodeURIComponent(r.url.hash.slice(1))),`${u}: missing fragment ${r.url.href}`);}}
      else {const f=path.resolve(root,'.'+decodeURIComponent(r.url.pathname));assert.ok(f.startsWith(path.resolve(root)+path.sep), 'asset outside output');assert.ok((await stat(f).catch(()=>null))?.isFile(),`${u}: missing asset ${r.url.pathname}`);assets++;}
    }
  }
  return {pages:pages.size,assetReferences:assets};
}
