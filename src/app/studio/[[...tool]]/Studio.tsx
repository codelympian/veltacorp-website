"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

// Load the Studio only in the browser — it can't be evaluated on the server.
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false },
);

export function Studio() {
  return <NextStudio config={config} />;
}
