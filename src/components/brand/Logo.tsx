import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-ink";
  const sub = variant === "light" ? "text-white/70" : "text-slate";

  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`} aria-label="RadioImages home">
      <span className="relative grid h-11 w-11 place-items-center rounded-[0.85rem] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition group-hover:scale-[1.03]">
        <span
          className="absolute inset-0 rounded-[0.85rem]"
          style={{
            clipPath: "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
            background: "white",
          }}
        />
        <span className="relative font-display text-lg font-bold tracking-tight text-brand">RI</span>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-semibold tracking-tight ${text}`}>
          RADIO <span className="text-brand">IMAGES</span> <span className={text}>3D</span>
        </span>
        <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Dental Imaging Center
        </span>
      </span>
    </Link>
  );
}
