import { ArrowIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

export const metadata = createPageMetadata({
  title: "Personal Finance Guides | Capehelm",
  description:
    "Practical Capehelm guides to transaction analysis, budgeting, cash-flow forecasting and local-first personal finance.",
  path: "/guides",
});

export const dynamic = "force-static";

export default function GuidesPage() {
  return (
    <PageShell>
      <header className="guides-hero section-shell">
        <p className="eyebrow"><span /> Capehelm Guides</p>
        <h1>Clear thinking for <em>everyday finances.</em></h1>
        <p>Practical explanations for understanding what happened, making a plan and seeing what may come next.</p>
      </header>

      <section className="guides-index section-shell" aria-labelledby="latest-guide-title">
        <div className="guides-index-heading">
          <p className="eyebrow"><span /> Latest guide</p>
          <p>Useful on its own. Connected to Capehelm where the product can help.</p>
        </div>
        <div className="guides-list">
          <article className="guide-index-card">
            <div className="guide-index-meta">
              <span>CSV · Transaction analysis</span>
              <time dateTime="2026-09-30">September 30, 2026</time>
            </div>
            <div>
              <h2 id="latest-guide-title">How to Analyze Your Bank Transactions From a CSV File</h2>
              <p>Turn a bank or credit-card CSV into something useful by cleaning transactions, organizing merchants and categories, and finding the spending patterns hidden in the data.</p>
              <SiteLink className="text-link" href="/guides/how-to-analyze-bank-transactions-csv">Read the guide <ArrowIcon /></SiteLink>
            </div>
            <div className="guide-index-visual" aria-hidden="true">
              <span>Export</span><i>→</i><span>Clean</span><i>→</i><span>Analyze</span>
            </div>
          </article>

          <article className="guide-index-card">
            <div className="guide-index-meta">
              <span>Forecasting · How-to</span>
              <time dateTime="2026-09-29">September 29, 2026</time>
            </div>
            <div>
              <h2>How to Forecast Your Personal Cash Flow for the Next 14 Days</h2>
              <p>Build a simple two-week cash-flow forecast and learn why the lowest point in your projected balance can matter more than where you end.</p>
              <SiteLink className="text-link" href="/guides/how-to-forecast-personal-cash-flow-14-days">Read the guide <ArrowIcon /></SiteLink>
            </div>
            <div className="guide-index-visual" aria-hidden="true">
              <span>$4,800</span><i>→</i><span>$2,560 low</span><i>→</i><span>$6,460</span>
            </div>
          </article>

          <article className="guide-index-card">
            <div className="guide-index-meta">
              <span>Privacy · Local-first</span>
              <time dateTime="2026-09-28">September 28, 2026</time>
            </div>
            <div>
              <h2>Do Personal Finance Apps Need Access to Your Bank Account?</h2>
              <p>Automatic bank connections are convenient, but they aren&apos;t the only way to manage money. Here&apos;s the trade-off between connected and local-first personal finance.</p>
              <SiteLink className="text-link" href="/guides/do-personal-finance-apps-need-bank-access">Read the guide <ArrowIcon /></SiteLink>
            </div>
            <div className="guide-index-visual guide-index-visual-paths" aria-hidden="true">
              <span>Bank</span><i>→</i><span>CSV</span><i>→</i><span>Finance Document</span>
            </div>
          </article>

          <article className="guide-index-card">
            <div className="guide-index-meta">
              <span>Budgeting · Forecasting</span>
              <time dateTime="2026-09-28">September 28, 2026</time>
            </div>
            <div>
              <h2>Budget vs. Cash-Flow Forecast: What&apos;s the Difference?</h2>
              <p>A budget tells you what you planned. A cash-flow forecast tells you what&apos;s about to happen. You need both.</p>
              <SiteLink className="text-link" href="/guides/budget-vs-cash-flow-forecast">Read the guide <ArrowIcon /></SiteLink>
            </div>
            <div className="guide-index-visual" aria-hidden="true">
              <span>Budget</span><i>→</i><span>Actuals</span><i>→</i><span>Forecast</span>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
