import {
  isMacAppStoreLive,
  macAppStoreUrl,
  productionSiteUrl,
} from "./site";

const productUrl = `${productionSiteUrl}/`;

const publicScreenshotUrls = [
  "dashboard",
  "budget",
  "forecast",
  "trends",
  "net-worth",
  "retirement",
].map((name) => `${productionSiteUrl}/product/capehelm-${name}-2560.webp`);

const appStoreMetadata =
  isMacAppStoreLive && macAppStoreUrl ? { installUrl: macAppStoreUrl } : {};

export const capehelmSoftwareApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${productUrl}#software-application`,
  name: "Capehelm",
  description:
    "Capehelm is a local-first personal finance app for macOS that helps users organize imported transactions, build budgets, forecast cash flow, explore spending trends, track net worth, model retirement and create reports.",
  url: productUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "macOS 14.0 or later",
  processorRequirements:
    "Apple silicon (arm64) or 64-bit Intel (x86_64) processor",
  featureList: [
    "Local CSV statement import and transaction review",
    "Transactions, Categories and local merchant rules",
    "Budget and Budget Health",
    "14-day cash-flow Forecast",
    "Trends and spending analysis",
    "Net Worth and Retirement projections",
    "PDF Reports",
  ],
  screenshot: publicScreenshotUrls,
  offers: [
    {
      "@type": "Offer",
      name: "Capehelm Monthly",
      price: "4.99",
      priceCurrency: "USD",
      description:
        "Monthly subscription. Pricing may vary by App Store storefront, region, currency and applicable taxes.",
      url: `${productUrl}#pricing`,
    },
    {
      "@type": "Offer",
      name: "Capehelm Annual",
      price: "49.99",
      priceCurrency: "USD",
      description:
        "Annual subscription. Pricing may vary by App Store storefront, region, currency and applicable taxes.",
      url: `${productUrl}#pricing`,
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "Capehelm",
    url: productUrl,
  },
  ...appStoreMetadata,
} as const;

export function serializeStructuredData(value: object): string {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}
