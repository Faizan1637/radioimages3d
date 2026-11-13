"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

type LazyMapProps = {
  title?: string;
  className?: string;
  heightClass?: string;
};

export function LazyMap({
  title = "RadioImages location map",
  className = "",
  heightClass = "h-[360px] sm:h-[420px]",
}: LazyMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className={`flex w-full flex-col items-center justify-center gap-3 bg-mist text-ink transition hover:bg-paper-warm ${heightClass} ${className}`}
        aria-label="Load Google Map"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-brand">
          <MapPin className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold">Load interactive map</span>
        <span className="max-w-xs px-4 text-center text-xs text-slate">
          Opens Google Maps embed for {siteConfig.address.full}
        </span>
      </button>
    );
  }

  return (
    <iframe
      title={title}
      src={siteConfig.maps.embedUrl}
      className={`w-full border-0 ${heightClass} ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
