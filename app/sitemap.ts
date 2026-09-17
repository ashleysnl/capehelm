import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/features", "/privacy", "/download"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? "monthly" as const : "weekly" as const,
    priority: path ? 0.8 : 1,
  }));
}
