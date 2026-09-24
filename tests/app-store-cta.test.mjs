import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import {
  macAppStoreDestination,
  macAppStoreFallbackUrl,
  macAppStoreUrl,
  resolveMacAppStoreDestination,
} from "../config/site.ts";

const repositoryRoot = path.resolve(import.meta.dirname, "..");

async function render(route = "/") {
  const relativePath = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  return readFile(path.join(repositoryRoot, "dist/client", relativePath), "utf8");
}

function section(html, className) {
  return html.match(new RegExp(`<section class="[^"]*${className}[^"]*"[\\s\\S]*?<\\/section>`))?.[0] ?? "";
}

test("App Store destination falls back safely and accepts only a production Apple listing", () => {
  assert.equal(macAppStoreUrl, null);
  assert.equal(macAppStoreFallbackUrl, "/download");
  assert.equal(macAppStoreDestination, "/download");
  assert.equal(resolveMacAppStoreDestination(undefined), "/download");
  assert.equal(resolveMacAppStoreDestination("/download"), "/download");
  assert.equal(resolveMacAppStoreDestination("https://apple.invalid/app/capehelm/id1"), "/download");

  const productionHost = ["https://apps", "apple", "com"].join(".");
  const productionId = ["id", "1234567890"].join("");
  const productionUrl = `${productionHost}/ca/app/capehelm/${productionId}`;
  assert.equal(resolveMacAppStoreDestination(productionUrl), productionUrl);
});

test("major conversion locations share the pre-launch destination", async () => {
  const html = await render("/");
  const header = html.match(/<header class="site-header">[\s\S]*?<\/header>/)?.[0] ?? "";
  const hero = section(html, "hero section-shell");
  const midPage = section(html, "mid-page-cta");
  const finalCta = section(html, "final-cta");
  const footer = html.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)?.[0] ?? "";

  for (const [name, fragment] of [
    ["header", header],
    ["hero", hero],
    ["mid-page", midPage],
    ["final", finalCta],
    ["footer", footer],
  ]) {
    assert.match(fragment, /href="\/download"/, `${name} CTA should use the shared fallback`);
    assert.match(fragment, /Download on the Mac App Store/, `${name} CTA should have a descriptive label`);
  }

  assert.doesNotMatch(html, /class="button[^"]*"[^>]*>\s*Coming Soon/i);
});

test("repository does not contain a hardcoded App Store listing URL", async () => {
  const ignored = new Set([".git", ".next", ".vinext", ".wrangler", "dist", "node_modules"]);
  const sourceExtensions = new Set([".css", ".html", ".js", ".json", ".md", ".mjs", ".ts", ".tsx", ".yml"]);
  const files = [];

  async function collect(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (ignored.has(entry.name)) continue;
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) await collect(absolutePath);
      else if (sourceExtensions.has(path.extname(entry.name))) files.push(absolutePath);
    }
  }

  await collect(repositoryRoot);
  const contents = await Promise.all(files.map((file) => readFile(file, "utf8")));
  assert.equal(contents.filter((content) => /https?:\/\/(?:apps|itunes)\.apple\.com\//i.test(content)).length, 0);
});
