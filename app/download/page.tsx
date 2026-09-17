/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, PageShell } from "../../components/SiteShell";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: "Capehelm for Mac — Coming Soon",
  description: "Capehelm is coming soon for Mac. It is not yet available from the Mac App Store or as a direct download, and no release date has been announced.",
};

export default function DownloadPage() {
  return <PageShell>
      <section className="download-hero section-shell"><div className="download-copy"><p className="eyebrow"><span /> Coming soon for Mac</p><h1>Private personal finance.<br /><em>Built for your Mac.</em></h1><p>Capehelm is a local-first workspace for budgeting, Forecast, Transactions, Trends, Net Worth and reporting.</p><div className="download-status"><span>Coming Soon</span><b>Not yet available</b><small>No release date announced</small></div></div><div className="app-icon-stage"><div className="icon-glow" /><img src="/brand/capehelm-icon.png" alt="Capehelm app icon" /></div></section>
    <section className="download-card section-shell"><div><p className="eyebrow"><span /> Availability</p><h2>Capehelm is not yet available.</h2><p>{siteConfig.download.note}</p><p>This website is available ahead of the software so you can explore Capehelm&apos;s planned features and privacy approach.</p></div><div className="requirements"><h3>Planned experience</h3><ul><li><CheckIcon /><span><b>Primary app</b>Designed for macOS</span></li><li><CheckIcon /><span><b>Companion</b>Selected iPhone workflows</span></li><li><CheckIcon /><span><b>Distribution</b>Not yet available</span></li><li><CheckIcon /><span><b>Release date</b>Not announced</span></li></ul><button disabled aria-disabled="true">{siteConfig.download.label}</button><small>No download is available at this time.</small></div></section>
    <section className="install-notes section-shell"><article><span>01</span><h3>Mac is the complete workspace</h3><p>The Mac app is planned as the complete workspace for Dashboard, imports, Transactions, Budget Health, Forecast, Trends, Categories, Net Worth, Reports, backup and document management.</p></article><article><span>02</span><h3>iPhone is the companion</h3><p>The planned iPhone companion focuses on Forecast, Reports, Financial To-Do and selected shared finance-document workflows.</p></article><article><span>03</span><h3>Your documents remain yours</h3><p>Capehelm is designed around local application data and user-controlled finance documents rather than a hosted Capehelm financial account.</p></article></section>
    <section className="download-footer-cta section-shell"><p>Capehelm is coming soon. No release date has been announced.</p><Link className="button button-secondary" href="/features">Explore planned features</Link></section>
  </PageShell>;
}
