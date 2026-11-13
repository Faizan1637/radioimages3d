import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/content";

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Why RadioImages"
          title="Built for trust, speed and diagnostic confidence"
          description="Technology patients can understand. Delivery dentists can rely on. A DHA location that is easy to find."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {whyChoose.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="relative overflow-hidden rounded-[1.5rem] bg-ink p-7 text-white">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/20 blur-2xl" />
              <p className="font-display text-5xl font-semibold text-white/10">0{index + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
