import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { OpenNow } from "@/components/layout/OpenNow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location & Contact",
  description:
    "Find RadioImages at 73/6 K Block, Phase 1, Ghazi Road, DHA Lahore. Book on WhatsApp, get directions, call 0325-9888999.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & WhatsApp booking"
        title="Book by message. Find us without calling for directions."
        description="Every appointment request goes to our team on WhatsApp. We confirm your slot, share the address and help you arrive prepared."
        image={images.reception}
        imageAlt="Modern dental clinic reception"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
            <MessageCircle className="h-4 w-4" />
            Book Appointment on WhatsApp
          </ButtonLink>
          <ButtonLink href={siteConfig.maps.directionsUrl} variant="ghost" external>
            <Navigation className="h-4 w-4" />
            Get Directions
          </ButtonLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Reveal>
              <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-ink/5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-deep" />
                  <h2 className="font-display text-xl font-semibold">Address</h2>
                </div>
                <p className="mt-3 text-slate">{siteConfig.address.full}</p>
                <p className="mt-3 text-sm text-slate">
                  Ask on WhatsApp for gate, floor and parking notes so you recognise the entrance on
                  arrival. Building photos can be added after a site shoot.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-ink/5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-brand-deep" />
                    <h2 className="font-display text-xl font-semibold">Hours</h2>
                  </div>
                  <OpenNow />
                </div>
                <p className="mt-3 text-slate">{siteConfig.hours.note}</p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="rounded-[1.5rem] bg-ink p-6 text-white">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand" />
                  <h2 className="font-display text-xl font-semibold">Phone</h2>
                </div>
                <ul className="mt-4 space-y-2">
                  {siteConfig.phones.map((phone) => (
                    <li key={phone.number}>
                      <a href={phone.href} className="text-brand-hot hover:underline">
                        {phone.number}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/65">
                  Prefer WhatsApp for appointment booking — we reply with slots, address, map link
                  and what to bring.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-ink/10">
              <iframe
                title="RadioImages Google Map"
                src={siteConfig.maps.embedUrl}
                className="h-[520px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
