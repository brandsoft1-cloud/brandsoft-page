import { ExternalLink, ShieldCheck } from 'lucide-react';

const REVIEW_PROFILES = [
    {
        name: 'Clutch',
        desc: 'Perfil de agencia y reseñas verificadas B2B',
        href: 'https://clutch.co/',
        note: 'Añade aquí tu URL de perfil en Clutch cuando esté publicada.',
    },
    {
        name: 'G2',
        desc: 'Software y servicios tecnológicos',
        href: 'https://www.g2.com/',
        note: 'Añade aquí tu listing en G2 para enlazar reseñas de producto/servicio.',
    },
];

export default function TrustAuthorityStrip() {
    return (
        <section className="py-10 border-y border-white/10 bg-zinc-950/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-8 h-8 text-violet-400 shrink-0" />
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-violet-400 mb-1">
                                Validación social B2B
                            </p>
                            <h2 className="text-lg font-bold text-white">Confianza en directorios de autoridad</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Enlazamos perfiles verificados para que CTOs y compradores comparen con terceros
                                independientes.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {REVIEW_PROFILES.map((p) => (
                            <a
                                key={p.name}
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-black hover:border-violet-500/40 text-white text-sm font-bold transition-colors group"
                            >
                                {p.name}
                                <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-violet-400" />
                            </a>
                        ))}
                    </div>
                </div>
                <p className="text-[11px] text-gray-600 mt-4 text-center md:text-left">
                    Sustituye los enlaces anteriores por tus URLs reales de Clutch y G2 en{' '}
                    <code className="text-violet-400/80">TrustAuthorityStrip.tsx</code>.
                </p>
            </div>
        </section>
    );
}
