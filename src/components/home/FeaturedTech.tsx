import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

const highlights = [
  "Extended volume Ø8 → Ø11 cm without increasing dose",
  "Planmeca Ultra Low Dose™ & CALM® artefact correction",
  "Endodontic mode, 3D face photo & model scanning",
  "2D panoramic and cephalometric imaging on one platform",
];

export function FeaturedTech() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/25 to-indigo/20 blur-xl" />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="relative col-span-2 overflow-hidden rounded-[1.5rem] bg-ink shadow-2xl">
                <Image
                  src={images.promax}
                  alt="Planmeca ProMax 3D Classic scanner"
                  width={1200}
                  height={700}
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand">Featured technology</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    Planmeca ProMax 3D Classic
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.techScreen}
                  alt="Digital imaging review screens"
                  width={600}
                  height={400}
                  className="h-36 w-full object-cover sm:h-40"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.cbctConcept}
                  alt="Advanced diagnostic imaging concept"
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
            title="Clinical clarity powered by Planmeca"
            description="Patients understand the benefit. Dentists see the clinical value. One system for 3D CBCT, OPG, CEPH and digital model workflows."
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
