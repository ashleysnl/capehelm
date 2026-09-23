import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const productionOrigin = "https://capehelm.com";
const publicRoutes = ["/", "/features", "/privacy", "/support", "/download"];

async function readBuiltAsset(name) {
  return readFile(new URL(`../dist/client/${name}`, import.meta.url), "utf8");
}

test("robots.txt allows crawling and advertises the production sitemap", async () => {
  const robots = await readBuiltAsset("robots.txt");

  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Sitemap: https:\/\/capehelm\.com\/sitemap\.xml$/m);
  assert.doesNotMatch(robots, /^Disallow:/m);
});

test("sitemap.xml contains every canonical public route exactly once", async () => {
  const sitemap = await readBuiltAsset("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedLocations = publicRoutes.map((route) => `${productionOrigin}${route}`);

  assert.deepEqual(locations, expectedLocations);
  assert.equal(new Set(locations).size, locations.length);
  assert.ok(locations.every((location) => location.startsWith(`${productionOrigin}/`)));
  assert.doesNotMatch(sitemap, /github\.io|localhost|<lastmod>|<changefreq>|<priority>/i);
});

test("every sitemap route has a rendered public page", async () => {
  const pages = await Promise.all(
    publicRoutes.map((route) => {
      const fileName = route === "/" ? "index.html" : `${route.slice(1)}.html`;
      return readBuiltAsset(fileName);
    }),
  );

  for (const html of pages) {
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*(?:noindex|nofollow)/i);
  }
});

test("the generated error page has one unambiguous noindex directive", async () => {
  const errorPage = await readBuiltAsset("404.html");
  const directives = [...errorPage.matchAll(/<meta name="robots" content="([^"]+)"/gi)].map(
    (match) => match[1],
  );

  assert.deepEqual(directives, ["noindex"]);
});
