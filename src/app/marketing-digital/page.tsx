import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import {
    TrendingUp,
    Target,
    BarChart3,
    Search,
    MousePointer2,
    Zap,
    ChevronRight,
    MessageSquare,
    Globe
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "SEO Técnico y CRO | Optimización de Conversión",
    description: "Estrategias de SEO Avanzado y CRO en Bogotá. Maximizamos el ROI de tu web con auditorías técnicas, posicionamiento orgánico y optimización de leads.",
    alternates: {
        canonical: '/marketing-digital',
    }
};

const services = [
    {
        title: "Auditoría SEO Técnica",
        description: "Análisis de rastreabilidad, indexabilidad y Core Web Vitals (LCP, CLS, INP) para dominar Google.",
        icon: Search,
    },
    {
        title: "CRO (Conversion Rate Optimization)",
        description: "Optimizamos tu embudo de ventas para que cada visita se convierta en un mensaje de WhatsApp o una llamada.",
        icon: MousePointer2,
    },
    {
        title: "SEO Local Estratégico",
        description: "Posicionamos tu negocio industrial en Bogotá y Cundinamarca para captar clientes de alta urgencia.",
        icon: Target,
    },
    {
        title: "Analítica de Datos (GA4)",
        description: "Configuramos Tag Manager y Analytics para medir cada clic, formulario y conversión con precisión quirúrgica.",
        icon: BarChart3,
    }
];

const faqs = [
    {
        q: "¿Cuánto tiempo tarda en verse el resultado del SEO?",
        a: "El SEO técnico genera mejoras en 2-4 semanas. El posicionamiento orgánico de keywords competitivas suele mostrar resultados sólidos entre el mes 3 y el 6."
    },
    {
        q: "¿Qué es el CRO y por qué lo necesito?",
        a: "El CRO es el arte de convertir visitas en dinero. De nada sirve tener mil visitas si nadie te escribe. Optimizamos botones, textos y flujos para maximizar tus contactos."
    },
    {
        q: "¿Garantizan la primera posición en Google?",
        a: "Nadie puede garantizar la posición #1 (quien lo haga miente), pero garantizamos un aumento sustancial en tráfico calificado y visibilidad técnica frente a tu competencia."
    },
    {
        q: "¿Atienden empresas fuera de Bogotá?",
        a: "Sí, operamos en todo Colombia y tenemos experiencia con clientes internacionales en mercados competitivos de EE.UU. y Canadá."
    }
];

export default function MarketingPage() {
    return (
        <main className="min-h-screen relative selection:bg-cyan-500/30 pt-20 bg-black">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-cyan-600/5 blur-[120px] pointer-events-none" />

            {/* HERO SECTION */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6">
                            <TrendingUp className="w-3 h-3" />
                            <span>ESCALA TU FACTURACIÓN</span>
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            SEO Técnico y <span className="text-cyan-400">CRO de Alto Impacto</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                            No solo buscamos tráfico, buscamos <span className="text-white font-medium">Leads Calificados</span>. Transformamos tu sitio web en una máquina de ventas mediante optimización basada en datos.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link href="#contacto" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 hover:text-white transition-all flex items-center gap-2">
                                Auditar mi Web Gratis
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-cyan-600/20 to-transparent rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                            <BarChart3 className="w-full h-48 text-cyan-500 opacity-50 mb-8" />
                            <div className="space-y-4">
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                </div>
                                <div className="h-2 w-3/4 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Estrategia 360° para Leads</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold">POSICIONAMIENTO GARANTIZADO</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {services.map((item, idx) => (
                            <div key={idx} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 transition-all">
                                <div className="bg-cyan-500/10 p-4 rounded-xl text-cyan-400 mb-6 w-fit">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-4xl mx-auto text-gray-400 leading-relaxed space-y-8">
                        <h3 className="text-white text-3xl font-bold text-center">¿Por qué el SEO Local es vital en Bogotá?</h3>
                        <p>
                            En ciudades con alta competencia industrial como **Bogotá, Soacha y municipios aledaños**, aparecer en el "Map Pack" y en los primeros resultados orgánicos marca la diferencia entre el éxito y el estancamiento. En **BrandSoft**, no solo aplicamos keywords, optimizamos la **intención de búsqueda**.
                        </p>
                        <p>
                            Nuestras estrategias de **CRO (Conversion Rate Optimization)** aseguran que el tráfico que llega a servicios de urgencia o B2B encuentre un camino claro hacia la conversión. implementamos botones de WhatsApp estratégicos, formularios simplificados y pruebas sociales que generan confianza inmediata.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-12">
                            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-cyan-400" />
                                    SEO Industrial
                                </h4>
                                <p className="text-sm">Especializados en nichos complejos como software B2B, servicios de ingeniería y logística.</p>
                            </div>
                            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-cyan-400" />
                                    Velocidad Extrema
                                </h4>
                                <p className="text-sm">Sitios web que cargan en menos de 1 segundo para reducir el rebote y mejorar el ranking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPLIANCE & MEASUREMENT */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Decisiones Basadas en <span className="text-cyan-400">Datos Reales</span></h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            No adivinamos qué funciona. Implementamos un ecosistema de medición robusto con **Google Tag Manager** y **GA4** para trazar cada interacción del usuario. Sabemos qué keyword generó la llamada y qué sección de la web causó el rebote.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="p-1 bg-cyan-500/20 rounded text-cyan-400 mt-1"><ChevronRight className="w-4 h-4" /></div>
                                <div><p className="text-white font-medium">Eventos personalizados:</p><p className="text-sm text-gray-500">Medimos cada clic en WhatsApp y envíos de formularios exitosos.</p></div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-1 bg-cyan-500/20 rounded text-cyan-400 mt-1"><ChevronRight className="w-4 h-4" /></div>
                                <div><p className="text-white font-medium">Mapas de calor:</p><p className="text-sm text-gray-500">Entendemos visualmente dónde se detienen tus clientes potenciales.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-1 rounded-[2rem] overflow-hidden">
                        <div className="bg-black rounded-[1.9rem] p-8 flex items-center justify-center">
                            <div className="w-full h-64 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 border border-cyan-500/20 animate-pulse">
                                [ DASHBOARD ANALYTICS LIVE ]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
                        <MessageSquare className="text-cyan-400" />
                        FAQ de Marketing y SEO
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((f, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-lg font-bold text-white mb-2">{f.q}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
