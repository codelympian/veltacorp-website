import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { company, nav } from "@/data/site";
import { images } from "@/data/images";

const socials = [
  { label: "Instagram", href: company.social.instagram, Icon: FaInstagram },
  { label: "LinkedIn", href: company.social.linkedin, Icon: FaLinkedinIn },
  { label: "Facebook", href: company.social.facebook, Icon: FaFacebookF },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-xl bg-white p-3 shadow-soft">
              <Image
                src={images.logo}
                alt="Veltacorp Wellness & Fitness Solutions"
                width={1100}
                height={650}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs font-display text-lg font-semibold leading-snug">
              {company.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-green"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-brand-green"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-brand-green" size={18} />
                <span>{company.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineMail className="mt-0.5 shrink-0 text-brand-green" size={18} />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-brand-green" size={18} />
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {company.copyrightYear} {company.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
