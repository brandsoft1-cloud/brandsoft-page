'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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
                    <span>Transformación Digital Potenciada por IA</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Revoluciona tu estrategia de <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
                        Branding y Desarrollo
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-xl text-gray-400 mb-10"
                >
                    Creamos soluciones modernas y personalizadas para llevar tu negocio al siguiente nivel. Posicionamiento, innovación y software a medida.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#contacto"
                        className="group px-8 py-4 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition-all flex items-center gap-2 shadow-xl shadow-violet-500/20"
                    >
                        Solicitar Cotización Gratis
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="https://wa.me/573213296957"
                        target="_blank"
                        className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                        WhatsApp Directo
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
