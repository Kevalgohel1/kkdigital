import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KK Digital — AI Automation Agency India & Germany",
  description:
    "AI voice agents, WhatsApp automation, and lead nurturing for dental clinics, salons, and service businesses in India and Germany. From ₹20,000/month.",
  keywords:
    "AI automation India, dental clinic AI, WhatsApp automation, lead nurturing bot, AI receptionist India Germany",
  openGraph: {
    title: "KK Digital — AI Automation Agency",
    description:
      "We build AI systems that recover missed revenue, reduce no-shows, and bring customers back — automatically.",
    type: "website",
  },
};

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#F57C00",
              letterSpacing: "-0.5px",
            }}
          >
            KK Digital
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Services", "Case Studies", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              {item}
            </Link>
          ))}
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#F57C00",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Book a Call
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A1020",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        <div>
          <div
            style={{ fontSize: 22, fontWeight: 700, color: "#F57C00", marginBottom: 8 }}
          >
            KK Digital
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, maxWidth: 280 }}>
            AI automation for service businesses in India and Germany.
          </p>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          <div>
            <p style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Services
            </p>
            {["AI Voice Agent", "Lead Nurturing", "WhatsApp Automation", "Review Engine"].map(
              (s) => (
                <p key={s} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 6 }}>
                  {s}
                </p>
              )
            )}
          </div>
          <div>
            <p style={{ color: "white", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>
              Contact
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 6 }}>
              India + Germany
            </p>
            <p style={{ color: "#F57C00", fontSize: 13 }}>WhatsApp: +91 XXXXX XXXXX</p>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "32px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.3)",
          fontSize: 13,
          textAlign: "center",
        }}
      >
        © 2025 KK Digital. AI automation agency. India & Germany.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#0F172A", color: "white", margin: 0 }}
      >
        <Navbar />
        <main style={{ paddingTop: 64 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}