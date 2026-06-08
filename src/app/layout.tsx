import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://veltacorpwellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Veltacorp Wellness & Fitness Solutions | Corporate Wellness in Lagos",
    template: "%s | Veltacorp Wellness & Fitness Solutions",
  },
  description:
    "Veltacorp helps organizations build healthier, happier and more productive teams through corporate wellness programs, fitness initiatives, team-building and racket sports experiences.",
  keywords: [
    "corporate wellness Nigeria",
    "employee wellbeing Lagos",
    "workplace fitness programs",
    "corporate team building",
    "employee engagement",
    "racket sports corporate",
    "Veltacorp",
  ],
  authors: [{ name: "Veltacorp Wellness & Fitness Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Veltacorp Wellness & Fitness Solutions",
    title: "Healthier People. Stronger Organizations.",
    description:
      "Corporate wellness, fitness, team-building and racket sports programs that improve employee wellbeing, engagement and productivity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veltacorp Wellness & Fitness Solutions",
    description: "Healthier People. Stronger Organizations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-ink">{children}</body>
    </html>
  );
}
