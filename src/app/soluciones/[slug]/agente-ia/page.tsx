import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ConversationalAgentLanding from '@/components/agente-ia/ConversationalAgentLanding';
import {
    AGENTE_CONVERSACIONAL_SLUGS,
    getAgenteConversacionalSector,
} from '@/data/agente-conversacional-sectors';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return AGENTE_CONVERSACIONAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const sector = getAgenteConversacionalSector(slug);
    if (!sector) return { title: 'No encontrado' };

    return {
        title: sector.metaTitle,
        description: sector.metaDescription,
        alternates: { canonical: `/soluciones/${slug}/agente-ia` },
    };
}

export default async function AgenteIaSectorPage({ params }: Props) {
    const { slug } = await params;
    const sector = getAgenteConversacionalSector(slug);
    if (!sector) notFound();

    return <ConversationalAgentLanding sector={sector} />;
}
