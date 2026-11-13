import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/technology`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/patient-info`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
