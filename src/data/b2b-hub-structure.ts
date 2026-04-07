/**
 * Arquitectura hub-and-spoke B2B: money pages, industrias y keywords objetivo.
 * Profundidad máxima: Inicio → hub → spoke (≤3 niveles).
 */

export const MONEY_PAGE_SLUGS = ['desarrollo-software-ia', 'posicionamiento-seo-geo', 'generacion-leads-b2b'] as const;

export const INDUSTRIA_SLUGS = ['ecommerce', 'finanzas', 'salud'] as const;

export type MoneyPageSlug = (typeof MONEY_PAGE_SLUGS)[number];
export type IndustriaSlug = (typeof INDUSTRIA_SLUGS)[number];

export const MONEY_PAGES: Record<
    MoneyPageSlug,
    {
        path: string;
        title: string;
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
        h1: string;
        valueProp: string;
        pillars: { title: string; desc: string }[];
        faqs: { q: string; a: string }[];
    }
> = {
    'desarrollo-software-ia': {
        path: '/desarrollo-software-ia',
        title: 'Desarrollo de software con IA',
        metaTitle: 'Desarrollo de software con IA en Colombia | Agentes y automatización B2B',
        metaDescription:
            'Agentes conversacionales, automatización de procesos (RPA) y analítica predictiva para empresas. Demostración y arquitectura segura para CTOs.',
        keywords: [
            'Desarrollo de software IA Colombia',
            'Automatización de ventas con IA',
            'Chatbots con IA para ventas',
            'Agentes de prospección automatizada',
            'Consultoría en Inteligencia Artificial',
            'RPA empresas Colombia',
        ],
        h1: 'Software e IA que ejecuta procesos, no solo los muestra',
        valueProp:
            'Diseñamos y desplegamos agentes conversacionales, flujos RPA y modelos de scoring sobre datos propios, con gobernanza, observabilidad y cumplimiento para equipos de ingeniería y operaciones.',
        pillars: [
            {
                title: 'Agentes conversacionales',
                desc: 'Asistentes multicanal entrenados en su base de conocimiento, con handoff a humanos y métricas de resolución.',
            },
            {
                title: 'Automatización (RPA + orquestación)',
                desc: 'Integración con ERP, CRM y APIs internas; menos tareas repetitivas y más trazabilidad.',
            },
            {
                title: 'Análisis predictivo',
                desc: 'Priorización de leads, riesgo de churn y forecast operativo con pipelines reproducibles.',
            },
        ],
        faqs: [
            {
                q: '¿Cómo integramos IA sin comprometer datos sensibles?',
                a: 'Partimos de un mapa de datos, roles y retención; usamos despliegues privados o VPC cuando aplica, y documentamos límites del modelo y auditoría de prompts.',
            },
            {
                q: '¿Cuánto tarda un piloto de agente conversacional?',
                a: 'Un MVP acotado suele estar en semanas, según fuentes de verdad y número de integraciones; el roadmap completo lo alineamos con su CTO y compliance.',
            },
            {
                q: '¿Trabajan con equipos internos de desarrollo?',
                a: 'Sí: entregamos repositorio, CI/CD, observabilidad y runbooks para que su equipo opere y extienda el sistema.',
            },
        ],
    },
    'posicionamiento-seo-geo': {
        path: '/posicionamiento-seo-geo',
        title: 'SEO técnico y GEO / LLMO',
        metaTitle: 'SEO técnico B2B Bogotá | GEO, LLMO y Core Web Vitals',
        metaDescription:
            'Optimización para buscadores y motores generativos (ChatGPT, Perplexity): auditorías técnicas, Core Web Vitals, datos estructurados y contenido respondible para resúmenes de IA.',
        keywords: [
            'Agencia SEO técnico B2B Bogotá',
            'Optimización GEO y LLMO',
            'Posicionamiento en motores generativos',
            'Core Web Vitals auditoría',
            'SEO empresas Colombia',
        ],
        h1: 'SEO clásico + visibilidad en motores generativos (GEO)',
        valueProp:
            'Unificamos rastreo, rendimiento (CWV), entidad de marca en Schema y contenido en formato pregunta-respuesta para featured snippets, voz y respuestas de LLM con fuentes verificables.',
        pillars: [
            {
                title: 'Auditoría técnica profunda',
                desc: 'Indexación, canonicals, JavaScript, INP/LCP/CLS y logs de servidor cuando hace falta.',
            },
            {
                title: 'GEO / LLMO',
                desc: 'Estructura de entidad, citaciones, FAQs naturales y páginas hub-spoke alineadas a intención corporativa.',
            },
            {
                title: 'Performance = conversión',
                desc: 'Menos fricción, más señal de calidad para Google Ads y orgánico.',
            },
        ],
        faqs: [
            {
                q: '¿Qué es el posicionamiento GEO frente al SEO tradicional?',
                a: 'GEO se enfoca en cómo los modelos generativos citan y resumen fuentes; complementamos SEO on-page y técnico con datos estructurados y contenido verificable.',
            },
            {
                q: '¿Pueden auditar Core Web Vitals en una SPA o Next.js?',
                a: 'Sí; medimos campo y laboratorio, identificamos regresiones y priorizamos por impacto en negocio.',
            },
            {
                q: '¿Atienden empresas fuera de Bogotá?',
                a: 'Sí; el trabajo técnico es remoto-first con reuniones según zona horaria del equipo cliente.',
            },
        ],
    },
    'generacion-leads-b2b': {
        path: '/generacion-leads-b2b',
        title: 'Generación de leads B2B',
        metaTitle: 'Generación de leads B2B y ABM | MQLs y automatización Colombia',
        metaDescription:
            'Prospección automatizada, Account-Based Marketing y embudos medibles: foco en ROI, SQL/MQL y integración con su CRM (HubSpot, Zoho, Pipedrive).',
        keywords: [
            'Generación de leads corporativos',
            'Account-Based Marketing B2B',
            'Automatización de ventas con IA',
            'MQL SQL embudo B2B',
            'Prospección B2B Colombia',
        ],
        h1: 'Leads B2B con ROI medible, no solo volumen',
        valueProp:
            'Combinamos oferta, datos de cuenta, creatividades y secuencias multicanal con reglas claras de calificación (MQL/SQL) y sincronización bidireccional con su CRM.',
        pillars: [
            {
                title: 'Prospección y enriquecimiento',
                desc: 'Listas ICP, señales de intención y mensajes alineados a etapa de compra.',
            },
            {
                title: 'ABM ligero y full',
                desc: 'Cuentas objetivo, contenido por vertical y reporting por cuenta.',
            },
            {
                title: 'Automatización y SLA',
                desc: 'Handoff a ventas, alertas y nutrición con criterios explícitos de descalificación.',
            },
        ],
        faqs: [
            {
                q: '¿Cómo definimos un MQL en su contexto?',
                a: 'Workshop con marketing y ventas: firmografía, comportamiento y umbral de scoring; documentamos en el CRM.',
            },
            {
                q: '¿Integran con HubSpot, Zoho o Pipedrive?',
                a: 'Sí; sincronizamos campos, etapas y fuentes de lead para evitar duplicados y atribución rota.',
            },
            {
                q: '¿Qué métricas reportan?',
                a: 'Pipeline influenciado, costo por MQL/SQL, velocidad de respuesta y tasa de cierre por segmento.',
            },
        ],
    },
};

