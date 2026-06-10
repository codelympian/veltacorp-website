import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaHeartPulse,
  FaDumbbell,
  FaTableTennisPaddleBall,
  FaTrophy,
  FaPeopleGroup,
} from "react-icons/fa6";
import { HiCheck } from "react-icons/hi2";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/sanity/getContent";

const iconMap: Record<string, IconType> = {
  wellness: FaHeartPulse,
  fitness: FaDumbbell,
  racket: FaTableTennisPaddleBall,
  events: FaTrophy,
  team: FaPeopleGroup,
};

export async function Services() {
  const { services, images } = await getContent();

  return (
    <Section id="services" className="bg-white">
      <SectionHeading
        eyebrow="What We Do"
        title="Wellness solutions built for the workplace"
        intro="Five integrated program areas that help your organization build a healthier, more engaged and higher-performing workforce."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? FaHeartPulse;
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={images.service[service.icon] ?? images.hero}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/70 via-brand-blue-dark/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand-green shadow-soft">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-ink/85"
                      >
                        <HiCheck
                          className="shrink-0 text-brand-green"
                          size={18}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}

        {/* CTA card to balance the grid */}
        <Reveal delay={0.16}>
          <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green p-8 text-white shadow-card">
            <h3 className="font-display text-xl font-bold">
              Need a tailored program?
            </h3>
            <p className="mt-2 text-sm text-white/90">
              We design wellness and engagement programs around your team&apos;s
              goals, size and culture.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex h-12 w-fit items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-brand-blue transition-transform hover:scale-[1.03]"
            >
              Request a Proposal
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
