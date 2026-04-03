"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

/* ═══════════════════════════════════════════
   WORKFLOW FIRE — PALETTE (same as homepage)
   ═══════════════════════════════════════════ */

const P = {
  bg: "linear-gradient(180deg, #FFF7ED 0%, #F0F4FF 50%, #F8FAFC 100%)",
  card: "rgba(255, 255, 255, 0.72)",
  cardHover: "rgba(255, 255, 255, 0.85)",
  accent1: "#3B82F6",
  accent2: "#7C3AED",
  accent3: "#F97316",
  grad: "linear-gradient(135deg, #3B82F6, #7C3AED, #F97316)",
  border: "rgba(0, 0, 0, 0.06)",
  borderHover: "rgba(59, 130, 246, 0.2)",
  highlight: "rgba(255, 255, 255, 0.95)",
  shadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
  shadowHover:
    "0 8px 32px rgba(59, 130, 246, 0.08), 0 2px 8px rgba(0,0,0,0.04)",
  text: "#1E293B",
  textDark: "#0F172A",
  muted: "rgba(30, 41, 59, 0.5)",
  orb1: "radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 70%)",
  orb2: "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)",
  orb3: "radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)",
};

const FONT =
  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

/* ─── Floating Orbs ─── */
function Orbs() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "5%",
          width: 500,
          height: 500,
          background: P.orb1,
          filter: "blur(80px)",
          animation: "orbA 24s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "0%",
          width: 550,
          height: 550,
          background: P.orb2,
          filter: "blur(90px)",
          animation: "orbB 30s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          width: 400,
          height: 400,
          background: P.orb3,
          filter: "blur(70px)",
          animation: "orbC 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ─── Reveal animation ─── */
