export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// May be empty before the Sanity project is created — the data layer falls
// back to the static defaults in src/data when this is not set.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const isSanityConfigured = projectId.length > 0;
