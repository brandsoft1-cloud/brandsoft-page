import { WEB_CON_IA, type WebConIaFaq } from '@/data/education/web-con-ia';
import type { EducationRegion } from '@/data/education/types';

export const WEB_CON_IA_GEO_SLUGS = ['co', 'mx', 'pe', 'ar', 'cl', 'tx'] as const;

export type WebConIaGeoSlug = (typeof WEB_CON_IA_GEO_SLUGS)[number];

export type WebConIaGeoMarket = {
    slug: WebConIaGeoSlug;
    label: string;
    countryName: string;
    region: EducationRegion;
    ogLocale: string;
    hreflang: string;
    path: string;
    keyword: string;
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lede: string;
    symptoms: readonly [string, string, string];
    marketNote: string;
    localFaqs: readonly WebConIaFaq[];
};

export const WEB_CON_IA_GEO_MARKETS: readonly WebConIaGeoMarket[] = [
    {
        slug: 'co',
        label: 'Colombia',
        countryName: 'Colombia',
        region: 'latam',
        ogLocale: 'es_CO',
        hreflang: 'es-CO',
        path: '/crear-pagina-web-con-ia/co',
        keyword: 'crear página web con IA Colombia',
        metaTitle: 'Crear página web con IA Colombia | BrandSoft Education',
        metaDescription:
            'Webinar BrandSoft Education en Colombia: crea y vende una landing con IA + Next.js sin programar. Deploy Vercel, dominio, SEO básico. Precio especial USD 190.',
        headline: 'Crea (y vende) una página web con IA en Colombia',
        lede: 'Para emprendedores, freelancers y equipos en Bogotá, Medellín, Cali y el resto del país. Dos lives de 90 min: landing en producción + método para cobrarla sin regalar horas.',
        symptoms: [
            'Quiero mi web ya y en Colombia las agencias se pasan de precio.',
            'Uso ChatGPT pero no sé dejar la página en internet.',
            'Quiero cobrar landings a clientes locales o remotos.',
        ],
        marketNote: 'Foco Colombia. Un solo live para LatAm + Texas. Precios en USD.',
        localFaqs: [
            {
                q: '¿El horario es para Colombia?',
                a: 'Sí: anunciamos en hora Colombia (COT). Si estás en otra ciudad del país, es la misma zona.',
            },
        ],
    },
    {
        slug: 'mx',
        label: 'México',
        countryName: 'México',
        region: 'latam',
        ogLocale: 'es_MX',
        hreflang: 'es-MX',
        path: '/crear-pagina-web-con-ia/mx',
        keyword: 'crear página web con IA México',
        metaTitle: 'Crear página web con IA México | BrandSoft Education',
        metaDescription:
            'Webinar BrandSoft Education en México: landing con IA + Next.js sin programar. Vercel, dominio, SEO básico y guion de venta. Precio especial USD 190.',
        headline: 'Crea (y vende) una página web con IA en México',
        lede: 'Para profesionales en CDMX, Guadalajara, Monterrey y el resto del país que quieren su web o cobrar landings. Dos sesiones de 90 min con método y deploy.',
        symptoms: [
            'Necesito landing rápido para un cliente o para mi negocio.',
            'No quiero pelearme con WordPress lento.',
            'Quiero un flujo que pueda repetir y cobrar en México.',
        ],
        marketNote: 'Foco México. Mismo live global. Precios en USD.',
        localFaqs: [
            {
                q: '¿Puedo tomar el webinar desde México?',
                a: 'Sí. Es online. La fecha se anuncia en COT; te damos el equivalente a tu zona al confirmar el pago.',
            },
        ],
    },
    {
        slug: 'pe',
        label: 'Perú',
        countryName: 'Perú',
        region: 'latam',
        ogLocale: 'es_PE',
        hreflang: 'es-PE',
        path: '/crear-pagina-web-con-ia/pe',
        keyword: 'crear página web con IA Perú',
        metaTitle: 'Crear página web con IA Perú | BrandSoft Education',
        metaDescription:
            'Webinar BrandSoft Education en Perú: crea una landing con IA + Next.js, súbela a Vercel y aprende a venderla. USD 190 lanzamiento.',
        headline: 'Crea (y vende) una página web con IA en Perú',
        lede: 'Para talento en Lima y el resto del Perú: dos webinars para salir con URL pública y un guion comercial claro.',
        symptoms: [
            'Me piden web y no sé por dónde empezar sin contratar agencia.',
            'Quiero entregar algo moderno (Next.js) sin ser developer senior.',
            'Necesito precio y alcance para no regalar revisiones.',
        ],
        marketNote: 'Foco Perú. Mismo live. Precios en USD.',
        localFaqs: [
            {
                q: '¿El pago es en soles?',
                a: 'El checkout es en USD por PayPal. Puedes pagar con tarjeta; el banco convierte según tu tipo de cambio.',
            },
        ],
    },
    {
        slug: 'ar',
        label: 'Argentina',
        countryName: 'Argentina',
        region: 'latam',
        ogLocale: 'es_AR',
        hreflang: 'es-AR',
        path: '/crear-pagina-web-con-ia/ar',
        keyword: 'crear página web con IA Argentina',
        metaTitle: 'Crear página web con IA Argentina | BrandSoft Education',
        metaDescription:
            'Webinar BrandSoft Education en Argentina: landing con IA + Next.js sin programar. Deploy, dominio, SEO y cómo venderla. Precio especial USD 190.',
        headline: 'Crea (y vende) una página web con IA en Argentina',
        lede: 'Para freelancers y emprendedores en Buenos Aires, Córdoba, Rosario y el resto del país. Método + deploy + guion de venta en USD.',
        symptoms: [
            'Quiero cobrar en USD una landing sin armar una agencia entera.',
            'Necesito un stack simple: IA + Next + Vercel.',
            'Me trabo en DNS y dominio y pierdo el cierre con el cliente.',
        ],
        marketNote: 'Foco Argentina. Mismo live. Precios en USD.',
        localFaqs: [
            {
                q: '¿Sirve si cobro clientes afuera?',
                a: 'Sí. El guion contempla oferta en USD y alcance fijo. No prometemos volumen de clientes.',
            },
        ],
    },
    {
        slug: 'cl',
        label: 'Chile',
        countryName: 'Chile',
        region: 'latam',
        ogLocale: 'es_CL',
        hreflang: 'es-CL',
        path: '/crear-pagina-web-con-ia/cl',
        keyword: 'crear página web con IA Chile',
        metaTitle: 'Crear página web con IA Chile | BrandSoft Education',
        metaDescription:
            'Webinar BrandSoft Education en Chile: crea y vende landings con IA + Next.js. Vercel, dominio, SEO básico. Precio especial USD 190.',
        headline: 'Crea (y vende) una página web con IA en Chile',
        lede: 'Para profesionales en Santiago y el resto de Chile que quieren su página o un servicio vendible de landings.',
        symptoms: [
            'Necesito web profesional sin meses de desarrollo.',
            'Quiero un proceso repetible para clientes chilenos.',
            'No quiero cursos eternos: quiero salir con URL.',
        ],
        marketNote: 'Foco Chile. Mismo live. Precios en USD.',
        localFaqs: [
            {
                q: '¿Incluye grabación si no puedo en vivo?',
                a: 'Sí. Replay 6 meses. El live suma Q&A; la grabación cubre el método completo.',
            },
        ],
    },
    {
        slug: 'tx',
        label: 'Texas',
        countryName: 'Texas',
        region: 'tx',
        ogLocale: 'es_US',
        hreflang: 'es-US',
        path: '/crear-pagina-web-con-ia/tx',
        keyword: 'crear página web con IA Texas',
        metaTitle: 'Crear página web con IA Texas | BrandSoft Education',
        metaDescription:
            'Mismo webinar BrandSoft Education para Texas: landing con IA + Next.js, deploy en Vercel, SEO básico y guion de venta. Precio lanzamiento USD 190.',
        headline: 'Crear (y vender) una página web con IA — Texas',
        lede: 'Mismo live 2×90 para profesionales en Texas: landing en producción, checklist de dominio y guion de oferta. LatAm es el mercado primario; Texas tiene el mismo producto en USD.',
        symptoms: [
            'Necesito una landing moderna sin contratar una agencia completa.',
            'Sé usar ChatGPT pero no sé dejarla en producción.',
            'Quiero una oferta repetible para vender local o remoto.',
        ],
        marketNote:
            'Texas es disponibilidad de producto. El GTM primario sigue en LatAm; misma cohorte live y precios en USD.',
        localFaqs: [
            {
                q: '¿Es distinto a la oferta LatAm?',
                a: 'No. Mismas dos sesiones, materiales y precio de lanzamiento USD 190. Entras al mismo live.',
            },
        ],
    },
];

