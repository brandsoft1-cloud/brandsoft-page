/** Enlaces de conversión unificados (WhatsApp, teléfono legible). */

export const WHATSAPP_E164 = '573213296957';

export const PHONE_DISPLAY = '+57 321 329 6957';

const DEFAULT_WHATSAPP_TEXT =
    'Hola BrandSoft, quiero una cotización / asesoría. Me interesa: ';

export function whatsAppHref(message?: string): string {
    const text = message?.trim() || DEFAULT_WHATSAPP_TEXT;
    return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}
