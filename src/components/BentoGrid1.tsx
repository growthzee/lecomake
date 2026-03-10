"use client";
import { useEffect, useRef } from "react";

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

export default function BentoGrid1() {
  const r1 = useReveal(),
    r2 = useReveal(),
    r3 = useReveal(),
    r4 = useReveal();

  return (
    <section
      style={{ maxWidth: 1400, margin: "0 auto", padding: "8rem 1.5rem" }}
    >
      <div className="bento1-grid">
        {/* Card 1 – Neural Intelligence (wide) */}
        <div
          ref={r1}
          className="glass-panel reveal-on-scroll"
          style={{
            borderRadius: 32,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "2.5rem",
          }}
        >
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(147,197,253,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg
                className="w-6 h-6"
                style={{ width: 24, height: 24, color: "#2563eb" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "var(--primary)",
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Neural Intelligence
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 18,
                lineHeight: 1.6,
              }}
            >
              Adaptive processing power that scales directly with user
              interaction depth.
            </p>
          </div>
          <div className="bento1-subrow">
            {/* CPU Load Chart */}
            <div
              className="flex-fill"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: 16,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                minHeight: 160,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.4,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  CPU Load
                </span>
                <div style={{ display: "flex", gap: 6 }}>
                  {[true, false, false].map((a, i) => (
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: a ? "#3b82f6" : "#cbd5e1",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 6,
                  flex: 1,
                  paddingTop: 16,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[30, 50, 80, 100, 60, 40, 45, 20].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: "2px 2px 0 0",
                      background: `rgba(59,130,246,${h / 200 + 0.05})`,
                      position: "relative",
                    }}
                  >
                    {h === 100 && (
                      <div
                        style={{
                          position: "absolute",
                          top: -6,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#3b82f6",
                          boxShadow: "0 0 10px rgba(59,130,246,0.6)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Active Tasks */}
            <div
              className="flex-third"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: 16,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Active Tasks
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#dbeafe",
                    border: "1px solid #bfdbfe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#3b82f6",
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      height: 6,
                      width: "100%",
                      background: "#cbd5e1",
                      borderRadius: 3,
                    }}
                  />
                  <div
                    style={{
                      height: 6,
                      width: "66%",
                      background: "#e2e8f0",
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: 0.6,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#cbd5e1",
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      height: 6,
                      width: "83%",
                      background: "#cbd5e1",
                      borderRadius: 3,
                    }}
                  />
                  <div
                    style={{
                      height: 6,
                      width: "50%",
                      background: "#e2e8f0",
                      borderRadius: 3,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 – Deep Layers (narrow) */}
        <div
          ref={r2}
          className="glass-panel reveal-on-scroll"
          style={{
            borderRadius: 32,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(147,197,253,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg
                style={{ width: 24, height: 24, color: "#0891b2" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "var(--primary)",
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Deep Layers
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              Multi-plane rendering with zero latency.
            </p>
          </div>
          <div
            style={{
              marginTop: 40,
              position: "relative",
              height: 176,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "85%",
                bottom: 64,
                height: 96,
                background: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: 12,
                transition: "transform 0.5s",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "92%",
                bottom: 32,
                height: 96,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: 12,
                backdropFilter: "blur(8px)",
                transition: "transform 0.5s",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                height: 96,
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,1)",
                borderRadius: 12,
                backdropFilter: "blur(20px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#f0f9ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{ width: 24, height: 24, color: "#06b6d4" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    height: 10,
                    background: "#cbd5e1",
                    width: "50%",
                    borderRadius: 3,
                  }}
                />
                <div
                  style={{
                    height: 8,
                    background: "#e2e8f0",
                    width: "33%",
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 – Instant State (narrow) */}
        <div
          ref={r3}
          className="glass-panel reveal-on-scroll"
          style={{
            borderRadius: 32,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(147,197,253,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg
                style={{ width: 24, height: 24, color: "#4f46e5" }}
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
            <h3
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "var(--primary)",
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Instant State
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              Fluid state management.
            </p>
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Active toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,1)",
                padding: 16,
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "#eef2ff",
                    border: "1px solid #e0e7ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{ width: 14, height: 14, color: "#6366f1" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    height: 10,
                    width: 96,
                    background: "#1e293b",
                    borderRadius: 3,
                  }}
                />
              </div>
              <div
                style={{
                  width: 44,
                  height: 24,
                  background: "#6366f1",
                  borderRadius: 12,
                  position: "relative",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: 2,
                    top: 2,
                    width: 20,
                    height: 20,
                    background: "#fff",
                    borderRadius: "50%",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            </div>
            {[112, 64].map((w, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  padding: 16,
                  borderRadius: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "#f1f5f9",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <div
                    style={{
                      height: 8,
                      width: w,
                      background: "#94a3b8",
                      borderRadius: 3,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 44,
                    height: 24,
                    background: "#e2e8f0",
                    borderRadius: 12,
                    position: "relative",
                    border: "1px solid #cbd5e1",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 2,
                      top: 2,
                      width: 20,
                      height: 20,
                      background: "#fff",
                      borderRadius: "50%",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4 – Global Network (wide) */}
        <div
          ref={r4}
          className="glass-panel reveal-on-scroll"
          style={{
            borderRadius: 32,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(147,197,253,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg
                style={{ width: 24, height: 24, color: "#9333ea" }}
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
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#0f172a",
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}
            >
              Global Network
            </h3>
            <p style={{ color: "#64748b", maxWidth: 448 }}>
              Distributed processing infrastructure with ultra-low latency and
              real-time synchronization across intelligent nodes.
            </p>
          </div>
          <div className="bento1-card4-row">
            {/* Map */}
            <div
              className="c4-map"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: 16,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 160,
              }}
            >
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.3,
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M 15,30 L 40,60 L 65,35 L 85,75"
                  stroke="#a855f7"
                  strokeWidth="0.5"
                  fill="none"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 40,60 L 55,85"
                  stroke="#a855f7"
                  strokeWidth="0.5"
                  fill="none"
                  strokeDasharray="2 2"
                />
              </svg>
              {[
                { top: "30%", left: "15%", size: 14, color: "#c084fc" },
                {
                  top: "60%",
                  left: "40%",
                  size: 20,
                  color: "#fff",
                  ping: true,
                },
                { top: "35%", left: "65%", size: 12, color: "#d8b4fe" },
                { top: "75%", left: "85%", size: 14, color: "#c084fc" },
                { top: "85%", left: "55%", size: 10, color: "#cbd5e1" },
              ].map((n, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: n.top,
                    left: n.left,
                    width: n.size,
                    height: n.size,
                    borderRadius: "50%",
                    background: n.color,
                    border: n.ping
                      ? "2px solid #e9d5ff"
                      : "1px solid rgba(255,255,255,0.8)",
                    boxShadow: n.ping
                      ? "0 0 20px rgba(168,85,247,0.3)"
                      : "0 0 15px rgba(168,85,247,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {n.ping && (
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#a855f7",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Data panels */}
            <div className="c4-data">
              {[
                {
                  label: "Global Latency",
                  value: "12",
                  unit: "ms",
                  barW: "15%",
                  barColor: "#a855f7",
                },
                { label: "Active Nodes", value: "3,492" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    borderRadius: 12,
                    padding: 20,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    style={{ display: "flex", alignItems: "baseline", gap: 6 }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {item.value}
                    </span>
                    {item.unit && (
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#a855f7",
                        }}
                      >
                        {item.unit}
                      </span>
                    )}
                  </div>
                  {item.barW && (
                    <div
                      style={{
                        marginTop: 12,
                        height: 6,
                        width: "100%",
                        background: "#e2e8f0",
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: item.barW,
                          background: item.barColor,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                  )}
                  {!item.barW && (
                    <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                      {[0.2, 0.4, 0.6, 0.2].map((o, j) => (
                        <div
                          key={j}
                          style={{
                            height: 8,
                            flex: 1,
                            background: `rgba(168,85,247,${o})`,
                            borderRadius: 3,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
