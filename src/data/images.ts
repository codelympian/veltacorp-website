/**
 * Central image manifest. Swap any path here to change an image site-wide.
 * Client photos live in /public/assets; brand-graded stock in /public/assets/stock.
 */

export const images = {
  // Trimmed + transparent for light backgrounds (header); trimmed (white bg)
  // for the footer chip. Original raster kept as logoOriginal for reference.
  logo: "/assets/logo-transparent.png",
  logoChip: "/assets/logo-trimmed.png",
  logoOriginal: "/assets/logo.jpeg",
  founder: "/assets/founder.jpeg",

  // Real client photos (authentic outdoor wellness/fitness sessions)
  gallery: [
    "/assets/pic1.jpeg",
    "/assets/pic2.jpeg",
    "/assets/pic3.jpeg",
    "/assets/pic4.jpeg",
    "/assets/pic5.jpeg",
    "/assets/pic6.jpeg",
    "/assets/pic7.jpeg",
    "/assets/pic8.jpeg",
  ],

  // Hero + section features
  hero: "/assets/stock/corporate-team.jpg",
  about: "/assets/stock/wellness-group.jpg",

  // Service feature images (keyed to Service.icon in site.ts)
  service: {
    wellness: "/assets/pic5.jpeg",
    fitness: "/assets/pic3.jpeg",
    racket: "/assets/stock/badminton.jpg",
    events: "/assets/stock/sports-event.jpg",
    team: "/assets/stock/team-building.jpg",
  } as Record<string, string>,

  // Racket sports mini-gallery
  racket: [
    "/assets/stock/badminton.jpg",
    "/assets/stock/badminton-2.jpg",
    "/assets/stock/table-tennis.jpg",
  ],
} as const;
