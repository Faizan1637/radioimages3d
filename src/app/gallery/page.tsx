import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Equipment, brand and imaging visuals from RadioImages — Planmeca ProMax 3D Classic and clinical materials.",
};

const images = [
  {
    src: "/images/brand/logo-banner.jpg",
    alt: "RadioImages 3D brand banner",
    title: "Brand identity",
  },
  {
    src: "/images/brand/brochure-cover.jpg",
    alt: "RadioImages brochure cover with 3D scan visual",
    title: "Center brochure",
  },
  {
    src: "/images/equipment/promax-classic.jpg",
    alt: "Planmeca ProMax 3D Classic unit",
    title: "Planmeca ProMax 3D Classic",
  },
  {
    src: "/images/equipment/extended-volume.jpg",
    alt: "Extended volume CBCT diagram",
    title: "Extended volume imaging",
  },
  {
    src: "/images/equipment/features-checklist.jpg",
    alt: "Planmeca technology feature list",
    title: "Technology features",
  },
  {
    src: "/images/equipment/clinic-testimonial.jpg",
    alt: "Planmeca clinical brochure imagery",
    title: "Clinical platform",
  },
  {
    src: "/images/forms/referral-3d.jpg",
    alt: "3D CBCT referral form categories",
    title: "3D CBCT referral studies",
  },
  {
    src: "/images/forms/referral-2d.jpg",
    alt: "2D OPG and cephalometric referral options",
    title: "2D OPG & CEPH studies",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Technology and clinical visuals"
        description="Manufacturer and brand imagery currently available. Exterior, reception and team photography can be added after a professional shoot at the center."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.04}>
              <figure className="overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-ink/5">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
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
          Sample clinical scans are shown only with permission and anonymisation. Manufacturer
          brochure testimonials are not republished on this site.
        </p>
      </section>
    </>
  );
}
