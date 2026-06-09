/**
 * VELTACORP — Single source of truth for all site content.
 *
 * Edit copy, services, certifications, industries, contact details, etc. here.
 * Components read from this file, so non-developers can update most of the
 * site without touching JSX. Add new certifications/testimonials by appending
 * to the relevant array.
 */

export const company = {
  name: "Veltacorp Wellness & Fitness Solutions",
  shortName: "Veltacorp",
  tagline: "Healthier People. Stronger Organizations.",
  location: "Lagos, Nigeria",
  email: "info@veltacorpwellness.com",
  phone: "+234 706 457 1419",
  phoneHref: "tel:+2347064571419",
  whatsapp: {
    number: "2347064571419",
    // wa.me link with a friendly pre-filled message for the user to send.
    link: `https://wa.me/2347064571419?text=${encodeURIComponent(
      "Hello Veltacorp, I'd like to learn more about your corporate wellness programs.",
    )}`,
  },
  copyrightYear: 2026,
  social: {
    instagram: "https://instagram.com/", // TODO: add handle
    linkedin: "https://linkedin.com/", // TODO: add page
    facebook: "https://facebook.com/", // TODO: add page
  },
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Corporate Wellness & Employee Engagement",
  headline:
    "Transform Workplace Wellness Through Sport, Fitness & Employee Engagement",
  subheadline:
    "We help organizations build healthier, happier, and more productive teams through corporate wellness programs, fitness initiatives, team-building activities, and racket sports experiences.",
  primaryCta: { label: "Request a Proposal", href: "#contact" },
  secondaryCta: { label: "Book a Consultation", href: "#contact" },
} as const;

export const about = {
  heading: "Who We Are",
  lead: "Veltacorp Wellness & Fitness Solutions is a corporate wellness company dedicated to helping organizations improve employee wellbeing, workplace engagement, and productivity through innovative wellness programs, fitness experiences, and racket sports initiatives.",
  body: "Our goal is to create healthier workforces, stronger teams, and high-performing organizations.",
} as const;

export const founder = {
  name: "Abel Joseph",
  role: "Founder, CEO & Lead Consultant",
  // Drop the founder photo in /public/assets and set the filename here.
  photo: "/assets/founder.jpg",
  bio: "Abel Joseph is a wellness professional, racket sports coach, and corporate wellness advocate passionate about helping organizations create healthier and more productive workplaces through fitness, sports, and employee wellness initiatives.",
  vision:
    "His vision is to position Veltacorp as one of Africa's leading corporate wellness and employee engagement companies.",
  // Easily add more certifications here — they render automatically.
  certifications: [
    "First Aid & CPR Certification",
    "ACE (American Council on Exercise) Certification",
    "Corporate Wellness Training Certifications",
    "Fitness & Wellness Certifications",
    "Sports Coaching Certifications",
  ],
} as const;

export type Service = {
  title: string;
  summary: string;
  items: string[];
  icon: string; // key mapped to an icon component in the Services section
};

export const services: Service[] = [
  {
    title: "Corporate Wellness Programs",
    summary:
      "Holistic programs that put employee health and wellbeing at the centre of your organization.",
    icon: "wellness",
    items: [
      "Employee Wellness Programs",
      "Health Awareness Campaigns",
      "Wellness Challenges",
      "Workplace Wellness Events",
    ],
  },
  {
    title: "Corporate Fitness Programs",
    summary:
      "Practical fitness experiences designed for the realities of the modern workplace.",
    icon: "fitness",
    items: [
      "Aerobics Sessions",
      "Stretching Sessions",
      "Fitness Assessments",
      "Workplace Exercise Programs",
    ],
  },
  {
    title: "Racket Sports Programs",
    summary:
      "Engaging racket sports that energize teams and build healthy workplace culture.",
    icon: "racket",
    items: ["Badminton", "Tennis", "Table Tennis", "Squash"],
  },
  {
    title: "Corporate Sports Events",
    summary:
      "Memorable competitive events that boost morale and inter-team connection.",
    icon: "events",
    items: [
      "Corporate Tournaments",
      "Sports Days",
      "Inter-Department Competitions",
      "Employee Engagement Activities",
    ],
  },
  {
    title: "Team Building Programs",
    summary:
      "Structured experiences that strengthen collaboration, trust and team culture.",
    icon: "team",
    items: [
      "Sports-Based Team Building",
      "Wellness Retreats",
      "Team Challenges",
      "Employee Engagement Events",
    ],
  },
];

export const whyChooseUs = [
  "Corporate-Focused Solutions",
  "Customized Wellness Programs",
  "Professional Delivery",
  "Improved Employee Engagement",
  "Increased Productivity",
  "Stronger Team Culture",
  "Measurable Results",
] as const;

export const industries = [
  "Banking",
  "Telecommunications",
  "Technology",
  "Insurance",
  "Manufacturing",
  "Government Agencies",
  "Oil & Gas",
  "Educational Institutions",
  "Startups",
] as const;

export const process = [
  {
    step: 1,
    title: "Consultation & Needs Assessment",
    description:
      "We learn your organization, goals and people to understand exactly what success looks like.",
  },
  {
    step: 2,
    title: "Program Design & Proposal",
    description:
      "We design a tailored wellness and engagement program with a clear, costed proposal.",
  },
  {
    step: 3,
    title: "Implementation & Delivery",
    description:
      "Our team delivers professional, well-organized sessions, events and initiatives.",
  },
  {
    step: 4,
    title: "Monitoring, Reporting & Improvement",
    description:
      "We track participation and outcomes, report on results and continuously improve.",
  },
] as const;

/**
 * Certifications & partners shown in the dedicated badge section.
 * Add future certifications/partner logos by appending here. If you have a
 * badge image, set `logo` to its path in /public/assets (otherwise an icon
 * placeholder is shown).
 */
export const certifications = [
  { name: "ACE Certification", logo: null },
  { name: "First Aid & CPR Certification", logo: null },
  { name: "Wellness Certifications", logo: null },
  { name: "Sports Coaching Certifications", logo: null },
] as const;

/**
 * Testimonials — empty for now. Add objects like:
 * { quote: "...", author: "Jane Doe", title: "HR Director", company: "Acme Bank" }
 * The section renders a tasteful placeholder until at least one is added.
 */
export const testimonials: {
  quote: string;
  author: string;
  title: string;
  company: string;
}[] = [];

export const contact = {
  heading: "Let's Build a Healthier Organization",
  subheading:
    "Request a proposal or book a consultation. We typically respond within one business day.",
  // Get a free key at https://web3forms.com (sends to your inbox).
  web3formsAccessKey: "8b67bd0e-5e14-479d-a2d5-65def482f46b",
} as const;
