import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/sanity/getContent";

export async function About() {
  const { about, images } = await getContent();

  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal y={32} className="order-last lg:order-first">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-black/5">
              <Image
                src={images.about}
                alt="Corporate wellness session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-6 hidden rounded-2xl bg-brand-blue px-6 py-4 text-white shadow-card sm:block">
              <p className="font-display text-lg font-bold leading-tight">
                Corporate
                <br />
                Wellness Partner
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              Who We Are
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              A trusted partner for healthier,
              <span className="text-brand-blue"> high-performing</span>{" "}
              workplaces
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {about.lead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base font-medium leading-relaxed text-ink">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-surface p-5 text-center ring-1 ring-line"
                >
                  <dt className="font-display text-2xl font-extrabold text-brand-green sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
