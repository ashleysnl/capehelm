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
    status: "private-beta" as const,
    url: null as string | null,
    label: "Public download coming soon",
    note: "The current build is ad-hoc signed for local use and is not yet notarized for unrestricted public installation.",
  },
  navigation: [
    { href: "/features", label: "Features" },
    { href: "/privacy", label: "Privacy" },
    { href: "/#devices", label: "Mac + iPhone" },
    { href: "/download", label: "Download" },
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
      features: ["Net Worth", "Reports"],
    },
  ],
};

export type ProductVisual =
  | "dashboard"
  | "forecast"
  | "budget"
  | "trends"
  | "networth";
