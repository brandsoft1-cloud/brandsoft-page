import { whatsAppHref } from '@/lib/contact';

export type WebConIaFaq = { q: string; a: string };

export type WebConIaSessionBlock = {
    mins: string;
    title: string;
    do: string;
};

export type WebConIaSession = {
    n: '01' | '02';
    name: string;
    subtitle: string;
    duration: string;
    blocks: readonly WebConIaSessionBlock[];
    deliverables: readonly string[];
};

export type WebConIaAvatar = {
    id: 'aprender' | 'mi-web' | 'vender';
    label: string;
    pain: string;
    promise: string;
};

export const WEB_CON_IA = {
    slug: 'web-con-ia',
    path: '/crear-pagina-web-con-ia',
    brandName: 'Web con IA · BrandSoft Education',
    cardTitle: 'Web con IA',
    cardQuestion: '¿Quieres crear (o vender) una landing con IA sin saber programar?',
    cardBody:
        'Dos webinars de 90 minutos: armas tu landing con IA + Next.js, la subes a Vercel, conectas dominio y te llevas el guion para venderla en tu país.',
    keyword: 'crear página web con IA',
    promiseLine:
        'En 2 webinars de 90 min armas tu landing con IA + Next.js, la subes a Vercel y te llevas el guion para venderla.',
    masterLine:
        'No aprendes a programar. Aprendes a producir y vender una web con IA — sin regalar tu tiempo.',
    priceAnchorUsd: 500,
    priceSpecialUsd: 190,
    replayMonths: 6,
    socioCierreMeetUrl:
        process.env.NEXT_PUBLIC_SOCIO_CIERRE_MEET_URL ?? 'https://meet.google.com/yco-bujk-njw',
    paypalHostedButtonId: process.env.NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID ?? 'Z8UWDTWD9ZNLW',
    paypalClientId:
        process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ??
        'BAAg3O0cCSD3XR_J-FzbwEs4cxLH848_cyS-Cn-OagcWFbwKP6LgB2UbO9IUDBoSidTr1DVxBsHvoO7kT4',
    metaTitle: 'Crear página web con IA (sin programar) | BrandSoft Education',
    metaDescription:
        'Aprende a crear y vender una landing con IA + Next.js sin programar. 2 webinars de 90 min, deploy en Vercel, dominio, SEO básico y guion de venta. Precio especial USD 190. BrandSoft Education.',
    headline: 'Crear página web con IA — sin saber programar',
    lede: 'Dos sesiones en vivo de 90 minutos. Sales con una landing en producción, SEO on-page básico, dominio en proceso y un guion para cobrarla en LatAm o Texas. BrandSoft Education.',
    symptoms: [
        'Quiero mi web ya, sin pagar una agencia cara.',
        'Sé usar ChatGPT pero no sé cómo dejar una página en internet.',
        'Quiero cobrar landings en mi país y no regalar revisiones.',
    ] as const,
    methodPillars: [
        {
            title: 'Cómo lo haces',
            detail:
                'Brief → prompts → plantilla Next.js → preview. IA como copiloto; tú decides estructura y mensaje.',
        },
        {
            title: 'Cómo lo explicas',
            detail:
                'Checklist en pantalla. Componentes, no “código mágico”. El cliente entiende qué compra.',
        },
        {
            title: 'Cómo lo vendes',
            detail: 'Guion WhatsApp, ancla de precio, alcance fijo y contrato lite. Sin scope creep.',
        },
    ] as const,
    avatars: [
        {
            id: 'aprender',
            label: 'Aprender',
            pain: 'Quiero entender la web moderna con IA',
            promise: 'Sales sabiendo el flujo real de punta a punta',
        },
        {
            id: 'mi-web',
            label: 'Mi web',
            pain: 'Quiero mi página ya, sin agencia cara',
            promise: 'Landing propia en producción (Vercel + dominio)',
        },
        {
            id: 'vender',
            label: 'Vender webs',
            pain: 'Quiero cobrar landing pages en mi país',
            promise: 'Método vendible + cómo cobras sin regalar horas',
        },
    ] as const satisfies readonly WebConIaAvatar[],
    sessions: [
        {
            n: '01',
            name: 'De la idea a la landing en local',
            subtitle: 'Sesión 1',
            duration: '90 min',
            blocks: [
                { mins: '0–8', title: 'Bienvenida + avatares', do: 'Eliges tu “por qué” (aprender / mi web / vender)' },
                { mins: '8–18', title: 'Brief de 1 página', do: 'Oferta, cliente ideal, CTA y prueba' },
                { mins: '18–35', title: 'IA escribe estructura + copy', do: 'Prompt pack: hero, secciones, FAQ, CTA' },
                { mins: '35–55', title: 'Starter Next.js', do: 'Clonas plantilla, pegas copy, ajustas secciones' },
                { mins: '55–75', title: 'Fotos / visual', do: 'Imágenes, next/image, alts — ritmo visual' },
                { mins: '75–90', title: 'Preview + cierre', do: 'Corres local, fixes típicos, prep sesión 2' },
            ],
            deliverables: [
                'Brief de 1 página',
                'Copy de landing',
                'Repo local corriendo',
                'Carpeta de assets',
            ],
        },
        {
            n: '02',
            name: 'SEO básico, Vercel, dominio y venta',
            subtitle: 'Sesión 2',
            duration: '90 min',
            blocks: [
                { mins: '0–10', title: 'Recap + show & tell', do: 'Feedback corto sobre avances' },
                { mins: '10–30', title: 'SEO on-page', do: 'title, description, H1, alts, OG, sitemap lite' },
                { mins: '30–50', title: 'Deploy Vercel', do: 'URL pública = entrega' },
                { mins: '50–70', title: 'Dominio + DNS', do: 'Apuntar a Vercel; plan B si DNS tarda' },
                { mins: '70–85', title: 'Cómo venderlo', do: 'Ancla, alcance, contrato 1 pág, objeciones' },
                { mins: '85–90', title: 'Mapa Education', do: 'Upsell 1:1 / Career Pack / otros programas' },
            ],
            deliverables: [
                'URL en Vercel',
                'Dominio en proceso o checklist DNS',
                'One-pager de oferta comercial',
                'Acceso al replay (6 meses)',
            ],
        },
    ] as const satisfies readonly WebConIaSession[],
    includes: [
        '2 webinars en vivo de 90 minutos',
        'Replay 6 meses',
        'Repo starter privado (solo quien pagó)',
        'Prompt pack + brief + checklist deploy',
        'Guion de venta WhatsApp',
    ] as const,
    notPromise: [
        'No sales “experto Next.js” en 3 horas.',
        'No e-commerce complejo, auth ni CMS enterprise.',
        'No tráfico garantizado ni ranking #1.',
        'No “agencia lista” en 3 horas — sí el primer producto vendible.',
    ] as const,
    faqs: [
        {
            q: '¿Necesito saber programar?',
            a: 'No. Usas una plantilla BrandSoft y IA como copiloto. Si te trabas, hay “modo pasajero”: sigues la pantalla.',
        },
        {
            q: '¿Qué incluye el precio de USD 190?',
            a: 'Los dos lives, replay 6 meses, repo privado, prompt pack, brief, checklist deploy/DNS y guion de venta. El valor ancla del programa es USD 500.',
        },
        {
            q: '¿Cómo hablo con el asesor antes de pagar?',
            a: 'Entra a la sección Asesoría: el socio te atiende por Google Meet (y hay WhatsApp de respaldo). Ahí resuelves dudas y cierras.',
        },
        {
            q: '¿Cuándo recibo el link del live y el repo?',
            a: 'Después de pagar, escribes por WhatsApp con tu correo. El equipo confirma fecha/hora COT, invita al repo privado y te da el acceso al Meet del live.',
        },
        {
            q: '¿Hay cupo limitado?',
            a: 'No hay tope duro de asientos en el Meet. El precio especial USD 190 es de lanzamiento; el ancla sigue siendo USD 500.',
        },
    ] as const satisfies readonly WebConIaFaq[],
    marketNote:
        'Un solo live para todos los países. Landings GEO en Colombia, México, Perú, Argentina, Chile y Texas. Precios en USD.',
} as const;

export function webConIaWhatsApp(message: string) {
    return whatsAppHref(message);
}

export const WEB_CON_IA_WHATSAPP_PAGO = webConIaWhatsApp(
    'Hola, pagué Web con IA. Mi correo es: (escribe tu correo aquí)',
);

export const WEB_CON_IA_WHATSAPP_ASESORIA = webConIaWhatsApp(
    'Hola, quiero asesoría Web con IA antes de pagar',
);
