"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black gradient-text mb-1">US.</p>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} {personalInfo.name}. Crafted with Next.js & Framer Motion.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: personalInfo.github },
              { label: "LinkedIn", href: personalInfo.linkedin },
              { label: "Email", href: `mailto:${personalInfo.email}` },
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-cursor
                whileHover={{ y: -2 }}
                className="text-sm text-muted hover:text-accent transition-colors font-medium"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
      </div>
    </footer>
  );
}
