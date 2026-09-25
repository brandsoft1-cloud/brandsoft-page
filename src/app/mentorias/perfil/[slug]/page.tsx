import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import CtaConversionBand from '@/components/CtaConversionBand';
import { getAllPosts } from '@/lib/mdx';
import { whatsAppHref } from '@/lib/contact';
import { MENTORIA_PERFILES, getPerfilBySlug, type MentoriaPerfil } from '@/data/mentoria-perfiles';
import { MENTORIA_PILLARS } from '@/data/mentoria-seo';
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    MessageCircle,
    Sprout,
    Lock,
    Compass,
    TrendingUp,
    type LucideIcon,
} from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

const icons: Record<MentoriaPerfil['icon'], LucideIcon> = {
    seedling: Sprout,
    lock: Lock,
    compass: Compass,
    'trending-up': TrendingUp,
};

const accentMap: Record<
    MentoriaPerfil['accent'],
    {
        text: string;
        hoverText: string;
        groupHoverText: string;
        chipBg: string;
        chipBorder: string;
        chipText: string;
        iconBg: string;
        glow: string;
        hoverBorder: string;
        btn: string;
        btnText: string;
        check: string;
        border: string;
    }
> = {
    violet: {
        text: 'text-violet-400',
        hoverText: 'hover:text-violet-400',
        groupHoverText: 'group-hover:text-violet-400',
        chipBg: 'bg-violet-500/10',
        chipBorder: 'border-violet-500/30',
        chipText: 'text-violet-300',
        iconBg: 'bg-violet-500/15 text-violet-400',
        glow: 'bg-violet-600/15',
        hoverBorder: 'hover:border-violet-500/40',
        btn: 'bg-violet-600 hover:bg-violet-500',
        btnText: 'text-white',
        check: 'text-violet-400',
        border: 'border-violet-500/30',
    },
    emerald: {
        text: 'text-emerald-400',
        hoverText: 'hover:text-emerald-400',
        groupHoverText: 'group-hover:text-emerald-400',
        chipBg: 'bg-emerald-500/10',
        chipBorder: 'border-emerald-500/30',
        chipText: 'text-emerald-300',
        iconBg: 'bg-emerald-500/15 text-emerald-400',
        glow: 'bg-emerald-600/15',
        hoverBorder: 'hover:border-emerald-500/40',
        btn: 'bg-emerald-500 hover:bg-emerald-400',
        btnText: 'text-black',
        check: 'text-emerald-400',
        border: 'border-emerald-500/30',
    },
    cyan: {
        text: 'text-cyan-400',
        hoverText: 'hover:text-cyan-400',
        groupHoverText: 'group-hover:text-cyan-400',
        chipBg: 'bg-cyan-500/10',
        chipBorder: 'border-cyan-500/30',
        chipText: 'text-cyan-300',
        iconBg: 'bg-cyan-500/15 text-cyan-400',
        glow: 'bg-cyan-600/15',
        hoverBorder: 'hover:border-cyan-500/40',
        btn: 'bg-cyan-500 hover:bg-cyan-400',
        btnText: 'text-black',
        check: 'text-cyan-400',
        border: 'border-cyan-500/30',
    },
    amber: {
        text: 'text-amber-400',
        hoverText: 'hover:text-amber-400',
        groupHoverText: 'group-hover:text-amber-400',
        chipBg: 'bg-amber-500/10',
        chipBorder: 'border-amber-500/30',
        chipText: 'text-amber-300',
        iconBg: 'bg-amber-500/15 text-amber-400',
        glow: 'bg-amber-600/15',
        hoverBorder: 'hover:border-amber-500/40',
        btn: 'bg-amber-400 hover:bg-amber-300',
        btnText: 'text-black',
        check: 'text-amber-400',
        border: 'border-amber-500/30',
    },
};

export function generateStaticParams() {
    return MENTORIA_PERFILES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const perfil = getPerfilBySlug(slug);
    if (!perfil) return { title: 'No encontrado' };

    return {
        title: perfil.metaTitle,
        description: perfil.metaDescription,
        keywords: [...perfil.keywords],
        alternates: { canonical: perfil.path },
        openGraph: {
            title: perfil.metaTitle,
            description: perfil.metaDescription,
        },
    };
}

/** Renderiza el H1 resaltando `h1Highlight` con el color de acento. */
function H1WithHighlight({ h1, highlight, accentText }: { h1: string; highlight: string; accentText: string }) {
    const idx = h1.indexOf(highlight);
    if (idx === -1) {
        return <span>{h1}</span>;
    }
    const before = h1.slice(0, idx);
    const after = h1.slice(idx + highlight.length);
    return (
        <>
            {before}
            <span className={`${accentText} italic`}>{highlight}</span>
            {after}
        </>
    );
}

