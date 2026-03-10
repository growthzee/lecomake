"use client";
import { useEffect, useRef } from "react";

const phases = [
  {
    num: "01",
    title: "Inception",
    body: "The core liquid geometry is established, creating a monochromatic baseline for adaptive rendering.",
    side: "left",
  },
  {
    num: "02",
    title: "Expansion",
    body: "Systems scale laterally across the grid, introducing deep-layer volume without breaking visual continuity.",
    side: "right",
  },
  {
    num: "03",
    title: "Integration",
    body: "Seamless unification of all interface nodes. Data flows effortlessly through the polished infrastructure.",
    side: "left",
  },
] as const;

export default function LiquidTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const steps = Array.from(section.querySelectorAll<HTMLElement>(".tl-step"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === section) {
            section.classList.add("is-inview");
            return;
          }
          const el = entry.target as HTMLElement;
          const idx = steps.indexOf(el);
          el.style.transitionDelay = Math.min(idx * 120, 360) + "ms";
          el.classList.add("is-inview");
          io.unobserve(el);
        });
      },
      { threshold: 0.28, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(section);
    steps.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="liquid-timeline"
      ref={sectionRef}
      style={{
        overflow: "hidden",
        background: "rgba(248,250,252,0.3)",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
      }}
    >
      {/* Title */}
      <div
        className="tl-title"
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          marginBottom: 96,
          position: "relative",
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(203,213,225,0.7)",
            backdropFilter: "blur(12px)",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            color: "#64748b",
            boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#94a3b8",
            }}
          />
          Liquid Timeline
        </div>
        <h2
          style={{
            marginTop: 24,
            fontSize: "clamp(2rem,5vw,3.5rem)",
            fontWeight: 600,
            color: "#0f172a",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          A calm system that evolves in phases.
        </h2>
        <p
          style={{
            marginTop: 16,
            fontSize: 20,
            color: "#64748b",
            maxWidth: 512,
            margin: "16px auto 0",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Minimal, monochrome progression with subtle depth and gentle motion.
        </p>
      </div>

      <div
        className="tl-spine"
        aria-hidden="true"
        style={{
          maskImage:
            "linear-gradient(180deg,transparent,black 30%,black 100%,transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg,transparent,black 30%,black 100%,transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          background: "#fff",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: 160,
        }}
      >
        {phases.map((phase, idx) => (
          <div
            key={phase.num}
            className="tl-step tl-row group"
            style={{ transitionDelay: `${idx * 120}ms`, position: "relative" }}
          >
            {/* Desktop Node */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "3.5rem",
                transform: "translateX(-50%)",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20,
              }}
              className="tl-node-wrap"
            >
              <style>{`.tl-node-wrap{display:none}@media(min-width:768px){.tl-node-wrap{display:flex}}`}</style>
              <div
                className="tl-halo"
                style={{
                  position: "absolute",
                  width: 96,
                  height: 96,
                  border: "1px solid rgba(241,245,249,0.5)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
              <div
                className="tl-node animate-breathe"
                style={{
                  width: 56,
                  height: 56,
                  background: "#fff",
                  borderRadius: "50%",
                  border: "1px solid #f1f5f9",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.04),inset 0 2px 4px rgba(255,255,255,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animationDelay: `${idx * 1.5}s`,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#cbd5e1",
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            </div>

            {phase.side === "left" ? (
              <>
                <div style={{ textAlign: "right", paddingRight: 96 }}>
                  <div
                    style={{
                      position: "relative",
                      background: "#fff",
                      borderRadius: 16,
                      padding: "2.5rem",
                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.03),0 12px 24px rgba(0,0,0,0.02),inset 0 1px 0 rgba(255,255,255,1)",
                      border: "1px solid rgba(241,245,249,0.8)",
                      transition: "transform 0.5s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        color: "#94a3b8",
                        textTransform: "uppercase" as const,
                        marginBottom: 16,
                      }}
                    >
                      Phase {phase.num}
                    </div>
                    <h3
                      style={{
                        fontSize: 30,
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: 16,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      style={{
                        color: "#64748b",
                        lineHeight: 1.7,
                        fontSize: 18,
                        fontWeight: 300,
                      }}
                    >
                      {phase.body}
                    </p>
                  </div>
                </div>
                <div />
              </>
            ) : (
              <>
                <div />
                <div style={{ paddingLeft: 96 }}>
                  <div
                    style={{
                      position: "relative",
                      background: "#fff",
                      borderRadius: 16,
                      padding: "2.5rem",
                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.03),0 12px 24px rgba(0,0,0,0.02),inset 0 1px 0 rgba(255,255,255,1)",
                      border: "1px solid rgba(241,245,249,0.8)",
                      transition: "transform 0.5s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        color: "#94a3b8",
                        textTransform: "uppercase" as const,
                        marginBottom: 16,
                      }}
                    >
                      Phase {phase.num}
                    </div>
                    <h3
                      style={{
                        fontSize: 30,
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: 16,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      style={{
                        color: "#64748b",
                        lineHeight: 1.7,
                        fontSize: 18,
                        fontWeight: 300,
                      }}
                    >
                      {phase.body}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
