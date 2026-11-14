import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, PROMAX_SIZE } from "@/lib/images";

const highlights = [
  "Extended volume Ø8 → Ø11 cm without increasing dose",
  "Planmeca Ultra Low Dose™ & CALM® artefact correction",
  "Endodontic mode, 3D face photo & model scanning",
  "2D panoramic (OPG) and cephalometric (CEPH) on one platform",
];

export function FeaturedTech() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/25 to-indigo/20 blur-xl" />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="relative col-span-2 overflow-hidden rounded-[1.5rem] bg-white shadow-2xl">
                <Image
                  src={images.promax}
                  alt="Planmeca ProMax 3D Classic CBCT scanner"
                  width={PROMAX_SIZE.width}
                  height={PROMAX_SIZE.height}
                  className="h-64 w-full object-contain p-6 sm:h-80"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/85 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand">Featured technology</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    Planmeca ProMax 3D Classic
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.romexisMonitor}
                  alt="Planmeca Romexis 7 on a clinical monitor"
                  width={600}
                  height={400}
                  className="h-36 w-full object-cover sm:h-40"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.romexisImplant}
                  alt="3D CBCT implant planning in Romexis"
                  width={600}
                  height={400}
                  className="h-36 w-full object-cover sm:h-40"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Imaging technology"
            title="3D CBCT, OPG and CEPH on Planmeca"
            description="One dental imaging platform for cone beam CT, panoramic and cephalometric studies — clear for patients, precise for dentists."
          />
          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/technology" variant="dark">
              Explore full technology page
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