function Reveal({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════ */

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap: React.CSSProperties = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 14,
    border: `1px solid ${P.border}`,
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    fontSize: 15,
    fontFamily: FONT,
    color: P.textDark,
    outline: "none",
    transition: "all 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: P.text,
    marginBottom: 6,
    display: "block",
    letterSpacing: "-0.01em",
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (err) {
      alert("Something went wrong. Please try WhatsApp instead.");
    }

    setSending(false);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FFF7ED; font-family: ${FONT}; }
        ::selection { background: rgba(59,130,246,0.15); color: #1E293B; }
        @keyframes orbA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,-30px) scale(1.08); } }
        @keyframes orbB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-60px,25px) scale(1.05); } }
        @keyframes orbC { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,40px); } 66% { transform: translate(-20px,-30px); } }
        input:focus, textarea:focus {
          border-color: ${P.accent1} !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1) !important;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        style={{
          background: P.bg,
          minHeight: "100vh",
          color: P.text,
          fontFamily: FONT,
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Orbs />

        {/* ═══ NAVBAR ═══ */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: scrolled ? "10px 0" : "18px 0",
            background: scrolled
              ? "rgba(255, 247, 237, 0.72)"
              : "transparent",
            backdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "none",
            WebkitBackdropFilter: scrolled
              ? "blur(24px) saturate(1.5)"
              : "none",
            borderBottom: scrolled
              ? `1px solid ${P.border}`
              : "1px solid transparent",
            transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div
            style={{
              ...wrap,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: P.grad,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#fff",
                  boxShadow: "0 2px 10px rgba(59,130,246,0.2)",
                }}
              >
                KK
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: P.textDark,
                  letterSpacing: "-0.02em",
                }}
              >
                Cogniado
              </span>
            </a>

            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: FONT,
                background: P.grad,
                color: "#ffffff",
                textDecoration: "none",
                boxShadow:
                  "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              ← Back to Home
            </a>
          </div>
        </nav>

        {/* ═══ CONTACT SECTION ═══ */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 140,
            paddingBottom: 80,
          }}
        >
          <div style={wrap}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    background: P.grad,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    marginBottom: 10,
                  }}
                >
                  Get In Touch
                </p>
                <h1
                  style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    color: P.textDark,
                    marginBottom: 14,
                  }}
                >
                  Let&apos;s Build Your AI System
                </h1>
                <p
                  style={{
                    fontSize: 17,
                    color: P.muted,
                    maxWidth: 520,
                    marginInline: "auto",
                    lineHeight: 1.65,
                  }}
                >
                  Book a free 20-minute discovery call. We&apos;ll show you
                  exactly how many patients you&apos;re losing — and how our AI
                  recovers them.
                </p>
              </div>
            </Reveal>

            <Reveal style={{ transitionDelay: "0.15s" }}>
              <div
                className="contact-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 32,
                  maxWidth: 900,
                  marginInline: "auto",
                }}
              >
                {/* ─── FORM CARD ─── */}
                <div
                  style={{
                    background: P.card,
                    backdropFilter: "blur(24px) saturate(1.5)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.5)",
                    border: `1px solid ${P.border}`,
                    borderRadius: 22,
                    padding: "36px 32px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: P.shadow,
                  }}
                >
                  {/* Specular highlight */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "10%",
                      right: "10%",
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${P.highlight}, transparent)`,
                      zIndex: 2,
                    }}
                  />

                  {submitted ? (
                    <div
                      style={{
                        textAlign: "center",
                        padding: "40px 0",
                      }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #10B981, #3B82F6)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginInline: "auto",
                          marginBottom: 20,
                        }}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: P.textDark,
                          marginBottom: 8,
                        }}
                      >
                        Message Sent!
                      </h3>
                      <p
                        style={{
                          fontSize: 15,
                          color: P.muted,
                          lineHeight: 1.6,
                        }}
                      >
                        We&apos;ll get back to you within 24 hours.
                        <br />
                        Or WhatsApp us for a faster reply.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* ⬇️ PASTE YOUR WEB3FORMS ACCESS KEY BELOW ⬇️ */}
                      <input
                        type="hidden"
                        name="access_key"
                        value="30bf817d-88b1-4a5c-bfb2-009dc6feacf5"
                      />
                      <input
                        type="hidden"
                        name="subject"
                        value="New Lead from Cogniado Website"
                      />

                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle}>Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle}>Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle}>Phone (WhatsApp)</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ marginBottom: 24 }}>
                        <label style={labelStyle}>Message</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          placeholder="Tell us about your business and what you need..."
                          style={{
                            ...inputStyle,
                            resize: "vertical",
                            minHeight: 100,
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        style={{
                          width: "100%",
                          padding: "14px 32px",
                          borderRadius: 999,
                          border: "none",
                          background: P.grad,
                          color: "#fff",
                          fontSize: 16,
                          fontWeight: 700,
                          fontFamily: FONT,
                          cursor: sending ? "wait" : "pointer",
                          opacity: sending ? 0.7 : 1,
                          boxShadow:
                            "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {sending ? "Sending..." : "Send Message →"}
                      </button>
                    </form>
                  )}
                </div>

                {/* ─── INFO CARD ─── */}
                <div
                  style={{
                    background: P.card,
                    backdropFilter: "blur(24px) saturate(1.5)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.5)",
                    border: `1px solid ${P.border}`,
                    borderRadius: 22,
                    padding: "36px 32px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: P.shadow,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Specular highlight */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "10%",
                      right: "10%",
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${P.highlight}, transparent)`,
                      zIndex: 2,
                    }}
                  />

                  <div>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: P.textDark,
                        marginBottom: 24,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Other Ways to Reach Us
                    </h3>

                    {/* WhatsApp */}
                    <div style={{ marginBottom: 28 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: "rgba(37, 211, 102, 0.1)",
                            border: "1px solid rgba(37, 211, 102, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#25D366"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: P.textDark,
                            }}
                          >
                            WhatsApp
                          </p>
                          <p style={{ fontSize: 13, color: P.muted }}>
                            Fastest way to reach us
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/918000309011"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "10px 20px",
                          borderRadius: 999,
                          background: "rgba(37, 211, 102, 0.1)",
                          border: "1px solid rgba(37, 211, 102, 0.2)",
                          color: "#25D366",
                          fontSize: 14,
                          fontWeight: 600,
                          fontFamily: FONT,
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Chat on WhatsApp →
                      </a>
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: 28 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: `${P.accent1}0A`,
                            border: `1px solid ${P.accent1}18`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={P.accent1}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="2"
                              y="4"
                              width="20"
                              height="16"
                              rx="2"
                            />
                            <path d="M22 7l-10 7L2 7" />
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: P.textDark,
                            }}
                          >
                            Email
                          </p>
                          <p style={{ fontSize: 13, color: P.muted }}>
                            cogniado@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div style={{ marginBottom: 28 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: `${P.accent2}0A`,
                            border: `1px solid ${P.accent2}18`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={P.accent2}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: P.textDark,
                            }}
                          >
                            Phone
                          </p>
                          <p style={{ fontSize: 13, color: P.muted }}>
                            +91 8000309011
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Markets served */}
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: 16,
                      background: "rgba(59, 130, 246, 0.04)",
                      border: "1px solid rgba(59, 130, 246, 0.08)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        background: P.grad,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Markets We Serve
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: P.muted,
                        lineHeight: 1.7,
                      }}
                    >
                      India + Germany · Hindi · English · Deutsch
                      <br />
                      Dental Clinics · Hair Salons · Real Estate · Legal Firms ·
                      Hospitals · Coaching Institutes
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer
          style={{
            position: "relative",
            zIndex: 1,
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: `1px solid ${P.border}`,
            padding: "32px 0",
          }}
        >
          <div
            style={{
              ...wrap,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 13, color: P.muted }}>
              © 2026 Cogniado. AI automation agency. India & Germany.
            </p>
            <p style={{ fontSize: 13, color: P.muted }}>
              Built with AI. Powered by results.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}