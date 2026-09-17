import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030914",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Capehelm — Coming Soon for Mac";
  const description = "Capehelm is a private, local-first personal finance workspace coming soon for Mac. It is not yet available and no release date has been announced.";

  return {
    metadataBase: new URL(origin),
    title: { default: title, template: "%s | Capehelm" },
    description,
    applicationName: "Capehelm",
    category: "finance",
    icons: {
      icon: [{ url: "/brand/capehelm-mark.png", type: "image/png" }],
      apple: [{ url: "/brand/capehelm-icon.png", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      siteName: "Capehelm",
      title,
      description,
      images: [{ url: new URL("/og.png", origin).toString(), width: 1200, height: 630, alt: "Capehelm — Understand your money. Keep it yours." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", origin).toString()],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
