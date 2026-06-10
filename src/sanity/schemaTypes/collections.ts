import { defineField, defineType } from "sanity";
import {
  HiOutlineSquares2X2,
  HiOutlineCheckCircle,
  HiOutlineBuildingOffice2,
  HiOutlineListBullet,
  HiOutlinePhoto,
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const orderField = defineField({
  name: "order",
  title: "Order",
  type: "number",
  description: "Lower numbers appear first",
  initialValue: 100,
});

const serviceIcons = [
  { title: "Wellness (heart pulse)", value: "wellness" },
  { title: "Fitness (dumbbell)", value: "fitness" },
  { title: "Racket sports (paddle)", value: "racket" },
  { title: "Events (trophy)", value: "events" },
  { title: "Team building (people)", value: "team" },
];

const industryIcons = [
  { title: "Banking", value: "banking" },
  { title: "Telecommunications", value: "telecom" },
  { title: "Technology", value: "technology" },
  { title: "Insurance", value: "insurance" },
  { title: "Manufacturing", value: "manufacturing" },
  { title: "Government", value: "government" },
  { title: "Oil & Gas", value: "oilgas" },
  { title: "Education", value: "education" },
  { title: "Startup / Other", value: "startup" },
];

/** Service (5 program areas). */
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: HiOutlineSquares2X2,
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 2 }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: serviceIcons, layout: "dropdown" } }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "items", title: "List items", type: "array", of: [{ type: "string" }] }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "icon" } },
});

/** Why-choose reason. */
export const whyChooseReason = defineType({
  name: "whyChooseReason",
  title: "Why Choose Reason",
  type: "document",
  icon: HiOutlineCheckCircle,
  fields: [
    defineField({ name: "text", title: "Reason", type: "string", validation: (r) => r.required() }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "text" } },
});

/** Industry served. */
export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  icon: HiOutlineBuildingOffice2,
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: industryIcons, layout: "dropdown" } }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "icon" } },
});

/** Process step. */
export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  icon: HiOutlineListBullet,
  fields: [
    defineField({ name: "step", title: "Step number", type: "number" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "step" } },
});

/** Gallery image. */
export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  icon: HiOutlinePhoto,
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "alt", title: "Alt text", type: "string" }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "alt", media: "image" } },
});

/** Certification badge. */
export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  icon: HiOutlineAcademicCap,
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Logo (optional)", type: "image", description: "Leave empty to show a badge icon", options: { hotspot: true } }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", media: "logo" } },
});

/** Client testimonial. */
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: HiOutlineChatBubbleLeftRight,
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "title", title: "Author title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "author", subtitle: "company" } },
});
