import { MetadataRoute } from 'next';
import { CITIES, SERVICES, VERTICALS } from '@/data/seo-config';
import { getAllPosts } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://brandsoft.com.co';
    const lastModified = new Date();

    // 1. PÁGINAS CORE (YA ESTABLECIDAS)
    const corePages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
        { url: `${baseUrl}/desarrollo-web`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/desarrollo-web/ecommerce`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/marketing-digital`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/marketing-digital/seo-tecnico`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/ia-automatizaciones`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/agente-ai`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/mentorias`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
        { url: `${baseUrl}/mentorias/ingenieria-software`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/mentorias/marketing-digital`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/mentorias/finanzas`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/soluciones`, lastModified, changeFrequency: 'daily', priority: 1 },
    ];

    // 2. BLOG MDX POSTS
    const posts = await getAllPosts();
    const blogPostsURLs: MetadataRoute.Sitemap = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date || lastModified),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // 3. SERVICIOS x CIUDAD (SEO PROGRAMÁTICO 1.0)
    const serviceCityURLs: MetadataRoute.Sitemap = SERVICES.flatMap(service =>
        CITIES.map(city => ({
            url: `${baseUrl}/servicios/${service.slug}/${city.slug}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        }))
    );

    // 4. SOLUCIONES VERTICALES (SEO PROGRAMÁTICO NICHOS)
    const verticalURLs: MetadataRoute.Sitemap = VERTICALS.map(vertical => ({
        url: `${baseUrl}/soluciones/${vertical.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // 5. SOLUCIONES VERTICALES x CIUDAD (SEO PROGRAMÁTICO 2.0)
    const verticalCityURLs: MetadataRoute.Sitemap = VERTICALS.flatMap(vertical =>
        CITIES.map(city => ({
            url: `${baseUrl}/soluciones/${vertical.slug}/${city.slug}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        }))
    );

    return [...corePages, ...blogPostsURLs, ...serviceCityURLs, ...verticalURLs, ...verticalCityURLs];
}
