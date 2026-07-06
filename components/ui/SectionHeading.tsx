"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight: string;
  subtitle: string;
}

export default function SectionHeading({ label, title, highlight, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="inline-block text-xs font-mono text-accent tracking-[0.3em] uppercase mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="section-title"
      >
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="section-subtitle !mb-0"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
