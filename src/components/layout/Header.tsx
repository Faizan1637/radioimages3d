"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Navigation, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navLinks } from "@/lib/content";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="text-white/75">{siteConfig.address.full}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={siteConfig.phones[0].href} className="inline-flex items-center gap-1.5 hover:text-brand-hot">
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phones[0].number}
            </a>
            <span className="hidden text-white/30 sm:inline">|</span>
            <span className="text-white/75">{siteConfig.hours.note}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-paper/90 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-paper/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-ink text-white" : "text-slate hover:bg-mist hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href={siteConfig.maps.directionsUrl} variant="secondary" external>
              <Navigation className="h-4 w-4" />
              Directions
            </ButtonLink>
            <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
              <MessageCircle className="h-4 w-4" />
              Book
            </ButtonLink>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-ink/10 xl:hidden"
            >
              <div className="space-y-1 px-4 py-4 sm:px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-mist"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-3">
                  <ButtonLink href={siteConfig.maps.directionsUrl} variant="secondary" external>
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </ButtonLink>
                  <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
                    <MessageCircle className="h-4 w-4" />
                    Book on WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
