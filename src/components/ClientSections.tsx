"use client";
import { useState, useEffect, useRef } from "react";
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Satellite card positions: collapsed (near center) → expanded (scattered) ─── */
type SatPos = { x: number; y: number; rot: number };
const SAT_COLLAPSED: SatPos[] = [
  { x: 0, y: 0, rot: 0 },
  { x: 0, y: 0, rot: 0 },
  { x: 0, y: 0, rot: 0 },
  { x: 0, y: 0, rot: 0 },
];
const SAT_EXPANDED: SatPos[] = [
  { x: -370, y: -190, rot: -4 }, // top-left
  { x: 370, y: -170, rot: 3 }, // top-right
  { x: -330, y: 190, rot: 2 }, // bottom-left
  { x: 330, y: 185, rot: -3 }, // bottom-right
];

const SATS = [
  {
    color: "#eff6ff",
    ic: "#3b82f6",
    tag: "Signal",
    title: "Status & Control",
    dot: (
      <>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22c55e",
            marginRight: 4,
          }}
        />
      </>
    ),
    content: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.5)",
          padding: "10px 14px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.6)",
          marginTop: 16,
        }}
      >
        <div
          style={{
            height: 6,
            width: 52,
            background: "rgba(203,213,225,0.6)",
            borderRadius: 3,
          }}
        />
        <div
          style={{
            width: 36,
            height: 22,
            background: "#3b82f6",
            borderRadius: 11,
            marginLeft: "auto",
            position: "relative",
            boxShadow: "0 2px 8px rgba(59,130,246,0.35)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 3,
              top: 3,
              width: 16,
              height: 16,
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    color: "#faf5ff",
    ic: "#a855f7",
    tag: "Modules",
    title: "Composable Grids",
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 8,
          marginTop: 16,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            style={{
              background:
                i === 3 || i === 6
                  ? "rgba(168,85,247,0.12)"
                  : "rgba(241,245,249,0.6)",
              border: `1px solid ${i === 3 || i === 6 ? "rgba(168,85,247,0.25)" : "rgba(226,232,240,0.4)"}`,
              borderRadius: 8,
              height: 28,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    color: "#ecfdf5",
    ic: "#10b981",
    tag: "Data",
    title: "Real-time Stream",
    content: (
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 5,
          height: 44,
          padding: "0 4px",
          marginTop: 16,
        }}
      >
        {[35, 60, 45, 80, 55, 90, 40, 70].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: `rgba(16,185,129,${h / 220 + 0.12})`,
              borderRadius: "3px 3px 0 0",
              transition: "height 0.6s ease",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    color: "#fffbeb",
    ic: "#f59e0b",
    tag: "Motion",
    title: "Interaction States",
    content: (
      <div
        style={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column" as const,
          gap: 10,
        }}
      >
        <div
          style={{
            height: 6,
            width: "100%",
            background: "rgba(245,158,11,0.15)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "68%",
              background: "linear-gradient(90deg,#f59e0b,#fbbf24)",
              borderRadius: 3,
            }}
          />
        </div>
        <div
          style={{
            height: 6,
            width: "100%",
            background: "rgba(245,158,11,0.1)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "42%",
              background: "rgba(245,158,11,0.4)",
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ),
  },
];

export function FloatingGallery() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const open = expanded || hovered;

  return (
    <section
      style={{
        overflow: "hidden",
        background: "rgba(248,250,252,0.5)",
        padding: "6rem 1.5rem",
        position: "relative",
      }}
    >
      {/* ambient blobs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: 600,
            height: 600,
            background: "rgba(203,213,225,0.35)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "20%",
            width: 500,
            height: 500,
            background: "rgba(241,245,249,0.5)",
            borderRadius: "50%",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 768,
          margin: "0 auto",
          textAlign: "center",
          marginBottom: 72,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(203,213,225,0.6)",
            backdropFilter: "blur(12px)",
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase" as const,
            letterSpacing: "0.14em",
            color: "#64748b",
            marginBottom: 24,
            boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
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
          System Gallery
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem,5vw,3.5rem)",
            fontWeight: 600,
            color: "#0f172a",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Interface Archive.
        </h2>
        <p
          style={{
            marginTop: 16,
            fontSize: 18,
            color: "#64748b",
            fontWeight: 300,
            maxWidth: 380,
            margin: "16px auto 0",
            lineHeight: 1.6,
          }}
        >
          {open
            ? "Click to collapse the layers."
            : "Hover or click to expand the component layers."}
        </p>
      </div>

      {/* Stage */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1100,
          height: 620,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded((v) => !v)}
      >
        {/* Satellite cards */}
        {SATS.map((sat, i) => {
          const pos = open ? SAT_EXPANDED[i] : SAT_COLLAPSED[i];
          const delay = open ? i * 60 : (SATS.length - 1 - i) * 40;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 272,
                zIndex: 20,
                opacity: open ? 1 : 0,
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rot}deg) scale(${open ? 1 : 0.88})`,
                transition: `opacity 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
                pointerEvents: open ? "auto" : "none",
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.75)",
                borderRadius: 28,
                padding: 22,
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                    color: "#94a3b8",
                  }}
                >
                  {sat.tag}
                </span>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: `${sat.color}`,
                    border: `1px solid ${sat.ic}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: sat.ic,
                      boxShadow: `0 0 6px ${sat.ic}66`,
                    }}
                  />
                </div>
              </div>
              <h4
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1e293b",
                  letterSpacing: "-0.01em",
                }}
              >
                {sat.title}
              </h4>
              {sat.content}
            </div>
          );
        })}

        {/* Center card */}
        <div
          style={{
            position: "relative",
            zIndex: 50,
            width: 372,
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.9)",
            borderRadius: 36,
            padding: 36,
            boxShadow: open
              ? "0 40px 80px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)"
              : "0 30px 60px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)",
            transform: open ? "scale(1.03)" : "scale(1)",
            transition:
              "box-shadow 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#94a3b8",
              }}
            >
              Layout
            </span>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(241,245,249,0.6)",
                border: "1px solid rgba(255,255,255,1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.5s",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
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
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="9" x2="9" y1="21" y2="9" />
              </svg>
            </div>
          </div>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Adaptive Container
          </h3>
          <p
            style={{
              marginTop: 12,
              fontSize: 14,
              color: "#64748b",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            Intelligent surfaces that restructure content hierarchy based on
            available viewport space.
          </p>

          {/* Mini UI preview */}
          <div
            style={{
              background: "rgba(248,250,252,0.7)",
              width: "100%",
              border: "1px solid rgba(226,232,240,0.5)",
              borderRadius: 18,
              marginTop: 28,
              padding: 14,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 6,
                  background: "#cbd5e1",
                  borderRadius: 3,
                }}
              />
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((j) => (
                  <div
                    key={j}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: j === 0 ? "#3b82f6" : "#e2e8f0",
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, height: 72 }}>
              <div
                style={{
                  width: "38%",
                  background: "rgba(226,232,240,0.5)",
                  borderRadius: 10,
                  border: "1px solid rgba(226,232,240,0.3)",
                }}
              />
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.7)",
                  borderRadius: 10,
                  border: "1px solid rgba(226,232,240,0.3)",
                  padding: "10px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: 6,
                    background: "#e2e8f0",
                    borderRadius: 3,
                  }}
                />
                <div
                  style={{
                    width: "85%",
                    height: 6,
                    background: "rgba(226,232,240,0.5)",
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Expand hint */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: open ? 0 : 0.6,
              transition: "opacity 0.4s",
              fontSize: 12,
              color: "#64748b",
              fontWeight: 500,
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
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            Hover to expand
          </div>
        </div>

        {/* Pulse ring when collapsed */}
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(148,163,184,0.2)",
            pointerEvents: "none",
            opacity: open ? 0 : 1,
            transform: open ? "scale(1.15)" : "scale(1)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1px solid rgba(148,163,184,0.1)",
            pointerEvents: "none",
            opacity: open ? 0 : 1,
            transform: open ? "scale(1.15)" : "scale(1)",
            transition: "opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s",
          }}
        />
      </div>
    </section>
  );
}

export function DimensionalColumns() {
  const hdr = useReveal(),
    c1 = useReveal(),
    c2 = useReveal(),
    c3 = useReveal();
  const cols = [
    {
      ref: c1,
      title: "Structure",
      delay: 0,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="3" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      body: "Layout containers, spacing systems, and hierarchy create stability. The grid is the invisible scaffolding that holds the visual weight.",
      preview: (
        <div
          style={{
            marginTop: 48,
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            background: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: 16,
            overflow: "hidden",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "25%",
              background: "rgba(203,213,225,0.5)",
              borderRadius: 8,
              border: "1px solid rgba(203,213,225,0.2)",
            }}
          />
          <div style={{ flex: 1, display: "flex", gap: 12 }}>
            <div
              style={{
                width: "33%",
                background: "rgba(203,213,225,0.5)",
                borderRadius: 8,
                border: "1px solid rgba(203,213,225,0.2)",
              }}
            />
            <div
              style={{
                flex: 1,
                background: "rgba(241,245,249,0.5)",
                borderRadius: 8,
                border: "1px solid rgba(203,213,225,0.2)",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: "66%",
                  height: 8,
                  background: "#e2e8f0",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: 8,
                  background: "rgba(226,232,240,0.5)",
                  borderRadius: 3,
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: 8,
                  background: "rgba(226,232,240,0.5)",
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      ref: c2,
      title: "Flow",
      delay: 100,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
          <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
          <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
      ),
      body: "Motion defines relationship. State changes and interaction feedback guide users through the interface with liquid continuity.",
      preview: (
        <div
          style={{
            marginTop: 48,
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            background: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: 16,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)",
          }}
        >
          <div style={{ width: "100%", padding: "0 32px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 8,
                background: "#e2e8f0",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "33%",
                  background: "rgba(15,23,42,0.8)",
                  borderRadius: 4,
                }}
              />
            </div>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: "#f1f5f9",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#cbd5e1",
                  }}
                />
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#0f172a",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                  outline: "4px solid rgba(255,255,255,0.6)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#e2e8f0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      ref: c3,
      title: "Vision",
      delay: 200,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      body: "Depth, glass surfaces, and shadows create a tactile reality. Visual clarity ensures the system feels breathable and precise.",
      preview: (
        <div
          style={{
            marginTop: 48,
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            background: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(248,250,252,0.7),rgba(255,255,255,0.7))",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 112,
              height: 80,
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
              transform: "rotate(-12deg) translate(8px,8px)",
              zIndex: 10,
              transition: "transform 0.7s",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 112,
              height: 80,
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              borderRadius: 12,
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
              transform: "rotate(6deg) translate(-16px,-8px)",
              zIndex: 20,
              transition: "transform 0.7s",
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <section
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "8rem 1.5rem",
        position: "relative",
      }}
    >
      <div
        ref={hdr}
        className="reveal-on-scroll"
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem,5vw,3.5rem)",
            fontWeight: 600,
            color: "#0f172a",
            letterSpacing: "-0.04em",
            marginBottom: 24,
            lineHeight: 1.1,
          }}
        >
          Three Dimensions of a<br />
          Modern Interface
        </h2>
        <p
          style={{
            fontSize: 20,
            color: "#64748b",
            maxWidth: 512,
            margin: "0 auto",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Structure organizes content, Flow governs interaction, and Vision
          defines the experience. Together they form the foundation of the
          system.
        </p>
      </div>
      <div className="three-col-grid">
        {cols.map((col) => (
          <div
            key={col.title}
            ref={col.ref}
            className="glass-panel reveal-on-scroll"
            style={{
              borderRadius: 40,
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transitionDelay: `${col.delay}ms`,
            }}
          >
            <div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(203,213,225,0.7)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 32,
                  color: "#334155",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
                }}
              >
                {col.icon}
              </div>
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                {col.title}
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.7 }}>{col.body}</p>
            </div>
            {col.preview}
          </div>
        ))}
      </div>
    </section>
  );
}
