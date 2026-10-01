import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const productionOrigin = "https://capehelm.com";
const supportArticlePages = [
  ["/support/getting-started/create-finance-document", "support/getting-started/create-finance-document.html", "Create a Finance Document in Capehelm", "Learn how to create a Capehelm Finance Document with the standard macOS save flow and choose CAD or USD."],
  ["/support/getting-started/open-finance-document", "support/getting-started/open-finance-document.html", "Open a Finance Document in Capehelm", "Open an existing Capehelm .pfinance package from Settings, General, and Current Finance File."],
  ["/support/getting-started/import-transactions", "support/getting-started/import-transactions.html", "Import Transactions in Capehelm", "Use Capehelm’s local Statement, Confirm, Review, and Import workflow for a downloaded CSV bank statement."],
  ["/support/getting-started/review-categories", "support/getting-started/review-categories.html", "Review Categories in Capehelm", "Use Categories, Review, and Needs Attention to work through category groups that require review in Capehelm."],
  ["/support/getting-started/setup-budget", "support/getting-started/setup-budget.html", "Set Up Budget in Capehelm", "Use Capehelm Budget Builder to review or edit group and Category targets and apply them to the monthly budget."],
  ["/support/getting-started/use-forecast", "support/getting-started/use-forecast.html", "Use the 14-Day Forecast in Capehelm", "Understand Capehelm Forecast, including safe-to-spend, projected balances, upcoming forecast items, and workspace tabs."],
  ["/support/getting-started/back-up-capehelm", "support/getting-started/back-up-capehelm.html", "Back Up Capehelm", "Use Settings, General, Backup Status, Back Up Now, and Manage Backups to begin protecting Capehelm data."],
  ["/support/troubleshooting/csv-will-not-import", "support/troubleshooting/csv-will-not-import.html", "Capehelm CSV Import Troubleshooting", "Resolve Capehelm CSV import problems involving headers, delimiters, dates, mappings, currencies, row diagnostics, and duplicates."],
  ["/support/troubleshooting/finance-document-will-not-open", "support/troubleshooting/finance-document-will-not-open.html", "Capehelm Finance Document Will Not Open", "Use Locate Document, Open Another Document, or Create New Finance Document when a Capehelm .pfinance package will not open."],
  ["/support/troubleshooting/restore-purchases", "support/troubleshooting/restore-purchases.html", "Restore Capehelm Purchases", "Use Settings, Capehelm Access, and Restore Purchases to refresh verified Monthly or Annual subscription access."],
  ["/support/troubleshooting/subscription-access", "support/troubleshooting/subscription-access.html", "Capehelm Subscription Access Help", "Use Try Again, Restore Purchases, or Continue with Demo when Capehelm subscription access is unavailable."],
  ["/support/troubleshooting/backup-and-restore", "support/troubleshooting/backup-and-restore.html", "Back Up and Restore Capehelm", "Select a Capehelm backup destination, use Back Up Now, manage backups, and restore a validated .pfbackup.zip archive."],
  ["/support/troubleshooting/moving-renaming-finance-document", "support/troubleshooting/moving-renaming-finance-document.html", "Move or Rename a Capehelm Finance Document", "Learn how Capehelm follows a moved or renamed .pfinance package and how to locate it again when needed."],
  ["/support/troubleshooting/remembered-document-issues", "support/troubleshooting/remembered-document-issues.html", "Capehelm Remembered-Document Launch Help", "Recover at app launch with Locate Document, Open Another Document, or Create New Finance Document."],
].map(([route, file, title, description]) => ({ route, file, title, description, canonical: `${productionOrigin}${route}` }));

