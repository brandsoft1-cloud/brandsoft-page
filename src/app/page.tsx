import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import SolutionsHome from '@/components/solutions/SolutionsHome';
import { SITE_URL } from '@/lib/robots-config';

export const metadata: Metadata = {
    title: 'BrandSoft | Crecimiento digital, SEO y automatización para empresas',
    description:
        'Atrae clientes, convierte oportunidades y automatiza tu crecimiento. Marketing, SEO/GEO, desarrollo de software y automatización con IA para pymes y equipos B2B en Colombia y LatAm.',
    keywords: [
        'crecimiento digital empresas',
        'generación de leads B2B',
        'SEO técnico Colombia',
        'automatización con IA',
        'desarrollo software a medida',
        'BrandSoft',
    ],
    alternates: { canonical: '/' },
    openGraph: {
        title: 'BrandSoft | Atrae. Convierte. Automatiza.',
        description:
            'Socio de crecimiento digital: captación, SEO, web, software y automatización conectados.',
        url: SITE_URL,
        siteName: 'BrandSoft',
        locale: 'es_CO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BrandSoft | Atrae. Convierte. Automatiza.',
        description:
            'Marketing, SEO, software y automatización con IA para empresas que quieren crecer con un sistema conectado.',
    },
};

export default function Home() {
    return (
        <main className="min-h-screen relative selection:bg-violet-500/30">
            <Navbar />
            <SolutionsHome />
        </main>
    );
}
