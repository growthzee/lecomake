// src/components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "EN", label: "English (Global)" },
    { code: "DE", label: "Deutsch" },
    { code: "FR", label: "Français" },
    { code: "JP", label: "日本語" },
  ];

  // Handle Scroll and Outside Clicks
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);

    // Prevent body scroll when mobile menu is active
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const isHeaderActive =
    scrolled || activeMenu === "Services" || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[110] transition-all duration-500 ${
          isHeaderActive
            ? "bg-white/95 backdrop-blur-xl border-b border-brand-border py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* --- LOGO AREA --- */}
          <Link
            href="/"
            className="flex items-center gap-2 group relative z-[120]"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500 ${
                isHeaderActive ? "bg-brand-black" : "bg-white"
              }`}
            >
              <span
                className={`text-xs font-bold -rotate-45 group-hover:rotate-0 transition-transform tracking-tighter ${
                  isHeaderActive ? "text-white" : "text-brand-black"
                }`}
              >
                L
              </span>
            </div>
            <span
              className={`text-xl font-bold tracking-tighter transition-colors ${
                isHeaderActive ? "text-brand-black" : "text-white"
              }`}
            >
              LECO<span className="text-brand-blue">MAKE</span>
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-12 h-full">
            {["Home", "Services", "Careers", "About", "Contact"].map((item) => (
              <div
                key={item}
                className="relative py-2"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-colors ${
                    isHeaderActive
                      ? "text-gray-600 hover:text-brand-blue"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
                {/* Underline Indicator */}
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${
                    activeMenu === item ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-4 md:gap-8 relative z-[120]">
            {/* Language Selector */}
            <div className="relative hidden md:block" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`text-sm font-bold flex items-center gap-2 transition-colors ${
                  isHeaderActive ? "text-brand-black" : "text-white"
                }`}
              >
                {currentLang}
                <span
                  className={`text-[10px] opacity-40 italic transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`absolute top-full right-0 mt-4 w-56 bg-white border border-brand-border shadow-2xl transition-all duration-300 transform origin-top-right ${
                  langOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-brand-black hover:bg-brand-bg hover:text-brand-blue transition-colors flex justify-between items-center"
                    >
                      {lang.label}
                      {currentLang === lang.code && (
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Portal CTA */}
            <button
              className={`hidden sm:block px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                isHeaderActive
                  ? "border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-brand-black"
              }`}
            >
              Client Portal
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 justify-center items-center w-10 h-10 transition-colors ${
                isHeaderActive ? "text-brand-black" : "text-white"
              }`}
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* --- DESKTOP MEGA MENU --- */}
        <div
          onMouseEnter={() => setActiveMenu("Services")}
          onMouseLeave={() => setActiveMenu(null)}
          className={`hidden lg:block absolute top-full left-0 w-full bg-white border-b border-brand-border shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
            activeMenu === "Services"
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-12">
            {/* Asset Management Column */}
            <div className="col-span-4 p-12 border-r border-brand-border hover:bg-brand-bg transition-colors group/item">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-6 block">
                01 / Strategies
              </span>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter text-brand-black">
                Asset Management
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Driving long-term value through institutional-grade portfolio
                strategies.
              </p>
              <ul className="space-y-4 mb-10 text-brand-black">
                {[
                  "Fiduciary Management",
                  "Risk Analytics",
                  "Capital Markets",
                ].map((li) => (
                  <li
                    key={li}
                    className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer"
                  >
                    <span className="w-1.5 h-[1px] bg-brand-blue" /> {li}
                  </li>
                ))}
              </ul>
              <Link
                href="/asset-management"
                className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-black pb-1 hover:text-brand-blue hover:border-brand-blue transition-all inline-block text-brand-black"
              >
                View Strategy →
              </Link>
            </div>

            {/* IT Services Column */}
            <div className="col-span-4 p-12 border-r border-brand-border hover:bg-brand-bg transition-colors group/item">
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-6 block">
                02 / Infrastructure
              </span>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter text-brand-black">
                IT Services
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Architecting resilient digital backbones for modern global
                enterprises.
              </p>
              <ul className="space-y-4 mb-10 text-brand-black">
                {["Custom Engineering", "Cloud Security", "Enterprise AI"].map(
                  (li) => (
                    <li
                      key={li}
                      className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer"
                    >
                      <span className="w-1.5 h-[1px] bg-brand-blue" /> {li}
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/it-services"
                className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-black pb-1 hover:text-brand-blue hover:border-brand-blue transition-all inline-block text-brand-black"
              >
                Explore Tech →
              </Link>
            </div>

            {/* Featured Insight Column */}
            <div className="col-span-4 bg-brand-bg p-12 flex flex-col justify-between">
              <div className="text-brand-black">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 block">
                  Quarterly Perspectives
                </span>
                <h4 className="text-lg font-bold leading-tight mb-4 text-brand-black">
                  &quot;Infrastructure Resilience in a Volatile Market&quot;
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Download our latest institutional brief on cross-sector
                  digital transformation.
                </p>
              </div>
              <button className="w-full py-4 bg-brand-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue transition-colors">
                Download Briefing
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE FULL-SCREEN NAVIGATION --- */}
      <div
        className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-32 px-8 h-full flex flex-col overflow-y-auto">
          <nav className="flex flex-col gap-10 mb-12">
            {["Home", "Services", "Careers", "About", "Contact"].map((item) => (
              <div key={item} className="border-b border-brand-border pb-6">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold uppercase tracking-tighter text-brand-black"
                >
                  {item}
                </Link>
                {item === "Services" && (
                  <div className="mt-6 grid gap-4 pl-6 border-l-2 border-brand-blue/30">
                    <Link
                      href="/asset-management"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-gray-400 uppercase tracking-widest"
                    >
                      Asset Management
                    </Link>
                    <Link
                      href="/it-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-gray-400 uppercase tracking-widest"
                    >
                      IT Services
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pb-12 grid gap-8">
            <div className="flex gap-6">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setCurrentLang(l.code)}
                  className={`text-xs font-bold tracking-widest ${currentLang === l.code ? "text-brand-blue" : "text-gray-400"}`}
                >
                  {l.code}
                </button>
              ))}
            </div>
            <button className="w-full bg-brand-black text-white py-5 font-bold uppercase tracking-widest text-[10px]">
              Client Portal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
