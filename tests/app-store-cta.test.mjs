import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import {
  macAppStoreDestination,
  macAppStoreFallbackUrl,
  macAppStoreUrl,
  resolveMacAppStoreDestination,
  siteConfig,
} from "../config/site.ts";

const repositoryRoot = path.resolve(import.meta.dirname, "..");

async function render(route = "/") {
  const relativePath = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  return readFile(path.join(repositoryRoot, "dist/client", relativePath), "utf8");
}

function section(html, className) {
  return html.match(new RegExp(`<section class="[^"]*${className}[^"]*"[\\s\\S]*?<\\/section>`))?.[0] ?? "";
}

test("App Store destination uses the verified Capehelm listing and rejects invalid alternatives", () => {
  const capehelmListing = ["https://apps.apple.com/us/app/capehelm/", "id6813935886"].join("");

  assert.equal(macAppStoreUrl, capehelmListing);
  assert.equal(macAppStoreFallbackUrl, "/download");
  assert.equal(macAppStoreDestination, capehelmListing);
  assert.equal(siteConfig.download.status, "available");
  assert.equal(siteConfig.download.isExternal, true);
  assert.equal(resolveMacAppStoreDestination(undefined), "/download");
  assert.equal(resolveMacAppStoreDestination("/download"), "/download");
  assert.equal(resolveMacAppStoreDestination("https://apple.invalid/app/capehelm/id1"), "/download");

  const productionHost = ["https://apps", "apple", "com"].join(".");
  const productionId = ["id", "1234567890"].join("");
  const productionUrl = `${productionHost}/ca/app/capehelm/${productionId}`;
  assert.equal(resolveMacAppStoreDestination(productionUrl), productionUrl);
});

test("major conversion locations share the live App Store destination", async () => {
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
    assert.match(fragment, /href="https:\/\/apps\.apple\.com\/us\/app\/capehelm\/id6813935886"/, `${name} CTA should use the shared listing`);
    const expectedLabel = name === "footer" ? /Mac App Store/ : /Download on the Mac App Store/;
    assert.match(fragment, expectedLabel, `${name} CTA should have a descriptive label`);
    assert.match(fragment, /target="_blank"/, `${name} CTA should preserve the website`);
    assert.match(fragment, /rel="external noopener noreferrer"/, `${name} CTA should identify a safe external link`);
  }

  assert.doesNotMatch(html, /Coming Soon|not yet available|No release date announced/i);
});

test("every rendered App Store link uses the verified external destination", async () => {
  const htmlFiles = [];
  const builtRoot = path.join(repositoryRoot, "dist/client");
  const expectedUrl = ["https://apps.apple.com/us/app/capehelm/", "id6813935886"].join("");

  async function collectHtml(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) await collectHtml(absolutePath);
      else if (entry.name.endsWith(".html")) htmlFiles.push(absolutePath);
    }
  }

  await collectHtml(builtRoot);
  let appStoreLinkCount = 0;

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)]
      .filter((match) => /(?:apps|itunes)\.apple\.com/i.test(match[1]));

    for (const link of links) {
      appStoreLinkCount += 1;
      assert.equal(link[1], expectedUrl, `${file} App Store destination`);
      assert.match(link[0], /target="_blank"/, `${file} external target`);
      assert.match(link[0], /rel="external noopener noreferrer"/, `${file} external rel`);
    }
  }

  assert.ok(appStoreLinkCount > htmlFiles.length, "expected shared App Store links across every public page");
});

test("repository keeps the App Store listing centralized in site configuration", async () => {
  const ignored = new Set([".git", ".next", ".vinext", ".wrangler", "dist", "node_modules", "tests"]);
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
  const matches = [];
  for (const file of files) {
    const content = await readFile(file, "utf8");
    if (/https?:\/\/(?:apps|itunes)\.apple\.com\//i.test(content)) matches.push(file);
  }

  assert.deepEqual(matches, [path.join(repositoryRoot, "config/site.ts")]);
});
