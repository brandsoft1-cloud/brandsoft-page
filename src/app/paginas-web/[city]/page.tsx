import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import JsonLdFaq from '@/components/b2b/JsonLdFaq';
import {
    getPaginaWebCiudadCopy,
    PAGINAS_WEB_CIUDAD_SLUGS,
    type PaginaWebCiudadSlug,
} from '@/data/paginas-web-ciudad';
import { whatsAppHref } from '@/lib/contact';
import { Calendar, ClipboardCheck, CheckCircle2, BookOpen } from 'lucide-react';

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
    return PAGINAS_WEB_CIUDAD_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const copy = getPaginaWebCiudadCopy(city);
    if (!copy) return {};

    return {
        title: `Desarrollo de páginas web en ${copy.displayName} | BrandSoft`,
        description: copy.metaDescription,
        alternates: { canonical: `/paginas-web/${city}` },
        keywords: copy.keywords,
    };
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-4">
            {items.map((item) => (
                <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                </li>
            ))}
        </ul>
    );
}

export default async function PaginasWebCityPage({ params }: Props) {
    const { city } = await params;
    const copy = getPaginaWebCiudadCopy(city);
    if (!copy) notFound();

    const slug = city as PaginaWebCiudadSlug;

    return (
        <main className="min-h-screen bg-black text-white pt-20 selection:bg-violet-500/30">
            <JsonLdFaq faqs={copy.faqs} />
            <Navbar />

            <section className="py-20 px-4 border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <Link href="/paginas-web-colombia" className="text-sm text-violet-400 font-bold hover:underline">
                        ← Páginas web Colombia
                    </Link>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-400/90 mt-6 mb-3">
                        {slug === 'bogota' && 'Mercado competitivo · Alto volumen de búsqueda'}
                        {slug === 'medellin' && 'UX exigente · Marca y percepción de calidad'}
                        {slug === 'cali' && 'Móvil primero · Agilidad comercial'}
                        {slug === 'barranquilla' && 'Crecimiento regional · Proyección exterior'}
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mt-2 mb-4">
                        Desarrollo de páginas web en <span className="text-violet-400 italic">{copy.displayName}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white font-semibold max-w-4xl mb-5">{copy.heroSubhead}</p>
                    <p className="text-lg text-gray-400 mb-8 max-w-4xl leading-relaxed">{copy.heroIntro}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={whatsAppHref(
                                `Hola BrandSoft, quiero agendar una demostración para desarrollo web en ${copy.displayName}.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 font-black text-sm uppercase tracking-wide"
                        >
                            <Calendar className="w-5 h-5" />
                            Agendar demostración
                        </a>
                        <a
                            href={whatsAppHref(
                                `Hola BrandSoft, solicito auditoría gratuita de mi web en ${copy.displayName} para mejorar SEO y conversiones.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-black text-sm uppercase tracking-wide"
                        >
                            <ClipboardCheck className="w-5 h-5" />
                            Auditoría gratuita
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 max-w-5xl mx-auto border-b border-white/5">
                <h2 className="text-2xl md:text-3xl font-black mb-6">{copy.localBlock.title}</h2>
                <div className="space-y-5 text-gray-400 leading-relaxed max-w-4xl">
                    {copy.localBlock.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 max-w-5xl mx-auto border-b border-white/5">
                <h2 className="text-2xl md:text-3xl font-black mb-8">{copy.sectors.title}</h2>
                <BulletList items={copy.sectors.items} />
            </section>

            <section className="py-16 px-4 max-w-5xl mx-auto border-b border-white/5">
                <h2 className="text-2xl md:text-3xl font-black mb-8">{copy.differentiation.title}</h2>
                <BulletList items={copy.differentiation.items} />
            </section>

            <section className="py-16 px-4 max-w-5xl mx-auto border-b border-white/5">
                <h2 className="text-2xl md:text-3xl font-black mb-8">{copy.deliverables.title}</h2>
                <BulletList items={copy.deliverables.items} />
            </section>

            <section className="py-14 px-4 max-w-5xl mx-auto">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-8">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-violet-400" />
                        {copy.nextStep.title}
                    </h3>
                    <p className="text-gray-400 mb-5 leading-relaxed">{copy.nextStep.body}</p>
                    <Link
                        href={`/blog/${copy.nextStep.blogSlug}`}
                        className="inline-flex text-emerald-400 font-bold hover:underline"
                    >
                        {copy.nextStep.blogLabel} →
                    </Link>
                    <p className="text-sm text-gray-500 mt-6">
                        También puedes explorar el{' '}
                        <Link href="/blog" className="text-violet-400 font-bold hover:underline">
                            índice del blog
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <Contact />
        </main>
    );
}
