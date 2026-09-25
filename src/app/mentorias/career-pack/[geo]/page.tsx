import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EducationFrame from '@/components/education/EducationFrame';
import CareerPackView from '@/components/education/CareerPackView';
import { courseFieldsJsonLd, faqJsonLd, JsonLd } from '@/components/education/EducationJsonLd';
import { CAREER_PACK } from '@/data/education/career-pack';
import {
    careerGeoStaticParams,
    getCareerGeoPage,
    isCareerGeoSlug,
} from '@/data/education/career-pack-geo';
import { regionFromCareerGeo } from '@/lib/education-routes';

type Props = { params: Promise<{ geo: string }> };

export function generateStaticParams() {
    return careerGeoStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { geo: raw } = await params;
    if (!isCareerGeoSlug(raw)) return {};
    const { market, copy, languageAlternates } = getCareerGeoPage(raw);
    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        keywords: [market.keyword, 'Career Pack', 'mentoría empleo', market.countryName],
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

export default async function CareerPackGeoPage({ params }: Props) {
    const { geo: raw } = await params;
    if (!isCareerGeoSlug(raw)) notFound();

    const { market, copy } = getCareerGeoPage(raw);
    const region = regionFromCareerGeo(market.slug);

    return (
        <EducationFrame>
            <JsonLd
                data={courseFieldsJsonLd({
                    name: `${CAREER_PACK.cardTitle} · ${market.countryName}`,
                    description: copy.metaDescription,
                    path: market.path,
                })}
            />
            <JsonLd data={faqJsonLd(copy.faqs)} />
            <CareerPackView
                region={region}
                copy={copy}
                geo={market.slug}
                marketLabel={market.countryName}
            />
        </EducationFrame>
    );
}
