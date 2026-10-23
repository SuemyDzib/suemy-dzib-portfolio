import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import { profile } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";
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

// Estos valores se configuran como variables de entorno en Vercel
// (Settings › Environment Variables). Si están vacíos, no se usan.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  ...(GOOGLE_VERIFICATION
    ? { verification: { google: GOOGLE_VERIFICATION } }
    : {}),
  title: `${profile.name} | ${profile.role}`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    locale: "es_MX",
    type: "website",
    url: "/",
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
      {/* Google Analytics: solo se carga si existe NEXT_PUBLIC_GA_ID */}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
