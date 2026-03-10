"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const floaterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current,
      floater = floaterRef.current;
    if (!card || !floater) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      card.style.transform = `rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
    };
    const onLeave = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (window.innerWidth < 1024)
            floater.classList.toggle("is-mobile-visible", e.isIntersecting);
        }),
      { threshold: 0.6 },
    );
    obs.observe(floater);
    const onResize = () => {
      if (window.innerWidth >= 1024)
        floater.classList.remove("is-mobile-visible");
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      obs.disconnect();
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 5%",
      }}
    >
      <div className="hero-layout">
        {/* Left – text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3.5rem,6vw,5.5rem)",
              fontWeight: 800,
              color: "var(--primary)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            Liquid
            <br />
            Intelligence.
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem,1.5vw,1.3rem)",
              color: "var(--text-muted)",
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            Experience the next generation of seamless digital design. Crafted
            with hyper-fluid mechanics, adaptive rendering, and elegant
            precision.
          </p>
          <button className="cta-btn">Discover More</button>
        </div>

        {/* Right – floating card */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            perspective: "1200px",
          }}
        >
          <div
            ref={floaterRef}
            className="card-floater"
            style={{ position: "relative" }}
          >
            <div ref={cardRef} className="glass-card">
              <div className="card-header">
                <div className="card-icon" />
                <div className="card-title-line" />
              </div>
              <div className="card-hologram" />
              <div className="card-footer">
                <div className="card-line" />
                <div className="card-line" />
              </div>
            </div>

            {/* Mini card: Security – left */}
            <div
              className="mini-card-wrapper left-tucked"
              style={{
                position: "absolute",
                left: "-64px",
                top: "10rem",
                width: "10rem",
                zIndex: 40,
              }}
            >
              <div
                className="float-subtle-3"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: "12px",
                  borderRadius: 16,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(248,250,252,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "rgba(148,163,184,0.8)",
                      letterSpacing: "0.1em",
                      marginBottom: 2,
                    }}
                  >
                    Security
                  </p>
                  <p
                    style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}
                  >
                    Verified
                  </p>
                </div>
              </div>
            </div>

            {/* Mini card: Power – bottom-right */}
            <div
              className="mini-card-wrapper"
              style={{
                position: "absolute",
                right: "-40px",
                bottom: "6rem",
                width: "11rem",
                zIndex: 40,
                transitionDelay: "200ms",
              }}
            >
              <div
                className="float-subtle-2"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  padding: "14px",
                  borderRadius: 16,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: "0.1em",
                      marginBottom: 2,
                    }}
                  >
                    Power
                  </p>
                  <p
                    style={{ fontSize: 12, fontWeight: 700, color: "#1e293b" }}
                  >
                    99.9% Stable
                  </p>
                </div>
              </div>
            </div>

            {/* Mini card: System – top-right */}
            <div
              className="mini-card-wrapper"
              style={{
                position: "absolute",
                top: "4rem",
                right: "-96px",
                width: "12rem",
                zIndex: 40,
                transitionDelay: "100ms",
              }}
            >
              <div
                className="float-subtle-1"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  padding: "14px",
                  borderRadius: 16,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "#94a3b8",
                      letterSpacing: "0.1em",
                      marginBottom: 2,
                    }}
                  >
                    System
                  </p>
                  <p
                    style={{ fontSize: 12, fontWeight: 700, color: "#1e293b" }}
                  >
                    Operational
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
