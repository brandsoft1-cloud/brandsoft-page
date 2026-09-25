import { CAREER_PACK, type CareerRegionCopy } from '@/data/education/career-pack';
import type { EducationRegion } from '@/data/education/types';

export const CAREER_GEO_SLUGS = ['co', 'mx', 'pe', 'ar', 'cl', 'tx'] as const;

export type CareerGeoSlug = (typeof CAREER_GEO_SLUGS)[number];

export type CareerGeoMarket = {
    slug: CareerGeoSlug;
    /** Nombre corto en UI */
    label: string;
    /** Nombre completo para copy SEO */
    countryName: string;
    /** Región base del programa (precios / form) */
    region: EducationRegion;
    /** openGraph.locale */
    ogLocale: string;
    /** hreflang BCP47 */
    hreflang: string;
    path: string;
    /** Keywords núcleo del país */
    keyword: string;
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lede: string;
    symptoms: readonly [string, string, string];
    marketNote: string;
    /** FAQ extra local (se antepone a las del base) */
    localFaqs: readonly { q: string; a: string }[];
};

export const CAREER_GEO_MARKETS: readonly CareerGeoMarket[] = [
    {
        slug: 'co',
        label: 'Colombia',
        countryName: 'Colombia',
        region: 'latam',
        ogLocale: 'es_CO',
        hreflang: 'es-CO',
        path: '/mentorias/career-pack/co',
        keyword: 'mentoría empleo tech Colombia',
        metaTitle: 'Career Pack Colombia: 5 mentorías para empleo y rumbo | BrandSoft Education',
        metaDescription:
            'Mentoría 1:1 en Colombia para conseguir o cambiar de trabajo tech: CV, LinkedIn, plan de skills, simulacros HR y técnico, manager y salario. Desde USD 500. Sin promesa de empleo.',
        headline: '5 mentorías para encontrar rumbo y competir por empleo en Colombia',
        lede: 'Para profesionales en Bogotá, Medellín, Cali y el resto del país que buscan trabajo, quieren cambiar o necesitan claridad de carrera. Paquete de 5 sesiones 1:1 (o grupal) con diagnóstico, plan de skills, simulacros y cierre con manager y salario.',
        symptoms: [
            'Envío HV a empresas en Colombia y nadie responde.',
            'Mi LinkedIn no refleja lo que sé hacer en mi stack.',
            'Me trabo en entrevistas técnicas o con RH y no tengo plan de skills.',
        ],
        marketNote:
            'Foco Colombia (mercado local y remoto). Precios en USD. Misma estructura en MX, PE, AR, CL y Texas.',
        localFaqs: [
            {
                q: '¿Sirve si busco remoto desde Colombia?',
                a: 'Sí. El pack prepara señal y entrevistas para procesos locales y remotos. No colocamos vacantes ni garantizamos oferta.',
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
        path: '/mentorias/career-pack/mx',
        keyword: 'mentoría empleo tech México',
        metaTitle: 'Career Pack México: 5 mentorías para empleo y rumbo | BrandSoft Education',
        metaDescription:
            'Mentoría 1:1 en México para conseguir o cambiar de trabajo: CV, LinkedIn, plan de skills, simulacros HR y técnico, manager y negociación. Desde USD 500. Sin promesa de empleo.',
        headline: '5 mentorías para encontrar rumbo y competir por empleo en México',
        lede: 'Para profesionales en CDMX, Guadalajara, Monterrey y el resto del país que buscan trabajo, quieren cambiar o necesitan claridad de carrera. Cinco sesiones 1:1 (o grupal) con diagnóstico, plan de skills, simulacros y cierre con manager y salario.',
        symptoms: [
            'Aplico en México (o remoto) y no paso de RH.',
            'Mi CV y LinkedIn no cuentan impacto, solo tareas.',
            'No sé qué skills priorizar para el siguiente rol.',
        ],
        marketNote:
            'Foco México (local y remoto). Precios en USD. Misma estructura en CO, PE, AR, CL y Texas.',
        localFaqs: [
            {
                q: '¿El pack está pensado para el mercado mexicano?',
                a: 'Sí: el diagnóstico y el plan se arman con tu contexto (ciudad, stack, tipo de empresa). El temario de las 5 sesiones es el mismo; el contenido se personaliza.',
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
        path: '/mentorias/career-pack/pe',
        keyword: 'mentoría empleo tech Perú',
        metaTitle: 'Career Pack Perú: 5 mentorías para empleo y rumbo | BrandSoft Education',
        metaDescription:
            'Mentoría 1:1 en Perú para conseguir o cambiar de trabajo: CV, LinkedIn, plan de skills, simulacros HR y técnico, manager y salario. Desde USD 500. Sin promesa de empleo.',
        headline: '5 mentorías para encontrar rumbo y competir por empleo en Perú',
        lede: 'Para profesionales en Lima y el resto del Perú que buscan trabajo, quieren cambiar o necesitan claridad de carrera. Paquete de 5 sesiones 1:1 (o grupal) con diagnóstico, plan de skills, simulacros y cierre con manager y salario.',
        symptoms: [
            'En Perú piden “experiencia” y mi portafolio no convence.',
            'No sé si apuntar a local, startup o remoto.',
            'Las entrevistas me desordenan y pierdo el hilo.',
        ],
        marketNote:
            'Foco Perú. Precios en USD. Misma estructura en CO, MX, AR, CL y Texas.',
        localFaqs: [
            {
                q: '¿Puedo tomar las sesiones desde Lima u otra ciudad?',
                a: 'Sí. Las mentorías son online. El diagnóstico fija horario viable (incluye solape con hora Colombia cuando aplica).',
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
        path: '/mentorias/career-pack/ar',
        keyword: 'mentoría empleo tech Argentina',
        metaTitle: 'Career Pack Argentina: 5 mentorías para empleo y rumbo | BrandSoft Education',
        metaDescription:
            'Mentoría 1:1 en Argentina para conseguir o cambiar de trabajo: CV, LinkedIn, plan de skills, simulacros HR y técnico, manager y negociación. Desde USD 500. Sin promesa de empleo.',
        headline: '5 mentorías para encontrar rumbo y competir por empleo en Argentina',
        lede: 'Para profesionales en Buenos Aires, Córdoba, Rosario y el resto del país que buscan trabajo, quieren cambiar o necesitan claridad de carrera. Cinco sesiones 1:1 (o grupal) con diagnóstico, plan de skills, simulacros y cierre con manager y salario.',
        symptoms: [
            'Quiero salir de un rol local hacia remoto y no sé cómo posicionarme.',
            'Mi narrativa de carrera está desactualizada.',
            'Negociar en USD o en pesos me genera bloqueo.',
        ],
        marketNote:
            'Foco Argentina (local y remoto). Precios en USD. Misma estructura en CO, MX, PE, CL y Texas.',
        localFaqs: [
            {
                q: '¿Hablan de negociación en USD?',
                a: 'En la sesión 05 repasamos cómo leer un paquete y preguntar con criterio. No prometemos un número ni “cerrar” la oferta por vos.',
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
        path: '/mentorias/career-pack/cl',
        keyword: 'mentoría empleo tech Chile',
        metaTitle: 'Career Pack Chile: 5 mentorías para empleo y rumbo | BrandSoft Education',
        metaDescription:
            'Mentoría 1:1 en Chile para conseguir o cambiar de trabajo: CV, LinkedIn, plan de skills, simulacros HR y técnico, manager y salario. Desde USD 500. Sin promesa de empleo.',
        headline: '5 mentorías para encontrar rumbo y competir por empleo en Chile',
        lede: 'Para profesionales en Santiago y el resto de Chile que buscan trabajo, quieren cambiar o necesitan claridad de carrera. Paquete de 5 sesiones 1:1 (o grupal) con diagnóstico, plan de skills, simulacros y cierre con manager y salario.',
        symptoms: [
            'Los procesos en Chile se alargan y pierdo ritmo entre rondas.',
            'Mi perfil no se lee “senior” aunque ya lo sea en la práctica.',
            'Necesito un plan de skills realista con trabajo full-time.',
        ],
        marketNote:
            'Foco Chile. Precios en USD. Misma estructura en CO, MX, PE, AR y Texas.',
        localFaqs: [
            {
                q: '¿El horario es compatible con Chile?',
                a: 'Sí. Se agenda en la llamada de diagnóstico (solape con hora Colombia). Si no hay ventana viable, lo decimos ahí.',
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
        path: '/mentorias/career-pack/tx',
        keyword: 'career mentorship Texas developers',
        metaTitle: 'Career Pack Texas: 5 mentorship sessions for job direction | BrandSoft Education',
        metaDescription:
            'Same 5-session Career Pack for professionals in Texas: diagnosis, skills plan, HR + technical mocks, manager interview and salary talk. From USD 500. No job guarantee.',
        headline: 'Same Career Pack — for professionals in Texas',
        lede: 'Product availability in Texas: the same 5 sessions (diagnosis, skills plan, psychologist/HR mock, technical mock, manager + salary). Primary go-to-market remains LatAm; here you get the same structure and USD pricing.',
        symptoms: [
            'I need career direction, not another recorded course.',
            'My resume/LinkedIn and interview story are weak.',
            'I want structured mocks before applying harder.',
        ],
        marketNote:
            'Texas is product availability. Validation and primary messaging stay on LatAm (Colombia, México, Perú, Argentina, Chile).',
        localFaqs: [
            {
                q: 'Is this different from the LatAm offer?',
                a: 'No. Same five sessions and USD prices. LatAm is the primary market; Texas lists the same product for local professionals.',
            },
        ],
    },
] as const;

export function isCareerGeoSlug(value: string): value is CareerGeoSlug {
    return (CAREER_GEO_SLUGS as readonly string[]).includes(value);
}

export function getCareerGeoMarket(slug: CareerGeoSlug): CareerGeoMarket {
    const market = CAREER_GEO_MARKETS.find((m) => m.slug === slug);
    if (!market) throw new Error(`Unknown career geo: ${slug}`);
    return market;
}

export type CareerGeoPage = {
    market: CareerGeoMarket;
    copy: CareerRegionCopy;
    /** Map hreflang → path (incluye x-default al hub) */
    languageAlternates: Record<string, string>;
};

export function getCareerGeoPage(slug: CareerGeoSlug): CareerGeoPage {
    const market = getCareerGeoMarket(slug);
    const base = CAREER_PACK.regions[market.region];
    const copy: CareerRegionCopy = {
        ...base,
        metaTitle: market.metaTitle,
        metaDescription: market.metaDescription,
        headline: market.headline,
        lede: market.lede,
        symptoms: market.symptoms,
        marketNote: market.marketNote,
        faqs: [...market.localFaqs, ...base.faqs],
    };

    const languageAlternates: Record<string, string> = {
        'x-default': CAREER_PACK.path,
    };
    for (const m of CAREER_GEO_MARKETS) {
        languageAlternates[m.hreflang] = m.path;
    }

    return { market, copy, languageAlternates };
}

export function careerGeoStaticParams(): { geo: CareerGeoSlug }[] {
    return CAREER_GEO_SLUGS.map((geo) => ({ geo }));
}
