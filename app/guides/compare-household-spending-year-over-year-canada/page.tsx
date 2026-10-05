import { GuideBreadcrumbs, GuideCta } from "../../../components/GuideBlocks";
import { PageShell, SiteLink } from "../../../components/SiteShell";
import { createPageMetadata } from "../../../config/pageMetadata";
import {
  createArticleStructuredData,
  serializeStructuredData,
} from "../../../config/structuredData";

const articlePath = "/guides/compare-household-spending-year-over-year-canada";
const articleTitle = "How to Compare Your Household Spending Year Over Year in Canada";
const articleDescription =
  "A practical way to compare household spending across the same months, account for category changes and understand where Canada’s inflation data helps—and where it does not.";
const datePublished = "2026-10-05";

export const metadata = createPageMetadata({
  title: `${articleTitle} | Capehelm`,
  description: articleDescription,
  path: articlePath,
  openGraphType: "article",
  publishedTime: datePublished,
});

export const dynamic = "force-static";

const articleStructuredData = createArticleStructuredData({
  headline: articleTitle,
  description: articleDescription,
  path: articlePath,
  datePublished,
});

export default function CompareHouseholdSpendingGuide() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(articleStructuredData) }}
      />
      <article className="guide-article">
        <header className="guide-hero section-shell">
          <GuideBreadcrumbs
            path={articlePath}
            current="Compare household spending year over year"
          />
          <p className="eyebrow"><span /> Household spending · Practical guide</p>
          <h1>How to Compare Your Household Spending <em>Year Over Year</em></h1>
          <p className="guide-deck">
            A national inflation number cannot explain every household’s experience. Compare your own spending consistently, then use Canadian price data as context—not as a verdict on your budget.
          </p>
          <div className="guide-byline">
            <span>By Ashley Skinner</span>
            <time dateTime={datePublished}>October 5, 2026</time>
          </div>
        </header>

        <div className="guide-prose">
          <p className="guide-lede">
            When prices rise more slowly, household expenses do not automatically go back down.
          </p>
          <p>
            A September 2026 Bank of Canada analysis found that, relative to pre-pandemic trends, average household spending rose by about $6,500 a year over 2020–2025, while disposable income rose by slightly more. The averages concealed wide differences between households. The Bank also cautions that its income-spending gap is an accounting comparison, not a measure of overall financial well-being.
          </p>
          <p>
            That is useful context, but it cannot tell you what changed in your household. A simple year-over-year review can help you see which parts of your own spending moved, without assuming that every increase was caused by inflation or that a higher total means someone did something wrong.
          </p>

          <section aria-labelledby="choose-period-title">
            <p className="guide-section-number">01 · Choose a fair comparison</p>
            <h2 id="choose-period-title">Compare the same months</h2>
            <p>
              Start with the latest complete 12 months and compare them with the same 12 months a year earlier. Matching the calendar months helps avoid treating predictable seasonal costs—such as holiday travel, school expenses, or winter utilities—as a new trend.
            </p>
            <p>
              If you have only recently started tracking, use the same three or six months in both years and label the shorter window. Do not compare a partial month with a full one. Make sure the totals cover the same accounts and the same household members in both periods.
            </p>
          </section>

          <section aria-labelledby="clean-data-title">
            <p className="guide-section-number">02 · Make the totals comparable</p>
            <h2 id="clean-data-title">Clean the transaction history before reading it</h2>
            <p>
              A year-over-year comparison is only as consistent as the records behind it. Check that both periods include the same chequing accounts and cards. Treat transfers between your own accounts as transfers, not new spending, and avoid counting a credit-card payment on top of the purchases that already appear on the card statement.
            </p>
            <p>
              Review refunds, duplicate imports, uncategorized transactions and merchants that changed names. Keep irregular costs visible: insurance renewals, repairs, annual fees and trips may not happen every month, but they still affect a full-year total.
            </p>
            <p>
              If you are working from statement files, this <SiteLink href="/guides/how-to-analyze-bank-transactions-csv">guide to analyzing bank transactions from a CSV file</SiteLink> covers a practical cleanup and categorization process.
            </p>
          </section>

          <section aria-labelledby="read-changes-title">
            <p className="guide-section-number">03 · Interpret the difference</p>
            <h2 id="read-changes-title">A bigger bill does not reveal the cause by itself</h2>
            <p>
              Suppose a category total is higher than last year. The difference could reflect higher prices, buying more, choosing different products, a change in household size, or a one-time expense. Transaction totals alone cannot separate those causes.
            </p>
            <p>
              Review categories one at a time. For each one, ask what changed in the underlying transactions and whether the period includes an unusual purchase. Compare the category’s share of total spending as well as its dollar amount; a category can rise in dollars while becoming a smaller part of a household’s overall spending.
            </p>
            <p>
              Statistics Canada’s <a href="https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2020cal-eng.htm">Personal Inflation Calculator</a> lets you enter a household spending mix and compare an estimated personal inflation rate with official CPI. Statistics Canada says this is an informational guide, not an official statistic; it uses public CPI data, combines some categories and covers about 94% of the CPI basket. It can add context to your review, but it does not explain the exact reason your own transactions changed.
            </p>
          </section>

          <section aria-labelledby="table-title">
            <p className="guide-section-number">04 · Turn the comparison into questions</p>
            <h2 id="table-title">Use the numbers to decide what to inspect next</h2>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Questions to ask during a year-over-year spending review</caption>
                <thead>
                  <tr><th scope="col">What you notice</th><th scope="col">What to check</th></tr>
                </thead>
                <tbody>
                  <tr><th scope="row">A steady increase in a frequent category</th><td>Compare individual purchases, quantities where known, merchants and any change in household needs.</td></tr>
                  <tr><th scope="row">A large jump in one month</th><td>Look for a one-time repair, annual bill, trip, refund or missing transaction import.</td></tr>
                  <tr><th scope="row">A category is higher but its share is lower</th><td>Check whether total household spending also grew, rather than treating that category alone as the whole story.</td></tr>
                  <tr><th scope="row">Income and spending both changed</th><td>Review income alongside expenses; spending data by itself does not show whether the change is manageable for your household.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="limits-title">
            <p className="guide-section-number">05 · Keep the limits in view</p>
            <h2 id="limits-title">A comparison is a prompt for review, not a diagnosis</h2>
            <p>
              Household circumstances change. A move, new child, job change, medical cost, caregiving responsibility or shift in work patterns can make this year meaningfully different from last year. A category increase is not automatically waste, and a category decrease is not always sustainable.
            </p>
            <p>
              The Financial Consumer Agency of Canada recommends recording income and expenses, comparing a budget with actual spending and reviewing large differences to understand whether they are unusual or likely to continue. Use your own priorities and circumstances to decide what a difference means for you.
            </p>
          </section>

          <section aria-labelledby="capehelm-title">
            <p className="guide-section-number">06 · A repeatable review</p>
            <h2 id="capehelm-title">Keep the plan, actual spending and next steps connected</h2>
            <p>
              A useful review can be simple: import both periods, correct categories, compare the same months, and note a few changes worth revisiting. Capehelm’s Trends view supports monthly spending analysis by group, category and merchant, while its budget tools help compare a plan with actual spending. Its <SiteLink href="/guides/how-to-forecast-personal-cash-flow-14-days">14-day cash-flow guide</SiteLink> covers the separate question of what is coming up next.
            </p>
            <p>
              For more on how the Bank of Canada built its national comparison, read <a href="https://www.bankofcanada.ca/2026/09/sparks-at-bank-article-2026-22/">The budget pressures faced by different households since 2020</a>. For neutral budgeting steps, see the <a href="https://www.canada.ca/en/financial-consumer-agency/services/make-budget.html">Financial Consumer Agency of Canada’s guide to making a budget</a>.
            </p>
          </section>

          <aside className="guide-source-note">
            <strong>About this guide</strong>
            <p>
              Educational information only, not personalized financial, tax or investment advice. Bank of Canada household figures are estimates relative to pre-pandemic trends; its September 2026 article notes that 2024–2025 spending estimates may be revised and results depend on assumptions. Checked October 5, 2026.
            </p>
          </aside>

          <GuideCta
            eyebrow="Capehelm Trends"
            title="See how your spending changes over time."
            body="Review imported transactions by category or merchant, compare periods and connect spending patterns with your budget."
            href="/features"
            label="Explore Capehelm features"
          />
        </div>
      </article>
    </PageShell>
  );
}
