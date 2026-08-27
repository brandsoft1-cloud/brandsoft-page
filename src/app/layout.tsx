import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { defaultRobotsMetadata, SITE_URL } from "@/lib/robots-config";
import SchemaOrg from "@/components/SchemaOrg";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StickyMobileCta from "@/components/StickyMobileCta";

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
    default: "BrandSoft | Automatización de Procesos con IA y n8n para Empresas",
    template: "%s | BrandSoft"
  },
  description: "Automatizamos los procesos manuales de tu empresa con IA, agentes conversacionales y flujos en n8n. Consultoría de automatización para empresas y consultoras en Colombia y Latam. Recupera horas y reduce costos.",
  keywords: [
    "automatización de procesos con IA",
    "automatización con n8n Colombia",
    "agentes de IA para empresas",
    "consultoría de automatización",
    "automatizar procesos empresariales",
    "flujos de trabajo con n8n",
    "RPA e inteligencia artificial",
    "agentes de IA por WhatsApp",
    "automatización para consultoras",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BrandSoft | Automatización de Procesos con IA y n8n',
    description: 'Agentes de IA y flujos automatizados con n8n que trabajan por tu empresa 24/7. Menos tareas manuales, más resultados.',
    url: SITE_URL,
    siteName: 'BrandSoft',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandSoft | Automatización de Procesos con IA y n8n',
    description: 'Agentes de IA y flujos automatizados con n8n que trabajan por tu empresa 24/7. Menos tareas manuales, más resultados.',
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
        <WhatsAppWidget />
      </body>
    </html>
  );
}