const pages = [
  {
    route: "/",
    file: "index.html",
    title: "Personal Finance App for Mac | Capehelm",
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
    route: "/guides",
    file: "guides.html",
    title: "Personal Finance Guides | Capehelm",
    description:
      "Practical Capehelm guides to net worth, transaction analysis, budgeting, cash-flow forecasting and local-first personal finance.",
    canonical: `${productionOrigin}/guides`,
  },
  {
    route: "/guides/budget-vs-cash-flow-forecast",
    file: "guides/budget-vs-cash-flow-forecast.html",
    title: "Budget vs. Cash-Flow Forecast: What’s the Difference? | Capehelm",
    description:
      "Learn the difference between a monthly budget and a short-term cash-flow forecast, why both matter, and how a 14-day forecast can help you see what’s coming next.",
    canonical: `${productionOrigin}/guides/budget-vs-cash-flow-forecast`,
  },
  {
    route: "/guides/do-personal-finance-apps-need-bank-access",
    file: "guides/do-personal-finance-apps-need-bank-access.html",
    title: "Do Personal Finance Apps Need Access to Your Bank Account? | Capehelm",
    description:
      "Personal finance apps don’t always need access to your bank account. Compare automatic bank connections with local CSV-based money management and understand the trade-offs.",
    canonical: `${productionOrigin}/guides/do-personal-finance-apps-need-bank-access`,
  },
  {
    route: "/guides/how-to-forecast-personal-cash-flow-14-days",
    file: "guides/how-to-forecast-personal-cash-flow-14-days.html",
    title: "How to Forecast Your Personal Cash Flow for the Next 14 Days | Capehelm",
    description:
      "Learn how to build a simple 14-day personal cash-flow forecast, identify your lowest projected balance, and see upcoming financial pressure before it arrives.",
    canonical: `${productionOrigin}/guides/how-to-forecast-personal-cash-flow-14-days`,
  },
  {
    route: "/guides/how-to-analyze-bank-transactions-csv",
    file: "guides/how-to-analyze-bank-transactions-csv.html",
    title: "How to Analyze Your Bank Transactions From a CSV File | Capehelm",
    description:
      "Learn how to analyze bank transactions from a CSV file, clean merchant names, categorize spending, identify recurring expenses, and avoid double-counting transfers.",
    canonical: `${productionOrigin}/guides/how-to-analyze-bank-transactions-csv`,
  },
  {
    route: "/guides/how-to-track-net-worth-without-bank-connections",
    file: "guides/how-to-track-net-worth-without-bank-connections.html",
    title: "How to Track Your Net Worth Without Connecting Your Bank Accounts | Capehelm",
    description:
      "Learn how to track assets, liabilities and net-worth history manually, understand contributions and debt repayment, and monitor long-term financial progress without linking your bank accounts.",
    canonical: `${productionOrigin}/guides/how-to-track-net-worth-without-bank-connections`,
  },
  {
    route: "/why-capehelm",
    file: "why-capehelm.html",
    title: "Why I Built Capehelm | Founder Story",
    description:
      "Ashley Skinner, founder of Capehelm and a project engineer, shares the story behind Capehelm, a private personal finance app for Mac.",
    canonical: `${productionOrigin}/why-capehelm`,
  },
  {
    route: "/faq",
    file: "faq.html",
    title: "Capehelm FAQ | Privacy, CSV Imports & Subscriptions",
    description:
      "Answers about Capehelm’s local-first Mac personal finance app, CSV statement imports, privacy, backups, subscriptions, compatibility and support.",
    canonical: `${productionOrigin}/faq`,
  },
  {
    route: "/privacy",
    file: "privacy.html",
    title: "Capehelm Privacy Policy | Local-First Finance Data",
    description:
      "Learn how Capehelm keeps personal finance data local on your Mac, avoids bank credentials, and limits network use to services such as Apple StoreKit.",
    canonical: `${productionOrigin}/privacy`,
  },
  {
    route: "/support",
    file: "support.html",
    title: "Capehelm Support",
    description:
      "Find Capehelm setup guides and troubleshooting for Finance Documents, CSV imports, Categories, Budget, Forecast, backups, and subscription access.",
    canonical: `${productionOrigin}/support`,
  },
  ...supportArticlePages,
  {
    route: "/download",
    file: "download.html",
    title: "Download Capehelm for Mac | Capehelm",
    description:
      "Download Capehelm from the Mac App Store. Budget, forecast cash flow, understand spending and track long-term progress while keeping your financial data local.",
    canonical: `${productionOrigin}/download`,
  },
  {
    route: "/personal-finance-for-mac",
    file: "personal-finance-for-mac.html",
    title: "Personal Finance Software Built for Mac | Capehelm",
    description:
      "Explore Capehelm, a local-first personal finance app for macOS that connects transactions, budgets, 14-day forecasting, trends, net worth and retirement in one Finance Document.",
    canonical: `${productionOrigin}/personal-finance-for-mac`,
  },
  {
    route: "/cash-flow-forecast",
    file: "cash-flow-forecast.html",
    title: "Household Cash Flow Forecast for Mac | Capehelm",
    description:
      "See upcoming income, bills, planned spending and projected checking balances with Capehelm’s rolling 14-day household cash-flow Forecast for Mac.",
    canonical: `${productionOrigin}/cash-flow-forecast`,
  },
  {
    route: "/private-personal-finance",
    file: "private-personal-finance.html",
    title: "Private, Local-First Personal Finance for Mac | Capehelm",
    description:
      "Learn how Capehelm keeps transactions, budgets, forecasts and Finance Documents local while limiting network use to clearly defined services such as Apple StoreKit.",
    canonical: `${productionOrigin}/private-personal-finance`,
  },
  {
    route: "/csv-bank-statement-import",
    file: "csv-bank-statement-import.html",
    title: "Import Bank Statement CSVs on Mac | Capehelm",
    description:
      "Import bank and card statement CSV files locally on your Mac, confirm column mapping, review transactions and Categories, and turn that history into useful financial context.",
    canonical: `${productionOrigin}/csv-bank-statement-import`,
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
      assert.match(image, /\saria-(?:label|labelledby)="[^"]+"/i, `${page.route} role=img label`);
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
      if (/^[a-z][a-z0-9+.-]*:/i.test(href)) continue;

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
