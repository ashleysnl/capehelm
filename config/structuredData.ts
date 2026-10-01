import {
  isMacAppStoreLive,
  macAppStoreUrl,
  productionSiteUrl,
} from "./site";
import { socialImageUrl } from "./pageMetadata";

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
  isMacAppStoreLive && macAppStoreUrl
    ? { installUrl: macAppStoreUrl, sameAs: [macAppStoreUrl] }
    : {};

export const capehelmOrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${productUrl}#organization`,
  name: "Capehelm",
  url: productUrl,
  logo: `${productionSiteUrl}/brand/capehelm-icon.png`,
  ...(isMacAppStoreLive && macAppStoreUrl ? { sameAs: [macAppStoreUrl] } : {}),
} as const;

export const capehelmWebSiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${productUrl}#website`,
  name: "Capehelm",
  url: productUrl,
  publisher: { "@id": `${productUrl}#organization` },
} as const;

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
  publisher: { "@id": `${productUrl}#organization` },
  ...appStoreMetadata,
} as const;

export function serializeStructuredData(value: object): string {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

type ArticleStructuredDataInput = {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
};

export function createArticleStructuredData({
  headline,
  description,
  path,
  datePublished,
}: ArticleStructuredDataInput) {
  const url = `${productionSiteUrl}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    image: socialImageUrl,
    author: {
      "@type": "Person",
      name: "Ashley Skinner",
      url: `${productionSiteUrl}/why-capehelm`,
    },
    publisher: {
      "@type": "Organization",
      name: "Capehelm",
      url: `${productionSiteUrl}/`,
    },
  } as const;
}

export function createFaqStructuredData(
  entries: Array<{ question: string; answer: string[]; bullets?: string[] }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...entry.answer, ...(entry.bullets ?? [])].join(" "),
      },
    })),
  } as const;
}
