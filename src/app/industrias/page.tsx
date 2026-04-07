import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { INDUSTRIA_SLUGS, INDUSTRIAS } from '@/data/b2b-hub-structure';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Industrias | IA, SEO y leads B2B por sector',
    description:
        'Ecommerce, finanzas y salud: casos de uso, dolores comunes y servicios BrandSoft alineados a su vertical.',
    alternates: { canonical: '/industrias' },
};

export default function IndustriasHubPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <Navbar />
            <section className="py-20 px-4 max-w-5xl mx-auto">
                <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">Industrias</h1>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                    Hub-and-spoke: cada sector enlaza a nuestros tres pilares (IA, SEO/GEO, leads B2B) con mensaje
                    contextualizado para compradores y sponsors internos.
                </p>
                <ul className="space-y-4">
                    {INDUSTRIA_SLUGS.map((slug) => {
                        const d = INDUSTRIAS[slug];
                        return (
                            <li key={slug}>
                                <Link
                                    href={d.path}
                                    className="flex items-center justify-between p-6 rounded-2xl border border-white/10 hover:border-violet-500/40 bg-zinc-950/50 group transition-colors"
                                >
                                    <div>
                                        <span className="text-xs font-black uppercase text-violet-400">{slug}</span>
                                        <p className="text-lg font-bold text-white mt-1">{d.h1}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-violet-400" />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <Contact />
        </main>
    );
}
