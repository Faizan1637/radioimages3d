import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
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
      >
        <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
          Talk to our team
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-[1.75rem] bg-white p-8 ring-1 ring-ink/5">
              <h2 className="font-display text-3xl font-semibold">Our mission</h2>
              <p className="mt-4 text-slate leading-relaxed">
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
              <p className="mt-4 text-slate leading-relaxed">
                Imaging is performed on the Planmeca ProMax 3D Classic with careful positioning,
                dose-conscious protocols and digital delivery on USB or printed card. We focus on
                diagnostic accuracy and a respectful, unhurried patient experience.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Technology-led",
              body: "CBCT, OPG, cephalometrics, 3D face photo, model scanning and surgical guide workflows.",
            },
            {
              title: "Patient comfort",
              body: "Clear explanations, short visits and support for children attending orthodontic scans.",
            },
            {
              title: "Professional partnership",
              body: "Built for referring dentists and clinics who need dependable imaging and fast contact.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[1.5rem] bg-ink p-6 text-white">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-[1.75rem] border border-dashed border-ink/15 bg-white p-8">
            <h2 className="font-display text-2xl font-semibold">Team & credentials</h2>
            <p className="mt-3 max-w-3xl text-slate leading-relaxed">
              A team and certifications section can be published once approved photos, names and
              licensing details are supplied. Until then, contact us on WhatsApp for professional
              referral enquiries.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
