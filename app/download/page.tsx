/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, PageShell } from "../../components/SiteShell";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: "Download Capehelm for Mac",
  description: "Capehelm for macOS is preparing for public distribution. Review the current release status and requirements.",
};

export default function DownloadPage() {
  return <PageShell>
      <section className="download-hero section-shell"><div className="download-copy"><p className="eyebrow"><span /> Capehelm for macOS</p><h1>Your personal financial<br /><em>command centre.</em></h1><p>The complete Capehelm experience for budgeting, Forecast, Transactions, Trends, Net Worth and reporting.</p><div className="download-status"><span>Private beta</span><b>Public download coming soon</b><small>Capehelm {siteConfig.version}</small></div></div><div className="app-icon-stage"><div className="icon-glow" /><img src="/brand/capehelm-icon.png" alt="Capehelm app icon" /></div></section>
    <section className="download-card section-shell"><div><p className="eyebrow"><span /> Release status</p><h2>Not yet available for unrestricted public installation.</h2><p>{siteConfig.download.note}</p><p>The download page and release configuration are ready. When a notarized public build is approved, the primary action can be enabled from one central configuration value.</p></div><div className="requirements"><h3>System requirements</h3><ul><li><CheckIcon /><span><b>Mac</b>macOS 14 or later</span></li><li><CheckIcon /><span><b>Companion</b>iOS 17 or later</span></li><li><CheckIcon /><span><b>Current version</b>{siteConfig.version}</span></li><li><CheckIcon /><span><b>Finance account</b>Not required</span></li></ul><button disabled aria-disabled="true">{siteConfig.download.label}</button><small>No incorrect or unnotarized public binary is linked.</small></div></section>
    <section className="install-notes section-shell"><article><span>01</span><h3>Mac is the complete workspace</h3><p>Dashboard, imports, Transactions, Budget Health, Forecast, Trends, Categories, Net Worth, Reports, backup and document management live on macOS.</p></article><article><span>02</span><h3>iPhone is the companion</h3><p>The iOS companion focuses on Forecast, Reports, Financial To-Do and selected shared finance-document workflows.</p></article><article><span>03</span><h3>Your documents remain yours</h3><p>Capehelm uses local application data and user-controlled finance documents rather than a hosted Capehelm financial account.</p></article></section>
    <section className="download-footer-cta section-shell"><p>While the public build is being prepared, you can explore exactly what Capehelm does.</p><Link className="button button-secondary" href="/features">Explore all features</Link></section>
  </PageShell>;
}
