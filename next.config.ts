import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Herramientas / migraciones WordPress suelen pedir estas rutas; unificamos al sitemap de Next.js
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      // Estructura SEO comercial (alias cortos -> páginas canónicas existentes)
      { source: "/servicios/automatizacion-ia", destination: "/ia-automatizaciones", permanent: true },
      { source: "/servicios/chatbots", destination: "/agente-ai", permanent: true },
      { source: "/servicios/marketing-digital", destination: "/marketing-digital", permanent: true },
      { source: "/servicios/desarrollo-web", destination: "/desarrollo-web", permanent: true },
      // SEO local: slugs de ciudad -> hubs canónicos por ciudad
      { source: "/bogota", destination: "/paginas-web/bogota", permanent: true },
      { source: "/medellin", destination: "/paginas-web/medellin", permanent: true },
      { source: "/cali", destination: "/paginas-web/cali", permanent: true },
    ];
  },
};

export default nextConfig;
