import { defineField, defineType } from "sanity";

/** Reusable call-to-action (label + anchor href). */
export const cta = defineType({
  name: "cta",
  title: "Button",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "href",
      title: "Link (e.g. #contact)",
      type: "string",
      initialValue: "#contact",
    }),
  ],
});

/** A headline stat (value + label), used in the About section. */
export const stat = defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});
