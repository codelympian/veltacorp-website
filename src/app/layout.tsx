import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { getContent } from "@/sanity/getContent";

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

export async function generateMetadata(): Promise<Metadata> {
  const { seo, company } = await getContent();
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo.metaTitle,
      template: `%s | ${company.name}`,
    },
    description: seo.metaDescription,
    keywords: [
      "corporate wellness Nigeria",
      "employee wellbeing Lagos",
      "workplace fitness programs",
      "corporate team building",
      "employee engagement",
      "racket sports corporate",
      "Veltacorp",
    ],
    authors: [{ name: company.name }],
    openGraph: {
      type: "website",
      locale: "en_NG",
      url: SITE_URL,
      siteName: company.name,
      title: company.tagline,
      description: seo.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: company.name,
      description: company.tagline,
    },
    robots: { index: true, follow: true },
  };
}

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
