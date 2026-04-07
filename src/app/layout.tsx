import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { defaultRobotsMetadata, SITE_URL } from "@/lib/robots-config";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StickyMobileCta from "@/components/StickyMobileCta";
import LeadQualifyChat from "@/components/b2b/LeadQualifyChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BrandSoft | Software a la Medida, SEO e IA",
    template: "%s | BrandSoft"
  },
  description: "Especialistas en Desarrollo con Next.js, SEO Técnico Avanzado y Agentes de IA impulsados por Sendell. Potenciamos marcas de alto nivel con tecnología de vanguardia.",
  keywords: ["Desarrollo Software Bogotá", "SEO Técnico Colombia", "Agentes IA Sendell", "Next.js Developer", "Consultoría Software"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BrandSoft | IA y Transformación Digital',
    description: 'Revoluciona tu estrategia de branding y marketing con software de alto rendimiento.',
    url: SITE_URL,
    siteName: 'BrandSoft',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandSoft | IA y Transformación Digital',
    description: 'Revoluciona tu estrategia de branding y marketing con software de alto nivel.',
  },
  robots: defaultRobotsMetadata,
  verification: {
    google: 'ZPQimhsJaJXQRy1mbrk0iVb4IrQuOxyJKM2hgmuRrUU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-black text-white font-sans pb-[5.5rem] lg:pb-0`}
      >
        <SchemaOrg />
        {children}
        <StickyMobileCta />
        <LeadQualifyChat />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
