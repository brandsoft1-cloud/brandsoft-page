'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
    Clock3,
    Landmark,
    Laptop2,
    Rocket,
    UserRound,
    Users,
} from 'lucide-react';

type ServiceType = 'webinar-corporativo' | 'mentoria-1-1' | 'proyecto-software';

type FormData = {
    fullName: string;
    email: string;
    serviceType: ServiceType;
    challenge: string;
};

type DataLayerWindow = Window & {
    dataLayer?: Array<Record<string, unknown>>;
};

const PERSONAL_WHATSAPP_E164 = '573185157993';

const initialFormData: FormData = {
    fullName: '',
    email: '',
    serviceType: 'webinar-corporativo',
    challenge: '',
};

const travelPhotos = [
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.34_PM-be6baa62-4731-485a-b21e-92902206a332.png',
        alt: 'Mauricio en una cata de vinos',
        caption: 'Curiosidad y aprendizaje constante.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.35_PM-93f6cec6-0154-4b53-b3af-474cbe7b59ef.png',
        alt: 'Mauricio en salida por la ciudad',
        caption: 'Disfruto el camino y las conexiones reales.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.35_PM__1_-3abcca9a-4ced-47ee-a3ef-b4138db415ac.png',
        alt: 'Mauricio en bodega de vinos',
        caption: 'Disciplina, enfoque y visión de largo plazo.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.35_PM__2_-a1c58056-147f-47a1-9e67-c1c21321c882.png',
        alt: 'Mauricio en Buenos Aires',
        caption: 'Viajar me inspira a pensar en grande.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.35_PM__3_-b4268736-68ff-44ad-addd-c26227677184.png',
        alt: 'Mauricio en restaurante',
        caption: 'Trabajo duro, pero también sé disfrutar.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.36_PM-d03e4551-f90b-4ca7-967f-9c650d0a5000.png',
        alt: 'Mauricio en paisaje de montaña',
        caption: 'La altura recuerda que siempre hay otro nivel.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.36_PM__1_-749e2949-5117-43bc-9e8b-ceffc2a98da5.png',
        alt: 'Mauricio en caminito',
        caption: 'Una vida alta es posible con estrategia.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.36_PM__2_-3196a06f-4d20-4081-953b-cc3d88132d14.png',
        alt: 'Mauricio frente a fuente histórica',
        caption: 'Consistencia diaria, resultados extraordinarios.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.36_PM__3_-42b22a20-4545-4d99-a2ec-3fb6bc1c4b45.png',
        alt: 'Mauricio frente a estadio',
        caption: 'Mentalidad competitiva en tecnología y negocios.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.36_PM__4_-84b42807-6d0c-41d1-93a5-756506b57882.png',
        alt: 'Mauricio en ambiente nocturno',
        caption: 'Autenticidad, energía y enfoque humano.',
    },
    {
        src: '/images/mauricio-viajes/WhatsApp_Image_2026-05-06_at_3.24.36_PM__5_-cd370125-6725-4262-a3ef-48b4011008f3.png',
        alt: 'Mauricio en zona histórica de viaje',
        caption: 'Este soy yo: experto tech que disfruta la vida.',
    },
];

