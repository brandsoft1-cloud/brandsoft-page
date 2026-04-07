import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import CtaConversionBand from '@/components/CtaConversionBand';
import { getAllPosts } from '@/lib/mdx';
import { MENTORIA_BLOG_SLUGS, MENTORIA_JOB_PROMISE, MENTORIA_PILLARS } from '@/data/mentoria-seo';
import {
    BookOpen,
    ChevronRight,
    Code2,
    LineChart,
    Wallet,
    Target,
    CheckCircle2,
    Sparkles,
    Heart,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Mentorías para conseguir trabajo: software, IA, finanzas y emociones | BrandSoft',
    description:
        'Hub de mentorías con un objetivo claro: que consigas empleo u ofertas mejores. Entrevistas tech, marketing, finanzas del candidato, IA para prepararte e inteligencia emocional laboral. Guías y pilares enlazados.',
    keywords: [
        'mentoría conseguir trabajo Colombia',
        'preparación entrevistas software',
        'mentoría empleo tech',
        'inteligencia artificial buscar trabajo',
        'ansiedad entrevista laboral',
        'mentoría finanzas freelance',
        'mock interview',
    ],
    alternates: {
        canonical: '/mentorias',
    },
    openGraph: {
        title: 'Mentorías BrandSoft — Conseguir trabajo y pasar entrevistas',
        description:
            'Software, marketing, finanzas, IA aplicada al empleo e inteligencia emocional en la carrera. Pilares + biblioteca de artículos.',
    },
};

const pillarIcons = {
    'ingenieria-software': Code2,
    'marketing-digital': LineChart,
    finanzas: Wallet,
    'inteligencia-artificial-empleo': Sparkles,
    'inteligencia-emocional-laboral': Heart,
} as const;

export default async function MentoriasHubPage() {
    const posts = await getAllPosts();
    const mentoriaPosts = MENTORIA_BLOG_SLUGS.map((slug) => posts.find((p) => p.slug === slug)).filter(
        Boolean
    ) as typeof posts;

    const pillarCount = MENTORIA_PILLARS.length;
    const articleCount = MENTORIA_BLOG_SLUGS.length;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 pt-20">
            <Navbar />

            <section className="relative py-20 px-4 border-b border-white/10 overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
                        <Target className="w-3 h-3" />
                        PROMESA: CONSEGUIR TRABAJO (Y MEJORAR TUS OFERTAS)
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
                        Mentorías para que{' '}
                        <span className="text-violet-400 italic">encuentres empleo</span> y domines el proceso
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-4">
                        {MENTORIA_JOB_PROMISE}
                    </p>
                    <p className="text-lg text-gray-500 max-w-3xl leading-relaxed mb-8">
                        Eres experto en software, marketing o finanzas; nosotros en el camino completo: entrevistas
                        técnicas y comportamentales, uso inteligente de IA, claridad financiera y regulación emocional cuando
                        la presión aprieta. Todo articulado en{' '}
                        <strong className="text-gray-300">{pillarCount} pilares</strong> y{' '}
                        <strong className="text-gray-300">{articleCount} artículos</strong> que se enlazan entre sí.
                    </p>
                    <Link
                        href="#pilares"
                        className="inline-flex items-center gap-2 text-violet-400 font-bold hover:text-white transition-colors"
                    >
                        Ver pilares y rutas <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <section id="pilares" className="py-20 px-4 bg-zinc-950/80 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading text-2xl md:text-3xl font-black mb-4 text-center md:text-left">
                        Cinco pilares (cada uno con página propia)
                    </h2>
                    <p className="text-gray-500 mb-12 max-w-2xl text-center md:text-left">
                        Elige por perfil o combina: muchos candidatos mezclan software + IA + manejo de ansiedad en la
                        misma mentoría.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                                        {pillar.shortTitle}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{pillar.description}</p>
                                    <p className="text-xs text-emerald-400/90 font-semibold leading-snug mb-4">
                                        {pillar.jobOutcome}
                                    </p>
                                    <span className="text-xs font-black uppercase tracking-widest text-violet-400 flex items-center gap-1">
                                        Abrir pilar <ChevronRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="plan" className="py-20 px-4 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-cyan-400" />
                        Arquitectura de contenidos (SEO + intención de empleo)
                    </h2>
                    <p className="text-gray-400 mb-10">
                        Topic cluster alrededor de “conseguir trabajo” y “pasar entrevistas”: el hub enlaza a pilares y
                        estos a artículos largos. Así Google entiende la relación entre software, IA, finanzas y emociones
                        en contexto laboral.
                    </p>
                    <ul className="space-y-4">
                        {[
                            '/mentorias — esta página: promesa de empleo + acceso a los 5 pilares.',
                            ...MENTORIA_PILLARS.map((p) => `${p.path} — ${p.shortTitle.toLowerCase()}: keywords y guías enlazadas.`),
                            ...MENTORIA_BLOG_SLUGS.map((s) => `/blog/${s} — artículo de apoyo con enlaces internos.`),
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
                        Lecturas para aplicar entre sesiones: desde ATS y LinkedIn hasta prompts de IA y manejo de
                        ansiedad el día de la entrevista.
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
                    title="¿Listo para pasar de aplicar a entrevistar?"
                    subtitle="Cuéntanos tu rol objetivo, ciudad o remoto, y qué te bloquea (técnico, CV, nervios o IA). Respondemos por WhatsApp con siguiente paso."
                    whatsappContext="vengo del hub de mentorías: quiero conseguir trabajo / preparar entrevistas con mentoría 1:1."
                />
            </div>

            <Contact />
        </main>
    );
}
