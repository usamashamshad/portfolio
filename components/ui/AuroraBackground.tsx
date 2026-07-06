"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-aurora" />
      <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-violet/10 blur-[100px] animate-aurora animation-delay-2000" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[-10%] left-[30%] w-[700px] h-[400px] rounded-full bg-cyan/8 blur-[130px] animate-aurora" style={{ animationDelay: "4s" }} />
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
        }}
      />
    </div>
  );
}
