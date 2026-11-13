import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { images, PROMAX_SIZE } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "RadioImages is a dental imaging center in DHA Lahore focused on 3D CBCT, OPG, CEPH and Planmeca technology.",
  path: "/about",
  keywords: ["about RadioImages", "dental radiology Lahore"],
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About RadioImages"
        title="Specialist dental imaging with a calm, clinical standard"
        description="We help patients understand their scans and give referring dentists clear, usable imaging — from 3D CBCT to OPG, CEPH and guided surgery support."
        image={images.dentalTeam}
        imageAlt="Professional dental clinic team"
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
                  alt="Dentist providing patient care"
                  width={1000}
                  height={700}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.opgScreen}
                  alt="Dental OPG X-ray imaging"
                  width={500}
                  height={400}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={images.promax}
                  alt="Planmeca ProMax 3D Classic"
                  width={PROMAX_SIZE.width}
                  height={PROMAX_SIZE.height}
                  className="h-40 w-full bg-white object-contain p-2"
                  sizes="200px"
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
                  should receive reliable digital datasets.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-[1.75rem] bg-paper-warm p-8 ring-1 ring-ink/5">
                <h2 className="font-display text-3xl font-semibold">Quality commitment</h2>
                <p className="mt-4 leading-relaxed text-slate">
                  Imaging is performed on the Planmeca ProMax 3D Classic with careful positioning,
                  dose-conscious protocols and digital delivery on USB or printed card.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "3D CBCT technology",
              body: "Planmeca ProMax 3D Classic for precise cone beam imaging and implant planning.",
              image: images.promax,
            },
            {
              title: "OPG & CEPH",
              body: "Panoramic and cephalometric studies for screening and orthodontic planning.",
              image: images.orthoBraces,
            },
            {
              title: "Dentist partnership",
              body: "Built for referring dentists who need dependable imaging and fast contact.",
              image: images.dentistXrayReview,
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="relative overflow-hidden rounded-[1.5rem] bg-ink text-white">
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover opacity-40"
                    sizes="33vw"
                  />
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
