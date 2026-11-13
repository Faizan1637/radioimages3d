import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import { serviceImages } from "@/lib/images";

export function ServicesOverview() {
  return (
    <section className="bg-paper-warm py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Imaging services"
            title="Every study your referral asks for"
            description="From 3D CBCT and OPG to cephalometrics, endodontic imaging and implant surgical guides — clear pages for patients and referring clinics."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const image = serviceImages[service.slug];
            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.4)] hover:ring-brand/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink">
                      {service.shortTitle}
                    </span>
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink opacity-0 transition group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{service.summary}</p>
                    <p className="mt-4 text-sm font-semibold text-brand-deep">View details →</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
