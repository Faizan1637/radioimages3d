import Link from "next/link";
import {
  Bone,
  Box,
  Camera,
  CircuitBoard,
  Scan,
  ScanFace,
  Smile,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

const icons = [Scan, Smile, Bone, Camera, Stethoscope, Box, ScanFace, CircuitBoard, CircuitBoard];

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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Scan;
            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-[1.5rem] bg-white p-6 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] hover:ring-brand/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-brand transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate transition group-hover:text-brand-deep" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{service.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-brand-deep">View details</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
