import { MessageCircle, Navigation, Usb } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-10">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />
          <div className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-hot">
                Ready when you are
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Book your scan. Walk in with confidence.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">
                Message us on WhatsApp, confirm your slot, visit {siteConfig.address.line1}, and
                leave with images on USB or printed card for your dentist.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </ButtonLink>
                <ButtonLink href={siteConfig.maps.directionsUrl} variant="ghost" external>
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-ink">
                  <Usb className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">Image delivery</p>
                  <p className="text-sm text-white/65">USB · Printed card · DVD · Email / Cloud</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {siteConfig.phones.map((phone) => (
                  <li key={phone.number}>
                    Call{" "}
                    <a href={phone.href} className="font-semibold text-brand-hot hover:underline">
                      {phone.number}
                    </a>
                  </li>
                ))}
                <li>{siteConfig.hours.note}</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
