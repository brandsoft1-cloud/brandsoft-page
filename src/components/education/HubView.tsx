import Image from 'next/image';
import Link from 'next/link';
import { HUB } from '@/data/education/hub';
import { HUB_FAQS, METHOD_IS_NOT, METHOD_NAME, METHOD_STEPS } from '@/data/education/method';
import { MENTOR } from '@/data/education/mentor';
import { CAREER_PACK } from '@/data/education/career-pack';
import { CAREER_GEO_MARKETS } from '@/data/education/career-pack-geo';
import { CLIENTES_REALES } from '@/data/education/clientes-reales';
import { PRODUCTO_REAL } from '@/data/education/producto-real';
import { WEB_CON_IA } from '@/data/education/web-con-ia';
import { WEB_CON_IA_GEO_MARKETS } from '@/data/education/web-con-ia-geo';
import { MENTORIA_PERFILES } from '@/data/mentoria-perfiles';
import { MENTORIA_PILLARS } from '@/data/mentoria-seo';
import DiagnosticForm from '@/components/education/DiagnosticForm';
import { CtaLink } from '@/components/education/EducationFrame';

const section = 'mx-auto max-w-5xl px-4 py-14';
const h2 = 'font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl';

const buildPrograms = [PRODUCTO_REAL, CLIENTES_REALES];

