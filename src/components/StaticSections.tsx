// OrbitalSection
export function OrbitalSection() {
  const cards = [
    {
      pos: { top: 0, left: "50%", transform: "translate(-50%,-50%)" },
      color: "#eff6ff",
      ic: "#3b82f6",
      title: "Secure Core",
      sub: "Encrypted architecture",
      icon: (
        <svg
          className="w-5 h-5"
          style={{ width: 20, height: 20 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      pos: { top: "50%", right: 0, transform: "translate(50%,-50%)" },
      color: "#faf5ff",
      ic: "#a855f7",
      title: "Instant Sync",
      sub: "Real-time latency mesh",
      icon: (
        <svg
          style={{ width: 20, height: 20 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      pos: { bottom: 0, left: "50%", transform: "translate(-50%,50%)" },
      color: "#fffbeb",
      ic: "#f59e0b",
      title: "Unified Data",
      sub: "Single source of truth",
      icon: (
        <svg
          style={{ width: 20, height: 20 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      pos: { top: "50%", left: 0, transform: "translate(-50%,-50%)" },
      color: "#ecfdf5",
      ic: "#10b981",
      title: "Global Edge",
      sub: "Distributed worldwide",
      icon: (
        <svg
          style={{ width: 20, height: 20 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(248,250,252,0.3)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 800,
          height: 800,
          transform: "scale(0.45)",
          transformOrigin: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="orbital-scale"
      >
        <style>{`@media(min-width:768px){.orbital-scale{transform:scale(0.75)!important}}@media(min-width:1024px){.orbital-scale{transform:scale(1)!important}}`}</style>
        {/* Center */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: 128,
            height: 128,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 100px rgba(14,165,233,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #f1f5f9",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(239,246,255,0.5)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 80,
              height: 80,
              background: "linear-gradient(135deg,#fff,#f8fafc)",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              style={{ width: 24, height: 24, color: "rgba(59,130,246,0.8)" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
            </svg>
          </div>
        </div>
        {/* Orbit */}
        <div
          className="animate-orbit-track"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(15,23,42,0.03)",
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                ...c.pos,
                width: 256,
                height: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="animate-orbit-card" style={{ width: "100%" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.6)",
                    padding: 16,
                    borderRadius: 16,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: c.color,
                      border: `1px solid ${c.ic}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: c.ic,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1e293b",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {c.title}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#64748b",
                        fontWeight: 500,
                      }}
                    >
                      {c.sub}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 180,
            border: "1px solid rgba(15,23,42,0.02)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 280,
            border: "1px solid rgba(15,23,42,0.015)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

// MarqueeSection
export function MarqueeSection() {
  return (
    <section
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee-track"
        style={{
          maskImage:
            "linear-gradient(90deg,transparent,black 30%,black 60%,transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg,transparent,black 30%,black 60%,transparent)",
        }}
      >
        {[
          "LIQUID SYSTEMS",
          "COMPUTATIONAL DESIGN",
          "FUTURE INTERFACES",
          "LIQUID SYSTEMS",
        ].map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: "8rem",
              fontWeight: 900,
              color: "var(--primary)",
              opacity: 0.05,
              margin: "0 3rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

// CTASection
export function CTASection() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: "80vh",
        padding: "0 1.5rem",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom,transparent,rgba(255,255,255,0.2))",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          width: 128,
          height: 128,
          borderRadius: "50%",
          background: "rgba(96,165,250,0.2)",
          filter: "blur(80px)",
          position: "absolute",
        }}
      />
      <h2
        style={{
          fontSize: "clamp(3rem,8vw,5rem)",
          fontWeight: 700,
          color: "var(--primary)",
          letterSpacing: "-0.04em",
          marginBottom: 32,
          position: "relative",
          zIndex: 1,
        }}
      >
        Ready to flow?
      </h2>
      <button
        className="cta-btn"
        style={{ fontSize: "1.1rem", padding: "1.25rem 3rem" }}
      >
        Get Started Now
      </button>
    </section>
  );
}

// Footer
export function Footer() {
  const cols = [
    {
      cls: "fc-product",
      head: "Product",
      links: ["Components", "Templates", "Pricing", "Enterprise"],
    },
    {
      cls: "fc-res",
      head: "Resources",
      links: ["Documentation", "API Reference", "Community Hub", "Changelog"],
    },
    {
      cls: "fc-company",
      head: "Company",
      links: ["About", "Careers", "Blog", "Contact"],
    },
  ];
  return (
    <footer
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid #e2e8f0",
        paddingTop: 80,
        paddingBottom: 40,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="footer-cols" style={{ marginBottom: 80 }}>
          <div className="fc-brand">
            <a href="#" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}
              >
                LIQUID
              </span>
            </a>
            <p
              style={{
                marginTop: 24,
                color: "#64748b",
                lineHeight: 1.6,
                maxWidth: 320,
              }}
            >
              A design methodology for the modern web. Fluid mechanics, adaptive
              rendering, and elegant precision.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.head} className={c.cls}>
              <h4
                style={{
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: 24,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.head}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "#64748b",
                        textDecoration: "none",
                      }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid #f1f5f9",
            display: "flex",
            flexWrap: "wrap" as const,
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <p style={{ fontSize: 14, color: "#94a3b8" }}>
            © 2024 Liquid Glass Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="#" aria-label="Twitter" style={{ color: "#94a3b8" }}>
              <svg
                style={{ width: 20, height: 20 }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" style={{ color: "#94a3b8" }}>
              <svg
                style={{ width: 20, height: 20 }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
