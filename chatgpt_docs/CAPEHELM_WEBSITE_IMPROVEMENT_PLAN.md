# Capehelm Website Discoverability & Conversion Improvement Plan

**Status:** Active  
**Owner:** Skinner  
**Last updated:** 2026-09-26
**Primary goal:** Improve Capehelm website discoverability, clarity, trust, usefulness, and click-through rate to the Mac App Store before and immediately after launch.

---

# Overview Dashboard

## P0 — Launch-Critical

- [x] **Task 1 — Search engine indexing foundation**
- [x] **Task 2 — Technical SEO baseline**
- [x] **Task 3 — Homepage positioning and hero rewrite**
- [ ] **Task 4 — Mac App Store conversion path**
- [x] **Task 5 — Pricing and free-trial clarity**
- [x] **Task 6 — Privacy/local-first positioning**
- [x] **Task 7 — Homepage feature hierarchy**
- [x] **Task 8 — Screenshot storytelling and product proof**
- [ ] **Task 9 — FAQ and purchase-objection handling**
- [ ] **Task 10 — Launch verification and regression audit**

## P1 — High-Value Post-Launch / First Week

- [ ] **Task 11 — Improve Support into a useful knowledge hub**
- [ ] **Task 12 — Add structured data**
- [ ] **Task 13 — Add Open Graph / social sharing metadata**
- [ ] **Task 14 — Create focused SEO landing pages**
- [ ] **Task 15 — Improve the download / App Store handoff page**
- [ ] **Task 16 — Add a clear “How Capehelm Works” section**
- [ ] **Task 17 — Add privacy-respecting website measurement**
- [ ] **Task 18 — Performance and Core Web Vitals pass**

## P2 — Growth / Ongoing Discoverability

- [ ] **Task 19 — Publish high-value educational content**
- [ ] **Task 20 — Build comparison / alternative pages**
- [ ] **Task 21 — Create release notes / changelog content**
- [ ] **Task 22 — Establish an ongoing SEO monitoring routine**
- [ ] **Task 23 — Review brand/search-result presentation after launch**
- [ ] **Task 24 — Reassess conversion funnel after real traffic arrives**

## Already Completed / Existing Foundation

- [x] **Capehelm.com domain is live**
- [x] **Capehelm.ca is owned and redirected**
- [x] **HTTPS/custom-domain hosting is functioning**
- [x] **Public Privacy page exists**
- [x] **Public Support page exists**
- [x] **Public Features page exists**
- [x] **Support email `support@capehelm.com` is configured**
- [x] **Website is hosted from the Capehelm GitHub Pages project**
- [x] **Capehelm has a clear local-first privacy model to market**
- [x] **Capehelm has strong product screenshots and real application functionality to showcase**

---

# Guiding Principles

The website should do four things extremely well:

1. **Be discoverable.**
2. **Explain Capehelm in under 10 seconds.**
3. **Build enough trust that a visitor is comfortable trying it.**
4. **Move the visitor to the Mac App Store with minimal friction.**

The site should not become a generic personal-finance blog or a complicated marketing platform.

Capehelm's strongest differentiators are:

- Native macOS product experience.
- Local-first personal finance.
- No finance-data cloud storage.
- No bank credential requirement.
- No finance-data telemetry or advertising model.
- Historical transaction analysis.
- Budgeting and Budget Health.
- 14-day cash-flow Forecast.
- Trends and merchant/category analysis.
- Net Worth.
- Retirement projections.
- Local CSV import.
- PDF reporting.
- One integrated financial picture.

The core website funnel is:

**Search / referral → Capehelm website → trust + understanding → Mac App Store → trial → subscription**

---

# Task 1 — Search Engine Indexing Foundation

**Priority:** P0  
**Status:** [ ]  
**Goal:** Ensure Google, Bing, and other search engines can discover and index Capehelm quickly.

## Work

- [x] Create or verify a valid `robots.txt`.
- [x] Ensure `robots.txt` permits indexing of all public marketing pages.
- [x] Add the sitemap location to `robots.txt`.
- [x] Create or verify `sitemap.xml`.
- [x] Include every canonical public page in the sitemap.
- [x] Ensure sitemap URLs use `https://capehelm.com/...`.
- [x] Add Google Search Console.
- [x] Verify domain ownership through Cloudflare DNS.
- [x] Submit `sitemap.xml` in Google Search Console.
- [x] Request indexing for the homepage.
- [x] Request indexing for `/features`.
- [x] Request indexing for `/privacy`.
- [x] Request indexing for `/support`.
- [x] Request indexing for `/download` or its eventual replacement.
- [x] Add Bing Webmaster Tools.
- [x] Submit the sitemap to Bing.

## Acceptance Criteria

- [x] `https://capehelm.com/robots.txt` returns successfully.
- [x] `https://capehelm.com/sitemap.xml` returns successfully.
- [x] Sitemap contains only canonical production URLs.
- [x] Google Search Console recognizes the domain.
- [x] Sitemap status is accepted.
- [x] Important pages are submitted for indexing.
- [x] Bing Webmaster Tools recognizes the site.

## Execution Notes

This task should be completed before spending significant time on content SEO.

### Repository Evidence — 2026-09-23

- **Files changed:** added static `public/robots.txt` and `public/sitemap.xml`; removed the unsupported framework metadata-route implementations in `app/robots.ts` and `app/sitemap.ts`; removed the redundant global `index, follow` meta directive from `app/layout.tsx` so the generated 404 has one unambiguous `noindex`; added indexing regression coverage in `tests/indexing.test.mjs`; updated the test command in `package.json` and deployment documentation in `README.md`.
- **Public routes included:** `/`, `/features`, `/privacy`, `/support`, and `/download`.
- **Route exclusions:** `/404` is an error page; `/robots.txt`, `/sitemap.xml`, `CNAME`, images, scripts, styles, and other build assets are infrastructure/assets rather than indexable marketing pages. No redirect-only or internal/admin routes were found.
- **Validation performed:** confirmed the GitHub Pages workflow publishes `dist/client` at the custom domain; built the production export; verified both crawl files are copied to the deployed artifact root; parsed the sitemap as XML; checked the exact canonical URL set, production origin, uniqueness, and rendered-page coverage; checked robots directives; ran lint and the repository test suite.
- **Google Search Console:** the `capehelm.com` Domain property is verified, the sitemap is accepted, and all five public pages have been submitted for indexing.
- **Bing Webmaster Tools:** the site is recognized and the production sitemap has been submitted.
- **Manual work remaining:** none for Task 1.
- **Production verification:** A production check on 2026-09-23 confirmed that `https://capehelm.com/robots.txt` returns HTTP 200 as `text/plain` and `https://capehelm.com/sitemap.xml` returns HTTP 200 as `application/xml`. Google Search Console and Bing Webmaster Tools are configured, and the sitemap has been submitted to both. Canonical tags, hostname redirects, and broader per-page metadata work remain scoped to Task 2.