export const INDUSTRIAS: Record<
    IndustriaSlug,
    {
        path: string;
        metaTitle: string;
        metaDescription: string;
        h1: string;
        intro: string;
        painPoints: string[];
        keywords: string[];
    }
> = {
    ecommerce: {
        path: '/industrias/ecommerce',
        metaTitle: 'IA, SEO y leads B2B para ecommerce y retail digital',
        metaDescription:
            'Catálogos de alto rendimiento, personalización asistida por IA y captación de partners/mayoristas con datos unificados.',
        h1: 'Tecnología y demanda para ecommerce que escala',
        intro: 'Reducimos latencia, mejoramos descubrimiento en buscadores y generativos, y alineamos campañas con inventario y márgenes.',
        painPoints: [
            'Canibalización SEO entre categorías y filtros',
            'Abandono y CWV en móvil',
            'Leads B2B (marketplace, mayoristas) desconectados del CRM',
        ],
        keywords: ['software ecommerce Colombia', 'SEO ecommerce B2B', 'IA recomendación producto'],
    },
    finanzas: {
        path: '/industrias/finanzas',
        metaTitle: 'Software IA y cumplimiento para fintech y servicios financieros',
        metaDescription:
            'Automatización de onboarding, riesgo y soporte con trazabilidad; SEO y contenido bajo marcos de compliance.',
        h1: 'IA y growth con rigor para sector financiero',
        intro: 'Arquitecturas auditables, mínimo privilegio y documentación para áreas legales y de riesgo, sin sacrificar velocidad de salida al mercado.',
        painPoints: [
            'Validación KYC/KYB y colas manuales',
            'Contenido regulado y fragmentación de la entidad en buscadores',
            'Coste alto de adquisición de clientes corporativos',
        ],
        keywords: ['fintech Colombia software', 'automatización onboarding KYC', 'SEO financiero B2B'],
    },
    salud: {
        path: '/industrias/salud',
        metaTitle: 'Digital salud: IA, SEO y captación de pacientes B2B2C',
        metaDescription:
            'Portales clínicos, agendamiento y triaje asistido; visibilidad local y de especialidad con datos estructurados adecuados.',
        h1: 'Salud digital con enfoque en confianza y demanda',
        intro: 'Respetamos privacidad y consentimiento; conectamos sistemas clínicos con experiencias web rápidas y canales de captación medibles.',
        painPoints: [
            'Fragmentación de citas y recordatorios',
            'Contenido médico y E-E-A-T',
            'Leads de convenios y empresas (B2B2C)',
        ],
        keywords: ['software clínicas Colombia', 'SEO salud Bogotá', 'chatbot triaje IA'],
    },
};

/** Keywords transversales para contenido editorial y pillar blog */
export const KEYWORDS_CORE_HUB = [
    'Desarrollo de software IA Colombia',
    'Agencia SEO técnico B2B Bogotá',
    'Generación de leads corporativos',
    'Automatización de ventas con IA',
    'Consultoría en Inteligencia Artificial',
];

export const KEYWORDS_TREND_HUB = [
    'Optimización GEO y LLMO',
    'Posicionamiento en motores generativos',
    'Chatbots con IA para ventas',
    'Agentes de prospección automatizada',
];