export default function HubView() {
    return (
        <article>
            <header className={section}>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#6D28D9]">BrandSoft Education</p>
                <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                    {HUB.headline}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">{HUB.lede}</p>
                <div className="mt-8">
                    <CtaLink />
                </div>
            </header>

            <section className={`${section} bg-white pt-0`} aria-labelledby="bifurcacion">
                <h2 id="bifurcacion" className="sr-only">
                    Elige el programa
                </h2>
                <div className="grid gap-4">
                    <div className="rounded-3xl border-2 border-[#A855F7] bg-[#FBFBFE] p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
                            LatAm primero · landings GEO por país
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#6D28D9]">{CAREER_PACK.cardTitle}</p>
                        <p className="mt-3 font-heading text-2xl font-bold leading-snug text-slate-950">
                            «{CAREER_PACK.cardQuestion}»
                        </p>
                        <p className="mt-4 text-slate-700">{CAREER_PACK.cardBody}</p>
                        <p className="mt-4 font-mono text-sm text-[#047857]">
                            1:1 USD 500 · Grupal USD 300 (mín. 5) · Suelta USD 120
                        </p>
                        <Link
                            href={CAREER_PACK.path}
                            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#047857] underline-offset-4 hover:underline"
                        >
                            Ver hub Career Pack (LatAm)
                        </Link>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Por mercado
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {CAREER_GEO_MARKETS.map((m) => (
                                <li key={m.slug}>
                                    <Link
                                        href={m.path}
                                        className="inline-flex min-h-9 items-center rounded-full border border-[#E7E2F3] bg-white px-3 text-xs font-semibold text-slate-700 hover:border-[#A855F7]"
                                    >
                                        {m.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border-2 border-[#047857] bg-[#FBFBFE] p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#047857]">
                            Nuevo · webinar 2×90 · PayPal
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#6D28D9]">{WEB_CON_IA.cardTitle}</p>
                        <p className="mt-3 font-heading text-2xl font-bold leading-snug text-slate-950">
                            «{WEB_CON_IA.cardQuestion}»
                        </p>
                        <p className="mt-4 text-slate-700">{WEB_CON_IA.cardBody}</p>
                        <p className="mt-4 font-mono text-sm text-[#047857]">
                            LatAm desde USD {WEB_CON_IA.priceLatamUsd} · Texas USD {WEB_CON_IA.priceTxUsd}{' '}
                            · ancla USD {WEB_CON_IA.priceAnchorUsd}
                        </p>
                        <Link
                            href={WEB_CON_IA.path}
                            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#047857] underline-offset-4 hover:underline"
                        >
                            Ver Web con IA
                        </Link>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Por mercado
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {WEB_CON_IA_GEO_MARKETS.map((m) => (
                                <li key={m.slug}>
                                    <Link
                                        href={m.path}
                                        className="inline-flex min-h-9 items-center rounded-full border border-[#E7E2F3] bg-white px-3 text-xs font-semibold text-slate-700 hover:border-[#047857]"
                                    >
                                        {m.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {buildPrograms.map((program) => (
                            <Link
                                key={program.slug}
                                href={program.path}
                                className="flex min-h-11 flex-col rounded-3xl border border-[#E7E2F3] bg-[#FBFBFE] p-6 hover:border-[#A855F7]"
                            >
                                <p className="text-sm font-semibold text-[#6D28D9]">{program.cardTitle}</p>
                                <p className="mt-3 font-heading text-2xl font-bold leading-snug text-slate-950">
                                    «{program.cardQuestion}»
                                </p>
                                <p className="mt-4 text-slate-700">{program.cardBody}</p>
                                <span className="mt-6 text-sm font-semibold text-[#047857]">Ver el programa</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="metodo" className={`${section} scroll-mt-24 bg-[#F2EBFD]`} aria-labelledby="metodo-titulo">
                <h2 id="metodo-titulo" className={h2}>
                    El método {METHOD_NAME}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
                    Son seis piezas fijas. Ningún curso grabado puede escribir el criterio de tu entrega antes de que empieces, ni devolverte la revisión en menos de 48 horas.
                </p>
                <ol className="mt-8 grid gap-4 md:grid-cols-2">
                    {METHOD_STEPS.map((step) => (
                        <li key={step.n} className="rounded-2xl bg-white p-5">
                            <p className="font-mono text-sm text-[#6D28D9]">{step.n}</p>
                            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">{step.title}</h3>
                            <p className="mt-2 leading-relaxed text-slate-700">{step.line}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={section} aria-labelledby="no-es">
                <h2 id="no-es" className={h2}>
                    Qué no es esto
                </h2>
                <ul className="mt-6 grid gap-3">
                    {METHOD_IS_NOT.map((line) => (
                        <li key={line} className="rounded-2xl border border-[#E7E2F3] bg-white p-4 text-lg text-slate-800">
                            {line}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${section} bg-white`} aria-labelledby="prueba">
                <h2 id="prueba" className={h2}>
                    La prueba, hoy
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
                    Esta es la primera cohorte. No hay egresados, no hay testimonios y no hay fotos de alumnos. El caso de referencia es el artefacto de cada programa: en software, una URL pública con historial de revisiones; en marketing, un motor de captación con números de antes y después. Cuando alguien termine, aquí irá su enlace. Hoy no.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href="/mentorias/producto-real#referencia" className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline">
                        Ver el caso de referencia de Producto Real
                    </Link>
                    <Link href="/mentorias/clientes-reales#referencia" className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline">
                        Ver el caso de referencia de Clientes Reales
                    </Link>
                </div>
            </section>

            <section className={section} aria-labelledby="mentor">
                <h2 id="mentor" className={h2}>
                    Quién revisa
                </h2>
                <div className="mt-8 grid items-center gap-8 md:grid-cols-[220px_1fr]">
                    <Image
                        src={MENTOR.photo}
                        alt={MENTOR.photoAlt}
                        width={MENTOR.photoWidth}
                        height={MENTOR.photoHeight}
                        sizes="220px"
                        className="h-auto w-full max-w-[220px] rounded-3xl object-cover"
                    />
                    <div>
                        <p className="font-heading text-2xl font-bold text-slate-950">{MENTOR.name}</p>
                        <p className="mt-2 text-slate-700">{MENTOR.role}</p>
                        <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">{MENTOR.bio}</p>
                        <a
                            href={MENTOR.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline"
                        >
                            LinkedIn de Mauricio Forero
                        </a>
                    </div>
                </div>
            </section>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="faq">
                <h2 id="faq" className={h2}>
                    Preguntas de quien no se fía
                </h2>
                <div className="mt-6 grid gap-3">
                    {HUB_FAQS.map((item) => (
                        <details key={item.q} className="rounded-2xl bg-white p-4">
                            <summary className="min-h-11 cursor-pointer font-semibold text-slate-950">{item.q}</summary>
                            <p className="mt-3 leading-relaxed text-slate-700">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className={section} aria-labelledby="biblioteca">
                <h2 id="biblioteca" className={h2}>
                    Biblioteca que ya existía
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Los pilares y los artículos siguen publicados para quien llega buscando un tema suelto. No son el programa. El programa es Hecho contigo.
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {MENTORIA_PILLARS.map((pillar) => (
                        <li key={pillar.slug}>
                            <Link href={pillar.path} className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline">
                                {pillar.shortTitle}
                            </Link>
                        </li>
                    ))}
                    {MENTORIA_PERFILES.map((perfil) => (
                        <li key={perfil.slug}>
                            <Link href={perfil.path} className="inline-flex min-h-11 items-center text-[#6D28D9] underline-offset-4 hover:underline">
                                {perfil.shortTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="diagnostico" className={`${section} scroll-mt-24 bg-[#E3F5EF]`}>
                <h2 className={h2}>Llamada de diagnóstico de 15 minutos</h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-800">
                    Una sola llamada para ver si te encaja Career Pack, Web con IA, Producto Real o Clientes Reales — o si todavía no es el momento.
                </p>
                <div className="mt-8 max-w-xl rounded-3xl bg-white p-5 sm:p-8">
                    <DiagnosticForm programa="sin-definir" region="latam" lockRegion={false} />
                </div>
            </section>
        </article>
    );
}
