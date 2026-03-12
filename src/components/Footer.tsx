// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Column 1: Brand & Mission (Spans 4) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter block mb-8"
            >
              LECO<span className="text-brand-blue">MAKE</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Empowering global enterprises with the collective intelligence and
              advanced technical frameworks required for resilient growth in the
              digital era.
            </p>
            <div className="flex gap-4">
              {/* Social Icons - Minimalist Circles */}
              {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-brand-blue hover:border-brand-blue transition-all"
                >
                  {social[0]}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions (Spans 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue mb-8">
              Solutions
            </h4>
            <ul className="space-y-4">
              {[
                "Asset Management",
                "IT Services",
                "Cloud Security",
                "Strategy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (Spans 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {["About Us", "Careers", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA (Spans 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue mb-8">
              Subscribe
            </h4>
            <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest leading-loose">
              Get the latest institutional insights delivered to your inbox.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-gray-600"
              />
              <button className="absolute right-0 bottom-3 text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-white transition-colors">
                Join →
              </button>
            </form>
          </div>
        </div>

        {/* --- BOTTOM SECTION: LEGAL & LOCATIONS --- */}
        <div className="border-t border-white/5 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            {/* Disclaimer Text */}
            <div className="max-w-2xl">
              <p className="text-[9px] text-gray-600 leading-loose uppercase tracking-widest">
                © {currentYear} LECOMAKE PVT LTD. ALL RIGHTS RESERVED. <br />
                The information provided on this website is for institutional
                purposes only and does not constitute financial or professional
                advice. Lecomake is a registered global service provider.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 lg:justify-end">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Cookie Settings",
                "Sitemap",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
