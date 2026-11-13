import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock3, MessageCircle, Navigation, Usb } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { bookScanMessage, buildWhatsAppUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Imaging service" title={service.title} description={service.summary}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={buildWhatsAppUrl(bookScanMessage(service.shortTitle))}
            variant="whatsapp"
            external
          >
            <MessageCircle className="h-4 w-4" />
            Book {service.shortTitle} on WhatsApp
          </ButtonLink>
          <ButtonLink href={siteConfig.maps.directionsUrl} variant="ghost" external>
            <Navigation className="h-4 w-4" />
            Get Directions
          </ButtonLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Reveal>
              <article className="rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
                <h2 className="font-display text-2xl font-semibold">What it is</h2>
                <p className="mt-3 leading-relaxed text-slate">{service.whatItIs}</p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
                <h2 className="font-display text-2xl font-semibold">How the scan works</h2>
                <p className="mt-3 leading-relaxed text-slate">{service.howItWorks}</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-[1.5rem] bg-paper-warm p-7 ring-1 ring-ink/5">
                <h2 className="font-display text-2xl font-semibold">When it is recommended</h2>
                <ul className="mt-4 space-y-2">
                  {service.whenRecommended.map((item) => (
                    <li key={item} className="flex gap-3 text-slate">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <article className="rounded-[1.5rem] bg-ink p-7 text-white">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-brand" />
                  <h2 className="font-display text-xl font-semibold">Duration</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.duration}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Usb className="h-5 w-5 text-brand" />
                  <h2 className="font-display text-xl font-semibold">Results delivery</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.delivery}</p>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
                <h2 className="font-display text-xl font-semibold">Preparation</h2>
                <ul className="mt-4 space-y-2 text-sm text-slate">
                  {service.preparation.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="rounded-[1.5rem] bg-white p-7 ring-1 ring-ink/5">
                <h2 className="font-display text-xl font-semibold">Typical uses</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.typicalUses.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-paper-warm px-3 py-1 text-xs font-medium text-ink ring-1 ring-ink/10"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
