import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { CITIES, SERVICES } from "@/data/seo-config";
import { notFound } from 'next/navigation';
import {
    Zap,
    MapPin,
    ChevronRight,
    MessageSquare,
    ShieldCheck,
    ZapIcon,
    CheckCircle,
    Layout,
} from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: {
        slug: string;
        city: string;
    };
}

export async function generateStaticParams() {
    const params = [];
    for (const service of SERVICES) {
        for (const city of CITIES) {
            params.push({ slug: service.slug, city: city.slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const service = SERVICES.find(s => s.slug === params.slug);
    const city = CITIES.find(c => c.slug === params.city);

    if (!service || !city) return { title: 'Página no encontrada' };

    return {
        title: `${service.name} en ${city.name} | Experiencia Senior | BrandSoft`,
        description: `¿Buscas ${service.name} en ${city.name}? Especialistas en software de alto rendimiento, SEO técnico e IA. Impulsa tu empresa en ${city.context} con BrandSoft.`,
        alternates: {
            canonical: `/servicios/${params.slug}/${params.city}`,
        }
    };
}

export default async function LocalServicePage({ params }: PageProps) {
    const { slug, city: citySlug } = params;
    const service = SERVICES.find(s => s.slug === slug);
    const city = CITIES.find(c => c.slug === citySlug);

    if (!service || !city) notFound();

    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-violet-600/10 blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-6">
                        <MapPin className="w-3 h-3" />
                        <span>EXCLUSIVO PARA {city.name.toUpperCase()}</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Expertos en <span className="text-violet-400">{service.name}</span> <br /> en {city.name}
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                        Lideramos la infraestructura digital en {city.name}. Diseñamos soluciones de {service.name.toLowerCase()} que escalan al ritmo del mercado en {city.context}.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="#contacto" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-violet-400 hover:text-white transition-all flex items-center gap-2">
                            Cotizar proyecto en {city.name}
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local Content Section */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Por qué elegir BrandSoft en <span className="text-violet-400">{city.name}</span>?</h2>
                            <div className="space-y-6">
                                {[
                                    { t: 'Comprensión Local', d: `Entendemos los desafíos únicos de las empresas en ${city.name}, desde el sector industrial hasta las startups tecnológicas.` },
                                    { t: 'Tecnología Next-Gen', d: 'Implementamos el stack de software más rápido disponible para que tu negocio nunca se detenga.' },
                                    { t: 'Soporte Directo', d: 'Atención personalizada y ágil para garantizar el uptime de tu plataforma.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><CheckCircle className="w-5 h-5 text-violet-400" /></div>
                                        <div>
                                            <h4 className="text-white font-bold">{item.t}</h4>
                                            <p className="text-gray-400 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layout className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Métricas Proyectadas</h3>
                            <p className="text-gray-400 mb-8 text-sm">Al implementar {service.name.toLowerCase()} con BrandSoft en {city.name}, garantizamos:</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl">
                                    <div className="text-3xl font-bold text-violet-400">&lt;1s</div>
                                    <div className="text-[10px] text-gray-500">Carga LCP</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl">
                                    <div className="text-3xl font-bold text-violet-400">99.9%</div>
                                    <div className="text-[10px] text-gray-500">Uptime Cloud</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEO Text Core */}
                    <div className="prose prose-invert max-w-4xl mx-auto text-gray-400 leading-relaxed">
                        <p>
                            En **{city.name}**, la competencia digital es cada vez más agresiva. Ya no basta con tener un sitio web; se requiere una arquitectura de alto rendimiento que domine los **Core Web Vitals**. Como especialistas en **{service.name}**, ayudamos a las organizaciones líderes de {city.name} a migrar de sistemas obsoletos hacia aplicaciones modernas impulsadas por IA.
                        </p>
                        <p>
                            Nuestro enfoque en **{city.name}** combina el conocimiento profundo de la audiencia local con estándares internacionales de codificación. Atendemos desde la zona industrial hasta los hubs de innovación en {city.context}, asegurando que cada línea de código contribuya al ROI de nuestros clientes.
                        </p>
                        <h3 className="text-white text-2xl font-bold mt-12 mb-6 text-center">Implementación de {service.name} por Sector</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:border-violet-500/30">
                                <h4 className="text-white font-bold mb-2">B2B e Industrial</h4>
                                <p className="text-sm">Optimización de procesos internos y captación de leads calificados por zona.</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:border-violet-500/30">
                                <h4 className="text-white font-bold mb-2">Retail y Servicios</h4>
                                <p className="text-sm">E-commerce de carga rápida y sistemas de agendamiento inteligente con IA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Local */}
            <section className="py-24 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
                        <MessageSquare className="text-violet-400" />
                        Preguntas Frecuentes en {city.name}
                    </h2>
                    <div className="space-y-6">
                        {[
                            { q: `¿Cuánto tiempo toma un proyecto de ${service.name.toLowerCase()}?`, a: `Normalmente entre 4 a 8 semanas para un MVP profesional escalable en ${city.name}.` },
                            { q: `¿Ofrecen soporte presencial en ${city.name}?`, a: 'Sí, contamos con atención remota prioritaria y visitas técnicas programadas en la zona metropolitana.' },
                            { q: '¿El software incluye optimización para Google?', a: 'Absolutamente. Cada desarrollo nuestro nace optimizado para SEO técnico de serie.' }
                        ].map((f, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-lg font-bold text-white mb-2">{f.q}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interlinking dinámico local */}
            <section className="py-12 bg-white/5 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center mb-6">Otros destinos populares</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {CITIES.filter(c => c.slug !== citySlug).map(c => (
                            <Link key={c.slug} href={`/servicios/${slug}/${c.slug}`} className="text-xs text-gray-400 hover:text-violet-400 transition-colors">
                                {service.name} en {c.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
