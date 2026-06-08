import { HiCheckCircle } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-brand-blue-dark py-20 text-white sm:py-28">
      {/* Decorative glow */}
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />

      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
            Why Choose Veltacorp
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            The partner organizations trust to deliver real results
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            We combine professional delivery with corporate-focused programs that
            move the metrics that matter — engagement, productivity and culture.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((reason, i) => (
            <Reveal key={reason} delay={(i % 2) * 0.06}>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                <HiCheckCircle className="shrink-0 text-brand-green" size={24} />
                <span className="text-sm font-semibold">{reason}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
