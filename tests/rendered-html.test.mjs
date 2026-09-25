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
      assert.match(html, /Capehelm does not require your online banking password, bank login, or personal Finance Document/);
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
  assert.match(hero, /role="img" aria-label="Synthetic Capehelm dashboard showing monthly position, budget health, forecast and net worth"/);
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
  const pages = await Promise.all(["/", "/features", "/privacy", "/support", "/download"].map(render));
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

test("download page accurately communicates the pre-launch handoff", async () => {
  const html = await render("/download");
  const visibleHtml = html.match(/<body>([\s\S]*?)<script/)?.[1] ?? html;
  assert.match(html, /Capehelm is coming to the <em>Mac App Store\.<\/em>/);
  assert.match(html, /this page and every download button on the site will link directly to the Mac App Store/i);
  assert.match(html, /No download or direct-download build is available at this time\./);
  assert.doesNotMatch(visibleHtml, /href="https?:\/\//i);
});
