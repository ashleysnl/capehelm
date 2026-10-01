import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const articleRoute = "/guides/budget-vs-cash-flow-forecast";
const bankAccessRoute = "/guides/do-personal-finance-apps-need-bank-access";
const forecastHowToRoute = "/guides/how-to-forecast-personal-cash-flow-14-days";
const csvAnalysisRoute = "/guides/how-to-analyze-bank-transactions-csv";
const netWorthRoute = "/guides/how-to-track-net-worth-without-bank-connections";

async function readBuiltPage(file) {
  return readFile(new URL(`../dist/client/${file}`, import.meta.url), "utf8");
}

test("guides index exposes all five educational articles", async () => {
  const html = await readBuiltPage("guides.html");

  assert.match(html, /<h1>Clear thinking for <em>everyday finances\.<\/em><\/h1>/);
  assert.match(html, /Budget vs\. Cash-Flow Forecast/);
  assert.match(html, /Do Personal Finance Apps Need Access to Your Bank Account/);
  assert.match(html, /How to Forecast Your Personal Cash Flow for the Next 14 Days/);
  assert.match(html, /How to Analyze Your Bank Transactions From a CSV File/);
  assert.match(html, /How to Track Your Net Worth Without Connecting Your Bank Accounts/);
  assert.match(html, new RegExp(`href="${articleRoute}"`));
  assert.match(html, new RegExp(`href="${bankAccessRoute}"`));
  assert.match(html, new RegExp(`href="${forecastHowToRoute}"`));
  assert.match(html, new RegExp(`href="${csvAnalysisRoute}"`));
  assert.match(html, new RegExp(`href="${netWorthRoute}"`));
  assert.match(html, /Budget[^<]*<\/span><i[^>]*>→<\/i><span>Actuals/);
  assert.match(html, /Bank[^<]*<\/span><i[^>]*>→<\/i><span>CSV/);
  assert.match(html, /\$878k assets[\s\S]*\$438k owed[\s\S]*\$440k net worth/);
});

