# Capehelm Technical SEO Improvement Plan

Created: 2026-10-02
Repository: `ashleysnl/capehelm`
Production: https://capehelm.com
Owner: Skinner
Scope: Technical SEO only. No new articles, marketing copy, keyword landing pages, or product redesign.

## How to work through this plan

- Execute one explicitly requested phase at a time.
- Inspect current code and production behavior before making changes; audit findings are a dated baseline.
- Update this file in the same change as implementation, including checks, evidence, deployment status, and remaining limitations.
- Distinguish implementation complete from verified in production. A successful build does not prove live redirect behavior.
- Preserve existing content, public URLs, analytics, App Store links, and app-data privacy boundaries.
- Use focused changes and existing architecture. Do not change hosting providers.
- Back up any Cloudflare rules changed and record the rule IDs and rollback method. Avoid rules that rewrite assets, break legitimate directories, or create redirect loops.
- Do not start the next phase automatically.

Suggested request: “Complete Phase 1 of docs/SEO_IMPROVEMENT_PLAN.md, verify it in production, and update the evidence.”

## Audit baseline — 2026-10-02

Observed through live HTTP checks, GitHub source reads, and Cloudflare configuration reads:

- All 32 sitemap URLs returned HTTP 200.
- Checked pages had unique titles and descriptions, canonical tags, and one H1; no noindex appeared in their HTML.
- robots.txt permits crawling and declares the production sitemap.
- Sampled HTTP, www, .ca, and old GitHub Pages URLs redirect to the canonical HTTPS .com URL. Tested .ca and www redirects preserve path and query string.
- /features/ returns 404, while /features returns 200.
- /features.html and /index.html return 200 instead of redirecting.
- A deliberately nonexistent URL returns a genuine 404.
- Product images already use responsive WebP sources, dimensions, and lazy loading. The homepage hero is eager-loaded with high fetch priority.
- Homepage structured data includes SoftwareApplication, Organization, and WebSite. Guide articles include Article; FAQ includes FAQPage.
- Sampled nested guides and support pages lack BreadcrumbList markup.
- public/sitemap.xml is manually maintained.
- .github/workflows/pages.yml runs npm test before publishing the static dist/client artifact.
- Mobile Core Web Vitals, full asset/link integrity, structured-data eligibility, and actual Google indexing have not been established by this audit.
- Cloudflare Always Use HTTPS is off, but tested HTTP URLs already redirect through the current delivery stack. This setting alone is not a confirmed SEO defect.

## Phase tracker

| Phase | Work | Status |
| --- | --- | --- |
| 1 | Normalize alternate page URLs | Complete — verified in production |
| 2 | Add automated technical SEO regression checks | Complete — verified in production |
| 3 | Generate and validate the sitemap | Complete — verified in production |
| 4 | Add breadcrumb structured data | Complete — verified in production |
| 5 | Measure performance and fix demonstrated bottlenecks | Complete — measured and verified in production |
| 6 | Verify production crawlability and indexing | Complete — verified; indexing follow-ups recorded |

## Phase 1 — Normalize alternate page URLs

Priority: High
Status: Complete — verified in production

### Tasks

- [x] Inventory canonical routes, .html aliases, index.html variants, and trailing-slash behavior, including nested guides/support routes.
- [x] Select the smallest compatible redirect implementation for GitHub Pages behind Cloudflare.
- [x] Permanently redirect known page trailing-slash aliases to the existing slashless canonical route.
- [x] Permanently redirect known .html aliases to their canonical page.
- [x] Redirect /index.html to / and handle nested index.html aliases only where a matching canonical page exists.
- [x] Preserve query strings and avoid redirect loops.
- [x] Preserve .ca, www, HTTP, and old GitHub Pages redirects.
- [x] Preserve genuine 404s; do not redirect every unknown URL to the homepage.
- [x] Ensure asset files and directories remain accessible.
- [x] Record configuration changes and rollback instructions.

### Acceptance

