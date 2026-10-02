import {
  FinancialTimeHorizonsStrip,
  GuideBreadcrumbs,
  GuideCta,
  NetWorthDriversCard,
  NetWorthEquationCard,
  NetWorthHistoryChart,
} from "../../../components/GuideBlocks";
import { ProductScreenshot } from "../../../components/ProductScreenshot";
import { PageShell, SiteLink } from "../../../components/SiteShell";
import { createPageMetadata } from "../../../config/pageMetadata";
import {
  createArticleStructuredData,
  serializeStructuredData,
} from "../../../config/structuredData";

const articlePath = "/guides/how-to-track-net-worth-without-bank-connections";
const articleTitle = "How to Track Your Net Worth Without Connecting Your Bank Accounts";
const articleDescription =
  "Learn how to track assets, liabilities and net-worth history manually, understand contributions and debt repayment, and monitor long-term financial progress without linking your bank accounts.";
const datePublished = "2026-10-01";

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

const assets = [
  ["Chequing", "$8,000"],
  ["Savings", "$20,000"],
  ["Investments", "$150,000"],
  ["Home", "$700,000"],
  ["Total assets", "$878,000"],
] as const;

const liabilities = [
  ["Mortgage", "$420,000"],
  ["Car loan", "$18,000"],
  ["Total liabilities", "$438,000"],
] as const;

const netWorthHistory = [
  ["January", "$405,000"],
  ["April", "$416,000"],
  ["July", "$427,000"],
  ["October", "$440,000"],
] as const;

const accountBalances = [
  ["Chequing", "Asset", "$8,000"],
  ["Savings", "Asset", "$20,000"],
  ["RRSP", "Asset", "$110,000"],
  ["TFSA", "Asset", "$40,000"],
  ["Home", "Asset", "$700,000"],
  ["Mortgage", "Liability", "$420,000"],
  ["Car loan", "Liability", "$18,000"],
] as const;

const snapshotHistory = [
  ["January", "$850,000", "$445,000", "$405,000"],
  ["April", "$856,000", "$440,000", "$416,000"],
  ["July", "$863,000", "$436,000", "$427,000"],
  ["October", "$878,000", "$438,000", "$440,000"],
] as const;

const updateFrequency = [
  ["Chequing & savings", "Monthly"],
  ["Investments", "Monthly"],
  ["Mortgage & loans", "Monthly"],
  ["Home value", "Quarterly or when there’s a reasonable basis to update it"],
  ["Vehicle value", "Occasionally"],
  ["Other significant assets", "As appropriate"],
] as const;

