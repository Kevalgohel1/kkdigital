"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TITLES = [
  "dental clinics",
  "hair salons",
  "law firms",
  "German businesses",
  "coaching institutes",
];

const SERVICES = [
  {
    icon: "📞",
    title: "AI Voice Receptionist",
    desc: "Answers every call 24/7, books appointments, sends WhatsApp confirmations.",
    price: "From ₹40,000/month",
  },
  {
    icon: "💬",
    title: "Patient & Client Reminders",
    desc: "Automated WhatsApp reminders reduce no-shows by 35% from day one.",
    price: "From ₹20,000/month",
  },
  {
    icon: "🎯",
    title: "Lead Qualification Bot",
    desc: "AI filters fake leads, scores real ones, only sends hot leads to your team.",
    price: "From ₹40,000/month",
  },
  {
    icon: "🔄",
    title: "Re-Booking Automation",
    desc: "Brings lapsed customers back automatically. Runs while you sleep.",
    price: "From ₹15,000/month",
  },
  {
    icon: "⭐",
    title: "AI Review Engine",
    desc: "Auto-collects 5-star Google reviews after every visit. Grows your rating monthly.",
    price: "From ₹15,000/month",
  },
  {
    icon: "🔍",
    title: "Competitor Intel Brief",
    desc: "Weekly AI report on what your competitors are doing. Delivered every Monday.",
    price: "From ₹30,000/month",
  },
];

const STATS = [
  { value: "43+", label: "Workflows Built" },
  { value: "10", label: "Industries Served" },
  { value: "2", label: "Countries: India + Germany" },
  { value: "85%+", label: "Gross Margin for Clients" },
];

const STEPS = [
  {
    num: "01",
    title: "We audit your flow",
    desc: "We map where leads and patients are dropping off and being lost.",
  },
  {
    num: "02",
    title: "We build in 5 days",
    desc: "Your complete AI system is live and connected in one working week.",
  },
  {
    num: "03",
    title: "You see results week 1",
    desc: "Recovered revenue is measurable from the first week. We manage everything.",
  },
];

const CASES = [
  {
    result: "11 missed appointments recovered/month",
    revenue: "₹55,000 in recovered revenue",
    industry: "Dental Clinic, Mumbai",
    color: "#F57C00",
  },
  {
    result: "8 lapsed clients re-engaged in month 1",
    revenue: "Using re-booking automation bot",
    industry: "Hair Salon, Ahmedabad",
    color: "#0F766E",
  },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const dots: { x: number; y: number; opacity: number; speed: number }[] = [];
    const SPACING = 36;

    for (let x = 0; x < canvas.width; x += SPACING) {
      for (let y = 0; y < canvas.height; y += SPACING) {
        dots.push({
          x,
          y,
          opacity: Math.random() * 0.4 + 0.05,
          speed: Math.random() * 0.008 + 0.003,
        });
      }
    }

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.opacity += dot.speed;
        if (dot.opacity > 0.45 || dot.opacity < 0.05) dot.speed *= -1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 124, 0, ${dot.opacity})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
}

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span style={{ color: "#F57C00" }}>
      {displayed}
      <span
        style={{
          borderRight: "3px solid #F57C00",
          marginLeft: 2,
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0F172A", minHeight: "100vh" }}>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "80px 24px",
        }}
      >
        <ParticleCanvas />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 860 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(245,124,0,0.12)",
                border: "1px solid rgba(245,124,0,0.3)",
                borderRadius: 100,
                padding: "6px 18px",
                fontSize: 13,
                color: "#F57C00",
                fontWeight: 600,
                marginBottom: 28,
                letterSpacing: "0.04em",
              }}
            >
              India + Germany · AI Automation Agency
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 24,
                color: "white",
                letterSpacing: "-1.5px",
              }}
            >
              AI automation for
              <br />
              <Typewriter />
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "rgba(255,255,255,0.6)",
                maxWidth: 600,
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}
            >
              We build AI systems that recover missed revenue, reduce no-shows, and
              bring customers back — automatically.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "#F57C00",
                    color: "white",
                    border: "none",
                    borderRadius: 10,
                    padding: "16px 32px",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Book Free 20-min Call
                </button>
              </Link>
              <Link href="#services" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 10,
                    padding: "16px 32px",
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  See Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          padding: "60px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 800, color: "#F57C00", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{ padding: "96px 24px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", letterSpacing: "-1px" }}
            >
              Everything your business needs to grow
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, marginTop: 14 }}>
              43 automation workflows across 10 industries. All recurring. All measurable.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  backgroundColor: "#1A2B4A",
                  borderRadius: 16,
                  padding: 28,
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                  {s.desc}
                </p>
                <span
                  style={{
                    backgroundColor: "rgba(245,124,0,0.12)",
                    color: "#F57C00",
                    borderRadius: 100,
                    padding: "4px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {s.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          padding: "96px 24px",
          backgroundColor: "#0A1020",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
              marginBottom: 56,
            }}
          >
            Live in 5 days. Results in week 1.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    backgroundColor: "rgba(245,124,0,0.12)",
                    border: "1px solid rgba(245,124,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#F57C00",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CASE STUDIES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{ padding: "96px 24px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
              marginBottom: 48,
            }}
          >
            Real results for real businesses
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {CASES.map((c) => (
              <div
                key={c.industry}
                style={{
                  backgroundColor: "#1A2B4A",
                  borderRadius: 16,
                  padding: 32,
                  border: `1px solid ${c.color}33`,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: c.color,
                    backgroundColor: `${c.color}18`,
                    borderRadius: 100,
                    padding: "4px 12px",
                    display: "inline-block",
                    marginBottom: 16,
                  }}
                >
                  {c.industry}
                </div>
                <p style={{ color: "white", fontWeight: 700, fontSize: 20, lineHeight: 1.3, marginBottom: 10 }}>
                  {c.result}
                </p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{c.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          padding: "96px 24px",
          backgroundColor: "#F57C00",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
              marginBottom: 16,
            }}
          >
            Stop losing leads to your competitor.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, marginBottom: 36 }}>
            Book a free 20-minute call. We'll show you exactly what we'd build for your business.
          </p>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "white",
                color: "#F57C00",
                border: "none",
                borderRadius: 12,
                padding: "18px 40px",
                fontSize: 18,
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Book Your Free Call Now
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}