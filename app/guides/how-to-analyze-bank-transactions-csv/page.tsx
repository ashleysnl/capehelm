import {
  AnalysisQuestionsCard,
  CsvAnalysisProcessStrip,
  GuideBreadcrumbs,
  GuideCta,
  SpendingHierarchyGraphic,
  TransactionTransformation,
} from "../../../components/GuideBlocks";
import { PageShell, SiteLink } from "../../../components/SiteShell";
import { createPageMetadata } from "../../../config/pageMetadata";
import {
  createArticleStructuredData,
  serializeStructuredData,
} from "../../../config/structuredData";

const articlePath = "/guides/how-to-analyze-bank-transactions-csv";
const articleTitle = "How to Analyze Your Bank Transactions From a CSV File";
const articleDescription =
  "Learn how to analyze bank transactions from a CSV file, clean merchant names, categorize spending, identify recurring expenses, and avoid double-counting transfers.";
const datePublished = "2026-09-30";

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

const sampleTransactions = [
  ["Sep 2", "SOBEYS #123", "−$146.32"],
  ["Sep 3", "PAYROLL DEPOSIT", "+$3,850.00"],
  ["Sep 4", "SHELL 12345", "−$72.18"],
  ["Sep 6", "NETFLIX.COM", "−$18.99"],
  ["Sep 7", "MCDONALDS 1234", "−$24.16"],
] as const;

const categorizedMerchants = [
  ["Sobeys", "Groceries"],
  ["Costco", "Groceries"],
  ["McDonald’s", "Fast Food"],
  ["Netflix", "Streaming"],
  ["Shell", "Fuel"],
  ["Newfoundland Power", "Electricity"],
] as const;

const categorySpending = [
  ["Housing", "$2,500"],
  ["Groceries", "$1,150"],
  ["Restaurants", "$620"],
  ["Transportation", "$540"],
  ["Shopping", "$470"],
  ["Entertainment", "$260"],
] as const;

const groceryTrend = [
  ["May", "$920"],
  ["June", "$980"],
  ["July", "$1,040"],
  ["August", "$1,110"],
  ["September", "$1,180"],
] as const;

