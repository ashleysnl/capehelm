import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const productionOrigin = "https://capehelm.com";
const pages = [
  {
    route: "/",
    file: "index.html",
    title: "Capehelm | Private Personal Finance & Budgeting for Mac",
    description:
      "Capehelm is a private personal finance app for Mac with budgeting, 14-day cash-flow forecasting, spending analysis, net worth and retirement planning. Your financial data stays local.",
    canonical: productionOrigin,
  },
  {
    route: "/features",
    file: "features.html",
    title: "Capehelm Features | Private Personal Finance for Mac",
    description:
      "Explore Capehelm features for Mac, including budgeting, 14-day cash-flow forecasting, transaction analysis, Trends, Net Worth, Retirement and local CSV import.",
    canonical: `${productionOrigin}/features`,
  },
  {
    route: "/privacy",
    file: "privacy.html",
    title: "Private, Local-First Personal Finance for Mac | Capehelm",
    description:
      "Learn how Capehelm keeps personal finance data local on your Mac, avoids bank credentials, and limits network use to services such as Apple StoreKit.",
    canonical: `${productionOrigin}/privacy`,
  },
  {
    route: "/support",
    file: "support.html",
    title: "Capehelm Support | Help, Setup & Troubleshooting",
    description:
      "Get help with Capehelm setup, importing transactions, Finance Documents, backups, subscriptions and common troubleshooting for the Mac app.",
    canonical: `${productionOrigin}/support`,
  },
  {
    route: "/download",
    file: "download.html",
    title: "Download Capehelm for Mac | Capehelm",
    description:
      "Capehelm is coming soon for Mac with private, local-first personal finance tools for budgeting, forecasting, Trends, Net Worth and retirement planning.",
    canonical: `${productionOrigin}/download`,
  },
];

const routeFiles = new Map(pages.map(({ route, file }) => [route, file]));

async function readBuiltPage(file) {
  return readFile(new URL(`../dist/client/${file}`, import.meta.url), "utf8");
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function attributeValues(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => decodeHtml(match[1]));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

test("public pages have unique titles, descriptions and production canonicals", async () => {
  const rendered = await Promise.all(
    pages.map(async (page) => ({ ...page, html: await readBuiltPage(page.file) })),
  );

  for (const page of rendered) {
    const titles = attributeValues(page.html, /<title>([^<]*)<\/title>/g);
    const descriptions = attributeValues(
      page.html,
      /<meta name="description" content="([^"]*)"/g,
    );
    const canonicals = attributeValues(
      page.html,
      /<link rel="canonical" href="([^"]*)"/g,
    );

    assert.deepEqual(titles, [page.title], `${page.route} title`);
    assert.deepEqual(descriptions, [page.description], `${page.route} description`);
    assert.deepEqual(canonicals, [page.canonical], `${page.route} canonical`);
    assert.doesNotMatch(canonicals[0], /localhost|github\.io|capehelm\.ca/i);
    assert.doesNotMatch(
      page.html,
      /<meta name="robots" content="[^"]*(?:noindex|nofollow)/i,
      `${page.route} crawl directive`,
    );
  }

  assert.equal(new Set(rendered.map(({ title }) => title)).size, rendered.length);
  assert.equal(new Set(rendered.map(({ description }) => description)).size, rendered.length);
  assert.equal(new Set(rendered.map(({ canonical }) => canonical)).size, rendered.length);
});

test("public page heading outlines start with one h1 and do not skip levels", async () => {
  for (const page of pages) {
    const html = await readBuiltPage(page.file);
    const headings = [...html.matchAll(/<h([1-6])(?:\s[^>]*)?>/gi)].map((match) =>
      Number(match[1]),
    );

    assert.equal(headings.filter((level) => level === 1).length, 1, `${page.route} h1 count`);
    assert.equal(headings[0], 1, `${page.route} first heading`);

    for (let index = 1; index < headings.length; index += 1) {
      assert.ok(
        headings[index] <= headings[index - 1] + 1,
        `${page.route} skips from h${headings[index - 1]} to h${headings[index]}`,
      );
    }
  }
});

test("public images have alt text or an accessible image label", async () => {
  for (const page of pages) {
    const html = await readBuiltPage(page.file);
    const images = html.match(/<img\b[^>]*>/gi) ?? [];
    const roleImages = html.match(/<[^>]+role="img"[^>]*>/gi) ?? [];

    for (const image of images) {
      assert.match(image, /\salt="[^"]*"/i, `${page.route} image alt attribute`);
    }
    for (const image of roleImages) {
      assert.match(image, /\saria-label="[^"]+"/i, `${page.route} role=img label`);
    }
  }
});

test("internal links use real clean routes and valid fragments", async () => {
  const htmlByRoute = new Map(
    await Promise.all(
      pages.map(async ({ route, file }) => [route, await readBuiltPage(file)]),
    ),
  );

  for (const [route, html] of htmlByRoute) {
    const links = attributeValues(html, /<a[^>]+href="([^"]*)"/g);

    for (const href of links) {
      assert.doesNotMatch(href, /localhost|github\.io/i, `${route} link origin`);
      if (href.startsWith("mailto:")) continue;

      const [rawPath, fragment] = href.split("#");
      const targetRoute = rawPath || route;
      assert.ok(routeFiles.has(targetRoute), `${route} links to unknown route ${href}`);
      assert.ok(
        targetRoute === "/" || (!targetRoute.endsWith("/") && !targetRoute.endsWith(".html")),
        `${route} links to noncanonical route ${href}`,
      );

      if (fragment) {
        assert.match(
          htmlByRoute.get(targetRoute),
          new RegExp(`\\sid="${escapeRegExp(fragment)}"`),
          `${route} links to missing fragment ${href}`,
        );
      }
    }
  }
});

test("the error page is non-indexable and has no canonical", async () => {
  const html = await readBuiltPage("404.html");
  const canonicals = attributeValues(html, /<link rel="canonical" href="([^"]*)"/g);
  const robots = attributeValues(html, /<meta name="robots" content="([^"]*)"/g);

  assert.deepEqual(canonicals, []);
  assert.deepEqual(robots, ["noindex"]);
});
