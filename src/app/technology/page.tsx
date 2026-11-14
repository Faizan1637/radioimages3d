import type { Metadata } from "next";
import Image from "next/image";
import { VolumeCompare } from "@/components/tech/VolumeCompare";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { techFeatures, volumeSizes } from "@/lib/content";
import { images, PROMAX_SIZE } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Planmeca ProMax 3D Classic Technology",
  description:
    "Explore the Planmeca ProMax 3D Classic at RadioImages — 3D CBCT, OPG, CEPH, Ultra Low Dose and CALM in DHA Lahore.",
  path: "/technology",
  keywords: ["Planmeca ProMax 3D Classic", "Ultra Low Dose CBCT", "Planmeca CALM Lahore"],
});

export default function TechnologyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
        ]}
      />
      <PageHero
        eyebrow="Planmeca ProMax 3D Classic"
        title="3D CBCT, OPG and CEPH on one dental platform"
        description="Every feature explained in plain language — what it is, and why it matters for your diagnosis or treatment plan."
        image={images.reception}
        imageAlt="RadioImages reception"
        priority
      >
        <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
          Book a scan on WhatsApp
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/10">
                <Image
                  src={images.promax}
                  alt="Planmeca ProMax 3D Classic"
                  width={PROMAX_SIZE.width}
                  height={PROMAX_SIZE.height}
                  className="h-72 w-full object-contain p-6 sm:h-80"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  quality={80}
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.equipmentMonitor}
                  alt="Dental imaging equipment and diagnostic monitor"
                  width={600}
                  height={400}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.xrayMonitor}
                  alt="Dental X-ray displayed on a clinical monitor"
                  width={600}
                  height={400}
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Planmeca ProMax 3D Classic
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Advanced CBCT volumes, panoramic OPG imaging, cephalometric CEPH studies, 3D facial
              photography and model scanning — viewed and shared through Planmeca Romexis software.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { label: "3D CBCT", src: images.promax },
                { label: "OPG", src: images.opg },
                { label: "CEPH", src: images.ceph },
              ].map((item) => (
                <div key={item.label} className="overflow-hidden rounded-xl bg-paper-warm ring-1 ring-ink/5">
                  <div className="relative h-24">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className={item.src === images.promax ? "object-contain p-1 bg-white" : "object-cover"}
                      sizes="120px"
                    />
                  </div>
                  <p className="px-2 py-2 text-center text-xs font-semibold text-ink">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <VolumeCompare />
          </Reveal>
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
            <h2 className="font-display text-2xl font-semibold">Available CBCT volume sizes</h2>
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
          </div>
        </Reveal>
      </section>
    </>
  );
}
