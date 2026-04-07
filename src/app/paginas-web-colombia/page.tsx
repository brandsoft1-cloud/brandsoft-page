import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import JsonLdFaq from '@/components/b2b/JsonLdFaq';
import { CITIES } from '@/data/seo-config';
import { whatsAppHref } from '@/lib/contact';
import { Calendar, ClipboardCheck, ChevronRight } from 'lucide-react';

const TARGET_CITIES = CITIES.filter((c) =>
    ['bogota', 'medellin', 'cali', 'barranquilla'].includes(c.slug)
);

const faqs = [
    {
        q: '¿Qué incluye una página web profesional con enfoque comercial?',
        a: 'Estructura orientada a conversión, rendimiento técnico, SEO on-page y CTAs con seguimiento para ventas.',
    },
    {
        q: '¿Trabajan solo en Bogotá?',
        a: 'No. Atendemos Bogotá, Medellín, Cali, Barranquilla y más ciudades de Colombia con ejecución remota y reuniones estratégicas.',
    },
    {
        q: '¿Puedo usar esta web para captar leads B2B?',
        a: 'Sí. Diseñamos la arquitectura para atraer tráfico orgánico y convertirlo en oportunidades con WhatsApp + CRM.',
    },
];

export const metadata: Metadata = {
    title: 'Desarrollo de páginas web en Colombia | BrandSoft',
    description:
        'Páginas web de alto rendimiento para empresas en Bogotá, Medellín, Cali y Barranquilla. Diseño UX, SEO técnico y enfoque en captación de clientes.',
    alternates: { canonical: '/paginas-web-colombia' },
    keywords: [
        'paginas web colombia',
        'desarrollo de paginas web bogota',
        'diseño web medellin',
        'agencia web cali',
        'desarrollo web barranquilla',
    ],
};

export default function PaginasWebColombiaPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20 selection:bg-violet-500/30">
            <JsonLdFaq faqs={faqs} />
            <Navbar />

            <section className="py-20 px-4 border-b border-white/10">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Desarrollo de páginas web en <span className="text-violet-400 italic">Colombia</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Creamos sitios web rápidos, escalables y orientados a conversiones para empresas que quieren
                        atraer clientes por Google y cerrar oportunidades por WhatsApp y CRM.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <a
                            href={whatsAppHref(
                                'Hola BrandSoft, quiero agendar una demostración para desarrollo de página web en Colombia.'
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
                                'Hola BrandSoft, solicito auditoría gratuita de mi sitio web para mejorar posicionamiento y conversión.'
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

            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Ciudades principales</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {TARGET_CITIES.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/paginas-web/${city.slug}`}
                            className="p-6 rounded-2xl border border-white/10 bg-zinc-950/60 hover:border-violet-500/40 transition-colors group"
                        >
                            <p className="text-xs text-violet-400 font-black uppercase tracking-widest mb-2">
                                {city.name}
                            </p>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Páginas web en {city.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{city.context}</p>
                            <span className="text-sm text-emerald-400 font-bold inline-flex items-center gap-1">
                                Ver página <ChevronRight className="w-4 h-4" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="py-10 px-4 max-w-6xl mx-auto">
                <div className="rounded-2xl border border-white/10 p-8 bg-zinc-950/60">
                    <h2 className="text-2xl font-bold mb-3">Refuerza tu posicionamiento con contenido local</h2>
                    <p className="text-gray-400 mb-4">
                        Publicamos guías por ciudad para captar búsquedas como “páginas web en Bogotá” y derivarlas a
                        una conversación comercial.
                    </p>
                    <Link href="/blog" className="text-violet-400 font-bold hover:underline">
                        Ir al blog local →
                    </Link>
                </div>
            </section>

            <Contact />
        </main>
    );
}

