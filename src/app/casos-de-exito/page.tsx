import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CaseStudiesGrid from '@/components/CaseStudiesGrid';
import Contact from '@/components/Contact';
import { whatsAppHref } from '@/lib/contact';
import { Calendar, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Casos de éxito | Proyectos BrandSoft',
    description:
        'Resultados en desarrollo, marketing y SEO para marcas en Colombia y el exterior. Solicite referencias o agende demostración.',
    alternates: { canonical: '/casos-de-exito' },
};

export default function CasosDeExitoPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <Navbar />
            <section className="py-16 px-4 max-w-5xl mx-auto text-center border-b border-white/10">
                <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">Casos de éxito</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    Cada proyecto tiene una historia: el momento en que el cliente entendió que perdía plata por no
                    actuar, y cómo lo cambiamos.{' '}
                    <Link href="/industrias" className="text-violet-400 font-bold hover:underline">
                        Ver industrias
                    </Link>
                    .
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/#diagnostico"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 font-black text-sm uppercase"
                    >
                        <Calendar className="w-5 h-5" aria-hidden />
                        Agenda un diagnóstico
                    </Link>
                    <a
                        href={whatsAppHref(
                            'Vi los casos de éxito y quiero un diagnóstico para mi empresa.',
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-emerald-500/50 text-emerald-400 font-black text-sm uppercase"
                    >
                        <ClipboardCheck className="w-5 h-5" aria-hidden />
                        WhatsApp
                    </a>
                </div>
            </section>
            <CaseStudiesGrid />
            <Contact />
        </main>
    );
}