---

# Task 2 — Technical SEO Baseline

**Priority:** P0  
**Status:** [x]
**Goal:** Make every important page technically understandable to search engines.

## Work

- [x] Add a unique `<title>` to every public page.
- [x] Add a unique meta description to every public page.
- [x] Add canonical URLs to every public page.
- [x] Confirm `www.capehelm.com` and `capehelm.com` resolve consistently.
- [x] Confirm the GitHub Pages hostname is not treated as a competing canonical URL.
- [x] Confirm the `.ca` domain redirects cleanly to `.com`.
- [x] Confirm each page has one clear `<h1>`.
- [x] Ensure heading hierarchy uses logical `<h2>` and `<h3>` structure.
- [x] Ensure screenshots/images have descriptive `alt` text.
- [x] Add meaningful filenames for marketing images where practical.
- [x] Verify all internal links use production URLs or clean relative paths.
- [x] Remove broken, placeholder, or dead links.
- [x] Verify no accidental `noindex` or crawler-blocking directives are present.
- [x] Confirm all pages return appropriate HTTP status codes.
- [x] Confirm the website works without JavaScript-dependent navigation failures.

## Suggested Titles

### Homepage

`Capehelm | Private Personal Finance & Budgeting for Mac`

### Features

`Capehelm Features | Private Personal Finance for Mac`

### Privacy

`Private, Local-First Personal Finance for Mac | Capehelm`

### Support

`Capehelm Support | Help, Setup & Troubleshooting`

### Forecast page

`Cash Flow Forecasting for Mac | Capehelm`

## Suggested Homepage Meta Description

`Capehelm is a private personal finance app for Mac with budgeting, 14-day cash-flow forecasting, spending analysis, net worth and retirement planning. Your financial data stays local.`

## Acceptance Criteria

- [x] Every public page has a unique title and meta description.
- [x] Every page points to the correct canonical URL.
- [x] No duplicate homepage is indexable through GitHub Pages.
- [x] No broken links remain.
- [x] Heading hierarchy is clean.
- [x] Image alt text is meaningful.
- [ ] Updated metadata is deployed and verified on the live production pages.

### Repository Evidence — 2026-09-23

- **Files changed:** updated production URL configuration in `config/site.ts` and `app/layout.tsx`; added page-specific metadata to all five public routes; changed visual mockup labels in `components/ProductVisuals.tsx` from document headings to styled text and updated their selectors in `app/globals.css`; added `tests/technical-seo.test.mjs`; refined the rendered-page availability assertion in `tests/rendered-html.test.mjs`.
- **Titles and descriptions:** all five indexable pages now emit one unique, descriptive title and one unique, product-accurate meta description. The Download description retains the current coming-soon status and does not claim that an install is available.
- **Canonical URLs:** `/` resolves to the framework-normalized origin canonical `https://capehelm.com`; `/features`, `/privacy`, `/support`, and `/download` point to their matching clean `https://capehelm.com/...` URLs. No canonical contains localhost, `.ca`, or the GitHub Pages hostname, and the 404 emits no canonical.
- **Heading fixes:** each public page has exactly one `<h1>`. Synthetic product-window and device/report labels that used `<h3>` or `<h4>` purely for visual styling now use styled paragraphs, leaving a logical page-level `<h1>` → `<h2>` → `<h3>` outline without skipped levels.
- **Image audit:** no missing alternative text was found. The header logo and app icon have concise alt text, the footer mark is correctly decorative with `alt=""`, and CSS-rendered product visuals expose descriptive `role="img"` labels. Existing brand asset filenames are meaningful; no rename was necessary.
- **Link audit:** no broken internal route or fragment link was found. Header, mobile navigation, footer, Privacy, Support, Download, and in-page anchors all use clean relative URLs and work in the static HTML without JavaScript. The only external links are `mailto:support@capehelm.com`.
- **Crawl directives and 404:** public pages emit no `noindex` or `nofollow`; the generated 404 emits one `noindex`, no conflicting global directive, and no canonical.
- **Build and tests:** the GitHub Pages production export prerendered all five public routes plus the 404. Lint passed, and all 15 tests passed, including exact metadata, canonical uniqueness, heading order, image alternatives, clean routes, valid fragments, crawl directives, and Task 1 consistency.
- **External verification:** all five canonical production pages returned HTTP 200 and a nonexistent path returned 404. `www.capehelm.com`, `capehelm.ca`, `www.capehelm.ca`, and `ashleysnl.github.io/capehelm` each returned a path-preserving HTTP 301 to `https://capehelm.com`.
- **URL-shape warning:** the clean extensionless routes are canonical. GitHub Pages also serves `.html` variants with HTTP 200, but their embedded canonical points to the clean route. Trailing-slash variants such as `/features/` return 404, matching the repository's non-trailing-slash convention.
- **Deferred scope:** existing site-wide Open Graph and X metadata remains unchanged for Task 13, and no structured data is present or added before Task 12.
- **Manual checks remaining:** commit and push these repository changes so GitHub Pages deploys them, then confirm the live `<title>`, meta description, and canonical on all five pages. Recheck external redirects if Cloudflare DNS or GitHub Pages custom-domain settings change.

---

# Task 3 — Homepage Positioning and Hero Rewrite

**Priority:** P0  
**Status:** [x]
**Goal:** Make Capehelm understandable within approximately 10 seconds.

## Recommended Hero Direction

### Headline

**Understand your money. Plan what's next.**

### Supporting Copy

**Private personal finance for Mac.**

Track spending, build a budget, forecast the next 14 days, monitor your net worth and plan retirement — while keeping your financial data on your Mac.

### Primary CTA

**Download on the Mac App Store**

### Supporting Line

`2 months free for eligible new subscribers · Monthly or annual · No ads`

## Work

- [x] Rewrite the homepage hero around user outcomes rather than internal module names.
- [x] Explicitly state that Capehelm is for macOS.
- [x] Use "private personal finance" or equivalent language above the fold.
- [x] Mention the 14-day Forecast above the fold or immediately after the hero.
- [x] Add one dominant Mac App Store CTA.
- [x] Avoid competing primary CTAs.
- [x] Keep hero copy short enough to scan quickly.
- [x] Ensure the first screenshot supports the hero message.
- [x] Confirm the hero works well at desktop and narrow widths.

