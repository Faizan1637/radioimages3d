import type { Metadata } from "next";
import Image from "next/image";
import { Baby, Shield, Usb, ClipboardList } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { patientPrep } from "@/lib/content";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Patient Information",
  description:
    "What to expect at RadioImages: preparation, radiation safety, children and orthodontic scans, and USB or printed image delivery.",
  path: "/patient-info",
  keywords: ["CBCT preparation", "dental X-ray safety Lahore", "how to get dental scan images"],
});

export default function PatientInfoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Patient Information", path: "/patient-info" },
        ]}
      />
      <PageHero
        eyebrow="Patient information"
        title="Know what to expect before your scan"
        description="Simple guidance for a smooth CBCT, OPG or CEPH visit — from preparation to how you take images home."
        image={images.patientSmile}
        imageAlt="Comfortable dental patient visit"
      >
        <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
          Ask a question on WhatsApp
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {[images.opgPatient, images.dentistCare, images.orthoBraces].map((src) => (
              <div key={src} className="relative h-44 overflow-hidden rounded-[1.25rem]">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </Reveal>

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
                tell staff if you are pregnant.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <article className="mt-6 overflow-hidden rounded-[1.75rem] bg-ink text-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[220px]">
                <Image
                  src={images.operatoryChair}
                  alt="Dental operatory for imaging visits"
                  fill
                  className="object-cover opacity-60"
                  sizes="50vw"
                />
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl font-semibold">Preparation checklist</h2>
                <ul className="mt-5 space-y-3">
                  {patientPrep.map((item) => (
                    <li key={item} className="flex gap-3 text-white/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                OPG and cephalometric scans are common for orthodontic planning. Bring the
                orthodontist’s referral so the correct views are captured.
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
                Most patients leave with a USB or printed card for their dentist. DVD, film, email
                and cloud delivery are also available on request.
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
