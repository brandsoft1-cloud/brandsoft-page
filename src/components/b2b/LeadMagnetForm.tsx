'use client';

import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

type Props = {
    magnetId: string;
    title: string;
    subtitle: string;
};

/**
 * Sustituir onSubmit por:
 * - fetch() a su API que cree contacto en HubSpot / Zoho / Pipedrive, o
 * - embed del formulario nativo del CRM (iframe/script).
 */
export default function LeadMagnetForm({ magnetId, title, subtitle }: Props) {
    const [sent, setSent] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // CRM: enviar a endpoint o dataLayer para GTM → connector
        if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
            (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
                event: 'lead_magnet_submit',
                magnet_id: magnetId,
            });
        }
        setSent(true);
    }

    return (
        <div className="rounded-2xl border border-violet-500/20 bg-black p-8">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
            {sent ? (
                <p className="text-emerald-400 font-bold">
                    Gracias. En producción, aquí confirmaríamos envío y dispararíamos el workflow del CRM.
                </p>
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre</label>
                        <input
                            name="name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                            placeholder="Nombre y apellido"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                            Email corporativo
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                            placeholder="nombre@empresa.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Empresa</label>
                        <input
                            name="company"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                            placeholder="Razón social o marca"
                        />
                    </div>
                    <input type="hidden" name="magnet_id" value={magnetId} />
                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Enviar y recibir recurso
                    </button>
                </form>
            )}
        </div>
    );
}
