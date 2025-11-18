import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "TramitesYA | Tarjeta Sanitaria Europea online",
  description: "Solicita tu Tarjeta Sanitaria Europea online en minutos. Presentamos tu solicitud y validamos tus datos.",
  icons: {
    icon: "/tramitesya-logo-yellow.png",
    shortcut: "/tramitesya-logo-yellow.png",
    apple: "/tramitesya-logo-yellow.png",
  },
  openGraph: {
    title: "TramitesYA | Tarjeta Sanitaria Europea online",
    description:
      "Gestion completa de la Tarjeta Sanitaria Europea por 9,90 EUR. Sin certificado digital y con soporte humano.",
    url: "https://tramitesyaweb.com",
    siteName: "TramitesYA",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/tramitesya-logo-yellow.png",
        width: 768,
        height: 768,
        alt: "TramitesYA – Tarjeta Sanitaria Europea online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TramitesYA | Tarjeta Sanitaria Europea online",
    description: "Solicita tu Tarjeta Sanitaria Europea online sin certificado digital.",
    images: ["/tramitesya-logo-yellow.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-slate-50 text-slate-900`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

