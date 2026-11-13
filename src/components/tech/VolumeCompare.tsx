"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function VolumeCompare() {
  const [extended, setExtended] = useState(true);

  return (
    <div className="rounded-[1.75rem] bg-indigo p-6 text-white sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-hot">
            Interactive volume compare
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold">Standard Ø8 vs Extended Ø11</h3>
        </div>
        <button
          type="button"
          onClick={() => setExtended((v) => !v)}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Show {extended ? "standard Ø8 cm" : "extended Ø11 cm"}
        </button>
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-white/5" />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/35"
            animate={{ width: "62%", height: "62%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand"
            animate={{
              width: extended ? "86%" : "62%",
              height: extended ? "86%" : "62%",
              opacity: extended ? 1 : 0.35,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
          <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-brand/40 to-white/10" />
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/50 px-3 py-1 text-xs">
            {extended ? "Ø11 cm extended field" : "Ø8 cm standard field"}
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-white/75 sm:text-base">
          <p>
            The extended volume option increases imaging diameter from{" "}
            <strong className="text-white">Ø8 × 8 cm</strong> to{" "}
            <strong className="text-white">Ø11 × 8 cm</strong>, capturing a larger diagnostic area
            without increasing patient dose.
          </p>
          <p>
            That means more of the dental arches and wisdom-tooth regions can be assessed in a
            single volume — useful for implants, impactions and broader jaw studies.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Ø8 × 8 cm</span>
            <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink">
              Ø11 × 8 cm extended
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
