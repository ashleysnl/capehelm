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
