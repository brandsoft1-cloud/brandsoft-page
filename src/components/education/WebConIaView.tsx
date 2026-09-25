import Link from 'next/link';
import {
    WEB_CON_IA,
    WEB_CON_IA_WHATSAPP_ASESORIA,
    WEB_CON_IA_WHATSAPP_PAGO,
} from '@/data/education/web-con-ia';
import {
    WEB_CON_IA_GEO_MARKETS,
    type WebConIaGeoSlug,
    type WebConIaPageCopy,
} from '@/data/education/web-con-ia-geo';
import { CAREER_PACK } from '@/data/education/career-pack';
import { PRODUCTO_REAL } from '@/data/education/producto-real';
import { CLIENTES_REALES } from '@/data/education/clientes-reales';
import AsesoriaCta from '@/components/education/AsesoriaCta';
import PayPalHostedButton from '@/components/education/PayPalHostedButton';

const section = 'mx-auto max-w-5xl px-4 py-14';
const h2 = 'font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl';

type Props = {
    copy: WebConIaPageCopy;
    geo?: WebConIaGeoSlug | null;
    marketLabel?: string;
};

function GeoSwitch({ active }: { active: WebConIaGeoSlug | null | undefined }) {
    return (
        <nav aria-label="Mercados Web con IA" className="flex flex-wrap gap-2">
            <Link
                href={WEB_CON_IA.path}
                className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold ${
                    !active
                        ? 'border-[#A855F7] bg-[#F2EBFD] text-[#6D28D9]'
                        : 'border-[#E7E2F3] bg-white text-slate-700 hover:border-[#A855F7]'
                }`}
            >
                LatAm (hub)
            </Link>
            {WEB_CON_IA_GEO_MARKETS.map((m) => (
                <Link
                    key={m.slug}
                    href={m.path}
                    className={`inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-semibold ${
                        active === m.slug
                            ? 'border-[#A855F7] bg-[#F2EBFD] text-[#6D28D9]'
                            : 'border-[#E7E2F3] bg-white text-slate-700 hover:border-[#A855F7]'
                    }`}
                >
                    {m.label}
                </Link>
            ))}
        </nav>
    );
}

export default function WebConIaView({ copy, geo = null, marketLabel }: Props) {
    const place = marketLabel ?? 'LatAm';

    return (
        <article>
            <header className={`${section} pb-8`}>
                <GeoSwitch active={geo} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#6D28D9]">
                    BrandSoft Education · {WEB_CON_IA.cardTitle} · {place}
                </p>
                <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                    {copy.headline}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">{copy.lede}</p>
                <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-800">
                    {WEB_CON_IA.promiseLine}
                </p>
                <p className="mt-3 max-w-3xl text-base italic leading-relaxed text-[#6D28D9]">
                    «{WEB_CON_IA.masterLine}»
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                        href="#comprar"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#047857] px-6 py-3 text-center text-base font-semibold text-white hover:bg-[#065f46]"
                    >
                        Comprar por USD {WEB_CON_IA.priceSpecialUsd}
                    </a>
                    <a
                        href="#asesoria"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#047857] bg-white px-6 py-3 text-center text-base font-semibold text-[#047857] hover:bg-[#E3F5EF]"
                    >
                        Hablar con el asesor
                    </a>
                </div>
            </header>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="sintomas">
                <h2 id="sintomas" className={h2}>
                    Si esto te suena, es esta página
                </h2>
                <ul className="mt-8 grid gap-4 md:grid-cols-3">
                    {copy.symptoms.map((symptom) => (
                        <li
                            key={symptom}
                            className="rounded-2xl bg-white p-5 text-lg leading-snug text-slate-800"
                        >
                            «{symptom}»
                        </li>
                    ))}
                </ul>
            </section>

            <section className={section} aria-labelledby="avatares">
                <h2 id="avatares" className={h2}>
                    Tres motivos. Un mismo webinar.
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Mismo temario. El mensaje cambia según por qué vienes.
                </p>
                <ul className="mt-8 grid gap-4 md:grid-cols-3">
                    {WEB_CON_IA.avatars.map((avatar) => (
                        <li
                            key={avatar.id}
                            className="rounded-2xl border border-[#E7E2F3] bg-white p-5"
                        >
                            <p className="text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
                                {avatar.label}
                            </p>
                            <p className="mt-3 font-heading text-xl font-bold text-slate-950">
                                {avatar.pain}
                            </p>
                            <p className="mt-3 text-slate-700">{avatar.promise}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${section} bg-[#E3F5EF]`} aria-labelledby="metodo">
                <h2 id="metodo" className={h2}>
                    El método: haz · explica · vende
                </h2>
                <ol className="mt-8 grid gap-4 md:grid-cols-3">
                    {WEB_CON_IA.methodPillars.map((pillar, i) => (
                        <li key={pillar.title} className="rounded-2xl bg-white p-5">
                            <p className="font-mono text-sm text-[#047857]">0{i + 1}</p>
                            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 leading-relaxed text-slate-700">{pillar.detail}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="temario" className={`${section} scroll-mt-24`} aria-labelledby="temario-titulo">
                <h2 id="temario-titulo" className={h2}>
                    Temario: 2 × 90 minutos
                </h2>
                <div className="mt-8 grid gap-6">
                    {WEB_CON_IA.sessions.map((session) => (
                        <article
                            key={session.n}
                            className="rounded-3xl border border-[#E7E2F3] bg-white p-6 md:p-8"
                        >
                            <p className="font-mono text-sm text-[#6D28D9]">
                                {session.subtitle} · {session.duration}
                            </p>
                            <h3 className="mt-2 font-heading text-2xl font-bold text-slate-950">
                                {session.name}
                            </h3>
                            <ol className="mt-6 grid gap-3">
                                {session.blocks.map((block) => (
                                    <li
                                        key={block.title}
                                        className="grid gap-1 border-l-2 border-[#A855F7] pl-4 sm:grid-cols-[4.5rem_1fr] sm:gap-4"
                                    >
                                        <span className="font-mono text-xs text-slate-500">
                                            {block.mins}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-slate-950">{block.title}</p>
                                            <p className="text-sm text-slate-700">{block.do}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-6 rounded-2xl bg-[#F2EBFD] p-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
                                    Entregables
                                </p>
                                <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                                    {session.deliverables.map((item) => (
                                        <li key={item} className="text-sm text-slate-800">
                                            ● {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section
                id="comprar"
                className={`${section} scroll-mt-24 bg-[#1E1B2E] text-white`}
                aria-labelledby="precio"
            >
                <h2 id="precio" className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                    Precio de lanzamiento
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-300">
                    Valor del programa{' '}
                    <span className="line-through">USD {WEB_CON_IA.priceAnchorUsd}</span>
                    {' · '}
                    <span className="font-semibold text-white">
                        hoy USD {WEB_CON_IA.priceSpecialUsd}
                    </span>
                </p>
                <ul className="mt-6 grid max-w-xl gap-2 text-slate-200">
                    {WEB_CON_IA.includes.map((item) => (
                        <li key={item} className="flex gap-2">
                            <span className="text-emerald-400" aria-hidden>
                                ✓
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 rounded-2xl bg-white p-5 text-slate-900 sm:p-6">
                    <p className="mb-4 text-sm font-semibold text-slate-700">Pagar con PayPal</p>
                    <PayPalHostedButton />
                </div>
                <p className="mt-4 text-sm text-slate-400">{copy.marketNote}</p>
            </section>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="live">
                <h2 id="live" className={h2}>
                    En vivo + replay {WEB_CON_IA.replayMonths} meses
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Un solo live para todos los países. Fecha y hora COT se confirman por WhatsApp
                    después del pago. La grabación queda disponible {WEB_CON_IA.replayMonths} meses.
                </p>
            </section>

            <section id="ya-pague" className={`${section} scroll-mt-24`} aria-labelledby="postpago">
                <h2 id="postpago" className={h2}>
                    ¿Ya pagaste?
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Escríbenos por WhatsApp con tu correo. Te enviamos fecha/hora del live, invite al
                    repo privado y el acceso a la sala.
                </p>
                <a
                    href={WEB_CON_IA_WHATSAPP_PAGO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#047857] px-6 py-3 text-base font-semibold text-white hover:bg-[#065f46]"
                >
                    Confirmar pago por WhatsApp
                </a>
            </section>

            <AsesoriaCta
                meetUrl={WEB_CON_IA.socioCierreMeetUrl}
                whatsappUrl={WEB_CON_IA_WHATSAPP_ASESORIA}
            />

            <section className={`${section} bg-white`} aria-labelledby="no-promesa">
                <h2 id="no-promesa" className={h2}>
                    Qué no prometemos
                </h2>
                <ul className="mt-6 grid gap-3">
                    {WEB_CON_IA.notPromise.map((line) => (
                        <li
                            key={line}
                            className="rounded-2xl border border-[#E7E2F3] bg-[#FBFBFE] p-4 text-lg text-slate-800"
                        >
                            {line}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="faq">
                <h2 id="faq" className={h2}>
                    Preguntas frecuentes
                </h2>
                <div className="mt-6 grid gap-3">
                    {copy.faqs.map((item) => (
                        <details key={item.q} className="rounded-2xl bg-white p-4">
                            <summary className="min-h-11 cursor-pointer font-semibold text-slate-950">
                                {item.q}
                            </summary>
                            <p className="mt-3 leading-relaxed text-slate-700">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className={section} aria-labelledby="otros">
                <h2 id="otros" className={h2}>
                    Otros programas BrandSoft Education
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                        { href: CAREER_PACK.path, title: CAREER_PACK.cardTitle },
                        { href: PRODUCTO_REAL.path, title: PRODUCTO_REAL.cardTitle },
                        { href: CLIENTES_REALES.path, title: CLIENTES_REALES.cardTitle },
                    ].map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
