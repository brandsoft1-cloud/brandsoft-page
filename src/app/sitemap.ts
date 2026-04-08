import { MetadataRoute } from 'next';
import { CITIES, SERVICES, VERTICALS } from '@/data/seo-config';
import { INDUSTRIA_SLUGS } from '@/data/b2b-hub-structure';
import { MENTORIA_PILLARS } from '@/data/mentoria-seo';
import { PAGINAS_WEB_CIUDAD_SLUGS } from '@/data/paginas-web-ciudad';
import { getAllPosts } from '@/lib/mdx';
import { getSitemapBaseUrl, safeLastModified, toAbsoluteUrl } from '@/lib/sitemap-utils';

/** Regeneración periódica (Vercel): el XML se actualiza sin redeploy completo si cambia el contenido en runtime. */
export const revalidate = 86400;

/** Lectura de MDX con fs: forzar Node en ISR/serverless. */
export const runtime = 'nodejs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getSitemapBaseUrl();
    const now = new Date();
    const entries = new Map<string, MetadataRoute.Sitemap[number]>();

    const push = (entry: MetadataRoute.Sitemap[number]) => {
        const normalizedUrl = entry.url.replace(/\/+$/, '') || entry.url;
        entries.set(normalizedUrl, { ...entry, url: normalizedUrl });
    };

    // ——— 1) Core / money pages ———
    const corePaths: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
        { path: '/', changeFrequency: 'daily', priority: 1 },
        { path: '/desarrollo-software-ia', changeFrequency: 'weekly', priority: 0.98 },
        { path: '/posicionamiento-seo-geo', changeFrequency: 'weekly', priority: 0.98 },
        { path: '/generacion-leads-b2b', changeFrequency: 'weekly', priority: 0.98 },
        { path: '/industrias', changeFrequency: 'weekly', priority: 0.92 },
        ...INDUSTRIA_SLUGS.map((slug) => ({
            path: `/industrias/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.88,
        })),
        { path: '/recursos', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/como-posicionar-google-gratis', changeFrequency: 'weekly', priority: 0.94 },
        { path: '/paginas-web-colombia', changeFrequency: 'weekly', priority: 0.95 },
        ...PAGINAS_WEB_CIUDAD_SLUGS.map((city) => ({
            path: `/paginas-web/${city}`,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        })),
        { path: '/casos-de-exito', changeFrequency: 'weekly', priority: 0.92 },
        { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
        { path: '/mentorias', changeFrequency: 'weekly', priority: 0.9 },
        ...MENTORIA_PILLARS.map((p) => ({
            path: p.path,
            changeFrequency: 'weekly' as const,
            priority: 0.86,
        })),
    ];

    corePaths.forEach(({ path, changeFrequency, priority }) => {
        push({
            url: toAbsoluteUrl(path),
            lastModified: now,
            changeFrequency,
            priority,
        });
    });

    // ——— 2) Legacy / apoyo ———
    const legacyPaths: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
        { path: '/desarrollo-web', changeFrequency: 'weekly', priority: 0.82 },
        { path: '/desarrollo-web/ecommerce', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/marketing-digital', changeFrequency: 'weekly', priority: 0.82 },
        { path: '/marketing-digital/seo-tecnico', changeFrequency: 'weekly', priority: 0.9 },
        { path: '/ia-automatizaciones', changeFrequency: 'weekly', priority: 0.88 },
        { path: '/agente-ai', changeFrequency: 'monthly', priority: 0.72 },
        { path: '/web-ia', changeFrequency: 'weekly', priority: 0.8 },
        { path: '/soluciones', changeFrequency: 'daily', priority: 0.95 },
    ];

    legacyPaths.forEach(({ path, changeFrequency, priority }) => {
        push({
            url: toAbsoluteUrl(path),
            lastModified: now,
            changeFrequency,
            priority,
        });
    });

    // ——— 3) Blog (MDX) ———
    const posts = await getAllPosts();
    posts.forEach((post) => {
        push({
            url: toAbsoluteUrl(`/blog/${post.slug}`),
            lastModified: safeLastModified(post.frontmatter.date, now),
            changeFrequency: 'monthly',
            priority: 0.72,
        });
    });

    // ——— 4) Servicios × ciudad ———
    SERVICES.forEach((service) => {
        CITIES.forEach((city) => {
            push({
                url: toAbsoluteUrl(`/servicios/${service.slug}/${city.slug}`),
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    });

    // ——— 5) Soluciones verticales ———
    VERTICALS.forEach((vertical) => {
        push({
            url: toAbsoluteUrl(`/soluciones/${vertical.slug}`),
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        });
    });

    // ——— 6) Soluciones × ciudad ———
    VERTICALS.forEach((vertical) => {
        CITIES.forEach((city) => {
            push({
                url: toAbsoluteUrl(`/soluciones/${vertical.slug}/${city.slug}`),
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        });
    });

    const list = Array.from(entries.values()).sort((a, b) => a.url.localeCompare(b.url));
    return list;
}
