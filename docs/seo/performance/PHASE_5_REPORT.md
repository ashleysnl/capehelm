# Phase 5 — Performance measurements and targeted fixes

Measured 2 October 2026. No new content or page layout changes.

## Reproduction and scope

GitHub Actions workflow `.github/workflows/performance.yml` runs `scripts/performance/audit.mjs` against production. Four routes, three independent cold-browser mobile runs and three desktop runs per route, before and after (48 audits). Lighthouse 13.5.0; hosted Ubuntu runner, Node 22, headless Chrome 154.0.0.0. Full reports are Actions artifacts with 30-day retention; compact per-run metrics, diagnostics and exact configuration are retained in `docs/seo/performance/`.

Mobile: simulated throttling, 150 ms RTT, 1638.4 Kbps throughput, CPU slowdown 4×, 412×823 viewport at DPR 1.75. Desktop: simulated throttling, 40 ms RTT, 10240 Kbps throughput, CPU slowdown 1×, 1350×940 at DPR 1. These are lab profiles, not observed user devices. Medians are calculated independently per metric over three runs. Network resource categories and transfer bytes are recorded in the JSON evidence.

Baseline workflow: [36998212158](https://github.com/ashleysnl/capehelm/actions/runs/36998212158), infrastructure commit `24bccd5df91dad638973cbea827ea8b57493c6de`. Baseline began on phase-4 release `f5522017305cdf90e53371ab8e5e1eda5835c48a`; measurement-only deployment occurred during that batch, without product changes. After workflow: [36999092436](https://github.com/ashleysnl/capehelm/actions/runs/36999092436), release `d797ebd95c0fdb5769fe1d6656d431a09abed4a5`. After jobs wait for their exact production revision before measuring. An intermediate run is excluded because the cache policy was refined during it.

## Targeted changes

- Header brand image: `fetchPriority="high"`, responding to Lighthouse's LCP discovery recommendation. Existing dimensions, format and layout are preserved.
- Cloudflare response-header rule: successful HTTP 200 responses under `/_next/static/` receive `Cache-Control: public, max-age=31536000, immutable`. These build assets use versioned URLs. HTML, sitemap, release marker, unversioned images and error responses are excluded. Snapshot and rollback: `docs/seo/cloudflare-phase-5-cache.json`. No existing Cloudflare rules were modified. Browser caching benefits repeat visits; cold Lighthouse timings cannot measure that benefit directly.

## Results

| Page | Device | Score before → after | LCP (s) before → after | TBT (ms) before → after |
| --- | --- | --- | --- | --- |
| home | mobile | 95 → 96 | 2.62 → 2.54 | 44 → 36 |
| home | desktop | 99 → 100 | 0.83 → 0.57 | 0 → 0 |
| features | mobile | 95 → 97 | 2.42 → 2.28 | 81 → 34 |
| features | desktop | 100 → 100 | 0.62 → 0.62 | 0 → 0 |
| guide | mobile | 96 → 96 | 2.33 → 2.37 | 133 → 93 |
| guide | desktop | 100 → 100 | 0.64 → 0.61 | 0 → 0 |
| support | mobile | 95 → 95 | 2.32 → 2.28 | 141 → 139 |
| support | desktop | 100 → 100 | 0.55 → 0.66 | 0 → 0 |

CLS was zero throughout both batches. Desktop TBT was zero throughout. TBT is a lab blocking metric and does not substitute for field INP. First-load timing differences include hosted-runner, CDN and third-party variation; they do not establish causal speed gains from these small changes.

The versioned JS/CSS cache warnings disappeared from the after diagnostics. Homepage potential cache savings dropped to 33 KiB, now unversioned images/third-party assets; the LCP priority recommendation also disappeared. Mobile homepage LCP improved from 2.62 to 2.54 s but remains slightly above 2.5 s in this lab profile. The guide increased by 42 ms; desktop support increased by 103 ms while retaining score 100 and zero blocking. These small absolute differences are consistent with lab variability, with no new resource/CLS regression.

## Remaining findings and rationale

- Initial page transfers were approximately 0.54–0.73 MB. The homepage's baseline mobile trace classified about 307 KB as scripts and 19.6 KB as CSS; full resource classification is retained per run. HTML is compressed (observed zstd) and product imagery already uses responsive WebP, explicit dimensions, and lazy loading where appropriate. System fonts avoid external font requests.
- Lighthouse reported roughly 131 KiB potential unused JavaScript, shared across routes: Google Analytics about 75 KiB, app runtime about 33 KiB, React framework about 26 KiB. Analytics remains enabled; delaying it could lose short-visit measurements. Framework hydration/main-thread work is documented rather than replacing the rendering stack for a speculative saving. Only the support search requires intentional client interactivity.
- The ~19.6 KB stylesheet is render-blocking. Blanket inline CSS or a styling rewrite has insufficient measured benefit relative to the rendering risk for pages already scoring well. Revisit if field data identifies a persistent LCP issue.
- Eight approved support PNG captures range from 453,357 to 1,174,466 bytes. They are lazy loaded; the measured support page has no screenshot. This audit therefore does not characterize screenshot-heavy support pages. Responsive compressed derivatives are a potential follow-up, with visual review to preserve small financial UI text; the originals are retained. They are not demonstrated above-fold blockers in this batch.
- The small header logo is larger than its displayed mobile size. Responsive brand derivatives are another optional follow-up; priority was the low-risk change measured here.

## Field data and verification

Google PageSpeed Insights field-data requests returned HTTP/API 429 quota exhaustion. Field data is **unavailable in this audit**, not proven insufficient, and no claim of passing real-user Core Web Vitals is made. Revisit in Search Console/CrUX when available: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at the 75th percentile.

`npm test`: 85/85 tests passed, including build, metadata, internal links, dimensions/alt text, structured data and navigation. Targeted ESLint passed. Deployment live regression checks passed for 32 public pages, 45 linked assets, 94 alias redirects and 20 breadcrumb schemas. Successful asset and missing-asset cache headers were checked separately; homepage HTML remained `max-age=600`. Lighthouse before/after viewport screenshots were inspected for the unchanged header and page layout.
