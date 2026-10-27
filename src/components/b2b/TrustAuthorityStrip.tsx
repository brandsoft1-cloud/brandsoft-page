import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

/**
 * Franja de confianza sin enlazar directorios genéricos (Clutch/G2)
 * hasta tener URL de perfil verificada.
 */
export default function TrustAuthorityStrip() {
    return (
        <section className="py-10 border-y border-white/10 bg-zinc-950/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-8 h-8 text-violet-400 shrink-0" aria-hidden />
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-violet-400 mb-1">
                                Cómo trabajamos
                            </p>
                            <h2 className="text-lg font-bold text-white">Diagnóstico claro, alcance explícito</h2>
                            <p className="text-sm text-gray-500 mt-1 max-w-xl">
                                Priorizamos entregables verificables y conversación comercial directa. Cuando
                                publiquemos perfiles en directorios B2B, los enlazaremos aquí.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/casos-de-exito"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-black hover:border-violet-500/40 text-white text-sm font-bold transition-colors"
                        >
                            Ver casos de éxito
                        </Link>
                        <Link
                            href="/#diagnostico"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-violet-500/40 bg-violet-600/20 hover:bg-violet-600/35 text-violet-200 text-sm font-bold transition-colors"
                        >
                            Agenda un diagnóstico
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
