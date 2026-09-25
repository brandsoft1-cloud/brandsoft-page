import Link from 'next/link';
import { EDUCATION_PRICES, PRICE_PENDING_COPY } from '@/data/education/prices';
import { METHOD_NAME, METHOD_STEPS } from '@/data/education/method';
import type { EducationProgram, EducationRegion } from '@/data/education/types';
import DiagnosticForm from '@/components/education/DiagnosticForm';
import { CtaLink } from '@/components/education/EducationFrame';

const section = 'mx-auto max-w-5xl px-4 py-14';
const h2 = 'font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl';

export default function ProgramView({
    program,
    region,
}: {
    program: EducationProgram;
    region: EducationRegion;
}) {
    const copy = program.regions[region];
    const prices = EDUCATION_PRICES[program.slug][region];

    return (
        <article>
            <header className={`${section} pb-8`}>
                <RegionSwitch path={program.path} region={region} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-[#6D28D9]">
                    {METHOD_NAME} · {program.cardTitle}
                </p>
                <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                    {copy.headline}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">{copy.lede}</p>
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

            <section className={section} aria-labelledby="construir">
                <h2 id="construir" className={h2}>
                    {copy.buildTitle}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{copy.buildBody}</p>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {copy.diagram.map((node, index) => (
                        <li key={node.label} className="rounded-2xl border border-[#E7E2F3] bg-white p-4">
                            <span className="font-mono text-sm text-[#6D28D9]">0{index + 1}</span>
                            <p className="mt-2 font-heading text-lg font-bold text-slate-950">{node.label}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-700">{node.detail}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={`${section} bg-white`} aria-labelledby="entregas">
                <h2 id="entregas" className={h2}>
                    Las cuatro entregas
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Cada corte dice qué entregas y cómo se comprueba que quedó bien, antes de que empieces.
                </p>
                <div className="mt-8 grid gap-4">
                    {program.deliveries.map((delivery, index) => (
                        <article key={delivery.name} className="grid gap-3 rounded-2xl border border-[#E7E2F3] p-5 md:grid-cols-2">
                            <div>
                                <p className="font-mono text-sm text-[#6D28D9]">0{index + 1}</p>
                                <h3 className="font-heading text-xl font-bold text-slate-950">{delivery.name}</h3>
                                <p className="mt-2 text-slate-700">{delivery.deliver}</p>
                            </div>
                            <div className="rounded-xl bg-[#E3F5EF] p-4">
                                <p className="text-sm font-semibold text-[#047857]">Cómo se comprueba</p>
                                <p className="mt-2 text-slate-800">{delivery.acceptance}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={section} aria-labelledby="revision">
                <h2 id="revision" className={h2}>
                    Cómo se te revisa
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{program.checklistIntro}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {program.checklist.map((block) => (
                        <li key={block.title} className="rounded-2xl border border-[#E7E2F3] bg-white p-4">
                            <h3 className="font-heading text-lg font-bold text-[#6D28D9]">{block.title}</h3>
                            <p className="mt-2 text-slate-700">{block.detail}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${section} bg-[#F2EBFD]`} aria-labelledby="calendario">
                <h2 id="calendario" className={h2}>
                    El calendario
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{program.calendarNote}</p>
                <ol className="mt-8 grid gap-4">
                    {program.calendar.map((step) => (
                        <li key={step.when} className="grid gap-1 rounded-2xl bg-white p-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                            <p className="font-mono text-sm font-medium text-[#6D28D9]">{step.when}</p>
                            <p className="text-slate-800">{step.what}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={section} aria-labelledby="rutas">
                <h2 id="rutas" className={h2}>
                    Dos rutas
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {program.routes.map((route) => {
                        const amount = prices[route.id];
                        return (
                            <article key={route.id} className="flex flex-col rounded-2xl border border-[#E7E2F3] bg-white p-5">
                                <h3 className="font-heading text-2xl font-bold text-slate-950">{route.name}</h3>
                                <p className="mt-2 text-slate-700">{route.summary}</p>
                                <ul className="mt-4 grid flex-1 gap-2 text-slate-800">
                                    {route.includes.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span aria-hidden className="text-[#047857]">
                                                ●
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 font-mono text-lg text-[#047857]">{amount ?? PRICE_PENDING_COPY}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className={`${section} bg-white`} aria-labelledby="no-prometemos">
                <h2 id="no-prometemos" className={h2}>
                    Lo que no prometemos
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-800">{copy.notPromise}</p>
                <p className="mt-4 max-w-3xl text-slate-700">{copy.marketNote}</p>
            </section>

            <section className={section} aria-labelledby="referencia">
                <h2 id="referencia" className={h2}>
                    {program.reference.title}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#6D28D9]">
                    {program.reference.kicker}
                </p>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{program.reference.body}</p>
                <ul className="mt-6 grid gap-2">
                    {program.outcomes.map((item) => (
                        <li key={item} className="text-slate-800">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${section} bg-[#E3F5EF]`} aria-labelledby="requisitos">
                <h2 id="requisitos" className={h2}>
                    Qué necesitas antes de empezar
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-800">{copy.requirementsIntro}</p>
                <ul className="mt-6 grid gap-3">
                    {copy.requirements.map((item) => (
                        <li key={item} className="rounded-2xl bg-white p-4 text-slate-800">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={section} aria-labelledby="metodo">
                <h2 id="metodo" className={h2}>
                    El método es el mismo en los dos programas
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    {METHOD_NAME} tiene seis piezas. Aquí el artefacto cambia; el motor no. El detalle está en el{' '}
                    <Link href="/mentorias#metodo" className="text-[#6D28D9] underline-offset-4 hover:underline">
                        hub de mentoría técnica 1 a 1
                    </Link>
                    .
                </p>
                <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                    {METHOD_STEPS.map((step) => (
                        <li key={step.n} className="rounded-2xl border border-[#E7E2F3] p-4">
                            <p className="font-mono text-sm text-[#6D28D9]">{step.n}</p>
                            <p className="mt-1 font-semibold text-slate-950">{step.title}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={section} aria-labelledby="faq">
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

            <section id="diagnostico" className={`${section} scroll-mt-24 bg-[#F2EBFD]`}>
                <h2 className={h2}>Llamada de diagnóstico de 15 minutos</h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    En esa llamada se mide la brecha. Si el programa no te cabe, se dice ahí. No es una clase de muestra ni una cotización de software para empresas.
                </p>
                <div className="mt-8 max-w-xl rounded-3xl bg-white p-5 sm:p-8">
                    <DiagnosticForm programa={program.slug} region={region} lockProgram />
                </div>
            </section>
        </article>
    );
}

function RegionSwitch({ path, region }: { path: string; region: EducationRegion }) {
    const options = [
        { id: 'latam' as const, href: path, label: 'LatAm' },
        { id: 'tx' as const, href: `${path}?r=tx`, label: 'Texas' },
    ];

    return (
        <div role="group" aria-label="Región del copy" className="inline-flex rounded-full border border-[#E7E2F3] bg-white p-1">
            {options.map((option) => {
                const active = region === option.id;
                return (
                    <Link
                        key={option.id}
                        href={option.href}
                        scroll={false}
                        aria-current={active ? 'true' : undefined}
                        className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold ${
                            active ? 'bg-[#6D28D9] text-white' : 'text-slate-700 hover:bg-[#F2EBFD]'
                        }`}
                    >
                        {option.label}
                    </Link>
                );
            })}
        </div>
    );
}
