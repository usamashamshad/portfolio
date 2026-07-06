import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Usama Shamshad | AI Engineer & ML Specialist",
  description:
    "Portfolio of Usama Shamshad — AI Engineer, Machine Learning Specialist, and Blockchain researcher. Building production-grade AI systems, RAG pipelines, and autonomous robotics.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "RAG",
    "Blockchain",
    "Robotics",
    "Usama Shamshad",
  ],
  authors: [{ name: "Usama Shamshad" }],
  openGraph: {
    title: "Usama Shamshad | AI Engineer & ML Specialist",
    description:
      "Building intelligent systems at the intersection of AI, blockchain, and autonomous robotics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
