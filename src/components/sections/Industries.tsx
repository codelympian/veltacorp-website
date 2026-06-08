import type { IconType } from "react-icons";
import {
  FaBuildingColumns,
  FaTowerCell,
  FaMicrochip,
  FaShieldHalved,
  FaIndustry,
  FaLandmark,
  FaOilWell,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa6";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/site";

const iconFor: Record<string, IconType> = {
  Banking: FaBuildingColumns,
  Telecommunications: FaTowerCell,
  Technology: FaMicrochip,
  Insurance: FaShieldHalved,
  Manufacturing: FaIndustry,
  "Government Agencies": FaLandmark,
  "Oil & Gas": FaOilWell,
  "Educational Institutions": FaGraduationCap,
  Startups: FaRocket,
};

export function Industries() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Trusted across every sector"
        intro="From banks and telecoms to government agencies and fast-growing startups, our programs scale to organizations of every size."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {industries.map((name, i) => {
          const Icon = iconFor[name] ?? FaRocket;
          return (
            <Reveal key={name} delay={(i % 3) * 0.06}>
              <div className="group flex items-center gap-4 rounded-2xl bg-surface p-5 ring-1 ring-line transition-all hover:bg-brand-blue-light hover:ring-brand-blue/30">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-soft transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-ink sm:text-base">
                  {name}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
