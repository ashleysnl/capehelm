import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(route = "/") {
  const relativePath = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  return readFile(new URL(`../dist/client/${relativePath}`, import.meta.url), "utf8");
}

test("features page includes current planning, import and local-control capabilities", async () => {
  const html = await render("/features");
  assert.match(html, /Capehelm Guide/);
  assert.match(html, /Built-in and configurable bank CSV imports/);
  assert.match(html, /potential duplicate charges/);
  assert.match(html, /Retirement Projection/i);
  assert.match(html, /Your data\. Your files\. Your backups\./);
  assert.doesNotMatch(html, /connects directly to your bank|guaranteed returns|AI-powered financial advice/i);
});

for (const [path, expected] of [
  ["/", "Understand your money"],
  ["/features", "Past, present and future"],
  ["/faq", "Clear answers before you"],
  ["/privacy", "Privacy Policy"],
  ["/support", "Capehelm Support"],
  ["/download", "No release date announced"],
]) {
  test(`statically renders ${path}`, async () => {
    const html = await render(path);
    const visibleHtml = html.match(/<body>([\s\S]*?)<script/)?.[1] ?? html;
    assert.match(html, new RegExp(expected, "i"));
    assert.match(html, /Capehelm/);
    assert.match(html, /mailto:support@capehelm\.com/);
    assert.match(html, /Coming Soon/i);
    assert.doesNotMatch(visibleHtml, /Download Capehelm|Download for Mac|Private beta/i);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
    if (path === "/privacy") {
      assert.match(html, /Effective Date: September 18, 2026/);
      assert.match(html, /Capehelm does not send the email or read the clipboard contents after that handoff\./);
      assert.match(html, /Capehelm hands the link to your default browser\./);
      assert.match(html, /macOS sharing service or your email application/);
    }
    if (path === "/support") {
      assert.match(html, /mailto:support@capehelm\.com/);
      assert.match(html, /href="\/privacy"/);
      assert.match(html, /Do not email your Finance Document, bank statements, transaction exports, backup archives/);
      assert.doesNotMatch(html, /unless they are genuinely necessary|unless there is a clear reason/i);
    }
    if (process.env.GITHUB_PAGES_BUILD === "true") {
      assert.match(html, /\/_next\//);
      assert.doesNotMatch(html, /(?:href|src)="\/capehelm(?:\/|")/);
    }
  });
}

