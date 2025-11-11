import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TramitesYA | Tarjeta Sanitaria Europea",
  description: "Solicita tu Tarjeta Sanitaria Europea (TSE) con presentación asistida y pago seguro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
