import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Link from "next/link";
import { Suspense } from "react";
import StatCounter from "@/components/StatCounter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServiceGrid />

      {/* BlackRock-style Stats Section */}
      <section className="bg-white border-y border-brand-border py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Suspense
            fallback={<div className="h-32 bg-gray-50 animate-pulse" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <StatCounter target={250} label="Projects Delivered" suffix="+" />
              <StatCounter target={98} label="Client Satisfaction" suffix="%" />
              <StatCounter target={15} label="Global Markets" />
            </div>
          </Suspense>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500 uppercase tracking-widest">
          <div className="mb-4 md:mb-0">
            © 2024 Lecomake Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
