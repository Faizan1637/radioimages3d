import type { Metadata } from "next";
import { Baby, Shield, Usb, ClipboardList } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { patientPrep } from "@/lib/content";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "What to expect at RadioImages: preparation, radiation safety, children and orthodontic scans, and how you receive USB or printed images.",
};

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient information"
        title="Know what to expect before your scan"
        description="Simple guidance for a smooth visit — from preparation to how you take images home for your dentist."
      >
        <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
          Ask a question on WhatsApp
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-brand-deep" />
                <h2 className="font-display text-2xl font-semibold">On the day</h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate">
                Check in at reception, confirm the study on your referral, complete positioning with
                our team, and complete the scan. Most visits are short. You can usually leave with
                your images the same day.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="h-full rounded-[1.5rem] bg-paper-warm p-7 ring-1 ring-ink/5">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-brand-deep" />
                <h2 className="font-display text-2xl font-semibold">Radiation safety</h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate">
                Dental imaging uses ionising radiation only when clinically justified by your
                referring dentist. Our Planmeca system includes Ultra Low Dose protocols. Always
                tell staff if you are pregnant. This page is educational and does not replace
                medical advice.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <article className="mt-6 rounded-[1.75rem] bg-ink p-8 text-white">
            <h2 className="font-display text-2xl font-semibold">Preparation checklist</h2>
            <ul className="mt-5 space-y-3">
              {patientPrep.map((item) => (
                <li key={item} className="flex gap-3 text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
              <div className="flex items-center gap-3">
                <Baby className="h-5 w-5 text-brand-deep" />
                <h2 className="font-display text-2xl font-semibold">Children & orthodontics</h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate">
                OPG and cephalometric scans are common for orthodontic planning. We take time with
                positioning and explain each step. Parents can wait nearby. Bring the orthodontist’s
                referral so the correct views are captured.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
              <div className="flex items-center gap-3">
                <Usb className="h-5 w-5 text-brand-deep" />
                <h2 className="font-display text-2xl font-semibold">How you receive images</h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate">
                Most patients leave with a USB or printed card for their dentist. We also support
                DVD, film, email and cloud delivery when requested. Tell us your preferred format
                when you book.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {siteConfig.delivery.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-paper-warm px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
