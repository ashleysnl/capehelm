/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { AppStoreLink, CheckIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { productionSiteUrl, siteAssetPath, siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: { absolute: "Download Capehelm for Mac | Capehelm" },
  description:
    "Capehelm is coming soon for Mac with private, local-first personal finance tools for budgeting, forecasting, Trends, Net Worth and retirement planning.",
  alternates: { canonical: `${productionSiteUrl}/download` },
};

export const dynamic = "force-static";

export default function DownloadPage() {
  const isAvailable = siteConfig.download.status === "available";

  return <PageShell>
      <section className="download-hero section-shell"><div className="download-copy"><p className="eyebrow"><span /> {isAvailable ? "Available for Mac" : "Coming soon for Mac"}</p><h1>{isAvailable ? <>Capehelm is available on the <em>Mac App Store.</em></> : <>Capehelm is coming to the <em>Mac App Store.</em></>}</h1><p>Capehelm is a local-first workspace for budgeting, Forecast, Transactions, Trends, Net Worth and reporting.</p><div className="download-status"><span>{isAvailable ? "Available" : "Coming Soon"}</span><b>{isAvailable ? "Mac App Store" : "Not yet available"}</b><small>{isAvailable ? "View the official listing" : "No release date announced"}</small></div></div><div className="app-icon-stage"><div className="icon-glow" /><img src={siteAssetPath("/brand/capehelm-icon.png")} alt="Capehelm app icon" /></div></section>
    <section className="download-card section-shell"><div><p className="eyebrow"><span /> Availability</p><h2>{isAvailable ? "Get Capehelm from Apple." : "Capehelm is not yet available."}</h2><p>{siteConfig.download.note}</p><p>{isAvailable ? "Use the official Mac App Store listing to view current availability." : "Launch is approaching. Once the official listing is live, this page and every download button on the site will link directly to the Mac App Store."}</p></div><div className="requirements"><h3>{isAvailable ? "Get Capehelm" : "Planned experience"}</h3><ul><li><CheckIcon /><span><b>Primary app</b>Designed for macOS</span></li><li><CheckIcon /><span><b>Companion</b>Selected iPhone workflows</span></li><li><CheckIcon /><span><b>Distribution</b>{isAvailable ? "Mac App Store" : "Not yet available"}</span></li><li><CheckIcon /><span><b>Release date</b>{isAvailable ? "See the official listing" : "Not announced"}</span></li></ul>{isAvailable ? <AppStoreLink className="button">Download on the Mac App Store</AppStoreLink> : <><button disabled aria-disabled="true">Coming Soon</button><small>No download or direct-download build is available at this time.</small></>}</div></section>
    <section className="install-notes section-shell"><article><span>01</span><h3>Mac is the complete workspace</h3><p>The Mac app is planned as the complete workspace for Dashboard, imports, Transactions, Budget Health, Forecast, Trends, Categories, Net Worth, Reports, backup and document management.</p></article><article><span>02</span><h3>iPhone is the companion</h3><p>The planned iPhone companion focuses on Forecast, Reports, Financial To-Do and selected shared finance-document workflows.</p></article><article><span>03</span><h3>Your documents remain yours</h3><p>Capehelm is designed around local application data and user-controlled finance documents rather than a hosted Capehelm financial account.</p></article></section>
    <section className="download-footer-cta section-shell"><p>Capehelm is coming soon. No release date has been announced.</p><SiteLink className="button button-secondary" href="/features">Explore planned features</SiteLink></section>
  </PageShell>;
}
