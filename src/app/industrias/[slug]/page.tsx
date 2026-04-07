import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustriaTemplate from '@/components/b2b/IndustriaTemplate';
import { INDUSTRIA_SLUGS, INDUSTRIAS, type IndustriaSlug } from '@/data/b2b-hub-structure';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return INDUSTRIA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    if (!INDUSTRIA_SLUGS.includes(slug as IndustriaSlug)) return {};
    const d = INDUSTRIAS[slug as IndustriaSlug];
    return {
        title: d.metaTitle,
        description: d.metaDescription,
        keywords: [...d.keywords],
        alternates: { canonical: d.path },
    };
}

export default async function IndustriaPage({ params }: Props) {
    const { slug } = await params;
    if (!INDUSTRIA_SLUGS.includes(slug as IndustriaSlug)) notFound();
    return <IndustriaTemplate slug={slug as IndustriaSlug} />;
}
