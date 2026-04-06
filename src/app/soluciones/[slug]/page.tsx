import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { VERTICALS, CITIES } from "@/data/seo-config";
import { notFound } from 'next/navigation';
import {
    Zap,
    ChevronRight,
    MessageSquare,
    ShieldCheck,
    CheckCircle,
    Layout,
    TrendingUp,
    Clock,
    Briefcase,
    Utensils,
    Sparkles,
    Search,
    Check,
    XCircle,
    MapPin,
    HelpCircle,
    ChevronLeft
} from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return VERTICALS.map(v => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const vertical = VERTICALS.find(v => v.slug === slug);
    if (!vertical) return { title: 'Página no encontrada' };

    return {
        title: `Software para ${vertical.name} | Soluciones B2B | BrandSoft`,
        description: `Expertos en desarrollo de software y SEO para ${vertical.name}. ${vertical.hook} Implementación rápida y soporte 24/7.`,
        alternates: {
            canonical: `/soluciones/${slug}`,
        }
    };
}

const icons: Record<string, any> = {
    utensils: Utensils,
    briefcase: Briefcase,
    sparkles: Sparkles,
    cleaning: Layout,
    activity: Activity,
    home: Home,
    'graduation-cap': GraduationCap
};

function Activity(props: any) { return <Sparkles {...props} /> } // Fallback
function Home(props: any) { return <Layout {...props} /> } // Fallback
function GraduationCap(props: any) { return <Layout {...props} /> } // Fallback

