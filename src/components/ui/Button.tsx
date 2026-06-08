import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white shadow-soft hover:bg-brand-green-dark focus-visible:outline-brand-green",
  secondary:
    "bg-brand-blue text-white shadow-soft hover:bg-brand-blue-dark focus-visible:outline-brand-blue",
  ghost:
    "bg-white text-brand-blue ring-1 ring-line hover:ring-brand-blue/40 hover:bg-brand-blue-light focus-visible:outline-brand-blue",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
