import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { images, serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Imaging Services",
  description:
    "3D CBCT, OPG, cephalometric imaging, endodontic scans, 3D models, facial photography and implant surgical guides in DHA Lahore.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Dental imaging services for patients and referring clinics"
        description="Each service page covers what the scan is, when it is recommended, preparation, duration and how results are delivered."
        image={images.clinicCorridor}
        imageAlt="Modern clinical imaging corridor"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.03}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink/5 transition hover:ring-brand/40 sm:grid-cols-[220px_1fr]"
              >
                <div className="relative min-h-[160px]">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="220px"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
                      {String(index + 1).padStart(2, "0")} · {service.shortTitle}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate sm:text-base">
                      {service.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Open page
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
