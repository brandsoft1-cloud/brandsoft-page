'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, MessageCircle } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';
import { whatsAppHref } from '@/lib/contact';

type Props = {
    study: CaseStudy;
    compact?: boolean;
};

export default function CaseStudyCard({ study, compact = false }: Props) {
    const primaryHref = study.link ?? study.instagramLink;
    const waMessage = `Hola BrandSoft, vi el caso de ${study.company} y quiero resultados similares para mi negocio.`;

    const storyParagraphs = study.story.split('\n\n').filter(Boolean);

    return (
        <article className="group flex flex-col h-full bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all">
            {study.imageSrc && (
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
                    <Image
                        src={study.imageSrc}
                        alt={study.imageAlt ?? study.company}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            )}

            <div className={`flex flex-col flex-grow ${compact ? 'p-6' : 'p-8'}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-wide bg-white/5 border border-white/10 text-cyan-300 px-2.5 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-sm text-violet-300/90 font-semibold italic mb-4 leading-snug">{study.headline}</p>

                <div className={`space-y-3 flex-grow mb-6 ${compact ? 'line-clamp-4' : ''}`}>
                    {storyParagraphs.map((paragraph, i) => (
                        <p key={i} className="text-gray-400 text-sm leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <p className="text-sm text-emerald-400 font-semibold mb-6 border-l-2 border-emerald-500/50 pl-4">
                    {study.metric}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                    {primaryHref && (
                        <a
                            href={primaryHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-cyan-400 transition-colors"
                        >
                            {study.linkLabel ?? 'Ver proyecto'}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    <a
                        href={whatsAppHref(waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-violet-300"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        ¿Quieres una historia así para tu negocio? Hablemos
                    </a>
                </div>
            </div>
        </article>
    );
}

export function CaseStudyCardLinkAll() {
    return (
        <Link
            href="/casos-de-exito"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-cyan-400 hover:text-white transition-colors"
        >
            Ver todos los casos
            <ExternalLink className="w-4 h-4" />
        </Link>
    );
}
