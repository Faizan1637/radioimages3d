import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Frequently asked questions about CBCT, OPG, referrals, scan times, radiation safety and image delivery at RadioImages Lahore.",
  path: "/faqs",
  keywords: ["CBCT vs OPG", "dental scan FAQ Lahore", "do I need referral for CBCT"],
});

export default function FaqsPage() {
  return (
    <>
      <FaqJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ]}
      />
      <PageHero
        eyebrow="FAQs"
        title="Answers for patients and referring clinics"
        description="Clear information on booking, safety, scan types and how results are delivered."
        image={images.dentistsTabletXray}
        imageAlt="Dentists reviewing dental X-ray imaging"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.02}>
              <details className="group rounded-[1.25rem] bg-white p-5 ring-1 ring-ink/5 open:shadow-lg">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