- /features/ and /features.html return 301 or 308 to https://capehelm.com/features.
- /index.html returns 301 or 308 to https://capehelm.com/.
- Equivalent sampled guide/support aliases resolve to their canonical pages.
- Canonical destinations return 200 and retain their canonical tags.
- Canonical-host alias redirects take one hop wherever the delivery architecture permits; record any unavoidable chains.
- Query strings survive redirects.
- Unknown paths still return 404; JS, CSS, images, robots.txt, and sitemap.xml remain accessible.

### Evidence

Implementation configuration commit: 176f964f7c900a369572380b6b5f72cd9e87da9c.
Cloudflare deployment: 2026-10-02 10:28:33 UTC; ruleset version 1.
Configuration and prior-state backup: [cloudflare-phase-1-redirects.json](seo/cloudflare-phase-1-redirects.json).

Cloudflare zone: b511c956f35ff132dff5237557e4ad21.
New ruleset: 5b7dc2fc15124a328978958ad0df2d0c.
Rules:
- Home index: 9031da889f16487785858836dada80e9.
- Known trailing slash: 18e2488412ea432eb130f9ccb7a9c4c5.
- Known HTML: caa355a0e5c244da966b4ddd5aa989a6.
- Known nested index: 48c78c21d32249d3a368eb471ad4d79c.

Prior state: no capehelm.com zone-level redirect ruleset. Existing capehelm.ca ruleset c3b398841669439cbf00eaa95800b323 was left unchanged.
Rollback: delete only the new .com ruleset, or disable its four rules. Do not alter .ca redirects or managed security rules.

Implementation: four Cloudflare Single Redirect rules, restricted to explicit aliases of the 32 sitemap pages and .com/www hosts. API dry-run passed before creation. No application/build changes were needed.

Production test date: 2026-10-02.
- 94 alias cases passed: 31 non-home routes × trailing slash, .html, and /index.html, plus homepage /index.html. Every response was 301 with the exact expected Location and preserved seo_check=1 query string.
- All 32 canonical destinations returned 200 with matching canonical tags (root slash equivalence accepted).
- Unknown slashless, trailing-slash, and .html paths returned 404 without redirects.
- robots.txt, sitemap.xml, current JS runtime, CSS, and a product WebP returned 200 without redirects.
- A JS filename from the earlier audit had changed after deployment and returned 404; the currently referenced script was fetched from live HTML and verified 200.

Representative URL/status/Location matrix:

| Request | Result | Destination / hops |
| --- | --- | --- |
| /features/?seo_check=1 | 301 | /features?seo_check=1; one hop |
| /features.html?seo_check=1 | 301 | /features?seo_check=1; one hop |
| /features/index.html?seo_check=1 | 301 | /features?seo_check=1; one hop |
| /index.html?seo_check=1 | 301 | /?seo_check=1; one hop |
| Known nested guide/support aliases | 301 | Matching slashless canonical; one hop |
| www.capehelm.com/features.html?seo_check=1 | 301 then 200 | https://capehelm.com/features?seo_check=1; one hop |
| capehelm.ca/features?seo_check=1 | 301 then 200 | https://capehelm.com/features?seo_check=1; one hop |
| capehelm.ca/features/?seo_check=1 | 301, 301, 200 | .ca → .com alias → canonical; two hops |
| HTTP .com/features | 301 then 200 | HTTPS canonical; one hop |
| Old GitHub Pages /capehelm/features | 301 then 200 | .com canonical; one hop |
| Unknown URL variants | 404 | No redirect |

Remaining limitations:
- Existing .ca and GitHub Pages host redirects remain separate from .com alias normalization; combinations may use two hops. Preserving those established redirects avoids broadening this change.
- Explicit route allowlists must be updated when canonical routes are added/removed. Phase 3 should consider generating the redirect route inventory alongside the sitemap.
- Only recognized aliases are normalized; arbitrary unknown URLs are deliberately left as 404.
- Phase 2 is tracked below; later phases remain separate.

## Phase 2 — Automated technical SEO regression checks

Priority: High
Status: Complete — verified in production
Dependency: Phase 1

### Tasks

