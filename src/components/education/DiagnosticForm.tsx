'use client';

import { FormEvent, useState } from 'react';
import { validateEducationLead, type LeadProgram, type LeadRegion } from '@/lib/education-lead';

const CTA = 'Agendar llamada de diagnóstico de 15 minutos';

type Props = {
    programa: LeadProgram;
    region: LeadRegion;
    lockProgram?: boolean;
    lockRegion?: boolean;
};

export default function DiagnosticForm({ programa, region, lockProgram = false, lockRegion = true }: Props) {
    const [error, setError] = useState<string | null>(null);
    const [ok, setOk] = useState(false);
    const [pending, setPending] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        const data = new FormData(event.currentTarget);
        const payload = {
            nombre: String(data.get('nombre') ?? ''),
            correo: String(data.get('correo') ?? ''),
            whatsapp: String(data.get('whatsapp') ?? ''),
            programa: String(data.get('programa') ?? ''),
            region: String(data.get('region') ?? ''),
            contexto: String(data.get('contexto') ?? ''),
        };

        const parsed = validateEducationLead(payload);
        if (!parsed.ok) {
            setError(parsed.error);
            return;
        }

        setPending(true);
        try {
            const response = await fetch('/api/education/diagnostico', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(parsed.value),
            });
            const json = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
            if (!response.ok || !json?.ok) {
                setError(json?.error || 'No pudimos enviar tu solicitud. Intenta de nuevo en un momento.');
                return;
            }
            setOk(true);
        } catch {
            setError('No pudimos enviar tu solicitud. Revisa tu conexión e intenta de nuevo. La llamada no quedó agendada.');
        } finally {
            setPending(false);
        }
    }

    if (ok) {
        return (
            <p className="text-lg text-[#047857] font-medium" role="status">
                Recibimos tu solicitud. Mauricio te escribe para cuadrar la llamada de diagnóstico de 15 minutos.
            </p>
        );
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-4" noValidate>
            <Field label="Nombre" name="nombre" autoComplete="name" required />
            <Field label="Correo" name="correo" type="email" autoComplete="email" required />
            <Field label="WhatsApp con indicativo" name="whatsapp" type="tel" autoComplete="tel" required />
            {lockProgram ? (
                <input type="hidden" name="programa" value={programa} />
            ) : (
                <label className="grid gap-1.5 text-sm font-medium text-slate-800">
                    Programa
                    <select
                        name="programa"
                        defaultValue={programa}
                        className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900"
                    >
                        <option value="sin-definir">Todavía no sé cuál</option>
                        <option value="career-pack">Career Pack · empleo y rumbo</option>
                        <option value="producto-real">Producto Real · software</option>
                        <option value="clientes-reales">Clientes Reales · marketing</option>
                    </select>
                </label>
            )}
            {lockRegion ? (
                <input type="hidden" name="region" value={region} />
            ) : (
                <label className="grid gap-1.5 text-sm font-medium text-slate-800">
                    Dónde estás
                    <select
                        name="region"
                        defaultValue={region}
                        className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900"
                    >
                        <option value="latam">LatAm</option>
                        <option value="tx">Texas</option>
                    </select>
                </label>
            )}
            <label className="grid gap-1.5 text-sm font-medium text-slate-800">
                Qué quieres construir
                <textarea
                    name="contexto"
                    rows={4}
                    maxLength={500}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900"
                />
            </label>
            {error ? (
                <p className="text-sm text-red-800" role="alert">
                    {error}
                </p>
            ) : null}
            <button
                type="submit"
                disabled={pending}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#047857] px-6 py-3 text-center text-base font-semibold text-white hover:bg-[#065f46] disabled:opacity-60"
            >
                {pending ? 'Enviando…' : CTA}
            </button>
        </form>
    );
}

function Field({
    label,
    name,
    type = 'text',
    autoComplete,
    required,
}: {
    label: string;
    name: string;
    type?: string;
    autoComplete?: string;
    required?: boolean;
}) {
    return (
        <label className="grid gap-1.5 text-sm font-medium text-slate-800">
            {label}
            <input
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={required}
                className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900"
            />
        </label>
    );
}
