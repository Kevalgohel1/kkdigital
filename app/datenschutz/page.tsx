"use client";

import { useEffect, useState } from "react";

const P = {
  bg: "linear-gradient(180deg, #FFF7ED 0%, #F0F4FF 50%, #F8FAFC 100%)",
  grad: "linear-gradient(135deg, #3B82F6, #7C3AED, #F97316)",
  border: "rgba(0, 0, 0, 0.06)",
  text: "#1E293B",
  textDark: "#0F172A",
  muted: "rgba(30, 41, 59, 0.6)",
  accent1: "#3B82F6",
};

const FONT =
  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export default function Datenschutz() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap: React.CSSProperties = {
    maxWidth: 760,
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
      `}</style>

      <div style={{ background: P.bg, minHeight: "100vh", color: P.text, fontFamily: FONT }}>
        {/* NAVBAR */}
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
            borderBottom: scrolled ? `1px solid ${P.border}` : "1px solid transparent",
            transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <img src="/logo.png" alt="Cogniado" style={{ width: 120, height: 36, objectFit: "contain" }} />
              <span style={{ fontSize: 18, fontWeight: 800, color: P.textDark, letterSpacing: "-0.02em" }}>Cogniado</span>
            </a>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 999, fontSize: 14, fontWeight: 600, fontFamily: FONT, background: P.grad, color: "#ffffff", textDecoration: "none", boxShadow: "0 3px 16px rgba(59,130,246,0.15), 0 2px 6px rgba(0,0,0,0.05)" }}>
              ← Back to Home
            </a>
          </div>
        </nav>

        {/* CONTENT */}
        <main style={{ ...wrap, paddingTop: 130, paddingBottom: 80, lineHeight: 1.75 }}>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", color: P.textDark, marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 15, color: P.muted, marginBottom: 40 }}>
            How we handle your data — under the EU General Data Protection Regulation (GDPR).
          </p>

          <Section title="1. Who We Are">
            <p>
              This privacy policy applies to <strong>Cogniado</strong>, operated by Keval Gohel
              and Kishan, located at 2nd Floor, Patanjali Arcade, Geeta Mandir Road,
              Bhaktinagar, Rajkot, Gujarat 360002, India.
            </p>
            <p style={{ marginTop: 10 }}>
              For all data privacy questions, contact us at:{" "}
              <a href="mailto:hello@cogniado.com" style={{ color: P.accent1, textDecoration: "underline" }}>hello@cogniado.com</a>
            </p>
          </Section>

          <Section title="2. What Data We Collect">
            <p><strong>When you visit this website:</strong></p>
            <ul style={{ marginLeft: 20, marginTop: 8 }}>
              <li>Server logs (IP address, browser type, referring page) — kept for max 14 days for security</li>
              <li>Analytics data via Google Analytics 4 — only if you accept cookies</li>
            </ul>
            <p style={{ marginTop: 14 }}><strong>When you fill out the contact form:</strong></p>
            <ul style={{ marginLeft: 20, marginTop: 8 }}>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (optional)</li>
              <li>The message you submit</li>
            </ul>
            <p style={{ marginTop: 14 }}>
              We use <strong>Web3Forms</strong> to process contact form submissions. They forward the
              submission to our email and do not store it long-term. See their{" "}
              <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: P.accent1, textDecoration: "underline" }}>privacy policy</a>.
            </p>
          </Section>

          <Section title="3. Why We Collect It (Legal Basis under GDPR Art. 6)">
            <ul style={{ marginLeft: 20 }}>
              <li><strong>Server logs:</strong> Legitimate interest (Art. 6(1)(f)) — to operate the site securely</li>
              <li><strong>Analytics cookies:</strong> Your explicit consent (Art. 6(1)(a)) — and only if you click &ldquo;Accept&rdquo; on our cookie banner</li>
              <li><strong>Contact form data:</strong> To respond to your inquiry (Art. 6(1)(b)) — pre-contractual measures</li>
            </ul>
          </Section>

          <Section title="4. Cookies">
            <p>
              We use a cookie consent banner. <strong>If you decline</strong>, no analytics or tracking
              cookies are set — only a small technical cookie that remembers your preference.
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>If you accept</strong>, Google Analytics 4 is loaded with IP anonymisation
              enabled. Data is processed by Google in the United States. Google&apos;s data
              processing is covered by the EU-U.S. Data Privacy Framework.
            </p>
            <p style={{ marginTop: 10 }}>
              You can change your cookie choice at any time by clearing your browser&apos;s site
              data for cogniado.com.
            </p>
          </Section>

          <Section title="5. Third Parties">
            <p>The following third parties may receive data when you use this site:</p>
            <ul style={{ marginLeft: 20, marginTop: 8 }}>
              <li><strong>Vercel Inc.</strong> — hosts this website (server logs)</li>
              <li><strong>Cloudflare Inc.</strong> — DNS and email routing</li>
              <li><strong>Google LLC</strong> — Analytics 4 (only with your consent), Fonts</li>
              <li><strong>Web3Forms</strong> — contact form processing</li>
            </ul>
            <p style={{ marginTop: 10 }}>
              We do not sell your data. We do not share it with advertisers.
            </p>
          </Section>

          <Section title="6. How Long We Keep Your Data">
            <ul style={{ marginLeft: 20 }}>
              <li><strong>Server logs:</strong> 14 days maximum</li>
              <li><strong>Contact form submissions:</strong> Until your inquiry is resolved, plus 6 months</li>
              <li><strong>Analytics data:</strong> 14 months (Google Analytics default)</li>
              <li><strong>Cookie preference:</strong> Until you clear it</li>
            </ul>
          </Section>

          <Section title="7. Your Rights Under GDPR">
            <p>You have the following rights regarding your personal data:</p>
            <ul style={{ marginLeft: 20, marginTop: 8 }}>
              <li><strong>Right of access</strong> (Art. 15) — see what data we have about you</li>
              <li><strong>Right of rectification</strong> (Art. 16) — correct inaccurate data</li>
              <li><strong>Right of erasure</strong> (Art. 17) — &ldquo;right to be forgotten&rdquo;</li>
              <li><strong>Right to restrict processing</strong> (Art. 18)</li>
              <li><strong>Right to data portability</strong> (Art. 20)</li>
              <li><strong>Right to object</strong> (Art. 21)</li>
              <li><strong>Right to withdraw consent</strong> at any time</li>
              <li><strong>Right to lodge a complaint</strong> with your data protection authority</li>
            </ul>
            <p style={{ marginTop: 14 }}>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@cogniado.com" style={{ color: P.accent1, textDecoration: "underline" }}>hello@cogniado.com</a>
              . We respond within 30 days (GDPR requirement).
            </p>
          </Section>

          <Section title="8. International Data Transfers">
            <p>
              We are based in India. By using this site, your data may be transferred outside the
              European Economic Area (EEA). We rely on adequacy decisions, standard contractual
              clauses (SCCs) where applicable, and the EU-U.S. Data Privacy Framework for
              transfers to the United States via our service providers (Vercel, Google,
              Cloudflare).
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              Communications are encrypted via TLS (HTTPS). Form submissions are transmitted
              securely. We do not store passwords or sensitive financial data on this website.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this policy as our services evolve. The &ldquo;last updated&rdquo; date below
              shows when. Significant changes will be highlighted on the homepage for 14 days.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For any questions about this privacy policy or your data, email us at{" "}
              <a href="mailto:hello@cogniado.com" style={{ color: P.accent1, textDecoration: "underline" }}>hello@cogniado.com</a>
              .
            </p>
          </Section>

          <p style={{ fontSize: 13, color: P.muted, marginTop: 48, paddingTop: 24, borderTop: `1px solid ${P.border}` }}>
            Last updated: May 2026
          </p>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderTop: `1px solid ${P.border}`, padding: "32px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 13, color: P.muted }}>
              © 2026 Cogniado. AI automation for European service businesses.
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: P.textDark, marginBottom: 10, letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, color: P.text, lineHeight: 1.75 }}>
        {children}
      </div>
    </div>
  );
}