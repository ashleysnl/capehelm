# Phase 6 — Production crawlability and indexing verification

Verified 2 October 2026 against production release `1d48d3b8200690554392fa9245fc33c57e4370d5`. Scope: technical SEO; no content or design changes.

## Production checks

`npm run test:seo:live` passed with zero failures: all 32 canonical sitemap pages, 45 referenced assets, 94 page alias redirects and 20 breadcrumb schemas. Page checks cover titles/descriptions, self-canonicals, HTML/HTTP robots directives and clean internal page URLs. Genuine nonexistent URLs return 404; HTTP, www, .ca and original GitHub Pages entry points redirect to HTTPS .com. Path/query preservation is checked for the representative redirects. Sitemap route set matches repository route discovery.

robots.txt: HTTP 200, `text/plain; charset=utf-8`, `Allow: /`, production sitemap declaration. sitemap.xml: HTTP 200, `application/xml`, 32 unique public URLs. These MIME checks are now enforced in the existing deployment regression script. No technical crawling/indexability defect was found in this route set.

## Google Search Console

Connected property: `sc-domain:capehelm.com`, verified owner, activated and readable. Google downloaded `https://capehelm.com/sitemap.xml` at `2026-10-02T09:49:40.919Z`. It is processed (not pending), with 32 submitted URLs, zero errors and zero warnings. No resubmission was needed: current route set is already processed and there were no new routes in these phases.

