'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import CtaConversionBand from '@/components/CtaConversionBand';

type SuccessCase = {
    name: string;
    description: string;
    link: string;
    imageOverlay: string;
    features: string[];
    linkLabel?: string;
    imageSrc?: string;
    imageAlt?: string;
};

const cases: SuccessCase[] = [
    {
        name: 'FUSHION FITNESS CENTER',
        description:
            'Marketing y gestión de Instagram para un boot camp de fitness: la #FiebreAmarilla del fitness — CrossFit, gym, comunidad y bienestar.',
        link: 'https://www.instagram.com/fushionfitnesscenter/',
        imageOverlay: 'Fushion',
        imageSrc: '/images/fushion-fitness-center-instagram.png',
        imageAlt:
            'Perfil de Instagram de FUSHION FITNESS CENTER: boot camp de fitness, CrossFit y comunidad',
        features: ['Instagram', 'Comunidad y marca', 'Fitness boot camp'],
        linkLabel: 'Ver en Instagram',
    },
    {
        name: 'Ecolimpieza Bogotá S.A.S.',
        description:
            'Sitio corporativo y SEO local para líderes en limpieza hidrosanitaria: destape 24/7, trampas de grasa, camión Vactor y alcantarillado en Bogotá y Cundinamarca.',
        link: 'https://ecolimpiezabogota.com.co/',
        imageOverlay: 'Ecolimpieza',
        imageSrc: '/images/ecolimpieza-bogota-sitio.png',
        imageAlt:
            'Inicio de ecolimpiezabogota.com.co: hero con servicio Vactor, asistencia 24/7 y CTAs de cotización y WhatsApp',
        features: ['Web corporativa', 'SEO local', 'Vactor & hidrosanitario'],
        linkLabel: 'Visitar sitio web',
    },
    {
        name: "SAM's Services LTD.",
        description:
            'Sitio corporativo para operador de servicios en Canadá: marca naranja, flota y contenedores industriales, CTAs de cotización y contacto telefónico local.',
        link: 'https://samservicesltd.ca/',
        imageOverlay: 'SAM Services',
        imageSrc: '/images/sam-services-ltd-sitio.png',
        imageAlt:
            'Inicio de samservicesltd.ca: hero con camión y contenedor industrial, barra naranja y llamada a cotización gratuita',
        features: ['Web internacional', 'Marca y conversión', 'Servicios industriales'],
        linkLabel: 'Visitar sitio web',
    },
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
                            Nuestros resultados hablan por nosotros: desarrollo a la medida, marketing en redes y SEO, pensados para escalar.
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

                                {project.imageSrc ? (
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.imageAlt ?? project.name}
                                        fill
                                        className="object-cover object-top z-0"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                ) : (
                                    <h3 className="font-heading font-bold text-3xl text-white/20 z-0 tracking-widest uppercase text-center">
                                        {project.imageOverlay}
                                    </h3>
                                )}
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
                                    {project.linkLabel ?? 'Ver Proyecto'}{' '}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <CtaConversionBand
                    title="¿Quieres resultados como estos para tu marca?"
                    subtitle="Cuéntanos tu sector y te devolvemos una propuesta clara: alcance, tiempos y próximo paso. Sin humo."
                    whatsappContext="vi los casos de éxito en la web y quiero cotizar algo similar."
                />
            </div>
        </section>
    );
}
