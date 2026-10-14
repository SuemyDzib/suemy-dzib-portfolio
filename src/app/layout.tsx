import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        {/* Estadísticas de visitas: solo funciona al publicar en Vercel
            con Analytics activado en el panel del proyecto. */}
        <Analytics />
      </body>
    </html>
  );
}