export default function TrackNetWorthGuide() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(articleStructuredData) }}
      />
      <article className="guide-article">
        <header className="guide-hero section-shell">
          <GuideBreadcrumbs path="/guides/how-to-track-net-worth-without-bank-connections" current="Track net worth without bank connections" />
          <p className="eyebrow"><span /> Net worth · Long-term progress</p>
          <h1>How to Track Your Net Worth Without Connecting Your <em>Bank Accounts</em></h1>
          <p className="guide-deck">Your net worth is simply what you own minus what you owe. You don&apos;t need to connect every financial account to an app to track it—you can update the numbers periodically and still build a useful picture of your financial progress.</p>
          <div className="guide-byline">
            <span>By Ashley Skinner</span>
            <time dateTime={datePublished}>October 1, 2026</time>
          </div>
          <NetWorthEquationCard />
        </header>

        <div className="guide-prose">
          <p className="guide-lede">There are plenty of financial numbers you could track. Net worth is useful because it brings many of them into one longer-term picture.</p>
          <div className="guide-scenario">
            <ul>
              <li>Your bank balance</li><li>Your investments</li><li>Your mortgage</li><li>Your monthly spending</li><li>Your income</li><li>Your retirement savings</li>
            </ul>
          </div>
          <p>Individually, each tells you something. But unlike day-to-day spending, net worth doesn&apos;t need to be updated constantly.</p>
          <p>For many households, sitting down once a month and recording a handful of balances is enough to see something meaningful.</p>
          <p className="guide-question">Are we moving in the direction we want to go?</p>

          <section aria-labelledby="what-is-net-worth-title">
            <p className="guide-section-number">01 · The equation</p>
            <h2 id="what-is-net-worth-title">What is net worth?</h2>
            <p>The calculation is simple: <strong>Net Worth = Assets − Liabilities.</strong></p>
            <p>Your <strong>assets</strong> are things you own that have financial value. Your <strong>liabilities</strong> are money you owe.</p>
            <h3>Assets</h3>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative household assets</caption>
                <thead><tr><th scope="col">Asset</th><th scope="col">Value</th></tr></thead>
                <tbody>{assets.map(([asset, value]) => <tr key={asset}><th scope="row">{asset}</th><td><strong>{value}</strong></td></tr>)}</tbody>
              </table>
            </div>
            <h3>Liabilities</h3>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative household liabilities</caption>
                <thead><tr><th scope="col">Liability</th><th scope="col">Balance</th></tr></thead>
                <tbody>{liabilities.map(([liability, value]) => <tr key={liability}><th scope="row">{liability}</th><td><strong>{value}</strong></td></tr>)}</tbody>
              </table>
            </div>
            <p>The calculation is <strong>$878,000 − $438,000 = $440,000</strong>.</p>
            <p>So this household has an estimated net worth of <strong>$440,000</strong>. That&apos;s useful, but the number by itself isn&apos;t actually the most interesting part.</p>
          </section>

          <section aria-labelledby="direction-title">
            <p className="guide-section-number">02 · Follow the path</p>
            <h2 id="direction-title">The direction matters more than today&apos;s number</h2>
            <p>Suppose your net worth is $440,000. Is that good? There isn&apos;t enough information to answer that.</p>
            <p>Another household may have a higher or lower number because of differences in age, income, housing, family circumstances, geography, career stage, debt and priorities.</p>
            <p>Comparing your net worth with someone else&apos;s can quickly become meaningless. A more useful comparison is <strong>you versus you</strong>.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative net-worth history</caption>
                <thead><tr><th scope="col">Date</th><th scope="col">Net worth</th></tr></thead>
                <tbody>{netWorthHistory.map(([month, value]) => <tr key={month}><th scope="row">{month}</th><td>{value}</td></tr>)}</tbody>
              </table>
            </div>
            <p>Now the numbers tell you something different. The household&apos;s financial position increased by <strong>$35,000</strong> since January.</p>
            <p>The next question becomes: <strong>why?</strong></p>
          </section>
        </div>

        <div className="guide-breakout section-shell">
          <NetWorthHistoryChart />
        </div>

        <div className="guide-prose guide-prose-continued">
          <section aria-labelledby="track-title">
            <p className="guide-section-number">03 · Step 1</p>
            <h2 id="track-title">Decide what you&apos;re going to track</h2>
            <p>You don&apos;t necessarily need to record everything you own. Your television, furniture, phone and lawn mower all have value, but tracking them may create more work than insight.</p>
            <p>Focus on the assets and liabilities that materially affect your household finances.</p>
            <div className="guide-choice-cards">
              <article><span>Assets</span><h3>What you own</h3><p>Chequing, savings, investments, retirement accounts, education savings, real estate, vehicles and other significant financial assets.</p></article>
              <article><span>Liabilities</span><h3>What you owe</h3><p>Mortgages, home-equity loans, vehicle loans, student loans, lines of credit and other significant debts.</p></article>
            </div>
            <p>The exact list depends on your household. The goal isn&apos;t to produce an audited financial statement. It&apos;s to create a <strong>consistent personal financial picture</strong>.</p>
          </section>

          <section aria-labelledby="balances-title">
            <p className="guide-section-number">04 · Step 2</p>
            <h2 id="balances-title">Record the balances</h2>
            <p>Once you&apos;ve decided what matters, record the current value or balance of each item.</p>
            <p>You can do this manually. Open an account, record the balance and repeat. You don&apos;t need to give another service permanent access just to write down the current values.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative account balances</caption>
                <thead><tr><th scope="col">Account</th><th scope="col">Type</th><th scope="col">Current value</th></tr></thead>
                <tbody>{accountBalances.map(([account, type, value]) => <tr key={account}><th scope="row">{account}</th><td>{type}</td><td>{value}</td></tr>)}</tbody>
              </table>
            </div>
            <p>Add the assets. Subtract the liabilities. You have your current net worth—but don&apos;t stop there.</p>
          </section>

          <section aria-labelledby="history-title">
            <p className="guide-section-number">05 · Step 3</p>
            <h2 id="history-title">Save the history</h2>
            <p>The real value comes from keeping previous snapshots.</p>
            <p>If you calculate your net worth today and overwrite the numbers next month, you know where you are—but you&apos;ve lost the path that got you there.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table guide-net-worth-snapshot-table">
                <caption>Illustrative balance-sheet history</caption>
                <thead><tr><th scope="col">Month</th><th scope="col">Assets</th><th scope="col">Liabilities</th><th scope="col">Net worth</th></tr></thead>
                <tbody>{snapshotHistory.map(([month, assetTotal, liabilityTotal, netWorth]) => <tr key={month}><th scope="row">{month}</th><td>{assetTotal}</td><td>{liabilityTotal}</td><td><strong>{netWorth}</strong></td></tr>)}</tbody>
              </table>
            </div>
            <p>Now you can see both sides of the equation. Maybe your assets increased. Maybe your debt fell. Maybe both happened.</p>
          </section>

          <section aria-labelledby="frequency-title">
            <p className="guide-section-number">06 · Choose a rhythm</p>
            <h2 id="frequency-title">How often should you update your net worth?</h2>
            <p>You <em>could</em> update your net worth every day. I don&apos;t think most people need to.</p>
            <p>Investments fluctuate constantly. Your home doesn&apos;t need a new estimated value every morning. Your mortgage balance changes gradually.</p>
            <p>For personal use, <strong>monthly is a reasonable starting point</strong>.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Possible update frequencies—not universal rules</caption>
                <thead><tr><th scope="col">Item</th><th scope="col">Possible update frequency</th></tr></thead>
                <tbody>{updateFrequency.map(([item, frequency]) => <tr key={item}><th scope="row">{item}</th><td>{frequency}</td></tr>)}</tbody>
              </table>
            </div>
            <p>If quarterly tracking is enough for you, use quarterly. If you enjoy reviewing everything monthly, use monthly. The important thing is <strong>consistency</strong>.</p>
          </section>

          <section aria-labelledby="precision-title">
            <p className="guide-section-number">07 · Use reasonable estimates</p>
            <h2 id="precision-title">Consistency beats false precision</h2>
            <p>Some parts of your net worth are easy to measure. If your mortgage statement says you owe $417,842, you have a reasonably precise number.</p>
            <p>Other assets aren&apos;t nearly as clear. A home you estimate at $700,000 might sell for $690,000, $715,000 or $735,000. You won&apos;t really know until the market establishes a value through a transaction.</p>
            <p>Trying to estimate it every month to the nearest dollar creates the appearance of precision without actually giving you precision.</p>
            <p>Choose a reasonable method and apply it consistently: use a conservative estimate, update occasionally using relevant information, use an appraisal when one exists, or hold the value constant for longer periods.</p>
            <p className="guide-question">Consistency is often more useful than pretending you know the exact number.</p>
          </section>

          <section aria-labelledby="house-title">
            <p className="guide-section-number">08 · Understand the assumptions</p>
            <h2 id="house-title">Be careful when your house dominates your net worth</h2>
            <p>Suppose you own a $700,000 home with a $420,000 mortgage. Your home contributes approximately <strong>$280,000</strong> of equity to your net worth.</p>
            <p>If you decide next month that the home is worth $750,000, your net worth suddenly jumps by $50,000.</p>
            <p>Did your household become $50,000 financially stronger in a meaningful, spendable sense overnight? Probably not. Your estimate changed.</p>
            <p>That&apos;s why it&apos;s useful to understand what caused a change, rather than celebrating every upward movement in the total. A net-worth number is only as useful as the assumptions behind it.</p>
          </section>

          <section aria-labelledby="debt-title">
            <p className="guide-section-number">09 · See both sides</p>
            <h2 id="debt-title">Debt repayment is progress too</h2>
            <p>Net-worth growth doesn&apos;t require your investments to soar.</p>
            <p>Suppose your assets don&apos;t change at all this month, but you reduce your mortgage by $1,500. Your liabilities have fallen by $1,500.</p>
            <p>Everything else being equal, <strong>your net worth increased by $1,500</strong>.</p>
            <p>That&apos;s easy to overlook because paying down debt doesn&apos;t always feel like accumulating an asset. It&apos;s one reason I like seeing assets and liabilities separately rather than only looking at the final number.</p>
          </section>

          <section aria-labelledby="contributions-title">
            <p className="guide-section-number">10 · Interpret investment movement</p>
            <h2 id="contributions-title">Contributions aren&apos;t the same as investment growth</h2>
            <p>Suppose an investment account starts the year at <strong>$100,000</strong>. During the year, you contribute <strong>$20,000</strong>. At year end, it&apos;s worth <strong>$126,000</strong>.</p>
            <p>The balance increased by $26,000, but it would be misleading to say the investments made $26,000. You added $20,000 yourself.</p>
            <p>At a simplified level: <strong>$126,000 ending value − $100,000 starting value − $20,000 contributions = $6,000</strong> of remaining change.</p>
            <p>Real investment-return calculations can become more complicated when contributions and withdrawals occur at different times. The basic lesson is simpler: <strong>money you added yourself isn&apos;t investment performance</strong>.</p>
            <p>The same works in reverse. A lower ending balance after a withdrawal doesn&apos;t necessarily mean your investments performed poorly; some money simply moved elsewhere.</p>
          </section>

          <section aria-labelledby="movements-title">
            <p className="guide-section-number">11 · Add context</p>
            <h2 id="movements-title">Track contributions and withdrawals separately</h2>
            <p>If you want to understand progress more clearly, distinguish balance change, contributions, withdrawals and the remaining investment movement.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative investment-account movement</caption>
                <thead><tr><th scope="col">Item</th><th scope="col">Amount</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Starting investment balance</th><td>$150,000</td></tr>
                  <tr><th scope="row">Contributions</th><td>+$10,000</td></tr>
                  <tr><th scope="row">Withdrawals</th><td>−$2,000</td></tr>
                  <tr><th scope="row">Ending balance</th><td><strong>$166,000</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p>The account increased by $16,000 overall. But $8,000 of net new money went into it. That tells a different story than simply saying, “My investments grew by $16,000.”</p>
            <NetWorthDriversCard />
          </section>

          <section aria-labelledby="periods-title">
            <p className="guide-section-number">12 · Change the lens</p>
            <h2 id="periods-title">Month-over-month and year-over-year tell different stories</h2>
            <div className="guide-choice-cards">
              <article><span>Month over month</span><h3>Recent movement</h3><p>What changed since last month? Did investments move, did you contribute, did debt fall or did you buy an asset?</p></article>
              <article><span>Year over year</span><h3>Longer direction</h3><p>A wider comparison can smooth some of the noise from markets, large purchases and infrequent valuation changes.</p></article>
            </div>
            <p>I like having both views. One shows what&apos;s happening <strong>recently</strong>. The other helps show the <strong>longer direction</strong>.</p>
          </section>

          <section aria-labelledby="decline-title">
            <p className="guide-section-number">13 · Keep the context</p>
            <h2 id="decline-title">Not every drop in net worth is a problem</h2>
            <p>Suppose your net worth drops by $15,000 this month. That sounds bad—but why did it happen?</p>
            <p>Maybe markets declined. Maybe you renovated your home, paid for a family vacation, bought a vehicle, moved money into something not currently included, or changed your home-value estimate.</p>
            <p>A declining number is worth understanding. It isn&apos;t automatically evidence that you made a bad financial decision.</p>
            <p>Sometimes money is there to be used. The purpose isn&apos;t to turn life into a competition to make one number increase every month. It&apos;s to understand the bigger financial picture.</p>
          </section>

          <section aria-labelledby="score-title">
            <p className="guide-section-number">14 · Measurement, not judgment</p>
            <h2 id="score-title">Don&apos;t use net worth as a score</h2>
            <p>It&apos;s tempting to treat net worth like a financial scoreboard: higher means winning, lower means losing. I don&apos;t think that&apos;s particularly useful.</p>
            <p>Two households with identical net worth can have completely different lives. One might own a paid-off home and have little invested. Another might rent and hold a large portfolio. One might be 30; another 60. Their families and priorities may be different.</p>
            <p>Net worth is a <strong>measurement, not a judgment</strong>.</p>
            <ul className="guide-question-list">
              <li>What changed?</li><li>Why did it change?</li><li>Are our assets generally growing?</li><li>Are our liabilities generally shrinking?</li><li>Are we moving toward the financial position we want?</li>
            </ul>
            <p>Those questions contain much more information than: <strong>is my number high enough?</strong></p>
          </section>

          <section aria-labelledby="spreadsheet-title">
            <p className="guide-section-number">15 · Try it yourself</p>
            <h2 id="spreadsheet-title">You can track net worth in a spreadsheet</h2>
            <p>Like cash-flow forecasting and transaction analysis, you don&apos;t need specialized software.</p>
            <p>Create one section for assets and another for liabilities. Record the date and calculate <strong>Total Assets − Total Liabilities = Net Worth</strong>.</p>
            <p>Add another snapshot next month. Over time, you can create a simple chart showing your net-worth history.</p>
            <p>If you want more detail, track each account separately and record contributions and withdrawals for investments so changes are easier to interpret.</p>
            <p>The guide to <SiteLink href="/guides/how-to-analyze-bank-transactions-csv">analyzing bank transactions from CSV</SiteLink> explains how a more detailed, high-frequency financial record can be organized without changing this slower snapshot approach.</p>
          </section>

          <section aria-labelledby="connection-title">
            <p className="guide-section-number">16 · Manual can be enough</p>
            <h2 id="connection-title">You don&apos;t need to connect your accounts</h2>
            <p>Net-worth tracking works particularly well with a manual or local-first approach.</p>
            <p>Unlike transactions, account values usually don&apos;t need to be imported by the hundreds or thousands. You may only have ten or fifteen meaningful balances to update.</p>
            <p>Once a month, check them and record the new values. No permanent bank connection is required.</p>
            <p>That means the numbers won&apos;t update automatically. If an investment changes tomorrow, your record won&apos;t know until you update it.</p>
            <p>For the way I use net worth, that&apos;s fine. I&apos;m not trying to watch it like a stock ticker. I&apos;m trying to understand the <strong>long-term direction of our finances</strong>.</p>
            <p>If you&apos;re weighing that trade-off, read <SiteLink href="/guides/do-personal-finance-apps-need-bank-access">whether personal finance apps need access to your bank account</SiteLink>.</p>
          </section>
        </div>

        <section className="guide-product-fit section-shell" aria-labelledby="capehelm-net-worth-title">
          <div className="guide-product-fit-copy">
            <p className="guide-section-number">17 · The product view</p>
            <h2 id="capehelm-net-worth-title">Where Capehelm fits</h2>
            <p>This is the same philosophy behind Capehelm&apos;s Net Worth view.</p>
            <p>I wanted somewhere to record financial accounts from different organizations without requiring those organizations to be connected to Capehelm.</p>
            <ul>
              <li><strong>Assets and liabilities</strong> stay visible together.</li>
              <li><strong>Account history</strong> shows how the overall picture changes.</li>
              <li><strong>Contributions and withdrawals</strong> add context to investment movement.</li>
              <li><strong>Loans</strong> keep debt repayment visible alongside asset growth.</li>
            </ul>
            <p>Because Capehelm is built around local Finance Documents, the information doesn&apos;t require a live connection to your financial institutions.</p>
            <p>The goal isn&apos;t to know your net worth to the penny every minute. It&apos;s to make the bigger picture easier to understand.</p>
          </div>
          <div>
            <ProductScreenshot
              asset="net-worth"
              alt="Capehelm Net Worth showing fictional assets, liabilities, account balances and changes over time."
              className="guide-product-screenshot"
              sizes="(max-width: 800px) calc(100vw - 32px), (max-width: 1160px) calc(100vw - 48px), 710px"
            />
            <p className="guide-caption">Capehelm Net Worth, shown with fictional demo data.</p>
          </div>
        </section>

        <div className="guide-prose guide-closing">
          <section aria-labelledby="cash-flow-title">
            <p className="guide-section-number">18 · Different time horizons</p>
            <h2 id="cash-flow-title">Net worth and cash flow answer different questions</h2>
            <p>It&apos;s important not to confuse having a high net worth with having plenty of available cash.</p>
            <p>Someone who owns a $700,000 home with a $200,000 mortgage has $500,000 of home equity. They could have substantial net worth while still having very little in chequing this week.</p>
            <p>Conversely, someone could have a large cash balance while carrying substantial debt.</p>
            <p>That&apos;s why personal finances make more sense across different time horizons. A <SiteLink href="/guides/budget-vs-cash-flow-forecast">budget and a cash-flow forecast</SiteLink> answer different planning questions, while the guide to <SiteLink href="/guides/how-to-forecast-personal-cash-flow-14-days">forecasting the next 14 days</SiteLink> focuses on near-term available cash.</p>
          </section>
        </div>

        <div className="guide-breakout section-shell">
          <FinancialTimeHorizonsStrip />
        </div>

        <div className="guide-prose guide-closing">
          <section aria-labelledby="takeaway-title">
            <p className="guide-section-number">19 · The takeaway</p>
            <h2 id="takeaway-title">The takeaway</h2>
            <p>Tracking your net worth doesn&apos;t require a complicated financial system. It doesn&apos;t require connecting every bank, investment account and loan to another service.</p>
            <p>Start with the meaningful things you own. Subtract the meaningful things you owe. Record the result. Then do it again later.</p>
            <p>Over time, stop focusing only on the number and start asking what changed, why it changed, how much came from saving or investing, how much came from debt repayment and how much came from changes in asset values.</p>
            <p>That&apos;s where net worth becomes useful.</p>
            <p>Not as a score. Not as something to check every morning.</p>
            <p className="guide-final-line">As a way to occasionally step back from day-to-day money and see the bigger picture.</p>
          </section>
        </div>

        <div className="section-shell">
          <GuideCta
            eyebrow="Capehelm Net Worth"
            title="Keep track of the bigger picture."
            body="Capehelm brings assets, liabilities, investment contributions and net-worth history together in a private, local-first personal finance app for Mac—without requiring you to connect your financial accounts."
            href="/features#progress"
            label="Explore Capehelm’s Net Worth tools"
          />
        </div>
      </article>
    </PageShell>
  );
}
