import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EducationFrame from '@/components/education/EducationFrame';
import WebConIaView from '@/components/education/WebConIaView';
import { courseFieldsJsonLd, faqJsonLd, JsonLd } from '@/components/education/EducationJsonLd';
import { WEB_CON_IA } from '@/data/education/web-con-ia';
import {
    getWebConIaGeoPage,
    isWebConIaGeoSlug,
    webConIaGeoStaticParams,
} from '@/data/education/web-con-ia-geo';
import { resolveWebConIaPricing } from '@/data/education/web-con-ia';

type Props = { params: Promise<{ geo: string }> };

export function generateStaticParams() {
    return webConIaGeoStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { geo: raw } = await params;
    if (!isWebConIaGeoSlug(raw)) return {};
    const { market, copy, languageAlternates } = getWebConIaGeoPage(raw);
    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        keywords: [market.keyword, WEB_CON_IA.cardTitle, market.countryName],
        alternates: {
            canonical: market.path,
            languages: languageAlternates,
        },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: market.path,
            locale: market.ogLocale,
            type: 'website',
        },
    };
}

export default async function WebConIaGeoRoute({ params }: Props) {
    const { geo: raw } = await params;
    if (!isWebConIaGeoSlug(raw)) notFound();

    const { market, copy } = getWebConIaGeoPage(raw);
    const pricing = resolveWebConIaPricing(market.slug);

    return (
        <EducationFrame>
            <JsonLd
                data={courseFieldsJsonLd({
                    name: `${WEB_CON_IA.cardTitle} · ${market.countryName}`,
                    description: copy.metaDescription,
                    path: market.path,
                    priceUsd: pricing.specialUsd,
                })}
            />
            <JsonLd data={faqJsonLd([...copy.faqs])} />
            <WebConIaView copy={copy} geo={market.slug} marketLabel={market.countryName} />
        </EducationFrame>
    );
}
