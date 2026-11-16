"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Navigation, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { images } from "@/lib/images";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src={images.reception}
            alt="RadioImages 3D reception desk, DHA Lahore"
            fill
            priority
            fetchPriority="high"
            quality={75}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/55" />
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 lg:px-8 lg:pb-16 lg:pt-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/15 backdrop-blur"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Precision 3D Dental Imaging
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            RADIO <span className="text-brand">IMAGES</span> 3D
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-white/65"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg"
          >
            Premium dental imaging — 3D CBCT, OPG and CEPH on the Planmeca ProMax 3D Classic.
            Book in one WhatsApp tap.
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
              Explore technology
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
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/35 via-transparent to-indigo/45 blur-2xl" />
          <div className="relative grid gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="relative row-span-2 min-h-[220px] overflow-hidden rounded-[1.35rem] border border-white/15 bg-white shadow-2xl sm:min-h-[300px]">
                <Image
                  src={images.promax}
                  alt="Planmeca ProMax 3D Classic CBCT unit"
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 1024px) 50vw, 280px"
                  quality={80}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-3">
                  <p className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-brand-hot">
                    <Sparkles className="h-3.5 w-3.5" />
                    3D CBCT
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold sm:text-base">Planmeca ProMax 3D Classic</p>
                </div>
              </div>
              <div className="relative h-[106px] overflow-hidden rounded-[1.35rem] border border-white/15 bg-black sm:h-[146px]">
                <Image
                  src={images.cbctFace}
                  alt="3D CBCT volume with facial overlay and implant planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 280px"
                  quality={75}
                />
              </div>
              <div className="relative h-[106px] overflow-hidden rounded-[1.35rem] border border-white/15 bg-black sm:h-[146px]">
                <Image
                  src={images.cbctViews}
                  alt="3D CBCT cross-sections and rendered jaws"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 280px"
                  quality={75}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1.4fr_0.9fr] gap-2.5">
              <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/15 bg-black sm:h-32">
                <Image
                  src={images.opg}
                  alt="Panoramic OPG dental radiograph of the full mouth"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 60vw, 320px"
                  quality={75}
                />
              </div>
              <div className="relative h-28 overflow-hidden rounded-[1.35rem] border border-white/15 bg-black sm:h-32">
                <Image
                  src={images.ceph}
                  alt="Lateral cephalometric radiograph"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 40vw, 200px"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
