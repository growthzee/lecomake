// src/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-brand-border bg-brand-black text-white py-24 md:py-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.webp')] pointer-events-none" />

      {/* Main Container: Using grid with 2 columns on lg screens */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="text-brand-blue uppercase text-xs font-bold tracking-[0.25em] mb-5 block">
            Institutional Business Transformation
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8">
            Global Strategy. <br />
            <span className="font-bold">Sustainable Results.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
            Lecomake empowers global enterprises with the collective
            intelligence and advanced technology required for resilient growth.
            We turn shared beliefs into extraordinary action.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <button className="bg-brand-blue text-white px-10 py-4 font-bold hover:bg-blue-700 transition-all text-sm uppercase tracking-wider w-full sm:w-auto">
              Explore Our Solutions
            </button>
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-4 font-bold text-sm uppercase tracking-wider group text-white"
            >
              Watch Insight Video
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Graphical Visual - Now forced side-by-side on LG */}
        <div className="relative hidden lg:block w-full h-[500px] [perspective:1500px]">
          {/* Main Background Visualization */}
          <div className="absolute inset-0 opacity-20 flex items-center justify-center">
            {/* If you don't have the image yet, this div acts as a placeholder so the cards have a home */}
            <div className="w-full h-full border border-white/5 rounded-full blur-3xl bg-brand-blue/10" />
            <Image
              src="/hero-data-visualization.png"
              alt="Network Intelligence Visualization"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Layered UI Elements */}

          {/* Card 1: Asset Performance (Top Left) */}
          <div className="absolute top-10 -left-10 w-64 p-5 bg-brand-black/80 border border-white/10 backdrop-blur-xl rounded-sm [transform:rotateY(-15deg)_rotateX(5deg)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
            <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 font-bold">
              Portfolio Risk
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold tabular-nums">
                0.12<span className="text-xl">%</span>
              </span>
              <span className="text-xs text-green-400 font-bold mb-2">
                ▼ Low
              </span>
            </div>
            <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
              <div className="h-full bg-brand-blue w-[12%]" />
            </div>
          </div>

          {/* Card 2: Global Reach Map (Bottom Right) */}
          <div className="absolute bottom-10 -right-4 w-72 p-6 bg-brand-gray/90 border border-brand-blue/20 backdrop-blur-xl rounded-sm [transform:rotateY(10deg)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10">
            <div className="flex justify-between items-center mb-6">
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                Active Markets
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            </div>
            <div className="h-24 w-full bg-white/5 mb-4 rounded flex items-center justify-center border border-white/5">
              <span className="text-gray-600 text-[10px] tracking-widest uppercase">
                Data Stream Active
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight">
              15+ Jurisdictions
            </div>
          </div>

          {/* Decorative Corner Borders */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/10" />
        </div>
      </div>
    </section>
  );
}
