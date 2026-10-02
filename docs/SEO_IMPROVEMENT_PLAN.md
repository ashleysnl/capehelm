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
| 1 | Normalize alternate page URLs | Not started |
| 2 | Add automated technical SEO regression checks | Not started |
| 3 | Generate and validate the sitemap | Not started |
| 4 | Add breadcrumb structured data | Not started |
| 5 | Measure performance and fix demonstrated bottlenecks | Not started |
| 6 | Verify production crawlability and indexing | Not started |

## Phase 1 — Normalize alternate page URLs

Priority: High
Status: Not started

### Tasks

- [ ] Inventory canonical routes, .html aliases, index.html variants, and trailing-slash behavior, including nested guides/support routes.
- [ ] Select the smallest compatible redirect implementation for GitHub Pages behind Cloudflare.
- [ ] Permanently redirect known page trailing-slash aliases to the existing slashless canonical route.
- [ ] Permanently redirect known .html aliases to their canonical page.
- [ ] Redirect /index.html to / and handle nested index.html aliases only where a matching canonical page exists.
- [ ] Preserve query strings and avoid redirect loops.
- [ ] Preserve .ca, www, HTTP, and old GitHub Pages redirects.
- [ ] Preserve genuine 404s; do not redirect every unknown URL to the homepage.
- [ ] Ensure asset files and directories remain accessible.
- [ ] Record configuration changes and rollback instructions.

### Acceptance

- /features/ and /features.html return 301 or 308 to https://capehelm.com/features.
- /index.html returns 301 or 308 to https://capehelm.com/.
- Equivalent sampled guide/support aliases resolve to their canonical pages.
- Canonical destinations return 200 and retain their canonical tags.
- Canonical-host alias redirects take one hop wherever the delivery architecture permits; record any unavoidable chains.
- Query strings survive redirects.
- Unknown paths still return 404; JS, CSS, images, robots.txt, and sitemap.xml remain accessible.

### Evidence

Implementation commit:
Cloudflare rule IDs / rollback:
Production test date:
Tested URL/status/Location matrix:
Remaining limitations:

## Phase 2 — Automated technical SEO regression checks

Priority: High
Status: Not started
Dependency: Phase 1

### Tasks

- [ ] Inspect existing tests and extend them without duplicating coverage.
- [ ] Check every canonical route for successful rendering, one title, a description, a canonical URL, and one H1.
- [ ] Check unique titles/descriptions and canonical consistency.
- [ ] Detect accidental noindex directives in HTML and production headers.
- [ ] Validate internal page links and referenced first-party assets against deployed/build output.
- [ ] Verify sitemap URLs and robots sitemap declaration.
- [ ] Add live smoke checks for redirects, alias handling, and genuine 404 responses.
- [ ] Keep deterministic build checks separate from network-dependent production checks.
- [ ] Integrate checks with the existing Pages workflow; account for deployment propagation and avoid flaky timing assumptions.
- [ ] Document how to run each check locally.

### Acceptance

- npm test passes with meaningful coverage.
- A controlled missing route, incorrect canonical, or broken asset makes the relevant check fail.
- Production checks inspect HTTP status/Location rather than only following redirects.
- Production checks report per-URL failures and do not require private finance data.
- The deployment workflow remains compatible with the current static output.

### Evidence

Implementation commit:
Commands/results:
Failure-path verification:
Production smoke-check result:
Remaining limitations:

## Phase 3 — Generate and validate the sitemap

Priority: Medium
Status: Not started
Dependency: Phase 2

### Tasks

- [ ] Identify the existing route/content catalogue and use it as the route source where possible.
- [ ] Generate sitemap.xml during the build from canonical public routes.
- [ ] Include only intended indexable pages using https://capehelm.com URLs.
- [ ] Exclude .html/trailing-slash aliases, nonexistent routes, assets, and preview hosts.
- [ ] Keep robots.txt pointing to the production sitemap.
- [ ] Validate XML syntax, URL uniqueness, and route coverage.
- [ ] Add lastmod only if backed by meaningful page modification dates; do not set every page to the build date.
- [ ] Remove or clearly document the old manual maintenance path.

### Acceptance

