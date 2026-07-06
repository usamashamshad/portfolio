"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const categoryGradients: Record<string, string> = {
  "AI/ML": "from-accent/20 to-cyan/10",
  Blockchain: "from-violet/20 to-purple/10",
  "Web Dev": "from-cyan/20 to-blue/10",
  "Computer Vision": "from-emerald/20 to-teal/10",
  Robotics: "from-orange/20 to-amber/10",
  Systems: "from-slate/20 to-gray/10",
  "Power Engineering": "from-yellow/20 to-orange/10",
  Data: "from-pink/20 to-rose/10",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <SectionHeading
        label="// Projects"
        title="Featured"
        highlight="Work"
        subtitle="Research, engineering, and production systems — from agentic AI to blockchain protocol optimization."
      />

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            data-cursor
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-5 py-2.5 text-sm rounded-xl transition-all duration-300 overflow-hidden ${
              activeCategory === cat
                ? "text-background font-semibold"
                : "glass text-muted hover:text-white"
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="project-filter"
                className="absolute inset-0 bg-gradient-to-r from-accent to-cyan rounded-xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </motion.button>
        ))}
      </div>

      <motion.p
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-muted font-mono mb-8"
      >
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" && ` in ${activeCategory}`}
      </motion.p>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const gradient = categoryGradients[project.category] || "from-accent/20 to-cyan/10";
  const isFeatured = project.featured;

  return (
    <SpotlightCard
      delay={index * 0.04}
      className={`group ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${gradient} rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity`}
      />

      <div className="flex items-start justify-between mb-4 relative">
        <div className="flex items-center gap-2">
          {project.featured && (
            <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Star size={14} className="text-accent fill-accent" />
            </motion.div>
          )}
          <span className="text-[10px] text-muted font-mono">{project.period}</span>
        </div>
        <span className="tag text-[10px]">{project.category}</span>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all flex items-center gap-2">
        {project.title}
        <ArrowUpRight
          size={16}
          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-accent"
        />
      </h3>

      <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] text-muted border border-white/[0.06] hover:border-accent/20 hover:text-accent transition-all"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-2 py-0.5 text-[10px] rounded-md text-muted">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {project.github && (
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-cyan transition-colors font-medium"
        >
          <Github size={15} />
          View on GitHub
          <ExternalLink size={11} />
        </motion.a>
      )}
    </SpotlightCard>
  );
}