The sitemap API returned indexed=0, but that field is [deprecated and must not be used](https://developers.google.com/webmaster-tools/v1/sitemaps). Actual URL Inspection results below confirm five indexed pages.

All 32 canonical URLs have a current saved inspection from this audit:

| Coverage state | Count |
| --- | --- |
| Submitted and indexed | 5 |
| Discovered - currently not indexed | 11 |
| URL is unknown to Google | 16 |

The five indexed pages have `ALLOWED` robots, `INDEXING_ALLOWED`, `SUCCESSFUL` fetches and mobile Google crawls: homepage, Features, Guides index, Privacy, and `/guides/do-personal-finance-apps-need-bank-access`. Their last crawl dates range from 23 September through 1 October. These historical inspections are not Google's live test of the current deployment; the independent live HTTP crawl covers the current release.

No sampled canonical URL reported a robots/noindex block, fetch error or duplicate exclusion. This does not prove Google will index the remaining pages. [Google's inspection guidance](https://support.google.com/webmasters/answer/9012289) distinguishes unknown/discovered pages from indexed pages. Here these are discovery/crawl scheduling observations, with no demonstrated technical defect to fix. The two extra inspected aliases (`https://capehelm.com/features.html` and `https://capehelm.ca/features`) are unknown to Google; their current redirects pass the live HTTP checks.

### Inspection detail

| Route | Google coverage | Last Google crawl |
| --- | --- | --- |
| `/` | Submitted and indexed | 2026-09-23T22:24:46+00:00 |
| `/cash-flow-forecast` | URL is unknown to Google | Not reported |
| `/csv-bank-statement-import` | URL is unknown to Google | Not reported |
| `/download` | URL is unknown to Google | Not reported |
| `/faq` | Discovered - currently not indexed | Not reported |
| `/features` | Submitted and indexed | 2026-09-23T22:31:45+00:00 |
| `/guides` | Submitted and indexed | 2026-09-29T00:58:38+00:00 |
| `/guides/budget-vs-cash-flow-forecast` | Discovered - currently not indexed | Not reported |
| `/guides/do-personal-finance-apps-need-bank-access` | Submitted and indexed | 2026-09-30T06:12:51+00:00 |
| `/guides/how-to-analyze-bank-transactions-csv` | Discovered - currently not indexed | Not reported |
| `/guides/how-to-find-subscriptions-recurring-charges-bank-statement` | URL is unknown to Google | Not reported |
| `/guides/how-to-forecast-personal-cash-flow-14-days` | URL is unknown to Google | Not reported |
| `/guides/how-to-track-net-worth-without-bank-connections` | URL is unknown to Google | Not reported |
| `/personal-finance-for-mac` | Discovered - currently not indexed | Not reported |
| `/privacy` | Submitted and indexed | 2026-10-01T12:37:47+00:00 |
| `/private-personal-finance` | Discovered - currently not indexed | Not reported |
| `/support` | Discovered - currently not indexed | Not reported |
| `/support/getting-started/back-up-capehelm` | URL is unknown to Google | Not reported |
| `/support/getting-started/create-finance-document` | URL is unknown to Google | Not reported |
| `/support/getting-started/import-transactions` | URL is unknown to Google | Not reported |
| `/support/getting-started/open-finance-document` | URL is unknown to Google | Not reported |
| `/support/getting-started/review-categories` | Discovered - currently not indexed | Not reported |
| `/support/getting-started/setup-budget` | Discovered - currently not indexed | Not reported |
| `/support/getting-started/use-forecast` | URL is unknown to Google | Not reported |
| `/support/troubleshooting/backup-and-restore` | URL is unknown to Google | Not reported |
| `/support/troubleshooting/csv-will-not-import` | Discovered - currently not indexed | Not reported |
| `/support/troubleshooting/finance-document-will-not-open` | URL is unknown to Google | Not reported |
| `/support/troubleshooting/moving-renaming-finance-document` | Discovered - currently not indexed | Not reported |
| `/support/troubleshooting/remembered-document-issues` | Discovered - currently not indexed | Not reported |
| `/support/troubleshooting/restore-purchases` | URL is unknown to Google | Not reported |
| `/support/troubleshooting/subscription-access` | URL is unknown to Google | Not reported |
| `/why-capehelm` | URL is unknown to Google | Not reported |

## Cloudflare crawler review

Read-only inspection of .com zone configuration found no custom firewall/rate-limit zone ruleset and no legacy firewall rules. Bot Fight Mode and crawler protection are disabled; bot JavaScript injection is disabled. Browser Integrity Check is on; security level is medium. Managed protection remains unchanged. The redirect ruleset applies only to known alias routes, and the response-header transform applies only to successful versioned assets.

Google's recent successful sitemap download and five successful historical mobile crawls show genuine Google access. No spoofed Googlebot user-agent was treated as verified-bot evidence. No security settings were weakened, and no crawler bypass was added.

Verified-bot request-level security events were not reviewed, so universal/future Googlebot access is not established. If Search Console later reports blocked/failed fetches, correlate the affected URL/time with Cloudflare Security Events for verified bots before changing protection.

## Limits and follow-ups

- The connected tool does not expose Google's property-wide Page Indexing or Crawl Stats reports, or Google-selected canonical fields. Per-URL coverage for all 32 URLs and live declared canonicals were reviewed; the full UI duplicate/crawl reports remain a manual follow-up.
- No GSC Wizard indexing tracker is configured. Its aggregate health report was unavailable; no health score or recurring tracker was created.
- The first 25-URL inspection request timed out at the connector. Saved results were recovered from its inspection history; remaining URLs were inspected in smaller batches. The final evidence has all 32 routes, without treating the timeout as successful completion.
- Recheck the 27 unindexed URLs in 1–2 weeks, or sooner if a fetch/robots error appears. For important unknown URLs, Google's UI live test and manual Request Indexing can be considered. No automated indexing request capability was available or used, and no indexing guarantee is made.
- Phase 5 field Core Web Vitals remain unavailable due the PageSpeed API quota error. Performance/image tradeoffs are recorded in the phase-5 report.

Raw configuration, sitemap response, per-URL inspection dates/states and limitations: [phase-6-evidence.json](phase-6-evidence.json). All six requested technical phases now have recorded evidence. Follow-up indexing observation is separate from completed technical changes.
