"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

/* ═══════════════════════════════════════════
   WORKFLOW FIRE — LIQUID GLASS PALETTE
   ═══════════════════════════════════════════ */

const P = {
  // Backgrounds
  bg: "linear-gradient(180deg, #FFF7ED 0%, #F0F4FF 50%, #F8FAFC 100%)",
  card: "rgba(255, 255, 255, 0.72)",
  cardHover: "rgba(255, 255, 255, 0.85)",

  // Accent gradient
  accent1: "#3B82F6",
  accent2: "#7C3AED",
  accent3: "#F97316",
  grad: "linear-gradient(135deg, #3B82F6, #7C3AED, #F97316)",
  gradSubtle: "linear-gradient(135deg, #3B82F6, #7C3AED)",

  // Glass
  border: "rgba(0, 0, 0, 0.06)",
  borderHover: "rgba(59, 130, 246, 0.2)",
  highlight: "rgba(255, 255, 255, 0.95)",
  shadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
  shadowHover: "0 8px 32px rgba(59, 130, 246, 0.08), 0 2px 8px rgba(0,0,0,0.04)",

  // Text
  text: "#1E293B",
  textDark: "#0F172A",
  muted: "rgba(30, 41, 59, 0.5)",

  // Badge
  badge: "#EFF6FF",
  badgeBorder: "#BFDBFE",
  badgeText: "#3B82F6",

  // Orbs
  orb1: "radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 70%)",
  orb2: "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)",
  orb3: "radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)",
};

const FONT = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

/* ═══════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════ */

function GlassCard({
  children,
  className,
  hover = true,
  style = {},
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: hovered ? P.cardHover : P.card,
        backdropFilter: "blur(24px) saturate(1.5)",
        WebkitBackdropFilter: "blur(24px) saturate(1.5)",
        border: `1px solid ${hovered ? P.borderHover : P.border}`,
        borderRadius: 22,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: hovered ? P.shadowHover : P.shadow,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        ...style,
      }}
    >
      {/* Specular highlight — top edge */}
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

function CapsuleBtn({
  children,
  primary = false,
  href,
  style = {},
}: {
  children: ReactNode;
  primary?: boolean;
  href?: string;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: primary ? "14px 32px" : "12px 28px",
    borderRadius: 999,
    fontSize: primary ? 16 : 14,
    fontWeight: 600,
    fontFamily: FONT,
    letterSpacing: "-0.01em",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    textDecoration: "none",
    border: "none",
    ...(primary
      ? {
          background: P.grad,
          color: "#ffffff",
          boxShadow: hovered
            ? "0 6px 24px rgba(59,130,246,0.25), 0 4px 12px rgba(124,58,237,0.15)"
            : "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)",
          transform: hovered ? "translateY(-1px) scale(1.02)" : "translateY(0) scale(1)",
        }
      : {
          background: hovered ? "rgba(255,255,255,0.9)" : P.card,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          color: P.text,
          border: `1px solid ${hovered ? P.borderHover : P.border}`,
          boxShadow: P.shadow,
        }),
    ...style,
  };

  return (
    <a
      href={href || "/contact"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={base}
    >
      {children}
    </a>
  );
}

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

/* ─── Intersection Observer Hooks ─── */
function useReveal() {
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

  return { ref, show };
}

function useStagger(count: number) {
  const [visible, setVisible] = useState<boolean[]>(Array(count).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < count; i++) {
            setTimeout(
              () =>
                setVisible((prev) => {
                  const n = [...prev];
                  n[i] = true;
                  return n;
                }),
              i * 100
            );
          }
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count]);

  return { ref, visible };
}

