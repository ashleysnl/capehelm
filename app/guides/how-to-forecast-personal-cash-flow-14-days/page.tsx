import {
  ForecastHighlights,
  ForecastProcessStrip,
  FourteenDayBalancePath,
  GuideBreadcrumbs,
  GuideCta,
  fourteenDayForecastRows,
} from "../../../components/GuideBlocks";
import { ProductScreenshot } from "../../../components/ProductScreenshot";
import { PageShell, SiteLink } from "../../../components/SiteShell";
import { createPageMetadata } from "../../../config/pageMetadata";
import {
  createArticleStructuredData,
  serializeStructuredData,
} from "../../../config/structuredData";

const articlePath = "/guides/how-to-forecast-personal-cash-flow-14-days";
const articleTitle = "How to Forecast Your Personal Cash Flow for the Next 14 Days";
const articleDescription =
  "Learn how to build a simple 14-day personal cash-flow forecast, identify your lowest projected balance, and see upcoming financial pressure before it arrives.";
const datePublished = "2026-09-29";

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

const variableExpenseRows = [
  ["Groceries", "$450"],
  ["Fuel", "$150"],
  ["Restaurants", "$100"],
  ["Miscellaneous", "$150"],
] as const;

const formatBalance = (value: number) => `$${value.toLocaleString("en-CA")}`;