## Acceptance Criteria

A new visitor should immediately understand:

- What Capehelm is.
- That it is a Mac app.
- That it handles personal finance.
- That it is privacy/local-first.
- That it does more than historical expense tracking.
- Where to click to get the app.

### Repository Evidence — 2026-09-23

- **Previous hero:** the homepage opened with “See where your money is going. Know where it’s going next.”, a module-heavy supporting sentence, a “Coming Soon” button to `/download`, an “Explore Capehelm” Forecast anchor, and three small trust claims. Mac and local-first language were present, but “14-day Forecast,” Retirement, subscription/trial context, and an actionable App Store CTA were not explicit in the primary scan.
- **New hero copy:** “Private personal finance for Mac.” appears above “Understand your money. Plan what's next.” The body now states: “Track spending, build a budget, forecast the next 14 days, monitor your net worth and plan retirement — while keeping your financial data on your Mac.”
- **CTA behavior:** the hero contains one dominant “Download on the Mac App Store” link and one visually subordinate “Explore Capehelm” text link. The repository does not contain a production App Store listing URL, so `macAppStoreUrl` is a clearly named configuration placeholder; until it is populated, the hero CTA uses the existing `/download` availability page rather than a fabricated external URL. The supporting line reads “2 months free for eligible new subscribers · Monthly or annual · No ads.”
- **First product visual:** retained the existing synthetic Dashboard product window because it reinforces the full positioning in one view: current spending, budget status, a 14-day outlook, net worth, and local-only status. Its accessible label identifies the synthetic Dashboard and its contents.
- **Responsive validation:** inspected the built homepage at 1440×900, 1280×800, 834×1112, and 390×844. Desktop, laptop, and tablet use a deliberate two-line headline; phone uses a readable three-line wrap. The CTA remains prominent, the copy and trial line remain readable, the Dashboard stays within its container, and final viewport checks found no horizontal scrolling or overlapping hero elements.
- **Accessibility and semantics:** the homepage retains one `<h1>`; positioning, body, and trial copy use paragraphs; the CTA is a descriptive anchor with the existing visible `:focus-visible` treatment; and the product visual retains a meaningful `role="img"` label.
- **Validation results:** `npm run lint` passed. `npm test` passed all 16 tests and includes a successful production build that prerendered all six routes. The Task 3 regression test verifies the exact hero positioning, required product concepts, one primary App Store CTA, qualified trial line, and Dashboard visual. The built route/link suite found no broken internal routes or fragments.
- **Deferred:** the official App Store URL plus repeated/header/final CTA work remains Task 4; detailed pricing remains Task 5; broader privacy copy remains Task 6; homepage feature reordering remains Task 7; full screenshot storytelling remains Task 8; and FAQ, structured data, Open Graph, new landing pages, analytics, and performance work remain in their assigned later tasks.

---

# Task 4 — Mac App Store Conversion Path

**Priority:** P0  
**Status:** [ ] Repository work complete; App Store launch checks pending
**Goal:** Minimize friction between the website and the Mac App Store.

## Work

- [ ] Add the official Mac App Store badge after obtaining Apple&apos;s approved asset.
- [x] Add the App Store CTA to the site header with the safe pre-launch fallback.
- [x] Add the App Store CTA to the hero with the safe pre-launch fallback.
- [x] Add a second CTA after the core feature section.
- [x] Add a final CTA near the footer.
- [x] Ensure the CTA is visually dominant over secondary navigation.
- [ ] Ensure every CTA points to the final production App Store listing.
- [x] Implement and test future-safe external-link behavior.
- [ ] Verify Mac App Store links on Safari.
- [ ] Verify Mac App Store links from mobile devices.
- [x] Consider a sticky CTA on small-screen layouts if it does not harm usability; retain the sticky header CTA and do not add an obscuring bottom overlay.

## Recommended CTA Language

Preferred:

**Download on the Mac App Store**

Alternative:

**View Capehelm on the Mac App Store**

Avoid vague CTAs such as:

- Learn More
- Get Started
- Continue

when the desired action is specifically App Store conversion.

## Acceptance Criteria

- App Store CTA is visible above the fold.
- CTA appears multiple times without becoming visually repetitive.
- No page leaves the user wondering where to download Capehelm.
- All CTA links work.

## Task 4 Evidence — September 24, 2026

- **Shared destination:** `config/site.ts` keeps `macAppStoreUrl` as the one authoritative future listing value. `resolveMacAppStoreDestination` accepts only an HTTPS `apps.apple.com` app listing and otherwise returns `/download`; `AppStoreLink` supplies that resolved destination to every conversion CTA.
- **CTA locations:** the responsive header, homepage hero, homepage post-features section, Features-page closing section, homepage final section and footer now use `AppStoreLink`. The hero remains the dominant action and its existing trial line is preserved.
- **Pre-launch handoff:** `/download` states that Capehelm is coming to the Mac App Store, that no listing or direct-download build is currently available and that the page will link to the official listing once live. No fake Apple, TestFlight, App Store Connect or guessed listing URL exists in the repository.
- **Official badge:** no official Apple-provided badge asset is present in `public/`; the existing branded CTA button is retained rather than imitating the badge. Obtaining and adding Apple&apos;s approved asset remains a manual follow-up.
- **Responsive and accessibility:** the header uses the full CTA label on desktop and the shorter “Download” label at phone widths; CTA anchors remain keyboard accessible with the shared visible focus treatment. No new tab is forced, and a configured external listing receives `rel="external"`. Layout validation covers 1440px, 1280px, tablet and approximately 390px widths with no intended horizontal overflow or text truncation.
- **Sticky CTA decision:** no separate phone-width sticky CTA was added. The existing sticky header keeps one conversion action reachable without obscuring content or competing with Safari chrome.
- **Validation results:** `npm run lint` passed; `npm test` passed all 20 tests and its production build prerendered all public routes; the CTA/link regressions passed; and `git diff --check` passed. The final browser pass confirmed the shared `/download` fallback, stable accessible header label, non-truncated CTA text and no user-scrollable horizontal overflow at 1440px, 1280px, 834px and 390px.
- **Post-launch activation:** set `macAppStoreUrl` to the real production listing, rebuild, verify every rendered CTA, then complete Safari and physical mobile-device link checks. Those three launch-dependent checklist items remain open.

---

# Task 5 — Pricing and Free-Trial Clarity