function Reveal({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  const { ref, show } = useReveal();
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

/* ─── SVG Icons ─── */
const ico = {
  phone: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.accent1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  star: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.accent3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  users: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.accent2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  chart: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.accent1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.accent2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  zap: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={P.accent3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="chk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={P.accent1} />
          <stop offset="100%" stopColor={P.accent2} />
        </linearGradient>
      </defs>
      <polyline points="20 6 9 17 4 12" stroke="url(#chk)" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const NICHES = [
  "Dental Clinics",
  "Hair Salons",
  "Real Estate",
  "Legal Firms",
  "Hospitals",
  "Zahnarztpraxen",
];

const STATS = [
  { value: "43+", label: "AI Workflows" },
  { value: "10", label: "Industries" },
  { value: "85%+", label: "Gross Margin" },
  { value: "24/7", label: "Always On" },
];

const SERVICES = [
  {
    icon: ico.phone,
    title: "Never Miss a Patient",
    desc: "AI voice agent answers every call 24/7, books appointments into Google Calendar, sends WhatsApp confirmation + 2hr reminder. Missed call? WhatsApp in 60 seconds.",
    tag: "Core",
    color: P.accent1,
    tagBg: "#EFF6FF",
    tagBorder: "#BFDBFE",
  },
  {
    icon: ico.star,
    title: "Auto Review Engine",
    desc: "After every visit — 5-star patients get a Google review link. Negative feedback goes to you privately. Grow your Google rating 0.5–1 star in 60 days.",
    tag: "Growth",
    color: P.accent3,
    tagBg: "#FFF7ED",
    tagBorder: "#FED7AA",
  },
  {
    icon: ico.users,
    title: "Patient Reactivation",
    desc: "AI checks your CRM monthly for 6-month inactive patients, sends personalised WhatsApp, books them back. Recover 8–15 patients per month.",
    tag: "Revenue",
    color: P.accent2,
    tagBg: "#F5F3FF",
    tagBorder: "#DDD6FE",
  },
  {
    icon: ico.chart,
    title: "Owner Dashboard",
    desc: "Live Looker Studio dashboard: calls answered, appointments booked, missed calls recovered, reviews collected, and revenue attributed — all in one screen.",
    tag: "Insights",
    color: P.accent1,
    tagBg: "#EFF6FF",
    tagBorder: "#BFDBFE",
  },
  {
    icon: ico.shield,
    title: "Competitor Intel Brief",
    desc: "Weekly AI-generated report on your competing clinics delivered every Monday morning. Know what they're doing before they do.",
    tag: "Strategy",
    color: P.accent2,
    tagBg: "#F5F3FF",
    tagBorder: "#DDD6FE",
  },
  {
    icon: ico.zap,
    title: "Lead Qualification AI",
    desc: "Incoming leads verified in 60 seconds, qualified via WhatsApp conversation, scored 1–10. Hot leads get sent to your team with full context instantly.",
    tag: "Sales",
    color: P.accent3,
    tagBg: "#FFF7ED",
    tagBorder: "#FED7AA",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We map your missed calls, lost patients, and revenue gaps in a focused 20-minute call.",
  },
  {
    num: "02",
    title: "System Build",
    desc: "We build your custom AI receptionist, WhatsApp flows, review engine, and dashboard in 5–7 days.",
  },
  {
    num: "03",
    title: "Go Live & Grow",
    desc: "Your AI starts answering calls, recovering patients, and collecting reviews from day one. We optimise monthly.",
  },
];

const INDUSTRIES = [
  "Dental Clinics",
  "Hair Salons",
  "Beauty Spas",
  "Hospitals",
  "Real Estate",
  "Legal Firms",
  "Coaching Institutes",
  "Nail Studios",
  "Zahnarztpraxen",
  "Tierarztpraxen",
];

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Typewriter
  const [nicheIdx, setNicheIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const statsAnim = useStagger(4);
  const servicesAnim = useStagger(6);
  const stepsAnim = useStagger(3);
  const industriesAnim = useStagger(10);

  useEffect(() => {
    setTimeout(() => setHeroReady(true), 150);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const word = NICHES[nicheIdx];
    const speed = deleting ? 35 : 65;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIdx > 0) {
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setNicheIdx((i) => (i + 1) % NICHES.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, nicheIdx]);

  const wrap: React.CSSProperties = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
  };

  return (
    <>
      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FFF7ED; font-family: ${FONT}; }
        ::selection { background: rgba(59,130,246,0.15); color: #1E293B; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes orbA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,-30px) scale(1.08); } }
        @keyframes orbB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-60px,25px) scale(1.05); } }
        @keyframes orbC { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,40px); } 66% { transform: translate(-20px,-30px); } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes gradShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .grid-services { grid-template-columns: 1fr !important; }
          .grid-steps { grid-template-columns: 1fr !important; }
          .grid-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-pricing { grid-template-columns: 1fr !important; }
          .grid-industries { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-title { font-size: 36px !important; }
          .grid-footer { grid-template-columns: 1fr !important; gap: 32px !important; }
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
            background: scrolled ? "rgba(255, 247, 237, 0.72)" : "transparent",
            backdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.5)" : "none",
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
            {/* Logo */}
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
                  boxShadow:
                    "0 2px 10px rgba(59,130,246,0.2)",
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
                KK Digital
              </span>
            </a>

            {/* Nav links */}
            <div
              className="hide-mobile"
              style={{ display: "flex", alignItems: "center", gap: 32 }}
            >
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    color: P.muted,
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = P.textDark)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = P.muted as string)
                  }
                >
                  {l.label}
                </a>
              ))}
              <CapsuleBtn primary href="/contact" style={{ padding: "10px 24px", fontSize: 14 }}>
                Book a Call
              </CapsuleBtn>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
              }}
              className="show-mobile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={P.textDark} strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        {/* ═══ HERO ═══ */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 160,
            paddingBottom: 60,
          }}
        >
          <div style={wrap}>
            <div
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              {/* Badge */}
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
                AI Automation · India & Germany
              </div>

              {/* Headline */}
              <h1
                className="hero-title"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 68px)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.035em",
                  color: P.textDark,
                  maxWidth: 750,
                  marginBottom: 20,
                }}
              >
                Your{" "}
                <span
                  style={{
                    background: P.grad,
                    backgroundSize: "200% 200%",
                    animation: "gradShift 4s ease infinite",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {NICHES[nicheIdx].slice(0, charIdx)}
                  <span
                    style={{
                      animation: "blink 1s step-end infinite",
                      WebkitTextFillColor: P.accent2,
                    }}
                  >
                    |
                  </span>
                </span>
                <br />
                Never Misses a Call Again.
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: P.muted,
                  maxWidth: 540,
                  marginBottom: 36,
                  fontWeight: 400,
                }}
              >
                We build AI voice agents that answer every patient call 24/7,
                book appointments, recover missed revenue, and grow your Google
                reviews — automatically.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <CapsuleBtn primary href="/contact">
                  Book Free 20-min Call {ico.arrow}
                </CapsuleBtn>
                <CapsuleBtn href="#services">See How It Works</CapsuleBtn>
              </div>
            </div>

            {/* ─── STATS ─── */}
            <div
              ref={statsAnim.ref}
              className="grid-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
                marginTop: 72,
              }}
            >
              {STATS.map((s, i) => (
                <GlassCard
                  key={i}
                  style={{
                    padding: "26px 20px",
                    textAlign: "center",
                    opacity: statsAnim.visible[i] ? 1 : 0,
                    transform: statsAnim.visible[i]
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 800,
                      background: P.grad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: P.muted,
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section
          id="services"
          style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
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
                  The DentalOS Stack
                </p>
                <h2
                  style={{
                    fontSize: "clamp(30px, 4vw, 46px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                  }}
                >
                  5 Layers. Zero Missed Revenue.
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: P.muted,
                    marginTop: 14,
                    maxWidth: 520,
                    marginInline: "auto",
                    lineHeight: 1.65,
                  }}
                >
                  Each layer compounds — the AI receptionist feeds reviews,
                  reviews feed reactivation, reactivation feeds the dashboard.
                </p>
              </div>
            </Reveal>

            <div
              ref={servicesAnim.ref}
              className="grid-services"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {SERVICES.map((s, i) => (
                <GlassCard
                  key={i}
                  style={{
                    padding: "30px 26px",
                    opacity: servicesAnim.visible[i] ? 1 : 0,
                    transform: servicesAnim.visible[i]
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transition: `all 0.6s cubic-bezier(0.23,1,0.32,1)`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 13,
                        background: `${s.color}0A`,
                        border: `1px solid ${s.color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {s.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: s.color,
                        padding: "4px 12px",
                        borderRadius: 999,
                        background: s.tagBg,
                        border: `1px solid ${s.tagBorder}`,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      marginBottom: 8,
                      color: P.textDark,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: P.muted,
                    }}
                  >
                    {s.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section
          id="process"
          style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
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
                  Process
                </p>
                <h2
                  style={{
                    fontSize: "clamp(30px, 4vw, 46px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                  }}
                >
                  Live in 7 Days. Not 7 Months.
                </h2>
              </div>
            </Reveal>

            <div
              ref={stepsAnim.ref}
              className="grid-steps"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {STEPS.map((s, i) => (
                <GlassCard
                  key={i}
                  style={{
                    padding: "36px 28px",
                    textAlign: "center",
                    opacity: stepsAnim.visible[i] ? 1 : 0,
                    transform: stepsAnim.visible[i]
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transition: `all 0.6s cubic-bezier(0.23,1,0.32,1)`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 44,
                      fontWeight: 800,
                      background: P.grad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: 14,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {s.num}
                  </div>
                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 700,
                      marginBottom: 10,
                      color: P.textDark,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: P.muted,
                    }}
                  >
                    {s.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES ═══ */}
        <section style={{ position: "relative", zIndex: 1, padding: "60px 0" }}>
          <div style={wrap}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
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
                  Industries We Serve
                </p>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                  }}
                >
                  Built for Service Businesses
                </h2>
              </div>
            </Reveal>

            <div
              ref={industriesAnim.ref}
              className="grid-industries"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 10,
              }}
            >
              {INDUSTRIES.map((ind, i) => (
                <GlassCard
                  key={i}
                  style={{
                    padding: "18px 16px",
                    textAlign: "center",
                    opacity: industriesAnim.visible[i] ? 1 : 0,
                    transform: industriesAnim.visible[i]
                      ? "translateY(0)"
                      : "translateY(16px)",
                    transition: `all 0.5s cubic-bezier(0.23,1,0.32,1)`,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: P.textDark,
                    }}
                  >
                    {ind}
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PRICING ═══ */}
        <section
          id="pricing"
          style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
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
                  Pricing
                </p>
                <h2
                  style={{
                    fontSize: "clamp(30px, 4vw, 46px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: P.textDark,
                  }}
                >
                  Simple. Transparent. No Surprises.
                </h2>
              </div>
            </Reveal>

            <div
              className="grid-pricing"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                maxWidth: 820,
                margin: "0 auto",
              }}
            >
              {/* India */}
              <Reveal>
                <GlassCard hover={false} style={{ padding: "40px 32px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 999,
                      background: P.badge,
                      border: `1px solid ${P.badgeBorder}`,
                      fontSize: 12,
                      fontWeight: 700,
                      color: P.accent1,
                      marginBottom: 20,
                    }}
                  >
                    🇮🇳 India
                  </div>
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: 800,
                      color: P.textDark,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    ₹40K
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: 500,
                        color: P.muted,
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: P.muted,
                      marginTop: 6,
                      marginBottom: 24,
                    }}
                  >
                    + ₹25,000 one-time setup
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {[
                      "AI Voice Agent 24/7",
                      "WhatsApp Automation",
                      "Auto Review Engine",
                      "Patient Reactivation",
                      "Owner Dashboard",
                    ].map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontSize: 14,
                          color: P.text,
                        }}
                      >
                        {ico.check} {f}
                      </div>
                    ))}
                  </div>
                  <CapsuleBtn
                    primary
                    href="/contact"
                    style={{
                      marginTop: 28,
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    Get Started
                  </CapsuleBtn>
                </GlassCard>
              </Reveal>

              {/* Germany */}
              <Reveal>
                <GlassCard hover={false} style={{ padding: "40px 32px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 999,
                      background: "#FFF7ED",
                      border: `1px solid #FED7AA`,
                      fontSize: 12,
                      fontWeight: 700,
                      color: P.accent3,
                      marginBottom: 20,
                    }}
                  >
                    🇩🇪 Germany
                  </div>
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: 800,
                      color: P.textDark,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    €1,200
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: 500,
                        color: P.muted,
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: P.muted,
                      marginTop: 6,
                      marginBottom: 24,
                    }}
                  >
                    + €500 one-time setup
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {[
                      "KI-Rezeptionist (DE/EN)",
                      "WhatsApp-Automatisierung",
                      "Bewertungs-Engine",
                      "Patienten-Reaktivierung",
                      "Inhaber-Dashboard",
                    ].map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontSize: 14,
                          color: P.text,
                        }}
                      >
                        {ico.check} {f}
                      </div>
                    ))}
                  </div>
                  <CapsuleBtn
                    primary
                    href="/contact"
                    style={{
                      marginTop: 28,
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    Jetzt Starten
                  </CapsuleBtn>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section
          id="contact"
          style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
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
                {/* Top specular */}
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
                {/* Bottom accent glow */}
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
                  Stop Losing ₹5,000 Per Missed Call.
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
                  Book a free 20-minute discovery call. We&apos;ll show you
                  exactly how many patients you&apos;re losing — and how our AI
                  recovers them.
                </p>
                <CapsuleBtn
                  primary
                  style={{ fontSize: 17, padding: "16px 40px" }}
                >
                  Book Your Free Call {ico.arrow}
                </CapsuleBtn>
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
            padding: "48px 0 32px",
          }}
        >
          <div
            className="grid-footer"
            style={{
              ...wrap,
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: 48,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: P.grad,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  KK
                </div>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: P.textDark,
                  }}
                >
                  KK Digital
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: P.muted,
                  lineHeight: 1.7,
                  maxWidth: 340,
                }}
              >
                AI automation for service businesses in India and Germany. Built
                by performance marketers who understand revenue, not just
                technology.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  background: P.grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Services
              </p>
              {[
                "AI Voice Agent",
                "Lead Nurturing",
                "WhatsApp Automation",
                "Review Engine",
                "Owner Dashboard",
              ].map((s) => (
                <p
                  key={s}
                  style={{
                    fontSize: 14,
                    color: P.muted,
                    marginBottom: 10,
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  background: P.grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Contact
              </p>
              <p style={{ fontSize: 14, color: P.muted, marginBottom: 10 }}>
                India + Germany
              </p>
              <p style={{ fontSize: 14, color: P.muted, marginBottom: 10 }}>
                WhatsApp: +91 80003 09011
              </p>
              <p style={{ fontSize: 14, color: P.muted }}>
                digitalkeval1@gmail.com
              </p>
            </div>
          </div>
          <div
            style={{
              ...wrap,
              marginTop: 36,
              paddingTop: 20,
              borderTop: `1px solid ${P.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 13, color: P.muted }}>
              © 2026 KK Digital. AI automation agency. India & Germany.
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