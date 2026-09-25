import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/robots-config';

/**
 * robots.txt servido en /robots.txt
 * - Permite indexación de páginas públicas
 * - Bloquea /api/ (rutas de servidor; no deben indexarse)
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/mentorias',
                    '/mentorias/career-pack',
                    '/mentorias/career-pack/co',
                    '/mentorias/career-pack/mx',
                    '/mentorias/career-pack/pe',
                    '/mentorias/career-pack/ar',
                    '/mentorias/career-pack/cl',
                    '/mentorias/career-pack/tx',
                    '/mentorias/producto-real',
                    '/mentorias/clientes-reales',
                    '/crear-pagina-web-con-ia',
                    '/crear-pagina-web-con-ia/co',
                    '/crear-pagina-web-con-ia/mx',
                    '/crear-pagina-web-con-ia/pe',
                    '/crear-pagina-web-con-ia/ar',
                    '/crear-pagina-web-con-ia/cl',
                    '/crear-pagina-web-con-ia/tx',
                ],
                disallow: ['/api/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
