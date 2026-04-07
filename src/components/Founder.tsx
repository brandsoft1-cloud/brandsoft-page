'use client';

import { motion } from 'framer-motion';
import { Award, Target, Zap, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { whatsAppHref } from '@/lib/contact';

export default function Founder() {
    return (
        <section id="founder" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-md mx-auto lg:mx-0"
                    >
                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-violet-950/20">
                            <Image
                                src="/images/mauricio-forero-ceo.png"
                                alt="Mauricio Forero, CEO y fundador de BrandSoft, en exterior con cielo azul"
                                width={1200}
                                height={1600}
                                sizes="(max-width: 1024px) 100vw, 448px"
                                className="w-full h-auto object-cover object-[center_25%] block"
                                priority
                            />
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

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                            <a
                                href={whatsAppHref('Hola Mauricio, te escribo desde la sección Nosotros / Founder y quiero hablar de un proyecto.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-wide transition-colors shadow-lg shadow-emerald-600/25"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp con Mauricio
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mauricio-forero/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-3 rounded-full font-medium transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
