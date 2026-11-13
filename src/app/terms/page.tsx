import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms of use and medical information disclaimer for RadioImages.com.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="Website information is educational and does not replace advice from your dentist or physician."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 text-slate leading-relaxed sm:px-6 lg:px-8">
        <div className="space-y-5 rounded-[1.5rem] bg-white p-8 ring-1 ring-ink/5">
          <p>
            Content on this website describes imaging services and technology in general terms. It
            is not a diagnosis, treatment recommendation or prescription. Always follow guidance
            from your referring clinician.
          </p>
          <p>
            Service availability, hours and delivery formats may change. Confirm details when you
            book. Radiation safety information is general; clinical justification for imaging rests
            with the referring professional.
          </p>
          <p>
            Manufacturer product names and trademarks belong to their respective owners and are used
            here for identification of equipment available at the center.
          </p>
        </div>
      </section>
    </>
  );
}
