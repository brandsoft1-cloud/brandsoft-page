'use client';

import { MessageCircle } from 'lucide-react';
import { whatsAppHref } from '@/lib/contact';

/**
 * Antes: paquetes con precios “Desde $…”.
 * Ahora: sin precios públicos — CTA a diagnóstico (evita autoexclusión por ticket).
 */
export default function Pricing() {
    return (
        <section id="precios" className="py-24 bg-zinc-950/50 border-y border-white/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                    Inversión a la medida
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                    No publicamos paquetes ni precios genéricos. En el diagnóstico priorizamos qué te
                    conviene y te armamos una propuesta clara — sin sorpresas de letra pequeña.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="/#diagnostico"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-600 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-violet-500"
                    >
                        Agenda un diagnóstico
                    </a>
                    <a
                        href={whatsAppHref(
                            'Hola BrandSoft, quiero hablar de alcance e inversión para mi empresa. Sin paquetes genéricos: diagnóstico primero.',
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-500/40 px-8 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10"
                    >
                        <MessageCircle className="w-5 h-5" aria-hidden />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
