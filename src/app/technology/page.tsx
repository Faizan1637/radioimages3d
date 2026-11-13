import type { Metadata } from "next";
import Image from "next/image";
import { VolumeCompare } from "@/components/tech/VolumeCompare";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { techFeatures, volumeSizes } from "@/lib/content";
import { buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Imaging Technology",
  description:
    "Explore the Planmeca ProMax 3D Classic at RadioImages — extended volume CBCT, Ultra Low Dose, CALM, endodontic mode and Romexis software.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Planmeca ProMax 3D Classic"
        title="Imaging technology patients can understand"
        description="Every feature explained in plain language — what it is, and why it matters for your diagnosis or treatment plan."
      >
        <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
          Book a scan on WhatsApp
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] bg-ink">
              <Image
                src="/images/equipment/promax-classic.jpg"
                alt="Planmeca ProMax 3D Classic"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              One platform for 3D and 2D dental radiology
            </h2>
            <p className="mt-4 text-slate leading-relaxed">
              The Planmeca ProMax 3D Classic supports advanced CBCT volumes, panoramic imaging,
              cephalometrics, 3D facial photography and model scanning — viewed and shared through
              Planmeca Romexis software.
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.25rem] ring-1 ring-ink/10">
              <Image
                src="/images/equipment/features-checklist.jpg"
                alt="Planmeca feature checklist including Ultra Low Dose and CALM"
                width={1000}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <VolumeCompare />
          </Reveal>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] ring-1 ring-ink/10">
          <Image
            src="/images/equipment/extended-volume.jpg"
            alt="Diagram comparing Ø8 cm and Ø11 cm extended CBCT volumes"
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Features that change the visit</h2>
            <p className="mt-3 max-w-2xl text-slate">
              Short explanations for patients and referring clinicians — no brochure jargon without
              context.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {techFeatures.map((feature, index) => (
              <Reveal key={feature.id} delay={index * 0.03}>
                <article className="h-full rounded-[1.5rem] bg-white p-6 ring-1 ring-ink/5">
                  <h3 className="font-display text-xl font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-brand-deep">What it is</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{feature.what}</p>
                  <p className="mt-3 text-sm font-semibold text-indigo">Why it matters</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{feature.why}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 rounded-[1.75rem] bg-paper-warm p-8">
            <h2 className="font-display text-2xl font-semibold">Available volume sizes</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {volumeSizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-ink/10"
                >
                  {size}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate">
              SureSmile certification can be listed publicly once confirmed by the clinic.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
