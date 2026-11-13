import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Professional dental imaging and clinic visuals from RadioImages — technology, care environment and Planmeca equipment.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual look at modern dental imaging"
        description="High-quality clinical and technology imagery. Exterior and team photos from the DHA center can be added after a professional shoot."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.03} className="mb-5 break-inside-avoid">
              <figure className="group overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink/5">
                <div
                  className={`relative overflow-hidden bg-mist ${
                    index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
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
        <p className="mt-10 text-sm text-slate">
          Stock photography is used for atmosphere. Manufacturer brochure testimonials are not
          republished. Center-specific photography can replace placeholders anytime.
        </p>
      </section>
    </>
  );
}
