'use client';

import { MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { whatsAppHref } from '@/lib/contact';

/**
 * Barra fija inferior en móvil: doble CTA muy visible.
 * El widget flotante de WhatsApp se desplaza arriba de esta barra.
 */
export default function StickyMobileCta() {
    return (
        <div
            className="fixed bottom-0 inset-x-0 z-[90] lg:hidden border-t border-emerald-500/40 bg-zinc-950/95 backdrop-blur-xl px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,0.5)]"
            role="region"
            aria-label="Contacto rápido"
        >
            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-emerald-400/90 mb-1.5">
                Respuesta hoy — sin compromiso
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
                <a
                    href={whatsAppHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wide shadow-lg shadow-emerald-600/30 active:scale-[0.98] transition-all"
                >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    WhatsApp
                </a>
                <Link
                    href="/#contacto"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-black text-xs uppercase tracking-wide shadow-lg shadow-violet-600/30 active:scale-[0.98] transition-all"
                >
                    <Send className="w-4 h-4 shrink-0" />
                    Cotizar
                </Link>
            </div>
        </div>
    );
}
