import Image from "next/image";
import { images } from "@/lib/images";

const strip = [
  { src: images.promax, alt: "Planmeca ProMax 3D Classic" },
  { src: images.opgPatient, alt: "OPG panoramic dental scan" },
  { src: images.opgScreen, alt: "Dental OPG X-ray on screen" },
  { src: images.dentistXrayReview, alt: "Dentist reviewing dental X-rays" },
  { src: images.orthoBraces, alt: "Orthodontic CEPH imaging support" },
  { src: images.dentalImplantModel, alt: "Dental implant planning model" },
];

export function ImageStrip() {
  const loop = [...strip, ...strip];

  return (
    <section className="overflow-hidden py-10" aria-label="Dental imaging highlights">
      <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">
          3D CBCT · OPG · CEPH · Dentist imaging
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-24" />
        <div className="marquee-track flex w-max gap-4 px-4">
          {loop.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="relative h-44 w-72 shrink-0 overflow-hidden rounded-[1.25rem] bg-white sm:h-52 sm:w-80"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                quality={70}
                className={item.src === images.promax ? "object-contain p-3" : "object-cover"}
                sizes="320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
