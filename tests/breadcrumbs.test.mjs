import test from 'node:test';
import assert from 'node:assert/strict';
import {builtPages} from '../scripts/seo/checks.mjs';
import {validateBreadcrumbs} from '../scripts/seo/breadcrumbs.mjs';
test('all nested guides and support pages have one valid breadcrumb matching visible navigation',async()=>{
 const pages=await builtPages(new URL('../dist/client',import.meta.url).pathname);let count=0;
 for(const [url,html] of pages)if(/\/guides\/.+|\/support\/.+/.test(new URL(url).pathname)) {validateBreadcrumbs(html,url,pages);count++;}
 assert.equal(count,20);
});
