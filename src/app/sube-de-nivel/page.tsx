import type { Metadata } from 'next';
import BookingLanding from '@/components/booking/BookingLanding';

export const metadata: Metadata = {
    title: 'Sube de nivel | Mauricio Forero x BrandSoft',
    description:
        'Mentoria, webinars y estrategia tech para subir de nivel en carrera, equipo y negocio. Contacto directo por WhatsApp.',
    keywords: [
        'subir de nivel desarrollo software',
        'mentoria tech liderazgo',
        'webinars corporativos tecnologia',
        'arquitectura software consultoria',
    ],
    alternates: {
        canonical: '/sube-de-nivel',
    },
    openGraph: {
        title: 'Sube de nivel | Mauricio Forero',
        description:
            'Landing de contacto directo para mentorias, webinars y proyectos de software con enfoque en resultados.',
        url: '/sube-de-nivel',
    },
};

export default function SubeDeNivelPage() {
    return <BookingLanding />;
}