test("homepage hero communicates the Task 3 positioning and one dominant App Store action", async () => {
  const html = await render("/");
  const hero = html.match(/<section class="hero section-shell">([\s\S]*?)<\/section>/)?.[1] ?? "";

  assert.match(hero, /<h1>Understand your money\.<br\/><em>Plan what(?:'|&#x27;)s next\.<\/em><\/h1>/);
  assert.match(hero, /Private personal finance for Mac\./);
  assert.match(hero, /forecast the next 14 days/i);
  assert.match(hero, /build a budget/i);
  assert.match(hero, /monitor your net worth/i);
  assert.match(hero, /plan retirement/i);
  assert.match(hero, /keeping your financial data on your Mac/i);
  assert.match(hero, /Download on the Mac App Store/);
  assert.match(hero, /2 months free for eligible new subscribers · Monthly or annual · No ads/);
  assert.equal((hero.match(/class="button hero-primary-cta"/g) ?? []).length, 1);
  assert.match(hero, /capehelm-dashboard-1400\.webp/);
  assert.match(hero, /alt="Capehelm Dashboard showing a real monthly financial overview, spending pace, budget position, upcoming cash flow and financial progress using fictional demonstration data\."/);
});

test("public product imagery uses approved real application screenshots only", async () => {
  const [home, features] = await Promise.all([render("/"), render("/features")]);
  const productPages = `${home}\n${features}`;

  assert.doesNotMatch(productPages, /Synthetic Capehelm|product-window|mock-sidebar|device-pair|report-stack/i);
  assert.equal((home.match(/class="product-screenshot/g) ?? []).length, 6);
  assert.equal((features.match(/class="product-screenshot/g) ?? []).length, 5);
  for (const asset of ["budget", "dashboard", "forecast", "net-worth", "retirement", "trends"]) {
    assert.match(productPages, new RegExp(`capehelm-${asset}-1400\\.webp`));
    assert.match(productPages, new RegExp(`capehelm-${asset}-2560\\.webp`));
  }
});

test("homepage uses the official Capehelm mark instead of a CH placeholder", async () => {
  const html = await render("/");

  assert.match(html, /class="cta-mark"[\s\S]*?src="\/brand\/capehelm-mark\.png"/);
  assert.doesNotMatch(html, /class="cta-mark"[^>]*>\s*CH\s*</);
});

test("homepage pricing section communicates the current subscriptions and introductory trial", async () => {
  const html = await render("/");
  const pricing = html.match(/<section class="pricing-section[^"]*"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(pricing, /Try Capehelm free for two months/);
  assert.match(pricing, /Eligible new subscribers/);
  assert.match(pricing, /two-month introductory free trial/);
  assert.match(pricing, /available with either Capehelm subscription option, subject to Apple eligibility/);
  assert.match(pricing, /Monthly[\s\S]*US\$[\s\S]*4\.99[\s\S]*\/month/);
  assert.match(pricing, /Annual[\s\S]*US\$[\s\S]*49\.99[\s\S]*\/year/);
  assert.match(pricing, /Monthly and Annual unlock the same Capehelm features/);
  assert.match(pricing, /purchased, renewed, cancelled, restored and managed through Apple/);
  assert.match(pricing, /Pricing may vary by storefront, region, currency and applicable taxes/);
  assert.match(pricing, /Download on the Mac App Store/);
});

test("public pages omit obsolete purchase models", async () => {
  const pages = await Promise.all(["/", "/features", "/faq", "/privacy", "/support", "/download"].map(render));
  const publicHtml = pages.join("\n");

  assert.doesNotMatch(publicHtml, /45[- ]day trial|Full Unlock|one[- ]time purchase/i);
});

test("homepage privacy section explains Capehelm's local-first boundaries", async () => {
  const html = await render("/");
  const privacy = html.match(/<section class="privacy-banner[^"]*"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(privacy, /Your finances don(?:'|&#x27;)t belong on our servers/);
  assert.match(privacy, /Your transaction data stays local/);
  assert.match(privacy, /local Finance Documents/);
  assert.match(privacy, /No online banking credentials/);
  assert.match(privacy, /online-banking username or password/);
  assert.match(privacy, /does not upload your transaction data or Finance Document contents to Capehelm servers/);
  assert.match(privacy, /does not use finance-data telemetry/);
  assert.match(privacy, /paid product, not an advertising platform/);
  assert.match(privacy, /backups, reports and exports remain local or in storage locations you choose and control/);
  assert.match(privacy, /Apple handles subscription commerce/);
  assert.match(privacy, /not your personal finance content/);
  assert.match(privacy, /href="\/privacy"/);
  assert.match(privacy, /Read our Privacy Policy/);
});

test("homepage presents Task 7 capabilities as five user outcomes", async () => {
  const html = await render("/");
  const outcomes = html.match(/<section class="outcome-hierarchy[^"]*"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(outcomes, /Where did my money go\?/);
  assert.match(outcomes, /Am I staying on track\?/);
  assert.match(outcomes, /What(?:'|&#x27;)s going to happen next\?/);
  assert.match(outcomes, /How am I doing long term\?/);
  assert.match(outcomes, /Can I share what matters\?/);
  assert.match(outcomes, /Trends/);
  assert.match(outcomes, /Budget Health/);
  assert.match(outcomes, /Budget Builder/);
  assert.match(outcomes, /14-day Forecast/);
  assert.match(outcomes, /Forecast Coverage/);
  assert.match(outcomes, /Net Worth \+ Retirement/);
  assert.match(outcomes, /weekly and month-end PDF check-ins/);
  assert.match(outcomes, /href="\/features"/);
  assert.match(outcomes, /Explore all features/);
  assert.doesNotMatch(html, /class="feature-grid-section|class="reports-section|A complete workspace/);
});

test("homepage screenshot stories provide responsive, accessible product proof", async () => {
  const html = await render("/");
  const productProof = html.match(/<section class="product-proof[^"]*"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(productProof, /See Capehelm in action/);
  assert.match(productProof, /Five connected views, shown with fictional demo data/);
  assert.match(productProof, /See the next 14 days before they happen/);
  assert.match(productProof, /Understand what(?:'|’|&(?:#x27|rsquo);)s actually changing/);
  assert.match(productProof, /Know where the month is heading/);
  assert.match(productProof, /Track the whole financial picture/);
  assert.match(productProof, /Model the future using assumptions you control/);
  assert.match(productProof, /recurring commitments and expected spending/);
  assert.match(productProof, /categories and merchants/);
  assert.match(productProof, /planned spending, actual spending, and projected month-end results/);
  assert.match(productProof, /assets, liabilities, account balances, and changes over time/);
  assert.match(productProof, /user-controlled assumptions, projected growth, contributions, and retirement outcomes/);
  assert.equal((productProof.match(/<article class="product-proof-story/g) ?? []).length, 5);
  assert.equal((productProof.match(/<img /g) ?? []).length, 5);
  assert.equal((productProof.match(/loading="lazy"/g) ?? []).length, 5);
  assert.equal((productProof.match(/decoding="async"/g) ?? []).length, 5);
  assert.equal((productProof.match(/width="2560" height="1600"/g) ?? []).length, 5);
  assert.equal((productProof.match(/-1400\.webp/g) ?? []).length, 10);
  assert.equal((productProof.match(/-2560\.webp/g) ?? []).length, 5);
  assert.doesNotMatch(productProof, /\.png|alt="(?:Capehelm|Budget|App) screenshot"/i);
});

test("public privacy claims preserve the StoreKit commerce exception", async () => {
  const pages = await Promise.all(["/", "/features", "/privacy", "/support", "/download"].map(render));
  const publicHtml = pages.join("\n");
  const policy = pages[2];

  assert.match(policy, /loading Monthly and Annual subscription product information/);
  assert.match(policy, /determining eligibility for an introductory trial/);
  assert.match(policy, /verifying entitlements/);
  assert.match(policy, /subscription-state changes managed through Apple/);
  assert.match(policy, /AppStore\.sync\(\)/);
  assert.match(policy, /does not send your transactions, budgets, account balances, Finance Documents, or other personal financial information to Apple/);
  assert.doesNotMatch(publicHtml, /never connects to the internet|no data ever leaves your computer|sends nothing over the network|100% offline/i);
});

test("FAQ answers all Task 9 purchase and support objections accurately", async () => {
  const html = await render("/faq");
  const visibleHtml = html.match(/<body>([\s\S]*?)<script/)?.[1] ?? html;
  const faqList = visibleHtml.match(/<div class="faq-list">([\s\S]*?)<\/div><\/section>/)?.[1] ?? "";

  for (const question of [
    "Does Capehelm connect directly to my bank?",
    "Does Capehelm upload my financial information?",
    "Which financial institutions can I use with Capehelm?",
    "Can I import CSV statements?",
    "Where is my Capehelm data stored?",
    "Can I back up my data?",
    "What happens if my subscription expires?",
    "How does the two-month introductory trial work?",
    "What version of macOS does Capehelm require?",
    "Is Capehelm available on iPhone or iPad?",
    "How do I contact support?",
    "Can I send my Finance Document or bank statement to support?",
  ]) {
    assert.match(visibleHtml, new RegExp(question.replace(/[?]/g, "\\?")));
  }

  assert.equal((faqList.match(/<details /g) ?? []).length, 12);
  assert.equal((faqList.match(/<summary>/g) ?? []).length, 12);
  assert.match(visibleHtml, /Capehelm does not require your online-banking credentials\. Transactions are imported from local statement files instead\./);
  assert.match(visibleHtml, /does not upload transactions, categories, account information, Net Worth information, Forecast information, budgets, reports, or Finance Documents/);
  assert.match(visibleHtml, /Apple StoreKit may communicate with Apple/);
  assert.match(visibleHtml, /configurable custom CSV workflow/);
  assert.match(visibleHtml, /Your Finance Document is a local file you control/);
  assert.match(visibleHtml, /local \.pfbackup\.zip archive/);
  assert.match(visibleHtml, /Your Finance Document is not deleted, rewritten, migrated, or reset when a subscription expires/);
  assert.match(visibleHtml, /Eligible new subscribers can receive Apple(?:'|’|&#x27;)s native two-month introductory free trial with either option/);
  assert.match(visibleHtml, /macOS 14 Sonoma or later/);
  assert.match(visibleHtml, /An iPhone or iPad companion is not part of the current public release/);
  assert.match(visibleHtml, /mailto:support@capehelm\.com/);
  assert.match(visibleHtml, /No\. Please do not email your Finance Document, bank statements, transaction exports, backup archives/);
  assert.doesNotMatch(visibleHtml, /never uses the internet|every bank|direct bank connectivity exists|45[- ]day|Full Unlock|one[- ]time purchase/i);
});

test("FAQ is discoverable and public iPhone wording matches the release configuration", async () => {
  const pages = await Promise.all(["/", "/features", "/faq", "/privacy", "/support", "/download"].map(render));
  const publicHtml = pages.join("\n");
  const home = pages[0];
  const download = pages[5];

  assert.match(home, /href="\/faq"/);
  assert.match(download, /href="\/faq"/);
  assert.ok(pages.every((html) => /<footer[\s\S]*?href="\/faq"/.test(html)));
  assert.doesNotMatch(publicHtml, /selected companion workflows available on iPhone|The iPhone companion opens|Selected iPhone workflows/i);
  assert.match(home, /Not part of the current public release/);
  assert.match(download, /Mac only in the current public release/);
});

test("download page accurately communicates the pre-launch handoff", async () => {
  const html = await render("/download");
  const visibleHtml = html.match(/<body>([\s\S]*?)<script/)?.[1] ?? html;
  assert.match(html, /Capehelm is coming to the <em>Mac App Store\.<\/em>/);
  assert.match(html, /this page and every download button on the site will link directly to the Mac App Store/i);
  assert.match(html, /No download or direct-download build is available at this time\./);
  assert.doesNotMatch(visibleHtml, /href="https?:\/\//i);
});
