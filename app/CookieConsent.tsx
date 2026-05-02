"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "cogniado_cookie_consent";
const GA_ID = "G-YY8JNZNP6D";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored as "accepted" | "rejected");
    } else {
      // Show banner only after a tiny delay so it doesn't flash on page load
      const timer = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
    setShow(false);
  };

  return (
    <>
      {/* Google Analytics 4 — loads ONLY after explicit user consent */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Cookie consent banner */}
      {show && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            right: 16,
            maxWidth: 520,
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 18,
            padding: "20px 22px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
            zIndex: 9999,
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#1E293B",
              marginBottom: 14,
              margin: 0,
              marginTop: 0,
            }}
          >
            We use cookies to understand how visitors use this site. You can
            accept analytics cookies or decline — declining keeps everything
            working.{" "}
            <a
              href="/datenschutz"
              style={{ color: "#3B82F6", textDecoration: "underline" }}
            >
              Privacy policy
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button
              onClick={reject}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.08)",
                background: "transparent",
                fontSize: 13,
                fontWeight: 600,
                color: "#1E293B",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Decline
            </button>
            <button
              onClick={accept}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: 999,
                border: "none",
                background:
                  "linear-gradient(135deg, #3B82F6, #7C3AED, #F97316)",
                fontSize: 13,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}