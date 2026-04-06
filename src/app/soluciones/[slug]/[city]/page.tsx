import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { VERTICALS, CITIES } from "@/data/seo-config";
import { notFound } from 'next/navigation';
import {
    Zap,
    ChevronRight,
    MapPin,
    CheckCircle,
    MessageSquare,
    ChevronLeft,
    Layout,
    TrendingUp,
    ShieldCheck,
    ZapIcon
} from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        slug: string;
        city: string;
    }>;
}

export async function generateStaticParams() {
    const params = [];
    for (const vertical of VERTICALS) {
        for (const city of CITIES) {
            params.push({ slug: vertical.slug, city: city.slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, city: cityParam } = await params;
    const vertical = VERTICALS.find(v => v.slug === slug);
    const city = CITIES.find(c => c.slug === cityParam);

    if (!vertical || !city) return { title: 'Página no encontrada' };

    return {
        title: `Software para ${vertical.name} en ${city.name} | BrandSoft`,
        description: `Expertos en desarrollo de software y SEO para ${vertical.name} en ${city.name}. Optimiza tu negocio en ${city.context} con tecnología de alto rendimiento.`,
        alternates: {
            canonical: `/soluciones/${slug}/${cityParam}`,
        }
    };
}

export default async function VerticalCityPage({ params }: PageProps) {
    const { slug, city: citySlug } = await params;
    const vertical = VERTICALS.find(v => v.slug === slug);
    const city = CITIES.find(c => c.slug === citySlug);

    if (!vertical || !city) notFound();

    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black text-white">
            <Navbar />

            {/* Breadcrumbs SEO */}
            <nav className="max-w-7xl mx-auto px-4 py-6 text-xs text-gray-500 flex items-center gap-2 uppercase tracking-widest font-bold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/soluciones" className="hover:text-white transition-colors">Soluciones</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href={`/soluciones/${vertical.slug}`} className="hover:text-white transition-colors">{vertical.name.split(' ')[0]}</Link>
                <ChevronRight className="w-3 h-3 text-violet-500" />
                <span className="text-violet-500">{city.name}</span>
            </nav>

            {/* Hero Section */}
            <section className="relative py-12 md:py-24 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/5 blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black mb-8 uppercase tracking-[0.2em] shadow-lg shadow-violet-500/5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>SOLUCIÓN PRIORITARIA EN {city.name.toUpperCase()}</span>
                    </div>
                    <h1 className="font-heading text-6xl md:text-[10rem] font-black tracking-tight mb-8 leading-[1] uppercase break-words">
                        {vertical.name.split(' ')[0]} <br /> <span className="text-violet-500 italic">en {city.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-4xl font-light">
                        Lideramos la infraestructura digital para el sector de {vertical.name.toLowerCase()} en {city.name}. {vertical.hook} Implementación en tiempo récord para dominar el mercado de {city.context}.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="#contacto" className="bg-white text-black px-12 py-6 rounded-full font-black hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-white/5 text-lg">
                            EMPEZAR PROYECTO HOY
                        </Link>
                        <Link href={`https://wa.me/573214567890?text=Hola, quiero una demo para mi negocio de ${vertical.name.toLowerCase()} en ${city.name}`} className="border border-white/20 px-12 py-6 rounded-full font-bold hover:bg-white/5 transition-all flex items-center gap-2 box-border text-lg">
                            WHATSAPP DIRECTO
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Mockup Section */}
            <section className="py-24 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Interfaz Real del Sistema</h2>
                        <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full" />
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-violet-600/30 blur-[120px] rounded-full group-hover:bg-violet-600/50 transition-all opacity-20 pointer-events-none" />
                        <div className="relative bg-black p-2 rounded-[3.5rem] border border-white/10 shadow-3xl shadow-violet-500/20 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-700">
                            <img
                                src={vertical.image}
                                alt={`Dashboard especializado para ${vertical.name} en ${city.name}`}
                                className="w-full h-full object-cover rounded-[3rem] opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                            <div className="absolute bottom-12 left-12 flex items-center gap-6">
                                <div>
                                    <div className="text-5xl font-black text-white mb-1 tracking-tighter">99.9%</div>
                                    <div className="text-[10px] text-violet-400 font-black tracking-widest uppercase">Disponibilidad en {city.name}</div>
                                </div>
                                <div className="h-12 w-px bg-white/10" />
                                <div>
                                    <div className="text-5xl font-black text-white mb-1 tracking-tighter">&lt;1s</div>
                                    <div className="text-[10px] text-violet-400 font-black tracking-widest uppercase">Carga LCP Local</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Localized Value Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">¿Por qué lideramos {vertical.name.toLowerCase()} en <span className="text-violet-400 font-outline-1">{city.name}</span>?</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                                Entendemos que el mercado en {city.context} exige rapidez y profesionalismo extremo. No basta con una web genérica; necesitas una herramienta que resuelva el desorden operativo y aumente tu conversión de leads localmente.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { t: 'Velocidad Latente', d: `En ${city.name}, el tiempo es dinero. Entregamos plataformas que cargan en milisegundos.` },
                                    { t: 'Atención Local B2B', d: `Conocemos los retos específicos de las empresas de ${vertical.name.toLowerCase()} en la zona.` },
                                    { t: 'Escalabilidad Garantizada', d: 'Tu software crecerá a medida que tu negocio se expande por toda Colombia.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 uppercase">{item.t}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-zinc-950 border border-white/5 p-12 rounded-[3.5rem] shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <TrendingUp className="w-32 h-32" />
                            </div>
                            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Impacto en {city.name}</h3>
                            <div className="space-y-8">
                                {vertical.subsections && vertical.subsections.map((sub: any, i: number) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all">
                                        <h5 className="text-violet-400 font-bold mb-2 uppercase text-xs tracking-widest">{sub.title}</h5>
                                        <p className="text-xs text-gray-500 leading-relaxed">{sub.desc} Optimizado específicamente para el comportamiento del usuario en {city.name}.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programmatic Content Block */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-4xl mx-auto px-4 prose prose-invert prose-violet prose-lg text-gray-400 text-center">
                    <h2 className="text-white text-3xl md:text-6xl font-black mb-16 italic uppercase leading-none">Implementación para <br /> {vertical.name} <br /> en {city.name}</h2>
                    <p className="text-2xl font-light leading-relaxed">
                        En **BrandSoft**, hemos perfeccionado un framework de desarrollo que permite a los negocios de **{vertical.name.toLowerCase()}** en **{city.name}** despegar digitalmente sin los retrasos de la industria tradicional.
                    </p>
                    <p>
                        Utilizamos un stack tecnológico basado en **Next.js 16**, lo que garantiza que tu plataforma en **{city.name}** sea la más rápida del sector. Esto no solo mejora la experiencia del usuario, sino que le indica a Google que tu negocio es la mejor opción para responder a las búsquedas locales en **{city.context}**.
                    </p>
                    <div className="flex justify-center my-12">
                        <div className="inline-flex gap-8 items-center p-8 bg-black border border-white/10 rounded-full">
                            <div className="text-center">
                                <div className="text-3xl font-black text-white">7-15</div>
                                <div className="text-[10px] text-gray-500 font-bold">DÍAS LANZAMIENTO</div>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div className="text-center">
                                <div className="text-3xl font-black text-white">24/7</div>
                                <div className="text-[10px] text-gray-500 font-bold">SOPORTE BOGOTÁ</div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm">
                        Nuestro enfoque en **{city.name}** combina el conocimiento profundo de la audiencia local con estándares internacionales de codificación. Atendemos desde la zona céntrica hasta las áreas empresariales periféricas, asegurando que cada línea de código contribuya al ROI de nuestros clientes.
                    </p>
                </div>
            </section>

            {/* Interlinking Pro Section */}
            <section className="py-24 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] text-center mb-12 font-black">Explorar otras zonas de servicio</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {CITIES.map(c => (
                            <Link
                                key={c.slug}
                                href={`/soluciones/${vertical.slug}/${c.slug}`}
                                className={`p-4 border rounded-2xl text-center text-xs font-bold transition-all ${c.slug === citySlug ? 'bg-violet-600 border-violet-600 text-white' : 'border-white/5 hover:border-violet-500 text-gray-500 hover:text-white'}`}
                            >
                                {vertical.name.split(' ')[0]} EN {c.name.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
