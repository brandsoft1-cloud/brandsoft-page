import type { EducationRegion, PricePair, ProgramSlug } from '@/data/education/types';

/**
 * Precios de BrandSoft Education.
 * El prompt llegó con [[PRECIO_SW_BASE]], [[PRECIO_SW_COMPLETA]],
 * [[PRECIO_MK_BASE]] y [[PRECIO_MK_COMPLETA]] sin reemplazar, y el repo
 * no tiene cifras verificadas. null = no publicar un número inventado.
 * Cuando Mauricio confirme, escribe el monto ya formateado
 * (ej. "$2.400.000 COP" o "USD 900").
 */
export const EDUCATION_PRICES: Record<ProgramSlug, Record<EducationRegion, PricePair>> = {
    'producto-real': {
        latam: { base: null, completa: null },
        tx: { base: null, completa: null },
    },
    'clientes-reales': {
        latam: { base: null, completa: null },
        tx: { base: null, completa: null },
    },
};

export const PRICE_PENDING_COPY =
    'El precio se confirma en la llamada de diagnóstico. No publicamos una cifra que todavía no está cerrada.';
