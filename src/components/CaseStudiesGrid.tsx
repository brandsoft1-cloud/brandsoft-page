'use client';

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/data/case-studies';
import CaseStudyCard from '@/components/CaseStudyCard';
import CtaConversionBand from '@/components/CtaConversionBand';

export default function CaseStudiesGrid() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CASE_STUDIES.map((study, index) => (
                    <motion.div
                        key={study.company}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className="h-full"
                    >
                        <CaseStudyCard study={study} />
                    </motion.div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto mt-12">
                <CtaConversionBand
                    title="¿Tu sector puede ser el siguiente caso de éxito?"
                    subtitle="Agenda una llamada o escríbenos por WhatsApp con tu reto actual."
                    whatsappContext="revisé todos los casos de éxito y quiero algo equivalente para mi empresa."
                />
            </div>
        </section>
    );
}
