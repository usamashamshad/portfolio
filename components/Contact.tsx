"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import TiltCard from "@/components/ui/TiltCard";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <SectionHeading
        label="// Contact"
        title="Let&apos;s"
        highlight="Connect"
        subtitle="Open to AI engineering roles, research collaborations, and consulting on LLM/RAG systems."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border border-white/[0.08]"
        >
          <h3 className="text-xl font-bold mb-8">Contact Information</h3>
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/15 to-cyan/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/40 transition-all">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-muted uppercase tracking-wider">{label}</p>
                    <p className="text-sm group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} data-cursor className="block hover:translate-x-2 transition-transform">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-10 pt-8 border-t border-white/[0.06]">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl glass hover:border-accent/40 transition-all text-sm font-medium"
              >
                <Icon size={18} />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <TiltCard>
          <div className="gradient-border rounded-3xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-violet/5" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 border border-accent/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 border border-violet/10 rounded-full"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent/30 to-violet/20 border border-accent/30 flex items-center justify-center mb-8 mx-auto shadow-[0_0_40px_rgba(0,229,176,0.2)]"
              >
                <span className="text-4xl font-black gradient-text">US</span>
              </motion.div>

              <h3 className="text-3xl font-black mb-2">{personalInfo.name}</h3>
              <p className="text-muted mb-2">{personalInfo.title}</p>
              <p className="text-sm text-muted/60 leading-relaxed max-w-sm mb-10">
                Let&apos;s build something intelligent together — from agentic AI platforms to blockchain protocol research.
              </p>

              <MagneticButton
                href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry`}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-accent to-cyan text-background font-bold rounded-2xl shadow-[0_0_30px_rgba(0,229,176,0.3)]"
              >
                <Send size={18} />
                Send an Email
              </MagneticButton>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
