// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-blackrock-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            LECO<span className="text-blackrock-blue">MAKE</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
            <Link href="#" className="hover:text-blackrock-blue transition">
              Solutions
            </Link>
            <Link href="#" className="hover:text-blackrock-blue transition">
              Insights
            </Link>
            <Link href="#" className="hover:text-blackrock-blue transition">
              About Us
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold border border-black px-4 py-2 hover:bg-black hover:text-white transition">
            Contact Sales
          </button>
        </div>
      </div>
    </nav>
  );
}
