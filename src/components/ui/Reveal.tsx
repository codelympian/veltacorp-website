"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Tasteful scroll-reveal: fades + slides children in once when they enter the
 * viewport. Honors prefers-reduced-motion (handled globally in globals.css,
 * and motion respects it for transforms).
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
