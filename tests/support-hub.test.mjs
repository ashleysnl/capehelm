import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const expectedImages = [
  "getting-started/02-open-finance-document.png",
  "getting-started/03-import-transactions.png",
  "getting-started/04-review-categories.png",
  "getting-started/05-setup-budget.png",
  "getting-started/06-use-forecast.png",
  "getting-started/07-backup-capehelm.png",
  "troubleshooting/03-restore-purchases.png",
  "troubleshooting/04-subscription-access.png",
];

const expectedRoutes = [
  "support/getting-started/create-finance-document.html",
  "support/getting-started/open-finance-document.html",
  "support/getting-started/import-transactions.html",
  "support/getting-started/review-categories.html",
  "support/getting-started/setup-budget.html",
  "support/getting-started/use-forecast.html",
  "support/getting-started/back-up-capehelm.html",
  "support/troubleshooting/csv-will-not-import.html",
  "support/troubleshooting/finance-document-will-not-open.html",
  "support/troubleshooting/restore-purchases.html",
  "support/troubleshooting/subscription-access.html",
  "support/troubleshooting/backup-and-restore.html",
  "support/troubleshooting/moving-renaming-finance-document.html",
  "support/troubleshooting/remembered-document-issues.html",
];

test("the support catalogue contains fourteen unique article slugs", async () => {
  const source = await readFile(new URL("../content/supportArticles.ts", import.meta.url), "utf8");
  const slugs = [...source.matchAll(/^    slug: "([^"]+)",$/gm)].map((match) => match[1]);

  assert.equal(slugs.length, 14);
  assert.equal(new Set(slugs).size, 14);
});

test("only the eight approved READY screenshots are published and referenced", async () => {
  const source = await readFile(new URL("../content/supportArticles.ts", import.meta.url), "utf8");
  const referenced = [...source.matchAll(/src: "\/images\/support\/([^"]+\.png)"/g)]
    .map((match) => match[1])
    .sort();
  const published = [];

  for (const category of ["getting-started", "troubleshooting"]) {
    const files = await readdir(new URL(`../public/images/support/${category}/`, import.meta.url));
    published.push(...files.filter((file) => file.endsWith(".png")).map((file) => `${category}/${file}`));
  }

  assert.deepEqual(referenced, expectedImages.toSorted());
  assert.deepEqual(published.sort(), expectedImages.toSorted());
});

test("all fourteen support article routes are emitted by the static build", async () => {
  for (const route of expectedRoutes) {
    await access(new URL(`../dist/client/${route}`, import.meta.url));
  }
});

test("the support contact repeats the financial-data warning and offers email only", async () => {
  const component = await readFile(new URL("../components/Support.tsx", import.meta.url), "utf8");
  assert.match(component, /Never email personal financial data to Capehelm Support\./);
  assert.match(component, /mailto:support@capehelm\.com/);
  assert.doesNotMatch(component, /<form|type="file"|upload/i);
});

test("the Phase 1 manifest remains developer documentation", async () => {
  const manifest = await readFile(new URL("../docs/support-screenshot-manifest.md", import.meta.url), "utf8");
  assert.match(manifest, /Articles marked `READY`: 8/);
  assert.match(manifest, /Articles marked `MANUAL CAPTURE REQUIRED`: 6/);
});
