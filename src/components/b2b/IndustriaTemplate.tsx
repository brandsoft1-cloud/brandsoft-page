import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import TrustAuthorityStrip from '@/components/b2b/TrustAuthorityStrip';
import { whatsAppHref } from '@/lib/contact';
import type { IndustriaSlug } from '@/data/b2b-hub-structure';
import { INDUSTRIAS, MONEY_PAGE_SLUGS, MONEY_PAGES } from '@/data/b2b-hub-structure';
import { Building2, Calendar, ClipboardCheck } from 'lucide-react';

export default function IndustriaTemplate({ slug }: { slug: IndustriaSlug }) {
    const d = INDUSTRIAS[slug];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <Navbar />

            <section className="py-16 md:py-24 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <nav className="text-xs text-gray-500 mb-8">
                        <Link href="/" className="hover:text-white">
                            Inicio
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/industrias" className="hover:text-white">
                            Industrias
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-cyan-400 capitalize">{slug}</span>
                    </nav>
                    <div className="flex items-center gap-3 text-cyan-400 mb-4">
                        <Building2 className="w-8 h-8" />
                        <span className="text-xs font-black uppercase tracking-widest">Caso de uso B2B</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-black mb-6">{d.h1}</h1>
                    <p className="text-xl text-gray-400 mb-8">{d.intro}</p>
                    <h2 className="text-sm font-bold text-white mb-4">Dolores típicos que resolvemos</h2>
                    <ul className="space-y-2 mb-10">
                        {d.painPoints.map((x) => (
                            <li key={x} className="text-gray-300 flex gap-2">
                                <span className="text-violet-500">•</span>
                                {x}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={whatsAppHref(`Somos sector ${slug}, quiero agendar demostración / auditoría.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-violet-600 font-black text-xs uppercase tracking-wide"
                        >
                            <Calendar className="w-4 h-4" />
                            Agendar demostración
                        </a>
                        <a
                            href={whatsAppHref(`Sector ${slug}: solicito auditoría gratuita.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-emerald-500/40 text-emerald-400 font-black text-xs uppercase"
                        >
                            <ClipboardCheck className="w-4 h-4" />
                            Auditoría gratuita
                        </a>
                    </div>
                </div>
            </section>

            <TrustAuthorityStrip />

            <section className="py-16 px-4 max-w-5xl mx-auto">
                <h2 className="text-lg font-bold text-white mb-6">Servicios vinculados (hub)</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                    {MONEY_PAGE_SLUGS.map((s) => {
                        const mp = MONEY_PAGES[s];
                        return (
                            <Link
                                key={s}
                                href={mp.path}
                                className="p-5 rounded-2xl border border-white/10 hover:border-violet-500/40 bg-zinc-950/50 transition-colors"
                            >
                                <p className="font-bold text-white text-sm">{mp.title}</p>
                                <p className="text-xs text-gray-500 mt-2 line-clamp-2">{mp.metaDescription}</p>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <Contact />
        </main>
    );
}
