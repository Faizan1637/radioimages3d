"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const strip = [
  { src: images.dentistCare, alt: "Dental professional with patient" },
  { src: images.orthodontics, alt: "Orthodontic care environment" },
  { src: images.gloveCare, alt: "Clinical hygiene standards" },
  { src: images.smilePatient, alt: "Comfortable patient experience" },
  { src: images.cleanClinic, alt: "Modern clinic interior" },
  { src: images.digitalHealth, alt: "Digital health workflow" },
];

export function ImageStrip() {
  return (
    <section className="overflow-hidden py-10">
      <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
          A premium clinical experience
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-24" />
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...strip, ...strip].map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="relative h-44 w-72 shrink-0 overflow-hidden rounded-[1.25rem] sm:h-52 sm:w-80"
            >
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="320px" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
