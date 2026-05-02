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

export default function Impressum() {
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

      <div
        style={{
          background: P.bg,
          minHeight: "100vh",
          color: P.text,
          fontFamily: FONT,
        }}
      >
        {/* NAVBAR */}
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
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 24px",
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
              <img
                src="/logo.png"
                alt="Cogniado"
                style={{ width: 120, height: 36, objectFit: "contain" }}
              />
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

        {/* CONTENT */}
        <main
          style={{
            ...wrap,
            paddingTop: 130,
            paddingBottom: 80,
            lineHeight: 1.75,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: P.textDark,
              marginBottom: 12,
            }}
          >
            Impressum
          </h1>
          <p
            style={{
              fontSize: 15,
              color: P.muted,
              marginBottom: 40,
            }}
          >
            Legal information and contact details — required under §5 TMG and
            §55 RStV.
          </p>

          <Section title="Information according to §5 TMG">
            <p>
              <strong>Cogniado</strong>
              <br />
              Operated by Keval Gohel &amp; Kishan
              <br />
              2nd Floor, Patanjali Arcade
              <br />
              Geeta Mandir Road, Bhaktinagar
              <br />
              Rajkot, Gujarat 360002
              <br />
              India
            </p>
          </Section>

          <Section title="Contact">
            <p>
              <strong>Email:</strong> hello@cogniado.com
              <br />
              <strong>Phone:</strong> +91 8000309011
            </p>
          </Section>

          <Section title="Responsible for content according to §55 Abs. 2 RStV">
            <p>
              Keval Gohel
              <br />
              2nd Floor, Patanjali Arcade
              <br />
              Geeta Mandir Road, Bhaktinagar
              <br />
              Rajkot, Gujarat 360002
              <br />
              India
            </p>
          </Section>

          <Section title="EU Online Dispute Resolution">
            <p>
              The European Commission provides a platform for online dispute
              resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: P.accent1, textDecoration: "underline" }}
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p style={{ marginTop: 10 }}>
              Our email address is provided above. We are not willing or
              obliged to participate in dispute resolution procedures before a
              consumer arbitration board.
            </p>
          </Section>

          <Section title="Liability for Content">
            <p>
              As a service provider, we are responsible for our own content on
              these pages according to §7(1) TMG and general laws. According
              to §§8–10 TMG, we are not obligated to monitor transmitted or
              stored third-party information or to investigate circumstances
              that indicate illegal activity.
            </p>
            <p style={{ marginTop: 10 }}>
              Obligations to remove or block the use of information under
              general laws remain unaffected. However, liability in this regard
              is only possible from the moment of knowledge of a specific
              infringement. Upon notification of corresponding infringements,
              we will remove this content immediately.
            </p>
          </Section>

          <Section title="Liability for Links">
            <p>
              Our website contains links to external third-party websites over
              whose content we have no influence. We therefore cannot accept
              any liability for this external content. The respective provider
              or operator of the linked pages is always responsible for their
              content. The linked pages were checked for possible legal
              violations at the time of linking. Illegal content was not
              recognizable at the time of linking.
            </p>
            <p style={{ marginTop: 10 }}>
              Permanent monitoring of the content of linked pages is not
              reasonable without specific evidence of an infringement. Upon
              notification of violations, we will remove such links
              immediately.
            </p>
          </Section>

          <Section title="Copyright">
            <p>
              The content and works on these pages created by the site
              operator are subject to copyright law. Reproduction, processing,
              distribution, and any kind of use outside the limits of
              copyright require the written consent of the respective author
              or creator. Downloads and copies of this site are only permitted
              for private, non-commercial use.
            </p>
            <p style={{ marginTop: 10 }}>
              Insofar as the content on this site was not created by the
              operator, the copyrights of third parties are respected. In
              particular, third-party content is identified as such. Should
              you nevertheless become aware of a copyright infringement,
              please inform us accordingly. Upon notification of violations,
              we will remove such content immediately.
            </p>
          </Section>

          <p
            style={{
              fontSize: 13,
              color: P.muted,
              marginTop: 48,
              paddingTop: 24,
              borderTop: `1px solid ${P.border}`,
            }}
          >
            Last updated: May 2026
          </p>
        </main>

        {/* FOOTER */}
        <footer
          style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: `1px solid ${P.border}`,
            padding: "32px 0",
          }}
        >
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
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

/* ─── Section helper ─── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: P.textDark,
          marginBottom: 10,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: 15, color: P.text, lineHeight: 1.75 }}>
        {children}
      </div>
    </div>
  );
}