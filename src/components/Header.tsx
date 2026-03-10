"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      style={{
        position: "fixed",
        top: 16,
        left: 0,
        width: "100%",
        zIndex: 50,
        padding: "0 1.5rem",
        pointerEvents: "none",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", pointerEvents: "auto" }}>
        {/* Bar */}
        <div
          style={{
            position: "relative",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.4)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            borderRadius: 9999,
            padding: "8px 8px 8px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.5s",
          }}
        >
          {/* Brand */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#3b82f6",
                  borderRadius: "50%",
                  opacity: 0.2,
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: "#2563eb",
                  borderRadius: "50%",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  border: "1px solid #bfdbfe",
                  borderRadius: "50%",
                }}
              />
            </div>
            <span
              style={{
                fontWeight: 700,
                color: "#1e293b",
                letterSpacing: "-0.02em",
                fontSize: 14,
                textTransform: "uppercase",
              }}
            >
              Liquid
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {["Product", "Experience", "Systems"].map((n) => (
              <a
                key={n}
                href="#"
                style={{
                  padding: "10px 20px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  borderRadius: 9999,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                {n}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 24px",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                background: "#0f172a",
                borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(15,23,42,0.1)",
                transition: "all 0.2s",
              }}
            >
              Access
            </a>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#475569",
              }}
            >
              {open ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6 18 18" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              padding: "12px 24px",
              marginTop: 12,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: 32,
                padding: 12,
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {["Product", "Experience", "Systems"].map((n) => (
                <a
                  key={n}
                  href="#"
                  style={{
                    padding: 16,
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#475569",
                    borderRadius: 16,
                    textDecoration: "none",
                  }}
                >
                  {n}
                </a>
              ))}
              <div
                style={{
                  height: 1,
                  background: "rgba(203,213,225,0.5)",
                  margin: "4px 24px",
                }}
              />
              <a
                href="#"
                style={{
                  padding: 16,
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#fff",
                  background: "#0f172a",
                  borderRadius: 16,
                  textDecoration: "none",
                }}
              >
                Access Platform
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
