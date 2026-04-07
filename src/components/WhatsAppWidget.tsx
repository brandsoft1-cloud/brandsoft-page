'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { whatsAppHref } from '@/lib/contact';

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(false);

    useEffect(() => {
        // Show bubble after 3 seconds
        const timer = setTimeout(() => setShowBubble(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleWhatsAppClick = () => {
        // Enviar evento de conversión simulado a dataLayer
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'lead_whatsapp_click', {
                'event_category': 'Leads',
                'event_label': 'WhatsApp Widget'
            });
        }
        window.open(
            whatsAppHref(
                'Hola Mauricio, vengo de la web de BrandSoft y quiero cotizar un servicio (software IA, SEO/GEO o leads B2B).'
            ),
            '_blank'
        );
    };

    return (
        <div className="fixed bottom-24 right-4 sm:right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none lg:bottom-8">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl w-[320px] overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="bg-emerald-600 p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/20">
                                    <Image
                                        src="/images/mauricio-forero-ceo.png"
                                        alt="Mauricio"
                                        width={80}
                                        height={80}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-white">
                                    <div className="text-sm font-bold">Mauricio Forero</div>
                                    <div className="text-[10px] opacity-80 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                        En línea ahora
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 bg-[#0B0B0B] text-gray-400 text-sm">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 mb-4">
                                ¡Hola! 👋 Escríbeme cualquier duda sobre **Software, SEO o IA** y te responderé en minutos.
                            </div>
                        </div>

                        {/* Footer / Link */}
                        <div className="p-4 bg-zinc-900 border-t border-white/5">
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
                            >
                                Iniciar Chat en WhatsApp
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-4 pointer-events-auto">
                <AnimatePresence>
                    {showBubble && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl hidden md:block"
                        >
                            ¿Cotización gratis hoy?
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 bg-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center hover:scale-110 transition-transform group"
                >
                    <MessageCircle className="text-white w-8 h-8 group-hover:rotate-12 transition-transform" />
                </button>
            </div>
        </div>
    );
}
