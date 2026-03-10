"use client";

import { useState } from "react";

export default function FloatingGallery() {
  const [active, setActive] = useState(false);

  return (
    <section className="overflow-hidden md:pt-32 md:pb-32 bg-slate-50/50 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-[80px] mix-blend-multiply opacity-60" />
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 backdrop-blur-md text-[10px] font-semibold tracking-widest uppercase text-slate-500 shadow-sm cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          System Gallery
        </div>
        <h2 className="mt-6 text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter leading-[1.1]">
          Interface Archive.
        </h2>
        <p className="mt-4 text-lg text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
          Hover to expand the component layers.
        </p>
      </div>

      {/* Gallery */}
      <div
        id="gallery-interaction"
        className={`relative z-10 w-full max-w-[1000px] h-[500px] md:h-[600px] mx-auto flex items-center justify-center cursor-pointer group${active ? " active" : ""}`}
        style={{ perspective: "1200px" }}
        onClick={() => setActive((v) => !v)}
      >
        {/* Center Card */}
        <div className="relative z-50 w-[300px] md:w-[360px] bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[32px] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:scale-105 group-hover:-translate-y-2">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Layout
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-100/50 border border-white flex items-center justify-center text-slate-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="9" x2="9" y1="21" y2="9" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Adaptive Container
          </h3>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
            Intelligent surfaces that restructure content hierarchy based on
            available viewport space.
          </p>
          <div className="overflow-hidden flex flex-col bg-white/50 w-full h-32 border-white/60 border rounded-2xl mt-8 p-3 relative shadow-inner gap-2">
            <div className="w-1/2 h-2 bg-slate-200/80 rounded-full" />
            <div className="flex-1 overflow-hidden bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative">
              <div className="absolute top-3 left-3 right-3 h-2 bg-white rounded-full w-2/3 shadow-sm" />
            </div>
          </div>
        </div>

        {/* Satellite 1 – Signal */}
        <div
          className={`card-scatter-1 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring z-40 pointer-events-none group-hover:pointer-events-auto`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Signal
            </span>
            <div className="w-7 h-7 rounded-full bg-blue-50/50 border border-blue-100/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-800 tracking-tight">
            Status &amp; Control
          </h4>
          <div className="mt-4 flex items-center gap-3 bg-white/40 p-2.5 rounded-xl border border-white/50">
            <div className="h-1.5 w-12 bg-slate-300/50 rounded-full" />
            <div className="w-8 h-5 bg-blue-500 rounded-full ml-auto relative shadow-sm">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>

        {/* Satellite 2 – Modules */}
        <div className="card-scatter-2 md:w-[280px] transition-all duration-700 transition-spring delay-75 z-30 pointer-events-none group-hover:pointer-events-auto bg-white/60 opacity-0 w-[260px] border-white/60 border rounded-[28px] p-6 absolute shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Modules
            </span>
            <div className="w-7 h-7 rounded-full bg-purple-50/50 border border-purple-100/50 flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-800 tracking-tight">
            Composable Grids
          </h4>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="overflow-hidden bg-slate-100/50 border-slate-200/30 border rounded-xl relative h-8" />
            <div className="overflow-hidden bg-slate-100/50 border-slate-200/30 border rounded-xl relative h-8" />
            <div className="aspect-square bg-white/50 rounded-lg border border-white/60" />
          </div>
        </div>

        {/* Satellite 3 – Data */}
        <div className="card-scatter-3 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring delay-100 z-20 pointer-events-none group-hover:pointer-events-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Data
            </span>
            <div className="w-7 h-7 rounded-full bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-500"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-800 tracking-tight">
            Real-time Stream
          </h4>
          <div className="mt-4 flex items-end gap-1.5 h-10 px-1">
            {[40, 70, 50, 90].map((h, i) => (
              <div
                key={i}
                className="w-1/4 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `rgba(100,116,139,${h / 200 + 0.1})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Satellite 4 – Motion */}
        <div className="card-scatter-4 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring delay-150 z-10 pointer-events-none group-hover:pointer-events-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Motion
            </span>
            <div className="w-7 h-7 rounded-full bg-amber-50/50 border border-amber-100/50 flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-800 tracking-tight">
            Interaction States
          </h4>
          <div className="overflow-hidden flex flex-col bg-white/50 w-full h-12 border-white/60 border rounded-full mt-8 p-3 relative shadow-inner">
            <div className="animate-pulse bg-slate-400 w-7 h-7 rounded-full shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
