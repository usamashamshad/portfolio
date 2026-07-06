"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section className="section-container">
      <SectionHeading
        label="// Certifications"
        title="Credentials &"
        highlight="Courses"
        subtitle="Professional certifications from IBM, AWS, DeepLearning.AI, and Microsoft."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass rounded-2xl p-5 flex items-start gap-4 border border-white/[0.06] hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-violet/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Award size={20} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold leading-tight mb-1 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-muted">{cert.issuer}</p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-cyan mt-3 transition-colors font-medium"
                >
                  View Certificate
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
