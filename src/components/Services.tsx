'use client';

import { motion } from 'framer-motion';
import { Sparkles, Megaphone, Code, BrainCircuit, MessageCircle, Workflow, Cpu } from 'lucide-react';
import { whatsAppHref } from '@/lib/contact';

const services = [
    {
        title: 'Automatización de Procesos con IA',
        description:
            'Eliminamos tareas manuales conectando tus apps con flujos de trabajo en n8n: datos, correos, CRM y reportes que se ejecutan solos.',
        icon: Workflow,
        color: 'emerald',
    },
    {
        title: 'Agentes de IA 24/7',
        description:
            'Agentes de IA que atienden clientes, califican leads y responden por WhatsApp sin que muevas un dedo.',
        icon: BrainCircuit,
        color: 'emerald',
    },
    {
        title: 'Integraciones y Flujos n8n',
        description:
            'Conectamos WhatsApp, CRM, ERP, correo y bases de datos en flujos de trabajo automatizados y a la medida de tu operación.',
        icon: Cpu,
        color: 'cyan',
    },
    {
        title: 'Software a la Medida',
        description: 'Tu proceso más lento convertido en software que trabaja mientras duermes.',
        icon: Code,
        color: 'violet',
    },
    {
        title: 'Posicionamiento SEO y GEO',
        description: 'Primera página de Google y visibilidad en IA. Posicionamos +47 sitios en Colombia y Latam.',
        icon: Megaphone,
        color: 'cyan',
    },
    {
        title: 'Agente de Marketing IA',
        description:
            'Super agente que diseña guiones para Reels, copy creativo y estrategias de contenido con un solo clic.',
        icon: Sparkles,
        color: 'violet',
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
                        Automatización con <span className="text-violet-400">IA</span> y más
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Automatizamos los procesos de tu empresa con inteligencia artificial y flujos de trabajo en n8n.
                        Menos tareas manuales, más resultados.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                ${service.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                ${service.color === 'violet' ? 'bg-violet-500/20 text-violet-400' : ''}
                ${service.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : ''}
              `}
                            >
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>
                            <a
                                href={whatsAppHref(
                                    `Hola BrandSoft, vi el servicio "${service.title}" y quiero asesoría gratuita.`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp — asesoría gratis
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
