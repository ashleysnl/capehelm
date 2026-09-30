import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const productionOrigin = "https://capehelm.com";
const socialImage = `${productionOrigin}/assets/capehelm-social-1200x630.png`;
const socialImageAlt = "Capehelm personal finance app for Mac showing the financial dashboard";
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
].map(([route, file, title, description]) => ({ route, file, title, description }));

const pages = [
  {
    route: "/",
    file: "index.html",
    title: "Capehelm — Private Personal Finance for Mac",
    description:
      "Budget, forecast, understand spending, track net worth and plan retirement while keeping your financial data local on your Mac.",
    canonical: productionOrigin,
  },
  {
    route: "/features",
    file: "features.html",
    title: "Capehelm Features | Private Personal Finance for Mac",
    description:
      "Explore Capehelm features for Mac, including budgeting, 14-day cash-flow forecasting, transaction analysis, Trends, Net Worth, Retirement and local CSV import.",
  },
  {
    route: "/guides",
    file: "guides.html",
    title: "Personal Finance Guides | Capehelm",
    description:
      "Practical Capehelm guides to transaction analysis, budgeting, cash-flow forecasting and local-first personal finance.",
  },
  {
    route: "/guides/budget-vs-cash-flow-forecast",
    file: "guides/budget-vs-cash-flow-forecast.html",
    title: "Budget vs. Cash-Flow Forecast: What’s the Difference? | Capehelm",
    description:
      "Learn the difference between a monthly budget and a short-term cash-flow forecast, why both matter, and how a 14-day forecast can help you see what’s coming next.",
    openGraphType: "article",
  },
  {
    route: "/guides/do-personal-finance-apps-need-bank-access",
    file: "guides/do-personal-finance-apps-need-bank-access.html",
    title: "Do Personal Finance Apps Need Access to Your Bank Account? | Capehelm",
    description:
      "Personal finance apps don’t always need access to your bank account. Compare automatic bank connections with local CSV-based money management and understand the trade-offs.",
    openGraphType: "article",
  },
  {
    route: "/guides/how-to-forecast-personal-cash-flow-14-days",
    file: "guides/how-to-forecast-personal-cash-flow-14-days.html",
    title: "How to Forecast Your Personal Cash Flow for the Next 14 Days | Capehelm",
    description:
      "Learn how to build a simple 14-day personal cash-flow forecast, identify your lowest projected balance, and see upcoming financial pressure before it arrives.",
    openGraphType: "article",
  },
  {
    route: "/guides/how-to-analyze-bank-transactions-csv",
    file: "guides/how-to-analyze-bank-transactions-csv.html",
    title: "How to Analyze Your Bank Transactions From a CSV File | Capehelm",
    description:
      "Learn how to analyze bank transactions from a CSV file, clean merchant names, categorize spending, identify recurring expenses, and avoid double-counting transfers.",
    openGraphType: "article",
  },
  {
    route: "/faq",
    file: "faq.html",
    title: "Capehelm FAQ | Privacy, CSV Imports & Subscriptions",
    description:
      "Answers about Capehelm’s local-first Mac personal finance app, CSV statement imports, privacy, backups, subscriptions, compatibility and support.",
  },
  {
    route: "/privacy",
    file: "privacy.html",
    title: "Capehelm Privacy Policy | Local-First Finance Data",
    description:
      "Learn how Capehelm keeps personal finance data local on your Mac, avoids bank credentials, and limits network use to services such as Apple StoreKit.",
  },
  {
    route: "/support",
    file: "support.html",
    title: "Capehelm Support",
    description:
      "Find Capehelm setup guides and troubleshooting for Finance Documents, CSV imports, Categories, Budget, Forecast, backups, and subscription access.",
  },
  ...supportArticlePages,
  {
    route: "/download",
    file: "download.html",
    title: "Download Capehelm for Mac | Capehelm",
    description:
      "Capehelm is coming soon for Mac with private, local-first personal finance tools for budgeting, forecasting, Trends, Net Worth and retirement planning.",
  },
  {
    route: "/personal-finance-for-mac",
    file: "personal-finance-for-mac.html",
    title: "Personal Finance Software Built for Mac | Capehelm",
    description:
      "Explore Capehelm, a local-first personal finance app for macOS that connects transactions, budgets, 14-day forecasting, trends, net worth and retirement in one Finance Document.",
  },
  {
    route: "/cash-flow-forecast",
    file: "cash-flow-forecast.html",
    title: "Household Cash Flow Forecast for Mac | Capehelm",
    description:
      "See upcoming income, bills, planned spending and projected checking balances with Capehelm’s rolling 14-day household cash-flow Forecast for Mac.",
  },
  {
    route: "/private-personal-finance",
    file: "private-personal-finance.html",
    title: "Private, Local-First Personal Finance for Mac | Capehelm",
    description:
      "Learn how Capehelm keeps transactions, budgets, forecasts and Finance Documents local while limiting network use to clearly defined services such as Apple StoreKit.",
  },
  {
    route: "/csv-bank-statement-import",
    file: "csv-bank-statement-import.html",
    title: "Import Bank Statement CSVs on Mac | Capehelm",
    description:
      "Import bank and card statement CSV files locally on your Mac, confirm column mapping, review transactions and Categories, and turn that history into useful financial context.",
  },
].map((page) => ({ ...page, canonical: page.canonical ?? `${productionOrigin}${page.route}` }));

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function values(html, attribute, key) {
  const pattern = new RegExp(
    `<meta ${attribute}="${escapeRegExp(key)}" content="([^"]*)"`,
    "g",
  );
  return [...html.matchAll(pattern)].map((match) => decodeHtml(match[1]));
}

