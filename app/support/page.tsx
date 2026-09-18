import type { Metadata } from "next";
import { CheckIcon, PageShell, SiteLink } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Capehelm Support",
  description: "Get help with Capehelm while keeping your financial information under your control.",
};

export const dynamic = "force-static";

export default function SupportPage() {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow"><span /> Capehelm Support</p>
        <h1>Get help while keeping your data <em>in your control.</em></h1>
        <p>Capehelm is a local-first personal finance app. Email support for help with the app, Finance Documents, imports, backups, reports, or privacy questions.</p>
        <div className="page-subnav" aria-label="Support links">
          <a href="mailto:support@capehelm.com">Email support@capehelm.com</a>
          <SiteLink href="/privacy">Read the Privacy Policy</SiteLink>
        </div>
      </section>

      <section className="download-card section-shell">
        <div>
          <p className="eyebrow"><span /> Contact</p>
          <h2>Contact Capehelm Support</h2>
          <p><a className="text-link" href="mailto:support@capehelm.com">support@capehelm.com</a></p>
          <p>Describe what you were trying to do, what happened, and the Capehelm version and macOS version you are using. Redacted screenshots can be useful when they do not reveal financial information.</p>
          <p>Capehelm does not require your online banking password, bank login, or personal Finance Document to provide ordinary support. Please do not send sensitive financial files, account numbers, transaction exports, backups, or reports unless they are genuinely necessary and you understand the risks of email.</p>
        </div>
        <aside className="requirements" aria-label="Support checklist">
          <h3>Before you email</h3>
          <ul>
            <li><CheckIcon /><span><b>Describe the issue</b>Include the feature and the steps that led to it.</span></li>
            <li><CheckIcon /><span><b>Include version details</b>Share the Capehelm and macOS versions if available.</span></li>
            <li><CheckIcon /><span><b>Keep financial data private</b>Redact sensitive details and do not send bank credentials.</span></li>
          </ul>
          <SiteLink className="button button-secondary" href="/privacy">Privacy Policy</SiteLink>
        </aside>
      </section>

      <section className="download-footer-cta section-shell">
        <p>For privacy requests or concerns about information you sent to Capehelm, email support@capehelm.com and review the Privacy Policy.</p>
        <a className="button button-secondary" href="mailto:support@capehelm.com">Email support</a>
      </section>
    </PageShell>
  );
}
