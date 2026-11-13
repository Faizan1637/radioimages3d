import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-indigo py-20 text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="How it works"
            title="Four steps from WhatsApp to your scan"
            description="No website booking form. Your appointment is confirmed personally by our team on WhatsApp."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <article className="h-full rounded-[1.5rem] bg-white/5 p-6 ring-1 ring-white/15 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-ink">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
