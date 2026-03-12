// src/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-brand-border bg-brand-black text-white py-32 md:py-48 px-6 overflow-hidden min-h-screen flex items-center justify-center text-center">
      {/* --- BACKGROUND GRAPHICS --- */}

      {/* 1. Centered Radial Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_65%)] opacity-10" />

      {/* 2. Full-screen SVG Grid */}
      <div className="absolute inset-0 z-0 opacity-15">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="centeredGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#centeredGrid)" />
        </svg>
      </div>

      {/* 3. Floating Geometric Accents (The "Modern Institutional" feel) */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/5 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-brand-blue/20 rounded-sm rotate-45" />

      {/* --- CENTERED CONTENT --- */}

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-brand-blue uppercase text-[10px] font-bold tracking-[0.4em]">
            Institutional Business Transformation
          </span>
        </div>

        {/* Main Title: Massive Scale */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tighter mb-10">
          Global Strategy. <br />
          <span className="font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            Sustainable Results.
          </span>
        </h1>

        {/* Subtext: Centered and Balanced */}
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl mb-12">
          Lecomake empowers global enterprises with collective intelligence and
          the technical framework required for resilient growth. We turn shared
          beliefs into extraordinary action.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button className="bg-brand-blue text-white px-12 py-5 font-bold hover:bg-blue-700 transition-all text-xs uppercase tracking-widest min-w-[220px]">
            Our Solutions
          </button>
          <Link
            href="#"
            className="flex items-center gap-3 px-10 py-5 font-bold text-xs uppercase tracking-widest group text-white border border-white/10 hover:bg-white/5 transition-all min-w-[220px] justify-center"
          >
            Watch Insight Video
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Static Footer Element for the Hero */}
      <div className="absolute bottom-12 left-0 w-full flex justify-between px-12 text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] hidden md:flex">
        <span>Risk Mgmt / 2026</span>
        <span className="text-brand-blue">Active Markets: 15+</span>
        <span>Global IT Solutions</span>
      </div>
    </section>
  );
}
