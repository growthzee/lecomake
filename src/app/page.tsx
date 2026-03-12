import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Link from "next/link";
import { Suspense } from "react";
import StatCounter from "@/components/StatCounter";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServiceGrid />
      {/* BlackRock-style Stats Section */}

      <section className="bg-white py-24 px-6 border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-r border-brand-border">
            <StatCounter
              target={7.8}
              label="Assets Optimized"
              suffix="T"
              subtext="Total managed volume 2026"
            />
            <StatCounter
              target={15}
              label="Global Jurisdictions"
              suffix="+"
              subtext="Active market presence"
            />
            <StatCounter
              target={98}
              label="Success Probability"
              suffix="%"
              subtext="Risk-adjusted performance"
            />
            <StatCounter
              target={500}
              label="Digital Frameworks"
              suffix="+"
              subtext="Proprietary IT deployments"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
