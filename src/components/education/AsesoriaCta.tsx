type Props = {
    meetUrl: string;
    whatsappUrl: string;
};

export default function AsesoriaCta({ meetUrl, whatsappUrl }: Props) {
    return (
        <section
            id="asesoria"
            className="scroll-mt-24 mx-auto max-w-5xl px-4 py-14"
            aria-labelledby="asesoria-titulo"
        >
            <div className="rounded-3xl border-2 border-[#A855F7] bg-[#F2EBFD] p-6 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#6D28D9]">
                    Antes de pagar
                </p>
                <h2
                    id="asesoria-titulo"
                    className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl"
                >
                    Habla con el asesor
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
                    Te atiende nuestro socio por Google Meet: resuelves dudas y cierras ahí. Si
                    preferís coordinar primero, escribimos por WhatsApp.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                        href={meetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#047857] px-6 py-3 text-center text-base font-semibold text-white hover:bg-[#065f46]"
                    >
                        Entrar a la Meet con el asesor
                    </a>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#047857] bg-white px-6 py-3 text-center text-base font-semibold text-[#047857] hover:bg-[#E3F5EF]"
                    >
                        Preferís WhatsApp primero
                    </a>
                </div>
            </div>
        </section>
    );
}
