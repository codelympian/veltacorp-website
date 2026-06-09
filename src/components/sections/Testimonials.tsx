import type { IconType } from "react-icons";
import { FaQuoteLeft } from "react-icons/fa6";
import {
  FaHeartPulse,
  FaPeopleGroup,
  FaArrowTrendUp,
  FaHandshakeSimple,
} from "react-icons/fa6";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/data/site";

// Outcome pillars shown until real client testimonials are added.
const impact: { Icon: IconType; title: string; body: string }[] = [
  {
    Icon: FaHeartPulse,
    title: "Healthier, energized people",
    body: "Wellness programs and fitness initiatives that lift physical and mental wellbeing across your workforce.",
  },
  {
    Icon: FaPeopleGroup,
    title: "Higher engagement & morale",
    body: "Sports, events and team-building experiences that bring people together and raise everyday morale.",
  },
  {
    Icon: FaArrowTrendUp,
    title: "Increased productivity",
    body: "Energized, healthier teams focus longer, collaborate better and consistently perform at a higher level.",
  },
  {
    Icon: FaHandshakeSimple,
    title: "Stronger team culture",
    body: "Shared experiences that build trust, belonging and a culture people are proud to be part of.",
  },
];

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  // Real testimonials view (auto-enabled once data exists)
  if (hasTestimonials) {
    return (
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Testimonials"
          title="What organizations say about us"
          intro="Hear from the teams we've helped become healthier and more engaged."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
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
          ))}
        </div>
      </Section>
    );
  }

  // Value-proposition / outcomes band (no fabricated reviews)
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="The Veltacorp Impact"
        title="What partnering with Veltacorp delivers"
        intro="We measure success by the difference we make to your people and your organization — healthier teams, stronger culture and better performance."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={(i % 4) * 0.08}>
            <div className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-soft">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <p className="max-w-xl font-display text-lg font-semibold sm:text-xl">
            Ready to see these outcomes in your organization?
          </p>
          <Button href="#contact" variant="primary" className="shrink-0">
            Book a Consultation
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
