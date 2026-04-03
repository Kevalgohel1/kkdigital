import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "KK Digital | AI Automation Agency India & Germany",
  description:
    "AI voice agents, WhatsApp automation, review engines & patient reactivation for dental clinics, salons, and service businesses. India + Germany.",
  keywords: [
    "AI Automation India",
    "AI Voice Agent",
    "WhatsApp Automation",
    "Dental Clinic AI",
    "KK Digital",
    "AI Automation Germany",
  ],
  openGraph: {
    title: "KK Digital — AI Automation for Service Businesses",
    description:
      "Never miss a patient call again. AI voice agents, WhatsApp automation, and review engines for clinics and service businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0 }}>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YY8JNZNP6D"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YY8JNZNP6D');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}