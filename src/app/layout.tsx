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
    default: "BrandSoft | Crecimiento digital, SEO y automatización para empresas",
    template: "%s | BrandSoft"
  },
  description: "Atrae clientes, convierte oportunidades y automatiza tu crecimiento. Marketing digital, SEO/GEO, software a medida y automatización con IA para pymes y equipos B2B en Colombia y LatAm.",
  keywords: [
    "crecimiento digital empresas",
    "generación de leads B2B Colombia",
    "SEO técnico y GEO",
    "automatización de procesos con IA",
    "desarrollo software a medida",
    "BrandSoft",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BrandSoft | Atrae. Convierte. Automatiza.',
    description: 'Socio de crecimiento digital: captación, SEO, web, software y automatización conectados para empresas.',
    url: SITE_URL,
    siteName: 'BrandSoft',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandSoft | Atrae. Convierte. Automatiza.',
    description: 'Marketing, SEO, software y automatización con IA para empresas que quieren crecer con un sistema conectado.',
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
