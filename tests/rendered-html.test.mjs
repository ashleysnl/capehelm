import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [path, expected] of [
  ["/", "See where your money is going"],
  ["/features", "Past, present and future"],
  ["/privacy", "Privacy Policy"],
  ["/download", "No release date announced"],
]) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(expected, "i"));
    assert.match(html, /Capehelm/);
    assert.match(html, /mailto:support@capehelm\.com/);
    assert.match(html, /Coming Soon/i);
    assert.doesNotMatch(html, /Download Capehelm|Download for Mac|Private beta/i);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  });
}
