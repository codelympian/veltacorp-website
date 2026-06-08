import { FaQuoteLeft } from "react-icons/fa6";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Testimonials"
        title="What organizations say about us"
        intro={
          hasTestimonials
            ? "Hear from the teams we've helped become healthier and more engaged."
            : "We're building partnerships with forward-thinking organizations — reviews from our corporate partners will appear here."
        }
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {hasTestimonials
          ? testimonials.map((t, i) => (
              <Reveal key={t.author} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft ring-1 ring-line">
                  <FaQuoteLeft className="text-brand-green/40" size={28} />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <p className="font-semibold text-ink">{t.author}</p>
                    <p className="text-sm text-muted">
                      {t.title}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))
          : Array.from({ length: 3 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl bg-white/70 p-7 ring-1 ring-line">
                  <FaQuoteLeft className="text-brand-green/30" size={28} />
                  <div className="mt-5 flex-1 space-y-3">
                    <div className="h-3 w-full rounded-full bg-line" />
                    <div className="h-3 w-11/12 rounded-full bg-line" />
                    <div className="h-3 w-9/12 rounded-full bg-line" />
                  </div>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <div className="h-3 w-28 rounded-full bg-line" />
                    <div className="mt-2 h-2.5 w-36 rounded-full bg-line/70" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
      </div>

      {!hasTestimonials && (
        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm font-medium text-muted">
            Be among the first to partner with Veltacorp.{" "}
            <a href="#contact" className="font-semibold text-brand-blue hover:underline">
              Book a consultation →
            </a>
          </p>
        </Reveal>
      )}
    </Section>
  );
}
