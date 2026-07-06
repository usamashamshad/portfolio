"use client";

import Marquee from "@/components/ui/Marquee";

const techStack = [
  "Python", "PyTorch", "TensorFlow", "LangChain", "GPT-4", "Claude 3",
  "LLaMA-3", "RAG", "Pinecone", "FAISS", "FastAPI", "Docker",
  "AWS", "Solidity", "Bitcoin", "SLAM", "OpenCV", "YOLO",
  "BERT", "NLP", "MLOps", "MLflow", "React", "Next.js",
  "C++", "MATLAB", "OMNeT++", "Kubernetes", "CI/CD",
];

export default function TechMarquee() {
  return (
    <section className="relative py-6 border-y border-white/[0.04]">
      <Marquee items={techStack} />
      <Marquee items={[...techStack].reverse()} reverse speed="slow" />
    </section>
  );
}
