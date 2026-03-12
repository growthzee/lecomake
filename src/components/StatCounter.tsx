"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion"; // Optional: npm install framer-motion

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
  subtext?: string; // New: Adds institutional depth
}

export default function StatCounter({
  target,
  label,
  suffix = "",
  subtext = "Global benchmark standard",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // Slower, more "majestic" count
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <div
      ref={ref}
      className="group relative border-t border-brand-border pt-8 pb-12 transition-all duration-500 hover:bg-brand-bg/50 px-4"
    >
      {/* Top Label with Accent */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1 h-1 bg-brand-blue rounded-full" />
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          {label}
        </p>
      </div>

      {/* Main Number */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-6xl md:text-7xl font-bold tracking-tighter tabular-nums text-brand-black group-hover:text-brand-blue transition-colors duration-500">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl font-light text-brand-blue opacity-70">
          {suffix}
        </span>
      </div>

      {/* Institutional Detail: Subtext that appears on hover */}
      <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
        {subtext}
      </p>

      {/* Redesigned Progress Tracker */}
      <div className="relative h-[2px] w-full bg-brand-border">
        <div
          className="absolute top-0 left-0 h-full bg-brand-blue transition-all duration-[2000ms] ease-out"
          style={{ width: isInView ? "100%" : "0%" }} // Fills the line regardless of count
        />
        {/* The "Current Value" Dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-2 w-2 bg-brand-black border border-brand-blue transition-all duration-[2000ms] ease-out"
          style={{ left: isInView ? `${(count / target) * 100}%` : "0%" }}
        />
      </div>
    </div>
  );
}
