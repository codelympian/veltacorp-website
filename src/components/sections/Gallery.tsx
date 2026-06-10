import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/sanity/getContent";

export async function Gallery() {
  const { images } = await getContent();

  if (!images.gallery.length) return null;

  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Our Work"
        title="Veltacorp in action"
        intro="Real sessions, real energy — see how we bring wellness, fitness and engagement to life for organizations and their teams."
      />

      {/* Uniform responsive grid — robust to any number of photos added in the CMS */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.gallery.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 4) * 0.06}
            className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-line"
          >
            <Image
              src={src}
              alt={`Veltacorp wellness session ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
