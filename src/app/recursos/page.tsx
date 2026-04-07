import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { whatsAppHref } from '@/lib/contact';
import { Download, Mail, FileSpreadsheet, Calculator, BookOpen } from 'lucide-react';
import LeadMagnetForm from '@/components/b2b/LeadMagnetForm';

export const metadata: Metadata = {
    title: 'Recursos gratuitos | Lead magnets B2B — BrandSoft',
    description:
        'Calculadoras de ROI para IA, plantillas de embudos y guías descargables. Registro con email corporativo; integración CRM recomendada (HubSpot, Zoho, Pipedrive).',
    alternates: { canonical: '/recursos' },
    keywords: [
        'plantilla embudo B2B',
        'ROI inteligencia artificial',
        'guía SEO técnico descargable',
        'lead magnet B2B Colombia',
    ],
};

const MAGNETS = [
    {
        id: 'roi-ia',
        title: 'Calculadora de ROI para piloto de IA',
        desc: 'Estimación de ahorro horas-hombre y costo de oportunidad para presentar a CFO.',
        icon: Calculator,
    },
    {
        id: 'embudo-b2b',
        title: 'Plantilla de embudo MQL → SQL',
        desc: 'Etapas, SLAs y campos mínimos para HubSpot / Zoho / Pipedrive.',
        icon: FileSpreadsheet,
    },
    {
        id: 'geo-checklist',
        title: 'Checklist GEO / LLMO para una URL money page',
        desc: 'Entidad, FAQ, datos estructurados y formato respondible para IA generativa.',
        icon: BookOpen,
    },
];

export default function RecursosPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <Navbar />
            <section className="py-20 px-4 max-w-4xl mx-auto">
                <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">Centro de recursos</h1>
                <p className="text-xl text-gray-400 mb-4">
                    Lead magnets pensados para <strong className="text-white">tomadores de decisión</strong>: CTO, CMO
                    y CEO. A cambio pedimos <strong className="text-white">email corporativo</strong> para nutrir su CRM
                    (sincronice el formulario con HubSpot, Zoho o Pipedrive vía API o embed oficial).
                </p>
                <p className="text-sm text-violet-400/90 mb-12">
                    Nota técnica: conecte el componente de formulario a su proveedor CRM en{' '}
                    <code className="text-white/80">LeadMagnetForm.tsx</code> (webhook o form ID).
                </p>

                <div className="mb-12 p-6 rounded-2xl border border-violet-500/30 bg-violet-950/20">
                    <p className="text-xs font-black uppercase tracking-widest text-violet-400 mb-2">
                        Recurso destacado para captar clientes
                    </p>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Cómo posicionar en Google gratis (enfoque B2B con CTA)
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Subpágina y artículo listos para atraer demanda orgánica y convertir en auditorías / demos.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/como-posicionar-google-gratis"
                            className="inline-flex items-center px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-black text-xs uppercase tracking-wide"
                        >
                            Ver subpágina comercial
                        </Link>
                        <Link
                            href="/blog/como-posicionar-google-gratis-b2b-colombia"
                            className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/15 hover:border-violet-500/40 text-white font-bold text-xs uppercase tracking-wide"
                        >
                            Ver artículo del blog
                        </Link>
                        <Link
                            href="/paginas-web-colombia"
                            className="inline-flex items-center px-5 py-2.5 rounded-full border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-wide"
                        >
                            Ver páginas web por ciudad
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {MAGNETS.map((m) => {
                        const Icon = m.icon;
                        return (
                            <div
                                key={m.id}
                                className="p-6 rounded-2xl border border-white/10 bg-zinc-950/60 flex flex-col"
                            >
                                <Icon className="w-10 h-10 text-violet-400 mb-4" />
                                <h2 className="text-lg font-bold text-white mb-2">{m.title}</h2>
                                <p className="text-sm text-gray-500 flex-1">{m.desc}</p>
                                <a
                                    href={`#solicitar-${m.id}`}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"
                                >
                                    <Download className="w-4 h-4" />
                                    Solicitar acceso
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div id="solicitar-roi-ia" className="scroll-mt-28 mb-16">
                    <LeadMagnetForm
                        magnetId="roi-ia"
                        title="Solicitar: ROI IA"
                        subtitle="Le enviamos enlace o archivo según configure su equipo en el CRM."
                    />
                </div>
                <div id="solicitar-embudo-b2b" className="scroll-mt-28 mb-16">
                    <LeadMagnetForm
                        magnetId="embudo-b2b"
                        title="Solicitar: plantilla embudo"
                        subtitle="Compatible con importación CSV o notas en CRM."
                    />
                </div>
                <div id="solicitar-geo-checklist" className="scroll-mt-28 mb-16">
                    <LeadMagnetForm
                        magnetId="geo-checklist"
                        title="Solicitar: checklist GEO"
                        subtitle="PDF + ejemplo de marcado FAQ para una money page."
                    />
                </div>

                <div className="rounded-2xl border border-white/10 p-8 bg-violet-950/20 text-center">
                    <Mail className="w-10 h-10 text-violet-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">
                        ¿Prefiere hablar antes? Use el mismo flujo que el resto del sitio: respuesta prioritaria.
                    </p>
                    <a
                        href={whatsAppHref('Escribo desde /recursos y quiero hablar de lead magnets / CRM.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-600 font-black text-sm uppercase"
                    >
                        WhatsApp al equipo
                    </a>
                </div>

                <p className="mt-10 text-center">
                    <Link href="/blog" className="text-violet-400 font-bold hover:underline">
                        ← Volver al blog
                    </Link>
                </p>
            </section>
            <Contact />
        </main>
    );
}
