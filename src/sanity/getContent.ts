import { cache } from "react";
import { client } from "./client";
import { urlFor } from "./image";
import { isSanityConfigured } from "./env";
import type { SanityImageSource } from "@sanity/image-url";

import * as site from "@/data/site";
import { images as staticImages } from "@/data/images";

/* ----------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------- */

function img(source: SanityImageSource | undefined | null, width: number) {
  try {
    if (!source || !(source as { asset?: unknown }).asset) return null;
    return urlFor(source).width(width).quality(80).auto("format").url();
  } catch {
    return null;
  }
}

const pick = <T>(value: T | undefined | null, fallback: T): T =>
  value === undefined || value === null || value === "" ? fallback : value;

const phoneHrefFrom = (phone: string) =>
  `tel:${phone.replace(/[^\d+]/g, "")}`;

const whatsappLinkFrom = (number: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(
    "Hello Veltacorp, I'd like to learn more about your corporate wellness programs.",
  )}`;

const DEFAULT_INDUSTRY_ICON: Record<string, string> = {
  Banking: "banking",
  Telecommunications: "telecom",
  Technology: "technology",
  Insurance: "insurance",
  Manufacturing: "manufacturing",
  "Government Agencies": "government",
  "Oil & Gas": "oilgas",
  "Educational Institutions": "education",
  Startups: "startup",
};

const HERO_LEAD_DEFAULT = "Transform Workplace Wellness Through";
const HERO_HIGHLIGHT_DEFAULT = "Sport, Fitness & Engagement";

/* ----------------------------------------------------------------------------
 * Default content (used when Sanity isn't configured or a field is empty)
 * ------------------------------------------------------------------------- */

function defaults() {
  return {
    company: {
      ...site.company,
      whatsappLink: site.company.whatsapp.link,
    },
    hero: {
      eyebrow: site.hero.eyebrow,
      headlineLead: HERO_LEAD_DEFAULT,
      headlineHighlight: HERO_HIGHLIGHT_DEFAULT,
      subheadline: site.hero.subheadline,
      primaryCta: site.hero.primaryCta,
      secondaryCta: site.hero.secondaryCta,
    },
    about: {
      lead: site.about.lead,
      body: site.about.body,
      stats: [
        { value: "5", label: "Core program areas" },
        { value: "9+", label: "Industries served" },
        { value: "100%", label: "Tailored to your team" },
      ],
    },
    founder: {
      name: site.founder.name,
      role: site.founder.role,
      bio: site.founder.bio,
      vision: site.founder.vision,
      certifications: [...site.founder.certifications],
    },
    services: site.services.map((s) => ({
      title: s.title,
      summary: s.summary,
      icon: s.icon,
      items: [...s.items],
    })),
    whyChooseUs: [...site.whyChooseUs],
    industries: site.industries.map((name) => ({
      name,
      icon: DEFAULT_INDUSTRY_ICON[name] ?? "startup",
    })),
    process: site.process.map((p) => ({
      step: p.step,
      title: p.title,
      description: p.description,
    })),
    certifications: site.certifications.map((c) => ({
      name: c.name,
      logo: null as string | null,
    })),
    testimonials: site.testimonials.map((t) => ({ ...t })),
    contact: {
      heading: site.contact.heading,
      subheading: site.contact.subheading,
      web3formsAccessKey: site.contact.web3formsAccessKey,
    },
    seo: {
      metaTitle:
        "Veltacorp Wellness & Fitness Solutions | Corporate Wellness in Lagos",
      metaDescription:
        "Veltacorp helps organizations build healthier, happier and more productive teams through corporate wellness programs, fitness initiatives, team-building and racket sports experiences.",
    },
    images: {
      hero: staticImages.hero as string,
      about: staticImages.about as string,
      founder: staticImages.founder as string,
      service: { ...staticImages.service } as Record<string, string>,
      gallery: [...staticImages.gallery] as string[],
    },
  };
}

export type SiteContent = ReturnType<typeof defaults>;

/* ----------------------------------------------------------------------------
 * GROQ query — pulls everything in a single request
 * ------------------------------------------------------------------------- */

const QUERY = `{
  "settings": *[_type == "siteSettings"][0],
  "hero": *[_type == "hero"][0],
  "about": *[_type == "about"][0],
  "founder": *[_type == "founder"][0],
  "contact": *[_type == "contactSection"][0],
  "services": *[_type == "service"] | order(order asc),
  "reasons": *[_type == "whyChooseReason"] | order(order asc),
  "industries": *[_type == "industry"] | order(order asc),
  "process": *[_type == "processStep"] | order(order asc),
  "gallery": *[_type == "galleryImage"] | order(order asc),
  "certifications": *[_type == "certification"] | order(order asc),
  "testimonials": *[_type == "testimonial"] | order(order asc)
}`;

/* ----------------------------------------------------------------------------
 * getContent — cached per request; merges Sanity over defaults
 * ------------------------------------------------------------------------- */

export const getContent = cache(async (): Promise<SiteContent> => {
  const d = defaults();
  if (!isSanityConfigured) return d;

  let data: Record<string, never> | null = null;
  try {
    data = await client.fetch(
      QUERY,
      {},
      { next: { tags: ["content"], revalidate: 60 } },
    );
  } catch {
    return d; // network/parse failure → defaults keep the site alive
  }
  if (!data) return d;

  const s = data as Record<string, any>;
  const settings = s.settings ?? {};
  const phone = pick<string>(settings.phone, d.company.phone);
  const whatsappNumber = pick<string>(
    settings.whatsappNumber,
    site.company.whatsapp.number,
  );

  const company = {
    name: pick(settings.name, d.company.name),
    shortName: pick(settings.shortName, d.company.shortName),
    tagline: pick(settings.tagline, d.company.tagline),
    location: pick(settings.location, d.company.location),
    email: pick(settings.email, d.company.email),
    phone,
    phoneHref: phoneHrefFrom(phone),
    copyrightYear: pick(settings.copyrightYear, d.company.copyrightYear),
    social: {
      instagram: pick(settings.instagram, d.company.social.instagram),
      linkedin: pick(settings.linkedin, d.company.social.linkedin),
      facebook: pick(settings.facebook, d.company.social.facebook),
    },
    whatsapp: { number: whatsappNumber, link: whatsappLinkFrom(whatsappNumber) },
    whatsappLink: whatsappLinkFrom(whatsappNumber),
  };

  const services =
    Array.isArray(s.services) && s.services.length
      ? s.services.map((x: any) => ({
          title: x.title,
          summary: pick(x.summary, ""),
          icon: pick(x.icon, "wellness"),
          items: Array.isArray(x.items) ? x.items : [],
        }))
      : d.services;

  // Service feature images keyed by icon (fall back to static per-icon)
  const serviceImages: Record<string, string> = { ...d.images.service };
  if (Array.isArray(s.services)) {
    for (const x of s.services) {
      const url = img(x.image, 1200);
      if (x.icon && url) serviceImages[x.icon] = url;
    }
  }

  const gallery =
    Array.isArray(s.gallery) && s.gallery.length
      ? s.gallery.map((g: any) => img(g.image, 1400)).filter(Boolean)
      : d.images.gallery;

  return {
    company,
    hero: {
      eyebrow: pick(s.hero?.eyebrow, d.hero.eyebrow),
      headlineLead: pick(s.hero?.headlineLead, d.hero.headlineLead),
      headlineHighlight: pick(
        s.hero?.headlineHighlight,
        d.hero.headlineHighlight,
      ),
      subheadline: pick(s.hero?.subheadline, d.hero.subheadline),
      primaryCta: {
        label: pick(s.hero?.primaryCta?.label, d.hero.primaryCta.label),
        href: pick(s.hero?.primaryCta?.href, d.hero.primaryCta.href),
      },
      secondaryCta: {
        label: pick(s.hero?.secondaryCta?.label, d.hero.secondaryCta.label),
        href: pick(s.hero?.secondaryCta?.href, d.hero.secondaryCta.href),
      },
    },
    about: {
      lead: pick(s.about?.lead, d.about.lead),
      body: pick(s.about?.body, d.about.body),
      stats:
        Array.isArray(s.about?.stats) && s.about.stats.length
          ? s.about.stats.map((st: any) => ({ value: st.value, label: st.label }))
          : d.about.stats,
    },
    founder: {
      name: pick(s.founder?.name, d.founder.name),
      role: pick(s.founder?.role, d.founder.role),
      bio: pick(s.founder?.bio, d.founder.bio),
      vision: pick(s.founder?.vision, d.founder.vision),
      certifications:
        Array.isArray(s.founder?.certifications) &&
        s.founder.certifications.length
          ? s.founder.certifications
          : d.founder.certifications,
    },
    services,
    whyChooseUs:
      Array.isArray(s.reasons) && s.reasons.length
        ? s.reasons.map((r: any) => r.text)
        : d.whyChooseUs,
    industries:
      Array.isArray(s.industries) && s.industries.length
        ? s.industries.map((i: any) => ({
            name: i.name,
            icon: pick(i.icon, "startup"),
          }))
        : d.industries,
    process:
      Array.isArray(s.process) && s.process.length
        ? s.process.map((p: any) => ({
            step: p.step,
            title: p.title,
            description: p.description,
          }))
        : d.process,
    certifications:
      Array.isArray(s.certifications) && s.certifications.length
        ? s.certifications.map((c: any) => ({
            name: c.name,
            logo: img(c.logo, 160),
          }))
        : d.certifications,
    testimonials:
      Array.isArray(s.testimonials) && s.testimonials.length
        ? s.testimonials.map((t: any) => ({
            quote: t.quote,
            author: pick(t.author, ""),
            title: pick(t.title, ""),
            company: pick(t.company, ""),
          }))
        : d.testimonials,
    contact: {
      heading: pick(s.contact?.heading, d.contact.heading),
      subheading: pick(s.contact?.subheading, d.contact.subheading),
      web3formsAccessKey: pick(
        settings.web3formsAccessKey,
        d.contact.web3formsAccessKey,
      ),
    },
    seo: {
      metaTitle: pick(settings.metaTitle, d.seo.metaTitle),
      metaDescription: pick(settings.metaDescription, d.seo.metaDescription),
    },
    images: {
      hero: img(s.hero?.image, 1400) ?? d.images.hero,
      about: img(s.about?.image, 1400) ?? d.images.about,
      founder: img(s.founder?.photo, 1000) ?? d.images.founder,
      service: serviceImages,
      gallery: gallery as string[],
    },
  } as SiteContent;
});
