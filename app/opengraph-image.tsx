import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KK Digital — AI Automation for Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #FFF7ED 0%, #F0F4FF 50%, #F8FAFC 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #3B82F6, #7C3AED, #F97316)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            KK
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            KK Digital
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#0F172A",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          AI Automation for
          <br />
          Service Businesses
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(30, 41, 59, 0.6)",
            lineHeight: 1.5,
            maxWidth: "700px",
            marginBottom: "36px",
          }}
        >
          AI voice agents, WhatsApp automation, review engines & patient reactivation — India + Germany
        </div>

        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["AI Voice Agent", "WhatsApp Automation", "Review Engine", "10 Industries"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 20px",
                  borderRadius: "999px",
                  background: "rgba(59, 130, 246, 0.08)",
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#3B82F6",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}