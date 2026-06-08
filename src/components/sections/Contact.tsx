"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi2";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { company, contact } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const details = [
  {
    Icon: HiOutlineLocationMarker,
    label: "Location",
    value: company.location,
    href: null,
  },
  {
    Icon: HiOutlineMail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    Icon: HiOutlinePhone,
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
  },
];

const socials = [
  { label: "Instagram", href: company.social.instagram, Icon: FaInstagram },
  { label: "LinkedIn", href: company.social.linkedin, Icon: FaLinkedinIn },
  { label: "Facebook", href: company.social.facebook, Icon: FaFacebookF },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", contact.web3formsAccessKey);
    formData.append(
      "subject",
      "New enquiry from Veltacorp website",
    );
    formData.append("from_name", "Veltacorp Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <Section id="contact" className="bg-white">
      <SectionHeading
        eyebrow="Get In Touch"
        title={contact.heading}
        intro={contact.subheading}
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Details */}
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-white shadow-card">
            <h3 className="font-display text-2xl font-bold">{company.name}</h3>
            <p className="mt-3 text-white/80">
              Reach out to discuss your organization&apos;s wellness goals — we
              typically respond within one business day.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-green">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium transition-colors hover:text-brand-green"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Follow us
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-green"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08}>
          <div className="rounded-2xl bg-surface p-8 ring-1 ring-line">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <HiCheckCircle className="text-brand-green" size={56} />
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-muted">
                  Your message has been sent to our team. We&apos;ll be in touch
                  within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Company" name="company" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    required
                  />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue="Request a Proposal"
                    className="h-12 w-full rounded-xl border-0 bg-white px-4 text-sm text-ink ring-1 ring-line outline-none transition-shadow focus:ring-2 focus:ring-brand-blue"
                  >
                    <option>Request a Proposal</option>
                    <option>Book a Consultation</option>
                    <option>Corporate Wellness Programs</option>
                    <option>Corporate Fitness Programs</option>
                    <option>Racket Sports Programs</option>
                    <option>Corporate Sports Events</option>
                    <option>Team Building Programs</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your organization and what you'd like to achieve…"
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-ink ring-1 ring-line outline-none transition-shadow placeholder:text-muted/60 focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                {status === "error" && (
                  <p className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700">
                    <HiExclamationCircle size={18} />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-13 w-full items-center justify-center rounded-full bg-brand-green px-8 text-sm font-semibold text-white shadow-card transition-all hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
                <p className="text-center text-xs text-muted">
                  By submitting, you agree to be contacted by Veltacorp regarding
                  your enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
        {required && <span className="text-brand-green"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-xl border-0 bg-white px-4 text-sm text-ink ring-1 ring-line outline-none transition-shadow placeholder:text-muted/60 focus:ring-2 focus:ring-brand-blue"
      />
    </div>
  );
}
