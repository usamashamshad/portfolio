"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        label="// Experience"
        title="Professional"
        highlight="Journey"
        subtitle="Building production AI systems, teaching the next generation, and pushing robotics research forward."
      />

      <div className="relative">
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-violet/30 to-transparent hidden md:block" />

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative md:pl-16"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 top-8 w-12 h-12 rounded-2xl glass hidden md:flex items-center justify-center z-10"
              >
                <Briefcase size={18} className="text-accent" />
                <div className="absolute inset-0 rounded-2xl bg-accent/10 animate-pulse-glow" />
              </motion.div>

              <SpotlightCard delay={index * 0.05}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <ChevronRight size={16} className="text-accent" />
                    </div>
                    <p className="text-accent font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-muted bg-white/[0.04] px-3 py-1 rounded-full w-fit">
                      {job.period}
                    </span>
                    <span className="text-xs text-muted/60">{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {job.highlights.map((highlight, i) => (
                    <motion.li
                      key={highlight.slice(0, 40)}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="text-sm text-muted flex items-start gap-3 group"
                    >
                      <span className="text-accent/50 group-hover:text-accent transition-colors mt-1 shrink-0 font-mono text-xs">
                        →
                      </span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag hover:bg-accent/20 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
