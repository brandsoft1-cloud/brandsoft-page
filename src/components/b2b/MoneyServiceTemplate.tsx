import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import TrustAuthorityStrip from '@/components/b2b/TrustAuthorityStrip';
import JsonLdFaq from '@/components/b2b/JsonLdFaq';
import { whatsAppHref } from '@/lib/contact';
import { Calendar, ClipboardCheck, MessageCircle } from 'lucide-react';
import type { MoneyPageSlug } from '@/data/b2b-hub-structure';
import { MONEY_PAGES } from '@/data/b2b-hub-structure';

export function buildMoneyPageMetadata(slug: MoneyPageSlug): Metadata {
    const p = MONEY_PAGES[slug];
    return {
        title: p.metaTitle,
        description: p.metaDescription,
        keywords: [...p.keywords],
        alternates: { canonical: p.path },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDescription,
            type: 'website',
        },
    };
}

export default function MoneyServiceTemplate({ slug }: { slug: MoneyPageSlug }) {
    const p = MONEY_PAGES[slug];
    const waDemo = whatsAppHref(
        `Hola BrandSoft, quiero agendar una demostración. Me interesa: ${p.title}.`
    );
    const waAudit = whatsAppHref(
        `Hola BrandSoft, solicito una auditoría gratuita orientada a: ${p.title}.`
    );

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <JsonLdFaq faqs={p.faqs} />
            <Navbar />

            <section className="relative py-16 md:py-24 px-4 border-b border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[min(100%,480px)] h-80 bg-violet-600/15 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <nav className="text-xs text-gray-500 mb-8">
                        <Link href="/" className="hover:text-white">
                            Inicio
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-violet-400">{p.title}</span>
                    </nav>
                    <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
                        {p.h1}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-10">{p.valueProp}</p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                        <a
                            href={waDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 font-black text-sm uppercase tracking-wide shadow-xl shadow-violet-600/25"
                        >
                            <Calendar className="w-5 h-5" />
                            Agendar demostración
                        </a>
                        <a
                            href={waAudit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-black text-sm uppercase tracking-wide"
                        >
                            <ClipboardCheck className="w-5 h-5" />
                            Auditoría gratuita
                        </a>
                        <a
                            href={whatsAppHref(`Consulta comercial: ${p.title}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/25 text-sm font-bold"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Hablar con un asesor
                        </a>
                    </div>
                </div>
            </section>

            <TrustAuthorityStrip />

            <section className="py-20 px-4 max-w-5xl mx-auto">
                <h2 className="text-sm font-black uppercase tracking-widest text-violet-400 mb-10">Qué entregamos</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {p.pillars.map((x) => (
                        <div key={x.title} className="p-6 rounded-2xl border border-white/10 bg-zinc-950/50">
                            <h3 className="text-lg font-bold text-white mb-3">{x.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{x.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <Link href="/blog" className="text-violet-400 text-sm font-bold hover:underline">
                        Centro de conocimiento (blog) →
                    </Link>
                    <Link href="/recursos" className="text-violet-400 text-sm font-bold hover:underline">
                        Recursos y lead magnets →
                    </Link>
                </div>
            </section>

            <section className="py-20 px-4 bg-zinc-950 border-t border-white/10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-10 text-center">Preguntas frecuentes</h2>
                    <dl className="space-y-8">
                        {p.faqs.map((f) => (
                            <div key={f.q}>
                                <dt className="font-bold text-white mb-2">{f.q}</dt>
                                <dd className="text-gray-400 leading-relaxed">{f.a}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <Contact />
        </main>
    );
}
