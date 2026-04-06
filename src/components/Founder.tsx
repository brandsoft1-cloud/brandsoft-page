'use client';

import { motion } from 'framer-motion';
import { Award, Target, Zap, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Founder() {
    return (
        <section id="founder" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract Founder Avatar / Placeholder */}
                        <div className="aspect-square rounded-3xl overflow-hidden relative border border-white/10 bg-gradient-to-br from-violet-900/40 to-black">
                            <div className="absolute inset-0 bg-cyber-grid opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Fallback portrait or abstract representation for MVP */}
                                <div className="w-full h-full bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center text-gray-400">
                                    <Target className="w-20 h-20 mb-4 text-violet-400 opacity-50" />
                                    <p className="text-sm">Founder Profile Image</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating stats */}
                        <div className="absolute -bottom-6 -right-6 bg-black border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-400">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">10+ Años</div>
                                    <div className="text-sm text-gray-400">Experiencia Digital</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            Liderando la <br /> <span className="text-violet-400">Revolución Digital</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Hola, soy <span className="text-white font-medium">Mauricio Forero Acosta</span>. Como SEO Founder de BrandSoft, mi misión es ayudar a las empresas a navegar el complejo mundo digital mediante estrategias basadas en datos y software de vanguardia.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-violet-500/20 p-2 rounded-full text-violet-400 h-fit">
                                    <Target className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Estrategia SEO Especializada</h3>
                                    <p className="text-gray-400">Dominamos los algoritmos para posicionar tu marca en los primeros lugares de Colombia y el mundo.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-cyan-500/20 p-2 rounded-full text-cyan-400 h-fit">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Innovación Constante</h3>
                                    <p className="text-gray-400">Integramos las últimas herramientas de Inteligencia Artificial para optimizar resultados.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/mauricio-forero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-full font-medium transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            Conectar en LinkedIn
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
