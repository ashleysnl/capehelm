import type { Metadata } from "next";
import { productionSiteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  socialTitle?: string;
  socialDescription?: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
};

export const defaultSocialTitle = "Capehelm — Private Personal Finance for Mac";
export const defaultSocialDescription =
  "A local-first personal finance app for Mac with budgeting, cash-flow forecasting, trends, net worth, retirement planning and local statement imports.";
export const socialImageUrl = `${productionSiteUrl}/assets/capehelm-social-1200x630.png`;
export const socialImageAlt = "Capehelm personal finance app for Mac showing the financial dashboard";

export function createPageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  socialDescription = description,
  openGraphType = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const url = `${productionSiteUrl}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: openGraphType,
      siteName: "Capehelm",
      title: socialTitle,
      description: socialDescription,
      url,
      ...(openGraphType === "article" && publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [{ url: socialImageUrl, alt: socialImageAlt }],
    },
  };
}
