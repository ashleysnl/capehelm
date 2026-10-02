import type { AnchorHTMLAttributes, ReactNode } from "react";
import { siteAssetPath, siteConfig, siteHref } from "../config/site";

export function SiteLink({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={siteHref(href)} {...props}>{children}</a>;
}

export function AppStoreLink({ children, ...props }: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const rel = siteConfig.download.isExternal
    ? [props.rel, "external", "noopener", "noreferrer"].filter(Boolean).join(" ")
    : props.rel;
  const target = props.target ?? (siteConfig.download.isExternal ? "_blank" : undefined);

  return (
    <SiteLink {...props} href={siteConfig.download.url} target={target} rel={rel || undefined}>
      {children ?? siteConfig.download.appStoreLabel}
    </SiteLink>
  );
}

export function MacAppStoreBadge() {
  return (
    <AppStoreLink className="mac-app-store-badge" aria-label="Download Capehelm on the Mac App Store (opens in a new tab)">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteAssetPath("/brand/apple/download-on-the-mac-app-store.svg")}
        width="156.10054"
        height="40"
        decoding="async"
        alt="Download on the Mac App Store"
      />
    </AppStoreLink>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <AppStoreLink
        className="availability-bar"
      >
        <strong>Available now</strong>
        <span>Capehelm is on the Mac App Store.</span>
        <span aria-hidden="true">View on the App Store ↗</span>
      </AppStoreLink>
      <div className="nav-wrap">
        <SiteLink className="brand" href="/" aria-label="Capehelm home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteAssetPath("/brand/capehelm-horizontal-400.webp")}
            width="400"
            height="107"
            fetchPriority="high"
            decoding="async"
            alt="Capehelm"
          />
        </SiteLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <SiteLink key={item.href} href={item.href}>
              {item.label}
            </SiteLink>
          ))}
        </nav>
        <div className="header-actions">
          <AppStoreLink
            className="button button-small header-app-store-cta"
            aria-label={siteConfig.download.appStoreLabel}
          >
            <span className="header-cta-long">{siteConfig.download.appStoreLabel}</span>
            <span className="header-cta-short">Download</span>
          </AppStoreLink>
          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {siteConfig.navigation.map((item) => (
                <SiteLink key={item.href} href={item.href}>
                  {item.label}
                </SiteLink>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ showBadge = true }: { showBadge?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="footer-mark"
            src={siteAssetPath("/brand/capehelm-mark-320.webp")}
            width="320"
            height="302"
            loading="lazy"
            decoding="async"
            alt=""
          />
          <p className="footer-title">Capehelm</p>
          <p>Private personal finance for Mac. Available on the Mac App Store.</p>
          {showBadge && <MacAppStoreBadge />}
        </div>
        <nav aria-label="Footer navigation">
          <SiteLink href="/features">Features</SiteLink>
          <SiteLink href="/why-capehelm">Why Capehelm</SiteLink>
          <SiteLink href="/guides">Guides</SiteLink>
          <SiteLink href="/faq">FAQ</SiteLink>
          <SiteLink href="/privacy">Privacy</SiteLink>
          <SiteLink href="/support">Support</SiteLink>
          <AppStoreLink>Mac App Store</AppStoreLink>
          <a href="mailto:support@capehelm.com">Email support</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Capehelm</span>
        <span>Available on the Mac App Store.</span>
      </div>
      <p className="apple-trademark-credit">Apple, the Apple logo, and Mac are trademarks of Apple Inc., registered in the U.S. and other countries. Mac App Store is a service mark of Apple Inc.</p>
    </footer>
  );
}

export function PageShell({ children, badgeInContent = false }: { children: ReactNode; badgeInContent?: boolean }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter showBadge={!badgeInContent} />
    </>
  );
}

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}
