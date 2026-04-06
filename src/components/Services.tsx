'use client';

import { motion } from 'framer-motion';
import { Sparkles, Megaphone, Code, BrainCircuit } from 'lucide-react';

const services = [
    {
        title: 'Inteligencia Artificial',
        description: 'Automatización inteligente de procesos y análisis predictivo para escalar tu negocio.',
        icon: BrainCircuit,
        color: 'emerald'
    },
    {
        title: 'Branding Estratégico',
        description: 'Construimos identidades de marca memorables que conectan con tu audiencia ideal.',
        icon: Sparkles,
        color: 'violet'
    },
    {
        title: 'Marketing Digital',
        description: 'Estrategias de posicionamiento SEO y campañas digitales orientadas a resultados.',
        icon: Megaphone,
        color: 'cyan'
    },
    {
        title: 'Desarrollo a la Medida',
        description: 'Aplicaciones web y móviles escalables, rápidas y diseñadas con la última tecnología.',
        icon: Code,
        color: 'violet'
    },
    {
        title: 'Agente de Marketing IA',
        description: 'Super agente que diseña guiones para Reels, Copy creativo y estrategias de contenido con un solo clic.',
        icon: Sparkles,
        color: 'violet'
    },
];

export default function Services() {
    return (
        <section id="servicios" className="py-24 relative overflow-hidden bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-4"
                    >
                        Nuestros <span className="text-violet-400">Servicios</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Combinamos creatividad, tecnología e inteligencia artificial para crear soluciones que transforman negocios.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                ${service.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                ${service.color === 'violet' ? 'bg-violet-500/20 text-violet-400' : ''}
                ${service.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : ''}
                ${service.color === 'pink' ? 'bg-pink-500/20 text-pink-400' : ''}
              `}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