test("budget and cash-flow guide preserves the editorial substance and restrained product links", async () => {
  const html = await readBuiltPage("guides/budget-vs-cash-flow-forecast.html");
  const body = html;

  assert.equal((body.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1);
  assert.match(body, /A budget tells you what you planned/);
  assert.match(body, /A forecast answers/);
  assert.match(body, /Budgeting and forecasting aren(?:'|&#x27;)t competitors/);
  assert.match(body, /The idea came from project engineering/);
  assert.match(body, /Why I like a short forecast/);
  assert.match(body, /A simple way to do this yourself/);
  assert.match(body, /Where Capehelm fits/);
  assert.match(body, /You need both/);
  assert.match(body, /href="\/features#stand"/);
  assert.match(body, /href="\/features#understand"/);
  assert.match(body, /href="\/features#plan"/);
  assert.match(body, /href="\/private-personal-finance"/);
  assert.match(body, /href="\/guides\/do-personal-finance-apps-need-bank-access"/);
  assert.match(body, /href="\/guides\/how-to-forecast-personal-cash-flow-14-days"/);
  assert.match(body, /href="\/guides\/how-to-track-net-worth-without-bank-connections"/);
  assert.match(body, /href="\/cash-flow-forecast"/);
  assert.match(body, /capehelm-forecast-1400\.webp/);
  assert.match(body, /fictional demo data/i);
  assert.doesNotMatch(body, /revolutionary|game-changing|act now|limited time/i);
});

test("bank-access guide preserves the balanced trade-off and product boundaries", async () => {
  const html = await readBuiltPage("guides/do-personal-finance-apps-need-bank-access.html");

  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1);
  assert.match(html, /Connecting your bank accounts can make personal finance apps more convenient/);
  assert.match(html, /There is nothing inherently wrong with choosing that convenience/);
  assert.match(html, /What happens when you connect a financial account/);
  assert.match(html, /Bring the transactions to the software/);
  assert.match(html, /Automatic vs\. manual: the real trade-off/);
  assert.match(html, /Why I chose local-first for Capehelm/);
  assert.match(html, /What you give up/);
  assert.match(html, /What you gain/);
  assert.match(html, /Privacy doesn(?:'|&#x27;)t mean ignoring security/);
  assert.match(html, /Neither answer is universally correct/);
  assert.match(html, /a little less automation in exchange for more control/);
  assert.match(html, /href="\/guides\/budget-vs-cash-flow-forecast"/);
  assert.match(html, /href="\/guides\/how-to-forecast-personal-cash-flow-14-days"/);
  assert.match(html, /href="\/guides\/how-to-analyze-bank-transactions-csv"/);
  assert.match(html, /href="\/guides\/how-to-track-net-worth-without-bank-connections"/);
  assert.match(html, /href="\/csv-bank-statement-import"/);
  assert.match(html, /href="\/private-personal-finance"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/features"/);
  assert.match(html, /href="\/personal-finance-for-mac"/);
  assert.doesNotMatch(html, /inherently unsafe|guaranteed privacy|immune to security|revolutionary|game-changing/i);
});

test("guide metadata and Article schema describe the canonical article", async () => {
  const html = await readBuiltPage("guides/budget-vs-cash-flow-forecast.html");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  assert.match(html, /<title>Budget vs\. Cash-Flow Forecast: What’s the Difference\? \| Capehelm<\/title>/);
  assert.match(html, /<meta name="description" content="Learn the difference between a monthly budget and a short-term cash-flow forecast/);
  assert.match(html, /<link rel="canonical" href="https:\/\/capehelm\.com\/guides\/budget-vs-cash-flow-forecast"/);
  assert.match(html, /<meta property="og:type" content="article"/);
  assert.match(html, /<meta property="article:published_time" content="2026-09-28"/);
  assert.equal(scripts.length, 1);

  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema["@type"], "Article");
  assert.equal(schema.url, `https://capehelm.com${articleRoute}`);
  assert.equal(schema.datePublished, "2026-09-28");
  assert.equal(schema.author.name, "Ashley Skinner");
  assert.equal(schema.publisher.name, "Capehelm");
});

test("guide visuals use semantic, mobile-safe structures", async () => {
  const html = await readBuiltPage("guides/budget-vs-cash-flow-forecast.html");

  assert.match(html, /<figure class="guide-flow"/);
  assert.match(html, /<figure class="guide-forecast-card"/);
  assert.equal((html.match(/class="guide-forecast-(?:starting|income|expense)"/g) ?? []).length, 6);
  assert.match(html, /<table class="guide-budget-table">/);
  assert.match(html, /<caption>Example monthly household budget<\/caption>/);
});

test("bank-access metadata and Article schema describe the canonical article", async () => {
  const html = await readBuiltPage("guides/do-personal-finance-apps-need-bank-access.html");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  assert.match(html, /<title>Do Personal Finance Apps Need Access to Your Bank Account\? \| Capehelm<\/title>/);
  assert.match(html, /<meta name="description" content="Personal finance apps don’t always need access to your bank account/);
  assert.match(html, /<link rel="canonical" href="https:\/\/capehelm\.com\/guides\/do-personal-finance-apps-need-bank-access"/);
  assert.match(html, /<meta property="og:type" content="article"/);
  assert.match(html, /<meta property="article:published_time" content="2026-09-28"/);
  assert.equal(scripts.length, 1);

  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema["@type"], "Article");
  assert.equal(schema.url, `https://capehelm.com${bankAccessRoute}`);
  assert.equal(schema.datePublished, "2026-09-28");
  assert.equal(schema.author.name, "Ashley Skinner");
  assert.equal(schema.publisher.name, "Capehelm");
});

test("bank-access visuals are semantic and present both models neutrally", async () => {
  const html = await readBuiltPage("guides/do-personal-finance-apps-need-bank-access.html");

  assert.match(html, /<figure class="guide-connection-models"/);
  assert.match(html, /Connected model/);
  assert.match(html, /Capehelm \/ local-first model/);
  assert.match(html, /<figure class="guide-comparison"/);
  assert.match(html, /<table>/);
  assert.match(html, /Bank-connected/);
  assert.match(html, /Manual \/ local/);
  assert.match(html, /<figure class="guide-process-strip"/);
  assert.match(html, /Export[\s\S]*Import[\s\S]*Review[\s\S]*Understand/);
  assert.match(html, /<caption>Example transaction CSV<\/caption>/);
});

test("14-day forecast guide preserves the worked example and cross-links", async () => {
  const html = await readBuiltPage("guides/how-to-forecast-personal-cash-flow-14-days.html");

  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1);
  assert.match(html, /A simple two-week cash-flow forecast can show you where your bank balance is headed/);
  assert.match(html, /What is a personal cash-flow forecast/);
  assert.match(html, /The lowest point matters more than the ending point/);
  assert.match(html, /Start with money actually available/);
  assert.match(html, /Estimate variable spending/);
  assert.match(html, /Your bank balance isn(?:'|&#x27;)t the same as available money/);
  assert.match(html, /Why use 14 days/);
  assert.match(html, /You can build this in a spreadsheet/);
  assert.match(html, /How Capehelm approaches forecasting/);
  assert.match(html, /\$2,560 on Day 11/);
  assert.match(html, /href="\/guides\/budget-vs-cash-flow-forecast"/);
  assert.match(html, /href="\/guides\/do-personal-finance-apps-need-bank-access"/);
  assert.match(html, /href="\/guides\/how-to-analyze-bank-transactions-csv"/);
  assert.match(html, /href="\/cash-flow-forecast"/);
  assert.match(html, /capehelm-forecast-1400\.webp/);
  assert.doesNotMatch(html, /revolutionary|game-changing|guaranteed outcome|financial advice/i);
});

test("14-day forecast metadata and Article schema describe the canonical article", async () => {
  const html = await readBuiltPage("guides/how-to-forecast-personal-cash-flow-14-days.html");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  assert.match(html, /<title>How to Forecast Your Personal Cash Flow for the Next 14 Days \| Capehelm<\/title>/);
  assert.match(html, /<meta name="description" content="Learn how to build a simple 14-day personal cash-flow forecast/);
  assert.match(html, /<link rel="canonical" href="https:\/\/capehelm\.com\/guides\/how-to-forecast-personal-cash-flow-14-days"/);
  assert.match(html, /<meta property="og:type" content="article"/);
  assert.match(html, /<meta property="article:published_time" content="2026-09-29"/);
  assert.equal(scripts.length, 1);

  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema["@type"], "Article");
  assert.equal(schema.url, `https://capehelm.com${forecastHowToRoute}`);
  assert.equal(schema.datePublished, "2026-09-29");
  assert.equal(schema.author.name, "Ashley Skinner");
  assert.equal(schema.publisher.name, "Capehelm");
});

test("14-day forecast visuals reconcile to the article values", async () => {
  const html = await readBuiltPage("guides/how-to-forecast-personal-cash-flow-14-days.html");

  assert.match(html, /<figure class="guide-balance-path"/);
  assert.match(html, /Low point · [\s\S]*?\$2,560/);
  assert.match(html, /<aside class="guide-forecast-highlights"/);
  assert.match(html, /Starting balance[\s\S]*\$4,800/);
  assert.match(html, /Highest projected balance[\s\S]*\$6,850/);
  assert.match(html, /Lowest projected balance[\s\S]*\$2,560/);
  assert.match(html, /Ending balance[\s\S]*\$6,460/);
  assert.match(html, /<figure class="guide-process-strip guide-process-strip-forecast"/);
  assert.match(html, /Start with available cash[\s\S]*Add income[\s\S]*Add obligations[\s\S]*Estimate variable spend[\s\S]*Find the low point/);
  assert.match(html, /<caption>Illustrative 14-day personal cash-flow forecast<\/caption>/);
  assert.equal((html.match(/<tr><th scope="row">(?:Today|Day \d+)<\/th>/g) ?? []).length, 8);
});

test("CSV analysis guide preserves the workflow, accuracy and cross-links", async () => {
  const html = await readBuiltPage("guides/how-to-analyze-bank-transactions-csv.html");

  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1);
  for (const heading of [
    "What is a CSV file",
    "Why analyze transactions",
    "Keep the original files",
    "Understand the columns",
    "Standardize the data",
    "Clean up merchant names",
    "Categorize your spending",
    "Be careful with transfers and credit-card payments",
    "Ask five useful questions",
    "Look at groups, categories and merchants differently",
    "Don(?:'|&#x27;)t confuse unusual spending with bad spending",
    "Compare your spending with your plan",
    "Historical transactions can help you look forward",
    "You can do all of this in a spreadsheet",
    "Where Capehelm fits",
    "A note about sensitive financial data",
  ]) {
    assert.match(
      html,
      heading.startsWith("Don(?:")
        ? new RegExp(heading)
        : new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
  }
  assert.match(html, /href="\/guides\/budget-vs-cash-flow-forecast"/);
  assert.match(html, /href="\/guides\/do-personal-finance-apps-need-bank-access"/);
  assert.match(html, /href="\/guides\/how-to-forecast-personal-cash-flow-14-days"/);
  assert.match(html, /href="\/csv-bank-statement-import"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /wouldn(?:'|&#x27;)t delete the original description/i);
  assert.match(html, /\$1,000[\s\S]*\$2,000/);
  assert.match(html, /depends on what you(?:'|&#x27;)re trying to measure/i);
  assert.doesNotMatch(html, /revolutionary|game-changing|guaranteed privacy|financial advice/i);
});

test("CSV analysis metadata and Article schema describe the canonical article", async () => {
  const html = await readBuiltPage("guides/how-to-analyze-bank-transactions-csv.html");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  assert.match(html, /<title>How to Analyze Your Bank Transactions From a CSV File \| Capehelm<\/title>/);
  assert.match(html, /<meta name="description" content="Learn how to analyze bank transactions from a CSV file/);
  assert.match(html, /<link rel="canonical" href="https:\/\/capehelm\.com\/guides\/how-to-analyze-bank-transactions-csv"/);
  assert.match(html, /<meta property="og:type" content="article"/);
  assert.match(html, /<meta property="article:published_time" content="2026-09-30"/);
  assert.equal(scripts.length, 1);

  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema["@type"], "Article");
  assert.equal(schema.url, `https://capehelm.com${csvAnalysisRoute}`);
  assert.equal(schema.datePublished, "2026-09-30");
  assert.equal(schema.author.name, "Ashley Skinner");
  assert.equal(schema.publisher.name, "Capehelm");
});

test("CSV analysis visuals use semantic, mobile-safe structures", async () => {
  const html = await readBuiltPage("guides/how-to-analyze-bank-transactions-csv.html");

  assert.match(html, /<figure class="guide-process-strip" aria-labelledby="csv-analysis-process-caption"/);
  assert.match(html, /Export[\s\S]*Clean[\s\S]*Categorize[\s\S]*Analyze/);
  assert.match(html, /<figure class="guide-comparison guide-transform-table"/);
  assert.match(html, /MCDONALDS #1234 ST JOHNS NL[\s\S]*McDonald’s[\s\S]*Fast Food/);
  assert.match(html, /<figure class="guide-process-strip guide-hierarchy-strip"/);
  assert.match(html, /Variable Necessities[\s\S]*Groceries[\s\S]*Sobeys/);
  assert.match(html, /<aside class="guide-analysis-questions"/);
  const questions = html.match(/<aside class="guide-analysis-questions"[\s\S]*?<\/aside>/)?.[0] ?? "";
  assert.equal((questions.match(/<li>/g) ?? []).length, 5);
});

test("net-worth guide preserves the method, examples and cross-links", async () => {
  const html = await readBuiltPage("guides/how-to-track-net-worth-without-bank-connections.html");

  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1);
  for (const heading of [
    "What is net worth",
    "The direction matters more than today",
    "Decide what you",
    "Record the balances",
    "Save the history",
    "How often should you update your net worth",
    "Consistency beats false precision",
    "Be careful when your house dominates your net worth",
    "Debt repayment is progress too",
    "Contributions aren",
    "Track contributions and withdrawals separately",
    "Month-over-month and year-over-year tell different stories",
    "Not every drop in net worth is a problem",
    "use net worth as a score",
    "You can track net worth in a spreadsheet",
    "need to connect your accounts",
    "Where Capehelm fits",
    "Net worth and cash flow answer different questions",
    "The takeaway",
  ]) {
    assert.match(html, new RegExp(heading));
  }
  assert.match(html, /\$878,000[^<]*−[^<]*\$438,000[^<]*=[^<]*\$440,000/);
  assert.match(html, /January[\s\S]*\$405,000[\s\S]*April[\s\S]*\$416,000[\s\S]*July[\s\S]*\$427,000[\s\S]*October[\s\S]*\$440,000/);
  assert.match(html, /\$126,000 ending value[^<]*−[^<]*\$100,000 starting value[^<]*−[^<]*\$20,000 contributions[^<]*=[^<]*\$6,000/);
  assert.match(html, /Real investment-return calculations can become more complicated/);
  assert.match(html, /href="\/guides\/budget-vs-cash-flow-forecast"/);
  assert.match(html, /href="\/guides\/do-personal-finance-apps-need-bank-access"/);
  assert.match(html, /href="\/guides\/how-to-forecast-personal-cash-flow-14-days"/);
  assert.match(html, /href="\/guides\/how-to-analyze-bank-transactions-csv"/);
  assert.match(html, /href="\/features#progress"/);
  assert.match(html, /capehelm-net-worth-1400\.webp/);
  assert.match(html, /fictional demo data/i);
  assert.doesNotMatch(html, /revolutionary|game-changing|guaranteed returns|financial advice/i);
});

test("net-worth metadata and Article schema describe the canonical article", async () => {
  const html = await readBuiltPage("guides/how-to-track-net-worth-without-bank-connections.html");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  assert.match(html, /<title>How to Track Your Net Worth Without Connecting Your Bank Accounts \| Capehelm<\/title>/);
  assert.match(html, /<meta name="description" content="Learn how to track assets, liabilities and net-worth history manually/);
  assert.match(html, /<link rel="canonical" href="https:\/\/capehelm\.com\/guides\/how-to-track-net-worth-without-bank-connections"/);
  assert.match(html, /<meta property="og:type" content="article"/);
  assert.match(html, /<meta property="article:published_time" content="2026-10-01"/);
  assert.equal(scripts.length, 1);

  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema["@type"], "Article");
  assert.equal(schema.url, `https://capehelm.com${netWorthRoute}`);
  assert.equal(schema.datePublished, "2026-10-01");
  assert.equal(schema.author.name, "Ashley Skinner");
  assert.equal(schema.publisher.name, "Capehelm");
});

test("net-worth visuals reconcile to the guide values and remain accessible", async () => {
  const html = await readBuiltPage("guides/how-to-track-net-worth-without-bank-connections.html");

  assert.match(html, /<figure class="guide-net-worth-equation"/);
  assert.match(html, /aria-label="Assets of \$878,000 minus liabilities of \$438,000 equals net worth of \$440,000"/);
  assert.match(html, /<figure class="guide-balance-path guide-net-worth-history"/);
  assert.match(html, /Net worth increases from \$405,000 in January to \$416,000 in April, \$427,000 in July and \$440,000 in October/);
  assert.match(html, /<aside class="guide-net-worth-drivers"/);
  for (const driver of ["Asset growth", "Contributions", "Withdrawals", "Debt repayment", "Valuation changes"]) {
    assert.match(html, new RegExp(driver));
  }
  assert.match(html, /<figure class="guide-process-strip guide-time-horizons"/);
  assert.match(html, /Transactions[\s\S]*Budget[\s\S]*Forecast[\s\S]*Net Worth[\s\S]*Retirement/);
});
