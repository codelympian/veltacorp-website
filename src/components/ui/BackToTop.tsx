"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";
import { cn } from "@/lib/cn";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-24 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-card transition-all duration-300 hover:bg-brand-blue-dark",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <HiArrowUp size={20} />
    </button>
  );
}
