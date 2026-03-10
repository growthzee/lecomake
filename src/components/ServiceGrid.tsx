// src/components/ServiceGrid.tsx
const expertise = [
  { id: "01", title: "Institutional Consulting", link: "/consulting" },
  { id: "02", title: "Digital Transformation", link: "/digital" },
  { id: "03", title: "Asset Management IT", link: "/assets" },
  { id: "04", title: "Cybersecurity Governance", link: "/security" },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline border-b border-brand-border pb-8 mb-0">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">
            Our Expertise
          </h2>
          <span className="text-sm font-bold text-brand-blue cursor-pointer hover:underline">
            EXPLORE ALL SERVICES →
          </span>
        </div>

        {/* Tailwind v4 dynamic grid scale */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="p-10 border-r border-b border-brand-border hover:bg-brand-bg transition-colors cursor-pointer group"
            >
              <span className="text-xs font-mono text-gray-400 block mb-12">
                {item.id}
              </span>
              <h3 className="text-xl font-bold mb-6 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <div className="h-1 w-0 group-hover:w-full bg-brand-blue transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
