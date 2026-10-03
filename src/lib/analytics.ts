/**
 * Medición: Google Analytics 4 + píxel de Meta.
 * Si la variable de entorno no está, el script no se carga y trackEvent no hace nada.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

/** Eventos estándar de Meta que usamos para optimizar la pauta. */
export type MetaStandardEvent = 'Contact' | 'Schedule' | 'Lead' | 'InitiateCheckout';

type Params = Record<string, string | number | undefined>;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
    }
}

export function trackEvent(name: string, params: Params = {}, metaEvent?: MetaStandardEvent): void {
    if (typeof window === 'undefined') return;
    window.gtag?.('event', name, params);
    if (metaEvent) window.fbq?.('track', metaEvent, params);
}

/** Clasifica un enlace de conversión. null = no es un enlace que medimos. */
export function classifyConversionLink(
    href: string,
): { name: string; metaEvent: MetaStandardEvent } | null {
    let url: URL;
    try {
        url = new URL(href, window.location.href);
    } catch {
        return null;
    }
    const host = url.hostname.replace(/^www\./, '');
    if (host === 'wa.me' || host === 'api.whatsapp.com') {
        return { name: 'lead_whatsapp_click', metaEvent: 'Contact' };
    }
    if (host === 'meet.google.com' || host === 'calendly.com' || host === 'cal.com') {
        return { name: 'schedule_click', metaEvent: 'Schedule' };
    }
    if (host === window.location.hostname.replace(/^www\./, '') && url.pathname.startsWith('/agendar')) {
        return { name: 'schedule_click', metaEvent: 'Schedule' };
    }
    if (host === 'paypal.com' || host === 'paypal.me') {
        return { name: 'begin_checkout', metaEvent: 'InitiateCheckout' };
    }
    return null;
}
