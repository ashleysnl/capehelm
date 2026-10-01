import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const productionOrigin = "https://capehelm.com";

async function homepage() {
  return readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
}

async function softwareApplication() {
  const html = await homepage();
  const scripts = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];

  assert.equal(scripts.length, 1, "homepage should contain one JSON-LD entity");
  return JSON.parse(scripts[0][1]);
}

test("homepage publishes one accurate SoftwareApplication entity", async () => {
  const schema = await softwareApplication();

  assert.equal(schema["@context"], "https://schema.org");
  assert.equal(schema["@type"], "SoftwareApplication");
  assert.equal(schema["@id"], `${productionOrigin}/#software-application`);
  assert.equal(schema.name, "Capehelm");
  assert.equal(schema.url, `${productionOrigin}/`);
  assert.equal(schema.applicationCategory, "FinanceApplication");
  assert.equal(schema.operatingSystem, "macOS 14.0 or later");
  assert.equal(
    schema.processorRequirements,
    "Apple silicon (arm64) or 64-bit Intel (x86_64) processor",
  );
  assert.match(schema.description, /local-first personal finance app for macOS/);
  assert.match(schema.description, /imported transactions/);
  assert.deepEqual(schema.publisher, {
    "@type": "Organization",
    name: "Capehelm",
    url: `${productionOrigin}/`,
  });
});

test("structured subscription offers match visible US pricing without treating the trial as free pricing", async () => {
  const schema = await softwareApplication();

  assert.deepEqual(
    schema.offers.map(({ name, price, priceCurrency }) => ({
      name,
      price,
      priceCurrency,
    })),
    [
      { name: "Capehelm Monthly", price: "4.99", priceCurrency: "USD" },
      { name: "Capehelm Annual", price: "49.99", priceCurrency: "USD" },
    ],
  );
  assert.ok(schema.offers.every((offer) => offer.url === `${productionOrigin}/#pricing`));
  assert.ok(schema.offers.every((offer) => /Pricing may vary/.test(offer.description)));
  assert.ok(schema.offers.every((offer) => offer.price !== "0"));
});

test("structured screenshots are public absolute URLs backed by built assets", async () => {
  const schema = await softwareApplication();
  const expectedModules = [
    "dashboard",
    "budget",
    "forecast",
    "trends",
    "net-worth",
    "retirement",
  ];

  assert.equal(schema.screenshot.length, expectedModules.length);
  for (const productArea of expectedModules) {
    const url = `${productionOrigin}/product/capehelm-${productArea}-2560.webp`;
    assert.ok(schema.screenshot.includes(url));
    await access(
      new URL(
        `../dist/client/product/capehelm-${productArea}-2560.webp`,
        import.meta.url,
      ),
    );
  }
  assert.doesNotMatch(
    JSON.stringify(schema.screenshot),
    /localhost|github\.io|\/Users\/|file:/i,
  );
});

test("structured data publishes the verified install URL and omits misleading metadata", async () => {
  const schema = await softwareApplication();
  const html = await homepage();

  assert.equal(schema.installUrl, ["https://apps.apple.com/us/app/capehelm/", "id6813935886"].join(""));
  assert.equal(schema.downloadUrl, undefined);
  assert.equal(schema.aggregateRating, undefined);
  assert.equal(schema.review, undefined);
  assert.doesNotMatch(html, /"@type":"(?:FAQPage|QAPage)"/);
});
