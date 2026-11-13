import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#e8912a",
    lang: "en-PK",
    icons: [
      {
        src: "/images/dental/promax-classic-640.jpg",
        sizes: "640x640",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
