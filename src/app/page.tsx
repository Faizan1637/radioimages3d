import type { Metadata } from "next";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FeaturedTech } from "@/components/home/FeaturedTech";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ImageStrip } from "@/components/home/ImageStrip";
import { MapSection } from "@/components/home/MapSection";
import { QuickFacts } from "@/components/home/QuickFacts";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Imaging Center DHA Lahore | 3D CBCT · OPG · CEPH",
  description:
    "RadioImages offers 3D CBCT, OPG, cephalometric imaging and computer guided surgical solutions in DHA Lahore. Book on WhatsApp. Planmeca ProMax 3D Classic.",
  path: "/",
  keywords: [
    "Dental imaging center Lahore",
    "3D CBCT DHA",
    "OPG Lahore",
    "CEPH scan Lahore",
    "Planmeca ProMax 3D Classic Pakistan",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <ImageStrip />
      <FeaturedTech />
      <ServicesOverview />
      <WhyChoose />
      <HowItWorks />
      <MapSection />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
