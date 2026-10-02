# Technical SEO regression checks

## Deterministic build checks

Run `npm ci`, then:

```sh
GITHUB_PAGES_BUILD=true NEXT_PUBLIC_SITE_URL=https://capehelm.com npm test
```

Existing tests retain page-specific expectations for titles, descriptions, heading hierarchy, internal links/fragments, schema, social metadata and robots/sitemap output. `tests/seo-regression.test.mjs` adds discovery of all generated HTML pages (excluding the error page), exact sitemap/build route coverage, indexability checks for crawler meta directives, and existence checks for referenced first-party images, responsive image candidates, scripts, stylesheet/preload/icon assets. This uses the generated Pages artifact and no network.

Failure-path fixtures prove that a missing route, incorrect canonical, missing asset, broken page link, crawler noindex meta, or X-Robots-Tag noindex header fails the relevant validator. Fixtures use temporary directories and do not mutate the real build.

## Production checks

```sh
npm run test:seo:live
```

Requires Node 22+ and curl; no npm installation or credentials are required for this command. Production checks use public website data only. They check all sitemap pages for HTTP 200, metadata, unique titles/descriptions, indexability in HTML and headers, and first-party references. They check referenced assets without following redirects, all known page slash/.html/index.html aliases, query preservation, unknown-page 404 responses, and representative HTTP/www/.ca/old-GitHub domain redirects. Cloudflare's `/cdn-cgi/` generated email-protection endpoints are excluded from the link inventory. Third-party assets and outbound links are outside this check.

Requests inspect raw status and Location rather than following redirects. Up to eight requests run concurrently; individual requests have a 25-second limit and two curl retries for transient transport/server errors. Failures identify the affected URL and assertion; a failed run exits nonzero.

## Deployment integration

The existing Pages build still runs deterministic `npm test`. Its artifact includes `seo-release.json` containing the non-secret commit SHA. After `deploy-pages`, the deploy job checks out the same commit and runs production checks with `SEO_EXPECTED_REVISION` set to that SHA.

Before testing, the script polls the public release marker with a revision/attempt query parameter. It accepts only the expected commit and allows twelve attempts with ten seconds between attempts. It then compares the live sitemap with the checked-out route sources. If propagation does not complete within the bounded window, the check fails explicitly instead of silently testing the old site. Re-run the deployment/check if a transient propagation failure occurs. A failed post-deployment check reports a failure; it does not automatically roll back an already published site.

The route inventory is generated from app pages and the existing support catalogue by `scripts/seo/routes.mjs`. Cloudflare alias allowlists must stay synchronized with new routes. The static validator additionally checks that no rendered public route is omitted from the sitemap.

These checks cover delivered HTML and HTTP behavior. They do not replace browser interaction tests, a full CSS/JS dependency graph audit, Core Web Vitals measurements, or Search Console indexing verification.
