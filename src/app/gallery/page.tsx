import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages, images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "3D CBCT, OPG, CEPH and Planmeca ProMax 3D Classic dental imaging visuals from RadioImages.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <PageHero
        eyebrow="Gallery"
        title="Dental imaging — CBCT, OPG, CEPH & Planmeca"
        description="Focused dental radiology imagery only. Center exterior and team photos can replace placeholders after a professional shoot."
        image={images.promax}
        imageAlt="Planmeca ProMax 3D Classic"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.03} className="mb-5 break-inside-avoid">
              <figure className="group overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink/5">
                <div
                  className={`relative overflow-hidden ${
                    image.src === images.promax
                      ? "aspect-square bg-white"
                      : index % 3 === 0
                        ? "aspect-[4/5] bg-mist"
                        : index % 3 === 1
                          ? "aspect-square bg-mist"
                          : "aspect-[4/3] bg-mist"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    quality={70}
                    className={`transition duration-700 group-hover:scale-105 ${
                      image.src === images.promax ? "object-contain p-6" : "object-cover"
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="font-display text-lg font-semibold">{image.title}</p>
                  <p className="mt-1 text-sm text-slate">{image.alt}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
