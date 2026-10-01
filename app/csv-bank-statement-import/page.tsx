import { LandingCta, RelatedGuides } from "../../components/LandingPageBlocks";
import { ProductScreenshot } from "../../components/ProductScreenshot";
import { ArrowIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

const title = "Import Bank Statement CSVs on Mac | Capehelm";
const description =
  "Import bank and card statement CSV files locally on your Mac, confirm column mapping, review transactions and Categories, and turn that history into useful financial context.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/csv-bank-statement-import",
});

export const dynamic = "force-static";

const importSteps = [
  {
    number: "01",
    title: "Export your statement",
    body: "Download a transaction CSV from your financial institution. The available date range, columns and export format are determined by that institution—not by Capehelm.",
  },
  {
    number: "02",
    title: "Select it on your Mac",
    body: "Choose the local file in Capehelm. Built-in workflows recognize currently supported formats; another usable layout can go through the configurable custom importer.",
  },
  {
    number: "03",
    title: "Confirm the mapping",
    body: "Review which columns represent the date, description or merchant, amount and account context. If the file is ambiguous, Capehelm asks you to confirm rather than pretending the detection is certain.",
  },
  {
    number: "04",
    title: "Review and categorize",
    body: "Preview the rows, resolve anything that needs attention, confirm Categories and keep reusable local merchant rules or a custom import profile for later statements.",
  },
  {
    number: "05",
    title: "Use the history",
    body: "Reviewed transactions feed Transactions, Trends, Budget actuals, Forecast Coverage and household reports—the places where a statement becomes useful financial context.",
  },
] as const;

const importQuestions = [
  {
    question: "Does Capehelm connect directly to my bank?",
    answer: "No. Capehelm does not ask for online-banking credentials or use a direct bank feed. You download a statement from the institution and choose the local file to import.",
  },
  {
    question: "Does Capehelm upload my CSV?",
    answer: "No. Capehelm processes imported statement content locally and does not send the CSV or its transactions to a Capehelm-hosted finance-data service.",
  },
  {
    question: "What if my bank uses a different format?",
    answer: "A usable CSV can often be configured by mapping its columns and statement conventions, then saving that profile locally. Capehelm does not promise universal compatibility or perfect automatic detection.",
  },
  {
    question: "What happens if I import the same statement twice?",
    answer: "Capehelm checks imported data for duplicate transaction fingerprints and reports duplicate or skipped rows. Review the import summary and post-import transactions whenever a statement overlaps an earlier import.",
  },
] as const;

export default function CsvBankStatementImportPage() {
  return (
    <PageShell>
      <article className="landing-page landing-import">
        <header className="landing-import-hero section-shell">
          <div>
            <p className="eyebrow"><span /> Local statement workflow</p>
            <h1>Turn Bank Statement CSVs Into a <em>Financial Picture</em></h1>
          </div>
          <div>
            <p>Capehelm turns statement files you already control into reviewed transactions, Categories and reusable local context. There is no automatic bank synchronization and no finance-data upload to a Capehelm service.</p>
            <div className="landing-hero-actions">
              <SiteLink className="button" href="#import-steps">Follow the five-step workflow <span aria-hidden="true">↓</span></SiteLink>
              <SiteLink className="text-link" href="/features#understand">See transaction features <ArrowIcon /></SiteLink>
            </div>
          </div>
        </header>

        <section className="landing-import-steps section-shell" id="import-steps" aria-labelledby="import-steps-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> From export to review</p>
            <h2 id="import-steps-title">A practical local import workflow.</h2>
            <p>Each stage gives you a clear decision point, especially when a financial institution’s CSV is arranged differently from a saved setup.</p>
          </div>
          <ol>
            {importSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="landing-import-proof section-shell">
          <div>
            <p className="eyebrow"><span /> What the import unlocks</p>
            <h2>A CSV is the source. Understanding is the outcome.</h2>
            <p>After review, Capehelm can group the imported history by Category and merchant so Trends shows where patterns are changing. The same transactions provide actual-spending context for Budget and evidence for Forecast Coverage.</p>
            <p>The screenshot shows the analysis created from fictional demonstration data—not a real household statement.</p>
            <SiteLink className="text-link" href="/cash-flow-forecast">See how imports support Forecast Coverage <ArrowIcon /></SiteLink>
          </div>
          <ProductScreenshot
            asset="trends"
            alt="Capehelm Trends showing fictional imported transaction history summarized by spending Categories and merchants after local review."
            sizes="(max-width: 900px) calc(100vw - 32px), 760px"
          />
        </section>

        <section className="landing-mapping section-shell" aria-labelledby="mapping-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> Configurable CSV mapping</p>
            <h2 id="mapping-title">When columns differ, confirm what they mean.</h2>
            <p>Capehelm’s custom importer analyzes a statement and suggests a setup, but keeps the important choices visible. Required information depends on how the statement represents money.</p>
          </div>
          <dl>
            <div><dt>Date</dt><dd>The transaction date column and the format used to read it.</dd></div>
            <div><dt>Description or merchant</dt><dd>The text that identifies what the transaction represents.</dd></div>
            <div><dt>Amount</dt><dd>One signed amount, separate debit and credit columns, or an amount directed by a transaction-type column.</dd></div>
            <div><dt>Account context</dt><dd>The account or source name used to keep imported history traceable.</dd></div>
          </dl>
          <p className="landing-accuracy-note">Other details—such as delimiter, number format, currency and rows to ignore—can also matter. If Capehelm has low confidence or the structure changed, the workflow asks for review before import.</p>
        </section>

        <section className="landing-import-faq section-shell" aria-labelledby="import-questions-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> Common import questions</p>
            <h2 id="import-questions-title">Know the boundaries before choosing a file.</h2>
          </div>
          <div>
            {importQuestions.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="landing-import-support">Need help with a format? Describe the statement structure and any non-sensitive error message to <a href="mailto:support@capehelm.com">support@capehelm.com</a>. Do not email the statement, Finance Document or screenshots containing private financial information.</p>
        </section>

        <RelatedGuides links={[
          { href: "/private-personal-finance", label: "Why local import matters", description: "Understand the privacy and control boundary around statement files." },
          { href: "/cash-flow-forecast", label: "Connect actuals to the plan", description: "Learn how Forecast Coverage reviews expected and imported activity." },
          { href: "/faq#csv-imports", label: "Read the import FAQ", description: "Find the concise answer about institutions, mapping and local storage." },
        ]} />

        <LandingCta
          eyebrow="Bring your own statements"
          title="Build useful history without handing over a banking password."
          body="Capehelm is available on the Mac App Store. Import the statement files you choose and keep the resulting financial picture in your local Finance Document."
          secondaryHref="/features#understand"
          secondaryLabel="Explore Transactions and Trends"
        />
      </article>
    </PageShell>
  );
}
