import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { checkBuild, metadata } from '../scripts/seo/checks.mjs';
const good='<title>Example</title><meta content="Description" name="description"><link href="https://capehelm.com/" rel="canonical"><h1>Example</h1>';
test('all generated routes, sitemap coverage and first-party assets are valid',async()=>{await checkBuild(new URL('../dist/client',import.meta.url).pathname);});
test('canonical and robots failures are detected regardless of attribute order',()=>{
  assert.throws(()=>metadata(good.replace('https://capehelm.com/','https://capehelm.ca/'),'https://capehelm.com/'),/canonical/);
  assert.throws(()=>metadata(good+'<meta content="noindex" name="googlebot">','https://capehelm.com/'),/non-indexable/);
  assert.throws(()=>metadata(good,'https://capehelm.com/','X-Robots-Tag: noindex'),/non-indexable/);
});
test('missing routes and assets fail the build check',async()=>{
  const root=await mkdtemp(path.join(tmpdir(),'capehelm-seo-'));
  try {await mkdir(root,{recursive:true});await writeFile(path.join(root,'index.html'),good);await writeFile(path.join(root,'robots.txt'),'Sitemap: https://capehelm.com/sitemap.xml\n');
    await writeFile(path.join(root,'sitemap.xml'),'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://capehelm.com/</loc></url><url><loc>https://capehelm.com/missing</loc></url></urlset>');
    await assert.rejects(checkBuild(root),/coverage/);
    await writeFile(path.join(root,'sitemap.xml'),'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://capehelm.com/</loc></url></urlset>');
    await writeFile(path.join(root,'index.html'),good+'<img src="/missing.webp">');await assert.rejects(checkBuild(root),/missing asset/);
    await writeFile(path.join(root,'index.html'),good+'<a href="/missing">Missing</a>');await assert.rejects(checkBuild(root),/missing page/);
  }finally{await rm(root,{recursive:true,force:true});}
});
