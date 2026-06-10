import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/sanity/getContent";

export async function Hero() {
  const { hero, whyChooseUs, images } = await getContent();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Brand backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue-light via-white to-brand-green-light" />
      <div className="absolute -right-32 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-green/15 blur-3xl" />
      <div className="absolute -left-32 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/15 blur-3xl" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-blue shadow-soft ring-1 ring-line">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {hero.headlineLead}{" "}
              <span className="text-gradient-brand">
                {hero.headlineHighlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-brand-green-dark hover:shadow-soft"
              >
                {hero.primaryCta.label}
                <HiArrowRight />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-13 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-blue ring-1 ring-line transition-all hover:bg-brand-blue-light"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
              {whyChooseUs.slice(0, 3).map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.1} y={32}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-black/5 sm:aspect-[5/5]">
              <Image
                src={images.hero}
                alt="Engaged, healthy and productive corporate team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-5 shadow-card ring-1 ring-line sm:block">
              <p className="font-display text-2xl font-extrabold text-brand-green">
                Healthier teams
              </p>
              <p className="text-sm text-muted">
                Stronger, more productive organizations
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
