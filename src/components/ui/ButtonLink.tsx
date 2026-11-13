import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-ink hover:bg-brand-hot shadow-[0_12px_30px_-12px_rgba(232,145,42,0.7)]",
  secondary:
    "bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/25 hover:bg-paper",
  ghost: "bg-transparent text-white ring-1 ring-white/25 hover:bg-white/10",
  whatsapp: "bg-[#25D366] text-ink hover:bg-[#2fe472]",
  dark: "bg-ink text-white hover:bg-ink-soft",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
