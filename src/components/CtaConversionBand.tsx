'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsAppHref } from '@/lib/contact';

type Props = {
    title: string;
    subtitle: string;
    whatsappContext?: string;
};

export default function CtaConversionBand({ title, subtitle, whatsappContext }: Props) {
    const wa = whatsAppHref(
        whatsappContext
            ? `Hola BrandSoft, ${whatsappContext}`
            : 'Hola BrandSoft, quiero hablar con un asesor para cotizar.'
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/80 via-zinc-950 to-violet-950/80 p-8 md:p-10 text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Cupos de asesoría esta semana</p>
                <h3 className="font-heading text-2xl md:text-4xl font-black text-white mb-4 leading-tight">{title}</h3>
                <p className="text-gray-400 text-lg mb-8">{subtitle}</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wide shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.02]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Escribir por WhatsApp ahora
                    </a>
                    <a
                        href="tel:+573213296957"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wide transition-all"
                    >
                        <Phone className="w-4 h-4" />
                        Llamar ahora
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
