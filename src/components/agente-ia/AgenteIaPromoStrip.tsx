import Link from 'next/link';
import { Bot, ArrowRight } from 'lucide-react';

type Props = {
    slug: string;
    sectorLabel: string;
};

export default function AgenteIaPromoStrip({ slug, sectorLabel }: Props) {
    return (
        <section className="border-b border-violet-500/20 bg-gradient-to-r from-violet-950/40 via-black to-emerald-950/20">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-300 shrink-0">
                        <Bot className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-1">
                            Nuevo — Agente de IA conversacional
                        </p>
                        <h2 className="text-lg font-bold text-white">
                            ¿Pierdes clientes de {sectorLabel} por no responder WhatsApp a tiempo?
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Atiende 24/7, califica leads y manda resumen al correo. La inversión se
                            define tras un diagnóstico corto.
                        </p>
                    </div>
                </div>
                <Link
                    href={`/soluciones/${slug}/agente-ia`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-black text-xs uppercase tracking-wide whitespace-nowrap shrink-0"
                >
                    Ver landing del agente IA
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
