import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import {
    Zap,
    ChevronRight,
    ArrowLeft,
    CheckCircle,
    Clock,
    ShieldCheck,
    Layout,
    Database
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Por qué Next.js es el futuro del Desarrollo de Software (2026)",
    description: "Análisis técnico sobre las ventajas de Next.js para empresas en Colombia: Velocidad LCP, SEO nativo y Renderizado del Servidor (SSR/ISR).",
    alternates: {
        canonical: '/blog/nextjs-futuro-software',
    }
};

export default function BlogPost() {
    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black">
            <Navbar />

            {/* Hero Article */}
            <section className="relative py-24 px-4 border-b border-white/10 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors mb-8 text-sm group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Volver al Blog
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Por qué Next.js es el futuro del <span className="text-violet-400">Software Empresarial</span> (2026)
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-bold">
                        <div className="flex items-center gap-2">
                            <Image src="/images/mauricio-forero-ceo.png" alt="Mauricio Forero" width={24} height={24} className="rounded-full object-cover" />
                            <span>MAURICIO FORERO</span>
                        </div>
                        <span>•</span>
                        <span>MARZO 25, 2026</span>
                        <span>•</span>
                        <span className="text-violet-500">TECNOLOGÍA</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-24 px-4">
                <div className="max-w-3xl mx-auto prose prose-invert prose-violet leading-relaxed text-gray-400">
                    <p className="text-xl text-white font-medium leading-relaxed mb-12">
                        En el panorama tecnológico de 2026, la velocidad web ya no es un lujo, es una métrica de supervivencia. Las empresas en Bogotá y mercados globales están abandonando las arquitecturas tradicionales de PHP y WordPress para migrar a **Next.js**.
                    </p>

                    <h2 className="text-white text-3xl font-bold mt-16 mb-8">El fin de la web lenta</h2>
                    <p>
                        Cualquier consultor senior en SEO técnico te dirá lo mismo: si tu sitio web tarda más de 2 segundos en cargar, estás perdiendo el 50% de tus ventas potenciales. Next.js soluciona esto mediante el **Server-Side Rendering (SSR)** y la **Generación de Sitios Estáticos (SSG/ISR)**.
                    </p>
                    <p>
                        A diferencia de un sitio web común que espera a que el navegador procese todo, Next.js entrega el contenido ya pre-renderizado desde el servidor, logrando un **Largest Contentful Paint (LCP)** de menos de 1 segundo de forma nativa.
                    </p>

                    <h2 className="text-white text-3xl font-bold mt-16 mb-8">Ventajas Competitivas para Empresas B2B</h2>
                    <ul className="space-y-4 not-prose mb-12">
                        <li className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <div className="mt-1"><Layout className="w-5 h-5 text-violet-400" /></div>
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1">SEO de "Caja Negra"</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">Next.js permite que Google rastree cada página al 100%, eliminando los problemas de indexación del JavaScript tradicional de React.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                            <div className="mt-1"><ShieldCheck className="w-5 h-5 text-violet-400" /></div>
                            <div>
                                <h4 className="text-white font-bold text-sm mb-1">Seguridad Estática</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">Al no tener una base de datos expuesta constantemente (como WordPress), Next.js minimiza las vulnerabilidades de inyección SQL y ataques por fuerza bruta.</p>
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-white text-3xl font-bold mt-16 mb-8">Impacto en el SEO Local de Bogotá</h2>
                    <p>
                        Para un negocio en **Bogotá** que compite por palabras clave de alta demanda (como "Servicio Vactor" o "Agencia de Software"), la eficiencia del código es el factor decisivo. Google ahora prioriza la Experiencia de Usuario mediante la métrica **INP (Interaction to Next Paint)**, un campo donde Next.js es imbatible.
                    </p>

                    <div className="my-16 p-8 bg-violet-600/10 border border-violet-500/20 rounded-3xl relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <div className="bg-violet-500 p-4 rounded-2xl text-white">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">¿Tu arquitectura web es obsoleta?</h4>
                                <p className="text-sm text-gray-400 mb-6">Realizamos diagnósticos técnicos profundos de Core Web Vitals para empresas en Colombia.</p>
                                <Link href="/servicios/desarrollo-software-medida" className="inline-flex items-center gap-2 text-violet-400 font-bold hover:translate-x-1 transition-transform">
                                    Conoce nuestro desarrollo a la medida <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-white text-3xl font-bold mt-16 mb-8">Conclusión</h2>
                    <p>
                        Migrar a Next.js no es solo una decisión técnica; es una decisión de negocio. En **BrandSoft**, acompañamos a las empresas en esta transición tecnológica para dominar el mercado local e internacional mediante infraestructuras sólidas, escalables y ultra-rápidas.
                    </p>
                </div>
            </article>

            {/* Footer Interlinking Blog */}
            <section className="py-24 bg-white/5 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8 italic">"El software que no escala, muere en la irrelevancia."</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/servicios/seo-tecnico-avanzado/bogota" className="px-6 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-400 hover:border-violet-500/50 hover:text-white transition-all">
                            SEO Técnico en Bogotá
                        </Link>
                        <Link href="/servicios/agentes-ia-automatizacion/medellin" className="px-6 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-400 hover:border-violet-500/50 hover:text-white transition-all">
                            Automatización en Medellín
                        </Link>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