export default function ForecastPersonalCashFlowGuide() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(articleStructuredData) }}
      />
      <article className="guide-article">
        <header className="guide-hero section-shell">
          <GuideBreadcrumbs current="Forecast personal cash flow for 14 days" />
          <p className="eyebrow"><span /> Forecasting · How-to</p>
          <h1>How to Forecast Your Personal Cash Flow for the <em>Next 14 Days</em></h1>
          <p className="guide-deck">A simple two-week cash-flow forecast can show you where your bank balance is headed before the bills actually arrive. Here&apos;s how to build one.</p>
          <div className="guide-byline">
            <span>By Ashley Skinner</span>
            <time dateTime={datePublished}>September 29, 2026</time>
          </div>
          <ForecastProcessStrip />
        </header>

        <div className="guide-prose">
          <p className="guide-lede">Your bank balance tells you how much money you have <strong>right now</strong>.</p>
          <p>It doesn&apos;t tell you how much of that money is already spoken for.</p>
          <p>Imagine you open your banking app and see <strong>$4,800</strong> in your chequing account.</p>
          <p>That feels comfortable.</p>
          <p>But over the next two weeks, you know your mortgage is coming out. A credit-card payment is due. You&apos;ll buy groceries. Your electricity bill will be withdrawn. Childcare needs to be paid.</p>
          <p>You also have two paycheques coming in.</p>
          <p className="guide-question">So how much of that $4,800 is actually available?</p>
          <p>A monthly budget helps, but it doesn&apos;t completely answer the question.</p>
          <p>A short-term cash-flow forecast does.</p>
          <p>And you don&apos;t need complicated financial software to build one.</p>

          <section aria-labelledby="what-is-forecast-title">
            <p className="guide-section-number">01 · The path</p>
            <h2 id="what-is-forecast-title">What is a personal cash-flow forecast?</h2>
            <p>A personal cash-flow forecast is simply a timeline of the money you expect to come in and go out over a future period.</p>
            <p>You start with the money available today. Then you work forward chronologically:</p>
            <p className="guide-cycle" aria-label="Starting balance, then income, then expenses, then projected balance">
              <span>Starting balance</span><i aria-hidden="true">→</i><span>Income</span><i aria-hidden="true">→</i><span>Expenses</span><i aria-hidden="true">→</i><span>Projected balance</span>
            </p>
            <p>After every expected transaction, you calculate what your balance should be.</p>
            <p>The result isn&apos;t one number.</p>
            <p className="guide-pullquote">It&apos;s a path.</p>
            <p>And that distinction is important.</p>
          </section>

          <section aria-labelledby="example-title">
            <p className="guide-section-number">02 · A two-week example</p>
            <h2 id="example-title">A simple 14-day example</h2>
            <p>Suppose you have <strong>$4,800 available today</strong>. Over the next two weeks, you expect the following:</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative 14-day personal cash-flow forecast</caption>
                <thead><tr><th scope="col">Day</th><th scope="col">What happens</th><th scope="col">Change</th><th scope="col">Forecast balance</th></tr></thead>
                <tbody>
                  {fourteenDayForecastRows.map((row) => (
                    <tr key={row.day}>
                      <th scope="row">{row.label}</th>
                      <td>{row.item}</td>
                      <td>{row.change}</td>
                      <td><strong>{formatBalance(row.balance)}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="guide-breakout section-shell">
          <FourteenDayBalancePath />
        </div>

        <div className="guide-prose guide-prose-continued">
          <p>At first glance, you might focus on the ending balance.</p>
          <p>You started with $4,800. Two weeks later, you&apos;re projected to have $6,460.</p>
          <p>But <strong>$6,460 isn&apos;t the most interesting number in this forecast.</strong></p>
          <p>Look at what happens between today and Day 14.</p>
          <p>Your balance climbs as high as $6,850. Then it falls. By Day 11, you&apos;re down to <strong>$2,560</strong> before the next paycheque arrives.</p>
          <p>That is information your starting and ending balances don&apos;t show you.</p>

          <section aria-labelledby="lowest-point-title">
            <p className="guide-section-number">03 · The useful number</p>
            <h2 id="lowest-point-title">The lowest point matters more than the ending point</h2>
            <p>This is one of the most useful things I&apos;ve learned from forecasting.</p>
            <p>Your ending balance can look perfectly comfortable while the path to get there is not.</p>
            <p>Imagine a slightly different situation. You start with $2,800 instead of $4,800. Your credit-card bill is $4,200 instead of $3,200. Or your paycheque arrives two days later than expected.</p>
            <p>The ending balance might still be positive. But somewhere in the middle, things could get tight.</p>
            <p>That&apos;s why one of the first things I look for in a short-term forecast is:</p>
            <p className="guide-question">What is my lowest projected available balance, and when does it happen?</p>
            <p>Think of it as the low point in your financial runway.</p>
            <p>You aren&apos;t trying to predict your finances perfectly. You&apos;re trying to spot pressure <strong>before you reach it</strong>.</p>
            <ForecastHighlights />
            <p>Whether $2,560 provides enough breathing room depends entirely on the household.</p>
            <p>For one family, it might provide plenty of margin. For another, an additional large expense could make things uncomfortable.</p>
            <p>The forecast doesn&apos;t make that decision for you. It makes the situation visible.</p>
          </section>

          <section aria-labelledby="step-one-title">
            <p className="guide-section-number">04 · Step 1</p>
            <h2 id="step-one-title">Start with money actually available</h2>
            <p>Start with the amount of cash you have available for the period you&apos;re forecasting.</p>
            <p>For many households, that&apos;s primarily the balance of the chequing account used to pay everyday expenses and bills.</p>
            <p>Don&apos;t start with:</p>
            <ul className="guide-chip-list">
              <li>your net worth</li><li>your investment portfolio</li><li>your home&apos;s value</li><li>unused credit-card limits</li><li>money you don&apos;t intend to use for normal expenses</li>
            </ul>
            <p>You&apos;re trying to answer a practical question:</p>
            <p className="guide-question">How much money is available to handle what&apos;s coming next?</p>
            <p>Suppose that&apos;s <strong>$4,800</strong>. That&apos;s Day 0 of your forecast.</p>
          </section>

          <section aria-labelledby="step-two-title">
            <p className="guide-section-number">05 · Step 2</p>
            <h2 id="step-two-title">Add the income you know is coming</h2>
            <p>Next, add reasonably predictable income expected during the next 14 days. That might include:</p>
            <ul className="guide-chip-list">
              <li>paycheques</li><li>pension payments</li><li>government benefits</li><li>reimbursements</li><li>scheduled transfers</li><li>reliable recurring income</li>
            </ul>
            <p>Dates matter.</p>
            <p>A $4,000 paycheque arriving tomorrow and one arriving twelve days from now have the same effect on your total income. They do <strong>not</strong> have the same effect on your cash flow.</p>
            <p>Suppose your next paycheque is $3,900 on Day 4. Don&apos;t just add $3,900 to a two-week income total. Put it on <strong>Day 4</strong>.</p>
            <p>The timing is part of the information you&apos;re trying to understand.</p>
          </section>

          <section aria-labelledby="step-three-title">
            <p className="guide-section-number">06 · Step 3</p>
            <h2 id="step-three-title">Add your known obligations</h2>
            <p>Now list the expenses you know are approaching. Start with the obvious ones:</p>
            <ul className="guide-chip-list">
              <li>mortgage or rent</li><li>credit-card payments</li><li>electricity</li><li>internet and phone</li><li>insurance</li><li>childcare</li><li>loan payments</li><li>subscriptions</li><li>scheduled transfers</li><li>property-related payments</li><li>other recurring bills</li>
            </ul>
            <p>Again, put them on the date they&apos;re actually expected to occur.</p>
            <p>This is where a forecast starts revealing things a monthly budget can hide.</p>
            <p>Suppose your household earns comfortably more than it spends. On paper, everything may look fine. But if your mortgage, credit card, childcare and several other bills all fall <strong>before</strong> the next paycheque, the timing still matters.</p>
            <p>A forecast makes that visible.</p>
          </section>

          <section aria-labelledby="step-four-title">
            <p className="guide-section-number">07 · Step 4</p>
            <h2 id="step-four-title">Estimate variable spending—but don&apos;t pretend you can predict everything</h2>
            <p>Fixed payments are relatively easy. Everyday spending is harder.</p>
            <p>You probably don&apos;t know exactly how much you&apos;ll spend at the grocery store next Saturday. You don&apos;t know whether you&apos;ll buy $40 or $65 worth of fuel. And you definitely don&apos;t need to predict every coffee.</p>
            <p>That&apos;s okay.</p>
            <p className="guide-question">A useful forecast doesn&apos;t need to be a perfect forecast.</p>
            <p>For variable spending, use reasonable estimates for the things that are likely to matter.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Example variable-spending allowance</caption>
                <thead><tr><th scope="col">Variable expense</th><th scope="col">14-day estimate</th></tr></thead>
                <tbody>{variableExpenseRows.map(([expense, estimate]) => <tr key={expense}><th scope="row">{expense}</th><td>{estimate}</td></tr>)}</tbody>
              </table>
            </div>
            <p>You can spread those estimates across the forecast approximately rather than pretending you know exactly when every transaction will happen.</p>
            <p>The goal is not precision to the penny. The goal is to avoid telling yourself that all $4,800 sitting in your account is freely available when you know normal life will consume some of it.</p>
          </section>

          <section aria-labelledby="step-five-title">
            <p className="guide-section-number">08 · Step 5</p>
            <h2 id="step-five-title">Calculate your balance after every event</h2>
            <p>Now put everything in chronological order.</p>
            <ol className="guide-steps">
              <li><span>01</span><div><strong>Start with today&apos;s available balance.</strong></div></li>
              <li><span>02</span><div><strong>Add income.</strong></div></li>
              <li><span>03</span><div><strong>Subtract expenses.</strong></div></li>
              <li><span>04</span><div><strong>Calculate the new balance.</strong></div></li>
              <li><span>05</span><div><strong>Move to the next event.</strong></div></li>
            </ol>
            <p>You can do this on paper, in a spreadsheet or with financial software.</p>
            <p>The arithmetic is the easy part. What matters is seeing the sequence.</p>
          </section>

          <section aria-labelledby="step-six-title">
            <p className="guide-section-number">09 · Step 6</p>
            <h2 id="step-six-title">Find the low point</h2>
            <p>Once your forecast is built, don&apos;t immediately jump to Day 14. Scan the entire period.</p>
            <p>Where is the lowest balance?</p>
            <p>In our example, it is <strong>$2,560 on Day 11</strong>, before the next paycheque arrives.</p>
            <p>The ending balance looks comfortable, but the low point tells us something different: the household has roughly $2,560 of breathing room at its tightest point under the assumptions we&apos;ve made.</p>
            <p>Whether that is comfortable depends entirely on the household.</p>
          </section>

          <section aria-labelledby="available-money-title">
            <p className="guide-section-number">10 · Add time to the balance</p>
            <h2 id="available-money-title">Your bank balance isn&apos;t the same as available money</h2>
            <p>Suppose your balance is $6,000. It&apos;s tempting to think: <strong>we have $6,000.</strong></p>
            <p>Technically, you do.</p>
            <p>But if $2,000 is going to your mortgage, $2,500 is going toward your credit card and another $600 is needed for other bills before you&apos;re paid again, that $6,000 means something very different.</p>
            <p>Some of it is already spoken for.</p>
            <p>A forecast essentially adds <strong>time</strong> to your bank balance.</p>
            <p>Instead of asking “How much money do we have?” you start asking:</p>
            <p className="guide-question">How much money will we have after the things we already know about happen?</p>
            <p>I find the second question far more useful.</p>
          </section>

          <section aria-labelledby="why-fourteen-title">
            <p className="guide-section-number">11 · A practical horizon</p>
            <h2 id="why-fourteen-title">Why use 14 days?</h2>
            <p>There&apos;s nothing magical about two weeks. You could build a forecast for seven days, 30 days, three months or a year.</p>
            <p>But there&apos;s a trade-off between <strong>visibility and uncertainty</strong>.</p>
            <p>Forecast tomorrow and you can probably be very accurate. Forecast six months from now and you&apos;ll have to make a lot of assumptions.</p>
            <p>For everyday household finances, I like <strong>14 days</strong>.</p>
            <p>It&apos;s long enough to capture many of the things that matter:</p>
            <ul className="guide-chip-list">
              <li>upcoming paycheques</li><li>mortgage or rent</li><li>credit-card payments</li><li>utilities</li><li>subscriptions</li><li>groceries</li><li>childcare</li><li>known purchases</li>
            </ul>
            <p>But it&apos;s short enough that you generally have a reasonable idea of what&apos;s coming.</p>
            <p>Then, rather than maintaining a perfect six-month prediction, you can continually roll the forecast forward. Today becomes tomorrow. New information appears. Plans change. The forecast changes with them.</p>
          </section>

          <section aria-labelledby="problem-title">
            <p className="guide-section-number">12 · Act before the low point</p>
            <h2 id="problem-title">What do you do when the forecast shows a problem?</h2>
            <p>Suppose your forecast shows your available balance getting uncomfortably low eight days from now.</p>
            <p>You now have eight days to think about it.</p>
            <p>Depending on your circumstances, you might:</p>
            <ul className="guide-question-list">
              <li>postpone a discretionary purchase</li>
              <li>reduce optional spending for a week</li>
              <li>reconsider the timing of a transfer to savings</li>
              <li>move money between your own accounts</li>
              <li>review a payment where you legitimately have flexibility</li>
              <li>investigate whether a large expected charge is correct</li>
              <li>avoid spending money that looked available but really wasn&apos;t</li>
            </ul>
            <p>The specific response depends on your situation.</p>
            <p>The important part is that you&apos;re making the decision <strong>before</strong> the low point arrives.</p>
            <p>Without a forecast, you might discover the same problem by opening your banking app eight days later. That&apos;s a very different experience.</p>
          </section>

          <section aria-labelledby="not-budget-title">
            <p className="guide-section-number">13 · A different question</p>
            <h2 id="not-budget-title">A forecast is not a budget</h2>
            <p>It&apos;s easy to mix the two up.</p>
            <div className="guide-path-pair">
              <div><span>Budget</span><p>What do we plan to earn and spend?</p></div>
              <div><span>Forecast</span><p>Based on what we know now, what is likely to happen next?</p></div>
            </div>
            <p>Suppose you&apos;ve budgeted $1,000 for groceries this month. That&apos;s useful.</p>
            <p>But knowing you&apos;ve got $400 of grocery spending remaining doesn&apos;t tell you whether your mortgage and credit-card payment will leave enough cash in your account before your next paycheque.</p>
            <p>That&apos;s why I use both. A budget provides the <strong>plan</strong>. A forecast provides the <strong>near-term path</strong>.</p>
            <p>For a fuller explanation, read <SiteLink href="/guides/budget-vs-cash-flow-forecast">Budget vs. Cash-Flow Forecast: What&apos;s the Difference?</SiteLink></p>
          </section>

          <section aria-labelledby="forecast-change-title">
            <p className="guide-section-number">14 · Keep it current</p>
            <h2 id="forecast-change-title">Your forecast should change</h2>
            <p>If your forecast is wrong, that doesn&apos;t necessarily mean it failed.</p>
            <p>Maybe groceries cost $320 instead of $250. Maybe a reimbursement arrived earlier. Maybe a bill you expected this week didn&apos;t arrive.</p>
            <p>Update the forecast.</p>
            <p>A forecast is based on what you know <strong>right now</strong>. When reality changes, your expectations should change with it.</p>
            <p>This isn&apos;t a promise about the future. It&apos;s a tool for thinking about the future.</p>
          </section>

          <section aria-labelledby="spreadsheet-title">
            <p className="guide-section-number">15 · Try it yourself</p>
            <h2 id="spreadsheet-title">You can build this in a spreadsheet</h2>
            <p>You don&apos;t need Capehelm to use this approach. A basic spreadsheet works well.</p>
            <p>Create four columns:</p>
            <p className="guide-cycle" aria-label="Date, description, change and projected balance columns">
              <span>Date</span><i aria-hidden="true">|</i><span>Description</span><i aria-hidden="true">|</i><span>Change</span><i aria-hidden="true">|</i><span>Projected balance</span>
            </p>
            <p>Enter today&apos;s balance in the first row. Add your expected transactions chronologically.</p>
            <p>For each row, calculate: <strong>previous balance + change = new projected balance.</strong></p>
            <p>Then look for the lowest projected balance.</p>
            <p>That&apos;s enough to build a useful two-week cash-flow forecast. I&apos;d recommend trying it at least once manually; it makes the concept very easy to understand.</p>
            <p>If your starting point is a bank export, the guide to <SiteLink href="/guides/how-to-analyze-bank-transactions-csv">analyzing transactions from a CSV file</SiteLink> explains how to preserve, clean and categorize that history first.</p>
          </section>
        </div>

        <section className="guide-product-fit section-shell" aria-labelledby="capehelm-forecast-title">
          <div className="guide-product-fit-copy">
            <p className="guide-section-number">16 · The product view</p>
            <h2 id="capehelm-forecast-title">How Capehelm approaches forecasting</h2>
            <p>Capehelm has a dedicated <strong>14-day Forecast</strong> because I wanted this process to become something I could use regularly rather than a spreadsheet I built once and eventually stopped updating.</p>
            <p>Capehelm uses the financial information you&apos;ve provided, along with repeating and expected items, to help build that near-term view.</p>
            <p>The goal isn&apos;t to predict every transaction perfectly. It&apos;s to answer a much simpler question: <strong>what&apos;s coming next?</strong></p>
            <ul>
              <li><strong>Trends</strong> helps answer what happened.</li>
              <li><strong>Budget</strong> helps define the plan.</li>
              <li><strong>Forecast</strong> looks at what&apos;s coming next.</li>
              <li><strong>Net Worth and Retirement</strong> look further ahead.</li>
            </ul>
            <p>They&apos;re different time horizons on the same financial picture.</p>
            <p>Capehelm&apos;s local-first model begins with financial information you choose to import. The guide to <SiteLink href="/guides/do-personal-finance-apps-need-bank-access">personal finance apps and bank access</SiteLink> explains that trade-off.</p>
          </div>
          <div>
            <ProductScreenshot
              asset="forecast"
              alt="Capehelm Forecast showing a fictional 14-day cash-flow plan with upcoming income, obligations and projected balances."
              className="guide-product-screenshot"
              sizes="(max-width: 800px) calc(100vw - 32px), (max-width: 1160px) calc(100vw - 48px), 710px"
            />
            <p className="guide-caption">Capehelm Forecast, shown with fictional demo data.</p>
          </div>
        </section>

        <div className="guide-prose guide-closing">
          <section aria-labelledby="takeaway-title">
            <p className="guide-section-number">17 · The takeaway</p>
            <h2 id="takeaway-title">The takeaway</h2>
            <p>You don&apos;t need a complicated financial model to start forecasting your household cash flow.</p>
            <p>Start with the money available today. Add the income you reasonably expect. Subtract the obligations you know are coming. Allow for normal everyday spending. Then work forward chronologically.</p>
            <p>Most importantly: <strong>don&apos;t just look at where the forecast ends.</strong></p>
            <p>Look at the path. Find the lowest point. That&apos;s often where the useful information is hiding.</p>
            <p>Your bank balance tells you where you are.</p>
            <p>Your budget tells you what you planned.</p>
            <p className="guide-final-line">A cash-flow forecast helps you see where you&apos;re heading.</p>
          </section>
        </div>

        <div className="section-shell">
          <GuideCta
            eyebrow="Capehelm Forecast"
            title="See what&apos;s coming next."
            body="Capehelm combines spending trends, budgeting and a rolling 14-day cash-flow forecast in a private, local-first personal finance app for Mac."
            href="/cash-flow-forecast"
            label="Explore Capehelm&apos;s Forecast"
          />
        </div>
      </article>
    </PageShell>
  );
}
