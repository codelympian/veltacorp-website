import { defineField, defineType } from "sanity";
import {
  HiOutlineCog,
  HiOutlineSparkles,
  HiOutlineInformationCircle,
  HiOutlineUser,
  HiOutlineEnvelope,
} from "react-icons/hi2";

/** Global company / contact / SEO settings. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: HiOutlineCog,
  groups: [
    { name: "company", title: "Company", default: true },
    { name: "contact", title: "Contact" },
    { name: "social", title: "Social" },
    { name: "seo", title: "SEO" },
    { name: "advanced", title: "Advanced" },
  ],
  fields: [
    defineField({ name: "name", title: "Company name", type: "string", group: "company", validation: (r) => r.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", group: "company" }),
    defineField({ name: "tagline", title: "Tagline", type: "string", group: "company" }),
    defineField({ name: "copyrightYear", title: "Copyright year", type: "number", group: "company" }),

    defineField({ name: "location", title: "Location", type: "string", group: "contact" }),
    defineField({ name: "email", title: "Email", type: "string", group: "contact" }),
    defineField({ name: "phone", title: "Phone (display)", type: "string", description: "e.g. +234 706 457 1419", group: "contact" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp number (digits only)", type: "string", description: "e.g. 2347064571419 — no spaces or +", group: "contact" }),

    defineField({ name: "instagram", title: "Instagram URL", type: "url", group: "social" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url", group: "social" }),
    defineField({ name: "facebook", title: "Facebook URL", type: "url", group: "social" }),

    defineField({ name: "metaTitle", title: "Meta title", type: "string", group: "seo" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 3, group: "seo" }),

    defineField({ name: "web3formsAccessKey", title: "Web3Forms access key", type: "string", description: "Contact form delivery key", group: "advanced" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});

/** Hero section. */
export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  icon: HiOutlineSparkles,
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label)", type: "string" }),
    defineField({ name: "headlineLead", title: "Headline — first part", type: "string", description: "Shown in dark ink" }),
    defineField({ name: "headlineHighlight", title: "Headline — highlighted part", type: "string", description: "Shown in the green→blue gradient" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "primaryCta", title: "Primary button", type: "cta" }),
    defineField({ name: "secondaryCta", title: "Secondary button", type: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Hero" }) },
});

/** About section. */
export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: HiOutlineInformationCircle,
  fields: [
    defineField({ name: "lead", title: "Lead paragraph", type: "text", rows: 4 }),
    defineField({ name: "body", title: "Body paragraph", type: "text", rows: 2 }),
    defineField({ name: "image", title: "About image", type: "image", options: { hotspot: true } }),
    defineField({ name: "stats", title: "Stat tiles", type: "array", of: [{ type: "stat" }] }),
  ],
  preview: { prepare: () => ({ title: "About" }) },
});

/** Founder section. */
export const founder = defineType({
  name: "founder",
  title: "Founder",
  type: "document",
  icon: HiOutlineUser,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({ name: "vision", title: "Vision statement", type: "text", rows: 3 }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
      description: "Add or remove certifications here",
    }),
  ],
  preview: { prepare: () => ({ title: "Founder" }) },
});

/** Contact section copy. */
export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  icon: HiOutlineEnvelope,
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Contact Section" }) },
});