**Priority:** P0  
**Status:** [x]
**Goal:** Remove uncertainty about cost and trial structure before the App Store click.

## Work

- [x] Add the current monthly subscription price.
- [x] Add the current annual subscription price.
- [x] State that eligible new subscribers receive Apple's two-month introductory free trial.
- [x] Explain that Monthly and Annual unlock the same Capehelm feature tier.
- [x] Explain that subscriptions are managed through Apple.
- [x] Avoid implying the trial is available to every user regardless of Apple eligibility.
- [x] Keep website pricing synchronized with App Store Connect.
- [x] Add a clear note that pricing may vary by storefront/currency where appropriate.

## Recommended Section

### Try Capehelm free for two months

Eligible new subscribers can access the full Capehelm experience during Apple's two-month introductory free trial. The introductory trial is available with either subscription option, subject to Apple eligibility.

**Monthly — US$4.99/month**

**Annual — US$49.99/year**

Monthly and Annual unlock the same Capehelm features. Subscriptions are purchased and managed through Apple. Pricing may vary by storefront, region, currency and applicable taxes.

## Acceptance Criteria

- [x] Pricing matches the current authoritative subscription configuration.
- [x] Trial language matches Apple's configured offer.
- [x] No outdated 45-day trial language remains anywhere on the public website.
- [x] No legacy Full Unlock / one-time purchase language remains on the public website.

## Task 5 Evidence — September 24, 2026

- **Pricing and tier structure:** the homepage conversion section now shows Monthly at **US$4.99/month** and Annual at **US$49.99/year**, and states that both options unlock the same Capehelm features.
- **Trial eligibility:** the section states that eligible new subscribers can receive Apple's two-month introductory free trial with either Monthly or Annual, subject to Apple eligibility. It does not promise a trial to every visitor.
- **Apple management and variation disclosure:** the homepage states that subscriptions are purchased, renewed, cancelled, restored and managed through Apple, that Apple determines introductory-trial eligibility, and that pricing may vary by storefront, region, currency and applicable taxes.
- **Conversion placement:** the pricing section appears after the complete feature overview and includes the existing Mac App Store download CTA. Its two-card presentation adapts to a single-column phone layout.
- **Legacy-copy cleanup:** the public Privacy Policy now describes subscriptions and the introductory trial through Apple StoreKit. Obsolete Full Unlock language was removed, and no public-facing 45-day Trial or one-time-purchase wording remains.
- **Files changed:** `app/page.tsx`, `app/globals.css`, `app/privacy/page.tsx`, and `tests/rendered-html.test.mjs`.
- **Validation results:** the production build completed successfully; all 22 tests passed; lint and `git diff --check` passed; and browser QA confirmed clean layouts at 1440×900 and 390×844.
- **Repository status:** commit `095e0da` (`Add subscription pricing and trial clarity`) was pushed to `origin/main`.

---

# Task 6 — Privacy / Local-First Positioning

**Priority:** P0  
**Status:** [x]
**Goal:** Turn Capehelm's privacy model into a primary product differentiator.

## Work

- [x] Add a prominent privacy section to the homepage.
- [x] State that transaction and finance-document data stay local.
- [x] State that Capehelm does not require online banking credentials.
- [x] State that Capehelm does not upload finance data to Capehelm servers.
- [x] State that there is no finance-data telemetry.
- [x] State that there is no advertising model.
- [x] Link clearly to the full Privacy Policy.
- [x] Avoid absolute claims that exceed the app's actual privacy architecture.
- [x] Preserve the narrow StoreKit exception for subscription commerce.
- [x] Keep privacy wording consistent with the App Store privacy disclosure.

## Suggested Section

### Your finances don't belong on our servers.

**Your transaction data stays local.**  
Capehelm is designed around local Finance Documents rather than hosted financial accounts.

**No bank credentials.**  
Import supported statement files instead of handing another service access to your online banking.

**No finance-data advertising profile.**  
Capehelm is a paid product, not an advertising platform.

**You control your files.**  
Your Finance Document, backups and exports remain under your control.

## Acceptance Criteria

- [x] Privacy appears prominently on the homepage, not only on `/privacy`.
- [x] Transaction and Finance Document data are accurately described as local-first.
- [x] No online-banking credentials are required by Capehelm.
- [x] Personal finance data is not uploaded to Capehelm-operated servers.
- [x] No finance-data telemetry or advertising-funded business model is implied.
- [x] User control of Finance Documents, backups, reports and exports is clear.
- [x] The homepage links clearly to the full Privacy Policy.
- [x] Claims avoid implying zero network activity.
- [x] The Apple StoreKit subscription-commerce exception remains explicit.
- [x] No conflicting public website or App Store privacy wording exists.
- [x] Production build, automated validation and responsive review pass.

## Task 6 Evidence — September 24, 2026

- **Homepage section:** expanded the existing mid-funnel local-first banner after Reports and before the complete feature overview. The section now leads with “Your finances don't belong on our servers,” presents four concise privacy principles and includes a direct “Read our Privacy Policy” action.
- **Final privacy claims:** transaction data stays local; Capehelm works with local Finance Documents rather than a hosted Capehelm financial account; Capehelm does not require online-banking credentials; Capehelm is a paid product rather than an advertising platform; Finance Documents, backups, reports and exports remain local or in user-chosen storage; Capehelm does not upload transaction data or Finance Document contents to its servers; and Capehelm does not use finance-data telemetry.
- **Network boundary:** the homepage does not claim that Capehelm never connects to the internet or that no data ever leaves the computer. It states that Apple handles subscription commerce and that StoreKit is used for product, offer, purchase, entitlement and restore operations—not personal finance content.
- **Privacy Policy consistency:** the StoreKit section now explicitly covers Monthly and Annual product loading, introductory-offer eligibility, purchase and renewal processing, entitlement verification, Apple-managed subscription-state changes and restore through `AppStore.sync()`. It continues to state that personal finance content is not sent to Apple for purchase or entitlement processing.
- **Site-wide audit:** reviewed the homepage, Privacy, Features, Download, Support, footer, shared metadata/configuration and tracked repository documentation. The broad homepage phrase “no telemetry” was the only conflicting claim found; it was narrowed to “no finance-data telemetry.” No separate tracked App Store privacy-disclosure document exists in this repository.
- **Files changed for Task 6:** `app/page.tsx`, `app/globals.css`, `app/privacy/page.tsx`, `tests/rendered-html.test.mjs`, and this improvement plan.
- **Privacy link verification:** the homepage action resolved to `/privacy`, loaded the current Privacy Policy title and exposed the StoreKit section.
- **Validation results:** the production export prerendered all public routes; all 24 tests passed; lint and `git diff --check` passed; desktop QA at 1440×900 and mobile QA at 390×844 were clean; and the browser reported no console errors. The small site-wide mobile width overrun remains attributable only to the existing intentionally clipped Mac device mockup, not the Task 6 section.
- **App Store privacy position:** the final website wording matches the supplied production privacy architecture and preserves StoreKit as a narrow subscription-commerce service rather than a finance-data collection path.
- **Remaining manual check:** after these changes are committed and deployed, verify the section and `/privacy` link once on the live GitHub Pages custom domain.

