import type { Metadata } from "next";
import { DevicePair, ProductWindow, ReportStack } from "../components/ProductVisuals";
import { AppStoreLink, ArrowIcon, PageShell, SiteLink } from "../components/SiteShell";
import { productionSiteUrl } from "../config/site";

export const metadata: Metadata = {
  title: { absolute: "Capehelm | Private Personal Finance & Budgeting for Mac" },
  description:
    "Capehelm is a private personal finance app for Mac with budgeting, 14-day cash-flow forecasting, spending analysis, net worth and retirement planning. Your financial data stays local.",
  alternates: { canonical: `${productionSiteUrl}/` },
};

export const dynamic = "force-static";

const featureCards = [
  ["Dashboard", "Your financial position at a glance.", "01"],
  ["Budget Health", "Know what is on track and what needs attention.", "02"],
  ["14-Day Forecast", "See upcoming cash flow before it happens.", "03"],
  ["Trends", "Explore spending by group, category and merchant.", "04"],
  ["Transactions", "Search, inspect and organize your financial history.", "05"],
  ["Categories & Rules", "Teach Capehelm how your financial life works.", "06"],
  ["Net Worth", "Track long-term financial progress.", "07"],
  ["Retirement", "Compare long-term paths, timing and contributions.", "08"],
  ["Reports", "Turn complexity into clear household updates.", "09"],
  ["Financial To-Do", "Remember payments, reimbursements and follow-ups.", "10"],
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero section-shell">
        <div className="hero-glow" />
        <div className="hero-copy reveal">
          <p className="hero-positioning">Private personal finance for Mac.</p>
          <h1>Understand your money.<br /><em>Plan what&apos;s next.</em></h1>
          <p className="hero-lede">Track spending, build a budget, forecast the next 14 days, monitor your net worth and plan retirement — while keeping your financial data on your Mac.</p>
          <div className="hero-actions">
            <AppStoreLink className="button hero-primary-cta">Download on the Mac App Store <ArrowIcon /></AppStoreLink>
            <SiteLink className="text-link" href="#forecast">Explore Capehelm <span aria-hidden="true">↓</span></SiteLink>
          </div>
          <p className="hero-supporting-line">2 months free for eligible new subscribers · Monthly or annual · No ads</p>
        </div>
        <div className="hero-visual reveal reveal-late"><ProductWindow visual="dashboard" /></div>
      </section>

      <section className="story section-shell" aria-labelledby="story-title">
        <div className="section-intro centered"><p className="eyebrow"><span /> One clear financial picture</p><h2 id="story-title">Your finances shouldn’t require detective work.</h2><p>Capehelm brings the past, present and next two weeks into one calm environment—so the numbers lead to decisions.</p></div>
        <div className="story-grid">
          <article><span>01 — Past</span><h3>Understand what happened</h3><p>Transactions and Trends reveal the categories, merchants and patterns behind your spending.</p><SiteLink href="/features#understand">Transactions + Trends <ArrowIcon /></SiteLink></article>
          <article><span>02 — Present</span><h3>Know where you stand</h3><p>Dashboard and Budget Health show whether the month is steady, drifting or needs attention.</p><SiteLink href="/features#stand">Dashboard + Budget <ArrowIcon /></SiteLink></article>
          <article><span>03 — Future</span><h3>Plan what comes next</h3><p>Forecast and Financial To-Do help you prepare for commitments before they put pressure on cash flow.</p><SiteLink href="/features#plan">Forecast + To-Do <ArrowIcon /></SiteLink></article>
        </div>
      </section>

      <section className="spotlight section-shell" id="forecast">
        <div className="spotlight-copy"><p className="eyebrow"><span /> Forecast</p><h2>See the next two weeks before they happen.</h2><p>Capehelm combines upcoming income, expenses, card payments and recurring commitments into a day-by-day view of your checking balance.</p><ul className="feature-list"><li>Projected checking balance</li><li>Safety-floor awareness</li><li>Upcoming commitments</li><li>Flexible spending room</li><li>Forecast Coverage</li><li>Daily planning</li></ul><SiteLink className="text-link" href="/features#plan">Explore Forecast <ArrowIcon /></SiteLink></div>
        <ProductWindow visual="forecast" />
      </section>

      <section className="spotlight reverse section-shell soft-band">
        <div className="spotlight-copy"><p className="eyebrow"><span /> Budget Health</p><h2>A budget that tells you how you’re actually doing.</h2><p>Compare your monthly plan with actual spending and projected month-end results. Capehelm calls out what is on track, what deserves a watch and what is already over plan.</p><div className="metric-row"><div><strong>Actual MTD</strong><span>What has happened</span></div><div><strong>Projected</strong><span>Where the month is heading</span></div><div><strong>Health</strong><span>What needs attention</span></div></div><SiteLink className="text-link" href="/features#stand">See Budget Health <ArrowIcon /></SiteLink></div>
        <ProductWindow visual="budget" />
      </section>

      <section className="trend-feature section-shell">
        <div className="section-intro centered"><p className="eyebrow"><span /> Trends</p><h2>Turn thousands of transactions into something you can see.</h2><p>Move from a spending treemap to category and merchant detail without losing the larger picture.</p></div>
        <ProductWindow visual="trends" />
        <div className="trend-callouts"><span>Group / Category / Merchant</span><span>Month / 3M / 6M / YTD</span><span>Local merchant aliases</span><span>Drill-down details</span></div>
      </section>

      <section className="spotlight section-shell networth-feature">
        <div className="spotlight-copy"><p className="eyebrow"><span /> Net Worth</p><h2>Measure progress beyond this month’s spending.</h2><p>Bring organizations, accounts, assets and liabilities into one long-term view. See contribution-adjusted growth alongside liquid assets and secured debt.</p><ul className="feature-list"><li>Assets and liabilities</li><li>Account histories</li><li>Contribution-adjusted growth</li><li>Account and institution organization</li></ul></div>
        <ProductWindow visual="networth" />
      </section>

      <section className="reports-section section-shell">
        <ReportStack />
        <div className="spotlight-copy"><p className="eyebrow dark"><span /> Reports</p><h2>Financial clarity you can actually share.</h2><p>Capehelm turns complex household finances into concise reports designed for a partner or family money conversation.</p><div className="report-badges"><span>Weekly Family Plan</span><span>Weekly Spending Review</span><span>Weekly Money Check-In</span><span>Month-End Money Review</span></div><p className="fine-print">Report imagery uses synthetic demonstration data.</p></div>
      </section>

      <section className="privacy-banner section-shell">
        <div><p className="eyebrow"><span /> Local-first architecture</p><h2>Your financial history isn’t our business.</h2><p>Capehelm has no app-owned cloud service, login, telemetry or remote analytics. Your Finance Documents, backups, reports and exports stay under your control.</p><SiteLink className="button button-secondary" href="/privacy">Read about privacy <ArrowIcon /></SiteLink></div>
        <div className="privacy-flow" role="img" aria-label="Your statements flow into Capehelm and then into your finance document on your devices"><div><b>Your statements</b><span>Built-in or configured bank CSV import</span></div><i>→</i><div className="flow-core"><b>Capehelm</b><span>Analysis on your device</span></div><i>→</i><div><b>Your finance document</b><span>Stored where you choose</span></div><small>Nothing in this core flow requires a Capehelm financial account.</small></div>
      </section>

      <section className="feature-grid-section section-shell"><div className="section-intro"><p className="eyebrow"><span /> A complete workspace</p><h2>Serious tools. One coherent financial picture.</h2></div><div className="feature-grid">{featureCards.map(([title, description, number]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="feature-grid-link"><SiteLink className="text-link" href="/features">See every feature <ArrowIcon /></SiteLink></div></section>

      <section className="pricing-section mid-page-cta section-shell" aria-labelledby="pricing-title">
        <div className="pricing-intro">
          <p className="eyebrow"><span /> Pricing</p>
          <h2 id="pricing-title">Try Capehelm free for two months.</h2>
          <p>Eligible new subscribers can access the full Capehelm experience during Apple&apos;s two-month introductory free trial.</p>
          <p>The introductory trial is available with either Capehelm subscription option, subject to Apple eligibility.</p>
        </div>
        <div className="pricing-options" aria-label="Capehelm subscription options">
          <article>
            <div><span>Monthly</span><strong><small>US$</small>4.99</strong><p>/month</p></div>
            <span className="pricing-tier-note">Full Capehelm experience</span>
          </article>
          <article className="pricing-option-featured">
            <div><span>Annual</span><strong><small>US$</small>49.99</strong><p>/year</p></div>
            <span className="pricing-tier-note">Full Capehelm experience</span>
          </article>
        </div>
        <div className="pricing-details">
          <p><strong>Monthly and Annual unlock the same Capehelm features.</strong></p>
          <p>Subscriptions are purchased, renewed, cancelled, restored and managed through Apple. Introductory-trial eligibility is determined by Apple.</p>
          <p className="pricing-disclosure">Pricing may vary by storefront, region, currency and applicable taxes.</p>
          <AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink>
        </div>
      </section>

      <section className="devices-section section-shell" id="devices"><div className="section-intro centered"><p className="eyebrow"><span /> Mac + iPhone</p><h2>Built for the devices already in your life.</h2><p>The Mac is Capehelm’s complete finance workspace. The iPhone companion keeps selected Forecast, Reports, Financial To-Do and shared-document workflows close at hand.</p></div><DevicePair /><p className="device-note">The iPhone companion focuses on selected workflows and does not mirror the complete macOS feature set.</p></section>

      <section className="final-cta section-shell"><ImageMark /><p className="eyebrow"><span /> Private personal finance for Mac</p><h2>Take the helm of your finances.</h2><p>Keep your financial picture private and close at hand. Eligible new subscribers receive a 2-month introductory trial.</p><div><AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink></div></section>
    </PageShell>
  );
}

function ImageMark() {
  return <div className="cta-mark" aria-hidden="true">CH</div>;
}
