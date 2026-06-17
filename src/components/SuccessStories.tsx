'use client';

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/data/case-studies';
import CaseStudyCard, { CaseStudyCardLinkAll } from '@/components/CaseStudyCard';
import CtaConversionBand from '@/components/CtaConversionBand';

const featuredCases = CASE_STUDIES.slice(0, 3);

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
                            Historias reales: cómo pasaron del problema al resultado. Sin humo, con números.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <CaseStudyCardLinkAll />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCases.map((study, index) => (
                        <motion.div
                            key={study.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="h-full"
                        >
                            <CaseStudyCard study={study} />
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
