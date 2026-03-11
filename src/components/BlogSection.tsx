import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    category: "Market Analysis",
    title: "The Shift Toward Sustainable Infrastructure in 2026",
    excerpt:
      "How global capital is moving toward resilient IT frameworks and green energy consulting.",
    date: "Mar 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Technology",
    title: "AI Governance: Managing Risk in Automated Systems",
    excerpt:
      "Strategies for institutional leaders to implement ethical AI frameworks.",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-24 px-6 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-brand-border pb-8">
          <div>
            <span className="text-brand-blue font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
              Knowledge Center
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              Insights & Perspectives
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-sm font-bold border-b-2 border-brand-black pb-1 hover:text-brand-blue hover:border-brand-blue transition-all"
          >
            VIEW ALL INSIGHTS
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border-l border-t border-brand-border">
          {/* Featured Post (Spans 8 columns) */}
          <div className="lg:col-span-8 border-r border-b border-brand-border group cursor-pointer overflow-hidden">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src={blogs[0].image}
                alt="Featured Insight"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-brand-blue text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Featured
                </span>
                <h3 className="text-3xl font-bold text-white mt-4 leading-tight group-hover:underline">
                  {blogs[0].title}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                {blogs[0].excerpt}
              </p>
              <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span>{blogs[0].date}</span>
                <span>•</span>
                <span>{blogs[0].readTime}</span>
              </div>
            </div>
          </div>

          {/* Secondary Posts (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col">
            {blogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="p-8 border-r border-b border-brand-border hover:bg-brand-bg transition-colors h-full group"
              >
                <span className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4 block">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-brand-blue transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-8 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-border/50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {blog.readTime}
                  </span>
                  <span className="text-brand-black group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
            {/* Newsletter CTA Block */}
            <div className="p-8 border-r border-b border-brand-border bg-brand-black text-white h-full flex flex-col justify-center">
              <h4 className="text-lg font-bold mb-4">
                Subscribe to Lecomake Briefs
              </h4>
              <p className="text-xs text-gray-400 mb-6">
                Get the latest institutional insights delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-white/20 py-2 text-sm mb-4 outline-none focus:border-brand-blue transition-colors"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest text-brand-blue text-left hover:text-white transition-colors">
                Join Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