function personalWhatsAppHref(message: string): string {
    return `https://wa.me/${PERSONAL_WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}

function trackEvent(eventName: string, payload?: Record<string, unknown>) {
    if (typeof window === 'undefined') return;
    const analyticsWindow = window as DataLayerWindow;
    analyticsWindow.dataLayer?.push({
        event: eventName,
        ...payload,
    });
}

export default function BookingLanding() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const fallbackHref = useMemo(() => {
        const summary = `Nombre: ${formData.fullName || 'Sin nombre'} | Email: ${formData.email || 'Sin email'} | Interes: ${formData.serviceType} | Reto: ${formData.challenge || 'No especificado'}`;
        return personalWhatsAppHref(`Hola Mauricio, quiero agendar una llamada. ${summary}`);
    }, [formData]);

    const genericBookingHref = useMemo(
        () =>
            personalWhatsAppHref(
                'Hola Mauricio, quiero agendar una llamada de 15 min para conseguir trabajo en tech. Quiero mentoría para mi nivel y trabajar nervios/emociones para rendir mejor en entrevistas.'
            ),
        []
    );

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        trackEvent('submit_prequal_form', { service_type: formData.serviceType });
        const message = `Hola Mauricio, quiero agendar una llamada.\n\nNombre: ${formData.fullName}\nEmail: ${formData.email}\nInteres: ${formData.serviceType}\nReto principal: ${formData.challenge}`;
        window.open(personalWhatsAppHref(message), '_blank', 'noopener,noreferrer');
        setIsSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-[#050505] text-[#F9FAFB] selection:bg-indigo-500/30">
            <header className="border-b border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="font-heading text-xl font-bold tracking-tight">
                        Brand<span className="text-indigo-400">Soft</span>
                    </Link>
                    <a
                        href={genericBookingHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_agendar_header')}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 px-4 py-2 text-xs font-black uppercase tracking-wide text-indigo-300 transition hover:bg-indigo-500/15"
                    >
                        Agendar llamada (15 min)
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </header>

            <section className="border-b border-white/10">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="mb-4 inline-flex items-center rounded-full border border-rose-400/40 bg-rose-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-rose-200">
                            Si hoy te bloquean las entrevistas, esta mentoría es para ti
                        </p>
                        <h1 className="font-heading text-4xl font-black leading-tight md:text-5xl">
                            Te dan miedo las entrevistas?
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-300 to-emerald-300">
                                No consigues trabajo aun?
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
                            Te acompaño paso a paso para cambiar eso: mentorias para todos los niveles (principiante, junior, mid y senior), con CV + LinkedIn + simulacion real de entrevistas y trabajo de nerviosismo e inteligencia emocional para que rindas con seguridad y cierres ofertas.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href={genericBookingHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('click_agendar_hero')}
                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-indigo-400"
                            >
                                Agendar llamada (15 min)
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <span className="text-xs text-slate-400">Llamada de 15 min | Todos los niveles | Trabajo emocional + estrategia</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black shadow-2xl">
                            <Image
                                src="/images/mauricio-forero-ceo.png"
                                alt="Mauricio Forero - mentor y fundador"
                                width={1200}
                                height={1600}
                                className="h-full w-full object-cover object-[center_20%]"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-5 -left-4 rounded-2xl border border-indigo-400/40 bg-black/90 px-4 py-3 backdrop-blur">
                            <p className="text-[11px] font-black uppercase tracking-wider text-indigo-300">Impacto comprobado</p>
                            <p className="mt-1 text-sm font-semibold text-white">4+ años de mentorías | 500+ personas guiadas</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Confianza construida en operaciones reales</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300">
                        <span className="rounded-full border border-white/15 px-4 py-2">Globant</span>
                        <span className="rounded-full border border-white/15 px-4 py-2">TripleTen</span>
                        <span className="rounded-full border border-white/15 px-4 py-2">Talently</span>
                        <span className="rounded-full border border-white/15 px-4 py-2">Brandsoft</span>
                    </div>
                    <div className="mt-6 grid gap-3 text-sm text-slate-400 md:grid-cols-3">
                        <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Experiencia en entornos tech de alto rendimiento.</p>
                        <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Mentoria aplicada a escenarios reales de negocio.</p>
                        <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Vision tecnica + negocio + inteligencia emocional.</p>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-start">
                    <div>
                        <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-300">
                            Mi historia
                        </p>
                        <h2 className="mt-4 font-heading text-3xl font-black leading-tight md:text-4xl">
                            De dev corporativo a mentor de alto impacto y fundador de empresas
                        </h2>
                        <p className="mt-5 text-slate-300">
                            Soy Mauricio Forero. Trabajo como software developer en Globant, doy mentorías técnicas en TripleTen, antes fui mentor en Talently ayudando a personas a conseguir trabajo y pasar entrevistas técnicas, y también lidero mi empresa de software y una empresa de catering en Ibagué.
                        </p>
                        <p className="mt-4 text-slate-400">
                            Llevo más de 4 años dando mentorías y he ayudado a más de 500 personas a crecer en carrera, liderazgo y resultados. Mi enfoque combina tecnología, inteligencia emocional y ejecución comercial.
                        </p>
                        <p className="mt-4 text-slate-400">
                            Me encanta viajar porque me recuerda para qué hacemos todo esto: quiero que más personas tech ganen sueldos altos, construyan un estilo de vida alto y que las empresas confíen en procesos sólidos para escalar sin caos.
                        </p>
                        <a
                            href={personalWhatsAppHref(
                                'Hola Mauricio, vi tu historia en la landing y quiero agendar una llamada para evaluar mi caso.'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-emerald-400"
                        >
                            Quiero agendar contigo
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-4">
                        <div className="grid gap-4 sm:grid-cols-3">
                            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                <Users className="h-5 w-5 text-indigo-300" />
                                <p className="mt-3 text-2xl font-black">500+</p>
                                <p className="text-xs uppercase tracking-wide text-slate-400">Personas mentorizadas</p>
                            </article>
                            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                <Clock3 className="h-5 w-5 text-indigo-300" />
                                <p className="mt-3 text-2xl font-black">4+</p>
                                <p className="text-xs uppercase tracking-wide text-slate-400">Años como mentor</p>
                            </article>
                            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                <BriefcaseBusiness className="h-5 w-5 text-indigo-300" />
                                <p className="mt-3 text-2xl font-black">3 frentes</p>
                                <p className="text-xs uppercase tracking-wide text-slate-400">Corporativo, mentoring y empresa</p>
                            </article>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                <Image
                                    src="/images/mauricio-forero-ceo.png"
                                    alt="Mauricio Forero en retrato profesional"
                                    width={900}
                                    height={1200}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="grid gap-4">
                                <div className="overflow-hidden rounded-2xl border border-white/10">
                                    <Image
                                        src="/images/fushion-fitness-center-instagram.png"
                                        alt="Proyecto digital de alto impacto"
                                        width={1200}
                                        height={800}
                                        className="h-40 w-full object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-white/10">
                                    <Image
                                        src="/images/ecolimpieza-bogota-sitio.png"
                                        alt="Resultados de ejecucion en clientes"
                                        width={1200}
                                        height={800}
                                        className="h-40 w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-14">
                    <h2 className="font-heading text-3xl font-black md:text-4xl">Me encanta viajar, vivir y construir en grande</h2>
                    <p className="mt-4 max-w-4xl text-slate-400">
                        Estas fotos cuentan quién soy fuera de la pantalla. Disciplina, crecimiento y disfrute. Ese es el mismo enfoque que llevo a cada mentoría y a cada proceso con empresas: resultados de alto nivel con una vida que valga la pena.
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {travelPhotos.map((photo) => (
                            <article key={photo.src} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                                <div className="relative aspect-[3/4] w-full">
                                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                                </div>
                                <p className="px-4 py-3 text-sm text-slate-300">{photo.caption}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-14">
                    <h2 className="font-heading text-3xl font-bold">Esta llamada es para ti si buscas resultados concretos</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {[
                            {
                                title: 'Empresas',
                                description: 'Webinars y formacion para equipos de ingenieria con foco en ejecucion y liderazgo.',
                                icon: <Landmark className="h-5 w-5" />,
                                href: personalWhatsAppHref(
                                    'Hola Mauricio, quiero agendar una llamada para Webinar Corporativo y formacion de equipos.'
                                ),
                            },
                            {
                                title: 'Talento tech (junior, mid y senior)',
                                description: 'Mentoria 1:1 para conseguir trabajo, mejorar entrevistas y crecer con una ruta segun tu nivel.',
                                icon: <UserRound className="h-5 w-5" />,
                                href: personalWhatsAppHref(
                                    'Hola Mauricio, quiero agendar una llamada para mentoria 1:1. Busco conseguir trabajo y avanzar segun mi nivel actual.'
                                ),
                            },
                            {
                                title: 'Negocios con retos de software',
                                description: 'Consultoria y desarrollo para escalar arquitectura, producto y conversion.',
                                icon: <Laptop2 className="h-5 w-5" />,
                                href: personalWhatsAppHref(
                                    'Hola Mauricio, quiero agendar una llamada para Proyecto de Software / Consultoria.'
                                ),
                            },
                        ].map((item, index) => (
                            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                                <div className="inline-flex rounded-lg border border-indigo-400/40 bg-indigo-500/10 p-2 text-indigo-300">
                                    {item.icon}
                                </div>
                                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('click_agendar_mid', { segment_index: index })}
                                    className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-indigo-300 hover:text-indigo-200"
                                >
                                    Agendar llamada (15 min)
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10">
                <div className="mx-auto max-w-5xl px-4 py-14">
                    <h2 className="font-heading text-3xl font-bold">Que pasa en la llamada de 15 minutos</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {[
                            {
                                title: '1. Diagnostico',
                                description: 'Entiendo tu contexto, objetivo y nivel de urgencia.',
                                icon: <Clock3 className="h-5 w-5" />,
                            },
                            {
                                title: '2. Bloqueos',
                                description: 'Detecto cuellos de botella tecnicos y de liderazgo.',
                                icon: <CheckCircle2 className="h-5 w-5" />,
                            },
                            {
                                title: '3. Plan de accion',
                                description: 'Definimos un siguiente paso claro para ejecutar.',
                                icon: <Rocket className="h-5 w-5" />,
                            },
                        ].map((step) => (
                            <div key={step.title} className="rounded-xl border border-white/10 bg-black px-5 py-6">
                                <div className="text-indigo-300">{step.icon}</div>
                                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                                <p className="mt-2 text-sm text-slate-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <a
                        href={genericBookingHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_agendar_process')}
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/60 px-5 py-2 text-xs font-black uppercase tracking-wide text-indigo-200 transition hover:bg-indigo-500/15"
                    >
                        Reservar mi espacio
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>

            <section id="agenda" className="border-b border-white/10">
                <div className="mx-auto max-w-6xl px-4 py-16">
                    <h2 className="font-heading text-3xl font-bold">Agenda tu llamada de 15 minutos</h2>
                    {/* Flujo simple: formulario corto y respuesta por WhatsApp. */}
                    <p className="mt-3 max-w-3xl text-slate-400">
                        Completa el formulario para entender tu objetivo y abrir conversacion directa conmigo. Aplica para todos los perfiles: principiante, junior, mid y senior.
                    </p>

                    <div className="mt-8 grid gap-6 lg:grid-cols-5">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
                            <h3 className="text-lg font-bold">Cuéntame tu objetivo</h3>
                            <p className="mt-2 text-sm text-slate-400">
                                Compárteme estos datos y te respondo por WhatsApp para avanzar contigo.
                            </p>
                            {isSubmitted ? (
                                <div className="mt-5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                                    <p className="text-sm font-semibold text-emerald-300">
                                        Gracias. Recibi tu solicitud, continuamos por WhatsApp.
                                    </p>
                                    <a
                                        href={fallbackHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-black"
                                    >
                                        Abrir conversación por WhatsApp
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit} className="mt-5 space-y-4">
                                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Nombre
                                        <input
                                            required
                                            type="text"
                                            value={formData.fullName}
                                            onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
                                            className="mt-1 w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:border-indigo-400 focus:outline-none"
                                        />
                                    </label>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Email
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                                            className="mt-1 w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:border-indigo-400 focus:outline-none"
                                        />
                                    </label>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Tipo de solicitud
                                        <select
                                            value={formData.serviceType}
                                            onChange={(event) =>
                                                setFormData((prev) => ({ ...prev, serviceType: event.target.value as ServiceType }))
                                            }
                                            className="mt-1 w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:border-indigo-400 focus:outline-none"
                                        >
                                            <option value="webinar-corporativo">Webinar corporativo</option>
                                            <option value="mentoria-1-1">Mentoria 1:1</option>
                                            <option value="proyecto-software">Proyecto software</option>
                                        </select>
                                    </label>
                                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                                        Reto principal
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.challenge}
                                            onChange={(event) => setFormData((prev) => ({ ...prev, challenge: event.target.value }))}
                                            className="mt-1 w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:border-indigo-400 focus:outline-none"
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-indigo-400"
                                    >
                                        Continuar y abrir WhatsApp
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10">
                <div className="mx-auto max-w-5xl px-4 py-14">
                    <h2 className="font-heading text-3xl font-bold">Preguntas frecuentes</h2>
                    <div className="mt-6 space-y-4">
                        {[
                            {
                                q: 'La llamada tiene costo?',
                                a: 'No. Es una llamada diagnostico de 15 minutos para alinear objetivos y definir si podemos trabajar juntos.',
                            },
                            {
                                q: 'Que pasa despues de la llamada?',
                                a: 'Recibes una recomendacion concreta: propuesta de webinar, plan de mentoria o alcance para proyecto software.',
                            },
                            {
                                q: 'Si soy principiante puedo aplicar?',
                                a: 'Si. Esta mentoría es para todos los perfiles (principiante, junior, mid y senior). Adaptamos la ruta a tu nivel, tus bloqueos y tu objetivo laboral.',
                            },
                            {
                                q: 'Trabajas con empresas fuera de Colombia?',
                                a: 'Si. Trabajo remoto con equipos y empresas de distintos paises en espanol e ingles.',
                            },
                        ].map((item) => (
                            <article key={item.q} className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                                <h3 className="text-base font-bold">{item.q}</h3>
                                <p className="mt-1 text-sm text-slate-400">{item.a}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-24 pt-14">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="font-heading text-3xl font-black">
                        Si llegaste hasta aqui, ya sabes que necesitas estructura, claridad y ejecucion.
                    </h2>
                    <p className="mt-4 text-slate-400">
                        Agenda tu llamada de 15 minutos y construyamos el siguiente nivel para tu equipo, tu carrera o tu empresa.
                    </p>
                    <a
                        href={genericBookingHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_agendar_final')}
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-indigo-400"
                    >
                        Agendar llamada (15 min)
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </section>
        </main>
    );
}
