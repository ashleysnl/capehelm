import test from 'node:test';
import assert from 'node:assert/strict';
import {builtPages} from '../scripts/seo/checks.mjs';
import {validateBreadcrumbs} from '../scripts/seo/breadcrumbs.mjs';
import {publicRoutes} from '../scripts/seo/routes.mjs';
test('all nested guides and support pages have one valid breadcrumb matching visible navigation',async()=>{
 const pages=await builtPages(new URL('../dist/client',import.meta.url).pathname);
 const expectedRoutes=(await publicRoutes()).filter(route=>/^\/(?:guides|support)\/.+/.test(route));
 const actualRoutes=[];
 for(const [url,html] of pages) {
  const route=new URL(url).pathname;
  if(/^\/(?:guides|support)\/.+/.test(route)) {validateBreadcrumbs(html,url,pages);actualRoutes.push(route);}
 }
 assert.deepEqual(actualRoutes.sort(),expectedRoutes.sort());
});
