import { FaqPreview } from "@/components/home/FaqPreview";
import { FeaturedTech } from "@/components/home/FeaturedTech";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MapSection } from "@/components/home/MapSection";
import { QuickFacts } from "@/components/home/QuickFacts";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
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
