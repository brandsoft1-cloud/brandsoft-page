'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const cases = [
    {
        name: 'Fushion Box',
        description: 'Desarrollo a la medida de una plataforma completa.',
        link: '#', // Placeholder until user provides link
        imageOverlay: 'Fushion Box',
        features: ['Software a la medida', 'UI/UX Moderna', 'Integración API']
    },
    {
        name: 'Ecolimpieza Bogotá',
        description: 'Plataforma corporativa y estrategia SEO para empresa líder en saneamiento hídrico y equipos Vactor.',
        link: 'https://ecolimpiezabogota.com.co/',
        imageOverlay: 'Ecolimpieza',
        features: ['Sitio Corporativo', 'SEO Industrial', 'UX/UI']
    },
    {
        name: 'SAM Services LTD',
        description: 'Plataforma internacional para gestión de servicios en Canadá.',
        link: 'https://samservicesltd.ca/',
        imageOverlay: 'SAM Services',
        features: ['Portal Internacional', 'Gestión de Leads', 'Optimización Local']
    }
];

export default function SuccessStories() {
    return (
        <section id="casos" className="py-24 relative overflow-hidden bg-white/5 border-t border-white/10">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-4xl md:text-5xl font-bold mb-4"
                        >
                            Casos de <span className="text-cyan-400">Éxito</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg"
                        >
                            Nuestros resultados hablan por nosotros. Proyectos construidos a la medida y optimizados para escalar.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all"
                        >
                            <div className="aspect-video bg-white/5 relative overflow-hidden flex items-center justify-center p-6">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                                {/* Visual representation since no real image is provided yet */}
                                <h3 className="font-heading font-bold text-3xl text-white/20 z-0 tracking-widest uppercase text-center">
                                    {project.imageOverlay}
                                </h3>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 mb-6 min-h-[48px]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.features.map((feature, idx) => (
                                        <span key={idx} className="text-xs bg-white/5 border border-white/10 text-cyan-300 px-3 py-1 rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors"
                                >
                                    Ver Proyecto <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
