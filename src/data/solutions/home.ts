/** Contenido comercial home BrandSoft Solutions — sin métricas inventadas. */

export const SOLUTIONS_HOME = {
    brandLine: 'BrandSoft Solutions',
    headline: 'Atrae clientes. Convierte oportunidades. Automatiza tu crecimiento.',
    lede:
        'Combinamos marketing digital, SEO, desarrollo de software y automatización con IA para que tu empresa sea encontrada, convierta mejor y reduzca trabajo manual.',
    audience: 'Para pymes, equipos comerciales y negocios B2B que quieren un sistema digital conectado — no herramientas sueltas.',
    ctaPrimary: { label: 'Agenda un diagnóstico', href: '#diagnostico' },
    ctaSecondary: { label: 'Explora nuestras soluciones', href: '#servicios' },
    whatsappHome:
        'Hola BrandSoft, quiero un diagnóstico para captar más clientes y automatizar procesos en mi empresa. Vengo de la home.',
} as const;

export const SOLUTIONS_PROBLEMS = [
    {
        problem: 'Poca visibilidad digital',
        solution: 'SEO, SEO local y contenidos para que te encuentren cuando buscan lo que vendes.',
        href: '/posicionamiento-seo-geo',
    },
    {
        problem: 'Visitas que no se convierten en contactos',
        solution: 'Webs y landings claras, formularios y CTAs orientados a conversación comercial.',
        href: '/paginas-web-colombia',
    },
    {
        problem: 'Prospectos sin seguimiento',
        solution: 'Flujos y agentes que ordenan consultas y dan continuidad por WhatsApp u otros canales.',
        href: '/ia-automatizaciones',
    },
    {
        problem: 'Equipo perdido en tareas repetitivas',
        solution: 'Automatización de procesos e integraciones para liberar tiempo operativo.',
        href: '/ia-automatizaciones',
    },
    {
        problem: 'Marketing y ventas desconectados',
        solution: 'Integraciones, CRM y software a medida cuando el stack no habla entre sí.',
        href: '/desarrollo-software-ia',
    },
    {
        problem: 'No sabes qué canal genera oportunidades',
        solution: 'Medición y generación de leads B2B con foco en oportunidades reales, no vanity metrics.',
        href: '/generacion-leads-b2b',
    },
] as const;

export const GROWTH_PHASES = [
    {
        n: '01',
        title: 'Atraer',
        detail: 'SEO, contenidos, redes y campañas para traer audiencia calificada.',
    },
    {
        n: '02',
        title: 'Convertir',
        detail: 'Páginas, formularios y WhatsApp que transforman visitas en conversaciones.',
    },
    {
        n: '03',
        title: 'Organizar',
        detail: 'CRM e integraciones para que ninguna oportunidad se pierda.',
    },
    {
        n: '04',
        title: 'Automatizar',
        detail: 'Respuestas, seguimientos y tareas repetitivas donde tenga sentido.',
    },
    {
        n: '05',
        title: 'Medir y mejorar',
        detail: 'Indicadores claros para priorizar lo que sí mueve el negocio.',
    },
] as const;

export const SERVICE_PILLARS = [
    {
        id: 'captacion',
        name: 'Captación de clientes y marketing',
        problem: 'Dependes del boca a boca o de campañas sin medición.',
        benefit: 'Sistema para generar y calificar oportunidades comerciales.',
        caps: ['Estrategia de adquisición', 'Campañas Google/Meta', 'Embudos y landings'],
        href: '/generacion-leads-b2b',
    },
    {
        id: 'seo',
        name: 'SEO, SEO local y GEO',
        problem: 'Tu competencia aparece y tú no.',
        benefit: 'Presencia orgánica y local comprensible para buscadores y usuarios.',
        caps: ['SEO técnico y contenidos', 'Google Business Profile', 'Preparación GEO (sin promesas mágicas)'],
        href: '/posicionamiento-seo-geo',
    },
    {
        id: 'presencia',
        name: 'Presencia digital y web',
        problem: 'Tu sitio no refleja lo que vendes ni facilita el contacto.',
        benefit: 'Web y canales alineados a tu oferta y a la conversión.',
        caps: ['Sitios y landings', 'Contenido para redes', 'Integración de canales'],
        href: '/paginas-web-colombia',
    },
    {
        id: 'automatizacion',
        name: 'Automatización e inteligencia artificial',
        problem: 'Consultas y tareas se atienden a mano y se escapan.',
        benefit: 'Flujos y agentes que reducen fricción operativa con supervisión humana.',
        caps: ['n8n y automatizaciones', 'Agentes conversacionales', 'Integraciones CRM/API'],
        href: '/ia-automatizaciones',
    },
    {
        id: 'software',
        name: 'Software a medida e integraciones',
        problem: 'Las herramientas no se conectan o el proceso no cabe en un SaaS genérico.',
        benefit: 'Aplicaciones e integraciones diseñadas a tu operación.',
        caps: ['Apps web y portales', 'Integraciones', 'MVP y modernización'],
        href: '/desarrollo-software-ia',
    },
] as const;

