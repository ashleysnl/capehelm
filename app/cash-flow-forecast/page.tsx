import { LandingCta, RelatedGuides } from "../../components/LandingPageBlocks";
import { ProductScreenshot } from "../../components/ProductScreenshot";
import { ArrowIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

const title = "Household Cash Flow Forecast for Mac | Capehelm";
const description =
  "See upcoming income, bills, planned spending and projected checking balances with Capehelm’s rolling 14-day household cash-flow Forecast for Mac.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/cash-flow-forecast",
});

export const dynamic = "force-static";

export default function CashFlowForecastPage() {
  return (
    <PageShell>
      <article className="landing-page landing-forecast">
        <header className="landing-hero landing-hero-wide section-shell">
          <div className="landing-hero-copy">
            <p className="eyebrow"><span /> Rolling 14-day Forecast</p>
            <h1>See Your Household Cash Flow <em>Before It Happens</em></h1>
            <p>A monthly total can look comfortable while the timing between bills, income and card payments creates pressure. Capehelm’s Forecast turns those dates into a projected checking balance you can inspect day by day.</p>
            <div className="landing-hero-facts" aria-label="Forecast summary">
              <div><strong>14 days</strong><span>Rolling planning window</span></div>
              <div><strong>Daily</strong><span>Projected balance changes</span></div>
              <div><strong>Local</strong><span>Scenario and coverage data</span></div>
            </div>
            <SiteLink className="text-link" href="/features#plan">Explore Forecast features <ArrowIcon /></SiteLink>
          </div>
          <div className="landing-hero-visual">
            <ProductScreenshot
              asset="forecast"
              alt="Capehelm Forecast showing a fictional 14-day cash-flow plan with projected balances, upcoming commitments, a safety floor and daily planning controls."
              eager
              sizes="(max-width: 900px) calc(100vw - 32px), 760px"
            />
            <p className="landing-caption">Forecast combines planned items and expected movement into a day-by-day view. Shown with fictional demo data.</p>
          </div>
        </header>

        <section className="landing-forecast-model section-shell" aria-labelledby="forecast-model-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> How the Forecast works</p>
            <h2 id="forecast-model-title">Turn a list of commitments into a timing plan.</h2>
            <p>Forecast starts with the balances and items in your Finance Document, then lays expected movement across the next two weeks.</p>
          </div>
          <div className="landing-model-grid">
            <article><span>01</span><h3>Start with checking.</h3><p>Set the balance you want to plan from and see how each day’s expected income and spending changes the projected path.</p></article>
            <article><span>02</span><h3>Add what is expected.</h3><p>Schedule recurring commitments and add manual items for one-off expenses, income or transfers that belong in the window.</p></article>
            <article><span>03</span><h3>Inspect the low point.</h3><p>See the lowest projected balance, ending balance and days that may fall below the safety floor you use for planning.</p></article>
            <article><span>04</span><h3>Work day by day.</h3><p>Select a date to review its items, adjust the plan and understand which movement produces the change on the chart.</p></article>
          </div>
          <p className="landing-accuracy-note">Capehelm does not automatically discover every future bill. Forecast is a planning workspace: you decide which recurring and manual items should be included.</p>
        </section>

        <section className="landing-budget-forecast section-shell" aria-labelledby="budget-versus-forecast-title">
          <div className="landing-versus-heading">
            <p className="eyebrow"><span /> Two useful questions</p>
            <h2 id="budget-versus-forecast-title">Budget and Forecast solve different parts of the month.</h2>
          </div>
          <div className="landing-versus-grid">
            <article>
              <span>Budget</span>
              <h3>“How much do I plan to spend?”</h3>
              <p>A budget sets monthly expectations by group and Category, compares actual spending with the plan and shows where the month may be heading.</p>
              <ul><li>Monthly targets</li><li>Plan versus actual</li><li>Projected month end</li></ul>
            </article>
            <article>
              <span>Forecast</span>
              <h3>“When will money move?”</h3>
              <p>A cash-flow forecast focuses on timing. It combines upcoming income and expenses to estimate what checking may look like on each day.</p>
              <ul><li>Dates and commitments</li><li>Projected low points</li><li>14-day balance path</li></ul>
            </article>
          </div>
          <p>Together, Budget helps you decide what the month should contain while Forecast helps you see whether the timing of that plan may create pressure before the next deposit arrives.</p>
        </section>

        <section className="landing-coverage section-shell">
          <div className="landing-coverage-copy">
            <p className="eyebrow"><span /> Forecast Coverage</p>
            <h2>Compare what you expected with what actually happened.</h2>
            <p>After transactions are imported, Forecast Coverage helps you review whether planned items appear to have been covered by real transactions. It keeps the plan connected to the record without pretending the match is a live bank feed.</p>
            <p>You can inspect completed periods, review matching context and resolve items that need attention. The comparison is performed from information in your local Finance Document.</p>
            <SiteLink className="text-link" href="/csv-bank-statement-import">See how transactions enter Capehelm <ArrowIcon /></SiteLink>
          </div>
          <aside className="landing-coverage-example" aria-label="Forecast coverage workflow">
            <div><span>Planned</span><strong>Expected item</strong><p>A recurring or manual commitment in the Forecast.</p></div>
            <i aria-hidden="true">→</i>
            <div><span>Imported</span><strong>Actual transaction</strong><p>A transaction reviewed from a local statement file.</p></div>
            <i aria-hidden="true">→</i>
            <div><span>Reviewed</span><strong>Coverage status</strong><p>Context for what occurred and what still needs attention.</p></div>
          </aside>
        </section>

        <section className="landing-upcoming section-shell">
          <div>
            <p className="eyebrow"><span /> Upcoming bills and income</p>
            <h2>A useful forecast depends on useful inputs.</h2>
          </div>
          <div>
            <p>Recurring items keep regular commitments visible beside expected income. Manual items cover the things that are real but not part of a repeating schedule—an appointment, a reimbursement or a one-time purchase.</p>
            <p>Because Capehelm does not connect to billers or bank accounts, you remain responsible for keeping those expected items current. That control is also what lets the Forecast reflect your household plan rather than a service’s guess.</p>
          </div>
        </section>

        <RelatedGuides links={[
          { href: "/personal-finance-for-mac", label: "See the complete Mac workspace", description: "Understand how Forecast fits with Budget, Trends and long-term planning." },
          { href: "/csv-bank-statement-import", label: "Import actual transactions", description: "Follow the local statement workflow that supports coverage review." },
          { href: "/features", label: "Explore all Capehelm features", description: "Review detailed capabilities across the full application." },
        ]} />

        <LandingCta
          eyebrow="Plan the timing, not just the total"
          title="Know what the next two weeks may ask of your checking account."
          body="Capehelm is being prepared for the Mac App Store. Until the public listing is live, this action opens the current availability page."
          secondaryHref="/features#plan"
          secondaryLabel="Review Forecast details"
        />
      </article>
    </PageShell>
  );
}
