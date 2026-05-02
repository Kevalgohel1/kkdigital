import type { Metadata } from "next";
import CookieConsent from "./CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cogniado | AI Automation for European Service Businesses",
  description:
    "AI voice agents, WhatsApp automation, review engines and patient reactivation for European clinics, salons, and service businesses.",
  keywords: [
    "AI Automation Europe",
    "AI Voice Agent",
    "WhatsApp Automation",
    "Dental Clinic AI",
    "Cogniado",
    "European Service Businesses",
  ],
  openGraph: {
    title: "Cogniado — AI Automation for Service Businesses",
    description:
      "Never miss a patient call again. AI voice agents, WhatsApp automation, and review engines for European service businesses.",
    type: "website",
  },
  verification: {
    google: "VW4AiBzVspij6Q4i-RfCccazE5WwvLcXEZVFWiz88JI",
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
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}