import type { Metadata } from "next";
import { ProductScreenshot, type ProductScreenshotAsset } from "../components/ProductScreenshot";
import { AppStoreLink, ArrowIcon, PageShell, SiteLink } from "../components/SiteShell";
import { productionSiteUrl, siteAssetPath } from "../config/site";

export const metadata: Metadata = {
  title: { absolute: "Capehelm | Private Personal Finance & Budgeting for Mac" },
  description:
    "Capehelm is a private personal finance app for Mac with budgeting, 14-day cash-flow forecasting, spending analysis, net worth and retirement planning. Your financial data stays local.",
  alternates: { canonical: `${productionSiteUrl}/` },
};

export const dynamic = "force-static";

const productStories: Array<{
  module: string;
  headline: string;
  body: string;
  asset: ProductScreenshotAsset;
  alt: string;
}> = [
  {
    module: "Forecast",
    headline: "See the next 14 days before they happen.",
    body: "Capehelm combines recurring commitments and expected spending into a forward-looking cash-flow view.",
    asset: "forecast",
    alt: "Capehelm Forecast showing a 14-day forward-looking cash-flow plan with projected balances and upcoming commitments.",
  },
  {
    module: "Trends",
    headline: "Understand what’s actually changing.",
    body: "Explore categories and merchants to see where spending patterns are moving.",
    asset: "trends",
    alt: "Capehelm Trends dashboard showing spending patterns across categories and merchants.",
  },
  {
    module: "Budget",
    headline: "Know where the month is heading.",
    body: "Budget Health compares actual spending with your plan and projected month end.",
    asset: "budget",
    alt: "Capehelm Budget Health dashboard comparing planned spending, actual spending, and projected month-end results.",
  },
  {
    module: "Net Worth",
    headline: "Track the whole financial picture.",
    body: "Bring assets and liabilities together and follow how they change over time.",
    asset: "net-worth",
    alt: "Capehelm Net Worth dashboard showing assets, liabilities, account balances, and changes over time.",
  },
  {
    module: "Retirement",
    headline: "Model the future using assumptions you control.",
    body: "Project included retirement accounts and contributions without giving up control of your data.",
    asset: "retirement",
    alt: "Capehelm Retirement projection showing user-controlled assumptions, projected growth, contributions, and retirement outcomes.",
  },
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
        <div className="hero-visual reveal reveal-late">
          <ProductScreenshot
            asset="dashboard"
            alt="Capehelm Dashboard showing a real monthly financial overview, spending pace, budget position, upcoming cash flow and financial progress using fictional demonstration data."
            className="hero-real-screenshot"
            eager
            sizes="(max-width: 1160px) calc(100vw - 48px), 680px"
          />
        </div>
      </section>

      <section className="outcome-hierarchy section-shell" id="forecast" aria-labelledby="outcomes-title">
        <div className="section-intro centered">
          <p className="eyebrow"><span /> What Capehelm helps you answer</p>
          <h2 id="outcomes-title">Five questions. One clear financial picture.</h2>
          <p>Start with the decision you need to make—not a list of software features.</p>
        </div>
        <div className="outcome-grid">
          <article className="outcome-card">
            <div className="outcome-card-top"><span>01</span><strong>Trends</strong></div>
            <h3>Where did my money go?</h3>
            <p>See spending across transactions, categories and merchants. Understand what changed over time, then correct or organize the details behind it.</p>
            <div className="outcome-capabilities"><span>Spending patterns</span><span>Merchant analysis</span><span>Categories</span></div>
          </article>
          <article className="outcome-card">
            <div className="outcome-card-top"><span>02</span><strong>Budget</strong></div>
            <h3>Am I staying on track?</h3>
            <p>Compare actual spending with your plan, spot categories worth watching and adjust monthly targets before the month gets away from you.</p>
            <div className="outcome-capabilities"><span>Budget Health</span><span>Budget Builder</span><span>Month-end projection</span></div>
          </article>
          <article className="outcome-card outcome-card-forecast" id="forecast-outlook">
            <div className="outcome-card-copy">
              <div className="outcome-card-top"><span>03</span><strong>14-day Forecast</strong></div>
              <h3>What&apos;s going to happen next?</h3>
              <p>See upcoming commitments and projected account balances before they arrive. Forecast Coverage shows whether planned expenses were covered by real transactions, so cash-flow pressure is easier to spot.</p>
              <div className="outcome-capabilities"><span>Upcoming commitments</span><span>Projected balance</span><span>Forecast Coverage</span></div>
            </div>
          </article>
          <article className="outcome-card">
            <div className="outcome-card-top"><span>04</span><strong>Net Worth + Retirement</strong></div>
            <h3>How am I doing long term?</h3>
            <p>Track assets, liabilities and the accounts driving your Net Worth. Model how included retirement accounts may grow from contributions and assumptions over time.</p>
            <div className="outcome-capabilities"><span>Assets and liabilities</span><span>Account projections</span><span>Retirement</span></div>
          </article>
          <article className="outcome-card outcome-card-supporting">
            <div className="outcome-card-top"><span>05</span><strong>Reports</strong></div>
            <h3>Can I share what matters?</h3>
            <p>Turn your numbers into concise weekly and month-end PDF check-ins that are easy to review with a partner or household member.</p>
            <div className="outcome-capabilities"><span>Weekly check-in</span><span>Spending review</span><span>Month-end PDF</span></div>
          </article>
        </div>
        <div className="outcome-explore">
          <p>Looking for a specific workflow or capability?</p>
          <SiteLink className="text-link" href="/features">Explore all features <ArrowIcon /></SiteLink>
        </div>
      </section>

      <section className="product-proof section-shell" aria-labelledby="product-proof-title">
        <div className="section-intro centered">
          <p className="eyebrow"><span /> See Capehelm in action</p>
          <h2 id="product-proof-title">Built to turn financial questions into clear next steps.</h2>
          <p>Five connected views, shown with fictional demo data.</p>
        </div>
        <div className="product-proof-grid">
          {productStories.map((story, index) => (
            <article className={`product-proof-story ${index === 0 ? "product-proof-lead" : ""}`} key={story.module}>
              <div className="product-proof-copy">
                <p className="product-proof-module"><span>{String(index + 1).padStart(2, "0")}</span>{story.module}</p>
                <h3>{story.headline}</h3>
                <p>{story.body}</p>
              </div>
              <ProductScreenshot
                asset={story.asset}
                alt={story.alt}
                className="product-proof-frame"
                sizes={index === 0 ? "(max-width: 800px) calc(100vw - 48px), (max-width: 1400px) calc(100vw - 120px), 1260px" : "(max-width: 800px) calc(100vw - 48px), 620px"}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-banner section-shell" aria-labelledby="privacy-title">
        <div className="privacy-heading">
          <p className="eyebrow"><span /> Local-first by design</p>
          <h2 id="privacy-title">Your finances don&apos;t belong on our servers.</h2>
          <p>Capehelm is deliberately different from hosted personal-finance services: your financial picture is built from local Finance Documents and files you control.</p>
          <SiteLink className="button button-secondary" href="/privacy">Read our Privacy Policy <ArrowIcon /></SiteLink>
        </div>
        <div className="privacy-points">
          <article><span>01</span><h3>Your transaction data stays local.</h3><p>Capehelm works with local Finance Documents instead of storing your financial life in a Capehelm-hosted account.</p></article>
          <article><span>02</span><h3>No online banking credentials.</h3><p>Import supported statement and CSV files you select instead of giving Capehelm your online-banking username or password.</p></article>
          <article><span>03</span><h3>No finance-data advertising profile.</h3><p>Capehelm is a paid product, not an advertising platform. Your transaction history is not used to build an advertising profile.</p></article>
          <article><span>04</span><h3>You control your files.</h3><p>Your Finance Document, backups, reports and exports remain local or in storage locations you choose and control.</p></article>
        </div>
        <div className="privacy-assurance">
          <p>Capehelm does not upload your transaction data or Finance Document contents to Capehelm servers and does not use finance-data telemetry.</p>
          <p><strong>Apple handles subscription commerce.</strong> StoreKit is used for product, offer, purchase, entitlement and restore operations—not your personal finance content.</p>
        </div>
      </section>

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
          <p>Subscriptions are purchased, renewed, cancelled, restored and managed through Apple. Introductory-trial eligibility is determined by Apple. <SiteLink href="/faq">Read subscription FAQs.</SiteLink></p>
          <p className="pricing-disclosure">Pricing may vary by storefront, region, currency and applicable taxes.</p>
          <AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink>
        </div>
      </section>

      <section className="devices-section section-shell" id="devices">
        <div className="section-intro centered"><p className="eyebrow"><span /> Made for Mac</p><h2>Your complete finance workspace, on your Mac.</h2><p>Capehelm’s current public product is focused on a full native Mac experience.</p></div>
        <div className="device-facts">
          <article><span>Mac</span><h3>Your complete finance workspace.</h3><p>Budget, Forecast, Trends, Net Worth, Retirement, imports and full document management stay together on your Mac.</p></article>
          <article><span>iPhone and iPad</span><h3>Not part of the current public release.</h3><p>Capehelm is currently being prepared as a Mac App Store product. No iPhone or iPad release date has been announced.</p></article>
        </div>
      </section>

      <section className="final-cta section-shell"><ImageMark /><p className="eyebrow"><span /> Private personal finance for Mac</p><h2>Take the helm of your finances.</h2><p>Keep your financial picture private and close at hand. Eligible new subscribers receive a 2-month introductory trial.</p><div><AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink></div></section>
    </PageShell>
  );
}

function ImageMark() {
  return (
    <div className="cta-mark" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={siteAssetPath("/brand/capehelm-mark.png")} alt="" width="455" height="429" />
    </div>
  );
}