export default async function VerticalPage({ params }: PageProps) {
    const { slug } = await params;
    const vertical = VERTICALS.find(v => v.slug === slug);

    if (!vertical) notFound();

    const Icon = icons[vertical.icon] || Zap;

    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black text-white">
            <Navbar />

            {/* Breadcrumbs SEO */}
            <nav className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2 uppercase tracking-widest font-black italic">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/soluciones" className="hover:text-white transition-colors">Soluciones</Link>
                <ChevronRight className="w-3 h-3 text-violet-500" />
                <span className="text-violet-500">{vertical.name}</span>
            </nav>

            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-violet-600/10 blur-[120px] pointer-events-none rounded-full" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black mb-6 italic uppercase tracking-[0.2em]">
                        <Zap className="w-3 h-3 saturate-150" />
                        <span>SOLUCIÓN ESPECIALIZADA PARA {vertical.name.toUpperCase()}</span>
                    </div>
                    <h1 className="font-heading text-6xl md:text-[8rem] font-black tracking-tighter mb-8 leading-[0.95] uppercase">
                        {vertical.name.split(' ')[0]} <br /> <span className="text-violet-400 font-outline-2 text-transparent italic" style={{ WebkitTextStroke: '1px #a78bfa' }}>INTELIGENTE</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-4xl font-light italic">
                        "{vertical.hook}" <br /> <span className="text-gray-600 font-medium not-italic text-lg">Eliminamos los obstáculos técnicos para que te enfoques en crecer tu negocio en el sector de {vertical.name.toLowerCase()}.</span>
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="#contacto" className="bg-violet-600 text-white px-12 py-6 rounded-full font-black hover:bg-violet-700 transition-all flex items-center gap-2 shadow-2xl shadow-violet-500/30 text-lg uppercase tracking-wider">
                            SOLICITAR DEMO AHORA
                            <ChevronRight className="w-6 h-6 animate-pulse" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Display */}
            <section className="py-24 relative bg-zinc-950/20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full group-hover:bg-violet-600/30 transition-all opacity-20 pointer-events-none" />
                        <div className="relative bg-black border border-white/10 p-2 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-violet-500/10 transform hover:rotate-1 transition-transform duration-700">
                            {vertical.image ? (
                                <img
                                    src={vertical.image}
                                    alt={`Dashboard de ${vertical.name}`}
                                    className="w-full h-full object-cover rounded-[3rem] opacity-70 group-hover:opacity-100 transition-opacity"
                                />
                            ) : (
                                <div className="bg-zinc-950 rounded-[3rem] p-24 aspect-square flex items-center justify-center border border-white/5">
                                    <Icon className="w-32 h-32 text-violet-500 opacity-20" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10">
                                <div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Módulo Core</div>
                                    <div className="text-xl font-black text-white italic uppercase tracking-tighter">Panel de Gestión 2026</div>
                                </div>
                                <Link href="#contacto" className="text-violet-400 font-black text-[10px] uppercase hover:text-white flex items-center gap-1 group/btn">
                                    Ver más <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] uppercase tracking-tighter italic">La Solución de <br /> <span className="text-violet-400">Alto Rendimiento</span></h2>
                        <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
                            {vertical.solution}. En BrandSoft no entregamos solo código; entregamos una infraestructura robusta diseñada bajo la metodología de <strong>Rápida Implementación (7-15 días)</strong>.
                        </p>

                        <div className="space-y-6">
                            {vertical.subsections && vertical.subsections.map((sub: any, i: number) => (
                                <div key={i} className="flex gap-4 p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-violet-500/20 transition-all">
                                    <div className="flex-shrink-0 w-12 h-12 bg-violet-600/10 border border-violet-500/20 rounded-2xl flex items-center justify-center text-violet-400">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase italic tracking-widest mb-2">{sub.title}</h4>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed">{sub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Long SEO Content (800+ Words Structure) */}
            <section className="py-24 border-t border-white/10 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 blur-[150px] pointer-events-none rounded-full" />
                <div className="max-w-4xl mx-auto px-4 text-gray-400 leading-relaxed space-y-12 prose prose-invert prose-violet prose-lg">
                    <h2 className="text-white text-4xl md:text-6xl font-black text-center mb-16 italic uppercase leading-none tracking-tighter">¿Cómo el Software Inteligente <br /> transforma el mercado de <br /> <span className="text-violet-500">{vertical.name.toLowerCase()}</span>?</h2>

                    <p className="text-2xl font-light leading-relaxed italic border-l-4 border-violet-500 pl-8">
                        "En el competitivo mercado de **{vertical.name}**, la eficiencia operativa no es negociable. La digitalización ha dejado de ser una opción tecnológica para convertirse en el pilar de la rentabilidad."
                    </p>

                    <p>
                        En **BrandSoft**, entendemos que tu negocio necesita herramientas que se adapten a la realidad del día a día, eliminando procesos manuales y errores humanos que cuestan dinero mensualmente. Nuestro desarrollo de software para {vertical.name.toLowerCase()} se enfoca en resolver cuellos de botella específicos mediante **IA Predictiva** y **Interfaces de Alta Velocidad (Edge Rendering)**.
                    </p>

                    <div className="bg-black/80 border border-white/5 p-12 rounded-[3.5rem] not-prose relative">
                        <div className="absolute top-8 right-8 animate-ping">
                            <div className="w-2 h-2 bg-violet-500 rounded-full" />
                        </div>
                        <h4 className="text-violet-400 font-black mb-6 uppercase tracking-[0.2em] flex items-center gap-3 text-sm italic"><TrendingUp className="w-5 h-5" /> Métricas de Rendimiento Real</h4>
                        <p className="text-base leading-relaxed mb-10 text-gray-400">
                            Los negocios enfocados en {vertical.name.toLowerCase()} que implementan interfaces impulsadas por **SEO Masivo** ven un incremento del 35% en sus leads directos en los primeros 90 días.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center group-hover:scale-110 transition-transform"><div className="text-4xl font-black text-white">99.9%</div><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Uptime Core</div></div>
                            <div className="text-center group-hover:scale-110 transition-transform"><div className="text-4xl font-black text-white">&lt;0.8s</div><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Carga LCP</div></div>
                            <div className="text-center group-hover:scale-110 transition-transform"><div className="text-4xl font-black text-white">+40%</div><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Ventas Netas</div></div>
                            <div className="text-center group-hover:scale-110 transition-transform"><div className="text-4xl font-black text-white">24/7</div><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-2">Soporte VIP</div></div>
                        </div>
                    </div>

                    <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">Posicionamiento SEO Local: Dominando {CITIES[0].name}, {CITIES[1].name} y más</h3>
                    <p>
                        No basta con tener el mejor sistema; tus clientes deben encontrarte cuando buscan soluciones específicas. Nuestras plataformas incluyen una estrategia de interlinking profundo que conecta cada solución con las principales ciudades del país. Aseguramos que para el sector de **{vertical.name.toLowerCase()}**, tu marca sea la primera opción en Google.
                    </p>

                    <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">Soporte Técnico y Evolución Tecnológica</h3>
                    <p>
                        El mundo digital cambia cada semana. Por eso, elegir a BrandSoft significa tener un equipo técnico de respaldo que actualiza tu infraestructura constantemente sin costes ocultos. Integramos agendamiento por WhatsApp, pasarelas de pago automatizadas y auditoría de datos en tiempo real.
                    </p>
                </div>
            </section>

            {/* Interlinking Cities (Día 6: Interlinking Pro) */}
            <section className="py-24 bg-zinc-950/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h4 className="text-center text-xs font-black text-gray-600 uppercase tracking-[0.5em] mb-12 italic">Soluciones Locales Prioritarias</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {CITIES.map((city, idx) => (
                            <Link
                                key={city.slug}
                                href={`/soluciones/${vertical.slug}/${city.slug}`}
                                className="group relative px-8 py-4 bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all"
                            >
                                <div className="absolute inset-0 bg-violet-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                                <span className="relative text-sm font-bold text-gray-400 group-hover:text-white flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-violet-500 group-hover:animate-bounce" />
                                    {vertical.name.split(' ')[0]} EN {city.name.toUpperCase()}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Sectors */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-16">Otros Sectores que Impulsamos</h4>
                    <div className="flex flex-wrap justify-center gap-8">
                        {VERTICALS.filter(v => v.slug !== slug).slice(0, 4).map(v => (
                            <Link key={v.slug} href={`/soluciones/${v.slug}`} className="group flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 mb-4">
                                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="group-hover:hidden uppercase font-black text-[10px]">{v.name.slice(0, 3)}</span>
                                </div>
                                <span className="text-xs font-bold text-gray-600 group-hover:text-violet-400 transition-colors">{v.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}

function ArrowUpRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    )
}
