import { LandingCta, RelatedGuides } from "../../components/LandingPageBlocks";
import { ProductScreenshot } from "../../components/ProductScreenshot";
import { ArrowIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

const title = "Personal Finance Software Built for Mac | Capehelm";
const description =
  "Explore Capehelm, a local-first personal finance app for macOS that connects transactions, budgets, 14-day forecasting, trends, net worth and retirement in one Finance Document.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/personal-finance-for-mac",
});

export const dynamic = "force-static";

const documentSteps = [
  ["01", "Create or open", "Choose the Finance Document that will hold your financial workspace."],
  ["02", "Import statements", "Bring in the local CSV files you choose—without connecting Capehelm to your bank."],
  ["03", "Review and organize", "Confirm transactions and Categories, then keep reusable merchant rules with the document."],
  ["04", "Build the picture", "Use that reviewed history for budgeting, Forecast context, Trends and household reports."],
] as const;

export default function PersonalFinanceForMacPage() {
  return (
    <PageShell>
      <article className="landing-page landing-personal">
        <header className="landing-hero section-shell">
          <div className="landing-hero-copy">
            <p className="eyebrow"><span /> A serious finance workspace for macOS</p>
            <h1>Personal Finance Software <em>Built for Mac</em></h1>
            <p>Capehelm brings day-to-day spending, monthly planning, short-term cash flow and long-term financial context into a native Mac application. Your work begins with a Finance Document you control—not a browser account holding your financial life.</p>
            <div className="landing-hero-actions">
              <SiteLink className="button" href="/features">Explore Capehelm features <ArrowIcon /></SiteLink>
              <SiteLink className="text-link" href="/private-personal-finance">Why local-first matters <ArrowIcon /></SiteLink>
            </div>
          </div>
          <div className="landing-hero-visual">
            <ProductScreenshot
              asset="dashboard"
              alt="Capehelm Dashboard for Mac showing a fictional monthly overview with spending, budget, cash-flow and financial progress signals."
              eager
              sizes="(max-width: 900px) calc(100vw - 32px), 690px"
            />
            <p className="landing-caption">The Dashboard brings the current month, what needs attention and the next useful step into one Mac workspace. Shown with fictional demo data.</p>
          </div>
        </header>

        <section className="landing-editorial section-shell">
          <div className="landing-editorial-heading">
            <p className="eyebrow"><span /> Designed around the way you work</p>
            <h2>A Mac workspace, not another finance tab.</h2>
          </div>
          <div className="landing-prose">
            <p>Capehelm is designed as a focused macOS application for people who prefer to manage important files and decisions on their Mac. The interface keeps detailed financial work—from reviewing a transaction to adjusting a retirement assumption—inside one consistent workspace.</p>
            <p>That does not mean everything happens automatically. You choose the statements you import, review how the information is organized and decide where your Finance Document and backups live. Capehelm provides structure without taking ownership of the underlying financial files.</p>
          </div>
        </section>

        <section className="landing-document-flow section-shell" aria-labelledby="document-flow-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> One Finance Document</p>
            <h2 id="document-flow-title">A simple model for a connected financial picture.</h2>
            <p>Your Finance Document is the foundation. It keeps the transactions, Categories, plans and analysis that belong together in a local file you control.</p>
          </div>
          <ol>
            {documentSteps.map(([number, heading, body]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{heading}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <SiteLink className="text-link" href="/csv-bank-statement-import">See how statement import works <ArrowIcon /></SiteLink>
        </section>

        <section className="landing-time-horizons section-shell" aria-labelledby="time-horizons-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> More than transaction history</p>
            <h2 id="time-horizons-title">Past, present and future have different jobs.</h2>
          </div>
          <div className="landing-time-grid">
            <article>
              <span>Past</span>
              <h3>Understand what happened.</h3>
              <p>Transactions and Trends help you examine merchants, Categories and changes over time. Review the details behind a total instead of treating history as a static list.</p>
            </article>
            <article>
              <span>Present</span>
              <h3>Decide what this month needs.</h3>
              <p>Budget compares your plan with actual and projected spending. Dashboard keeps the most useful current signals together so you can see what is on track and what deserves attention.</p>
            </article>
            <article>
              <span>Next</span>
              <h3>Look beyond today.</h3>
              <p>Forecast looks ahead 14 days. Net Worth connects assets and liabilities, while Retirement models how included accounts may grow from contributions and assumptions over time.</p>
            </article>
          </div>
          <p className="landing-reports-note"><strong>Reports connect the conversation.</strong> Weekly and month-end PDF check-ins turn the same local financial picture into something a household can review together.</p>
        </section>

        <section className="landing-fit section-shell">
          <div>
            <p className="eyebrow"><span /> A deliberate fit</p>
            <h2>Who Capehelm may suit.</h2>
            <p>Capehelm is a strong fit when you want a structured financial workspace but still want direct control over how information enters it and where it lives.</p>
          </div>
          <ul>
            <li>You prefer doing detailed financial work on a Mac.</li>
            <li>You are comfortable downloading statement CSV files from your financial institutions.</li>
            <li>You want more connected analysis than a collection of spreadsheets.</li>
            <li>You value local Finance Documents, local backups and user-chosen storage.</li>
            <li>You want historical review, monthly planning and forward-looking cash flow in one place.</li>
          </ul>
          <aside>
            <strong>The tradeoff is intentional.</strong>
            <p>Capehelm does not automatically download transactions or ask for online-banking credentials. You decide which local statements enter the app.</p>
          </aside>
        </section>

        <RelatedGuides links={[
          { href: "/cash-flow-forecast", label: "Plan the next 14 days", description: "Understand Capehelm’s household cash-flow Forecast." },
          { href: "/private-personal-finance", label: "Explore local-first privacy", description: "See what stays local and what limited network activity remains." },
          { href: "/csv-bank-statement-import", label: "Follow the CSV workflow", description: "Learn how statement files become reviewed transactions." },
        ]} />

        <LandingCta
          eyebrow="Capehelm for Mac"
          title="Bring the whole financial picture onto your Mac."
          body="Capehelm is available on the Mac App Store. Bring budgeting, forecasting, spending analysis and long-term planning together on your Mac."
          secondaryHref="/features"
          secondaryLabel="See every feature"
        />
      </article>
    </PageShell>
  );
}
