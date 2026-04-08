import { SITE_URL } from '@/lib/robots-config';

/** Base canónica sin barra final (ej. https://brandsoft.com.co). */
export function getSitemapBaseUrl(): string {
    return SITE_URL.replace(/\/+$/, '');
}

/**
 * URL absoluta consistente para el sitemap (sin dobles barras, sin barra final en home).
 */
export function toAbsoluteUrl(pathname: string): string {
    const base = getSitemapBaseUrl();
    if (!pathname || pathname === '/') {
        return base;
    }
    const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `${base}${path}`;
}

/** Evita lastModified inválido en el XML (Search Console rechaza fechas mal formadas). */
export function safeLastModified(value: unknown, fallback: Date): Date {
    if (value == null || value === '') return fallback;
    const d = new Date(value as string);
    return Number.isNaN(d.getTime()) ? fallback : d;
}
