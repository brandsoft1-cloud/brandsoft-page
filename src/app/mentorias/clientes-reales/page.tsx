import type { Metadata } from 'next';
import EducationFrame from '@/components/education/EducationFrame';
import { courseJsonLd, faqJsonLd, JsonLd } from '@/components/education/EducationJsonLd';
import ProgramView from '@/components/education/ProgramView';
import { CLIENTES_REALES } from '@/data/education/clientes-reales';
import { resolveEducationRegion } from '@/lib/education-routes';

type Props = { searchParams: Promise<{ r?: string | string[] }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const region = resolveEducationRegion((await searchParams).r);
    const copy = CLIENTES_REALES.regions[region];
    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        alternates: { canonical: CLIENTES_REALES.path },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: CLIENTES_REALES.path,
            locale: region === 'tx' ? 'es_US' : 'es_CO',
            type: 'website',
        },
    };
}

export default async function ClientesRealesPage({ searchParams }: Props) {
    const region = resolveEducationRegion((await searchParams).r);
    const copy = CLIENTES_REALES.regions[region];
    return (
        <EducationFrame>
            <JsonLd data={courseJsonLd(CLIENTES_REALES, region)} />
            <JsonLd data={faqJsonLd(copy.faqs)} />
            <ProgramView program={CLIENTES_REALES} region={region} />
        </EducationFrame>
    );
}
