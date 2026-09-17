import type { Metadata, Viewport } from "next";
import { siteAssetPath } from "../config/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030914",
  colorScheme: "dark",
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const title = "Capehelm — Coming Soon for Mac";
const description = "Capehelm is a private, local-first personal finance workspace coming soon for Mac. It is not yet available and no release date has been announced.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Capehelm" },
  description,
  applicationName: "Capehelm",
  category: "finance",
  icons: {
    icon: [{ url: siteAssetPath("/brand/capehelm-mark.png"), type: "image/png" }],
    apple: [{ url: siteAssetPath("/brand/capehelm-icon.png"), type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Capehelm",
    title,
    description,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Capehelm — Understand your money. Keep it yours." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og.png`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
