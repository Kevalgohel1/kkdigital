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
      <div style={{ position: "absolute", top: "-5%", left: "5%", width: 500, height: 500, background: P.orb1, filter: "blur(80px)", animation: "orbA 24s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "0%", width: 550, height: 550, background: P.orb2, filter: "blur(90px)", animation: "orbB 30s ease-in-out infinite" }} />
      <div style={{ position: "absolute", top: "40%", left: "40%", width: 400, height: 400, background: P.orb3, filter: "blur(70px)", animation: "orbC 20s ease-in-out infinite" }} />
    </div>
  );
}

/* ─── Reveal ─── */
function Reveal({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)", ...style }}>
      {children}
    </div>
  );
}

/* ─── GlassCard ─── */
function GlassCard({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: P.card, backdropFilter: "blur(24px) saturate(1.5)", WebkitBackdropFilter: "blur(24px) saturate(1.5)", border: `1px solid ${P.border}`, borderRadius: 22, position: "relative", overflow: "hidden", boxShadow: P.shadow, ...style }}>
      <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg, transparent, ${P.highlight}, transparent)`, zIndex: 2 }} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

/* ─── Icons ─── */
const ico = {
  phone: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
  star: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  chart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  check: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="chk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={P.accent1} /><stop offset="100%" stopColor={P.accent2} /></linearGradient></defs><polyline points="20 6 9 17 4 12" stroke="url(#chk)" /></svg>,
  msg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={P.accent1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
};

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const CORE_SERVICES = [
  {
    icon: ico.phone,
    title: "AI Voice Agent — Never Miss a Patient",
    tag: "Core",
    color: P.accent1,
    tagBg: "#EFF6FF",
    tagBorder: "#BFDBFE",
    desc: "Your AI receptionist answers every call 24/7 in Hindi, English, or German. Books appointments directly into Google Calendar, sends WhatsApp confirmation + 2hr reminder. Missed call? WhatsApp follow-up in 60 seconds.",
    features: [
      "24/7 call answering — no missed patients",
      "Real-time Google Calendar booking mid-call",
      "WhatsApp confirmation + 2hr reminder",
      "Missed call → WhatsApp in 60 seconds",
      "Hindi, English, and German voice support",
      "Transfers complex queries to your team",
    ],
  },
  {
    icon: ico.star,
    title: "Auto Review Engine",
    tag: "Growth",
    color: P.accent3,
    tagBg: "#FFF7ED",
    tagBorder: "#FED7AA",
    desc: "After every appointment, AI sends a WhatsApp message. Happy patients get a direct Google review link. Negative feedback goes to you privately — never to Google. Grow your rating 0.5–1 star in 60 days.",
    features: [
      "Automated post-visit WhatsApp trigger",
      "5-star patients → Google review link",
      "Negative feedback → private owner alert",
      "Grow Google rating 0.5–1 star in 60 days",
      "Weekly review performance report",
      "No manual effort required",
    ],
  },
  {
    icon: ico.users,
    title: "Patient Reactivation",
    tag: "Revenue",
    color: P.accent2,
    tagBg: "#F5F3FF",
    tagBorder: "#DDD6FE",
    desc: "AI checks your CRM monthly for patients who haven't visited in 6+ months. Sends personalised WhatsApp messages, handles the conversation, and books them back. Recover 8–15 patients per month on autopilot.",
    features: [
      "Monthly CRM scan for inactive patients",
      "Personalised WhatsApp outreach",
      "AI handles the full conversation",
      "Books appointments automatically",
      "Recover 8–15 patients per month",
      "Zero manual work from your team",
    ],
  },
  {
    icon: ico.chart,
    title: "Owner Dashboard",
    tag: "Insights",
    color: P.accent1,
    tagBg: "#EFF6FF",
    tagBorder: "#BFDBFE",
    desc: "Live Looker Studio dashboard showing everything that matters: calls answered, appointments booked, missed calls recovered, reviews collected, and revenue attributed — all in one screen you check in 30 seconds.",
    features: [
      "Calls answered vs missed — real-time",
      "Appointments booked this week/month",
      "Revenue attributed to AI system",
      "Review collection performance",
      "Patient reactivation stats",
      "Shareable link — check from your phone",
    ],
  },
  {
    icon: ico.shield,
    title: "Competitor Intel Brief",
    tag: "Strategy",
    color: P.accent2,
    tagBg: "#F5F3FF",
    tagBorder: "#DDD6FE",
    desc: "Every Monday morning, AI delivers a brief on your competing clinics. New Google reviews, rating changes, new services listed, ad activity — know what they're doing before they know you're watching.",
    features: [
      "Weekly automated competitor monitoring",
      "Google review tracking for competitors",
      "Rating change alerts",
      "New service and ad activity detection",
      "Delivered to WhatsApp every Monday",
      "Covers up to 5 competitor clinics",
    ],
  },
  {
    icon: ico.msg,
    title: "Lead Qualification AI",
    tag: "Sales",
    color: P.accent3,
    tagBg: "#FFF7ED",
    tagBorder: "#FED7AA",
    desc: "Incoming leads from any source — Facebook, Google, JustDial — verified in 60 seconds. AI qualifies via WhatsApp conversation, scores 1–10. Hot leads go to your team with full context instantly.",
    features: [
      "60-second lead verification (fake number check)",
      "WhatsApp qualification conversation",
      "Lead scoring: 1–10 with full context",
      "Hot leads (7+) → instant team notification",
      "Warm leads → 10-week nurture drip",
      "Works with Facebook, Google, JustDial, IndiaMART",
    ],
  },
];

const INDUSTRIES = [
  { name: "Dental Clinics", emoji: "🦷", desc: "AI receptionist, patient reactivation, review engine" },
  { name: "Hair Salons", emoji: "💇", desc: "Re-booking reminders, new client welcome, no-show recovery" },
  { name: "Beauty Spas", emoji: "💆", desc: "Birthday VIP flows, loyalty automation, seasonal campaigns" },
  { name: "Hospitals", emoji: "🏥", desc: "Patient reminders, post-visit care bot, AI intake assistant" },
  { name: "Real Estate", emoji: "🏠", desc: "Lead qualification bot, property follow-up, tenant reminders" },
  { name: "Legal Firms", emoji: "⚖️", desc: "Case status bot, document checklist, court date reminders" },
  { name: "Coaching Institutes", emoji: "📚", desc: "AI study assistant, attendance reminders, enrollment nurture" },
  { name: "Nail Studios", emoji: "💅", desc: "Appointment reminders, loyalty program, review collection" },
  { name: "Zahnarztpraxen", emoji: "🇩🇪", desc: "KI-Rezeptionist auf Deutsch, Patienten-Reaktivierung" },
  { name: "Tierarztpraxen", emoji: "🐾", desc: "Termin-Erinnerungen, Nachsorge-Bot, Bewertungs-Engine" },
];

const TECH_STACK = [
  { name: "VAPI", role: "Voice infrastructure — inbound + outbound calls" },
  { name: "Claude API", role: "AI brain — natural language understanding" },
  { name: "ElevenLabs", role: "Voice cloning — Priya (Hindi/EN), Anna (DE)" },
  { name: "n8n", role: "Automation backbone — all workflows" },
  { name: "WATI / Twilio", role: "WhatsApp Business API" },
  { name: "Google Calendar", role: "Real-time booking mid-call" },
  { name: "Looker Studio", role: "Client dashboard — live metrics" },
  { name: "Google Sheets", role: "Patient CRM — simple, accessible" },
];

/* ═══════════════════════════════════════════
   SERVICES PAGE
   ═══════════════════════════════════════════ */

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 150);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", padding: "0 24px" };

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
          .services-detail-grid { grid-template-columns: 1fr !important; }
          .industries-grid { grid-template-columns: 1fr 1fr !important; }
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: P.bg, minHeight: "100vh", color: P.text, fontFamily: FONT, overflowX: "hidden", position: "relative" }}>
        <Orbs />

        {/* ═══ NAVBAR ═══ */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "10px 0" : "18px 0", background: scrolled ? "rgba(255, 247, 237, 0.72)" : "transparent", backdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "none", WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "none", borderBottom: scrolled ? `1px solid ${P.border}` : "1px solid transparent", transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)" }}>
          <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: P.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", boxShadow: "0 2px 10px rgba(59,130,246,0.2)" }}>KK</div>
              <span style={{ fontSize: 18, fontWeight: 800, color: P.textDark, letterSpacing: "-0.02em" }}>KK Digital</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <a href="/" style={{ color: P.muted, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Home</a>
              <a href="/about" style={{ color: P.muted, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>About</a>
              <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 999, fontSize: 14, fontWeight: 600, fontFamily: FONT, background: P.grad, color: "#ffffff", textDecoration: "none", boxShadow: "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)" }}>Book a Call</a>
            </div>
          </div>
        </nav>

        {/* ═══ HERO ═══ */}
        <section style={{ position: "relative", zIndex: 1, paddingTop: 140, paddingBottom: 60 }}>
          <div style={wrap}>
            <div style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.23,1,0.32,1)", textAlign: "center", maxWidth: 720, marginInline: "auto" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 999, marginBottom: 28, background: P.badge, border: `1px solid ${P.badgeBorder}`, fontSize: 13, fontWeight: 600, color: P.badgeText }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: P.accent1, boxShadow: `0 0 8px ${P.accent1}40` }} />
                43+ AI Workflows · 10 Industries
              </div>

              <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.035em", color: P.textDark, marginBottom: 20 }}>
                The Full{" "}
                <span style={{ background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  DentalOS
                </span>{" "}
                Stack
              </h1>

              <p style={{ fontSize: 18, lineHeight: 1.7, color: P.muted, maxWidth: 560, marginInline: "auto" }}>
                Six AI layers that compound on each other. The voice agent feeds
                reviews, reviews feed reactivation, reactivation feeds the
                dashboard. Every layer makes the next one stronger.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ DETAILED SERVICES ═══ */}
        <section style={{ position: "relative", zIndex: 1, padding: "20px 0 80px" }}>
          <div style={wrap}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {CORE_SERVICES.map((s, i) => (
                <Reveal key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <GlassCard style={{ padding: "40px 36px" }}>
                    <div className="services-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start" }}>
                      {/* Left — info */}
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                          <div style={{ width: 52, height: 52, borderRadius: 15, background: `${s.color}0A`, border: `1px solid ${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {s.icon}
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, color: s.color, padding: "4px 14px", borderRadius: 999, background: s.tagBg, border: `1px solid ${s.tagBorder}`, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            {s.tag}
                          </span>
                        </div>
                        <h3 style={{ fontSize: 24, fontWeight: 700, color: P.textDark, marginBottom: 12, letterSpacing: "-0.02em" }}>
                          {s.title}
                        </h3>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: P.muted }}>
                          {s.desc}
                        </p>
                      </div>

                      {/* Right — features */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: P.muted, marginBottom: 4 }}>
                          What&apos;s Included
                        </p>
                        {s.features.map((f, fi) => (
                          <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: P.text, lineHeight: 1.5 }}>
                            <span style={{ marginTop: 2, flexShrink: 0 }}>{ico.check}</span>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TECH STACK ═══ */}
        <section style={{ position: "relative", zIndex: 1, padding: "60px 0 80px" }}>
          <div style={wrap}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p style={{ fontSize: 13, fontWeight: 700, background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 10 }}>
                  Under the Hood
                </p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: P.textDark }}>
                  The Tech Stack
                </h2>
                <p style={{ fontSize: 16, color: P.muted, marginTop: 14, maxWidth: 500, marginInline: "auto", lineHeight: 1.65 }}>
                  Enterprise-grade tools. Startup-friendly pricing. Every piece chosen for reliability and cost-efficiency.
                </p>
              </div>
            </Reveal>

            <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, maxWidth: 960, marginInline: "auto" }}>
              {TECH_STACK.map((t, i) => (
                <Reveal key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <GlassCard style={{ padding: "24px 22px", height: "100%" }}>
                    <p style={{ fontSize: 16, fontWeight: 700, color: P.textDark, marginBottom: 6 }}>{t.name}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: P.muted }}>{t.role}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES ═══ */}
        <section style={{ position: "relative", zIndex: 1, padding: "60px 0 80px" }}>
          <div style={wrap}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p style={{ fontSize: 13, fontWeight: 700, background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 10 }}>
                  Industries We Serve
                </p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: P.textDark }}>
                  Built for Service Businesses
                </h2>
              </div>
            </Reveal>

            <div className="industries-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <GlassCard style={{ padding: "24px 20px", textAlign: "center", height: "100%" }}>
                    <div style={{ fontSize: 32, marginBottom: 10 }}>{ind.emoji}</div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: P.textDark, marginBottom: 6 }}>{ind.name}</p>
                    <p style={{ fontSize: 12, lineHeight: 1.6, color: P.muted }}>{ind.desc}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section style={{ position: "relative", zIndex: 1, padding: "0 0 80px" }}>
          <div style={wrap}>
            <Reveal>
              <div style={{ borderRadius: 26, padding: "60px 44px", textAlign: "center", background: P.card, backdropFilter: "blur(24px) saturate(1.5)", WebkitBackdropFilter: "blur(24px) saturate(1.5)", border: `1px solid ${P.border}`, boxShadow: P.shadow, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${P.highlight}, transparent)` }} />
                <div style={{ position: "absolute", bottom: -120, left: "20%", right: "20%", height: 200, background: "radial-gradient(ellipse, rgba(59,130,246,0.06), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />

                <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", color: P.textDark, marginBottom: 14 }}>
                  Want This Running for Your Business?
                </h2>
                <p style={{ fontSize: 17, color: P.muted, maxWidth: 480, marginInline: "auto", marginBottom: 32, lineHeight: 1.65 }}>
                  Book a free 20-minute call. We&apos;ll map your missed revenue and show you exactly which layers to start with.
                </p>
                <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 40px", borderRadius: 999, fontSize: 17, fontWeight: 700, fontFamily: FONT, background: P.grad, color: "#ffffff", textDecoration: "none", boxShadow: "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)" }}>
                  Book Your Free Call →
                </a>
                <p style={{ fontSize: 13, color: P.muted, marginTop: 16 }}>
                  India + Germany · Hindi · English · Deutsch
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,0.5)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderTop: `1px solid ${P.border}`, padding: "32px 0" }}>
          <div style={{ ...wrap, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 13, color: P.muted }}>© 2026 KK Digital. AI automation agency. India & Germany.</p>
            <p style={{ fontSize: 13, color: P.muted }}>Built with AI. Powered by results.</p>
          </div>
        </footer>
      </div>
    </>
  );
}