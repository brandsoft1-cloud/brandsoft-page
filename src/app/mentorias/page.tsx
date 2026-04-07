import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import CtaConversionBand from '@/components/CtaConversionBand';
import { getAllPosts } from '@/lib/mdx';
import { MENTORIA_BLOG_SLUGS, MENTORIA_PILLARS } from '@/data/mentoria-seo';
import {
    BookOpen,
    ChevronRight,
    Code2,
    LineChart,
    Wallet,
    Target,
    CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Mentorías técnicas, marketing y finanzas para tu carrera | BrandSoft',
    description:
        'Más de 10 guías y subpáginas: entrevistas de software, system design, marketing digital, consultoría y finanzas para freelancers tech en Colombia y remoto.',
    keywords: [
        'mentoría técnica',
        'preparación entrevistas software',
        'consultoría marketing digital',
        'finanzas freelancers Colombia',
        'mock interview',
        'system design',
    ],
    alternates: {
        canonical: '/mentorias',
    },
    openGraph: {
        title: 'Hub de mentorías BrandSoft — Software, marketing y finanzas',
        description:
            'Subpáginas y blog con keywords listas para posicionar: entrevistas, consultoría y negocio freelance.',
    },
};

const pillarIcons = {
    'ingenieria-software': Code2,
    'marketing-digital': LineChart,
    finanzas: Wallet,
} as const;

export default async function MentoriasHubPage() {
    const posts = await getAllPosts();
    const mentoriaPosts = MENTORIA_BLOG_SLUGS.map((slug) => posts.find((p) => p.slug === slug)).filter(
        Boolean
    ) as typeof posts;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <Navbar />

            <section className="relative py-20 px-4 border-b border-white/10 overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold mb-6">
                        <Target className="w-3 h-3" />
                        HUB DE CARRERA Y CONSULTORÍA
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
                        Mentorías técnicas para{' '}
                        <span className="text-violet-400 italic">pasar entrevistas</span> y vender consultoría
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
                        Contenido pensado para ingeniería de software, marketing digital y finanzas de negocio propio.
                        Incluye <strong className="text-white">4 subpáginas pilares</strong> (este hub + tres verticales) y{' '}
                        <strong className="text-white">10 artículos de blog</strong> con palabras clave de cola media y
                        enlaces internos entre sí.
                    </p>
                    <Link
                        href="#plan"
                        className="inline-flex items-center gap-2 text-violet-400 font-bold hover:text-white transition-colors"
                    >
                        Ver plan de contenidos <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <section className="py-20 px-4 bg-zinc-950/80 border-b border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {MENTORIA_PILLARS.map((pillar) => {
                        const Icon = pillarIcons[pillar.slug as keyof typeof pillarIcons];
                        return (
                            <Link
                                key={pillar.path}
                                href={pillar.path}
                                className="group p-8 rounded-3xl border border-white/10 bg-black hover:border-violet-500/40 hover:bg-violet-950/20 transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                                    {pillar.shortTitle}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{pillar.description}</p>
                                <span className="text-xs font-black uppercase tracking-widest text-violet-400 flex items-center gap-1">
                                    Ir al pilar <ChevronRight className="w-3 h-3" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section id="plan" className="py-20 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-cyan-400" />
                        Plan de trabajo SEO (ejecutado en este sitio)
                    </h2>
                    <p className="text-gray-400 mb-10">
                        Arquitectura de contenidos para captar búsquedas de intención informacional y comercial suave
                        (mentorías / consultorías). Cada URL tiene título, meta description, keywords y enlaces cruzados.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'Hub /mentorias (esta página): enlaza a pilares y a los 10 posts.',
                            '/mentorias/ingenieria-software — keywords entrevistas dev, system design, algoritmos.',
                            '/mentorias/marketing-digital — entrevistas growth, pricing consultoría.',
                            '/mentorias/finanzas — freelance, RUT, flujo de caja.',
                            ...MENTORIA_BLOG_SLUGS.map((s) => `/blog/${s} — artículo largo + categoría Mentoría.`),
                        ].map((line) => (
                            <li key={line} className="flex gap-3 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{line}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-20 px-4 bg-zinc-950/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold mb-4 text-center md:text-left">
                        Biblioteca de guías (blog)
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-2xl">
                        Artículos extensos con H2/H3, listas y menciones a herramientas reales. Ideales para compartir en
                        LinkedIn y nutrir el hub.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {mentoriaPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="p-6 rounded-2xl border border-white/10 bg-black hover:border-cyan-500/40 transition-colors group"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2 block">
                                    {post.frontmatter.category}
                                </span>
                                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                                    {post.frontmatter.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{post.frontmatter.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 pb-8">
                <CtaConversionBand
                    title="¿Necesitas mentoría 1:1 o revisión de CV / entrevista?"
                    subtitle="Software, marketing o finanzas de freelance: agendamos una primera conversión y te decimos si encajamos."
                    whatsappContext="vengo del hub de mentorías y quiero hablar de una sesión o paquete."
                />
            </div>

            <Contact />
        </main>
    );
}
