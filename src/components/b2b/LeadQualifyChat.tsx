'use client';

import { useState } from 'react';
import { Bot, X, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsAppHref } from '@/lib/contact';

const STEPS = [
    {
        q: '¿Qué describe mejor su necesidad hoy?',
        options: ['Software / IA', 'SEO u optimización en buscadores', 'Más leads B2B', 'No estoy seguro'],
    },
    {
        q: '¿Tamaño aproximado del equipo o facturación digital?',
        options: ['Startup / pyme', 'Mediana empresa', 'Corporativo', 'Prefiero no decir'],
    },
    {
        q: '¿Cuándo le gustaría empezar?',
        options: ['Esta semana', 'Este mes', 'Próximo trimestre', 'Solo explorando'],
    },
];

/**
 * Dogfooding: calificación ligera en el cliente + handoff a WhatsApp.
 * Demuestra UX conversacional sin backend (sustituir por API propia cuando exista).
 */
export default function LeadQualifyChat() {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    function pick(answer: string) {
        const next = [...answers, answer];
        setAnswers(next);
        if (step < STEPS.length - 1) setStep((s) => s + 1);
        else {
            const summary = next.join(' | ');
            window.open(
                whatsAppHref(
                    `Califiqué en el chat de la web BrandSoft. Respuestas: ${summary}. Quiero siguiente paso.`
                ),
                '_blank'
            );
            setOpen(false);
            setStep(0);
            setAnswers([]);
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="fixed bottom-[5.75rem] left-4 z-[95] lg:bottom-8 lg:left-8 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-black uppercase tracking-wide shadow-xl shadow-violet-600/30 border border-white/10 hover:scale-[1.02] transition-transform max-w-[calc(100vw-2rem)]"
                aria-label="Abrir asistente de calificación"
            >
                <Bot className="w-5 h-5 shrink-0" />
                <span className="truncate">IA — calificar mi caso</span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        className="fixed bottom-[10rem] left-4 right-4 sm:left-8 sm:right-auto sm:w-[360px] z-[96] rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl overflow-hidden max-h-[min(70vh,420px)] overflow-y-auto"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-violet-950/50">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5 text-violet-400" />
                                <span className="font-bold text-sm text-white">Asistente BrandSoft</span>
                            </div>
                            <button type="button" onClick={() => setOpen(false)} className="text-gray-500 hover:text-white p-1">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-gray-500 mb-3">
                                Demostración en vivo: 3 preguntas y derivamos a WhatsApp con contexto.
                            </p>
                            <p className="text-sm text-white font-medium mb-4">{STEPS[step].q}</p>
                            <div className="space-y-2">
                                {STEPS[step].options.map((opt) => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => pick(opt)}
                                        className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-violet-600/30 border border-white/10 text-sm text-gray-200 flex items-center justify-between gap-2 transition-colors"
                                    >
                                        {opt}
                                        <ChevronRight className="w-4 h-4 text-violet-400 shrink-0" />
                                    </button>
                                ))}
                            </div>
                            <a
                                href={whatsAppHref('Prefiero saltar el chat y escribir directo.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Ir directo a WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
