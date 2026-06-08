"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { nav } from "@/data/site";
import { images } from "@/data/images";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the nav link for the section currently in view
  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="#home" aria-label="Veltacorp home" className="shrink-0">
          <Image
            src={images.logo}
            alt="Veltacorp Wellness & Fitness Solutions"
            width={1100}
            height={650}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-semibold transition-colors hover:text-brand-blue",
                active === item.href ? "text-brand-blue" : "text-ink/80",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand-green transition-all duration-300",
                  active === item.href ? "w-full" : "w-0",
                )}
              />
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-green-dark"
          >
            Request a Proposal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-surface lg:hidden"
        >
          {open ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-ink/90 transition-colors hover:bg-surface hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-semibold text-white"
          >
            Request a Proposal
          </Link>
        </div>
      </div>
    </header>
  );
}
