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

export default function BentoGrid2() {
  const hdr = useReveal();
  const S = {
    cardBase: {
      borderRadius: 40,
      overflow: "hidden" as const,
      transition: "all 0.7s",
    },
    lightCard: {
      background: "rgba(255,255,255,0.4)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)" as string,
      border: "1px solid rgba(255,255,255,0.6)",
      boxShadow: "0 18px 55px rgba(15,23,42,0.06)",
    },
    darkCard: {
      background: "#0f172a",
      border: "1px solid #1e293b",
      boxShadow: "0 22px 70px rgba(15,23,42,0.22)",
    },
  };

  return (
    <section
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        paddingBottom: "8rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Header */}
      <div
        ref={hdr}
        className="reveal-on-scroll"
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 9999,
            background: "rgba(241,245,249,0.5)",
            border: "1px solid #e2e8f0",
            backdropFilter: "blur(12px)",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            color: "#64748b",
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
          Architecture
        </div>
        <h2
          style={{
            marginTop: 32,
            fontSize: "clamp(2.5rem,6vw,4.5rem)",
            fontWeight: 500,
            color: "#0f172a",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          Monochromatic
          <br />
          Precision.
        </h2>
        <p
          style={{
            marginTop: 24,
            fontSize: 20,
            color: "#64748b",
            maxWidth: 512,
            margin: "24px auto 0",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          A layout system stripped to its essence. No distractions, just pure
          structural integrity and content focus.
        </p>
      </div>

      <div className="bento2-grid">
        {/* Card 1 – Adaptive Layouts – span 8 */}
        <div className="b2-span8" style={{ ...S.cardBase, ...S.lightCard }}>
          <div className="b2c1-inner" style={{ padding: "3rem" }}>
            <div
              className="b2c1-text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#0f172a",
                    fontWeight: 500,
                    fontSize: 14,
                    marginBottom: 16,
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                  Interface 01
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem,3vw,2.25rem)",
                    fontWeight: 500,
                    color: "#0f172a",
                    letterSpacing: "-0.03em",
                    marginBottom: 16,
                  }}
                >
                  Adaptive Layouts
                </h3>
                <p style={{ color: "#64748b", lineHeight: 1.7 }}>
                  Content that intelligently reflows to occupy available space
                  with mathematical precision.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  color: "#94a3b8",
                  marginTop: 32,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#cbd5e1",
                  }}
                />
                Auto-Scaling
              </div>
            </div>
            <div
              className="b2c1-ui"
              style={{ position: "relative", minHeight: 240 }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  style={{
                    height: 32,
                    borderBottom: "1px solid #f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 16px",
                    gap: 8,
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
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#e2e8f0",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: 16,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <div style={{ background: "#f1f5f9", borderRadius: 8 }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #f1f5f9",
                        borderRadius: 8,
                        flex: "0 0 33%",
                      }}
                    />
                    <div
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #f1f5f9",
                        borderRadius: 8,
                        flex: 1,
                        padding: 12,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          right: 12,
                          height: 8,
                          background: "#e2e8f0",
                          borderRadius: 3,
                          width: "50%",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 28,
                          left: 12,
                          right: 12,
                          height: 8,
                          background: "#f1f5f9",
                          borderRadius: 3,
                          width: "75%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -16,
                  width: "66%",
                  height: "50%",
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #f1f5f9",
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxShadow: "0 24px 70px rgba(15,23,42,0.10)",
                  transition: "transform 0.5s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#f1f5f9",
                    }}
                  />
                  <div
                    style={{
                      width: 48,
                      height: 8,
                      background: "#f1f5f9",
                      borderRadius: 3,
                    }}
                  />
                </div>
                <div
                  style={{
                    height: 8,
                    background: "#f8fafc",
                    borderRadius: 3,
                    width: "100%",
                  }}
                />
                <div
                  style={{
                    height: 8,
                    background: "#f8fafc",
                    borderRadius: 3,
                    width: "66%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 – Focus State – span 4 */}
        <div
          className="b2-span4"
          style={{
            ...S.cardBase,
            ...S.lightCard,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#0f172a",
                fontWeight: 500,
                fontSize: 14,
                marginBottom: 24,
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
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 1 0 4Z" />
                <path d="M17 12h5M2 12h5" />
              </svg>
              Interface 02
            </div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Focus State
            </h3>
            <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 40 }}>
              Micro-interactions that guide user attention seamlessly.
            </p>
            <div
              style={{
                marginTop: "auto",
                position: "relative",
                width: "100%",
                maxHeight: 200,
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px solid rgba(203,213,225,0.5)",
                  transform: "scale(0.75)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px solid rgba(203,213,225,0.5)",
                  transform: "scale(0.5)",
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "#0f172a",
                  color: "#fff",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 10,
                  boxShadow: "0 22px 60px rgba(15,23,42,0.22)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 – Dark Mode – span 4 */}
        <div
          className="b2-span4"
          style={{ ...S.cardBase, ...S.darkCard, position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.2,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              minHeight: 340,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#94a3b8",
                fontWeight: 500,
                fontSize: 14,
                marginBottom: 24,
              }}
            >
              <svg
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Interface 03
            </div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: "#fff",
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Dark Mode
            </h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.7, maxWidth: "34ch" }}>
              Inverted contrast ratios for deep work environments.
            </p>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 32,
                width: "100%",
                height: 112,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: "linear-gradient(to top,#1e293b,transparent)",
                  borderRadius: 12,
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: 8,
                  height: "100%",
                  paddingBottom: 12,
                }}
              >
                {[
                  { h: "40%", c: "#334155" },
                  { h: "70%", c: "#475569" },
                  { h: "50%", c: "#fff", glow: true },
                  { h: "60%", c: "#475569" },
                  { h: "30%", c: "#334155" },
                ].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      width: 16,
                      height: b.h,
                      background: b.c,
                      borderRadius: "2px 2px 0 0",
                      boxShadow: b.glow
                        ? "0 0 15px rgba(255,255,255,0.3)"
                        : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 – Secure – span 4 */}
        <div
          className="b2-span4"
          style={{
            ...S.cardBase,
            ...S.lightCard,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#0f172a",
                fontWeight: 500,
                fontSize: 14,
                marginBottom: 24,
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Interface 06
            </div>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Secure
            </h3>
            <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 32 }}>
              Enterprise-grade encryption.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 128,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top,#fff,#edeef2)",
                borderRadius: "50%",
                transform: "scale(0.5)",
                transition: "transform 0.7s",
              }}
            />
            <div
              style={{
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg,#f1f5f9,#fff)",
                width: 64,
                height: 64,
                border: "1px solid #fff",
                borderRadius: 16,
                boxShadow: "0 18px 55px rgba(15,23,42,0.10)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#94a3b8" }}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 5 – API First – span 4 */}
        <div
          className="b2-span4"
          style={{
            ...S.cardBase,
            ...S.darkCard,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "2.5rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.2,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#94a3b8",
                  fontWeight: 500,
                  fontSize: 14,
                  marginBottom: 24,
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
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                Interface 07
              </div>
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  marginBottom: 16,
                }}
              >
                API First
              </h3>
              <p
                style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 32 }}
              >
                Extensible endpoints.
              </p>
            </div>
            <div
              style={{
                background: "rgba(30,41,59,0.5)",
                border: "1px solid rgba(51,65,85,0.5)",
                borderRadius: 12,
                padding: 16,
                fontFamily: "monospace",
                fontSize: 12,
                color: "#cbd5e1",
                boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 8,
                  opacity: 0.5,
                }}
              >
                {["#ef4444", "#eab308", "#22c55e"].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                      opacity: 0.5,
                    }}
                  />
                ))}
              </div>
              <p style={{ color: "#a78bfa" }}>
                POST <span style={{ color: "#fff" }}>/v1/events</span>
              </p>
              <p style={{ marginTop: 4, color: "#475569" }}>{"{"}</p>
              <p style={{ paddingLeft: 16, color: "#34d399" }}>
                &quot;status&quot;<span style={{ color: "#475569" }}>:</span>
                <span style={{ color: "#fff" }}>&quot;active&quot;</span>
              </p>
              <p style={{ color: "#475569" }}>{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