export default async function MentoriaPerfilPage({ params }: Props) {
    const { slug } = await params;
    const perfil = getPerfilBySlug(slug);
    if (!perfil) notFound();

    const a = accentMap[perfil.accent];
    const Icon = icons[perfil.icon];

    const posts = await getAllPosts();
    const related = perfil.relatedBlog
        .map((s) => posts.find((p) => p.slug === s))
        .filter(Boolean) as Awaited<ReturnType<typeof getAllPosts>>;

    const pillars = perfil.relatedPillars
        .map((ps) => MENTORIA_PILLARS.find((p) => p.slug === ps))
        .filter((p): p is (typeof MENTORIA_PILLARS)[number] => Boolean(p));

    const otherPerfiles = MENTORIA_PERFILES.filter((p) => p.slug !== perfil.slug);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <Navbar />

            {/* HERO */}
            <section className="relative py-20 px-4 border-b border-white/10 overflow-hidden">
                <div className={`absolute top-16 right-0 w-[500px] h-[500px] ${a.glow} rounded-full blur-[120px] pointer-events-none`} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/mentorias"
                        className={`inline-flex items-center text-gray-500 ${a.hoverText} text-xs font-bold uppercase tracking-widest mb-8`}
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Volver a BrandSoft Education
                    </Link>

                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${a.chipBg} border ${a.chipBorder} ${a.chipText} text-xs font-bold mb-6`}>
                        <Icon className="w-4 h-4" />
                        {perfil.badge}
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.08]">
                        <H1WithHighlight h1={perfil.h1} highlight={perfil.h1Highlight} accentText={a.text} />
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                        {perfil.emotionalIntro}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={whatsAppHref(`Hola BrandSoft, ${perfil.whatsappContext}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full ${a.btn} ${a.btnText} font-black uppercase text-sm tracking-wide transition-colors`}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Hablar por WhatsApp — llamada 15 min
                        </a>
                        <Link
                            href="/agendar"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm hover:border-white/40 transition-colors"
                        >
                            Agendar con Mauricio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ¿TE IDENTIFICAS? */}
            <section className="py-16 px-4 bg-zinc-950/80 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-black mb-8">¿Te identificas?</h2>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {perfil.identifyIf.map((item) => (
                            <li
                                key={item}
                                className={`flex gap-3 p-5 rounded-2xl border border-white/10 bg-black ${a.hoverBorder} transition-colors`}
                            >
                                <CheckCircle2 className={`w-5 h-5 ${a.check} shrink-0 mt-0.5`} />
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* PROMESA */}
            <section className="py-16 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[11px] font-black uppercase tracking-widest text-gray-500 mb-4">A dónde te llevamos</p>
                    <p className={`text-2xl md:text-3xl font-bold leading-snug border-l-4 ${a.border} pl-6`}>
                        {perfil.promise}
                    </p>
                </div>
            </section>

            {/* QUÉ TRABAJAMOS */}
            <section className="py-16 px-4 bg-zinc-950/60 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-black mb-8">Qué trabajamos en la mentoría</h2>
                    <ul className="space-y-4">
                        {perfil.weWorkOn.map((t) => (
                            <li key={t} className="flex gap-3 text-gray-300 text-lg">
                                <span className={`${a.text} font-bold`}>→</span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* PILARES RELACIONADOS */}
            {pillars.length > 0 && (
                <section className="py-16 px-4 border-b border-white/10">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-2xl md:text-3xl font-black mb-3">Pilares que combinan con tu caso</h2>
                        <p className="text-gray-500 mb-10 max-w-2xl">
                            La mentoría se arma mezclando temas. Estos pilares son los que más te sirven según tu situación.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {pillars.map((pillar) => (
                                <Link
                                    key={pillar.path}
                                    href={pillar.path}
                                    className={`group p-6 rounded-3xl border border-white/10 bg-black ${a.hoverBorder} transition-all`}
                                >
                                    <h3 className={`text-lg font-bold text-white mb-2 ${a.groupHoverText} transition-colors`}>
                                        {pillar.shortTitle}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{pillar.description}</p>
                                    <span className={`text-xs font-black uppercase tracking-widest ${a.text} flex items-center gap-1`}>
                                        Abrir pilar <ChevronRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* BLOG RELACIONADO */}
            {related.length > 0 && (
                <section className="py-16 px-4 bg-zinc-950/60 border-b border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-2xl md:text-3xl font-black mb-8">Guías para aplicar entre sesiones</h2>
                        <ul className="space-y-4">
                            {related.map((post) => (
                                <li key={post.slug}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className={`flex items-start justify-between gap-4 p-5 rounded-2xl border border-white/10 bg-black ${a.hoverBorder} transition-colors group`}
                                    >
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                                                {post.frontmatter.category}
                                            </span>
                                            <p className={`font-bold text-white ${a.groupHoverText} transition-colors`}>
                                                {post.frontmatter.title}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                {post.frontmatter.description}
                                            </p>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 ${a.text} shrink-0 mt-1`} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* OTROS PERFILES */}
            <section className="py-16 px-4 border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-black mb-3">¿No es exactamente tu caso?</h2>
                    <p className="text-gray-500 mb-10">Mira si te reconoces mejor en otra situación:</p>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {otherPerfiles.map((p) => (
                            <Link
                                key={p.slug}
                                href={p.path}
                                className="group p-6 rounded-3xl border border-white/10 bg-black hover:border-white/30 transition-all"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                                    {p.badge}
                                </span>
                                <p className="font-bold text-white group-hover:text-gray-200 transition-colors">
                                    {p.shortTitle}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-10">
                <CtaConversionBand
                    title="Cuéntame tu situación y armamos un plan"
                    subtitle="Sin compromiso: me dices dónde estás y qué te bloquea (técnico o emocional) y te respondo por WhatsApp con el siguiente paso concreto."
                    whatsappContext={perfil.whatsappContext}
                />
            </div>

            <Contact />
        </main>
    );
}
