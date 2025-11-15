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
  title: "TramitesYA | Tarjeta Sanitaria Europea",
  description: "Solicita tu Tarjeta Sanitaria Europea (TSE) con presentación asistida y pago seguro.",
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
