import type { Metadata } from "next";

type BuildSeoOptions = {
  title: string;
  description: string;
  path?: string;
  imagePath?: string;
  noIndex?: boolean;
};

export const SITE_NAME = "Prime Work";
export const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function toAbsoluteUrl(path: string): string {
  return new URL(path, DEFAULT_SITE_URL).toString();
}

export function buildSeo({
  title,
  description,
  path = "/",
  imagePath = "/opengraph-image.png",
  noIndex = false,
}: BuildSeoOptions): Metadata {
  const canonical = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(imagePath);

  return {
    metadataBase: new URL(DEFAULT_SITE_URL),
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "uk_UA",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
