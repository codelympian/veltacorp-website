import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/sanity/getContent";

export async function Process() {
  const { process } = await getContent();

  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Our Process"
        title="A clear path from consultation to results"
        intro="A simple, proven four-step approach that keeps every program measurable, professional and tailored to your organization."
      />

      <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Connecting line on desktop */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-blue/30 via-brand-green/40 to-brand-blue/30 lg:block" />

        {process.map((step, i) => (
          <Reveal key={step.step ?? i} delay={i * 0.08}>
            <div className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green font-display text-xl font-extrabold text-white shadow-card">
                {step.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
