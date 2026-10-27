'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { NEED_OPTIONS } from '@/data/solutions/home';
import { whatsAppHref } from '@/lib/contact';
import { trackSolutionsEvent } from '@/lib/solutions-analytics';

type Props = {
    id?: string;
    className?: string;
};

export default function DiagnosticForm({ id = 'diagnostico', className }: Props) {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [contact, setContact] = useState('');
    const [need, setNeed] = useState(NEED_OPTIONS[0].value);
    const [message, setMessage] = useState('');
    const [consent, setConsent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [started, setStarted] = useState(false);

    function onFocusField() {
        if (!started) {
            setStarted(true);
            trackSolutionsEvent('form_start', { form: 'diagnostico' });
        }
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);

        if (!name.trim() || !company.trim() || !contact.trim()) {
            setError('Completa nombre, empresa y correo o WhatsApp.');
            trackSolutionsEvent('form_error', { reason: 'missing_fields' });
            return;
        }
        if (!consent) {
            setError('Debes aceptar el tratamiento de datos para continuar.');
            trackSolutionsEvent('form_error', { reason: 'consent' });
            return;
        }

        const needLabel = NEED_OPTIONS.find((o) => o.value === need)?.label ?? need;
        const body = [
            'Hola BrandSoft, quiero agendar un diagnóstico.',
            `Nombre: ${name.trim()}`,
            `Empresa: ${company.trim()}`,
            `Contacto: ${contact.trim()}`,
            `Necesidad: ${needLabel}`,
            message.trim() ? `Detalle: ${message.trim()}` : null,
        ]
            .filter(Boolean)
            .join('\n');

        const popup = window.open(whatsAppHref(body), '_blank', 'noopener,noreferrer');
        if (!popup) {
            setError(
                'No pudimos abrir WhatsApp (bloqueo de ventanas). Usa el botón “Ir directo a WhatsApp” o permite popups.',
            );
            trackSolutionsEvent('form_error', { reason: 'popup_blocked' });
            return;
        }
        trackSolutionsEvent('form_success', { channel: 'whatsapp', need });
        trackSolutionsEvent('wa_click', { source: 'diagnostico_form' });
    }

    return (
        <section
            id={id}
            className={`scroll-mt-24 py-24 relative overflow-hidden ${className ?? ''}`}
            aria-labelledby="diagnostico-titulo"
        >
            <div className="absolute top-1/2 right-0 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
                            Diagnóstico
                        </p>
                        <h2
                            id="diagnostico-titulo"
                            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
                        >
                            Cuéntanos qué quieres mejorar en tu empresa
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl">
                            Analizamos tu situación y te ayudamos a identificar por dónde empezar. El
                            formulario abre WhatsApp con tu mensaje listo — te respondemos por ahí.
                        </p>
                        <a
                            href={whatsAppHref(
                                'Hola BrandSoft, quiero un diagnóstico para mi empresa. Prefiero escribir directo por WhatsApp.',
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackSolutionsEvent('wa_click', { source: 'diagnostico_direct' })}
                            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden />
                            Ir directo a WhatsApp
                        </a>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 space-y-5"
                        noValidate
                        data-form="diagnostico-solutions"
                    >
                        <div>
                            <label htmlFor="diag-name" className="block text-sm font-medium text-gray-400 mb-2">
                                Nombre
                            </label>
                            <input
                                id="diag-name"
                                name="name"
                                autoComplete="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={onFocusField}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="diag-company" className="block text-sm font-medium text-gray-400 mb-2">
                                Empresa
                            </label>
                            <input
                                id="diag-company"
                                name="company"
                                autoComplete="organization"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                onFocus={onFocusField}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
                                placeholder="Nombre de tu empresa"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="diag-contact" className="block text-sm font-medium text-gray-400 mb-2">
                                Correo o WhatsApp
                            </label>
                            <input
                                id="diag-contact"
                                name="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                onFocus={onFocusField}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
                                placeholder="correo@empresa.com o 300…"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="diag-need" className="block text-sm font-medium text-gray-400 mb-2">
                                Principal necesidad
                            </label>
                            <select
                                id="diag-need"
                                name="need"
                                value={need}
                                onChange={(e) => setNeed(e.target.value)}
                                onFocus={onFocusField}
                                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
                            >
                                {NEED_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="diag-message" className="block text-sm font-medium text-gray-400 mb-2">
                                Descripción (opcional)
                            </label>
                            <textarea
                                id="diag-message"
                                name="message"
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onFocus={onFocusField}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
                                placeholder="Qué quieres mejorar y en cuánto tiempo"
                            />
                        </div>
                        <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="mt-1 rounded border-white/20"
                            />
                            <span>
                                Autorizo el tratamiento de mis datos para contactarme sobre este diagnóstico.
                                Puedes escribir a{' '}
                                <a
                                    href="mailto:contacto@brandsoft.com.co"
                                    className="text-violet-300 underline-offset-2 hover:underline"
                                >
                                    contacto@brandsoft.com.co
                                </a>{' '}
                                para ejercer tus derechos.
                            </span>
                        </label>
                        {error ? (
                            <p role="alert" className="text-sm text-amber-300">
                                {error}
                            </p>
                        ) : null}
                        <button
                            type="submit"
                            className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-violet-500"
                        >
                            Solicitar diagnóstico por WhatsApp
                            <Send className="w-4 h-4" aria-hidden />
                        </button>
                        <p className="text-center text-xs text-gray-500">
                            No simulamos envío por correo: abrimos WhatsApp con tu solicitud para respuesta real.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
