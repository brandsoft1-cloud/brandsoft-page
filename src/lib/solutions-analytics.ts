/** Eventos CRO Solutions — sin PII. No inventa IDs GA4. */

type SolutionsEvent =
    | 'cta_click'
    | 'wa_click'
    | 'form_start'
    | 'form_success'
    | 'form_error'
    | 'demo_click';

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
    }
}

export function trackSolutionsEvent(
    event: SolutionsEvent,
    params?: Record<string, string | number | boolean>,
) {
    if (typeof window === 'undefined') return;
    const payload = { event, ...params };
    try {
        window.dataLayer?.push(payload);
        window.gtag?.('event', event, params);
    } catch {
        /* analytics opcional */
    }
}
