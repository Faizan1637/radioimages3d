import Image from "next/image";
import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt = "",
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority={priority}
            quality={65}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-hot">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
