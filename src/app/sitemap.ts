import { MetadataRoute } from 'next';
import { CITIES, SERVICES, VERTICALS } from '@/data/seo-config';
import { getAllPosts } from '@/lib/mdx';
import { SITE_URL } from '@/lib/robots-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = SITE_URL;
    const now = new Date();
    const entries = new Map<string, MetadataRoute.Sitemap[number]>();

    const pushUrl = (entry: MetadataRoute.Sitemap[number]) => {
        entries.set(entry.url, entry);
    };

    // 1) PÁGINAS CORE / MONEY PAGES (alta intención comercial)
    const corePages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
        { url: `${baseUrl}/desarrollo-software-ia`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
        { url: `${baseUrl}/posicionamiento-seo-geo`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
        { url: `${baseUrl}/generacion-leads-b2b`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
        { url: `${baseUrl}/industrias`, lastModified: now, changeFrequency: 'weekly', priority: 0.92 },
        { url: `${baseUrl}/industrias/ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
        { url: `${baseUrl}/industrias/finanzas`, lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
        { url: `${baseUrl}/industrias/salud`, lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
        { url: `${baseUrl}/recursos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/como-posicionar-google-gratis`, lastModified: now, changeFrequency: 'weekly', priority: 0.94 },
        { url: `${baseUrl}/paginas-web-colombia`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/paginas-web/bogota`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/paginas-web/medellin`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/paginas-web/cali`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/paginas-web/barranquilla`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/casos-de-exito`, lastModified: now, changeFrequency: 'weekly', priority: 0.92 },
        { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/mentorias`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/mentorias/ingenieria-software`, lastModified: now, changeFrequency: 'weekly', priority: 0.86 },
        { url: `${baseUrl}/mentorias/marketing-digital`, lastModified: now, changeFrequency: 'weekly', priority: 0.86 },
        { url: `${baseUrl}/mentorias/finanzas`, lastModified: now, changeFrequency: 'weekly', priority: 0.86 },
    ];
    corePages.forEach(pushUrl);

    // 2) RUTAS LEGACY / APOYO (siguen captando intención y enlaces)
    const legacyPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/desarrollo-web`, lastModified: now, changeFrequency: 'weekly', priority: 0.82 },
        { url: `${baseUrl}/desarrollo-web/ecommerce`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/marketing-digital`, lastModified: now, changeFrequency: 'weekly', priority: 0.82 },
        { url: `${baseUrl}/marketing-digital/seo-tecnico`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/ia-automatizaciones`, lastModified: now, changeFrequency: 'weekly', priority: 0.88 },
        { url: `${baseUrl}/agente-ai`, lastModified: now, changeFrequency: 'monthly', priority: 0.72 },
        { url: `${baseUrl}/web-ia`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/soluciones`, lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    ];
    legacyPages.forEach(pushUrl);

    // 3) BLOG MDX
    const posts = await getAllPosts();
    posts.forEach((post) => {
        pushUrl({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.frontmatter.date || now),
            changeFrequency: 'monthly',
            priority: 0.72,
        });
    });

    // 4) SEO PROGRAMÁTICO SERVICIOS x CIUDAD
    SERVICES.forEach((service) => {
        CITIES.forEach((city) => {
            pushUrl({
            url: `${baseUrl}/servicios/${service.slug}/${city.slug}`,
                lastModified: now,
            changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    });

    // 5) SOLUCIONES VERTICALES (hub)
    VERTICALS.forEach((vertical) => {
        pushUrl({
        url: `${baseUrl}/soluciones/${vertical.slug}`,
            lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.9,
        });
    });

    // 6) SOLUCIONES VERTICALES x CIUDAD
    VERTICALS.forEach((vertical) => {
        CITIES.forEach((city) => {
            pushUrl({
            url: `${baseUrl}/soluciones/${vertical.slug}/${city.slug}`,
                lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
            });
        });
    });

    return Array.from(entries.values());
}
