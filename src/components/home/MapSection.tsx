import { MapPin, Navigation } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LazyMap } from "@/components/ui/LazyMap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Find us easily"
            title="Arrive without extra phone calls for directions"
            description="Exact address on Ghazi Road, DHA Phase 1. One tap opens Google Maps navigation on your phone."
          />
          <div className="mt-8 space-y-4 rounded-[1.5rem] bg-white p-6 ring-1 ring-ink/5">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-brand-deep" />
              <div>
                <p className="text-sm font-semibold text-ink">Clinic address</p>
                <p className="mt-1 text-sm text-slate">{siteConfig.address.full}</p>
              </div>
            </div>
            <p className="text-sm text-slate">
              Hours: {siteConfig.hours.weekdays}. Sunday closed. Parking and entrance details can be
              confirmed on WhatsApp when you book.
            </p>
            <ButtonLink href={siteConfig.maps.directionsUrl} variant="dark" external>
              <Navigation className="h-4 w-4" />
              Open Google Maps directions
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[1.75rem] bg-mist shadow-[0_30px_80px_-45px_rgba(0,0,0,0.5)] ring-1 ring-ink/10">
            <LazyMap />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
