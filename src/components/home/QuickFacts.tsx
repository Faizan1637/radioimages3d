import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { OpenNow } from "@/components/layout/OpenNow";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

const facts = [
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address.full,
    href: siteConfig.maps.directionsUrl,
  },
  {
    icon: Clock3,
    label: "Hours",
    value: "Mon–Sat 10 AM – 10 PM",
    extra: true,
  },
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.phones[0].number,
    href: siteConfig.phones[0].href,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Book a slot instantly",
    href: buildWhatsAppUrl(),
  },
];

export function QuickFacts() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-3 rounded-[1.75rem] bg-white p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] ring-1 ring-ink/5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            const inner = (
              <div className="flex h-full items-start gap-3 rounded-[1.25rem] bg-paper px-4 py-4 transition hover:bg-paper-warm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-ink text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink">{fact.value}</p>
                  {"extra" in fact && fact.extra ? (
                    <div className="mt-2">
                      <OpenNow />
                    </div>
                  ) : null}
                </div>
              </div>
            );

            return fact.href ? (
              <a key={fact.label} href={fact.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={fact.label}>{inner}</div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
