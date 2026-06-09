import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

// Authentic client photos arranged as a gap-free mosaic: a large feature tile
// top-left and a wide tile on the bottom row tile cleanly into a 4x3 grid.
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
];

export function Gallery() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Our Work"
        title="Veltacorp in action"
        intro="Real sessions, real energy — see how we bring wellness, fitness and engagement to life for organizations and their teams."
      />

      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
        {images.gallery.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 4) * 0.06}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-line ${spans[i] ?? ""}`}
          >
            <Image
              src={src}
              alt={`Veltacorp wellness session ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
