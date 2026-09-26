export const productionSiteUrl = "https://capehelm.com";

// Set this to the production apps.apple.com listing when it is available.
// Until then, App Store CTAs use the existing /download availability page.
export const macAppStoreUrl: string | null = null;
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
    iOS: "iOS 17 or later companion",
  },
  download: {
    status: isMacAppStoreLive ? "available" as const : "coming-soon" as const,
    url: macAppStoreDestination,
    isExternal: isMacAppStoreLive,
    label: isMacAppStoreLive ? "Available on the Mac App Store" : "Coming Soon",
    appStoreLabel: "Download on the Mac App Store",
    note: isMacAppStoreLive
      ? "Capehelm is available from the Mac App Store."
      : "Capehelm is not yet available from the Mac App Store or as a direct download. No release date has been announced.",
  },
  navigation: [
    { href: "/features", label: "Features" },
    { href: "/privacy", label: "Privacy" },
    { href: "/#devices", label: "Mac + iPhone" },
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
      features: ["Reports", "Mac + iPhone"],
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
