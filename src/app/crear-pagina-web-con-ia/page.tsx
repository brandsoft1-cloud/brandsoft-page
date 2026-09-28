import type { Metadata } from 'next';
import EducationFrame from '@/components/education/EducationFrame';
import WebConIaView from '@/components/education/WebConIaView';
import { courseFieldsJsonLd, faqJsonLd, JsonLd } from '@/components/education/EducationJsonLd';
import { WEB_CON_IA } from '@/data/education/web-con-ia';
import { getWebConIaHubCopy, WEB_CON_IA_GEO_MARKETS } from '@/data/education/web-con-ia-geo';

export async function generateMetadata(): Promise<Metadata> {
    const copy = getWebConIaHubCopy();
    const languages: Record<string, string> = { 'x-default': WEB_CON_IA.path };
    for (const m of WEB_CON_IA_GEO_MARKETS) {
        languages[m.hreflang] = m.path;
    }

    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        keywords: [
            WEB_CON_IA.keyword,
            'crear página web con IA sin programar',
            'webinar Next.js IA',
            'crear landing con IA',
            'Vercel',
            'Colombia',
            'México',
            'Perú',
            'Argentina',
            'Chile',
            'Texas',
            'LatAm',
        ],
        alternates: {
            canonical: WEB_CON_IA.path,
            languages,
        },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: WEB_CON_IA.path,
            locale: 'es_CO',
            type: 'website',
        },
    };
}

export default function WebConIaHubPage() {
    const copy = getWebConIaHubCopy();

    return (
        <EducationFrame>
            <JsonLd
                data={courseFieldsJsonLd({
                    name: WEB_CON_IA.cardTitle,
                    description: copy.metaDescription,
                    path: WEB_CON_IA.path,
                    priceUsd: WEB_CON_IA.priceLatamUsd,
                })}
            />
            <JsonLd data={faqJsonLd([...copy.faqs])} />
            <WebConIaView copy={copy} geo={null} marketLabel="LatAm" />
        </EducationFrame>
    );
}
