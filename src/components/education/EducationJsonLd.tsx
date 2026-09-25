import type { EducationProgram, EducationRegion, FaqItem } from '@/data/education/types';
import { SITE_URL } from '@/lib/robots-config';
import { MENTOR } from '@/data/education/mentor';

export function faqJsonLd(faqs: readonly FaqItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };
}

export function courseJsonLd(program: EducationProgram, region: EducationRegion) {
    const copy = program.regions[region];
    return courseFieldsJsonLd({
        name: program.cardTitle,
        description: copy.metaDescription,
        path: program.path,
    });
}

export function courseFieldsJsonLd(fields: {
    name: string;
    description: string;
    path: string;
    inLanguage?: string;
    priceUsd?: number;
}) {
    const data: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: fields.name,
        description: fields.description,
        inLanguage: fields.inLanguage ?? 'es',
        courseMode: 'online',
        provider: {
            '@type': 'EducationalOrganization',
            name: 'BrandSoft Education',
            url: `${SITE_URL}/mentorias`,
        },
        instructor: {
            '@type': 'Person',
            name: MENTOR.name,
            jobTitle: MENTOR.role,
            sameAs: MENTOR.linkedin,
        },
        url: `${SITE_URL}${fields.path}`,
    };
    if (fields.priceUsd != null) {
        data.offers = {
            '@type': 'Offer',
            price: fields.priceUsd,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}${fields.path}`,
        };
    }
    return data;
}

export function JsonLd({ data }: { data: unknown }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
