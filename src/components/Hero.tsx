'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { whatsAppHref } from '@/lib/contact';

const fade = { duration: 0.35, ease: 'easeOut' as const };

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 w-full h-full bg-black z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={fade}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-violet-300 mb-8"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Acompañamiento real para crecer con resultados</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...fade, delay: 0.05 }}
                    className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
                >
                    Tu negocio merece una web que{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
                        venda
                    </span>
                    , no solo que se vea bien.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...fade, delay: 0.1 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-4 font-medium"
                >
                    Construimos software, SEO y marketing digital que convierte visitas en clientes reales. Sin humo, sin
                    excusas.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...fade, delay: 0.15 }}
                    className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-10"
                >
                    Respuesta por WhatsApp en menos de 2 horas
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...fade, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto w-full"
                >
                    <Link
                        href="#servicios"
                        className="group px-8 py-4 bg-violet-600 text-white rounded-full font-black uppercase text-sm tracking-wide hover:bg-violet-500 transition-all flex items-center justify-center gap-2 shadow-xl shadow-violet-600/30"
                    >
                        Ver qué podemos hacer por tu negocio
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <a
                        href={whatsAppHref(
                            'Hola BrandSoft, quiero saber qué pueden hacer por mi negocio (software, SEO o marketing). Escribo desde la home.'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border-2 border-emerald-500/40 text-white rounded-full font-bold text-sm hover:border-emerald-400/80 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5 text-emerald-400" />
                        WhatsApp — Respuesta en menos de 2h
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...fade, delay: 0.25 }}
                    className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-gray-500"
                >
                    <Link href="/desarrollo-software-ia" className="hover:text-violet-400 transition-colors">
                        Software a la medida
                    </Link>
                    <Link href="/posicionamiento-seo-geo" className="hover:text-violet-400 transition-colors">
                        SEO / GEO
                    </Link>
                    <Link href="/ia-automatizaciones" className="hover:text-violet-400 transition-colors">
                        Automatización IA
                    </Link>
                    <Link href="/generacion-leads-b2b" className="hover:text-violet-400 transition-colors">
                        Leads B2B
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
