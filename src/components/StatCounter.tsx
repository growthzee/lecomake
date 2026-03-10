"use client";
import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

export default function StatCounter({
  target,
  label,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const increment = target / (duration / 16); // 60fps

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
  }, [target]);

  return (
    <div className="group border-l border-brand-border pl-6 py-4 animate-counter-fade">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tighter tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl font-light text-brand-blue">{suffix}</span>
      </div>
      {/* Decorative progress bar - signature BlackRock detail */}
      <div className="mt-4 h-[1px] w-full bg-brand-border overflow-hidden">
        <div
          className="h-full bg-brand-blue transition-all duration-[1500ms] ease-out"
          style={{ width: `${(count / target) * 100}%` }}
        />
      </div>
    </div>
  );
}
