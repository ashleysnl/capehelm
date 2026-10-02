import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {publicRoutes,renderSitemap} from '../scripts/seo/routes.mjs';
import {sitemapUrls} from '../scripts/seo/checks.mjs';
test('route additions and removals change generated sitemap without a manual list',async()=>{
 const root=await mkdtemp(path.join(tmpdir(),'capehelm-routes-'));
 try {await writeFile(path.join(root,'page.tsx'),'');await mkdir(path.join(root,'new-page'));await writeFile(path.join(root,'new-page','page.tsx'),'');
 assert.deepEqual(sitemapUrls(renderSitemap(await publicRoutes(root))),['https://capehelm.com/','https://capehelm.com/new-page']);
 await rm(path.join(root,'new-page'),{recursive:true});assert.deepEqual(await publicRoutes(root),['/']);
 await mkdir(path.join(root,'[unknown]'));await writeFile(path.join(root,'[unknown]','page.tsx'),'');await assert.rejects(publicRoutes(root),/Register dynamic route source/);
 }finally{await rm(root,{recursive:true,force:true});}
});
test('sitemap uses canonical origin and omits synthetic modification dates',async()=>{
 const xml=renderSitemap(await publicRoutes());assert.doesNotMatch(xml,/<lastmod>|\.html<|github\.io|capehelm\.ca/);assert.ok(sitemapUrls(xml).length>0);
});