export default function AnalyzeBankTransactionsCsvGuide() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(articleStructuredData) }}
      />
      <article className="guide-article">
        <header className="guide-hero section-shell">
          <GuideBreadcrumbs path="/guides/how-to-analyze-bank-transactions-csv" current="Analyze bank transactions from CSV" />
          <p className="eyebrow"><span /> CSV · Transaction analysis</p>
          <h1>How to Analyze Your Bank Transactions From a <em>CSV File</em></h1>
          <p className="guide-deck">Your bank statement already contains a lot of useful information. A simple CSV export can help you understand where your money went, identify recurring spending and build a better picture of your finances—without connecting another service to your bank account.</p>
          <div className="guide-byline">
            <span>By Ashley Skinner</span>
            <time dateTime={datePublished}>September 30, 2026</time>
          </div>
          <CsvAnalysisProcessStrip />
        </header>

        <div className="guide-prose">
          <p className="guide-lede">Most of us generate a surprisingly detailed financial record without thinking much about it.</p>
          <div className="guide-scenario">
            <ul>
              <li>Every grocery run</li>
              <li>Every restaurant visit</li>
              <li>Every paycheque</li>
              <li>Every subscription</li>
              <li>Every utility payment</li>
              <li>Every online purchase</li>
            </ul>
          </div>
          <p>They&apos;re all sitting in your bank and credit-card transaction histories.</p>
          <p>The problem isn&apos;t usually a lack of data. It&apos;s turning that data into something useful.</p>
          <p>One relatively simple way to do that is to export your transactions as a <strong>CSV file</strong> and analyze them yourself.</p>
          <p>You don&apos;t need to be a programmer or data analyst to do it.</p>
          <p>And once the transactions are organized properly, you can answer some surprisingly useful questions about your money.</p>
          <p>If you&apos;re deciding whether manual exports suit you, the guide to <SiteLink href="/guides/do-personal-finance-apps-need-bank-access">personal finance apps and bank access</SiteLink> explains the broader convenience-and-control trade-off.</p>

          <section aria-labelledby="what-is-csv-title">
            <p className="guide-section-number">01 · The source</p>
            <h2 id="what-is-csv-title">What is a CSV file?</h2>
            <p>CSV stands for <strong>comma-separated values</strong>.</p>
            <p>That sounds technical, but a CSV is essentially a simple table stored in a format that many different applications can read.</p>
            <p>A bank transaction export might look something like this:</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Example bank transaction CSV</caption>
                <thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Amount</th></tr></thead>
                <tbody>{sampleTransactions.map(([date, description, amount]) => <tr key={`${date}-${description}`}><th scope="row">{date}</th><td>{description}</td><td>{amount}</td></tr>)}</tbody>
              </table>
            </div>
            <p>You can usually open a CSV with spreadsheet software such as Excel, Numbers or LibreOffice Calc.</p>
            <p>The important thing isn&apos;t the file format itself. It&apos;s what the file contains:</p>
            <p className="guide-pullquote">a history of money moving through your accounts.</p>
          </section>

          <section aria-labelledby="why-analyze-title">
            <p className="guide-section-number">02 · From records to patterns</p>
            <h2 id="why-analyze-title">Why analyze transactions instead of just looking at your bank statement?</h2>
            <p>A bank statement is very good at telling you <strong>what happened</strong>.</p>
            <p>But thousands of individual transactions aren&apos;t particularly good at showing you <strong>patterns</strong>.</p>
            <p>Suppose your statement contains four grocery trips, six restaurant purchases, three fuel purchases, a streaming subscription, your mortgage, an electricity payment, several Amazon purchases and two paycheques.</p>
            <p>Each transaction makes sense individually. But zoom out and different questions become possible.</p>
            <ul className="guide-question-list">
              <li>How much did I spend on groceries this month?</li>
              <li>How much are restaurants costing us over a year?</li>
              <li>Which merchants get the most money from us?</li>
              <li>What expenses repeat every month?</li>
              <li>Is a category getting more expensive?</li>
              <li>What were our largest purchases?</li>
            </ul>
            <p>That&apos;s the difference between having transaction data and actually <strong>using it</strong>.</p>
          </section>

          <section aria-labelledby="export-title">
            <p className="guide-section-number">03 · Step 1</p>
            <h2 id="export-title">Export your transactions</h2>
            <p>Many banks and credit-card providers allow customers to download transaction history from online banking.</p>
            <p>The exact process varies, but you&apos;ll typically choose an account, a date range, a download or export option and a file format.</p>
            <p>Look for <strong>CSV</strong> if it&apos;s available. Some institutions may call it a spreadsheet, comma-delimited file, transaction export or downloaded transactions.</p>
            <p>If you&apos;re analyzing several accounts, export each one separately:</p>
            <ul className="guide-chip-list"><li>Chequing.csv</li><li>Visa.csv</li><li>Mastercard.csv</li></ul>
            <p>Keeping the original exports separate initially makes it easier to understand where each transaction came from.</p>
            <p>Capehelm&apos;s <SiteLink href="/csv-bank-statement-import">bank-statement CSV guide</SiteLink> explains the practical import workflow used by the app.</p>
          </section>

          <section aria-labelledby="keep-original-title">
            <p className="guide-section-number">04 · Step 2</p>
            <h2 id="keep-original-title">Keep the original files</h2>
            <p>Before changing anything, keep a copy of the original CSV files exactly as they were downloaded.</p>
            <p>You may eventually rename merchants, add categories, remove unnecessary columns, combine accounts, correct formatting or filter transactions.</p>
            <p>If something goes wrong, having the untouched source file means you can always start again.</p>
            <p>Think of the original export as your <strong>source data</strong>.</p>
            <p className="guide-question">Work from a copy.</p>
          </section>

          <section aria-labelledby="columns-title">
            <p className="guide-section-number">05 · Step 3</p>
            <h2 id="columns-title">Understand the columns</h2>
            <p>Banks don&apos;t all export transactions the same way.</p>
            <div className="guide-three-views">
              <article><span>One bank</span><h3>Date · Description · Debit · Credit</h3></article>
              <article><span>Another bank</span><h3>Transaction Date · Merchant · Amount</h3></article>
              <article><span>Another export</span><h3>Date · Reference · Description · Withdrawal · Deposit · Balance</h3></article>
            </div>
            <p>The labels don&apos;t matter as much as identifying a few basic pieces of information.</p>
            <dl className="guide-engineering-questions">
              <div><dt>Date</dt><dd>When did the transaction happen?</dd></div>
              <div><dt>Description</dt><dd>Who was paid—or where did the money come from?</dd></div>
              <div><dt>Amount</dt><dd>How much money moved?</dd></div>
              <div><dt>Account</dt><dd>Which account did the transaction belong to?</dd></div>
            </dl>
            <p>The account may not exist as a column in the original file. If you&apos;re combining exports, add one yourself so transactions can live together without losing their origin.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Combined transactions with an account column</caption>
                <thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Account</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Sep 2</th><td>SOBEYS #123</td><td>−$146.32</td><td>Visa</td></tr>
                  <tr><th scope="row">Sep 3</th><td>PAYROLL</td><td>+$3,850.00</td><td>Chequing</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="standardize-title">
            <p className="guide-section-number">06 · Step 4</p>
            <h2 id="standardize-title">Standardize the data</h2>
            <p>Before analyzing anything, make sure similar information is represented consistently.</p>
            <ul className="guide-chip-list"><li>Dates should be dates</li><li>Amounts should be numbers</li><li>Expenses should use one sign convention</li><li>Account names should be consistent</li></ul>
            <p>This sounds trivial until you combine exports from multiple institutions.</p>
            <p>One bank might represent a $100 purchase as <strong>−100.00</strong>. Another might put <strong>100.00</strong> in a separate Debit column.</p>
            <p>Neither is wrong. But if you combine them without accounting for that difference, your analysis can become meaningless very quickly.</p>
            <p className="guide-question">Clean the structure before analyzing the numbers.</p>
          </section>

          <section aria-labelledby="merchant-title">
            <p className="guide-section-number">07 · Step 5</p>
            <h2 id="merchant-title">Clean up merchant names</h2>
            <p>Transaction descriptions can be messy.</p>
            <p>You might see <strong>MCDONALDS #1234 ST JOHNS NL</strong>, <strong>MCDONALDS 5678</strong> and <strong>MCDONALD&apos;S MOBILE</strong>.</p>
            <p>To you, they&apos;re obviously the same merchant. To a spreadsheet, they&apos;re three different descriptions.</p>
            <p>The same problem appears with Amazon descriptors, gas-station numbers, payment processors and recurring services whose descriptions change slightly.</p>
            <p>This makes merchant normalization useful.</p>
          </section>
        </div>

        <div className="guide-breakout section-shell">
          <TransactionTransformation />
        </div>

        <div className="guide-prose guide-prose-continued">
          <p>Importantly, I wouldn&apos;t delete the original description. Keep both.</p>
          <p>The original description preserves what the bank actually reported. The cleaned merchant gives you something useful to analyze.</p>

          <section aria-labelledby="categorize-title">
            <p className="guide-section-number">08 · Step 6</p>
            <h2 id="categorize-title">Categorize your spending</h2>
            <p>Merchant names tell you <strong>where</strong> you spent money. Categories tell you <strong>what kind of spending it was</strong>.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Example merchant categories</caption>
                <thead><tr><th scope="col">Merchant</th><th scope="col">Category</th></tr></thead>
                <tbody>{categorizedMerchants.map(([merchant, category]) => <tr key={merchant}><th scope="row">{merchant}</th><td>{category}</td></tr>)}</tbody>
              </table>
            </div>
            <p>You can make categories as detailed as you want. But there&apos;s a trap here.</p>
            <p className="guide-question">More categories don&apos;t automatically mean better information.</p>
            <p>If you create 75 categories and constantly debate where every $12 transaction belongs, your financial system becomes work.</p>
            <p>Start with categories that help you make decisions: housing, groceries, restaurants, transportation, utilities, subscriptions, entertainment, travel or shopping—whatever makes sense for your household.</p>
            <p>The goal isn&apos;t perfect accounting. It&apos;s useful understanding.</p>
          </section>

          <section aria-labelledby="transfers-title">
            <p className="guide-section-number">09 · Step 7</p>
            <h2 id="transfers-title">Be careful with transfers and credit-card payments</h2>
            <p>This is one of the easiest ways to accidentally overstate your spending.</p>
            <div className="guide-scenario">
              <p>You buy <strong>$1,000</strong> worth of things on a credit card. Those purchases appear in the card history.</p>
              <p>Then you pay the <strong>$1,000</strong> card bill from chequing.</p>
              <p>If both are treated as expenses, the analysis reports <strong>$2,000</strong> of spending.</p>
            </div>
            <p>You didn&apos;t spend $2,000. The card payment was mostly moving money from one account to settle spending already recorded elsewhere.</p>
            <p>Transfers between your own accounts can create the same problem. Moving $2,000 from chequing to savings isn&apos;t normally $2,000 of household spending. It&apos;s still your money.</p>
            <p>Before trusting your totals, identify credit-card payments, transfers, savings transfers, investment contributions, loan movements where appropriate and reimbursements.</p>
            <p>How they should be treated depends on what you&apos;re trying to measure.</p>
            <p className="guide-question">Recognize them before blindly adding everything together.</p>
          </section>

          <section aria-labelledby="five-questions-title">
            <p className="guide-section-number">10 · Step 8</p>
            <h2 id="five-questions-title">Ask five useful questions</h2>
            <p>Once the data is reasonably clean, this is where things get interesting.</p>
            <p>You don&apos;t need sophisticated financial models. Start with five questions.</p>
            <AnalysisQuestionsCard />

            <h3>1. Where did most of my money go?</h3>
            <p>Group your expenses by category.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative spending by category</caption>
                <thead><tr><th scope="col">Category</th><th scope="col">Spending</th></tr></thead>
                <tbody>{categorySpending.map(([category, amount]) => <tr key={category}><th scope="row">{category}</th><td>{amount}</td></tr>)}</tbody>
              </table>
            </div>
            <p>This gives you a more useful picture than hundreds of transactions. Don&apos;t immediately assume the largest category is a problem; a mortgage will probably be larger than streaming subscriptions.</p>
            <p>The useful question is: <strong>does this spending roughly match what I thought we were doing?</strong></p>

            <h3>2. Which merchants appear most often?</h3>
            <p>You may find that you visited one coffee shop 18 times, ordered from the same restaurant seven times or made 14 Amazon purchases.</p>
            <p>Frequency tells a different story than total spending. A $400 purchase gets your attention immediately. Twenty $20 purchases can disappear into the background. Both equal $400.</p>

            <h3>3. What spending repeats every month?</h3>
            <p>Recurring transactions are particularly interesting because small amounts become large amounts over time.</p>
            <p><strong>$20 × 12 = $240 per year.</strong></p>
            <p>Look for merchants that appear at roughly the same interval and for roughly the same amount: streaming, cloud storage, software, memberships, insurance, childcare, telecommunications, donations or app subscriptions.</p>
            <p>Not every subscription needs to be cancelled. Ask: <strong>am I still getting enough value from this to keep paying for it?</strong></p>

            <h3>4. Which expenses are growing?</h3>
            <p>One month can be misleading. Compare several months.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Illustrative grocery trend</caption>
                <thead><tr><th scope="col">Month</th><th scope="col">Groceries</th></tr></thead>
                <tbody>{groceryTrend.map(([month, amount]) => <tr key={month}><th scope="row">{month}</th><td>{amount}</td></tr>)}</tbody>
              </table>
            </div>
            <p>Now you have a trend. It still doesn&apos;t tell you <strong>why</strong> spending increased.</p>
            <p>Maybe prices increased. Maybe you hosted family. Maybe you ate out less and bought more groceries. Maybe your household changed.</p>
            <p>Data can show you that something happened. <strong>It doesn&apos;t automatically explain the cause.</strong></p>

            <h3>5. Which transactions deserve another look?</h3>
            <p>Sort expenses from largest to smallest and look for unusually large purchases, unfamiliar merchants, duplicate-looking transactions, unexpected fees, forgotten subscriptions, incorrect categories or unusual changes from normal behaviour.</p>
            <p>This isn&apos;t just about mistakes. A $2,000 home repair may explain why one month feels different without implying that normal household spending has changed permanently.</p>
            <p>Context matters.</p>
          </section>

          <section aria-labelledby="hierarchy-title">
            <p className="guide-section-number">11 · Levels of detail</p>
            <h2 id="hierarchy-title">Look at groups, categories and merchants differently</h2>
            <p>One thing I&apos;ve found useful is looking at spending at several levels.</p>
          </section>
        </div>

        <div className="guide-breakout section-shell">
          <SpendingHierarchyGraphic />
        </div>

        <div className="guide-prose guide-prose-continued">
          <p>Each level answers a different question.</p>
          <dl className="guide-engineering-questions">
            <div><dt>Group</dt><dd>How much are we spending on broad areas of our lives?</dd></div>
            <div><dt>Category</dt><dd>What type of expense is driving that spending?</dd></div>
            <div><dt>Merchant</dt><dd>Where is the money actually going?</dd></div>
          </dl>
          <p>If grocery spending increased, the merchant view might show whether that&apos;s happening across several stores or primarily at one.</p>
          <p>If discretionary spending increased, categories might show whether restaurants, shopping or entertainment caused it.</p>

          <section aria-labelledby="unusual-title">
            <p className="guide-section-number">12 · Keep the context</p>
            <h2 id="unusual-title">Don&apos;t confuse unusual spending with bad spending</h2>
            <p>Financial analysis can become judgmental very quickly.</p>
            <p>Restaurant spending went up. Travel spending increased. Shopping was unusually high.</p>
            <p>That doesn&apos;t automatically mean something went wrong.</p>
            <p>Maybe you went on vacation, replaced a broken appliance, celebrated an anniversary or simply experienced December.</p>
            <p>The purpose isn&apos;t to make every category as small as possible. It&apos;s to understand <strong>why the numbers look the way they do</strong>.</p>
            <p>Sometimes the correct conclusion is:</p>
            <p className="guide-question">Yes, we spent more—and we&apos;d make the same decision again.</p>
            <p>That&apos;s still useful information.</p>
          </section>

          <section aria-labelledby="plan-title">
            <p className="guide-section-number">13 · Actuals and the plan</p>
            <h2 id="plan-title">Compare your spending with your plan</h2>
            <p>Once you understand what actually happened, you can compare it with what you intended to happen.</p>
            <p>That&apos;s where transaction analysis and budgeting meet.</p>
            <div className="guide-path-pair">
              <div><span>Planned</span><p>Restaurants: $400</p></div>
              <div><span>Actual</span><p>Restaurants: $620</p></div>
            </div>
            <p>The interesting number isn&apos;t simply the $220 difference. Ask why.</p>
            <p>Did you underestimate normal spending? Was this an unusual month? Has the category been over budget for six months? Would you rather reduce the spending—or acknowledge that $400 was never realistic?</p>
            <p>A budget becomes more useful when it&apos;s informed by actual transaction history. The guide to <SiteLink href="/guides/budget-vs-cash-flow-forecast">budgets and cash-flow forecasts</SiteLink> explains the different questions each planning view answers.</p>
          </section>

          <section aria-labelledby="look-forward-title">
            <p className="guide-section-number">14 · From past to future</p>
            <h2 id="look-forward-title">Historical transactions can help you look forward</h2>
            <p>Transaction analysis is mostly about understanding the past. But the past can also help you think about what&apos;s coming.</p>
            <p>If the same $90 internet payment appears every month, there&apos;s a good chance another one is coming. If your mortgage follows a predictable schedule, that&apos;s useful for cash-flow forecasting. If average grocery spending is $1,100, budgeting $500 probably needs an explanation.</p>
            <p>This creates a useful cycle:</p>
            <p className="guide-cycle" aria-label="Transactions, then trends, then budget, then forecast">
              <span>Transactions</span><i aria-hidden="true">→</i><span>Trends</span><i aria-hidden="true">→</i><span>Budget</span><i aria-hidden="true">→</i><span>Forecast</span>
            </p>
            <p>Historical data tells you what happened. Patterns help you build a realistic plan. Known repeating expenses help you look ahead. Then new transactions arrive and the cycle begins again.</p>
            <p>To build that near-term view yourself, follow the guide to <SiteLink href="/guides/how-to-forecast-personal-cash-flow-14-days">forecasting your personal cash flow for the next 14 days</SiteLink>.</p>
          </section>

          <section aria-labelledby="spreadsheet-title">
            <p className="guide-section-number">15 · Try it yourself</p>
            <h2 id="spreadsheet-title">You can do all of this in a spreadsheet</h2>
            <p>You don&apos;t need specialized software.</p>
            <p>Once you&apos;ve combined and cleaned your transactions, filters, formulas and pivot tables can help you:</p>
            <ul className="guide-chip-list"><li>total spending by category</li><li>count transactions by merchant</li><li>compare months</li><li>find large transactions</li><li>identify recurring descriptions</li><li>build charts</li><li>compare actual spending with a budget</li></ul>
            <p>If you&apos;re comfortable with spreadsheets, experiment with your own transaction data. There&apos;s something useful about seeing the raw information before software abstracts it away.</p>
          </section>
        </div>

        <section className="guide-product-fit guide-product-fit-text section-shell" aria-labelledby="capehelm-fit-title">
          <div className="guide-product-fit-copy">
            <p className="guide-section-number">16 · The product view</p>
            <h2 id="capehelm-fit-title">Where Capehelm fits</h2>
            <p>This process is a large part of why I built Capehelm.</p>
            <p>I wanted the usefulness of transaction analysis without repeatedly rebuilding spreadsheets.</p>
            <p>Capehelm lets you import transaction data from CSV files into your own Finance Document. From there, the goal is to progressively turn raw descriptions into something understandable.</p>
          </div>
          <dl className="guide-product-questions">
            <div><dt>Transactions</dt><dd>Preserve the underlying activity.</dd></div>
            <div><dt>Merchants and categories</dt><dd>Add structure without replacing the source description.</dd></div>
            <div><dt>Trends</dt><dd>Show where money went and how spending changes.</dd></div>
            <div><dt>Budget</dt><dd>Compare actual behaviour with the plan.</dd></div>
            <div><dt>Forecast</dt><dd>Look at what&apos;s coming next.</dd></div>
          </dl>
          <div className="guide-product-fit-copy guide-product-fit-note">
            <p>The philosophy is simple: <strong>start with the financial information you already have and make it easier to understand.</strong></p>
            <p>Capehelm doesn&apos;t need to connect to your bank account to do that. You decide when to export your data and when to bring it into the application.</p>
            <p>Read more about <SiteLink href="/guides/do-personal-finance-apps-need-bank-access">Capehelm&apos;s local-first trade-off</SiteLink> or explore the <SiteLink href="/csv-bank-statement-import">CSV import workflow</SiteLink>.</p>
          </div>
        </section>

        <div className="guide-prose guide-closing">
          <section aria-labelledby="sensitive-title">
            <p className="guide-section-number">17 · Handle exports thoughtfully</p>
            <h2 id="sensitive-title">A note about sensitive financial data</h2>
            <p>CSV files containing bank or credit-card transactions should be treated as sensitive information.</p>
            <p>They may contain details about where you shop, your income, recurring bills, account activity, payment patterns and parts of your financial life you&apos;d rather keep private.</p>
            <p>Be thoughtful about where those files are stored and shared. Avoid casually emailing transaction exports. Use appropriate security on your computer. Once you&apos;ve finished with temporary exports, consider whether you still need the extra copies.</p>
            <p>The fact that CSV files are simple doesn&apos;t mean the information inside them isn&apos;t sensitive. Capehelm&apos;s <SiteLink href="/privacy">Privacy Policy</SiteLink> describes the app&apos;s actual data boundaries.</p>
          </section>

          <section aria-labelledby="takeaway-title">
            <p className="guide-section-number">18 · The takeaway</p>
            <h2 id="takeaway-title">The takeaway</h2>
            <p>Your bank transactions are more than a list of purchases. Together, they tell a story about how money actually moves through your household.</p>
            <p>Exporting that information to a CSV lets you step back and ask better questions.</p>
            <ul className="guide-question-list">
              <li>Where did the money go?</li>
              <li>Which merchants keep appearing?</li>
              <li>What repeats every month?</li>
              <li>What&apos;s getting more expensive?</li>
              <li>What deserves another look?</li>
            </ul>
            <p>You don&apos;t need to obsess over every transaction, create dozens of categories or have perfect data.</p>
            <p>You need enough structure to turn thousands of individual transactions into patterns you can understand.</p>
            <p className="guide-final-line">Once you understand what happened, you can make a better plan for what happens next.</p>
          </section>
        </div>

        <div className="section-shell">
          <GuideCta
            eyebrow="Capehelm · CSV import"
            title="Turn transactions into something useful."
            body="Capehelm imports your transaction data from CSV files and helps turn it into spending trends, budgets and a clearer picture of your finances—all without requiring a connection to your bank account."
            href="/csv-bank-statement-import"
            label="Explore how Capehelm works"
          />
        </div>
      </article>
    </PageShell>
  );
}
