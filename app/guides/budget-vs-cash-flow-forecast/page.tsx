import {
  BudgetActualsForecastFlow,
  ForecastTimeline,
  GuideBreadcrumbs,
  GuideCta,
} from "../../../components/GuideBlocks";
import { ProductScreenshot } from "../../../components/ProductScreenshot";
import { PageShell, SiteLink } from "../../../components/SiteShell";
import { createPageMetadata } from "../../../config/pageMetadata";
import {
  createArticleStructuredData,
  serializeStructuredData,
} from "../../../config/structuredData";

const articlePath = "/guides/budget-vs-cash-flow-forecast";
const articleTitle = "Budget vs. Cash-Flow Forecast: What’s the Difference?";
const articleDescription =
  "Learn the difference between a monthly budget and a short-term cash-flow forecast, why both matter, and how a 14-day forecast can help you see what’s coming next.";
const datePublished = "2026-09-28";

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

const budgetRows = [
  ["Housing", "$2,500"],
  ["Groceries", "$1,200"],
  ["Transportation", "$600"],
  ["Utilities", "$450"],
  ["Entertainment", "$300"],
  ["Savings", "$1,000"],
] as const;

export default function BudgetVsCashFlowForecastGuide() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(articleStructuredData) }}
      />
      <article className="guide-article">
        <header className="guide-hero section-shell">
          <GuideBreadcrumbs current="Budget vs. cash-flow forecast" />
          <p className="eyebrow"><span /> Budgeting · Forecasting</p>
          <h1>Budget vs. Cash-Flow Forecast: <em>What&apos;s the Difference?</em></h1>
          <p className="guide-deck">A budget tells you what you planned. A cash-flow forecast tells you what&apos;s about to happen. You need both.</p>
          <div className="guide-byline">
            <span>By Ashley Skinner</span>
            <time dateTime={datePublished}>September 28, 2026</time>
          </div>
          <BudgetActualsForecastFlow />
        </header>

        <div className="guide-prose">
          <p className="guide-lede">Most people think that if they have a budget, they know where their finances stand.</p>
          <p>But imagine this:</p>
          <div className="guide-scenario">
            <p>You&apos;ve budgeted <strong>$1,200</strong> for groceries this month. You&apos;ve spent <strong>$850</strong>. Great—you&apos;re under budget.</p>
            <p>Your chequing account has <strong>$3,400</strong> in it.</p>
            <p>Then over the next ten days:</p>
            <ul>
              <li>your mortgage payment comes out</li>
              <li>your credit-card payment is due</li>
              <li>childcare is withdrawn</li>
              <li>you get paid</li>
              <li>your electricity bill comes out</li>
            </ul>
          </div>
          <p className="guide-question">Are you actually in good shape?</p>
          <p>Your monthly budget can&apos;t fully answer that question.</p>
          <p>That&apos;s where a cash-flow forecast comes in.</p>

          <section aria-labelledby="budget-answer-title">
            <p className="guide-section-number">01 · The plan</p>
            <h2 id="budget-answer-title">A budget answers: “What do I want to happen?”</h2>
            <p>A budget is your financial plan.</p>
            <p>You estimate your income and decide how much you expect—or want—to spend across things like housing, groceries, transportation, entertainment and savings.</p>
            <p>At the beginning of the month, your budget might look something like this:</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Example monthly household budget</caption>
                <thead><tr><th scope="col">Category</th><th scope="col">Monthly plan</th></tr></thead>
                <tbody>{budgetRows.map(([category, amount]) => <tr key={category}><th scope="row">{category}</th><td>{amount}</td></tr>)}</tbody>
              </table>
            </div>
            <p>As transactions happen, you compare your actual spending against that plan.</p>
            <p>That makes a budget very good at answering questions such as:</p>
            <ul className="guide-question-list">
              <li>How much did we plan to spend?</li>
              <li>Are we overspending on restaurants?</li>
              <li>Can we afford to increase our savings target?</li>
              <li>Where is our money actually going?</li>
            </ul>
            <p>But there&apos;s something important missing:</p>
            <p className="guide-pullquote">time.</p>
          </section>

          <section aria-labelledby="forecast-answer-title">
            <p className="guide-section-number">02 · The sequence</p>
            <h2 id="forecast-answer-title">A forecast answers: “What happens next?”</h2>
            <p>A cash-flow forecast starts somewhere different.</p>
            <p>Instead of asking how much you intend to spend this month, it starts with the money you actually have available today. Then it looks forward.</p>
            <p>Suppose you have $3,400 available on September 28. You know several things are coming:</p>
          </section>
        </div>

        <div className="guide-breakout section-shell">
          <ForecastTimeline />
        </div>

        <div className="guide-prose guide-prose-continued">
          <p>Suddenly you can see something a monthly budget doesn&apos;t show very well: <strong>the sequence of your money.</strong></p>
          <p>You aren&apos;t simply asking whether income exceeds expenses.</p>
          <p className="guide-question">Will the money be there when I need it?</p>
          <p>That is a different problem.</p>

          <section aria-labelledby="not-competitors-title">
            <p className="guide-section-number">03 · Three connected views</p>
            <h2 id="not-competitors-title">Budgeting and forecasting aren&apos;t competitors</h2>
            <p>You don&apos;t have to choose between budgeting and forecasting. They solve different problems.</p>
            <div className="guide-three-views">
              <article><span>Budgeting</span><h3>Here&apos;s what we planned.</h3></article>
              <article><span>Tracking</span><h3>Here&apos;s what actually happened.</h3></article>
              <article><span>Forecasting</span><h3>Based on what we know now, here&apos;s what&apos;s likely to happen next.</h3></article>
            </div>
            <p>Together, those three views create a much more useful picture of your finances.</p>
            <p>And they&apos;re remarkably similar to how large projects are managed.</p>
          </section>

          <section aria-labelledby="engineering-title">
            <p className="guide-section-number">04 · The origin</p>
            <h2 id="engineering-title">The idea came from project engineering</h2>
            <p>I&apos;m a project engineer.</p>
            <p>I&apos;ve spent years working with projects where understanding the numbers isn&apos;t enough. You need to understand what has happened, compare it with the plan and continually look ahead at what is coming.</p>
            <p>Eventually I realized something: I wasn&apos;t applying the same thinking to my own finances.</p>
            <p>A household isn&apos;t an engineering project, of course. But some of the basic questions translate surprisingly well.</p>
            <dl className="guide-engineering-questions">
              <div><dt>What happened?</dt><dd>Where did our money actually go? How does that compare with the plan? Are we spending roughly where we expected?</dd></div>
              <div><dt>What&apos;s coming next?</dt><dd>What payments, income and other commitments are approaching?</dd></div>
              <div><dt>Are we moving in the right direction?</dt><dd>Is our longer-term financial position improving?</dd></div>
            </dl>
            <p>Those questions eventually became part of the thinking behind Capehelm.</p>
          </section>

          <section aria-labelledby="short-forecast-title">
            <p className="guide-section-number">05 · A practical horizon</p>
            <h2 id="short-forecast-title">Why I like a short forecast</h2>
            <p>You can forecast household finances months or even years into the future. But there&apos;s a trade-off.</p>
            <p>The further you look ahead, the less certain everyday spending becomes.</p>
            <p>I find the next two weeks particularly useful. It&apos;s long enough to capture things like:</p>
            <ul className="guide-chip-list">
              <li>upcoming paycheques</li><li>mortgage or rent</li><li>credit-card payments</li><li>recurring bills</li><li>subscriptions</li><li>transfers</li><li>known larger purchases</li>
            </ul>
            <p>But it&apos;s short enough that you generally have a reasonable idea of what&apos;s actually going to happen.</p>
            <p>The goal isn&apos;t to predict every coffee you&apos;ll buy next Thursday. It&apos;s to identify the important movements of money before they happen.</p>
          </section>

          <section aria-labelledby="diy-title">
            <p className="guide-section-number">06 · Try it yourself</p>
            <h2 id="diy-title">A simple way to do this yourself</h2>
            <p>You don&apos;t need special software to build a basic personal cash-flow forecast.</p>
            <ol className="guide-steps">
              <li><span>01</span><div><strong>Start with today.</strong><p>Write down your current available balance.</p></div></li>
              <li><span>02</span><div><strong>List the next 14 days.</strong><p>Add the significant transactions you know are likely to occur.</p></div></li>
              <li><span>03</span><div><strong>Run the balance forward.</strong><p>Add income, subtract expenses and calculate the expected balance after each one.</p></div></li>
              <li><span>04</span><div><strong>Notice the low points.</strong><p>Look for the places where your projected balance becomes uncomfortable.</p></div></li>
            </ol>
            <p>A spreadsheet can do this perfectly well.</p>
            <p>If you want to build one step by step, the guide to <SiteLink href="/guides/how-to-forecast-personal-cash-flow-14-days">forecasting your personal cash flow for the next 14 days</SiteLink> walks through the timeline, estimates and low point.</p>
            <p>Maybe the month looks fine overall, but three large payments land before your next paycheque. That&apos;s useful information before those payments happen.</p>
          </section>
        </div>

        <section className="guide-product-fit section-shell" aria-labelledby="capehelm-fit-title">
          <div className="guide-product-fit-copy">
            <p className="guide-section-number">07 · The product view</p>
            <h2 id="capehelm-fit-title">Where Capehelm fits</h2>
            <p>This is one of the reasons I built Capehelm with separate <SiteLink href="/features#stand">Budget</SiteLink>, <SiteLink href="/features#understand">Trends</SiteLink> and <SiteLink href="/features#plan">Forecast</SiteLink> views.</p>
            <p>They aren&apos;t different ways of displaying the same information. They answer different questions.</p>
            <ul>
              <li><strong>Trends</strong> helps you understand what happened.</li>
              <li><strong>Budget</strong> helps you make a plan.</li>
              <li><strong>Forecast</strong> helps you look ahead.</li>
            </ul>
            <p>And Net Worth and Retirement pull the camera back further to help you understand the bigger picture.</p>
            <p>Capehelm&apos;s Forecast focuses on the next 14 days because I wanted something practical enough to use regularly—not an elaborate financial model that gets abandoned after a week.</p>
            <p>Because Capehelm is <SiteLink href="/private-personal-finance">local-first</SiteLink>, that analysis can be done from financial data you import yourself rather than requiring you to connect your bank accounts.</p>
            <p>If you&apos;re weighing that choice, the guide to <SiteLink href="/guides/do-personal-finance-apps-need-bank-access">personal finance apps and bank access</SiteLink> explains the convenience-and-control trade-off.</p>
          </div>
          <div>
            <ProductScreenshot
              asset="forecast"
              alt="Capehelm Forecast showing a fictional 14-day cash-flow plan with projected balances and upcoming commitments."
              className="guide-product-screenshot"
              sizes="(max-width: 800px) calc(100vw - 32px), (max-width: 1160px) calc(100vw - 48px), 710px"
            />
            <p className="guide-caption">Capehelm Forecast, shown with fictional demo data.</p>
          </div>
        </section>

        <div className="guide-prose guide-closing">
          <section aria-labelledby="takeaway-title">
            <p className="guide-section-number">08 · The takeaway</p>
            <h2 id="takeaway-title">The takeaway</h2>
            <p>A budget can tell you that you&apos;re under budget for the month while your bank balance is about to get squeezed.</p>
            <p>A healthy bank balance today can make you feel comfortable while several large payments are sitting just around the corner.</p>
            <p>That&apos;s why I don&apos;t think of budgeting as the whole system.</p>
            <p>I think about personal finances as a repeating cycle:</p>
            <p className="guide-cycle" aria-label="Understand what happened, then make a plan, then look ahead, then repeat">
              <span>Understand what happened</span><i aria-hidden="true">→</i><span>Make a plan</span><i aria-hidden="true">→</i><span>Look ahead</span><i aria-hidden="true">→</i><span>Repeat</span>
            </p>
            <p>A budget helps with the plan.</p>
            <p>A forecast helps with what comes next.</p>
            <p className="guide-final-line">You need both.</p>
          </section>
        </div>

        <div className="section-shell"><GuideCta /></div>
      </article>
    </PageShell>
  );
}