---

# Task 7 — Homepage Feature Hierarchy

**Priority:** P0  
**Status:** [x]
**Goal:** Replace feature inventory with user-oriented outcomes.

## Recommended Structure

### Where did my money go?

- Dashboard
- Transactions
- Trends
- Merchant analysis
- Categories

### Am I staying on track?

- Budget Health
- Budget Builder
- Planned spending
- Monthly projections

### What's going to happen next?

- 14-day Forecast
- Upcoming commitments
- Projected account balance
- Forecast Coverage

### How am I doing long term?

- Net Worth
- Assets and liabilities
- Retirement planning
- Account-level projections

### Can I share what matters?

- Weekly Money Check-In
- Spending Review
- Month-End Review
- PDF reporting

## Work

- [x] Reorganize feature presentation around user questions.
- [x] Keep detailed feature inventory on `/features`.
- [x] Reduce the amount of text on the homepage.
- [x] Lead with Forecast, Budget, Trends, Net Worth, and Retirement.
- [x] Make reports a supporting value proposition.
- [x] Avoid presenting technical/internal names without explanation.
- [x] Use short, outcome-oriented copy.

## Acceptance Criteria

- Homepage feels understandable to a non-technical user.
- The homepage does not read like a product specification.
- Major differentiators are obvious without scrolling through a long feature list.

## Task 7 Evidence — September 25, 2026

- **Files changed for Task 7:** `app/page.tsx`, `app/globals.css`, `tests/rendered-html.test.mjs`, and this improvement plan.
- **Homepage hierarchy:** replaced the Past / Present / Future strip, separate Forecast, Budget, Trends and Net Worth spotlights, the dominant Reports showcase, and the ten-card capability inventory with one concise five-question section: “Where did my money go?”, “Am I staying on track?”, “What's going to happen next?”, “How am I doing long term?”, and “Can I share what matters?”.
- **Major capability emphasis:** Trends and Budget lead into a full-width 14-day Forecast centerpiece with the existing synthetic product visual; Net Worth and Retirement share a dedicated long-term card. Outcome copy explains each capability before naming supporting workflows.
- **Reports repositioning:** reports now appear once, after the core analytical and planning workflows, as concise weekly and month-end PDF check-ins for a partner or household member rather than as a primary purchase driver.
- **Copy reduction:** consolidated repeated product explanations, metric lists, callout chips, report badges, and the ten-item homepage inventory. The homepage now points visitors to `Explore all features` for deeper evaluation.
- **`/features` verification:** the detailed feature inventory remains intact and reachable at `/features`; its Forecast, Budget, Trends, Net Worth, Retirement, reporting, import and local-control content continues to render and pass route/fragment validation.
- **Regression coverage:** added a homepage assertion for all five questions, the major differentiators, supporting PDF-report language, the `/features` CTA, and removal of the former feature-grid and Reports structures. Existing Pricing, Privacy, App Store and public-route checks remain green.
- **Validation results:** the production export prerendered all six routes; all 25 tests passed; `npm run lint` and `git diff --check` passed. Browser inspection at 1440×900 and 390×844 confirmed the hierarchy, Forecast visual, CTA, card wrapping and typography; Task 7 elements stayed within the narrow viewport and the browser console reported no warnings or errors.
- **Responsive note:** the previously documented site-wide four-pixel mobile width overrun remains attributable to the existing intentionally clipped device mockup; every Task 7 element stays within the viewport and introduces no horizontal overflow.
- **Publication verification:** GitHub Pages workflow run 16 completed successfully for the Task 7 commit. The live `capehelm.com` homepage exposed all five questions, the `Explore all features` link, and the preserved Privacy and Pricing sections; the live `/features` page retained its detailed capability content. No Task 7 manual checks remain.

---

# Task 8 — Screenshot Storytelling and Product Proof

**Priority:** P0  
**Status:** [x]
**Goal:** Make screenshots explain the value of Capehelm rather than merely show UI.

## Work

- [x] Select 4–6 strongest production-quality screenshots.
- [x] Avoid screenshots containing personal finance data.
- [x] Use fictional/synthetic content only.
- [x] Write a headline for each screenshot.
- [x] Write a one-sentence explanation beneath each screenshot.
- [x] Ensure screenshots are optimized for web size.
- [x] Provide high-DPI assets.
- [x] Add descriptive alt text.
- [x] Verify screenshots on desktop and narrow layouts.
- [x] Keep screenshot styling consistent.

## Recommended Screenshot Stories

### Forecast

**See the next 14 days before they happen.**  
Capehelm combines recurring commitments and expected spending into a forward-looking cash-flow view.

### Trends

**Understand what's actually changing.**  
Explore categories and merchants to see where spending patterns are moving.

### Budget

**Know where the month is heading.**  
Budget Health compares actual spending with your plan and projected month end.

### Net Worth

**Track the whole financial picture.**  
Bring assets and liabilities together and follow how they change over time.

### Retirement

**Model the future using assumptions you control.**  
Project included retirement accounts and contributions without giving up control of your data.

## Acceptance Criteria

- [x] Every screenshot has a purpose.
- [x] No private data appears.
- [x] Images load quickly.
- [x] Captions explain benefits in plain language.

## Implementation Evidence — September 26, 2026

