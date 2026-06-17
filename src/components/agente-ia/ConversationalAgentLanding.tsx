'use client';

import Link from 'next/link';
import {
    MessageCircle,
    ChevronLeft,
    Bot,
    Mail,
    Clock,
    ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import {
    AGENTE_CONVERSACIONAL_PRICE,
    type AgenteConversacionalSector,
} from '@/data/agente-conversacional-sectors';
import { whatsAppHref } from '@/lib/contact';

type Props = {
    sector: AgenteConversacionalSector;
};

const COMPARISON_ROWS = [
    { label: 'Costo mensual aprox.', employee: '$2.500.000 – $3.500.000 + prestaciones', agent: `${AGENTE_CONVERSACIONAL_PRICE.label} COP fijo` },
    { label: 'Disponibilidad', employee: '8 h/día, turnos', agent: '24/7/365' },
    { label: 'Vacaciones y incapacidades', employee: 'Sí — te quedas sin cobertura', agent: 'Nunca' },
    { label: 'Tiempo de respuesta', employee: 'Minutos u horas', agent: 'Segundos' },
    { label: 'Errores por cansancio', employee: 'Frecuentes en hora pico', agent: 'Consistente con tu guión' },
    { label: 'Resumen al vendedor', employee: 'Manual, si alcanza a anotar', agent: 'Correo automático con contexto' },
];

export default function ConversationalAgentLanding({ sector }: Props) {
    const waDemo = whatsAppHref(sector.whatsappIntro);
    const waFinal = whatsAppHref(
        `${sector.whatsappIntro} Quiero la demo gratis esta semana.`
    );

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <Navbar />

            <nav className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2 uppercase tracking-widest font-bold">
                <Link href="/soluciones" className="hover:text-violet-400 flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4" /> Soluciones
                </Link>
                <span>/</span>
                <Link href={`/soluciones/${sector.slug}`} className="hover:text-violet-400 capitalize">
                    {sector.sectorLabel}
                </Link>
                <span>/</span>
                <span className="text-violet-400">Agente IA</span>
            </nav>

            {/* 1. HERO */}
            <section className="relative py-16 md:py-24 px-4 border-b border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-200 text-[11px] font-bold uppercase tracking-widest mb-6">
                        <Bot className="w-4 h-4" />
                        {sector.hero.badge}
                    </p>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
                        {sector.hero.headline}
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-emerald-300">
                            {sector.hero.headlineAccent}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {sector.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={waDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 font-black text-sm uppercase tracking-wide shadow-xl shadow-violet-600/25"
                        >
                            {sector.hero.ctaPrimary}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={waDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-emerald-500/40 text-white font-bold text-sm hover:bg-emerald-500/10"
                        >
                            <MessageCircle className="w-5 h-5 text-emerald-400" />
                            {sector.hero.ctaSecondary}
                        </a>
                    </div>
                    <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
                        WhatsApp · Web · Instagram · {AGENTE_CONVERSACIONAL_PRICE.label}/mes
                    </p>
                </div>
            </section>

            {/* 2. EL PROBLEMA */}
            <section className="py-16 px-4 bg-zinc-950/80 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-4 text-center">
                        Si esto te suena familiar,{' '}
                        <span className="text-rose-400">estás perdiendo plata</span>
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
                        Dueños y gerentes de {sector.sectorLabel} en Colombia nos cuentan lo mismo:
                    </p>
                    <div className="space-y-6">
                        {sector.pains.map((pain, i) => (
                            <div
                                key={pain.title}
                                className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-black"
                            >
                                <span className="text-2xl font-black text-rose-500/80 shrink-0">0{i + 1}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{pain.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{pain.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LA SOLUCIÓN */}
            <section className="py-16 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-4 text-center">
                        Cómo funciona <span className="text-violet-400">(sin tecnicismos)</span>
                    </h2>
                    <p className="text-gray-500 text-center mb-12">Tres pasos. Tú sigues al mando del cierre.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {sector.steps.map((step) => (
                            <div
                                key={step.title}
                                className="p-6 rounded-2xl border border-violet-500/20 bg-violet-950/20"
                            >
                                <h3 className="font-bold text-violet-300 mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp 24/7
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-cyan-400" /> Resumen al correo
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-amber-400" /> Respuesta en segundos
                        </span>
                    </div>
                </div>
            </section>

            {/* 4. PRUEBA SOCIAL — storytelling */}
            <section className="py-16 px-4 bg-zinc-950/50 border-b border-white/10">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-4 text-center">
                        Historia real en {sector.sectorLabel}
                    </p>
                    <h2 className="font-heading text-2xl md:text-3xl font-black mb-2 text-center text-white">
                        {sector.caseStudy.company}
                    </h2>
                    <p className="text-violet-300/90 font-semibold italic text-center mb-8 leading-snug">
                        {sector.caseStudy.headline}
                    </p>
                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        {sector.caseStudy.story.split('\n\n').map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                    </div>
                    <p className="mt-8 text-center">
                        <span className="inline-block px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-black">
                            {sector.caseStudy.metric}
                        </span>
                    </p>
                </div>
            </section>

            {/* 5. COMPARATIVA */}
            <section className="py-16 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl font-black mb-10 text-center">
                        Empleado de chat vs agente de IA
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="text-left p-4 text-gray-500 font-bold">Concepto</th>
                                    <th className="p-4 text-gray-400 font-bold">Empleado</th>
                                    <th className="p-4 text-violet-300 font-bold">Agente BrandSoft</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON_ROWS.map((row) => (
                                    <tr key={row.label} className="border-b border-white/5">
                                        <td className="p-4 text-gray-300 font-medium">{row.label}</td>
                                        <td className="p-4 text-gray-500">{row.employee}</td>
                                        <td className="p-4 text-white font-semibold">{row.agent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 6. PRECIO */}
            <section className="py-16 px-4 bg-gradient-to-b from-violet-950/30 to-black border-b border-white/10">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
                        Inversión: {AGENTE_CONVERSACIONAL_PRICE.label}{' '}
                        <span className="text-gray-500 text-2xl font-bold">/ mes</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        No es un gasto de &quot;tecnología bonita&quot;. Es menos que un empleado de atención y evita
                        perder {sector.lostClientAnchor}.
                    </p>
                    <p className="text-violet-300 font-semibold mb-8">
                        Un solo cliente recuperado paga varios meses del agente.
                    </p>
                    <a
                        href={waDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 font-black text-sm uppercase"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Cotizar para mi {sector.sectorLabel.split(' ')[0]}
                    </a>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-16 px-4 border-b border-white/10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-black mb-10 text-center">Preguntas que sí hacen</h2>
                    <dl className="space-y-4">
                        {sector.faq.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/10 bg-zinc-950/80 p-5">
                                <dt className="font-bold text-white mb-2">{item.q}</dt>
                                <dd className="text-gray-400 text-sm leading-relaxed">{item.a}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-rose-400 text-xs font-black uppercase tracking-widest mb-4">
                        Cupos limitados de implementación este mes
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
                        Demo gratis: ves tu agente respondiendo antes de pagar un peso
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Sin contratos de un año. Sin letra pequeña. Si no responde más rápido que hoy, no tiene sentido
                        seguir.
                    </p>
                    <a
                        href={waFinal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-violet-600 hover:bg-violet-500 font-black text-sm uppercase tracking-wide shadow-2xl shadow-violet-600/30"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Activar demo por WhatsApp
                    </a>
                    <p className="mt-6 text-xs text-gray-600">
                        Respuesta en menos de 2 horas · Lunes a sábado
                    </p>
                </div>
            </section>

            <Contact />
        </main>
    );
}
