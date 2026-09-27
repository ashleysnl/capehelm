import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const landingPages = [
  {
    route: "/personal-finance-for-mac",
    file: "personal-finance-for-mac.html",
    h1: /Personal Finance Software[\s\S]*Built for Mac/,
    screenshot: "capehelm-dashboard-1400.webp",
    distinct: [/A Mac workspace, not another finance tab/, /Past, present and future have different jobs/, /Who Capehelm may suit/],
  },
  {
    route: "/cash-flow-forecast",
    file: "cash-flow-forecast.html",
    h1: /See Your Household Cash Flow[\s\S]*Before It Happens/,
    screenshot: "capehelm-forecast-1400.webp",
    distinct: [/rolling 14-day Forecast/i, /Budget and Forecast solve different parts/, /Forecast Coverage/],
  },
  {
    route: "/private-personal-finance",
    file: "private-personal-finance.html",
    h1: /Your Financial Data[\s\S]*Stays With You/,
    screenshot: "capehelm-dashboard-1400.webp",
    distinct: [/The file is the financial workspace/, /No finance-data telemetry/, /What still uses the internet/],
  },
  {
    route: "/csv-bank-statement-import",
    file: "csv-bank-statement-import.html",
    h1: /Turn Bank Statement CSVs Into a[\s\S]*Financial Picture/,
    screenshot: "capehelm-trends-1400.webp",
    distinct: [/A practical local import workflow/, /Confirm the mapping/, /What happens if I import the same statement twice/],
  },
];

async function readPage(file) {
  return readFile(new URL(`../dist/client/${file}`, import.meta.url), "utf8");
}

test("four SEO pages provide distinct, substantive product guidance", async () => {
  for (const page of landingPages) {
    const html = await readPage(page.file);
    const body = html.match(/<body>([\s\S]*?)<script/)?.[1] ?? html;

    assert.equal((body.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1, `${page.route} H1`);
    assert.match(body, page.h1);
    assert.match(body, new RegExp(page.screenshot.replace(".", "\\.")));
    assert.match(body, /href="\/features(?:#[^"]+)?"/);
    assert.match(body, /Download on the Mac App Store/);
    assert.match(body, /fictional|demo data/i);
    for (const pattern of page.distinct) assert.match(body, pattern);

    assert.doesNotMatch(
      body,
      /Plaid|guaranteed privacy|best Mac finance app|connects directly to your bank|automatically downloads transactions|provides a real-time bank feed/i,
    );
    assert.doesNotMatch(html, /"@type":"(?:FAQPage|QAPage)"/);
  }
});

test("landing pages expose unique page-specific Open Graph metadata", async () => {
  const titles = [];
  const descriptions = [];
  const urls = [];

  for (const page of landingPages) {
    const html = await readPage(page.file);
    const title = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1];
    const description = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1];
    const url = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
    assert.ok(title, `${page.route} og:title`);
    assert.ok(description, `${page.route} og:description`);
    assert.equal(url, `https://capehelm.com${page.route}`);
    titles.push(title);
    descriptions.push(description);
    urls.push(url);
  }

  assert.equal(new Set(titles).size, landingPages.length);
  assert.equal(new Set(descriptions).size, landingPages.length);
  assert.equal(new Set(urls).size, landingPages.length);
});

test("existing high-intent pages link contextually into the landing-page hierarchy", async () => {
  const [home, features, privacy, support, faq] = await Promise.all(
    ["index.html", "features.html", "privacy.html", "support.html", "faq.html"].map(readPage),
  );
  const source = `${home}\n${features}\n${privacy}\n${support}\n${faq}`;

  for (const { route } of landingPages) {
    assert.match(source, new RegExp(`href="${route}"`), route);
  }
  assert.match(home, /href="\/cash-flow-forecast"/);
  assert.match(home, /href="\/private-personal-finance"/);
  assert.match(home, /href="\/csv-bank-statement-import"/);
  assert.match(home, /href="\/personal-finance-for-mac"/);
});

test("landing pages cross-link without duplicating SoftwareApplication schema", async () => {
  const pages = await Promise.all(landingPages.map(({ file }) => readPage(file)));
  const combined = pages.join("\n");

  for (const { route } of landingPages) {
    assert.match(combined, new RegExp(`href="${route}(?:#[^"]+)?"`));
  }
  assert.doesNotMatch(combined, /"@type":"SoftwareApplication"/);
});
