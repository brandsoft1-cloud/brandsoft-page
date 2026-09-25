export const LEAD_PROGRAMS = ['career-pack', 'producto-real', 'clientes-reales', 'sin-definir'] as const;
export const LEAD_REGIONS = ['latam', 'tx'] as const;

export type LeadProgram = (typeof LEAD_PROGRAMS)[number];
export type LeadRegion = (typeof LEAD_REGIONS)[number];

export type EducationLead = {
    nombre: string;
    correo: string;
    whatsapp: string;
    programa: LeadProgram;
    region: LeadRegion;
    contexto: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEducationLead(body: unknown): { ok: true; value: EducationLead } | { ok: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { ok: false, error: 'No llegó la información del formulario. Vuelve a intentar.' };
    }

    const raw = body as Record<string, unknown>;
    const nombre = typeof raw.nombre === 'string' ? raw.nombre.trim() : '';
    const correo = typeof raw.correo === 'string' ? raw.correo.trim() : '';
    const whatsapp = typeof raw.whatsapp === 'string' ? raw.whatsapp.trim() : '';
    const programa = raw.programa;
    const region = raw.region;
    const contexto = typeof raw.contexto === 'string' ? raw.contexto.trim() : '';

    if (nombre.length < 2 || nombre.length > 80) {
        return { ok: false, error: 'Escribe tu nombre, entre 2 y 80 caracteres.' };
    }
    if (!EMAIL.test(correo) || correo.length > 120) {
        return { ok: false, error: 'El correo no parece válido.' };
    }
    const digits = whatsapp.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 15) {
        return { ok: false, error: 'El WhatsApp necesita entre 8 y 15 dígitos, con indicativo.' };
    }
    if (typeof programa !== 'string' || !LEAD_PROGRAMS.includes(programa as LeadProgram)) {
        return { ok: false, error: 'Elige el programa, o marca que todavía no sabes.' };
    }
    if (typeof region !== 'string' || !LEAD_REGIONS.includes(region as LeadRegion)) {
        return { ok: false, error: 'Elige LatAm o Texas.' };
    }
    if (contexto.length > 500) {
        return { ok: false, error: 'El contexto no puede pasar de 500 caracteres.' };
    }

    return {
        ok: true,
        value: {
            nombre,
            correo,
            whatsapp,
            programa: programa as LeadProgram,
            region: region as LeadRegion,
            contexto,
        },
    };
}
