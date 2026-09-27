import { PageShell, SiteLink } from "../../components/SiteShell";
import { SupportContact, SupportPrivacyWarning } from "../../components/Support";
import { SupportSearch } from "../../components/SupportSearch";
import { createPageMetadata } from "../../config/pageMetadata";

export const metadata = createPageMetadata({
  title: "Capehelm Support",
  description:
    "Find Capehelm setup guides and troubleshooting for Finance Documents, CSV imports, Categories, Budget, Forecast, backups, and subscription access.",
  path: "/support",
});

export const dynamic = "force-static";

export default function SupportPage() {
  return (
    <PageShell>
      <section className="support-hero section-shell">
        <div>
          <p className="eyebrow"><span /> Capehelm Knowledge Hub</p>
          <h1>How can we help?</h1>
          <p>Follow clear, product-specific guides for getting started or resolving common Capehelm problems—without sending your financial data anywhere.</p>
        </div>
        <nav className="support-hero-nav" aria-label="Support categories">
          <SiteLink href="#category-getting-started">
            <span>01</span>
            <strong>Getting Started</strong>
            <small>Set up and learn key workflows</small>
            <i aria-hidden="true">↓</i>
          </SiteLink>
          <SiteLink href="#category-troubleshooting">
            <span>02</span>
            <strong>Troubleshooting</strong>
            <small>Resolve common problems</small>
            <i aria-hidden="true">↓</i>
          </SiteLink>
        </nav>
      </section>

      <section className="section-shell support-hub" aria-label="Support articles">
        <SupportSearch />
      </section>

      <div className="section-shell support-hub-contact">
        <SupportPrivacyWarning />
        <SupportContact />
      </div>
    </PageShell>
  );
}