- Every intended canonical page appears exactly once.
- Every sitemap URL resolves to an indexable 200 page with a matching canonical.
- Adding/removing a route is reflected through the established build process.
- No misleading lastmod values are introduced.

### Evidence

Implementation commit:
Route count and coverage:
Generated output verification:
Production sitemap verification:
Remaining limitations:

## Phase 4 — Breadcrumb structured data

Priority: Medium
Status: Not started

### Tasks

- [ ] Inspect the existing visible breadcrumb/navigation hierarchy.
- [ ] Add reusable BreadcrumbList JSON-LD for nested guides and support pages.
- [ ] Use absolute canonical URLs, sequential positions, and labels consistent with visible navigation.
- [ ] Preserve existing Article, SoftwareApplication, Organization, WebSite, and FAQPage markup.
- [ ] Validate JSON syntax and representative pages using an appropriate structured-data validator.
- [ ] Avoid unsupported ratings, fabricated reviews, or promises of search enhancements.

### Acceptance

- Representative guide and support pages contain valid BreadcrumbList markup in initial HTML.
- Breadcrumb destinations are real canonical pages and match the visible hierarchy.
- Existing schema remains valid and is not duplicated accidentally.
- Validation evidence is recorded; valid markup does not guarantee a rich result.

### Evidence

Implementation commit:
Representative URLs:
Validator/results:
Remaining limitations:

## Phase 5 — Performance measurement and targeted fixes

Priority: Measure first
Status: Not started

### Tasks

- [ ] Establish repeatable mobile and desktop lab baselines for home, features, a guide, and a support page.
- [ ] Record tool/version, device/network settings, run dates, and the median of repeated comparable runs.
- [ ] Inspect available field Core Web Vitals data; record “insufficient data” if the site is too new.
- [ ] Measure LCP, CLS, lab blocking time, JS/CSS transfer sizes, image sizes, compression, and caching.
- [ ] Inspect hydration/main-thread costs and third-party script impact.
- [ ] Fix only demonstrated bottlenecks while preserving analytics and existing image optimizations.
- [ ] Compare before/after under the same conditions and verify navigation and visual behavior.

### Acceptance

- A reproducible baseline and comparison are recorded.
- Identified material bottlenecks are fixed or documented with rationale.
- No claim of passing field Core Web Vitals is based solely on Lighthouse.
- Where sufficient field data exists, evaluate LCP <= 2.5 s, INP <= 200 ms, and CLS <= 0.1 at the 75th percentile.
- No unexplained material regression in tested pages.

### Evidence

Implementation commit (if changes required):
Measurement setup and dates:
Before/after results:
Field data availability:
Remaining limitations:

## Phase 6 — Production crawlability and indexing verification

Priority: Final verification
Status: Not started
Dependency: Phases 1–5

### Tasks

- [ ] Recheck all current sitemap URLs, canonicals, metadata, HTTP robots headers, redirects, assets, and internal links.
- [ ] Verify robots.txt and sitemap.xml content types and accessibility.
- [ ] Check representative pages using Google Search Console URL Inspection where the connected tooling supports it.
- [ ] Review sitemap processing, indexing exclusions, duplicate canonical reports, and crawl errors.
- [ ] Check whether Cloudflare challenges/security rules interfere with verified search crawlers; do not weaken protection based on a spoofed user-agent test.
- [ ] Submit or refresh the sitemap only if necessary and supported.
- [ ] Record technical fixes separately from expected indexing delays.
- [ ] Update this tracker with final evidence and any follow-up items.

### Acceptance

- No unresolved technical crawling/indexability defect is found in the verified route set.
- Alias redirects and genuine 404s behave as specified.
- Sitemap processing and representative inspection results are recorded where access permits.
- Unavailable reports or insufficient data are explicitly identified; Google indexing and ranking are not guaranteed.
- All completed phases have implementation and production evidence.

### Evidence

Verification date:
Production route count:
Search Console results:
Cloudflare crawler findings:
Outstanding follow-ups:

## Completion rules

A phase is complete only when its applicable acceptance checks pass and evidence is recorded. If deployment or external verification remains unavailable, mark it “Implemented — verification pending.” New content and keyword strategy remain outside this plan.
