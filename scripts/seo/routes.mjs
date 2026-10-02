import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { supportArticles, supportArticlePath } from '../../content/supportArticles.ts';
import { origin } from './checks.mjs';
const appRoot=fileURLToPath(new URL('../../app',import.meta.url));
// Static app routes are discovered directly. The existing support catalogue is
// the source for the one parameterized route; unknown dynamic routes fail closed.
export async function publicRoutes(root=appRoot) {
  const routes=[];
  async function walk(directory,segments=[]) {
    const entries=await readdir(directory,{withFileTypes:true});
    if(entries.some(e=>e.isFile()&&/^page\.(tsx?|jsx?)$/.test(e.name))) {
      const route='/'+segments.filter(s=>!/^\(.+\)$/.test(s)).join('/');
      if(route==='/support/[category]/[slug]')routes.push(...supportArticles.map(supportArticlePath));
      else {assert.ok(!route.includes('[')&&!route.includes('@'),`Register dynamic route source for ${route}`);routes.push(route);}
    }
    for(const e of entries)if(e.isDirectory()&&!e.name.startsWith('_'))await walk(path.join(directory,e.name),[...segments,e.name]);
  }
  await walk(root);assert.equal(new Set(routes).size,routes.length,'duplicate public route');
  return routes.sort();
}
export function renderSitemap(routes) {
  const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+routes.map(route=>`  <url>\n    <loc>${escape(new URL(route,origin).href)}</loc>\n  </url>\n`).join('')+'</urlset>\n';
}
