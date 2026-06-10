import { type SchemaTypeDefinition } from "sanity";
import { cta, stat } from "./objects";
import {
  siteSettings,
  hero,
  about,
  founder,
  contactSection,
} from "./singletons";
import {
  service,
  whyChooseReason,
  industry,
  processStep,
  galleryImage,
  certification,
  testimonial,
} from "./collections";

export const schemaTypes: SchemaTypeDefinition[] = [
  // objects
  cta,
  stat,
  // singletons
  siteSettings,
  hero,
  about,
  founder,
  contactSection,
  // collections
  service,
  whyChooseReason,
  industry,
  processStep,
  galleryImage,
  certification,
  testimonial,
];

export const SINGLETON_TYPES = new Set([
  "siteSettings",
  "hero",
  "about",
  "founder",
  "contactSection",
]);
