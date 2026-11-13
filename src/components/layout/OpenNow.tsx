"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export function OpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const isOpenDay = siteConfig.hours.openNowDays.includes(day);
      setOpen(isOpenDay && hour >= siteConfig.hours.openHour && hour < siteConfig.hours.closeHour);
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        open ? "bg-emerald-500/15 text-emerald-700" : "bg-rose-500/10 text-rose-700"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${open ? "bg-emerald-500" : "bg-rose-500"}`} />
      {open ? "Open now" : "Closed now"}
    </span>
  );
}
