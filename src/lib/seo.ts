import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/dental/promax-classic.jpg",
  imageWidth = 1000,
  imageHeight = 1000,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: [
      "Dental imaging center Lahore",
      "3D dental CBCT scan Lahore",
      "Panoramic dental X-ray OPG Lahore",
      "Dental radiology DHA Lahore",
      "Cephalometric imaging Lahore",
      "RadioImages",
      ...keywords,
    ],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url,
      siteName: siteConfig.legalName,
      title,
      description,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
