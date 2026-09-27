import type { Metadata } from "next";
import { productionSiteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${productionSiteUrl}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Capehelm",
      title,
      description,
      url,
      images: [
        {
          url: `${productionSiteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Capehelm — Understand your money. Keep it yours.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${productionSiteUrl}/og.png`],
    },
  };
}
