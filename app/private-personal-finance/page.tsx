import { LandingCta, RelatedGuides } from "../../components/LandingPageBlocks";
import { ProductScreenshot } from "../../components/ProductScreenshot";
import { ArrowIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

const title = "Private, Local-First Personal Finance for Mac | Capehelm";
const description =
  "Learn how Capehelm keeps transactions, budgets, forecasts and Finance Documents local while limiting network use to clearly defined services such as Apple StoreKit.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/private-personal-finance",
});

export const dynamic = "force-static";

export default function PrivatePersonalFinancePage() {
  return (
    <PageShell>
      <article className="landing-page landing-private">
        <header className="landing-private-hero section-shell">
          <div className="landing-private-lede">
            <p className="eyebrow"><span /> Local-first personal finance</p>
            <h1>Your Financial Data <em>Stays With You</em></h1>
            <p>In Capehelm, “local-first” means your financial picture is built from a Finance Document and files under your control. Capehelm does not operate a finance-data cloud account that receives your transactions, budgets or balances.</p>
            <div className="landing-hero-actions">
              <SiteLink className="button button-secondary" href="/privacy">Read the full Privacy Policy <ArrowIcon /></SiteLink>
              <SiteLink className="text-link" href="/csv-bank-statement-import">How local import works <ArrowIcon /></SiteLink>
            </div>
          </div>
          <div className="landing-private-proof">
            <ProductScreenshot
              asset="dashboard"
              alt="Capehelm Dashboard on Mac showing fictional financial information inside a Finance Document, with the interface identifying the workspace as local only."
              eager
              sizes="(max-width: 900px) calc(100vw - 32px), 880px"
            />
            <div className="landing-private-facts" aria-label="Capehelm local-first principles">
              <div><strong>No banking login</strong><span>Capehelm does not ask for your online-banking credentials.</span></div>
              <div><strong>No hosted finance account</strong><span>Your Finance Document is not stored in a Capehelm finance-data service.</span></div>
              <div><strong>No finance-data telemetry</strong><span>Personal financial content is not used for app analytics or advertising profiles.</span></div>
            </div>
          </div>
        </header>

        <section className="landing-private-document section-shell" aria-labelledby="private-document-title">
          <div className="landing-section-heading">
            <p className="eyebrow"><span /> Your Finance Document</p>
            <h2 id="private-document-title">The file is the financial workspace.</h2>
            <p>A Capehelm Finance Document keeps the information that makes your analysis useful: imported transactions, Categories, merchant rules, Budget plans, Forecast state, Net Worth information, retirement assumptions and related settings.</p>
          </div>
          <div className="landing-private-path" role="list" aria-label="Local-first data path">
            <div role="listitem"><span>01</span><strong>You choose a file</strong><p>Select the statement, Finance Document, backup or export involved in the task.</p></div>
            <i aria-hidden="true">→</i>
            <div role="listitem"><span>02</span><strong>Capehelm works locally</strong><p>The app processes finance content on your Mac and saves it to local app storage or your Finance Document.</p></div>
            <i aria-hidden="true">→</i>
            <div role="listitem"><span>03</span><strong>You control the output</strong><p>Choose where Finance Documents, backup archives, exports and reports are kept or shared.</p></div>
          </div>
          <p className="landing-storage-note">If you place a file in iCloud Drive or another storage provider, that provider may synchronize it under its own terms. Capehelm itself is not the hosted finance-storage provider.</p>
        </section>

        <section className="landing-private-principles section-shell">
          <article>
            <span>01</span>
            <h2>No bank credentials required.</h2>
            <p>Capehelm works with statement files you download and select. It does not log in to a financial institution on your behalf, use a bank-aggregation service or ask for an online-banking username and password.</p>
            <SiteLink className="text-link" href="/csv-bank-statement-import">Follow the statement workflow <ArrowIcon /></SiteLink>
          </article>
          <article>
            <span>02</span>
            <h2>No finance-data telemetry.</h2>
            <p>The application does not send transaction descriptions, merchant names, account information, budgets, forecasts or other personal finance content to Capehelm analytics. Capehelm is a paid product, not an advertising platform built from financial profiles.</p>
          </article>
          <article>
            <span>03</span>
            <h2>You decide what enters.</h2>
            <p>Manual import is a control boundary as well as a workflow. You choose the period and statement file, inspect the mapping or built-in format, and review the imported transactions before using them elsewhere in the app.</p>
          </article>
          <article>
            <span>04</span>
            <h2>Your backups remain files.</h2>
            <p>You choose a local backup location, create backup archives through Capehelm and restore a valid archive through the app. Those files contain private financial information and should be stored accordingly.</p>
          </article>
        </section>

        <section className="landing-network-boundary section-shell" aria-labelledby="network-boundary-title">
          <div>
            <p className="eyebrow"><span /> Clear boundaries</p>
            <h2 id="network-boundary-title">What still uses the internet?</h2>
            <p>Local-first does not mean the Mac can never make a network connection. Capehelm keeps finance content separate from the narrow services needed for commerce and public help.</p>
          </div>
          <dl>
            <div>
              <dt>Apple StoreKit</dt>
              <dd>Apple services load subscription products, determine introductory-offer eligibility, process purchases, verify entitlements and restore purchases. Those operations do not send your Capehelm Finance Document contents to Apple.</dd>
            </div>
            <div>
              <dt>Links you choose</dt>
              <dd>Opening Support, Privacy or other public links hands the URL to your browser. A share or email action is completed by the macOS service or application you choose.</dd>
            </div>
            <div>
              <dt>This public website</dt>
              <dd>The website uses Google Analytics for aggregate public-site measurement. It cannot access Capehelm Finance Documents or personal finance content stored by the Mac app.</dd>
            </div>
          </dl>
        </section>

        <section className="landing-policy-prompt section-shell">
          <div>
            <p className="eyebrow"><span /> Verify the details</p>
            <h2>Marketing copy should not be your only privacy source.</h2>
            <p>The full Privacy Policy explains local storage, user-selected file providers, imports, backups, StoreKit, website measurement, support contact and what Capehelm does not intentionally collect.</p>
          </div>
          <SiteLink className="button button-secondary" href="/privacy">Read the Privacy Policy <ArrowIcon /></SiteLink>
        </section>

        <RelatedGuides links={[
          { href: "/csv-bank-statement-import", label: "Control what you import", description: "See how local CSV files become reviewed transactions." },
          { href: "/personal-finance-for-mac", label: "Explore the Mac workspace", description: "Understand how the local Finance Document connects Capehelm’s modules." },
          { href: "/features", label: "Review every capability", description: "Read the detailed product feature inventory." },
        ]} />

        <LandingCta
          eyebrow="Local-first by design"
          title="Keep the financial picture on the Mac where you use it."
          body="Capehelm is being prepared for the Mac App Store. The current shared CTA opens the availability page until a verified public listing exists."
          secondaryHref="/privacy"
          secondaryLabel="Read the full privacy details"
        />
      </article>
    </PageShell>
  );
}
