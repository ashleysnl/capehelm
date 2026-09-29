import { ArrowIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

export const metadata = createPageMetadata({
  title: "Personal Finance Guides | Capehelm",
  description:
    "Practical Capehelm guides to budgeting, cash-flow forecasting and understanding what your household money needs to do next.",
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
        <article className="guide-index-card">
          <div className="guide-index-meta">
            <span>Budgeting · Forecasting</span>
            <time dateTime="2026-09-28">September 28, 2026</time>
          </div>
          <div>
            <h2 id="latest-guide-title">Budget vs. Cash-Flow Forecast: What&apos;s the Difference?</h2>
            <p>A budget tells you what you planned. A cash-flow forecast tells you what&apos;s about to happen. You need both.</p>
            <SiteLink className="text-link" href="/guides/budget-vs-cash-flow-forecast">Read the guide <ArrowIcon /></SiteLink>
          </div>
          <div className="guide-index-visual" aria-hidden="true">
            <span>Budget</span><i>→</i><span>Actuals</span><i>→</i><span>Forecast</span>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
