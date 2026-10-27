'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowRight,
    MessageCircle,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';
import {
    GROWTH_PHASES,
    HOW_WE_WORK,
    NEED_NAVIGATOR,
    SERVICE_PILLARS,
    SOLUTIONS_FAQS,
    SOLUTIONS_HOME,
    SOLUTIONS_PROBLEMS,
} from '@/data/solutions/home';
import { whatsAppHref } from '@/lib/contact';
import { trackSolutionsEvent } from '@/lib/solutions-analytics';
import DiagnosticForm from '@/components/solutions/DiagnosticForm';
import MentorshipSection from '@/components/MentorshipSection';
import Founder from '@/components/Founder';

const fade = { duration: 0.35, ease: 'easeOut' as const };

function SectionHeading({
    eyebrow,
    title,
    lede,
    id,
}: {
    eyebrow?: string;
    title: string;
    lede?: string;
    id: string;
}) {
    return (
        <div className="max-w-3xl mb-10 md:mb-14">
            {eyebrow ? (
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">{eyebrow}</p>
            ) : null}
            <h2 id={id} className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
                {title}
            </h2>
            {lede ? <p className="mt-4 text-lg text-gray-400 leading-relaxed">{lede}</p> : null}
        </div>
    );
}

export default function SolutionsHome() {
    const reduce = useReducedMotion();
    const motionProps = reduce
        ? {}
        : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: fade };

    return (
        <article>
            {/* Hero */}
            <header className="relative min-h-[88vh] flex items-center overflow-hidden pt-24 pb-16">
                <div className="absolute inset-0 bg-black" aria-hidden>
                    <div className="absolute top-1/4 left-1/5 w-[28rem] h-[28rem] bg-violet-600/20 rounded-full blur-[128px]" />
                    <div className="absolute bottom-1/4 right-1/5 w-[28rem] h-[28rem] bg-cyan-600/15 rounded-full blur-[128px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                        <div>
                            <motion.p
                                {...motionProps}
                                className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 mb-6"
                            >
                                <Sparkles className="w-4 h-4" aria-hidden />
                                {SOLUTIONS_HOME.brandLine}
                            </motion.p>
                            <motion.h1
                                {...motionProps}
                                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                            >
                                {SOLUTIONS_HOME.headline}
                            </motion.h1>
                            <motion.p
                                {...motionProps}
                                className="mt-6 max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed"
                            >
                                {SOLUTIONS_HOME.lede}
                            </motion.p>
                            <p className="mt-3 max-w-xl text-sm text-gray-500">{SOLUTIONS_HOME.audience}</p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl">
                                <a
                                    href={SOLUTIONS_HOME.ctaPrimary.href}
                                    onClick={() => trackSolutionsEvent('cta_click', { cta: 'diagnostico_hero' })}
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-violet-500 shadow-lg shadow-violet-600/25"
                                >
                                    {SOLUTIONS_HOME.ctaPrimary.label}
                                    <ArrowRight className="w-4 h-4" aria-hidden />
                                </a>
                                <a
                                    href={SOLUTIONS_HOME.ctaSecondary.href}
                                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white hover:bg-white/5"
                                >
                                    {SOLUTIONS_HOME.ctaSecondary.label}
                                </a>
                            </div>
                        </div>

                        {/* Sistema visual ancla */}
                        <motion.div
                            {...motionProps}
                            className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8"
                            aria-label="Sistema de crecimiento digital"
                        >
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
                                Sistema conectado
                            </p>
                            <ol className="space-y-4">
                                {GROWTH_PHASES.map((phase, i) => (
                                    <li key={phase.n} className="flex gap-4">
                                        <span className="font-mono text-sm text-violet-400 shrink-0">{phase.n}</span>
                                        <div className="flex-1 border-l border-white/10 pl-4 pb-2">
                                            <p className="font-semibold text-white">{phase.title}</p>
                                            <p className="text-sm text-gray-400 mt-1">{phase.detail}</p>
                                            {i < GROWTH_PHASES.length - 1 ? (
                                                <div className="mt-3 h-px w-full bg-gradient-to-r from-violet-500/40 to-transparent" />
                                            ) : null}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Problemas */}
            <section className="py-20 md:py-24 border-t border-white/10" aria-labelledby="problemas">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        id="problemas"
                        eyebrow="Problemas que resolvemos"
                        title="Si esto te suena, podemos ayudarte"
                        lede="Cada situación se conecta con un servicio concreto — sin humo."
                    />
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {SOLUTIONS_PROBLEMS.map((item) => (
                            <li key={item.problem}>
                                <Link
                                    href={item.href}
                                    className="block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-violet-500/40 transition-colors"
                                >
                                    <p className="font-heading text-lg font-bold text-white">{item.problem}</p>
                                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.solution}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-300">
                                        Ver enfoque <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Sistema */}
            <section
                id="sistema"
                className="py-20 md:py-24 bg-zinc-950/60 border-y border-white/10 scroll-mt-24"
                aria-labelledby="sistema-titulo"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        id="sistema-titulo"
                        eyebrow="Nuestro sistema"
                        title="Crecimiento digital en cinco fases"
                        lede="Puedes contratar el sistema completo o empezar por el área que más duele hoy."
                    />
                    <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {GROWTH_PHASES.map((phase) => (
                            <li
                                key={phase.n}
                                className="rounded-2xl border border-white/10 bg-black/40 p-5"
                            >
                                <p className="font-mono text-xs text-emerald-400">{phase.n}</p>
                                <p className="mt-2 font-heading text-xl font-bold text-white">{phase.title}</p>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{phase.detail}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Pilares */}
            <section
                id="servicios"
                className="py-20 md:py-24 scroll-mt-24"
                aria-labelledby="servicios-titulo"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        id="servicios-titulo"
                        eyebrow="Servicios"
                        title="Cinco pilares. Un mismo objetivo: crecer."
                        lede="Cada pilar resuelve un problema de negocio y enlaza a su página de detalle."
                    />
                    <ul className="grid md:grid-cols-2 gap-5">
                        {SERVICE_PILLARS.map((pillar) => (
                            <li
                                key={pillar.id}
                                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col"
                            >
                                <h3 className="font-heading text-2xl font-bold text-white">{pillar.name}</h3>
                                <p className="mt-3 text-sm text-amber-200/80">Problema: {pillar.problem}</p>
                                <p className="mt-2 text-gray-300">{pillar.benefit}</p>
                                <ul className="mt-4 space-y-1.5">
                                    {pillar.caps.map((cap) => (
                                        <li key={cap} className="flex gap-2 text-sm text-gray-400">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={pillar.href}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
                                >
                                    Ver {pillar.name.split(' ')[0].toLowerCase()}
                                    <ArrowRight className="w-4 h-4" aria-hidden />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Necesidades */}
            <section className="py-20 md:py-24 bg-zinc-950/50 border-y border-white/10" aria-labelledby="necesidades">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        id="necesidades"
                        eyebrow="Orientación"
                        title="¿Por dónde empezar?"
                        lede="Elige la frase que más se acerque a tu prioridad."
                    />
                    <ul className="grid sm:grid-cols-2 gap-3 max-w-4xl">
                        {NEED_NAVIGATOR.map((item) => (
                            <li key={item.q}>
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 text-left hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-colors"
                                >
                                    <span className="font-medium text-white">{item.q}</span>
                                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Cómo trabajamos */}
            <section className="py-20 md:py-24" aria-labelledby="proceso">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        id="proceso"
                        eyebrow="Cómo trabajamos"
                        title="Proceso comercial claro"
                        lede="Sin promesas absolutas: medimos lo acordado y explicitamos lo que depende del mercado y de tu equipo."
                    />
                    <ol className="grid md:grid-cols-5 gap-4">
                        {HOW_WE_WORK.map((step) => (
                            <li key={step.n} className="rounded-2xl border border-white/10 p-5">
                                <p className="font-mono text-violet-400 text-sm">{step.n}</p>
                                <p className="mt-2 font-semibold text-white">{step.title}</p>
                                <p className="mt-2 text-sm text-gray-400">{step.detail}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Prueba social honesta */}
            <section className="py-20 md:py-24 border-y border-white/10 bg-black" aria-labelledby="confianza">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        id="confianza"
                        eyebrow="Confianza"
                        title="Trabajo real, sin cifras inventadas"
                        lede="Preferimos mostrar proyectos y demos verificables antes que porcentajes de marketing. Revisa casos publicados cuando existan."
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/casos-de-exito"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/5 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                        >
                            Ver casos de éxito
                        </Link>
                        <a
                            href="#diagnostico"
                            onClick={() => trackSolutionsEvent('cta_click', { cta: 'diagnostico_social' })}
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500"
                        >
                            Agenda un diagnóstico
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 md:py-24 bg-zinc-950/60 border-y border-white/10" aria-labelledby="faq">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading id="faq" eyebrow="FAQ" title="Preguntas frecuentes de compra" />
                    <div className="space-y-3">
                        {SOLUTIONS_FAQS.map((item) => (
                            <details
                                key={item.q}
                                className="group rounded-2xl border border-white/10 bg-black/40 px-5 py-4"
                            >
                                <summary className="cursor-pointer list-none font-semibold text-white min-h-11 flex items-center justify-between gap-4">
                                    {item.q}
                                    <span className="text-violet-400 group-open:rotate-45 transition-transform text-xl leading-none">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 text-gray-400 leading-relaxed pb-1">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Founder />

            {/* CTA final + form */}
            <section className="py-16 border-t border-white/10" aria-labelledby="cta-final">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 id="cta-final" className="font-heading text-3xl md:text-4xl font-bold text-white">
                        ¿Listo para el siguiente paso?
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Cuéntanos qué quieres mejorar. Te ayudamos a priorizar sin compromiso de compra.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="#diagnostico"
                            onClick={() => trackSolutionsEvent('cta_click', { cta: 'diagnostico_final' })}
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-600 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-violet-500"
                        >
                            Solicitar diagnóstico
                        </a>
                        <a
                            href={whatsAppHref(SOLUTIONS_HOME.whatsappHome)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackSolutionsEvent('wa_click', { source: 'cta_final' })}
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-500/40 px-8 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <DiagnosticForm />

            {/* Education bridge — no rediseñar Education */}
            <MentorshipSection />

            <footer className="border-t border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                    <div>
                        <p className="font-heading font-bold text-white text-lg mb-3">
                            Brand<span className="text-violet-500">Soft</span>
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            Socio de crecimiento digital y automatización. Colombia · LatAm.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Servicios</p>
                        <ul className="space-y-2 text-gray-400">
                            {SERVICE_PILLARS.map((p) => (
                                <li key={p.id}>
                                    <Link href={p.href} className="hover:text-white">
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Empresa</p>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/casos-de-exito" className="hover:text-white">
                                    Casos de éxito
                                </Link>
                            </li>
                            <li>
                                <Link href="/industrias" className="hover:text-white">
                                    Industrias
                                </Link>
                            </li>
                            <li>
                                <Link href="/recursos" className="hover:text-white">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/#founder" className="hover:text-white">
                                    Nosotros
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Education</p>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/mentorias" className="hover:text-white">
                                    BrandSoft Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/crear-pagina-web-con-ia" className="hover:text-white">
                                    Web con IA
                                </Link>
                            </li>
                            <li>
                                <Link href="/sube-de-nivel" className="hover:text-white">
                                    Sube de Nivel
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:contacto@brandsoft.com.co" className="hover:text-white">
                                    contacto@brandsoft.com.co
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </article>
    );
}
