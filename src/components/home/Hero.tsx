"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Navigation, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/equipment/promax-classic.jpg"
          alt="Planmeca ProMax 3D Classic dental imaging unit"
          fill
          priority
          className="object-cover object-[center_20%] opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo/35 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            DHA Lahore · Planmeca ProMax 3D Classic
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            RADIO <span className="text-brand">IMAGES</span> 3D
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-white/65"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Advanced dental imaging and computer guided surgical solutions — explained in plain
            language, booked in one WhatsApp tap, delivered on USB or printed card.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href={buildWhatsAppUrl()} variant="whatsapp" external>
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </ButtonLink>
            <ButtonLink href={siteConfig.maps.directionsUrl} variant="ghost" external>
              <Navigation className="h-4 w-4" />
              Get Directions
            </ButtonLink>
            <ButtonLink href="/technology" variant="secondary">
              See our technology
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {["3D CBCT", "OPG", "CEPH", "Surgical Guides"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.06 }}
                className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-ink"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-indigo/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm">
            <Image
              src="/images/brand/brochure-cover.jpg"
              alt="RadioImages dental imaging brochure with 3D scan preview"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-hot">Computer guided</p>
              <p className="mt-1 font-display text-xl font-semibold">Surgical solutions & precise 3D diagnosis</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
