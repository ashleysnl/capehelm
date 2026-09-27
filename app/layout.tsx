import type { Metadata, Viewport } from "next";
import {
  defaultSocialDescription,
  defaultSocialTitle,
  socialImageAlt,
  socialImageUrl,
} from "../config/pageMetadata";
import { productionSiteUrl, siteAssetPath } from "../config/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030914",
  colorScheme: "dark",
};

const title = "Capehelm — Coming Soon for Mac";
const description = "Capehelm is a private, local-first personal finance workspace coming soon for Mac. It is not yet available and no release date has been announced.";
const googleAnalyticsId = "G-PJ6ZQQVMPR";

export const metadata: Metadata = {
  metadataBase: new URL(productionSiteUrl),
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
    title: defaultSocialTitle,
    description: defaultSocialDescription,
    url: `${productionSiteUrl}/`,
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSocialTitle,
    description: defaultSocialDescription,
    images: [{ url: socialImageUrl, alt: socialImageAlt }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
