import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RadioImages is a dental imaging center in DHA Lahore focused on diagnostic accuracy, patient comfort and Planmeca 3D technology.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RadioImages"
        title="Specialist dental imaging with a calm, clinical standard"
        description="We help patients understand their scans and give referring dentists clear, usable imaging — from 3D CBCT to OPG, CEPH and guided surgery support."
        image={images.dentalTeam}
        imageAlt="Professional dental clinic team environment"
      >
        <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
          Talk to our team
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 overflow-hidden rounded-[1.5rem]">
                <Image
                  src={images.dentistCare}
                  alt="Patient-focused dental care"
                  width={1000}
                  height={700}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.smilePatient}
                  alt="Comfortable patient experience"
                  width={500}
                  height={400}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.gloveCare}
                  alt="Clinical care standards"
                  width={500}
                  height={400}
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <article className="rounded-[1.75rem] bg-white p-8 ring-1 ring-ink/5">
                <h2 className="font-display text-3xl font-semibold">Our mission</h2>
                <p className="mt-4 leading-relaxed text-slate">
                  RadioImages exists to make advanced dental radiology accessible, understandable and
                  easy to reach in DHA Lahore. Patients should know what a scan involves. Dentists
                  should receive reliable digital datasets. Everyone should find the center without
                  friction.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-[1.75rem] bg-paper-warm p-8 ring-1 ring-ink/5">
                <h2 className="font-display text-3xl font-semibold">Quality commitment</h2>
                <p className="mt-4 leading-relaxed text-slate">
                  Imaging is performed on the Planmeca ProMax 3D Classic with careful positioning,
                  dose-conscious protocols and digital delivery on USB or printed card. We focus on
                  diagnostic accuracy and a respectful, unhurried patient experience.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Technology-led",
              body: "CBCT, OPG, cephalometrics, 3D face photo, model scanning and surgical guide workflows.",
              image: images.medicalTech,
            },
            {
              title: "Patient comfort",
              body: "Clear explanations, short visits and support for children attending orthodontic scans.",
              image: images.orthodontics,
            },
            {
              title: "Professional partnership",
              body: "Built for referring dentists and clinics who need dependable imaging and fast contact.",
              image: images.cleanClinic,
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="relative overflow-hidden rounded-[1.5rem] bg-ink text-white">
                <div className="absolute inset-0">
                  <Image src={item.image} alt="" fill className="object-cover opacity-40" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
                </div>
                <div className="relative p-6">
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
