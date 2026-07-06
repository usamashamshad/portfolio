"use client";

import { motion } from "framer-motion";
import { personalInfo, thesis } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltCard from "@/components/ui/TiltCard";

const stats = [
  { value: "3+", label: "Years Experience", icon: "⚡" },
  { value: "15+", label: "Projects", icon: "🚀" },
  { value: "8+", label: "Skill Domains", icon: "🧠" },
  { value: "MS", label: "AI & Autonomous Systems", icon: "🎓" },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        label="// About"
        title="Crafting Intelligent"
        highlight="Systems"
        subtitle="Who I am and what drives my work at the intersection of AI, robotics, and blockchain."
      />

      <div className="grid lg:grid-cols-5 gap-6">
        <SpotlightCard className="lg:col-span-3">
          <p className="text-muted leading-relaxed text-lg">
            {personalInfo.summary}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/[0.06]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-accent/20 transition-all cursor-default"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-[10px] text-muted mt-1 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SpotlightCard>

        <TiltCard className="lg:col-span-2">
          <div className="gradient-border rounded-2xl p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <h3 className="text-sm font-mono text-accent tracking-wider uppercase">
                MS Thesis Research
              </h3>
            </div>
            <h4 className="text-xl font-bold mb-2">{thesis.title}</h4>
            <p className="text-xs text-muted font-mono mb-1">
              {thesis.institution} · {thesis.period}
            </p>
            <p className="text-xs text-accent/70 mb-4">{thesis.area}</p>
            <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
              {thesis.description}
            </p>
            <ul className="space-y-2">
              {thesis.contributions.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-xs text-muted flex items-start gap-2"
                >
                  <span className="text-accent font-mono shrink-0">0{i + 1}</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
