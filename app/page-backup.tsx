"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "AI Strategy & Consulting",
    desc: "We roadmap your AI transition, identifying high-ROI opportunities to automate your specific business workflows.",
    icon: "🎯",
  },
  {
    title: "Custom AI Agents",
    desc: "Digital employees that handle lead gen, customer support, and data entry 24/7 without taking a break.",
    icon: "🤖",
  },
  {
    title: "Workflow Automation",
    desc: "Connect your entire tech stack. We make your apps talk to each other so you don't have to move data manually.",
    icon: "⚡",
  },
  {
    title: "Automated Lead Gen",
    desc: "Stop chasing prospects. We build systems that find, qualify, and book meetings with your ideal clients.",
    icon: "📈",
  },
  {
    title: "AI Content Engines",
    desc: "Scale your organic reach with AI-driven content systems that maintain your unique brand voice.",
    icon: "✍️",
  },
  {
    title: "Predictive Analytics",
    desc: "Use your data to see the future. We build dashboards that predict churn and identify sales trends.",
    icon: "📊",
  },
];

const STEPS = [
  { num: "01", title: "Discovery Call", desc: "We analyze your current bottlenecks." },
  { num: "02", title: "Custom Blueprint", desc: "We design your specific AI architecture." },
  { num: "03", title: "Rapid Build", desc: "We deploy your systems in weeks, not months." },
  { num: "04", title: "Scale", desc: "Ongoing optimization to maximize your ROI." },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "#050505", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* NAVIGATION */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 5%", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -1 }}>
          KK<span style={{ color: "#F57C00" }}>DIGITAL</span>
        </div>
        <div style={{ display: "flex", gap: 30 }}>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>Contact</Link>
          <Link href="/contact">
            <button style={{ backgroundColor: "#F57C00", color: "white", border: "none", padding: "10px 20px", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: "120px 5% 80px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
            The Future of Business is <br />
            <span style={{ color: "#F57C00" }}>Automated.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
            We build AI systems that recover missed revenue, automate tasks, and bring customers back — automatically.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "#F57C00",
                  color: "white",
                  border: "none",
                  borderRadius: 12,
                  padding: "18px 36px",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 0 24px rgba(245, 124, 0, 0.5)",
                  transition: "all 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Book Free 20-min Call
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION (APPLE GLASS CARDS) */}
      <section style={{ padding: "100px 5%", backgroundColor: "#080808" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>Our Expertise</h2>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>Cutting-edge AI solutions tailored for your growth.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.4)" }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.8)",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: 22, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontSize: 15 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, maxWidth: 1000, margin: "0 auto" }}>
          {STEPS.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: "rgba(245,124,0,0.12)", border: "1px solid rgba(245,124,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 18, fontWeight: 800, color: "#F57C00" }}>
                {step.num}
              </div>
              <h3 style={{ textAlign: "center", fontSize: 18, marginBottom: 8 }}>{step.title}</h3>
              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW DARK FOOTER CTA */}
      <section style={{ padding: "100px 5%", backgroundColor: "#0A1020", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, marginBottom: 24 }}>Ready to Automate Your Business?</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
          Join the waitlist for our next cohort of automation audits.
        </p>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#F57C00",
              color: "white",
              border: "none",
              borderRadius: 10,
              padding: "16px 32px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(245, 124, 0, 0.4)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Get Your Free Automation Audit
          </button>
        </Link>
      </section>

      <footer style={{ padding: "40px 5%", textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
        © 2026 KK DIGITAL. All Rights Reserved.
      </footer>
    </main>
  );
}