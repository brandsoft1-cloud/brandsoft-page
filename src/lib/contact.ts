/** Enlaces de conversión unificados (WhatsApp, teléfono legible). */

export const WHATSAPP_E164 = '573213296957';

export const PHONE_DISPLAY = '+57 321 329 6957';

const DEFAULT_WHATSAPP_TEXT =
    'Hola BrandSoft, quiero una cotización / asesoría. Me interesa: ';

export function whatsAppHref(message?: string): string {
    const text = message?.trim() || DEFAULT_WHATSAPP_TEXT;
    return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

/** Mensajes precargados por pilar Solutions (CRO). */
export const WA_PILLAR = {
    captacion:
        'Hola BrandSoft, quiero un diagnóstico de captación de clientes / leads B2B para mi empresa.',
    seo: 'Hola BrandSoft, quiero un diagnóstico de SEO, SEO local o GEO para mi empresa.',
    presencia:
        'Hola BrandSoft, quiero un diagnóstico de web / presencia digital para mi empresa.',
    automatizacion:
        'Hola BrandSoft, quiero un diagnóstico de automatización e IA para procesos de mi empresa.',
    software:
        'Hola BrandSoft, quiero un diagnóstico de software a medida o integraciones para mi empresa.',
    home: 'Hola BrandSoft, quiero un diagnóstico para captar más clientes y automatizar procesos. Vengo de la home.',
    diagnostico:
        'Hola BrandSoft, quiero agendar un diagnóstico comercial para mi empresa.',
} as const;

export type WaPillarKey = keyof typeof WA_PILLAR;

export function whatsAppPillar(key: WaPillarKey): string {
    return whatsAppHref(WA_PILLAR[key]);
}
