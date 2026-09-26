import { siteAssetPath } from "../config/site";

export type ProductScreenshotAsset =
  | "budget"
  | "dashboard"
  | "forecast"
  | "net-worth"
  | "retirement"
  | "trends";

type ProductScreenshotProps = {
  asset: ProductScreenshotAsset;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

export function ProductScreenshot({
  asset,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 800px) calc(100vw - 48px), 620px",
}: ProductScreenshotProps) {
  const smallAsset = siteAssetPath(`/product/capehelm-${asset}-1400.webp`);
  const largeAsset = siteAssetPath(`/product/capehelm-${asset}-2560.webp`);
  const dimensions = asset === "dashboard"
    ? { width: 2560, height: 1665 }
    : { width: 2560, height: 1600 };

  return (
    <figure className={`product-screenshot ${className}`.trim()}>
      {/* Build-time optimized responsive assets; no runtime image service is required. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={smallAsset}
        srcSet={`${smallAsset} 1400w, ${largeAsset} 2560w`}
        sizes={sizes}
        width={dimensions.width}
        height={dimensions.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        alt={alt}
      />
    </figure>
  );
}
