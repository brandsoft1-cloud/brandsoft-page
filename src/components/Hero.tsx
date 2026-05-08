'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Code, TrendingUp, MessageCircle } from 'lucide-react';
import { whatsAppHref } from '@/lib/contact';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute inset-0 w-full h-full bg-black z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-violet-300 mb-8"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Acompanamiento real para crecer con resultados</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Deja de sentirte estancado y <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
                        construye tu siguiente gran nivel
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-xl text-gray-300 mb-4 font-medium"
                >
                    Te acompano a ordenar tu estrategia, fortalecer tu confianza y ejecutar con enfoque para que avances
                    en carrera, negocio y resultados reales.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-10"
                >
                    Sesion inicial de 15 min para definir tu ruta - respuesta prioritaria
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto w-full"
                >
                    <Link
                        href="/mentorias"
                        className="group px-8 py-4 rounded-full font-black uppercase text-sm tracking-wide text-black bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:from-amber-200 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-amber-400/30 sm:hover:scale-[1.03] border border-amber-200/80"
                    >
                        <Code className="w-5 h-5" />
                        Mentoria para conseguir trabajo
                    </Link>
                    <a
                        href={whatsAppHref('Hola BrandSoft, quiero una ruta clara para crecer profesionalmente y lograr mejores resultados. Escribo desde la home.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border-2 border-emerald-500/40 text-white rounded-full font-bold text-sm hover:border-emerald-400/80 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5 text-emerald-400" />
                        WhatsApp
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75 }}
                    className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-gray-500"
                >
                    <Link href="/desarrollo-software-ia" className="hover:text-violet-400">
                        IA
                    </Link>
                    <Link href="/posicionamiento-seo-geo" className="hover:text-violet-400">
                        SEO / GEO
                    </Link>
                    <Link href="/generacion-leads-b2b" className="hover:text-violet-400">
                        Leads B2B
                    </Link>
                    <Link href="/recursos" className="hover:text-violet-400">
                        Recursos
                    </Link>
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10"
                >
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="font-medium text-lg text-white">Software a la Medida</h3>
                        <p className="text-gray-400 text-sm">Desarrollo moderno y escalable.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="font-medium text-lg text-white">Posicionamiento SEO</h3>
                        <p className="text-gray-400 text-sm">Domina los resultados de búsqueda.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="font-medium text-lg text-white">Inteligencia Artificial</h3>
                        <p className="text-gray-400 text-sm">Automatización y vanguardia.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
