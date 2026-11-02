import { GuideBreadcrumbs, GuideCta } from "../../../components/GuideBlocks";
import { PageShell, SiteLink } from "../../../components/SiteShell";
import { createPageMetadata } from "../../../config/pageMetadata";
import { createArticleStructuredData, serializeStructuredData } from "../../../config/structuredData";

const articlePath = "/guides/share-household-finances-without-bank-passwords";
const articleTitle = "How to Share a Household Money Picture Without Sharing Bank Passwords";
const articleDescription = "Build a useful shared view of household bills, spending and near-term cash flow without exchanging online-banking passwords or combining every account.";
const datePublished = "2026-11-02";

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

export default function ShareHouseholdFinancesGuide() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(articleStructuredData) }} />
      <article className="guide-article">
        <header className="guide-hero section-shell">
          <GuideBreadcrumbs path={articlePath} current="Share a household money picture safely" />
          <p className="eyebrow"><span /> Household planning · Privacy</p>
          <h1>How to Share a Household Money Picture <em>Without Sharing Bank Passwords</em></h1>
          <p className="guide-deck">A household can make decisions from the same set of useful numbers while each person keeps control of their own banking access.</p>
          <div className="guide-byline"><span>By Ashley Skinner</span><time dateTime={datePublished}>November 2, 2026</time></div>
        </header>

        <div className="guide-prose">
          <p className="guide-lede">Talking about household money does not require one person to log in to another person&apos;s bank account.</p>
          <p>For Canada&apos;s 2026 Financial Literacy Month, the Financial Consumer Agency of Canada is encouraging simple, practical conversations under its <a href="https://www.canada.ca/en/financial-consumer-agency/news/2026/10/financial-literacy-month-2026-encourages-canadians-to-talk-money-and-build-financial-confidence.html">“Talk Money” theme</a>. A useful conversation needs enough shared information to make a decision. It does not need every transaction, every account or another person&apos;s credentials.</p>
          <p>The practical goal is a dated household snapshot: what is already committed, what changed, what may happen before the next income arrives and what one action comes next.</p>

          <section aria-labelledby="boundary-title">
            <p className="guide-section-number">01 · Set the boundary</p>
            <h2 id="boundary-title">Agree on the household question before collecting data</h2>
            <p>Start with a decision that belongs to the household. Examples include confirming that shared bills are covered until payday, reviewing last month&apos;s grocery spending or deciding how much to transfer toward a shared goal. A specific question shows which information is relevant.</p>
            <p>Decide which accounts and obligations are in scope, who will prepare the view and the date the numbers represent. If a personal account pays only one shared bill, the household view may need that bill&apos;s amount and due date rather than the account&apos;s full history.</p>
            <p>Participation and the scope of disclosure should be voluntary. A shared plan can include separate accounts, a household-only joint account or fully joint finances. The <a href="https://www.canada.ca/en/financial-consumer-agency/services/living-as-couple.html">FCAC guide to managing money as a couple</a> describes all three approaches and notes that transfer frequency, contribution amounts and a possible loss of income still need to be discussed.</p>
          </section>

          <section aria-labelledby="password-title">
            <p className="guide-section-number">02 · Keep access separate from visibility</p>
            <h2 id="password-title">Share the financial picture, not online-banking credentials</h2>
            <p>FCAC&apos;s <a href="https://www.canada.ca/en/financial-consumer-agency/services/banking/online-banking.html">online-banking guidance</a> says not to give usernames, passwords or PINs to anyone, including family members. It also warns that giving banking information to a spouse, partner, family member or friend may affect protection against unauthorized transactions. Check the electronic-access agreement that applies to your account.</p>
            <p>If two people need transaction authority, use an arrangement the financial institution formally supports. A <a href="https://www.canada.ca/en/financial-consumer-agency/services/banking/bank-accounts/joint-bank-account.html">joint account</a> gives its account holders access and responsibility for transactions; it is a legal and operational choice, not a substitute for passing around one person&apos;s login.</p>
            <p>Visibility can be narrower than access. A person can provide a bill amount, a spending total, a confirmed transfer or a report without handing over the ability to move money. Use the least detailed view that still answers the household question.</p>
          </section>

          <section aria-labelledby="snapshot-title">
            <p className="guide-section-number">03 · Build one dated snapshot</p>
            <h2 id="snapshot-title">Bring six facts to the conversation</h2>
            <p>A useful household view should say when it was prepared and which accounts or people it covers. The following fictional example uses Canadian dollars and a 14-day planning window. It is a format, not a recommended spending level or cash buffer.</p>
            <div className="guide-budget-table-wrap">
              <table className="guide-budget-table">
                <caption>Fictional household snapshot prepared November 2, 2026</caption>
                <thead><tr><th scope="col">Fact</th><th scope="col">Example</th><th scope="col">Why it helps</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Cash available for shared costs</th><td>$3,250</td><td>Sets the starting point without listing account credentials.</td></tr>
                  <tr><th scope="row">Committed outflows through November 16</th><td>$2,310</td><td>Includes dated housing, utilities, card payments and other agreed obligations.</td></tr>
                  <tr><th scope="row">Confirmed income through November 16</th><td>$2,400</td><td>Separates expected cash from uncertain income.</td></tr>
                  <tr><th scope="row">Lowest projected balance</th><td>$720 on November 9</td><td>Shows the tightest point before the ending balance.</td></tr>
                  <tr><th scope="row">October shared spending</th><td>$3,860 versus a $3,650 plan</td><td>Creates a review question without turning one purchase into the whole story.</td></tr>
                  <tr><th scope="row">Next action</th><td>Confirm the $185 utility estimate by November 5</td><td>Names one owner, task and date.</td></tr>
                </tbody>
              </table>
            </div>
            <p>Keep estimates visibly labelled. A pending reimbursement, unconfirmed work shift or expected refund is different from cash already available. If the review covers separate accounts, document which person or account will make each shared payment so the same obligation is not counted twice.</p>
          </section>

          <section aria-labelledby="records-title">
            <p className="guide-section-number">04 · Choose the right level of source detail</p>
            <h2 id="records-title">Totals may be enough; raw statements often reveal much more</h2>
            <p>For a near-term bill check, each person may only need to provide upcoming shared payments, confirmed income available to the household and agreed transfers. For a spending review, category or merchant totals may be useful. A full statement or CSV can expose payees, locations, income and unrelated personal transactions.</p>
            <p>If the household agrees to work from transaction exports, each account holder should obtain their own files and decide how they are handled. Record an “as of” date, protect the source files and remove temporary copies when they are no longer needed. Do not put passwords, PINs, full account numbers or security answers in the shared worksheet or report.</p>
            <p>When combining records, identify transfers between the household&apos;s own accounts. The transfer may move cash to the account that pays the rent, but it is not new household income and should not inflate spending when the receiving account later pays the bill. The <SiteLink href="/guides/how-to-analyze-bank-transactions-csv">CSV transaction-analysis guide</SiteLink> explains how to preserve source descriptions and avoid common classification mistakes.</p>
          </section>

          <section aria-labelledby="check-in-title">
            <p className="guide-section-number">05 · Use the snapshot for a short check-in</p>
            <h2 id="check-in-title">Review facts, make one decision and record the next step</h2>
            <ol>
              <li><strong>Confirm the boundary.</strong> State the period, accounts and shared obligations included.</li>
              <li><strong>Review what changed.</strong> Note a different bill, income date, category total or card payment.</li>
              <li><strong>Look forward.</strong> Check the dated commitments and the lowest projected balance before the next confirmed income.</li>
              <li><strong>Choose a response.</strong> Update an estimate, schedule an agreed transfer, revise a flexible amount or seek more information.</li>
              <li><strong>Assign one action.</strong> Write down who will do it, by when and when the household will review again.</li>
            </ol>
            <p>Keep individual transactions in context. A category that is above plan can prompt a question; it does not explain the cause on its own. The aim is an accurate next decision, not a score for either person.</p>
          </section>

          <section aria-labelledby="capehelm-title">
            <p className="guide-section-number">06 · Where Capehelm fits</p>
            <h2 id="capehelm-title">Create the review on your Mac, then share the output you choose</h2>
            <p>Capehelm&apos;s current Mac app can import selected statement CSVs into a local Finance Document, review transactions and categories, compare actual spending with a budget and project checking balances over the next 14 days. Its <SiteLink href="/features#household">Report Builder</SiteLink> creates a Weekly Family Plan, Weekly Spending Review, Weekly Money Check-In or Month-End Money Review as a PDF.</p>
            <p>A PDF can give another household member a consistent review without giving them banking access or the source CSV. It can still contain sensitive financial information, so choose what enters the Finance Document, check the report before sharing and protect the output. Capehelm does not make the underlying account joint, grant permission to transact or keep a manual import continuously current.</p>
            <p>For the planning method, see <SiteLink href="/guides/how-to-forecast-personal-cash-flow-14-days">how to build a 14-day cash-flow forecast</SiteLink>. For the product&apos;s storage and network boundaries, read <SiteLink href="/private-personal-finance">what local-first means in Capehelm</SiteLink>.</p>
          </section>

          <aside><strong>A reusable household prompt</strong><p>“Here is the shared picture as of this date. What changed, what must be paid before the next confirmed income, and what one action should we record?”</p></aside>
          <aside><strong>About this guide</strong><p>Educational information, not personalized financial, legal, tax, security or relationship advice. Sources checked November 2, 2026. Account terms, ownership rules and household circumstances differ. Confirm access and liability questions with the relevant financial institution or an appropriate qualified professional.</p></aside>

          <GuideCta
            eyebrow="Capehelm Reports"
            title="Turn the numbers into a focused household review."
            body="Build a weekly or month-end PDF check-in from the Capehelm workspace on your Mac, and choose how the output is stored or shared."
            href="/features#household"
            label="Explore Report Builder"
          />
        </div>
      </article>
    </PageShell>
  );
}
