import Link from 'next/link';
import type { EducationRegion } from '@/data/education/types';
import { CAREER_PACK, type CareerRegionCopy } from '@/data/education/career-pack';
import {
    CAREER_GEO_MARKETS,
    type CareerGeoSlug,
} from '@/data/education/career-pack-geo';
import DiagnosticForm from '@/components/education/DiagnosticForm';
import { CtaLink } from '@/components/education/EducationFrame';
import TikTokEmbed from '@/components/education/TikTokEmbed';

const section = 'mx-auto max-w-5xl px-4 py-14';
const h2 = 'font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl';

type Props = {
    region: EducationRegion;
    /** Copy ya resuelto (hub LatAm/TX o página GEO) */
    copy?: CareerRegionCopy;
    /** Slug GEO activo; undefined = hub LatAm */
    geo?: CareerGeoSlug | null;
    /** Etiqueta de mercado para el eyebrow */
    marketLabel?: string;
};

export default function CareerPackView({ region, copy: copyProp, geo = null, marketLabel }: Props) {
    const copy = copyProp ?? CAREER_PACK.regions[region];
    const place = marketLabel ?? (region === 'tx' ? 'Texas' : 'LatAm');

    return (
        <article>
            <header className={`${section} pb-8`}>
                <GeoSwitch active={geo} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#6D28D9]">
                    BrandSoft Education · {CAREER_PACK.cardTitle} · {place}
                </p>
                <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                    {copy.headline}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">{copy.lede}</p>
                <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-800">
                    {CAREER_PACK.promiseLine}
                </p>
                <div className="mt-8">
                    <CtaLink />
                </div>
            </header>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="sintomas">
                <h2 id="sintomas" className={h2}>
                    Si esto te suena, es esta página
                </h2>
                <ul className="mt-8 grid gap-4 md:grid-cols-3">
                    {copy.symptoms.map((symptom) => (
                        <li key={symptom} className="rounded-2xl bg-white p-5 text-lg leading-snug text-slate-800">
                            «{symptom}»
                        </li>
                    ))}
                </ul>
            </section>

            <section
                id="asi-se-siente"
                className={`${section} scroll-mt-24 bg-[#1E1B2E] text-white`}
                aria-labelledby="video-mentoria"
            >
                <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#C4B5FD]">
                            BrandSoft Education · en vivo
                        </p>
                        <h2 id="video-mentoria" className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                            Así se siente la mentoría
                        </h2>
                        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                            No es un curso grabado. Es Mauricio Forero acompañándote a ordenar rumbo, CV y
                            entrevistas — con la misma energía que ves aquí.
                        </p>
                        <a
                            href="https://www.tiktok.com/@mao.brandsoft/video/7637368871409798420"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#C4B5FD] underline-offset-4 hover:underline"
                        >
                            Abrir en TikTok →
                        </a>
                    </div>
                    <TikTokEmbed />
                </div>
            </section>

            <section id="mentorias" className={`${section} scroll-mt-24`} aria-labelledby="cinco">
                <h2 id="cinco" className={h2}>
                    Las 5 mentorías
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Un solo plan. Tres formas de comprarlo. El orden no se salta: cada sesión alimenta la siguiente.
                </p>
                <div className="mt-8 grid gap-4">
                    {CAREER_PACK.sessions.map((session) => (
                        <article
                            key={session.n}
                            className="rounded-2xl border border-[#E7E2F3] bg-white p-5 md:p-6"
                        >
                            <p className="font-mono text-sm text-[#6D28D9]">{session.n}</p>
                            <h3 className="mt-1 font-heading text-xl font-bold text-slate-950 md:text-2xl">
                                {session.name}
                            </h3>
                            <p className="mt-3 text-slate-700">{session.objective}</p>
                            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                {session.covers.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm text-slate-800">
                                        <span aria-hidden className="text-[#047857]">
                                            ●
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 rounded-xl bg-[#E3F5EF] p-3 text-sm font-medium text-slate-900">
                                Resultado: {session.outcome}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="precios" className={`${section} scroll-mt-24 bg-white`} aria-labelledby="precios-titulo">
                <h2 id="precios-titulo" className={h2}>
                    Precios en USD
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Mismos montos en Colombia, México, Perú, Argentina, Chile y Texas. La oferta principal de validación
                    es el paquete 1:1.
                </p>
                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {CAREER_PACK.prices.map((tier) => (
                        <article
                            key={tier.id}
                            className={`flex flex-col rounded-2xl border p-5 ${
                                tier.id === 'uno-a-uno'
                                    ? 'border-[#A855F7] bg-[#FBFBFE] shadow-sm'
                                    : 'border-[#E7E2F3] bg-white'
                            }`}
                        >
                            {tier.badge ? (
                                <p className="text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
                                    {tier.badge}
                                </p>
                            ) : null}
                            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">{tier.name}</h3>
                            <p className="mt-3 font-mono text-2xl text-[#047857]">{tier.price}</p>
                            <p className="mt-3 text-slate-700">{tier.summary}</p>
                            <ul className="mt-4 grid flex-1 gap-2 text-slate-800">
                                {tier.includes.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm">
                                        <span aria-hidden className="text-[#047857]">
                                            ●
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="no-prometemos">
                <h2 id="no-prometemos" className={h2}>
                    Lo que no prometemos
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-800">{copy.notPromise}</p>
                <p className="mt-4 max-w-3xl text-slate-700">{copy.marketNote}</p>
            </section>

            <section className={section} aria-labelledby="requisitos">
                <h2 id="requisitos" className={h2}>
                    Qué necesitas antes de empezar
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-800">{copy.requirementsIntro}</p>
                <ul className="mt-6 grid gap-3">
                    {copy.requirements.map((item) => (
                        <li key={item} className="rounded-2xl border border-[#E7E2F3] bg-white p-4 text-slate-800">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${section} bg-white`} aria-labelledby="faq">
                <h2 id="faq" className={h2}>
                    Preguntas antes de entrar
                </h2>
                <div className="mt-6 grid gap-3">
                    {copy.faqs.map((item) => (
                        <details key={item.q} className="rounded-2xl border border-[#E7E2F3] bg-white p-4">
                            <summary className="min-h-11 cursor-pointer font-semibold text-slate-950">{item.q}</summary>
                            <p className="mt-3 leading-relaxed text-slate-700">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className={section} aria-labelledby="mercados">
                <h2 id="mercados" className={h2}>
                    Otros mercados
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Misma oferta, landings por país para SEO/GEO. Elige el tuyo:
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                    <li>
                        <Link
                            href={CAREER_PACK.path}
                            className="inline-flex min-h-11 items-center rounded-full border border-[#E7E2F3] bg-white px-4 text-sm font-semibold text-slate-800 hover:border-[#A855F7]"
                        >
                            LatAm (hub)
                        </Link>
                    </li>
                    {CAREER_GEO_MARKETS.map((m) => (
                        <li key={m.slug}>
                            <Link
                                href={m.path}
                                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold ${
                                    geo === m.slug
                                        ? 'border-[#6D28D9] bg-[#6D28D9] text-white'
                                        : 'border-[#E7E2F3] bg-white text-slate-800 hover:border-[#A855F7]'
                                }`}
                            >
                                {m.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={section} aria-labelledby="otras">
                <h2 id="otras" className={h2}>
                    Otras salidas de BrandSoft Education
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Si lo que necesitas es un artefacto en producción (8 semanas), mira los programas de construcción.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/mentorias/producto-real"
                        className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline"
                    >
                        Producto Real · software
                    </Link>
                    <Link
                        href="/mentorias/clientes-reales"
                        className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline"
                    >
                        Clientes Reales · marketing
                    </Link>
                </div>
            </section>

            <section id="diagnostico" className={`${section} scroll-mt-24 bg-[#F2EBFD]`}>
                <h2 className={h2}>Llamada de diagnóstico de 15 minutos</h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Medimos fit con el Career Pack{marketLabel ? ` en ${marketLabel}` : ''}, y si te conviene 1:1,
                    grupal o sesión suelta. Sin presión de compra en la llamada.
                </p>
                <div className="mt-8 max-w-xl rounded-3xl bg-white p-5 sm:p-8">
                    <DiagnosticForm programa="career-pack" region={region} lockProgram />
                </div>
            </section>
        </article>
    );
}

function GeoSwitch({ active }: { active: CareerGeoSlug | null }) {
    return (
        <nav aria-label="Mercado GEO" className="flex flex-wrap gap-2">
            <Link
                href={CAREER_PACK.path}
                className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold ${
                    active === null
                        ? 'bg-[#6D28D9] text-white'
                        : 'border border-[#E7E2F3] bg-white text-slate-700 hover:bg-[#F2EBFD]'
                }`}
            >
                LatAm
            </Link>
            {CAREER_GEO_MARKETS.map((m) => (
                <Link
                    key={m.slug}
                    href={m.path}
                    aria-current={active === m.slug ? 'page' : undefined}
                    className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold ${
                        active === m.slug
                            ? 'bg-[#6D28D9] text-white'
                            : 'border border-[#E7E2F3] bg-white text-slate-700 hover:bg-[#F2EBFD]'
                    }`}
                >
                    {m.label}
                </Link>
            ))}
        </nav>
    );
}
