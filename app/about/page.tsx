"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

/* ═══════════════════════════════════════════
   WORKFLOW FIRE — PALETTE
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
  badge: "#EFF6FF",
  badgeBorder: "#BFDBFE",
  badgeText: "#3B82F6",
  orb1: "radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 70%)",
  orb2: "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)",
  orb3: "radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)",
};

const FONT =
  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

/* ─── Orbs ─── */
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

/* ─── Reveal ─── */
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
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
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

/* ─── GlassCard ─── */
function GlassCard({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: P.card,
        backdropFilter: "blur(24px) saturate(1.5)",
        WebkitBackdropFilter: "blur(24px) saturate(1.5)",
        border: `1px solid ${P.border}`,
        borderRadius: 22,
        position: "relative",
        overflow: "hidden",
        boxShadow: P.shadow,
        ...style,
      }}
    >
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
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════ */

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 150);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap: React.CSSProperties = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
  };

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
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; }
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

            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <a
                href="/"
                style={{
                  color: P.muted,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Home
              </a>
              <a
                href="/contact"
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
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        {/* ═══ HERO ═══ */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 140,
            paddingBottom: 60,
          }}
        >
          <div style={wrap}>
            <div
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.23,1,0.32,1)",
                textAlign: "center",
                maxWidth: 720,
                marginInline: "auto",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 18px",
                  borderRadius: 999,
                  marginBottom: 28,
                  background: P.badge,
                  border: `1px solid ${P.badgeBorder}`,
                  fontSize: 13,
                  fontWeight: 600,
                  color: P.badgeText,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: P.accent1,
                    boxShadow: `0 0 8px ${P.accent1}40`,
                  }}
                />
                Our Story
              </div>

              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  color: P.textDark,
                  marginBottom: 20,
                }}
              >
                Two Performance Marketers.{" "}
                <span
                  style={{
                    background: P.grad,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  One AI Mission.
                </span>
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: P.muted,
                  maxWidth: 560,
                  marginInline: "auto",
                }}
              >
                We&apos;re not another tech company that learned marketing.
                We&apos;re marketers who learned AI — and that makes all the
                difference.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ FOUNDERS ═══ */}
        <section
          style={{ position: "relative", zIndex: 1, padding: "40px 0 80px" }}
        >
          <div style={wrap}>
            <div
              className="about-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                maxWidth: 860,
                marginInline: "auto",
              }}
            >
              {/* Keval */}
              <Reveal>
                <GlassCard style={{ padding: "40px 32px" }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 20,
                      background: P.grad,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 24,
                    }}
                  >
                    K
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: P.textDark,
                      marginBottom: 4,
                    }}
                  >
                    Keval
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      background: P.grad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: 16,
                    }}
                  >
                    Growth & Strategy
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: P.muted,
                    }}
                  >
                    Performance marketer who&apos;s spent years scaling e-commerce
                    with Google Ads, Meta, and data-driven funnels. Now channels
                    that same obsession with ROAS and revenue into building AI
                    systems that actually pay for themselves. Handles sales,
                    outreach, client relationships, and creative strategy.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginTop: 18,
                    }}
                  >
                    {[
                      "Google Ads",
                      "Meta Ads",
                      "Cold Outreach",
                      "Sales",
                      "AI Creative",
                      "German (A2)",
                    ].map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "4px 12px",
                          borderRadius: 999,
                          background: P.badge,
                          border: `1px solid ${P.badgeBorder}`,
                          color: P.badgeText,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              {/* Kishan */}
              <Reveal style={{ transitionDelay: "0.1s" }}>
                <GlassCard style={{ padding: "40px 32px" }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 20,
                      background:
                        "linear-gradient(135deg, #7C3AED, #F97316)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 24,
                    }}
                  >
                    K
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: P.textDark,
                      marginBottom: 4,
                    }}
                  >
                    Kishan
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #7C3AED, #F97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: 16,
                    }}
                  >
                    Technical Delivery
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: P.muted,
                    }}
                  >
                    Same performance marketing DNA, but wired for systems.
                    Builds every automation flow, voice agent, and WhatsApp
                    integration from the ground up. Owns client onboarding and
                    technical delivery end-to-end. If it runs, Kishan built it.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginTop: 18,
                    }}
                  >
                    {[
                      "n8n",
                      "Make.com",
                      "VAPI",
                      "WhatsApp API",
                      "Automation",
                      "Voice AI",
                    ].map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "4px 12px",
                          borderRadius: 999,
                          background: "#F5F3FF",
                          border: "1px solid #DDD6FE",
                          color: P.accent2,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ THE STORY ═══ */}
        <section
          style={{ position: "relative", zIndex: 1, padding: "60px 0" }}
        >
          <div style={wrap}>
            <Reveal>
              <GlassCard
                style={{
                  padding: "48px 40px",
                  maxWidth: 860,
                  marginInline: "auto",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(24px, 3.5vw, 34px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                    marginBottom: 24,
                  }}
                >
                  Why We Built This
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: P.muted,
                  }}
                >
                  <p>
                    We sat next to each other at an office in Ahmedabad, running
                    performance marketing for an e-commerce company. Google Ads,
                    Meta campaigns, ROAS targets — the works.
                  </p>
                  <p>
                    But we kept noticing the same thing: the businesses around
                    us — dental clinics, salons, legal firms — were bleeding
                    money from missed calls, lost leads, and zero follow-up.
                    Not because they didn&apos;t care, but because they didn&apos;t
                    have the systems.
                  </p>
                  <p>
                    A dentist in Ahmedabad told us he was losing ₹2–3 lakh a
                    month just from missed calls after hours. His receptionist
                    couldn&apos;t work 24/7. His Google rating was stuck at 3.8
                    stars. Patients who hadn&apos;t visited in 6 months? Gone
                    forever.
                  </p>
                  <p>
                    We thought:{" "}
                    <span
                      style={{
                        fontWeight: 600,
                        color: P.textDark,
                      }}
                    >
                      &quot;What if AI could handle all of this — not as a
                      gimmick, but as a real system that pays for itself in
                      Week 1?&quot;
                    </span>
                  </p>
                  <p>
                    That&apos;s Cogniado. We&apos;re not selling AI for the
                    sake of AI. We&apos;re performance marketers who measure
                    everything in revenue recovered, patients booked, and reviews
                    collected. If it doesn&apos;t make you money, we don&apos;t
                    build it.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* ═══ VALUES / WHAT MAKES US DIFFERENT ═══ */}
        <section
          style={{ position: "relative", zIndex: 1, padding: "60px 0 80px" }}
        >
          <div style={wrap}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
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
                  What Makes Us Different
                </p>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                  }}
                >
                  Built by Marketers, Not Engineers
                </h2>
              </div>
            </Reveal>

            <div
              className="values-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                maxWidth: 960,
                marginInline: "auto",
              }}
            >
              {[
                {
                  emoji: "📊",
                  title: "Revenue-First Thinking",
                  desc: "We don't build cool tech. We build systems that recover missed revenue from Day 1. Every workflow is measured in ₹ returned.",
                  color: P.accent1,
                },
                {
                  emoji: "🌏",
                  title: "India + Germany",
                  desc: "We speak Hindi, English, and German. We understand ₹40K/month budgets and €2,000/month expectations. Both markets, one team.",
                  color: P.accent3,
                },
                {
                  emoji: "⚡",
                  title: "Live in 7 Days",
                  desc: "No 3-month discovery phases. We build your AI voice agent, WhatsApp flows, review engine, and dashboard in one week.",
                  color: P.accent2,
                },
                {
                  emoji: "🔁",
                  title: "Systems, Not One-Offs",
                  desc: "Every AI layer compounds — the receptionist feeds reviews, reviews feed reactivation, reactivation feeds the dashboard.",
                  color: P.accent1,
                },
                {
                  emoji: "🤝",
                  title: "We Sit With You",
                  desc: "We're not a faceless SaaS. We onboard personally, optimise monthly, and pick up the phone when you need us.",
                  color: P.accent3,
                },
                {
                  emoji: "🛡️",
                  title: "85%+ Gross Margin",
                  desc: "Our tech stack costs ₹7K/month per client. That means sustainable growth for us and affordable pricing for you.",
                  color: P.accent2,
                },
              ].map((v, i) => (
                <Reveal key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <GlassCard style={{ padding: "30px 26px", height: "100%" }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 13,
                        background: `${v.color}0A`,
                        border: `1px solid ${v.color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        marginBottom: 18,
                      }}
                    >
                      {v.emoji}
                    </div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: P.textDark,
                        marginBottom: 8,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {v.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: P.muted,
                      }}
                    >
                      {v.desc}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section
          style={{ position: "relative", zIndex: 1, padding: "0 0 80px" }}
        >
          <div style={wrap}>
            <Reveal>
              <div
                style={{
                  borderRadius: 26,
                  padding: "60px 44px",
                  textAlign: "center",
                  background: P.card,
                  backdropFilter: "blur(24px) saturate(1.5)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.5)",
                  border: `1px solid ${P.border}`,
                  boxShadow: P.shadow,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${P.highlight}, transparent)`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -120,
                    left: "20%",
                    right: "20%",
                    height: 200,
                    background:
                      "radial-gradient(ellipse, rgba(59,130,246,0.06), transparent)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />

                <h2
                  style={{
                    fontSize: "clamp(26px, 4vw, 40px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                    marginBottom: 14,
                  }}
                >
                  Ready to Stop Losing Revenue?
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    color: P.muted,
                    maxWidth: 480,
                    marginInline: "auto",
                    marginBottom: 32,
                    lineHeight: 1.65,
                  }}
                >
                  Book a free 20-minute call. We&apos;ll map your missed calls,
                  lost patients, and revenue gaps — and show you exactly how AI
                  fixes them.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "16px 40px",
                    borderRadius: 999,
                    fontSize: 17,
                    fontWeight: 700,
                    fontFamily: FONT,
                    background: P.grad,
                    color: "#ffffff",
                    textDecoration: "none",
                    boxShadow:
                      "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  Book Your Free Call →
                </a>
                <p
                  style={{
                    fontSize: 13,
                    color: P.muted,
                    marginTop: 16,
                  }}
                >
                  India + Germany · Hindi · English · Deutsch
                </p>
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