async function readBuiltPage(file) {
  return readFile(new URL(`../dist/client/${file}`, import.meta.url), "utf8");
}

test("every public page renders one complete, canonical Open Graph and Twitter card", async () => {
  for (const page of pages) {
    const html = await readBuiltPage(page.file);
    const expected = new Map([
      ["og:title", page.title],
      ["og:description", page.description],
      ["og:image", socialImage],
      ["og:image:width", "1200"],
      ["og:image:height", "630"],
      ["og:image:alt", socialImageAlt],
      ["og:url", page.canonical],
      ["og:type", page.openGraphType ?? "website"],
      ["og:site_name", "Capehelm"],
    ]);

    for (const [key, expectedValue] of expected) {
      assert.deepEqual(values(html, "property", key), [expectedValue], `${page.route} ${key}`);
    }

    const twitter = new Map([
      ["twitter:card", "summary_large_image"],
      ["twitter:title", page.title],
      ["twitter:description", page.description],
      ["twitter:image", socialImage],
      ["twitter:image:alt", socialImageAlt],
    ]);

    for (const [key, expectedValue] of twitter) {
      assert.deepEqual(values(html, "name", key), [expectedValue], `${page.route} ${key}`);
    }

    assert.doesNotMatch(html, /twitter:(?:site|creator)/i, `${page.route} invented account`);
    assert.doesNotMatch(
      html,
      /localhost|github\.io|file:\/\/|connect\.facebook\.net|platform\.twitter\.com/i,
      `${page.route} preview metadata`,
    );
  }
});

test("social titles and descriptions remain page-specific", () => {
  assert.equal(new Set(pages.map(({ title }) => title)).size, pages.length);
  assert.equal(new Set(pages.map(({ description }) => description)).size, pages.length);
});

test("the shared social image is an exact, reasonably sized 1200 by 630 PNG", async () => {
  const image = await readFile(
    new URL("../public/assets/capehelm-social-1200x630.png", import.meta.url),
  );

  assert.deepEqual([...image.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  assert.ok(image.byteLength < 750_000, `social image is ${image.byteLength} bytes`);
});

test("Open Graph changes preserve the homepage SoftwareApplication JSON-LD", async () => {
  const html = await readBuiltPage("index.html");

  assert.equal((html.match(/type="application\/ld\+json"/g) ?? []).length, 1);
  assert.match(html, /"@type":"SoftwareApplication"/);
});
