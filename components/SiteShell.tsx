import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "../config/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Capehelm home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/capehelm-horizontal.png"
            alt="Capehelm"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-small" href="/download">
            Download Capehelm
          </Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
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
            src="/brand/capehelm-mark.png"
            alt=""
          />
          <p className="footer-title">Capehelm</p>
          <p>Private personal finance for Mac.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/features">Features</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/download">Download</Link>
          <a href="mailto:support@capehelm.com">Email support</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Capehelm</span>
        <span>No analytics. No advertising trackers.</span>
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
