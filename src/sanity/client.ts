import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Published content is fetched without a token; we revalidate via tags.
  useCdn: true,
  perspective: "published",
});
