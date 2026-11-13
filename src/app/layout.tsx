import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 3D CBCT · OPG · CEPH · DHA Lahore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "healthcare",
  keywords: [
    "Dental imaging center Lahore",
    "3D dental CBCT scan Lahore",
    "Panoramic dental X-ray OPG Lahore",
    "Dental radiology services DHA Lahore",
    "Cephalometric imaging Lahore",
    "Implant surgical guide Lahore",
    "Planmeca ProMax 3D Classic",
    "RadioImages",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} | Dental Imaging Center DHA Lahore`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/dental/promax-classic.jpg",
        width: 1000,
        height: 1000,
        alt: "Planmeca ProMax 3D Classic at RadioImages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Dental Imaging Center`,
    description: siteConfig.description,
    images: ["/images/dental/promax-classic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PK" className={`${manrope.variable} ${syne.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-paper text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
