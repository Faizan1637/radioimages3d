import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/content";
import { images } from "@/lib/images";

const accents = [images.medicalTech, images.dentistCare, images.digitalHealth, images.reception];

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
            <article className="group relative overflow-hidden rounded-[1.5rem] bg-ink text-white">
              <div className="absolute inset-0">
                <Image
                  src={accents[index]}
                  alt=""
                  fill
                  className="object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-45"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-ink/70" />
              </div>
              <div className="relative p-7">
                <p className="font-display text-5xl font-semibold text-white/15">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
