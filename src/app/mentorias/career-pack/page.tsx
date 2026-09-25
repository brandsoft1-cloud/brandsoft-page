import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import EducationFrame from '@/components/education/EducationFrame';
import CareerPackView from '@/components/education/CareerPackView';
import { courseFieldsJsonLd, faqJsonLd, JsonLd } from '@/components/education/EducationJsonLd';
import { CAREER_PACK } from '@/data/education/career-pack';
import { CAREER_GEO_MARKETS } from '@/data/education/career-pack-geo';
import { resolveEducationRegion } from '@/lib/education-routes';

type Props = { searchParams: Promise<{ r?: string | string[] }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const region = resolveEducationRegion((await searchParams).r);
    // Legacy ?r=tx → canónica GEO
    if (region === 'tx') {
        return {
            title: CAREER_PACK.regions.tx.metaTitle,
            description: CAREER_PACK.regions.tx.metaDescription,
            alternates: { canonical: '/mentorias/career-pack/tx' },
        };
    }

    const copy = CAREER_PACK.regions.latam;
    const languages: Record<string, string> = { 'x-default': CAREER_PACK.path };
    for (const m of CAREER_GEO_MARKETS) {
        languages[m.hreflang] = m.path;
    }

    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        keywords: [
            CAREER_PACK.keyword,
            'mentoría empleo LatAm',
            'Colombia',
            'México',
            'Perú',
            'Argentina',
            'Chile',
        ],
        alternates: {
            canonical: CAREER_PACK.path,
            languages,
        },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: CAREER_PACK.path,
            locale: 'es_CO',
            type: 'website',
        },
    };
}

export default async function CareerPackHubPage({ searchParams }: Props) {
    const region = resolveEducationRegion((await searchParams).r);
    if (region === 'tx') {
        redirect('/mentorias/career-pack/tx');
    }

    const copy = CAREER_PACK.regions.latam;
    return (
        <EducationFrame>
            <JsonLd
                data={courseFieldsJsonLd({
                    name: CAREER_PACK.cardTitle,
                    description: copy.metaDescription,
                    path: CAREER_PACK.path,
                })}
            />
            <JsonLd data={faqJsonLd(copy.faqs)} />
            <CareerPackView region="latam" copy={copy} geo={null} marketLabel="LatAm" />
        </EducationFrame>
    );
}
