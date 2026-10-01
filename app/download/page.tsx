/* eslint-disable @next/next/no-img-element */
import {
  AppStoreLink,
  ArrowIcon,
  CheckIcon,
  PageShell,
  SiteLink,
} from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";
import { siteAssetPath, siteConfig } from "../../config/site";

export const metadata = createPageMetadata({
  title: "Download Capehelm for Mac | Capehelm",
  description:
    "Download Capehelm from the Mac App Store. Budget, forecast cash flow, understand spending and track long-term progress while keeping your financial data local.",
  path: "/download",
});

export const dynamic = "force-static";

export default function DownloadPage() {
  return (
    <PageShell>
      <section className="download-hero section-shell">
        <div className="download-copy">
          <p className="eyebrow"><span /> Available for Mac</p>
          <h1>Capehelm is available on the <em>Mac App Store.</em></h1>
          <p>Capehelm is a local-first personal finance app for budgeting, Forecast, Transactions, Trends, Net Worth, Retirement and reporting.</p>
          <div className="download-status">
            <span>Available now</span>
            <b>Mac App Store</b>
            <small>Open the official Capehelm listing</small>
          </div>
        </div>
        <div className="app-icon-stage">
          <div className="icon-glow" />
          <img
            src={siteAssetPath("/brand/capehelm-icon-512.webp")}
            width="512"
            height="512"
            fetchPriority="high"
            decoding="async"
            alt="Capehelm app icon"
          />
        </div>
      </section>

      <section className="download-card section-shell">
        <div>
          <p className="eyebrow"><span /> Get Capehelm</p>
          <h2>Download Capehelm from Apple.</h2>
          <p>{siteConfig.download.note}</p>
          <p>Apple handles distribution, subscriptions and introductory-offer eligibility. Your personal finance data remains in your local Capehelm Finance Document and is not uploaded to Capehelm servers.</p>
        </div>
        <div className="requirements">
          <h3>Mac requirements</h3>
          <ul>
            <li><CheckIcon /><span><b>Platform</b>macOS</span></li>
            <li><CheckIcon /><span><b>System</b>{siteConfig.platforms.macOS}</span></li>
            <li><CheckIcon /><span><b>Distribution</b>Mac App Store</span></li>
            <li><CheckIcon /><span><b>Subscriptions</b>Monthly or annual; eligible new subscribers can receive Apple&apos;s two-month introductory trial</span></li>
          </ul>
          <AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink>
        </div>
      </section>

      <section className="install-notes section-shell">
        <article>
          <span>01</span>
          <h3>Mac is the complete workspace</h3>
          <p>The Mac app brings Dashboard, imports, Transactions, Budget Health, Forecast, Trends, Categories, Net Worth, Retirement, Reports, backup and document management together.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Apple manages access</h3>
          <p>Monthly and annual subscriptions unlock the same Capehelm features. The Mac App Store shows current pricing and determines introductory-trial eligibility.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Your documents remain yours</h3>
          <p>Capehelm is designed around local application data and user-controlled Finance Documents rather than a hosted Capehelm financial account.</p>
        </article>
      </section>

      <section className="download-footer-cta section-shell">
        <p>Ready to bring your financial picture together on your Mac?</p>
        <div>
          <AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink>
          <SiteLink className="text-link" href="/support">Get support</SiteLink>
          <SiteLink className="text-link" href="/privacy">Read the Privacy Policy</SiteLink>
        </div>
      </section>
    </PageShell>
  );
}
