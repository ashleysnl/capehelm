import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const articleRoute = "/guides/budget-vs-cash-flow-forecast";

async function readBuiltPage(file) {
  return readFile(new URL(`../dist/client/${file}`, import.meta.url), "utf8");
}

test("guides index exposes the first educational article", async () => {
  const html = await readBuiltPage("guides.html");

  assert.match(html, /<h1>Clear thinking for <em>everyday finances\.<\/em><\/h1>/);
  assert.match(html, /Budget vs\. Cash-Flow Forecast/);
  assert.match(html, new RegExp(`href="${articleRoute}"`));
  assert.match(html, /Budget[^<]*<\/span><i[^>]*>→<\/i><span>Actuals/);
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
  assert.match(body, /href="\/cash-flow-forecast"/);
  assert.match(body, /capehelm-forecast-1400\.webp/);
  assert.match(body, /fictional demo data/i);
  assert.doesNotMatch(body, /revolutionary|game-changing|act now|limited time/i);
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
