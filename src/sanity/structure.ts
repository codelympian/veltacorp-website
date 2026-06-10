import type { StructureResolver } from "sanity/structure";
import { SINGLETON_TYPES } from "./schemaTypes";

const singletons: [string, string][] = [
  ["siteSettings", "Site Settings"],
  ["hero", "Hero"],
  ["about", "About"],
  ["founder", "Founder"],
  ["contactSection", "Contact Section"],
];

/** Singletons render as a single editable document; collections list normally. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...singletons.map(([type, title]) =>
        S.listItem()
          .title(title)
          .id(type)
          .child(S.document().schemaType(type).documentId(type)),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (li) => !SINGLETON_TYPES.has(li.getId() as string),
      ),
    ]);