- [x] Inspect existing tests and extend them without duplicating coverage.
- [x] Check every canonical route for successful rendering, one title, a description, a canonical URL, and one H1.
- [x] Check unique titles/descriptions and canonical consistency.
- [x] Detect accidental noindex directives in HTML and production headers.
- [x] Validate internal page links and referenced first-party assets against deployed/build output.
- [x] Verify sitemap URLs and robots sitemap declaration.
- [x] Add live smoke checks for redirects, alias handling, and genuine 404 responses.
- [x] Keep deterministic build checks separate from network-dependent production checks.
- [x] Integrate checks with the existing Pages workflow; account for deployment propagation and avoid flaky timing assumptions.
- [x] Document how to run each check locally.

### Acceptance

- npm test passes with meaningful coverage.
- A controlled missing route, incorrect canonical, or broken asset makes the relevant check fail.
- Production checks inspect HTTP status/Location rather than only following redirects.
- Production checks report per-URL failures and do not require private finance data.
- The deployment workflow remains compatible with the current static output.

### Evidence

Implementation commit: 0cb2b1e733203679fa47841421efe77a9952f064; see [regression-check documentation](seo/REGRESSION_CHECKS.md).
Commands/results: Pages-mode npm test passed 82/82 tests. Targeted ESLint checks passed for the new scripts and tests.
Failure-path verification: controlled fixtures detect missing route coverage, incorrect canonical, missing first-party asset, broken internal page link, crawler noindex metadata, and X-Robots-Tag noindex headers.
Production smoke-check result: passed on 2026-10-02 at 10:40:09 UTC in [GitHub Actions run 36996653213](https://github.com/ashleysnl/capehelm/actions/runs/36996653213). Both build and deploy jobs succeeded. The post-deployment step verified commit 0cb2b1e733203679fa47841421efe77a9952f064 via the release marker, then passed 32 canonical page checks, 45 unique first-party asset checks, 94 alias redirect checks, robots/sitemap checks, unknown-page 404 checks, and representative domain redirects, with zero failures.

During development, the title validator initially counted SVG accessibility titles as document titles. It was corrected to inspect document-head titles; both affected live guides and the complete deployed check passed afterward. No website-content change was required.
Remaining limitations: browser behavior, full CSS/JS dependency graphs, third-party endpoints, field performance and Google indexing remain outside these checks. Generated sitemap work remains Phase 3.

## Phase 3 — Generate and validate the sitemap

Priority: Medium
Status: Complete — verified in production
Dependency: Phase 2

### Tasks

- [x] Identify the existing route/content catalogue and use it as the route source where possible.
- [x] Generate sitemap.xml during the build from canonical public routes.
- [x] Include only intended indexable pages using https://capehelm.com URLs.
- [x] Exclude .html/trailing-slash aliases, nonexistent routes, assets, and preview hosts.
- [x] Keep robots.txt pointing to the production sitemap.
- [x] Validate XML syntax, URL uniqueness, and route coverage.
- [x] Add lastmod only if backed by meaningful page modification dates; do not set every page to the build date.
- [x] Remove or clearly document the old manual maintenance path.

### Acceptance

- Every intended canonical page appears exactly once.
- Every sitemap URL resolves to an indexable 200 page with a matching canonical.
- Adding/removing a route is reflected through the established build process.
- No misleading lastmod values are introduced.

### Evidence

Implementation commit: 4c393e55253077b8c83a7034c9562af8d5c0ee10. `scripts/seo/routes.mjs` discovers static app page routes and reuses the support article catalogue for the parameterized support route. `npm run build` generates `public/sitemap.xml` before compilation; the former manually tracked XML is removed and the generated file is ignored. `npm run seo:generate` supports standalone generation. Unknown dynamic route patterns fail until a route source is registered.
Route count and coverage: 32 canonical URLs (18 static pages + 14 support catalogue articles), each once. Build tests compare the sitemap with every rendered public HTML page. Alias/error/asset routes are excluded.
Generated output verification: Pages build and 84 tests passed. Tests confirm exact generated XML, canonical origin, uniqueness, no artificial lastmod, automatic addition/removal of fixture pages, and rejection of an unsupported dynamic route. Targeted ESLint passed.
Production sitemap verification: passed in [GitHub Actions run 36997249742](https://github.com/ashleysnl/capehelm/actions/runs/36997249742) on 2026-10-02. Build and deploy jobs succeeded. The deployed revision marker matched the implementation commit; the live sitemap matched the discovered route set. All 32 canonical pages returned indexable 200 responses with matching canonicals, 45 first-party assets passed, and all 94 alias checks passed with zero failures. Python ElementTree independently parsed the generated XML successfully (32 unique URLs).
Remaining limitations: Cloudflare redirect allowlists still require synchronization when new routes are added. They were not changed because the canonical route set remains identical. No lastmod is emitted until reliable page modification dates exist.

## Phase 4 — Breadcrumb structured data

Priority: Medium
Status: Complete — verified in production

### Tasks

- [x] Inspect the existing visible breadcrumb/navigation hierarchy.
- [x] Add reusable BreadcrumbList JSON-LD for nested guides and support pages.
- [x] Use absolute canonical URLs, sequential positions, and labels consistent with visible navigation.
- [x] Preserve existing Article, SoftwareApplication, Organization, WebSite, and FAQPage markup.
- [x] Validate JSON syntax and representative pages using an appropriate structured-data validator.
- [x] Avoid unsupported ratings, fabricated reviews, or promises of search enhancements.

### Acceptance

- Representative guide and support pages contain valid BreadcrumbList markup in initial HTML.
- Breadcrumb destinations are real canonical pages and match the visible hierarchy.
- Existing schema remains valid and is not duplicated accidentally.
- Validation evidence is recorded; valid markup does not guarantee a rich result.

### Evidence

Implementation commit: 1dcc394adb109298f7ffb2c2a2dced74209b8232; shared `BreadcrumbSchema` component supplies JSON-LD in initial HTML for all six guide articles and fourteen support articles. Labels and links use the same values as visible navigation; sequential ListItem positions and absolute production URLs are emitted. Existing Article/SoftwareApplication/Organization/WebSite/FAQPage schema is preserved.
Representative URLs: /guides/budget-vs-cash-flow-forecast and /support/getting-started/create-finance-document; all 20 nested article pages are validated.
Validator/results: Pages build and 85 tests passed. `scripts/seo/breadcrumbs.mjs` validates JSON syntax, required BreadcrumbList/ListItem fields, item order, visible names/links, canonical destination existence, section fragments and exactly one list per article. Requirements were checked against Google Search Central's Breadcrumb documentation: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb . Targeted ESLint passed. Post-deployment validation passed on 2026-10-02 in [GitHub Actions run 36997728051](https://github.com/ashleysnl/capehelm/actions/runs/36997728051). The live validator passed all 20 breadcrumb lists from initial response HTML, 32 canonical pages, 45 assets, and 94 aliases with zero failures. Both build and deploy jobs succeeded.
Remaining limitations: support categories are real section anchors on /support, not separate category pages, and markup preserves that navigation. Google Rich Results Test and Search Console rendering have not been run; local and HTTP validation do not guarantee Google rich-result display. No reviews, ratings or new editorial content were added.

## Phase 5 — Performance measurement and targeted fixes

Priority: Measure first
Status: Complete — measured and verified in production

### Tasks

- [x] Establish repeatable mobile and desktop lab baselines for home, features, a guide, and a support page.
- [x] Record tool/version, device/network settings, run dates, and the median of repeated comparable runs.
- [x] Inspect available field Core Web Vitals data; record unavailable/insufficient data accurately (API quota prevented field retrieval).
- [x] Measure LCP, CLS, lab blocking time, JS/CSS transfer sizes, image sizes, compression, and caching.
- [x] Inspect hydration/main-thread costs and third-party script impact.
- [x] Fix only demonstrated bottlenecks while preserving analytics and existing image optimizations.
- [x] Compare before/after under the same conditions and verify navigation and visual behavior.

### Acceptance

- A reproducible baseline and comparison are recorded.
- Identified material bottlenecks are fixed or documented with rationale.
- No claim of passing field Core Web Vitals is based solely on Lighthouse.
- Where sufficient field data exists, evaluate LCP <= 2.5 s, INP <= 200 ms, and CLS <= 0.1 at the 75th percentile.
- No unexplained material regression in tested pages.

### Evidence

Implementation: `926b09e9ed28052a04503c00f2ef5148dfc706c5` (logo priority), `d797ebd95c0fdb5769fe1d6656d431a09abed4a5` (successful-response cache policy snapshot).
Measurement: 2026-10-02, Lighthouse 13.5.0 / Chrome 154, three mobile and three desktop runs on each of four routes before and after; exact settings and per-run metrics retained in [performance evidence](seo/performance/).
Report and before/after table: [PHASE_5_REPORT.md](seo/performance/PHASE_5_REPORT.md). Mobile scores 95–97 after; desktop 100; CLS zero. Versioned JS/CSS cache warnings and logo priority recommendation resolved. Small timing variations are documented, not treated as causal gains.
Field data: unavailable because PageSpeed Insights returned quota error 429; no field CWV pass claimed.
Verification: 85 tests, targeted ESLint, successful Pages deployment/live SEO checks (32 pages, 45 assets, 94 aliases, 20 breadcrumbs); homepage mobile before/after screenshot checked.
Limitations: four-page lab sample, no field INP; lazy support PNGs, framework/analytics JS and CSS tradeoffs documented in the report. Phase 6 remains not started.

## Phase 6 — Production crawlability and indexing verification

Priority: Final verification
Status: Complete — verified; indexing follow-ups recorded
Dependency: Phases 1–5

### Tasks

- [x] Recheck all current sitemap URLs, canonicals, metadata, HTTP robots headers, redirects, assets, and internal links.
- [x] Verify robots.txt and sitemap.xml content types and accessibility.
- [x] Check representative pages using Google Search Console URL Inspection where the connected tooling supports it.
- [x] Review sitemap processing, indexing exclusions, duplicate canonical reports, and crawl errors.
- [x] Check whether Cloudflare challenges/security rules interfere with verified search crawlers; do not weaken protection based on a spoofed user-agent test.
- [x] Submit or refresh the sitemap only if necessary and supported.
- [x] Record technical fixes separately from expected indexing delays.
- [x] Update this tracker with final evidence and any follow-up items.

### Acceptance

- No unresolved technical crawling/indexability defect is found in the verified route set.
- Alias redirects and genuine 404s behave as specified.
- Sitemap processing and representative inspection results are recorded where access permits.
- Unavailable reports or insufficient data are explicitly identified; Google indexing and ranking are not guaranteed.
- All completed phases have implementation and production evidence.

### Evidence

Verification date: 2026-10-02; production release `1d48d3b8200690554392fa9245fc33c57e4370d5`.
Production: 32 pages, 45 assets, 94 aliases, 20 breadcrumb schemas; zero live check failures. robots.txt plain text and sitemap XML accessibility verified and enforced in deployment checks.
Search Console: sitemap processed, 32 URLs, zero errors/warnings; all 32 canonical URLs inspected: 5 indexed, 11 discovered/not indexed, 16 unknown. No reported technical exclusion in these results. No sitemap refresh required. Deprecated sitemap indexed count is disregarded.
Cloudflare: no custom blocking/rate-limit rules or legacy firewall rules; Bot Fight Mode/crawler protection off; genuine Google sitemap and successful historical mobile fetches confirmed. No security settings changed. Request-level verified-bot events not reviewed.
Evidence: [PHASE_6_REPORT.md](seo/PHASE_6_REPORT.md), [phase-6-evidence.json](seo/phase-6-evidence.json).
Follow-ups: recheck the 27 unindexed URLs in 1–2 weeks; manually review property-wide Page Indexing/Crawl Stats and Google-selected canonicals where the connector does not expose them. No recurring tracker configured. Google indexing/ranking is not guaranteed. All six phases have recorded implementation and production evidence.

## Completion rules

A phase is complete only when its applicable acceptance checks pass and evidence is recorded. If deployment or external verification remains unavailable, mark it “Implemented — verification pending.” New content and keyword strategy remain outside this plan.
