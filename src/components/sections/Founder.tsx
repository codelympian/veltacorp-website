import Image from "next/image";
import { HiCheckBadge } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { founder } from "@/data/site";
import { images } from "@/data/images";

export function Founder() {
  return (
    <section className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Photo */}
        <Reveal y={32}>
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-green opacity-90" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-card">
              <Image
                src={images.founder}
                alt={`${founder.name}, ${founder.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white p-4 text-center shadow-card ring-1 ring-line">
              <p className="font-display text-lg font-bold text-ink">
                {founder.name}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {founder.role}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <div className="pt-6 lg:pt-0">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              Founder &amp; Lead Consultant
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Meet {founder.name}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {founder.bio}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 border-l-4 border-brand-green pl-4 text-base font-medium italic leading-relaxed text-ink">
              {founder.vision}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-ink/70">
              Professional Certifications
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {founder.certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-line transition-shadow hover:shadow-soft"
                >
                  <HiCheckBadge
                    className="shrink-0 text-brand-green"
                    size={24}
                  />
                  <span className="text-sm font-semibold text-ink">{cert}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
