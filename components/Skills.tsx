"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, string> = {
  "AI & Machine Learning": "🧠",
  "Natural Language Processing": "💬",
  "Computer Vision": "👁️",
  "Robotics & Autonomous Systems": "🤖",
  "Blockchain & Cryptocurrency": "⛓️",
  "Cloud & DevOps": "☁️",
  "Programming & Data": "💻",
  "Power Engineering": "⚡",
};

const categoryColors: Record<string, string> = {
  "AI & Machine Learning": "hover:border-accent/40",
  "Natural Language Processing": "hover:border-cyan/40",
  "Computer Vision": "hover:border-emerald/40",
  "Robotics & Autonomous Systems": "hover:border-orange/40",
  "Blockchain & Cryptocurrency": "hover:border-violet/40",
  "Cloud & DevOps": "hover:border-blue/40",
  "Programming & Data": "hover:border-pink/40",
  "Power Engineering": "hover:border-yellow/40",
};

export default function Skills() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="skills" className="section-container">
      <SectionHeading
        label="// Skills"
        title="Technical"
        highlight="Arsenal"
        subtitle="Technologies and domains I work with — click to explore each area."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((group, index) => {
          const isOpen = expanded === index;
          const colorClass = categoryColors[group.category] || "hover:border-accent/40";

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setExpanded(isOpen ? null : index)}
              data-cursor
              className={`glass rounded-2xl p-5 cursor-pointer transition-all duration-300 border border-white/[0.06] ${colorClass} ${
                isOpen ? "ring-1 ring-accent/30 bg-white/[0.05]" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <motion.span
                    animate={{ rotate: isOpen ? [0, -10, 10, 0] : 0 }}
                    className="text-2xl"
                  >
                    {categoryIcons[group.category] || "🔧"}
                  </motion.span>
                  <h3 className="text-sm font-semibold leading-tight pr-2">{group.category}</h3>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} className="text-muted shrink-0" />
                </motion.div>
              </div>

              <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-cyan rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(group.items.length * 12, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {group.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="text-xs text-muted flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {!isOpen && (
                <p className="text-[10px] text-muted/50">{group.items.length} skills · click to expand</p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
