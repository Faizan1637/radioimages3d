import Link from "next/link";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navLinks, services } from "@/lib/content";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-indigo/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Premium dental imaging in DHA Lahore — 3D CBCT, OPG, cephalometric studies and
              computer guided surgical solutions on the Planmeca ProMax 3D Classic.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["3D CBCT", "OPG", "CEPH"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
                <MessageCircle className="h-4 w-4" />
                Book Appointment
              </ButtonLink>
              <ButtonLink href={siteConfig.maps.directionsUrl} variant="ghost" external>
                <Navigation className="h-4 w-4" />
                Get Directions
              </ButtonLink>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-hot">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-brand-hot">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-hot">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Visit & Call</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{siteConfig.address.full}</span>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone.number} className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a href={phone.href} className="hover:text-brand-hot">
                    {phone.number}
                  </a>
                </li>
              ))}
              <li>
                <p className="text-white/50">Hours</p>
                <p className="mt-1 text-white">{siteConfig.hours.weekdays}</p>
                <p className="text-white/70">Sunday closed</p>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Popular services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Imaging information is educational and does not replace clinical advice from your dentist.</p>
        </div>
      </div>
    </footer>
  );
}
