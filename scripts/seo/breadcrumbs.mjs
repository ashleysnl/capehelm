import assert from 'node:assert/strict';
import {decode,tags,origin} from './checks.mjs';
export function validateBreadcrumbs(html,url,knownUrls) {
 const nodes=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>JSON.parse(m[1]));
 const lists=nodes.filter(n=>n['@type']==='BreadcrumbList');
 assert.equal(lists.length,1,`${url}: exactly one BreadcrumbList`);
 const list=lists[0];assert.equal(list['@context'],'https://schema.org');
 const nav=html.match(/<nav\b[^>]*aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/i)?.[1];assert.ok(nav,`${url}: visible breadcrumb navigation`);
 const labels=[...nav.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(m=>decode(m[1].replace(/<[^>]*>/g,'')).trim());
 assert.ok(list.itemListElement.length>=2);assert.equal(list.itemListElement.length,labels.length);
 list.itemListElement.forEach((item,index)=>{
  assert.equal(item['@type'],'ListItem');assert.equal(item.position,index+1);assert.equal(item.name,labels[index]);
  const u=new URL(item.item);assert.equal(u.origin,origin);assert.ok(!u.search);const clean=new URL(u);clean.hash='';assert.ok(knownUrls.has(clean.href),`${url}: unknown breadcrumb ${item.item}`);
  if(u.hash)assert.ok(tags(knownUrls.get(clean.href),'[a-z][a-z0-9]*').some(t=>t.id===u.hash.slice(1)),`${url}: missing breadcrumb section`);
 });
 assert.equal(list.itemListElement.at(-1).item,url);
 const links=tags(nav,'a').map(t=>new URL(t.href,url).href);assert.deepEqual(list.itemListElement.slice(0,-1).map(i=>i.item),links);
 return list;
}
