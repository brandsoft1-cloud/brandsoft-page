import { NextResponse } from 'next/server';
import { validateEducationLead } from '@/lib/education-lead';

export const runtime = 'nodejs';

const FAIL =
    'No pudimos enviar tu solicitud. Intenta de nuevo en un momento. Si sigue igual, la llamada no quedó agendada.';

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { ok: false, error: 'No entendimos el formulario. Recarga la página y vuelve a enviarlo.' },
            { status: 400 }
        );
    }

    const parsed = validateEducationLead(body);
    if (!parsed.ok) {
        return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
    }

    const webhook = process.env.EDUCATION_DIAGNOSTIC_WEBHOOK?.trim();
    if (!webhook) {
        return NextResponse.json(
            {
                ok: false,
                error: 'El formulario todavía no tiene a dónde enviar la solicitud. Escríbele a Mauricio al +57 321 329 6957 y pide la llamada de diagnóstico de 15 minutos.',
            },
            { status: 503 }
        );
    }

    try {
        const response = await fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                source: 'brandsoft-education',
                receivedAt: new Date().toISOString(),
                ...parsed.value,
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ ok: false, error: FAIL }, { status: 502 });
        }
    } catch {
        return NextResponse.json({ ok: false, error: FAIL }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
