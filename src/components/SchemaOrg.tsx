'use client';

export default function SchemaOrg() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "BrandSoft",
        "url": "https://brandsoft.com.co",
        "logo": "https://brandsoft.com.co/logo.png",
        "image": "https://brandsoft.com.co/og-image.jpg",
        "description": "Agencia de software experto en Next.js, SEO Técnico e Inteligencia Artificial impulsada por Sendell. Transformación digital de alto nivel para empresas B2B.",
        "telephone": "+573213296957",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bogotá, Colombia",
            "addressLocality": "Bogotá",
            "addressRegion": "Cundinamarca",
            "postalCode": "110111",
            "addressCountry": "CO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 4.60971,
            "longitude": -74.08175
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.linkedin.com/in/mauricio-forero-acosta"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Tecnología",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Desarrollo de Software a la Medida (Next.js)",
                        "description": "Aplicaciones web escalables y optimizadas para máxima velocidad y SEO."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Técnico y CRO",
                        "description": "Auditorías profundas y optimización de conversión para generar leads constantes."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agentes de Inteligencia Artificial (Sendell)",
                        "description": "Integración de chatbots inteligentes y automatización operacional con IA."
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