- **Files changed:** `app/page.tsx`, `app/globals.css`, `tests/rendered-html.test.mjs`, this plan, and ten new responsive WebP assets in `public/product/`.
- **Homepage placement:** added a prominent `See Capehelm in action` product-proof section directly after the five-question outcome hierarchy and before the local-first Privacy section. Forecast is the full-width lead story; Trends, Budget, Net Worth and Retirement follow in a compact editorial grid.
- **Screenshot selection:** used all six approved module captures—Dashboard, Forecast, Trends, Budget, Net Worth and Retirement. Dashboard leads the homepage and its matching `/features` chapter; the other five retain their distinct product-proof stories. No candidate was excluded for privacy, quality, redundancy or layout.
- **Privacy review:** every source screenshot visibly identifies its content as `Demo — Fictional Data` and uses demo/fictional/example labels. No real names, account numbers, personally identifiable information or real Finance Document content was found. Source SHA-256 hashes were rechecked after optimization and remained unchanged.
- **Asset work:** copied rather than moved the approved sources and created 1400- and 2560-pixel WebP variants for each module. The five original 8:5 captures remain 1400×875 and 2560×1600; Dashboard preserves its native ratio at 1400×911 and 2560×1665. The twelve delivered files total about 1.2 MB versus about 27.4 MB for the six source PNGs; metadata was removed and the 2560-pixel variants preserve high-DPI clarity.
- **Product storytelling:** every story has a module label, benefit-led headline, one concise supporting sentence and descriptive alt text. The section explicitly identifies the screenshots as fictional demo data.
- **Responsive/performance behavior:** images use responsive `srcset`/`sizes`, explicit 2560×1600 intrinsic dimensions, preserved 8:5 aspect ratios, asynchronous decoding and below-the-fold lazy loading. Cards share one border, radius, frame, shadow and background treatment.
- **Validation results:** the production export prerendered all six routes; all 26 tests passed; `npm run lint` and `git diff --check` passed. Browser inspection at 1440×900, 1280×800, 834×1112 and 390×844 confirmed consistent framing, readable copy, clean stacking and loaded responsive assets; the console reported no warnings or errors.
- **Overflow check:** every Task 8 card remains inside the viewport at 390 px. The previously documented site-wide four-pixel mobile overrun remains attributable to the existing intentionally clipped device mockup and was not increased by Task 8.
- **Source integrity:** the originals in `docs/chatgpt-project` were not edited or moved, and no screenshot or financial information was uploaded to an external image service. The added Dashboard source retained SHA-256 `776637fa3bed4eff4e906650f85cfbda303b33292d43d060d5d2eb2bbcd61d7d` after optimization.
- **Publication verification:** GitHub Pages workflow run 36235061261 completed successfully for commit `7dc0c4e`. The live `capehelm.com` homepage exposed all five stories, loaded all five responsive WebP assets, retained the Features, Privacy and Pricing content, introduced no desktop overflow, and reported no browser warnings or errors. The live `/features` route and its detailed capability inventory remained reachable. No Task 8 manual checks remain.
- **Real-screenshot cleanup — September 26, 2026:** removed the former code-generated `ProductVisuals` dashboard, Forecast, Budget, Trends, Net Worth, Retirement, report and device mockups. The homepage hero now uses the approved real Dashboard capture, and five detailed `/features` chapters use their matching approved real product captures; unsupported report/iPhone imagery was replaced with accurate text. A rendered-page regression check prevents the retired synthetic UI classes and labels from returning.

---

# Task 9 — FAQ and Purchase-Objection Handling

**Priority:** P0  
**Status:** [ ]  
**Goal:** Answer common questions before they prevent a trial.

## Questions to Include

- [ ] Does Capehelm connect directly to my bank?
- [ ] Does Capehelm upload my financial information?
- [ ] Which financial institutions can I use with Capehelm?
- [ ] Can I import CSV statements?
- [ ] Where is my Capehelm data stored?
- [ ] Can I back up my data?
- [ ] What happens if my subscription expires?
- [ ] How does the two-month introductory trial work?
- [ ] What version of macOS does Capehelm require?
- [ ] Is Capehelm available on iPhone or iPad?
- [ ] How do I contact support?
- [ ] Can I send my Finance Document or bank statement to support?

## Important Framing

Do not apologize for manual statement import.

Recommended framing:

**Capehelm does not require your online-banking credentials. Transactions are imported from local statement files instead.**

## Acceptance Criteria

- FAQ is easily discoverable.
- Answers match actual app behavior.
- Privacy/support warnings are accurate.
- FAQ can later be reused for structured data.

---

# Task 10 — Launch Verification and Regression Audit

**Priority:** P0  
**Status:** [ ]  
**Goal:** Run a final production-site audit after the P0 changes.

## Work

- [ ] Test all navigation links.
- [ ] Test all App Store links.
- [ ] Test Privacy link.
- [ ] Test Support link.
- [ ] Test support email link.
- [ ] Test `.ca` redirect.
- [ ] Test `www` behavior.
- [ ] Test homepage on Safari/macOS.
- [ ] Test homepage on Safari/iPhone-sized viewport.
- [ ] Test Chrome.
- [ ] Test Firefox if practical.
- [ ] Confirm no horizontal scrolling.
- [ ] Confirm no missing images.
- [ ] Confirm no placeholder content.
- [ ] Confirm no outdated pricing/trial language.
- [ ] Confirm no personal information or finance screenshots are exposed.
- [ ] Confirm Search Console and sitemap remain valid after deployment.
- [ ] Run Lighthouse or equivalent performance/accessibility review.
- [ ] Record any launch warnings.

## Acceptance Criteria

All P0 website work is either:

- PASS,
- accepted as an explicit launch warning, or
- tracked as a release blocker.

---

# Task 11 — Improve Support into a Useful Knowledge Hub

**Priority:** P1  
**Status:** [ ]  
**Goal:** Make the website useful after the user has downloaded Capehelm.

## Suggested Support Structure

### Getting Started

- Creating a Finance Document
- Opening an existing Finance Document
- Importing transactions
- Reviewing categories
- Setting up Budget
- Using Forecast
- Backing up Capehelm

### Troubleshooting

- CSV will not import
- Finance Document will not open
- Restore Purchases
- Subscription access
- Backup and restore
- Moving or renaming a Finance Document
- App launch / remembered-document issues

### Contact

**support@capehelm.com**

Include a strong warning:

> Never email bank statements, Capehelm Finance Documents, transaction exports, screenshots containing personal financial information, or other sensitive finance data.

## Acceptance Criteria

- Users can solve basic problems without emailing support.
- Support email remains obvious.
- Privacy warning is prominent.

---

# Task 12 — Add Structured Data

**Priority:** P1  
**Status:** [ ]  
**Goal:** Help search engines understand Capehelm as a software product.

## Work

- [ ] Add `SoftwareApplication` schema.
- [ ] Set application category to FinanceApplication where appropriate.
- [ ] Set operating system to macOS.
- [ ] Add Capehelm name and description.
- [ ] Add App Store URL.
- [ ] Add pricing information where valid.
- [ ] Add screenshot URLs.
- [ ] Add software requirements.
- [ ] Add FAQ schema if supported by current search-engine guidance.
- [ ] Add publisher/organization metadata where appropriate.
- [ ] Validate schema using Google's structured-data tools.

