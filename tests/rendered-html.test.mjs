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
  ["/", "See where your money is going"],
  ["/features", "Past, present and future"],
  ["/privacy", "Privacy Policy"],
  ["/download", "No release date announced"],
]) {
  test(`statically renders ${path}`, async () => {
    const html = await render(path);
    assert.match(html, new RegExp(expected, "i"));
    assert.match(html, /Capehelm/);
    assert.match(html, /mailto:support@capehelm\.com/);
    assert.match(html, /Coming Soon/i);
    assert.doesNotMatch(html, /Download Capehelm|Download for Mac|Private beta/i);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
    if (path === "/privacy") {
      assert.match(html, /Effective Date: September 18, 2026/);
      assert.match(html, /Capehelm does not send the email or read the clipboard contents after that handoff\./);
      assert.match(html, /Capehelm hands the link to your default browser\./);
      assert.match(html, /macOS sharing service or your email application/);
    }
    if (process.env.GITHUB_PAGES_BUILD === "true") {
      assert.match(html, /\/_next\//);
      assert.doesNotMatch(html, /(?:href|src)="\/capehelm(?:\/|\")/);
    }
  });
}
