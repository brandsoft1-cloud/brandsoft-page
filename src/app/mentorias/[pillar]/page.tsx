import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import CtaConversionBand from '@/components/CtaConversionBand';
import { getAllPosts } from '@/lib/mdx';
import { MENTORIA_PILLARS, MENTORIA_RELATED_BY_PILLAR, type MentoriaPillarDef } from '@/data/mentoria-seo';
import { ChevronLeft, ChevronRight, Target } from 'lucide-react';

type Props = { params: Promise<{ pillar: string }> };

export function generateStaticParams() {
    return MENTORIA_PILLARS.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { pillar } = await params;
    const meta = MENTORIA_PILLARS.find((p) => p.slug === pillar) as MentoriaPillarDef | undefined;
    if (!meta) return { title: 'No encontrado' };

    return {
        title: `${meta.title} | BrandSoft`,
        description: meta.description,
        keywords: [...meta.keywords],
        alternates: {
            canonical: `/mentorias/${pillar}`,
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function MentoriaPillarPage({ params }: Props) {
    const { pillar } = await params;
    const meta = MENTORIA_PILLARS.find((p) => p.slug === pillar) as MentoriaPillarDef | undefined;
    if (!meta) notFound();

    const slugs = MENTORIA_RELATED_BY_PILLAR[pillar];
    const posts = await getAllPosts();
    const related = slugs
        .map((slug) => posts.find((p) => p.slug === slug))
        .filter(Boolean) as Awaited<ReturnType<typeof getAllPosts>>;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <Navbar />

            <article className="max-w-4xl mx-auto px-4 py-16">
                <Link
                    href="/mentorias"
                    className="inline-flex items-center text-gray-500 hover:text-violet-400 text-xs font-bold uppercase tracking-widest mb-10"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Volver al hub de mentorías
                </Link>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-5">
                    <Target className="w-3 h-3" />
                    Enfoque: conseguir trabajo y cerrar procesos
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-6">{meta.title}</h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">{meta.description}</p>
                <p className="text-lg text-violet-200/90 font-medium leading-relaxed border-l-4 border-violet-500 pl-5 py-1 mb-12">
                    {meta.jobOutcome}
                </p>

                <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 mb-12">
                    <h2 className="text-sm font-black uppercase tracking-widest text-violet-400 mb-4">
                        Palabras clave objetivo
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {meta.keywords.map((kw) => (
                            <span
                                key={kw}
                                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-8 mb-12">
                    <h2 className="text-lg font-bold text-white mb-4">Qué trabajamos en sesión</h2>
                    <ul className="space-y-3 text-gray-300">
                        {meta.sessionTopics.map((t) => (
                            <li key={t} className="flex gap-2">
                                <span className="text-violet-400 font-bold">→</span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="prose prose-invert prose-violet max-w-none mb-14">
                    <h2>Por qué este pilar existe</h2>
                    {meta.bodyParagraphs.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                    <h2>Hub y enlaces internos</h2>
                    <p>
                        Este pilar forma parte del hub <Link href="/mentorias">/mentorias</Link>, pensado para agrupar
                        autoridad temática: entrevistas, empleo, IA aplicada y regulación emocional en contexto laboral.
                        Los artículos siguientes amplían cada tema con acciones concretas.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Guías y artículos relacionados</h2>
                <ul className="space-y-4">
                    {related.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-white/10 hover:border-violet-500/40 bg-black transition-colors group"
                            >
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                                        {post.frontmatter.category}
                                    </span>
                                    <p className="font-bold text-white group-hover:text-violet-300 transition-colors">
                                        {post.frontmatter.title}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                        {post.frontmatter.description}
                                    </p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-violet-500 shrink-0 mt-1" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-14 max-w-4xl mx-auto px-4">
                    <CtaConversionBand
                        title="¿Quieres acelerar tu búsqueda con mentoría 1:1?"
                        subtitle="Simulacros, revisión de materiales y plan claro hasta la oferta. Cuéntanos tu perfil y objetivo laboral."
                        whatsappContext={`estoy en el pilar ${meta.shortTitle} del hub de mentorías y quiero conseguir trabajo / preparar entrevistas.`}
                    />
                </div>
            </article>

            <Contact />
        </main>
    );
}
