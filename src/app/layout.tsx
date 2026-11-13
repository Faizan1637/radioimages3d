import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 3D CBCT · OPG · CEPH · DHA Lahore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Dental imaging center Lahore",
    "3D dental CBCT scan Lahore",
    "Panoramic dental X-ray OPG Lahore",
    "Dental radiology services DHA Lahore",
    "Cephalometric imaging",
    "Implant surgical guide",
    "RadioImages",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} | Dental Imaging Center DHA Lahore`,
    description: siteConfig.description,
    images: [{ url: "/images/brand/logo-banner.jpg", width: 1200, height: 630, alt: "RadioImages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Dental Imaging Center`,
    description: siteConfig.description,
    images: ["/images/brand/logo-banner.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-paper text-ink">
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