## Acceptance Criteria

- No schema validation errors.
- Structured data matches visible page content.
- No misleading review/rating markup is added.

---

# Task 13 — Open Graph / Social Sharing Metadata

**Priority:** P1  
**Status:** [ ]  
**Goal:** Make shared Capehelm links look intentional and trustworthy.

## Work

- [ ] Add `og:title`.
- [ ] Add `og:description`.
- [ ] Add `og:image`.
- [ ] Add `og:url`.
- [ ] Add Twitter/X card metadata.
- [ ] Create one 1200×630 Capehelm social image.
- [ ] Include Capehelm branding and a product screenshot.
- [ ] Use the message: `Private personal finance for Mac` or similar.
- [ ] Test link previews.

## Acceptance Criteria

Capehelm links render cleanly when shared in messaging apps and social platforms.

---

# Task 14 — Create Focused SEO Landing Pages

**Priority:** P1  
**Status:** [ ]  
**Goal:** Capture high-intent search traffic without creating low-value SEO pages.

## Initial Pages

### `/personal-finance-for-mac/`

Target topics:

- personal finance app Mac
- personal finance software macOS
- Mac money management software

### `/cash-flow-forecast/`

Target topics:

- cash flow forecast Mac
- personal finance forecast
- upcoming bills forecast
- household cash flow forecast

### `/private-personal-finance/`

Target topics:

- private personal finance app
- local personal finance software
- offline personal finance Mac

### `/csv-bank-statement-import/`

Target topics:

- CSV finance app Mac
- import bank CSV Mac
- personal finance CSV import

## Work

For each page:

- [ ] Create a unique H1.
- [ ] Create a unique page title.
- [ ] Create a unique meta description.
- [ ] Provide genuinely useful content.
- [ ] Include at least one relevant screenshot.
- [ ] Link to Features.
- [ ] Link to Privacy where relevant.
- [ ] Add Mac App Store CTA.
- [ ] Add the page to `sitemap.xml`.
- [ ] Add internal links from relevant pages.

## Acceptance Criteria

Each page provides standalone value and is not merely duplicated homepage copy.

---

# Task 15 — Improve the Download / App Store Handoff Page

**Priority:** P1  
**Status:** [ ]  
**Goal:** Make `/download` a direct conversion page once Capehelm is live.

## Option A — Preferred

Redirect `/download` directly to the Mac App Store.

## Option B — Small Conversion Page

### Download Capehelm

Available through the Mac App Store.

- macOS 14+
- Two-month introductory trial for eligible new subscribers
- Monthly or annual subscription

**[Download on the Mac App Store]**

## Acceptance Criteria

The user never wonders:

- which build to download,
- where to get the official version,
- or whether a direct-download build is required.

---

# Task 16 — Add “How Capehelm Works”

**Priority:** P1  
**Status:** [ ]  
**Goal:** Reduce perceived setup complexity.

## Recommended Three-Step Flow

### 1. Import your statements

Download supported CSV statements from your financial institution and import them locally.

### 2. Review and organize

Confirm categories and let Capehelm learn your local merchant rules.

### 3. See the bigger picture

Budget, Forecast, Trends, Net Worth, Retirement and reports build from your Finance Document.

## Work

- [ ] Add three-step section to homepage or Features page.
- [ ] Include lightweight visuals/icons.
- [ ] Avoid implying automatic bank sync.
- [ ] Explain the benefit of local import.
- [ ] Link to import support documentation.

## Acceptance Criteria

A first-time visitor understands how data gets into Capehelm.

---

# Task 17 — Privacy-Respecting Website Measurement

**Priority:** P1  
**Status:** [ ]  
**Goal:** Measure whether the website converts without compromising Capehelm's product principles.

## Minimum Useful Funnel

Track:

- [ ] Landing page.
- [ ] Referrer/source.
- [ ] App Store CTA click.
- [ ] Support link click.
- [ ] Major page visits.
- [ ] Search-engine traffic.

Do **not** attempt to track:

- finance-document contents,
- user transaction behavior,
- in-app spending,
- bank/institution details,
- or other personal finance information.

## Decision Required

Choose one:

- [ ] Minimal privacy-friendly analytics.
- [ ] Cloudflare Web Analytics if appropriate.
- [ ] No website analytics initially; use Search Console + App Store Connect only.

## Acceptance Criteria

Measurement does not conflict with Capehelm's stated privacy posture.

---

# Task 18 — Performance and Core Web Vitals Pass

**Priority:** P1  
**Status:** [ ]  
**Goal:** Keep the site fast, responsive, and pleasant.

## Work

- [ ] Run Lighthouse.
- [ ] Review Largest Contentful Paint.
- [ ] Review Cumulative Layout Shift.
- [ ] Review Interaction to Next Paint.
- [ ] Compress screenshots.
- [ ] Use modern image formats where practical.
- [ ] Avoid unnecessarily large JS bundles.
- [ ] Lazy-load below-the-fold imagery.
- [ ] Preload only genuinely critical assets.
- [ ] Verify fonts do not delay rendering excessively.
- [ ] Check mobile layout.
- [ ] Check accessibility findings.

## Acceptance Criteria

- No major layout shift.
- No extremely large image payloads.
- Page becomes usable quickly on ordinary connections.
- Accessibility score has no severe unresolved issues.

---

# Task 19 — Publish High-Value Educational Content

**Priority:** P2  
**Status:** [ ]  
**Goal:** Grow organic search traffic using content directly related to Capehelm.

## Recommended Topics

- [ ] How to build a 14-day household cash-flow forecast.
- [ ] Budget vs. cash-flow forecast: what's the difference?
- [ ] How to analyze bank statements without uploading them.
- [ ] How to import CSV bank transactions on a Mac.
- [ ] How to calculate net-worth changes correctly.
- [ ] How recurring expenses quietly affect annual spending.
- [ ] Why a $20/month subscription is really $240/year.
- [ ] A practical monthly money-review checklist.

## Rules

- Do not publish generic finance filler.
- Every article should relate to a Capehelm workflow or user problem.
- Articles should educate first and sell second.
- Avoid financial-advice claims.
- Include a relevant Capehelm CTA where natural.

## Acceptance Criteria

Content is useful enough to deserve search traffic independently of Capehelm.

---

# Task 20 — Comparison / Alternative Pages

