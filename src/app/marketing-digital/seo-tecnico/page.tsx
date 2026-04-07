import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Search, Activity, Lock, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import { whatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
    title: 'Consultoría SEO Técnico y Core Web Vitals | BrandSoft',
    description: 'Agencia especializada en SEO técnico B2B, optimización de velocidad LCP y arquitectura de datos. Posiciona de primero en Google.',
    alternates: {
        canonical: '/marketing-digital/seo-tecnico',
    }
};

export default function SeoTecnicoPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-black via-zinc-950 to-violet-950">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-black mb-8 uppercase tracking-widest">
                        <Search className="w-4 h-4" />
                        <span>SEO DE INGENIERÍA</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">
                        Si Google no te entiende, <br /> tu competencia se lleva tus clientes.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl font-light mb-12">
                        Auditorías profundas de Core Web Vitals, corrección de renderización, y arquitectura de silos. Dejamos tu código impecable para que Google lo priorice.
                    </p>
                    <Link href={whatsAppHref("Hola BrandSoft, quiero el servicio de auditoría SEO técnico para mi empresa. Vengo de la landing SEO Técnico.")} target="_blank" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105">
                        Agendar Auditoría Inicial
                    </Link>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black uppercase italic mb-10 text-center">¿Por qué el "SEO Básico" ya no funciona en 2026?</h2>
                    <p className="text-lg text-gray-300 font-light leading-relaxed mb-12">
                        Comprar enlaces y repetir palabras clave es táctica del pasado. Hoy, el algoritmo de Google (y el AI Overview) lee el código de tu sitio. Si tu web está construida con constructores pesados (Elementor, Divi), sufres problemas estructurales invisibles al ojo humano pero obvios para los robots.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 bg-zinc-950 rounded-3xl border border-white/5">
                            <Activity className="w-10 h-10 text-violet-400 mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Core Web Vitals</h3>
                            <p className="text-sm text-gray-400">Optimizamos LCP, CLS y el INP de tu aplicación. Si tu UX técnica es mala, Google colapsa tu ranking.</p>
                        </div>
                        <div className="p-8 bg-zinc-950 rounded-3xl border border-white/5">
                            <Lock className="w-10 h-10 text-violet-400 mb-6" />
                            <h3 className="text-xl font-bold uppercase mb-4">Estructura JS y Crawlability</h3>
                            <p className="text-sm text-gray-400">Desbloqueamos sitios basados en JavaScript (SPA) que Google no puede rastrear correctamente.</p>
                        </div>
                    </div>

                    <div className="border border-violet-500/20 bg-violet-500/5 rounded-3xl p-10">
                        <h3 className="text-2xl font-black uppercase mb-6 text-violet-400">Entregables de la Consultoría:</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3"><CheckCircle className="text-violet-500 w-5 h-5" /> <span>Auditoría de Screaming Frog completa.</span></li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-violet-500 w-5 h-5" /> <span>Implementación de Schema Markups dinámicos.</span></li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-violet-500 w-5 h-5" /> <span>Corrección de Canibalización y Thin Content.</span></li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-violet-500 w-5 h-5" /> <span>Refactorización de encabezados HTTP y seguridad.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
