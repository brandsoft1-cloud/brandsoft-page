/**
 * Copy único por ciudad para /paginas-web/[city].
 * Evita plantillas casi idénticas (riesgo de contenido duplicado) y refuerza intención local.
 */

export const PAGINAS_WEB_CIUDAD_SLUGS = ['bogota', 'medellin', 'cali', 'barranquilla'] as const;
export type PaginaWebCiudadSlug = (typeof PAGINAS_WEB_CIUDAD_SLUGS)[number];

export type PaginaWebCiudadCopy = {
    slug: PaginaWebCiudadSlug;
    displayName: string;
    metaDescription: string;
    keywords: string[];
    /** Línea bajo el H1: tono y propuesta distintos por mercado */
    heroSubhead: string;
    /** Párrafo principal del hero */
    heroIntro: string;
    /** Bloque “por qué esta ciudad” */
    localBlock: { title: string; paragraphs: string[] };
    /** Sectores o contextos donde la web aporta más en esa ciudad */
    sectors: { title: string; items: string[] };
    /** Cómo diferenciamos el proyecto en ese contexto */
    differentiation: { title: string; items: string[] };
    /** Qué incluye (variado; no copiar literal entre ciudades) */
    deliverables: { title: string; items: string[] };
    /** Cierre + blog */
    nextStep: { title: string; body: string; blogSlug: string; blogLabel: string };
    faqs: { q: string; a: string }[];
};

