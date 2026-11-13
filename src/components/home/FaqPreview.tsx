import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function FaqPreview() {
  const items = faqs.slice(0, 5);

  return (
    <section className="bg-paper-warm py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQs"
            title="Quick answers before you visit"
            description="Safety, referrals, scan times and how you receive images — covered clearly."
          />
        </Reveal>

        <div className="mt-10 space-y-3">
          {items.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group rounded-[1.25rem] bg-white p-5 ring-1 ring-ink/5 open:shadow-lg">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/faqs" className="text-sm font-semibold text-brand-deep hover:underline">
            View all frequently asked questions →
          </Link>
        </div>
      </div>
    </section>
  );
}
