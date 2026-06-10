/**
 * One-time migration: pushes the current site.ts content + local images into
 * Sanity so the client can edit everything from the Studio.
 *
 * Run with:  npm run seed
 * Requires SANITY_API_WRITE_TOKEN in .env.local (loaded via --env-file).
 */
import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import path from "node:path";

import * as site from "../src/data/site";
import { images } from "../src/data/images";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN!;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN. Run via `npm run seed`.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-10-01",
  useCdn: false,
});

const INDUSTRY_ICON: Record<string, string> = {
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

// Upload each local image once and reuse the asset reference.
const assetCache = new Map<string, string>();
async function uploadImage(publicPath: string) {
  if (assetCache.has(publicPath)) return assetCache.get(publicPath)!;
  const filePath = path.join(process.cwd(), "public", publicPath);
  const filename = path.basename(publicPath);
  console.log("  ↑ uploading", filename);
  const asset = await client.assets.upload(
    "image",
    createReadStream(filePath),
    { filename },
  );
  assetCache.set(publicPath, asset._id);
  return asset._id;
}

const imageField = (assetId: string) => ({
  _type: "image",
  asset: { _type: "reference", _ref: assetId },
});

async function deleteType(type: string) {
  await client.delete({ query: `*[_type == "${type}"]` });
}

async function main() {
  console.log(`Seeding project ${projectId}/${dataset}…`);

  // ---- Images ----
  console.log("Uploading images…");
  const heroImg = await uploadImage(images.hero as string);
  const aboutImg = await uploadImage(images.about as string);
  const founderImg = await uploadImage(images.founder as string);
  const serviceImg: Record<string, string> = {};
  for (const [icon, p] of Object.entries(images.service)) {
    serviceImg[icon] = await uploadImage(p);
  }
  const galleryAssets: string[] = [];
  for (const p of images.gallery) galleryAssets.push(await uploadImage(p));

  // ---- Singletons ----
  console.log("Writing singletons…");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: site.company.name,
    shortName: site.company.shortName,
    tagline: site.company.tagline,
    location: site.company.location,
    email: site.company.email,
    phone: site.company.phone,
    whatsappNumber: site.company.whatsapp.number,
    instagram: site.company.social.instagram,
    linkedin: site.company.social.linkedin,
    facebook: site.company.social.facebook,
    copyrightYear: site.company.copyrightYear,
    web3formsAccessKey: site.contact.web3formsAccessKey,
    metaTitle:
      "Veltacorp Wellness & Fitness Solutions | Corporate Wellness in Lagos",
    metaDescription:
      "Veltacorp helps organizations build healthier, happier and more productive teams through corporate wellness programs, fitness initiatives, team-building and racket sports experiences.",
  });

  await client.createOrReplace({
    _id: "hero",
    _type: "hero",
    eyebrow: site.hero.eyebrow,
    headlineLead: "Transform Workplace Wellness Through",
    headlineHighlight: "Sport, Fitness & Engagement",
    subheadline: site.hero.subheadline,
    image: imageField(heroImg),
    primaryCta: { _type: "cta", ...site.hero.primaryCta },
    secondaryCta: { _type: "cta", ...site.hero.secondaryCta },
  });

  await client.createOrReplace({
    _id: "about",
    _type: "about",
    lead: site.about.lead,
    body: site.about.body,
    image: imageField(aboutImg),
    stats: [
      { _type: "stat", _key: "s1", value: "5", label: "Core program areas" },
      { _type: "stat", _key: "s2", value: "9+", label: "Industries served" },
      { _type: "stat", _key: "s3", value: "100%", label: "Tailored to your team" },
    ],
  });

  await client.createOrReplace({
    _id: "founder",
    _type: "founder",
    name: site.founder.name,
    role: site.founder.role,
    photo: imageField(founderImg),
    bio: site.founder.bio,
    vision: site.founder.vision,
    certifications: [...site.founder.certifications],
  });

  await client.createOrReplace({
    _id: "contactSection",
    _type: "contactSection",
    heading: site.contact.heading,
    subheading: site.contact.subheading,
  });

  // ---- Collections (clear then recreate) ----
  console.log("Writing collections…");
  await Promise.all(
    [
      "service",
      "whyChooseReason",
      "industry",
      "processStep",
      "galleryImage",
      "certification",
      "testimonial",
    ].map(deleteType),
  );

  const tx = client.transaction();

  site.services.forEach((s, i) => {
    tx.create({
      _id: `service.${s.icon}`,
      _type: "service",
      title: s.title,
      summary: s.summary,
      icon: s.icon,
      items: [...s.items],
      image: serviceImg[s.icon] ? imageField(serviceImg[s.icon]) : undefined,
      order: (i + 1) * 10,
    });
  });

  site.whyChooseUs.forEach((text, i) => {
    tx.create({
      _id: `reason.${i}`,
      _type: "whyChooseReason",
      text,
      order: (i + 1) * 10,
    });
  });

  site.industries.forEach((name, i) => {
    tx.create({
      _id: `industry.${i}`,
      _type: "industry",
      name,
      icon: INDUSTRY_ICON[name] ?? "startup",
      order: (i + 1) * 10,
    });
  });

  site.process.forEach((p, i) => {
    tx.create({
      _id: `processStep.${i}`,
      _type: "processStep",
      step: p.step,
      title: p.title,
      description: p.description,
      order: (i + 1) * 10,
    });
  });

  galleryAssets.forEach((assetId, i) => {
    tx.create({
      _id: `galleryImage.${i}`,
      _type: "galleryImage",
      image: imageField(assetId),
      alt: `Veltacorp wellness session ${i + 1}`,
      order: (i + 1) * 10,
    });
  });

  site.certifications.forEach((c, i) => {
    tx.create({
      _id: `certification.${i}`,
      _type: "certification",
      name: c.name,
      order: (i + 1) * 10,
    });
  });

  await tx.commit();

  console.log("✅ Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