**Priority:** P2  
**Status:** [ ]  
**Goal:** Capture users actively comparing personal-finance tools.

## Potential Themes

- [ ] Local-first personal finance vs cloud-first tools.
- [ ] Manual statement import vs connected banking.
- [ ] Capehelm vs spreadsheet-based finance tracking.
- [ ] Native Mac finance software vs web applications.

## Rules

- Be factual.
- Do not invent competitor weaknesses.
- Do not copy competitor marketing.
- Focus on workflow and architecture differences.
- Avoid unsupported superiority claims.

## Acceptance Criteria

Comparison content is fair, current, and genuinely useful.

---

# Task 21 — Release Notes / Changelog Content

**Priority:** P2  
**Status:** [ ]  
**Goal:** Keep the site fresh and show continued product development.

## Work

- [ ] Create a public release notes page.
- [ ] Add major releases only.
- [ ] Keep notes user-focused.
- [ ] Avoid exposing internal implementation details.
- [ ] Avoid exposing private test data or internal paths.
- [ ] Link major feature additions to relevant feature/support pages.

## Acceptance Criteria

Release notes help users understand meaningful product improvements without becoming an engineering log.

---

# Task 22 — Ongoing SEO Monitoring Routine

**Priority:** P2  
**Status:** [ ]  
**Goal:** Establish a lightweight recurring discoverability review.

## Monthly Review

- [ ] Search Console coverage.
- [ ] Search queries.
- [ ] Impressions.
- [ ] Click-through rate.
- [ ] Average position.
- [ ] Top landing pages.
- [ ] Pages receiving zero impressions.
- [ ] Broken links.
- [ ] Sitemap status.
- [ ] Search-result titles/descriptions.
- [ ] App Store click-through where measurable.

## Acceptance Criteria

SEO decisions are made using real data rather than guesses.

---

# Task 23 — Brand / Search-Result Presentation Review

**Priority:** P2  
**Status:** [ ]  
**Goal:** Verify how Capehelm appears publicly after indexing begins.

## Work

Search for:

- [ ] `Capehelm`
- [ ] `Capehelm Mac`
- [ ] `Capehelm finance`
- [ ] `Capehelm personal finance`
- [ ] `Capehelm budget`
- [ ] `Capehelm forecast`

Check:

- [ ] Homepage title.
- [ ] Description/snippet.
- [ ] Favicon.
- [ ] Site name.
- [ ] Sitelinks if present.
- [ ] App Store result.
- [ ] Competing unrelated “Capehelm” results.

## Acceptance Criteria

Searching the Capehelm brand clearly identifies the official website and App Store listing.

---

# Task 24 — Conversion Funnel Reassessment

**Priority:** P2  
**Status:** [ ]  
**Goal:** Improve the website using real post-launch behavior.

## Review After Meaningful Traffic Accumulates

Evaluate:

- [ ] Which pages generate App Store clicks?
- [ ] Which landing pages have high bounce/low engagement?
- [ ] Does Forecast messaging outperform generic budgeting messaging?
- [ ] Does local-first/privacy messaging increase engagement?
- [ ] Are users searching for CSV import help?
- [ ] Are pricing/trial questions still common?
- [ ] Are support emails revealing missing documentation?
- [ ] Are users asking for bank sync?
- [ ] Are users confused about macOS vs iOS availability?

## Possible Follow-Up Changes

- [ ] Adjust homepage headline.
- [ ] Reorder feature sections.
- [ ] Improve screenshot captions.
- [ ] Expand FAQ.
- [ ] Create a new support article.
- [ ] Create a new SEO landing page.
- [ ] Simplify App Store CTA placement.
- [ ] Clarify platform availability.

## Acceptance Criteria

Future website changes are driven by observed user behavior and search data.

---

# Recommended Execution Order

## Phase 1 — Before App Store Launch

Complete Tasks:

1. Task 1 — Search engine indexing foundation
2. Task 2 — Technical SEO baseline
3. Task 3 — Homepage positioning and hero rewrite
4. Task 4 — Mac App Store conversion path
5. Task 5 — Pricing and free-trial clarity
6. Task 6 — Privacy/local-first positioning
7. Task 7 — Homepage feature hierarchy
8. Task 8 — Screenshot storytelling
9. Task 9 — FAQ
10. Task 10 — Final launch website audit

## Phase 2 — First Week After Launch

Complete Tasks:

11. Support hub
12. Structured data
13. Social metadata
14. Focused SEO pages
15. Download-page cleanup
16. How Capehelm Works
17. Website measurement
18. Performance pass

## Phase 3 — Ongoing Growth

Complete Tasks:

19–24 as traffic and support feedback provide evidence for what users actually need.

---

# Definition of Website Launch-Ready

Capehelm's website can be considered **launch-ready** when:

- [ ] Search engines can crawl the site.
- [ ] Search Console and Bing recognize the site.
- [ ] Sitemap is valid.
- [ ] Core pages have unique SEO titles/descriptions.
- [ ] Homepage explains Capehelm immediately.
- [ ] Privacy/local-first positioning is prominent.
- [ ] Pricing and trial information are accurate.
- [ ] Mac App Store CTA is obvious.
- [ ] Strong screenshots demonstrate real product value.
- [ ] FAQ addresses common purchase concerns.
- [ ] Support and Privacy pages are easily accessible.
- [ ] No broken links or placeholder content remain.
- [ ] No private finance data appears anywhere on the public site.
- [ ] Final desktop/mobile regression review passes.

---

# Working Method for Codex + ChatGPT

For each numbered task:

1. Mark the task **in progress** in this file.
2. Ask Codex to inspect the existing website before changing anything.
3. Make the smallest focused change required for that task.
4. Verify the production build locally.
5. Verify responsive layout where applicable.
6. Verify no unrelated website behavior regressed.
7. Deploy to GitHub Pages.
8. Verify the live production URL.
9. Record evidence/results under the task.
10. Change `[ ]` to `[x]` only after the acceptance criteria are met.
11. Stop before beginning the next numbered task unless explicitly instructed.

---

# Notes / Evidence Log

Use this section to record major decisions, launch warnings, and dated evidence as tasks are completed.

## 2026-09-23

- Initial website discoverability and conversion plan created.
- Existing public foundation confirmed: Capehelm.com, Capehelm.ca redirect, Features, Privacy, Support, GitHub Pages hosting, and `support@capehelm.com`.
- Search discoverability/indexation remains a key launch concern.
- Primary website objective established: drive qualified visitors from search/referrals to the Mac App Store while reinforcing Capehelm's local-first value proposition.