export const NEED_NAVIGATOR = [
    { q: 'Necesito conseguir más clientes', href: '/generacion-leads-b2b' },
    { q: 'Necesito mejorar mi posicionamiento en Google', href: '/posicionamiento-seo-geo' },
    { q: 'Necesito profesionalizar mi presencia digital', href: '/paginas-web-colombia' },
    { q: 'Necesito automatizar atención y seguimiento', href: '/ia-automatizaciones' },
    { q: 'Necesito integrar herramientas o desarrollar software', href: '/desarrollo-software-ia' },
] as const;

export const HOW_WE_WORK = [
    { n: '1', title: 'Diagnóstico', detail: 'Entendemos tu negocio, canales y cuellos de botella.' },
    { n: '2', title: 'Priorización', detail: 'Ordenamos oportunidades por impacto y esfuerzo.' },
    { n: '3', title: 'Propuesta y alcance', detail: 'Definimos entregables, supuestos y lo que queda fuera.' },
    { n: '4', title: 'Implementación', detail: 'Ejecutamos por fases con checkpoints claros.' },
    { n: '5', title: 'Medición y mejora', detail: 'Revisamos indicadores y ajustamos. Resultados dependen del mercado, del canal y de tu equipo.' },
] as const;

export const WORK_MODES = [
    {
        name: 'Proyecto puntual',
        detail: 'Web, automatización o integración con alcance cerrado.',
        includes: ['Alcance fijo', 'Entrega por hitos', 'Soporte acordado'],
    },
    {
        name: 'Servicio mensual',
        detail: 'SEO, contenidos, captación o mejora continua.',
        includes: ['Prioridades del mes', 'Reportes', 'Iteración'],
    },
    {
        name: 'Automatización personalizada',
        detail: 'Flujos, agentes e integraciones según tu proceso.',
        includes: ['Mapa del proceso', 'Implementación', 'Pruebas supervisadas'],
    },
    {
        name: 'Solución integral',
        detail: 'Varios pilares conectados (atraer + convertir + automatizar).',
        includes: ['Roadmap compartido', 'Un punto de contacto', 'Medición conjunta'],
    },
] as const;

export const SOLUTIONS_FAQS = [
    {
        q: '¿Qué tipo de empresas pueden contratar BrandSoft?',
        a: 'Pymes, equipos B2B y negocios locales que necesitan más oportunidades, mejor presencia digital o automatizar operación. Si el reto es muy distinto, te lo decimos en el diagnóstico.',
    },
    {
        q: '¿Puedo contratar solo SEO, una web o una automatización?',
        a: 'Sí. Puedes empezar por un pilar. Si conviene conectar varios, te lo proponemos con alcance explícito.',
    },
    {
        q: '¿Se pueden integrar mis herramientas actuales?',
        a: 'En muchos casos sí (CRM, WhatsApp, APIs, hojas de cálculo, etc.). Lo validamos en el diagnóstico según APIs y permisos disponibles.',
    },
    {
        q: '¿Cuánto cuesta un proyecto?',
        a: 'Depende del alcance. En el diagnóstico te damos un rango y qué se cotiza aparte (publicidad, licencias, APIs).',
    },
    {
        q: '¿Cómo se mide el resultado?',
        a: 'Definimos indicadores según el objetivo: contactos, conversaciones, tiempos de respuesta, posiciones orgánicas relevantes u operación automatizada. No prometemos rankings ni ventas garantizadas.',
    },
    {
        q: '¿Cuánto tarda una implementación?',
        a: 'Un landing o flujo simple puede ser semanas; un sistema integral, meses por fases. Te damos un cronograma realista al cerrar alcance.',
    },
    {
        q: '¿Qué necesito aportar como cliente?',
        a: 'Accesos, información del negocio, tiempos de revisión y un responsable interno. Sin eso, el proyecto se frena.',
    },
    {
        q: '¿Hay costos de licencias, APIs o publicidad?',
        a: 'Sí, cuando aplican (ads, herramientas SaaS, modelos de IA, dominios). Los separamos del honorario BrandSoft.',
    },
    {
        q: '¿Qué ocurre después de la implementación?',
        a: 'Entrega documentada, entrenamiento básico si aplica, y opción de acompañamiento mensual para mejorar.',
    },
] as const;

export const NEED_OPTIONS = [
    { value: 'captacion', label: 'Captación de clientes' },
    { value: 'seo', label: 'SEO y posicionamiento' },
    { value: 'web', label: 'Web y presencia digital' },
    { value: 'redes', label: 'Redes sociales y marketing' },
    { value: 'automatizacion', label: 'Automatización e IA' },
    { value: 'software', label: 'Software e integraciones' },
    { value: 'integral', label: 'Solución integral' },
    { value: 'otro', label: 'Otro' },
] as const;
