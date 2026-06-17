'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { whatsAppHref } from '@/lib/contact';

const plans = [
    {
        name: 'Básico',
        price: 'Desde $1.500.000',
        currency: 'COP',
        popular: false,
        features: ['Landing page profesional', 'SEO básico on-page', '1 ronda de revisión', 'Soporte 1 mes'],
        cta: 'Hola BrandSoft, me interesa el paquete Básico (desde $1.500.000 COP). Quiero más detalles.',
    },
    {
        name: 'Profesional',
        price: 'Desde $3.500.000',
        currency: 'COP',
        popular: true,
        features: [
            'Web a la medida (hasta 8 secciones)',
            'SEO avanzado + estructura técnica',
            '3 rondas de revisión',
            'Soporte 3 meses',
        ],
        cta: 'Hola BrandSoft, me interesa el paquete Profesional (desde $3.500.000 COP). Quiero cotización.',
    },
    {
        name: 'Enterprise',
        price: 'Desde $8.000.000',
        currency: 'COP',
        popular: false,
        features: [
            'Software / plataforma completa',
            'IA integrada (chatbots, automatización)',
            'Revisiones ilimitadas en alcance acordado',
            'Soporte 6 meses',
        ],
        cta: 'Hola BrandSoft, necesito cotización Enterprise (software + IA). Cuéntenme el proceso.',
    },
];

export default function Pricing() {
    return (
        <section id="precios" className="py-24 bg-zinc-950/50 border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                        Paquetes <span className="text-violet-400">transparentes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sabes desde cuánto puedes empezar. Ajustamos alcance en una llamada de 15 min sin compromiso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`relative rounded-3xl border p-8 flex flex-col ${
                                plan.popular
                                    ? 'border-violet-500/50 bg-violet-950/20 shadow-xl shadow-violet-900/20'
                                    : 'border-white/10 bg-black'
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest">
                                    Popular
                                </span>
                            )}
                            <h3 className="text-lg font-bold text-white uppercase tracking-wide">{plan.name}</h3>
                            <p className="mt-4">
                                <span className="text-3xl font-black text-white">{plan.price}</span>
                                <span className="text-gray-500 text-sm ml-1">{plan.currency}</span>
                            </p>
                            <ul className="mt-8 space-y-3 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-2 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={whatsAppHref(plan.cta)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wide transition-colors ${
                                    plan.popular
                                        ? 'bg-violet-600 text-white hover:bg-violet-500'
                                        : 'border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10'
                                }`}
                            >
                                <MessageCircle className="w-4 h-4" />
                                {plan.name === 'Enterprise' ? 'Cotización personalizada' : 'WhatsApp'}
                            </a>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-xs text-gray-600 mt-8">
                    Precios orientativos en COP. El valor final depende de alcance, integraciones e industria.
                </p>
            </div>
        </section>
    );
}
