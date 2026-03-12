// src/components/ServiceGrid.tsx
import Link from "next/link";

const expertise = [
  {
    id: "01",
    title: "Asset Management",
    description:
      "Driving long-term value through institutional-grade portfolio strategies and risk-adjusted market analysis.",
    capabilities: [
      "Portfolio Strategy",
      "Risk Mitigation",
      "Capital Markets",
      "Fiduciary Management",
    ],
    link: "/asset-management",
  },
  {
    id: "02",
    title: "IT Services",
    description:
      "Architecting resilient digital infrastructures and custom enterprise solutions for the modern age.",
    capabilities: [
      "Cloud Infrastructure",
      "Custom Software",
      "Cybersecurity",
      "Digital Transformation",
    ],
    link: "/it-services",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 px-6 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-brand-border pb-12 mb-0">
          <div className="max-w-2xl">
            <span className="text-brand-blue font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Institutional Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-bold text-brand-black hover:text-brand-blue transition-colors border-b-2 border-brand-black pb-1 uppercase tracking-widest hidden md:block"
          >
            All Capabilities →
          </Link>
        </div>

        {/* 2-Column Grid for Dual Services */}
        <div className="grid md:grid-cols-2">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="group relative p-12 md:p-16 border-b lg:border-b-0 border-brand-border even:border-l-0 md:even:border-l border-brand-border transition-all duration-500 hover:bg-brand-bg flex flex-col justify-between min-h-[500px]"
            >
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-16">
                  {item.id}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-md">
                  {item.description}
                </p>

                {/* Capability Tags - BlackRock Detail */}
                <ul className="grid grid-cols-2 gap-y-4">
                  {item.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-border group-hover:bg-brand-blue transition-colors" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-16 flex items-center justify-between">
                <Link
                  href={item.link}
                  className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-brand-blue"
                >
                  Explore Service
                </Link>
                <div className="w-12 h-[1px] bg-brand-border group-hover:w-24 group-hover:bg-brand-blue transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
