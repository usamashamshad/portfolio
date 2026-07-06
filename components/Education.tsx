"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading
        label="// Education"
        title="Academic"
        highlight="Background"
        subtitle="From power engineering foundations to cutting-edge AI and autonomous systems research."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {education.map((edu, index) => (
          <SpotlightCard key={edu.degree} delay={index * 0.08}>
            <div className="flex gap-5">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-violet/10 border border-accent/20 flex items-center justify-center shrink-0"
              >
                <GraduationCap size={24} className="text-accent" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1 leading-tight">{edu.degree}</h3>
                <p className="text-accent text-sm font-medium">{edu.institution}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] font-mono text-muted bg-white/[0.04] px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                  <span className="text-[10px] text-muted">{edu.location}</span>
                </div>
                <p className="text-sm text-muted mt-3 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
