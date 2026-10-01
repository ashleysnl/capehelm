export const productionSiteUrl = "https://capehelm.com";

export const macAppStoreUrl = "https://apps.apple.com/us/app/capehelm/id6813935886";
export const macAppStoreFallbackUrl = "/download";

export function resolveMacAppStoreDestination(url: string | null | undefined): string {
  if (!url) {
    return macAppStoreFallbackUrl;
  }

  try {
    const candidate = new URL(url);
    const isProductionListing =
      candidate.origin === "https://apps.apple.com" &&
      !candidate.username &&
      !candidate.password &&
      /\/app\/(?:[^/]+\/)?id\d+\/?$/.test(candidate.pathname);

    return isProductionListing ? url : macAppStoreFallbackUrl;
  } catch {
    return macAppStoreFallbackUrl;
  }
}

export const macAppStoreDestination = resolveMacAppStoreDestination(macAppStoreUrl);
export const isMacAppStoreLive = macAppStoreDestination !== macAppStoreFallbackUrl;

export const siteConfig = {
  name: "Capehelm",
  tagline: "Understand your money. Keep it yours.",
  description:
    "Capehelm brings budgeting, cash-flow forecasting, spending trends and net worth together in a private personal-finance workspace for Mac.",
  version: "1.1.0",
  platforms: {
    macOS: "macOS 14 or later",
    iOS: "No iPhone or iPad companion is currently offered",
  },
  download: {
    status: "available" as const,
    url: macAppStoreDestination,
    isExternal: true,
    label: "Available on the Mac App Store",
    appStoreLabel: "Download on the Mac App Store",
    note: "Capehelm is available from the Mac App Store.",
  },
  navigation: [
    { href: "/features", label: "Features" },
    { href: "/why-capehelm", label: "Why Capehelm" },
    { href: "/guides", label: "Guides" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy" },
    { href: "/support", label: "Support" },
  ],
  featureGroups: [
    {
      title: "See where you stand",
      features: ["Dashboard", "Budget Health"],
    },
    {
      title: "Understand where it went",
      features: ["Transactions", "Trends", "Categories & Rules"],
    },
    {
      title: "Plan what happens next",
      features: ["14-Day Forecast", "Financial To-Do"],
    },
    {
      title: "Measure long-term progress",
      features: ["Net Worth", "Retirement Projection"],
    },
    {
      title: "Keep your household aligned",
      features: ["Reports", "Finance Documents"],
    },
    {
      title: "Keep control",
      features: ["Finance Documents", "Imports", "Backup & Restore"],
    },
  ],
};

export function siteAssetPath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

export function siteHref(href: string): string {
  if (href.startsWith("#") || /^[a-z]+:/i.test(href)) {
    return href;
  }
  return href.startsWith("/") ? href : `/${href}`;
}
