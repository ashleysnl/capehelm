import type { Metadata } from "next";
import { PageShell, SiteLink } from "../../components/SiteShell";
import { productionSiteUrl } from "../../config/site";
import { faqEntries } from "../../content/faq";

export const metadata: Metadata = {
  title: { absolute: "Capehelm FAQ | Privacy, CSV Imports & Subscriptions" },
  description:
    "Answers about Capehelm’s local-first Mac personal finance app, CSV statement imports, privacy, backups, subscriptions, compatibility and support.",
  alternates: { canonical: `${productionSiteUrl}/faq` },
};

export const dynamic = "force-static";

export default function FaqPage() {
  return (
    <PageShell>
      <section className="page-hero faq-hero section-shell">
        <p className="eyebrow"><span /> Capehelm FAQ</p>
        <h1>Clear answers before you <em>start your trial.</em></h1>
        <p>Learn how Capehelm handles statement imports, local files, privacy, subscriptions, compatibility, backups, and support.</p>
        <div className="page-subnav" aria-label="FAQ resources">
          <SiteLink href="/privacy">Read the Privacy Policy</SiteLink>
          <SiteLink href="/support">Visit Support</SiteLink>
          <a href="mailto:support@capehelm.com">Email support@capehelm.com</a>
        </div>
      </section>

      <section className="faq-layout section-shell" aria-labelledby="faq-list-title">
        <aside className="faq-overview" aria-label="FAQ overview">
          <p className="eyebrow"><span /> Local-first by design</p>
          <h2 id="faq-list-title">Questions about Capehelm</h2>
          <p>Capehelm does not require your online-banking credentials. Transactions are imported from local statement files instead.</p>
          <dl>
            <div><dt>Platform</dt><dd>macOS 14 Sonoma or later</dd></div>
            <div><dt>Storage</dt><dd>Local, user-controlled files</dd></div>
            <div><dt>Import</dt><dd>Statement and custom CSV</dd></div>
            <div><dt>Support</dt><dd><a href="mailto:support@capehelm.com">support@capehelm.com</a></dd></div>
          </dl>
        </aside>

        <div className="faq-list">
          {faqEntries.map((entry, index) => (
            <details className={`faq-item${entry.warning ? " faq-item-warning" : ""}`} id={entry.id} key={entry.id} open={index === 0}>
              <summary>
                <span className="faq-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-question">{entry.question}</span>
              </summary>
              <div className="faq-answer">
                {entry.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {entry.bullets ? <ul>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                {entry.link ? <a className="text-link" href={entry.link.href}>{entry.link.label} <span aria-hidden="true">↗</span></a> : null}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="download-footer-cta faq-footer-cta section-shell">
        <p>Still deciding? Explore the complete capability list or review how Capehelm keeps personal finance data local.</p>
        <div>
          <SiteLink className="button button-secondary" href="/features">Explore all features</SiteLink>
          <SiteLink className="text-link" href="/privacy">How privacy works <span aria-hidden="true">↗</span></SiteLink>
        </div>
      </section>
    </PageShell>
  );
}
