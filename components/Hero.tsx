"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import MagneticButton from "@/components/ui/MagneticButton";
import TextRotator from "@/components/ui/TextRotator";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const firstName = personalInfo.name.split(" ")[0];
  const lastName = personalInfo.name.split(" ").slice(1).join(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-accent/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-violet/5 blur-3xl"
      />

      <div className="section-container relative z-10 text-center pt-24 pb-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/[0.1]">
              <Sparkles size={14} className="text-accent animate-pulse" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-sm text-muted">Open to opportunities</span>
            </div>
          </motion.div>

          <motion.p variants={item} className="text-sm font-mono text-accent tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.9]"
          >
            <span className="block">{firstName}</span>
            <span className="block gradient-text">{lastName}</span>
          </motion.h1>

          <motion.div variants={item} className="text-xl md:text-2xl text-muted mb-3 font-light">
            I&apos;m a <TextRotator />
          </motion.div>

          <motion.p variants={item} className="text-base md:text-lg text-muted/60 mb-8 max-w-xl mx-auto">
            {personalInfo.subtitle}
          </motion.p>

          <motion.div variants={item} className="flex items-center justify-center gap-2 text-muted mb-12">
            <MapPin size={15} className="text-accent" />
            <span className="text-sm">{personalInfo.location}</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-3 mb-14">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-cursor
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-2xl glass hover:border-accent/40 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={22} className="text-muted group-hover:text-accent transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="#projects"
              className="px-10 py-4 bg-gradient-to-r from-accent via-cyan to-accent bg-[length:200%_auto] animate-gradient text-background font-bold rounded-2xl shadow-[0_0_30px_rgba(0,229,176,0.3)] hover:shadow-[0_0_50px_rgba(0,229,176,0.5)] transition-shadow"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-10 py-4 glass text-white font-semibold rounded-2xl hover:border-accent/40 transition-all"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            data-cursor
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