export type WebConIaPageCopy = {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lede: string;
    symptoms: readonly [string, string, string];
    marketNote: string;
    faqs: readonly WebConIaFaq[];
};

export function isWebConIaGeoSlug(value: string): value is WebConIaGeoSlug {
    return (WEB_CON_IA_GEO_SLUGS as readonly string[]).includes(value);
}

export function getWebConIaGeoMarket(slug: WebConIaGeoSlug): WebConIaGeoMarket {
    const market = WEB_CON_IA_GEO_MARKETS.find((m) => m.slug === slug);
    if (!market) throw new Error(`Unknown Web con IA geo: ${slug}`);
    return market;
}

export type WebConIaGeoPage = {
    market: WebConIaGeoMarket;
    copy: WebConIaPageCopy;
    languageAlternates: Record<string, string>;
};

export function getWebConIaHubCopy(): WebConIaPageCopy {
    return {
        metaTitle: WEB_CON_IA.metaTitle,
        metaDescription: WEB_CON_IA.metaDescription,
        headline: WEB_CON_IA.headline,
        lede: WEB_CON_IA.lede,
        symptoms: WEB_CON_IA.symptoms,
        marketNote: WEB_CON_IA.marketNote,
        faqs: [...WEB_CON_IA.faqs],
    };
}

export function getWebConIaGeoPage(slug: WebConIaGeoSlug): WebConIaGeoPage {
    const market = getWebConIaGeoMarket(slug);
    const copy: WebConIaPageCopy = {
        metaTitle: market.metaTitle,
        metaDescription: market.metaDescription,
        headline: market.headline,
        lede: market.lede,
        symptoms: market.symptoms,
        marketNote: market.marketNote,
        faqs: [...market.localFaqs, ...WEB_CON_IA.faqs],
    };

    const languageAlternates: Record<string, string> = {
        'x-default': WEB_CON_IA.path,
    };
    for (const m of WEB_CON_IA_GEO_MARKETS) {
        languageAlternates[m.hreflang] = m.path;
    }

    return { market, copy, languageAlternates };
}

export function webConIaGeoStaticParams(): { geo: WebConIaGeoSlug }[] {
    return WEB_CON_IA_GEO_SLUGS.map((geo) => ({ geo }));
}
