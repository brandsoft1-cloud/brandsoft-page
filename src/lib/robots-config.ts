import type { Metadata } from 'next';

/** URL canónica del sitio (SEO, sitemap, robots). */
export const SITE_URL = 'https://brandsoft.com.co' as const;

/**
 * Meta robots por defecto para todo el sitio.
 * Las páginas pueden sobreescribir con `export const metadata` local.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const defaultRobotsMetadata: Metadata['robots'] = {
    index: true,
    follow: true,
    /** No cachear la versión “congelada” en SERP si actualizas contenido con frecuencia */
    nocache: false,
    googleBot: {
        index: true,
        follow: true,
        /** Imágenes amplias en resultados cuando aplique */
        'max-image-preview': 'large',
        /** Sin límite artificial de snippet (valor que Google interpreta como ilimitado) */
        'max-snippet': -1,
        'max-video-preview': -1,
    },
};
