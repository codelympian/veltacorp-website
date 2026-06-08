import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/** Standardized section heading: small eyebrow + large title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Page section wrapper with consistent vertical rhythm + anchor id. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
