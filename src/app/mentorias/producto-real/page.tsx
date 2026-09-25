import type { Metadata } from 'next';
import EducationFrame from '@/components/education/EducationFrame';
import { courseJsonLd, faqJsonLd, JsonLd } from '@/components/education/EducationJsonLd';
import ProgramView from '@/components/education/ProgramView';
import { PRODUCTO_REAL } from '@/data/education/producto-real';
import { resolveEducationRegion } from '@/lib/education-routes';

type Props = { searchParams: Promise<{ r?: string | string[] }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const region = resolveEducationRegion((await searchParams).r);
    const copy = PRODUCTO_REAL.regions[region];
    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        alternates: { canonical: PRODUCTO_REAL.path },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: PRODUCTO_REAL.path,
            locale: region === 'tx' ? 'es_US' : 'es_CO',
            type: 'website',
        },
    };
}

export default async function ProductoRealPage({ searchParams }: Props) {
    const region = resolveEducationRegion((await searchParams).r);
    const copy = PRODUCTO_REAL.regions[region];
    return (
        <EducationFrame>
            <JsonLd data={courseJsonLd(PRODUCTO_REAL, region)} />
            <JsonLd data={faqJsonLd(copy.faqs)} />
            <ProgramView program={PRODUCTO_REAL} region={region} />
        </EducationFrame>
    );
}