export const PAGINAS_WEB_CIUDAD: Record<PaginaWebCiudadSlug, PaginaWebCiudadCopy> = {
    bogota: {
        slug: 'bogota',
        displayName: 'Bogotá',
        metaDescription:
            'Páginas web B2B y corporativas en Bogotá: arquitectura comercial, SEO técnico y CTAs con trazabilidad para competir en un mercado con alta búsqueda y mucha oferta.',
        keywords: [
            'paginas web bogota b2b',
            'desarrollo web corporativo bogota',
            'seo tecnico bogota',
            'landing conversion bogota',
            'agencia web bogota empresas',
        ],
        heroSubhead: 'Webs que ordenan tu propuesta cuando el comprador compara a diez proveedores el mismo día.',
        heroIntro:
            'En Bogotá la intención de búsqueda es altísima, pero también el ruido. Diseñamos sitios con mensaje único, prueba social clara y rutas de contacto medibles, para que no solo entren visitas: entren conversaciones con contexto.',
        localBlock: {
            title: 'Bogotá: volumen, estandarización y la necesidad de claridad',
            paragraphs: [
                'Muchas empresas en la capital compiten por las mismas keywords genéricas. Ganar no es “tener web”, es tener una jerarquía de contenidos que explique en segundos qué resuelves, para quién y con qué evidencia.',
                'Trabajamos con equipos comerciales que reciben leads fríos desde Google: la web debe educar rápido, filtrar curiosos y preparar el cierre en llamada o WhatsApp con datos ya capturados.',
            ],
        },
        sectors: {
            title: 'Dónde más se nota una web bien hecha en Bogotá',
            items: [
                'Servicios profesionales y consultorías que venden por reputación y necesitan autoridad online.',
                'SaaS y empresas de tecnología con ciclos de venta largos y demo como siguiente paso.',
                'Distribución, logística y B2B industrial con catálogo técnico y fichas descargables.',
                'Instituciones y marcas corporativas con requisitos de compliance y mensaje institucional consistente.',
            ],
        },
        differentiation: {
            title: 'Qué hacemos distinto en proyectos para Bogotá',
            items: [
                'Mapa de intención: páginas por servicio y por dolor del comprador, no solo “Quiénes somos”.',
                'Performance real: menos peso, mejor LCP y estructura que aguanta picos de tráfico de campañas.',
                'CTAs con mensaje explícito (origen + servicio) para saber qué canal y qué oferta disparó el lead.',
                'Base lista para escalar: blog, casos por industria y hub local sin rehacer la arquitectura.',
            ],
        },
        deliverables: {
            title: 'Entregables pensados para conversión en mercado competitivo',
            items: [
                'Wireframes orientados a conversión y copy guidance para titulares y prueba social.',
                'Implementación Next.js con SEO técnico, metadatos y datos estructurados donde aplica.',
                'Integración de formularios y eventos para CRM; WhatsApp con texto de contexto por página.',
                'QA multi-dispositivo y checklist de indexación antes de salida a producción.',
            ],
        },
        nextStep: {
            title: 'Siguiente paso: autoridad local + páginas de servicio',
            body: 'En Bogotá conviene combinar una home sólida con artículos y landings que capturen long-tail sectorial. Revisa la guía y hablamos de tu mapa de contenidos.',
            blogSlug: 'paginas-web-bogota-conversiones-b2b',
            blogLabel: 'Leer: páginas web en Bogotá orientadas a conversiones B2B',
        },
        faqs: [
            {
                q: 'Mi empresa es B2B en Bogotá y ya tengo web, pero no convierte. ¿Por dónde empiezan?',
                a: 'Por diagnóstico de intención: revisamos qué página recibe tráfico, qué promete el titular y qué acción pide. Muchas veces el problema no es el diseño, es el desalineamiento entre la keyword y la oferta visible en el primer pantallazo.',
            },
            {
                q: '¿Trabajan presencial en Bogotá o todo es remoto?',
                a: 'La ejecución es remota con ritmo semanal definido; si el proyecto lo requiere, coordinamos sesiones presenciales puntuales para alinear negocio, marca y ventas.',
            },
            {
                q: '¿Pueden ayudarnos a rankear sin depender solo de pauta en una ciudad tan competida?',
                a: 'Sí, con SEO técnico + contenido por intención + enlazado interno. Bogotá exige consistencia: no bastan tres posts; se necesita un plan por servicios y objeciones reales del comprador.',
            },
        ],
    },
    medellin: {
        slug: 'medellin',
        displayName: 'Medellín',
        metaDescription:
            'Diseño y desarrollo web en Medellín con foco en UX, velocidad y narrativa de marca para empresas que venden experiencia, software y servicios premium en Antioquia y exportación.',
        keywords: [
            'paginas web medellin',
            'diseño web medellin ux',
            'desarrollo web medellin empresas',
            'seo medellin servicios',
            'landing page medellin',
        ],
        heroSubhead: 'Interfaces rápidas y claras para marcas que compiten por confianza, no por el precio más bajo.',
        heroIntro:
            'Medellín premia la percepción de calidad: una web lenta o confusa se siente fuera de lugar en un ecosistema que asocia innovación con buen diseño. Construimos experiencias fluidas, con storytelling sobrio y CTAs que respetan el tiempo del usuario.',
        localBlock: {
            title: 'Medellín: innovación percibida y estándares de experiencia altos',
            paragraphs: [
                'En Antioquia muchas compañías venden valor agregado (tech, servicios, manufactura avanzada, turismo de negocios). Tu sitio debe transmitir solvencia en segundos: jerarquía visual, microcopy cuidado y flujos móviles impecables.',
                'También vemos fuerte demanda de sitios bilingües o con foco exportador; la web se vuelve carta de presentación internacional, no solo vitrina local.',
            ],
        },
        sectors: {
            title: 'Casos de uso fuertes en Medellín',
            items: [
                'Software, producto digital y startups en escala: marketing site + documentación ligera.',
                'Turismo MICE, hoteles boutique y servicios premium: reservas, storytelling visual y velocidad.',
                'Manufactura y transformación: páginas técnicas con fichas, descargas y formularios de cotización.',
                'Servicios creativos y retail omnicanal: catálogo ágil y enlaces a WhatsApp con contexto de campaña.',
            ],
        },
        differentiation: {
            title: 'Cómo abordamos un proyecto web en Medellín',
            items: [
                'UX primero: arquitectura de información probada en móvil antes de pulir estética.',
                'Rendimiento como feature: imágenes optimizadas, fuentes controladas y buen LCP.',
                'Voz de marca consistente en titulares, casos y testimonios; menos relleno, más criterio.',
                'Medición honesta: eventos claros para saber qué sección empuja demo, cotización o llamada.',
            ],
        },
        deliverables: {
            title: 'Lo que entregamos (más allá del “sitio bonito”)',
            items: [
                'Sistema de diseño ligero (componentes reutilizables) para escalar páginas sin romper consistencia.',
                'Accesibilidad básica y buenas prácticas de lectura; formularios cortos y humanos.',
                'SEO on-page alineado a cómo busca tu comprador en Medellín y, si aplica, en inglés.',
                'Handoff con recomendaciones de contenidos y experimentos A/B de titulares o CTAs.',
            ],
        },
        nextStep: {
            title: 'Refuerza con contenido que acompañe tu propuesta de valor',
            body: 'Si vendes experiencia o producto complejo, el blog y las guías educan al lead antes de la reunión. Parte de esta lectura y aterricemos prioridades.',
            blogSlug: 'paginas-web-medellin-ux-seo-b2b',
            blogLabel: 'Leer: UX, SEO y páginas web B2B en Medellín',
        },
        faqs: [
            {
                q: '¿Qué tan importante es la velocidad en Medellín si mi audiencia es principalmente local?',
                a: 'Muy importante: el usuario local compara con apps y sitios globales. Un LCP malo no solo afecta SEO; erosiona la sensación de calidad que tu marca necesita proyectar.',
            },
            {
                q: 'Necesitamos web en español e inglés. ¿Lo contemplan?',
                a: 'Sí. Definimos URL, metadatos y hreflang según tu mercado objetivo, y evitamos duplicados con traducciones mal implementadas.',
            },
            {
                q: '¿Incluyen diseño de marca o solo web?',
                a: 'Partimos de tu manual o referencias visuales. Si hace falta ajuste de tono y consistencia, lo trabajamos como fase previa ligera para que la web no compita con tu identidad.',
            },
        ],
    },
    cali: {
        slug: 'cali',
        displayName: 'Cali',
        metaDescription:
            'Páginas web rápidas y enfocadas en resultados para empresas en Cali y el suroccidente: SEO técnico, buen rendimiento móvil y embudos claros para ventas y distribución.',
        keywords: [
            'paginas web cali',
            'desarrollo web cali',
            'seo cali empresas',
            'sitio web rapido cali',
            'paginas web valle del cauca',
        ],
        heroSubhead: 'Webs livianas y directas para negocios que mueven volumen, territorio y tiempo al cliente.',
        heroIntro:
            'En Cali y el suroccidente muchas marcas ganan por cercanía, agilidad comercial y canales directos. Tu web debe cargar rápido en 4G, explicar oferta sin rodeos y empujar a WhatsApp con mensajes que el equipo de ventas pueda priorizar.',
        localBlock: {
            title: 'Cali: cercanía, ritmo comercial y fuerte uso del móvil',
            paragraphs: [
                'Los usuarios buscan soluciones prácticas: precio, disponibilidad, ubicación y respuesta. Si la web es pesada o abstracta, pierdes frente a un competidor con título claro y botón útil.',
                'Trabajamos bien con retail regional, servicios a hogar, educación, salud y compañías que cubren varias ciudades del Valle: la geolocalización y las landings por zona marcan diferencia.',
            ],
        },
        sectors: {
            title: 'Industrias donde vemos más retorno web en la región',
            items: [
                'Retail y consumo masivo: promos, ubicaciones y llamados a acción simples.',
                'Servicios de mantenimiento, logística urbana y operadores multi-sede.',
                'Educación y formación: leads por programa, inscripción y seguimiento por WhatsApp.',
                'Salud y bienestar: agendamiento, FAQs de cobertura y prueba de confianza local.',
            ],
        },
        differentiation: {
            title: 'Nuestro enfoque para proyectos en Cali',
            items: [
                'Rendimiento móvil priorizado: menos fricción, más velocidad percibida.',
                'Mensajes cortos y concretos; evitamos párrafos corporativos que no ayudan a decidir.',
                'Estructura para campañas estacionales: landings reutilizables sin romper SEO.',
                'Integración con WhatsApp y tracking para medir qué barrio o campaña trae el lead.',
            ],
        },
        deliverables: {
            title: 'Qué recibes al cerrar el proyecto',
            items: [
                'Sitio optimizado para carga rápida y buen INP en dispositivos medianos.',
                'SEO local on-page: títulos, snippets y datos básicos para búsquedas con nombre de ciudad.',
                'Formularios y CTAs probados en flujo móvil; reducción de campos innecesarios.',
                'Recomendaciones de contenido local (barrios, rutas de distribución, casos reales).',
            ],
        },
        nextStep: {
            title: 'Sumar contenido local sin inflar el sitio',
            body: 'Las guías por intención y zona ayudan a captar búsquedas long-tail en el Valle. Empieza por esta nota y definimos tu calendario editorial mínimo viable.',
            blogSlug: 'paginas-web-cali-seo-rendimiento',
            blogLabel: 'Leer: SEO, rendimiento y páginas web en Cali',
        },
        faqs: [
            {
                q: '¿Es obligatorio tener blog para posicionar en Cali?',
                a: 'No es obligatorio, pero ayuda para consultas específicas (barrio, servicio, comparativas). Empezamos por páginas transaccionales fuertes y sumamos blog donde haya volumen buscable.',
            },
            {
                q: 'Mi negocio atiende todo el Valle. ¿Una sola web o varias landings?',
                a: 'Una web con secciones o landings controladas por ubicación suele ser suficiente si evitamos duplicar texto. Diseñamos plantillas con texto único por ciudad/zona.',
            },
            {
                q: '¿Manejan integración con Instagram o catálogo?',
                a: 'Sí, según tu operación: enlaces profundos, UTM y CTAs que reflejen la campaña activa para medir rendimiento real.',
            },
        ],
    },
    barranquilla: {
        slug: 'barranquilla',
        displayName: 'Barranquilla',
        metaDescription:
            'Desarrollo web en Barranquilla y Caribe colombiano: posicionamiento local, velocidad, confianza para importadores, turismo B2B y empresas que crecen hacia Centroamérica.',
        keywords: [
            'paginas web barranquilla',
            'desarrollo web caribe colombia',
            'seo barranquilla empresas',
            'sitio web corporativo barranquilla',
            'agencia web atlantico',
        ],
        heroSubhead: 'Presencia digital sólida para marcas que crecen con logística, servicios regionales y apertura al exterior.',
        heroIntro:
            'Barranquilla combina dinamismo portuario, industria en expansión y un ecosistema de servicios que mira también fuera del país. Diseñamos webs que proyectan solvencia internacional cuando hace falta, sin perder cercanía con el cliente caribeño.',
        localBlock: {
            title: 'Barranquilla y el Caribe: oportunidad, movimiento y reputación',
            paragraphs: [
                'Muchas empresas aquí escalan operaciones o abren nuevas líneas de negocio: la web debe acompañar esa historia con casos, números y procesos claros, no solo fotos genéricas.',
                'El clima comercial premia la respuesta rápida: integrar WhatsApp, llamadas y formularios cortos no es opcional; es parte del producto.',
            ],
        },
        sectors: {
            title: 'Sectores que se benefician de una web bien posicionada en la región',
            items: [
                'Logística, importación y cadena de suministro: credibilidad y contacto directo con equipo comercial.',
                'Industria liviana y manufactura: fichas técnicas, certificaciones y descargas.',
                'Turismo corporativo y servicios de ciudad: paquetes, alianzas y conversión a cotización.',
                'Retail y franquicias regionales: multi-ubicación con mensaje unificado.',
            ],
        },
        differentiation: {
            title: 'Qué priorizamos en proyectos para Barranquilla',
            items: [
                'SEO con ángulo regional: Caribe, Atlántico y búsquedas con intención de compra.',
                'Prueba social y casos: confianza para leads que comparan proveedores de otras ciudades.',
                'Performance y hosting edge-friendly para usuarios que consultan desde móvil en movimiento.',
                'Estrategia de contenidos que conecte crecimiento empresarial y expansión de mercado.',
            ],
        },
        deliverables: {
            title: 'Entregables alineados a crecimiento y expansión',
            items: [
                'Arquitectura escalable para nuevas líneas de negocio o ciudades sin rehacer todo.',
                'Metadatos y datos estructurados para reforzar entidad local y servicios.',
                'Flujos de captura con etiquetas de origen para equipos comerciales regionales.',
                'Lineamientos de contenido para blog y notas de autoridad en el sector.',
            ],
        },
        nextStep: {
            title: 'Potencia visibilidad con contenido regional bien hilado',
            body: 'Las búsquedas combinan servicio + ciudad + sector. Una guía sólida acelera acuerdos: lee el artículo y definimos tu plan de publicación.',
            blogSlug: 'paginas-web-barranquilla-posicionamiento-clientes',
            blogLabel: 'Leer: posicionamiento y páginas web en Barranquilla',
        },
        faqs: [
            {
                q: 'Atendemos clientes en varios países desde Barranquilla. ¿La web debe verse “global”?',
                a: 'Debe verse competente: inglés opcional, casos medibles y procesos claros. No hace falta apariencia genérica; hace falta claridad y prueba de ejecución.',
            },
            {
                q: '¿Qué tan relevante es el SEO local si vendemos fuera de la ciudad?',
                a: 'Sigue siendo útil para talento, partners y reputación regional; combinamos páginas locales con landings por país o vertical según tu plan de ventas.',
            },
            {
                q: '¿Pueden integrar CRM y automatizaciones desde el sitio?',
                a: 'Sí. Definimos eventos y handoff a HubSpot, Zoho o Pipedrive para que el lead no se pierda entre marketing y ventas.',
            },
        ],
    },
};

export function getPaginaWebCiudadCopy(slug: string): PaginaWebCiudadCopy | undefined {
    if (PAGINAS_WEB_CIUDAD_SLUGS.includes(slug as PaginaWebCiudadSlug)) {
        return PAGINAS_WEB_CIUDAD[slug as PaginaWebCiudadSlug];
    }
    return undefined;
}
