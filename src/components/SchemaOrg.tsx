'use client';

const BASE = 'https://brandsoft.com.co';

/**
 * @graph: Organization + WebSite para entidad clara frente a Google.
 * Amplía sameAs con URLs reales de Clutch/G2 cuando existan.
 */
export default function SchemaOrg() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${BASE}/#organization`,
                name: 'BrandSoft',
                alternateName: 'BrandSoft Colombia',
                url: BASE,
                logo: `${BASE}/logo.png`,
                image: `${BASE}/og-image.jpg`,
                description:
                    'Software con inteligencia artificial, SEO técnico, GEO/LLMO y generación de leads B2B para empresas en Colombia y Latinoamérica.',
                telephone: '+573213296957',
                email: 'contacto@brandsoft.com.co',
                priceRange: '$$$',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bogotá',
                    addressRegion: 'Cundinamarca',
                    postalCode: '110111',
                    addressCountry: 'CO',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 4.60971,
                    longitude: -74.08175,
                },
                sameAs: [
                    'https://www.linkedin.com/in/mauricio-forero-acosta',
                    /* 'https://clutch.co/profile/...', */
                    /* 'https://www.g2.com/products/...', */
                ],
                knowsAbout: [
                    'Inteligencia artificial aplicada',
                    'Desarrollo de software a la medida',
                    'SEO técnico',
                    'Generative Engine Optimization',
                    'Account-based marketing',
                    'Generación de leads B2B',
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Servicios BrandSoft',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Desarrollo de software con IA',
                                url: `${BASE}/desarrollo-software-ia`,
                                description:
                                    'Agentes conversacionales, RPA y analítica predictiva para empresas.',
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Posicionamiento SEO y GEO',
                                url: `${BASE}/posicionamiento-seo-geo`,
                                description:
                                    'Core Web Vitals, SEO técnico y visibilidad en motores generativos.',
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Generación de leads B2B',
                                url: `${BASE}/generacion-leads-b2b`,
                                description: 'ABM, prospección automatizada y MQL/SQL con CRM.',
                            },
                        },
                    ],
                },
            },
            {
                '@type': 'WebSite',
                '@id': `${BASE}/#website`,
                url: BASE,
                name: 'BrandSoft',
                inLanguage: 'es-CO',
                publisher: { '@id': `${BASE}/#organization` },
            },
        ],
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
}
