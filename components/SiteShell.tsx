import type { AnchorHTMLAttributes, ReactNode } from "react";
import { siteAssetPath, siteConfig, siteHref } from "../config/site";

export function SiteLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={siteHref(href)} {...props} />;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <SiteLink className="availability-bar" href="/download" aria-label="Capehelm for Mac is coming soon. View availability details.">
        <strong>Coming Soon</strong>
        <span>Capehelm for Mac is not yet available.</span>
        <span aria-hidden="true">View status ↗</span>
      </SiteLink>
      <div className="nav-wrap">
        <SiteLink className="brand" href="/" aria-label="Capehelm home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteAssetPath("/brand/capehelm-horizontal.png")}
            alt="Capehelm"
          />
        </SiteLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <SiteLink key={item.href} href={item.href}>
              {item.label}
            </SiteLink>
          ))}
          <SiteLink className="button button-small" href="/download">
            Coming Soon
          </SiteLink>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <SiteLink key={item.href} href={item.href}>
                {item.label}
              </SiteLink>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="footer-mark"
            src={siteAssetPath("/brand/capehelm-mark.png")}
            alt=""
          />
          <p className="footer-title">Capehelm</p>
          <p>Private personal finance for Mac. Coming soon.</p>
        </div>
        <nav aria-label="Footer navigation">
          <SiteLink href="/features">Features</SiteLink>
          <SiteLink href="/privacy">Privacy</SiteLink>
          <SiteLink href="/download">Coming Soon</SiteLink>
          <a href="mailto:support@capehelm.com">Email support</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Capehelm</span>
        <span>Coming Soon · No release date announced.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}
