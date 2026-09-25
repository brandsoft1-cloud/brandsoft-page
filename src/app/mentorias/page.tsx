import type { Metadata } from 'next';
import EducationFrame from '@/components/education/EducationFrame';
import HubView from '@/components/education/HubView';
import { JsonLd, faqJsonLd } from '@/components/education/EducationJsonLd';
import { HUB } from '@/data/education/hub';
import { HUB_FAQS } from '@/data/education/method';

export const metadata: Metadata = {
    title: { absolute: HUB.metaTitle },
    description: HUB.metaDescription,
    alternates: { canonical: '/mentorias' },
    openGraph: {
        title: HUB.metaTitle,
        description: HUB.metaDescription,
        url: '/mentorias',
        locale: 'es_CO',
        type: 'website',
    },
};

export default function MentoriasHubPage() {
    return (
        <EducationFrame>
            <JsonLd data={faqJsonLd(HUB_FAQS)} />
            <HubView />
        </EducationFrame>
    );
}
