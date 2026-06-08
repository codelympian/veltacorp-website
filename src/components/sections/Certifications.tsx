import Image from "next/image";
import { FaAward } from "react-icons/fa6";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { certifications } from "@/data/site";

export function Certifications() {
  return (
    <Section id="certifications" className="bg-white">
      <SectionHeading
        eyebrow="Certifications & Partners"
        title="Professionally certified, professionally delivered"
        intro="Our programs are led by certified wellness and sports professionals — so your organization gets safe, credible and high-quality delivery."
      />

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={(i % 4) * 0.06}>
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-surface p-6 text-center ring-1 ring-line transition-all hover:-translate-y-1 hover:shadow-card">
              {cert.logo ? (
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              ) : (
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-soft">
                  <FaAward size={28} />
                </span>
              )}
              <p className="text-sm font-semibold leading-snug text-ink">
                {cert.name}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Future partners placeholder */}
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface/50 p-8 text-center">
          <p className="text-sm font-medium text-muted">
            Future partner logos &amp; accreditation badges
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-12 w-28 rounded-lg bg-white ring-1 ring-line"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
