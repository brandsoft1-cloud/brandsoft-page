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
                allow: '/',
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
