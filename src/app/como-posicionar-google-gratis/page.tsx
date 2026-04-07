import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import JsonLdFaq from '@/components/b2b/JsonLdFaq';
import { whatsAppHref } from '@/lib/contact';
import { Calendar, ClipboardCheck, CheckCircle2, Search, MessageCircle } from 'lucide-react';

const faqs = [
    {
        q: '¿Se puede posicionar en Google gratis de verdad?',
        a: 'Sí, en el sentido de no depender solo de pauta: con arquitectura SEO, contenido útil, enlazado interno y velocidad técnica puedes captar tráfico orgánico sostenido.',
    },
    {
        q: '¿Cuánto tarda en verse resultado SEO?',
        a: 'Depende del punto de partida y la competencia. En sitios B2B bien ejecutados suele verse mejora de impresiones en semanas y crecimiento de clics en los siguientes meses.',
    },
    {
        q: '¿Qué diferencia hay entre SEO clásico y GEO?',
        a: 'SEO clásico optimiza para rankings web; GEO optimiza para que motores generativos y resúmenes de IA citen tu sitio como fuente confiable.',
    },
    {
        q: '¿Qué entregables incluye una auditoría inicial?',
        a: 'Checklist técnico, priorización por impacto de negocio, recomendaciones de contenido y plan de ejecución con quick wins.',
    },
];

export const metadata: Metadata = {
    title: 'Cómo posicionar en Google gratis (enfoque B2B que sí convierte)',
    description:
        'Guía práctica para empresas: SEO técnico, intención de búsqueda, contenido y linkbuilding. Incluye CTA para agendar demostración o auditoría gratuita.',
    alternates: { canonical: '/como-posicionar-google-gratis' },
    keywords: [
        'como posicionar en google gratis',
        'agencia seo tecnico b2b bogota',
        'seo para empresas colombia',
        'core web vitals b2b',
        'consultoria seo colombia',
    ],
    openGraph: {
        title: 'Cómo posicionar en Google gratis — guía B2B BrandSoft',
        description:
            'Qué funciona hoy para ganar tráfico orgánico y convertirlo en oportunidades comerciales.',
    },
};

export default function PosicionarGoogleGratisPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20 selection:bg-violet-500/30">
            <JsonLdFaq faqs={faqs} />
            <Navbar />

            <section className="pt-24 pb-16 px-4 border-b border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-black uppercase tracking-widest mb-6">
                        <Search className="w-4 h-4" />
                        SEO + GEO para demanda orgánica
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
                        Cómo posicionar en Google gratis
                        <span className="block text-violet-400 italic mt-2">y convertir tráfico en clientes B2B</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
                        Basado en principios sólidos de contenido, intención de búsqueda y rendimiento técnico.
                        Si prefieres ejecutarlo rápido, nuestro equipo te lo implementa y te deja un sistema repetible.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <a
                            href={whatsAppHref(
                                'Hola BrandSoft, quiero agendar una demostración para mejorar SEO/GEO y captar clientes.'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 font-black text-sm uppercase tracking-wide"
                        >
                            <Calendar className="w-5 h-5" />
                            Agendar demostración
                        </a>
                        <a
                            href={whatsAppHref(
                                'Hola BrandSoft, solicito auditoría gratuita para posicionamiento orgánico y generación de leads.'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-black text-sm uppercase tracking-wide"
                        >
                            <ClipboardCheck className="w-5 h-5" />
                            Auditoría gratuita
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black mb-8">Estrategia inmediata: 6 palancas</h2>
                    <div className="space-y-5 text-gray-300">
                        {[
                            'Arquitectura web clara (hub-and-spoke) con URLs de intención comercial.',
                            'Contenido útil que responda preguntas reales del comprador (CTO, CMO, CEO).',
                            'On-page limpio: titles, H1, meta descriptions y enlazado interno por clúster.',
                            'Core Web Vitals en verde para mejorar experiencia y señales de calidad.',
                            'Datos estructurados (Organization, Service, FAQ) para contexto semántico.',
                            'Backlinks relevantes y menciones en perfiles de autoridad del sector.',
                        ].map((item) => (
                            <p key={item} className="flex gap-3 leading-relaxed">
                                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-zinc-950 border-y border-white/10">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                    <Link
                        href="/desarrollo-software-ia"
                        className="p-6 rounded-2xl border border-white/10 bg-black hover:border-violet-500/40 transition-colors"
                    >
                        <h3 className="font-bold text-white mb-2">Software con IA</h3>
                        <p className="text-sm text-gray-500">Automatiza procesos y aumenta velocidad comercial.</p>
                    </Link>
                    <Link
                        href="/posicionamiento-seo-geo"
                        className="p-6 rounded-2xl border border-white/10 bg-black hover:border-violet-500/40 transition-colors"
                    >
                        <h3 className="font-bold text-white mb-2">SEO técnico + GEO</h3>
                        <p className="text-sm text-gray-500">Visibilidad en Google y motores generativos.</p>
                    </Link>
                    <Link
                        href="/generacion-leads-b2b"
                        className="p-6 rounded-2xl border border-white/10 bg-black hover:border-violet-500/40 transition-colors"
                    >
                        <h3 className="font-bold text-white mb-2">Leads B2B</h3>
                        <p className="text-sm text-gray-500">Pipeline con MQL/SQL y trazabilidad en CRM.</p>
                    </Link>
                </div>
                <div className="max-w-5xl mx-auto mt-10 text-center">
                    <a
                        href={whatsAppHref(
                            'Hola BrandSoft, quiero que ejecuten este plan de posicionamiento orgánico para mi empresa.'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Hablar con estratega SEO ahora
                    </a>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-black mb-8">Preguntas frecuentes</h2>
                    <dl className="space-y-7">
                        {faqs.map((f) => (
                            <div key={f.q}>
                                <dt className="font-bold text-white mb-1">{f.q}</dt>
                                <dd className="text-gray-400">{f.a}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <Contact />
        </main>
    );
}
