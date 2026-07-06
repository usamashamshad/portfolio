"use client";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: "slow" | "normal";
}

export default function Marquee({ items, reverse = false, speed = "normal" }: MarqueeProps) {
  const doubled = [...items, ...items];
  const duration = speed === "slow" ? "60s" : "40s";

  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration} linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-shrink-0 px-5 py-2.5 rounded-full glass text-sm text-muted whitespace-nowrap hover:text-accent hover:border-accent/30 transition-colors border border-white/[0.06]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
