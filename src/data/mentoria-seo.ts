/** Rutas, metadatos y copy del hub de mentorías (SEO + enlaces internos). Promesa central: ayudar a conseguir trabajo y cerrar procesos. */

export const MENTORIA_JOB_PROMISE =
    'La promesa que guía este hub es clara: que avances de “estoy aplicando sin respuesta” a entrevistas concretas, ofertas y mejores condiciones.' as const;

export const MENTORIA_HUB = {
    path: '/mentorias',
    title: 'Mentorías para conseguir trabajo y pasar entrevistas | BrandSoft',
} as const;

export type MentoriaPillarDef = {
    slug: string;
    path: string;
    title: string;
    shortTitle: string;
    description: string;
    keywords: readonly string[];
    /** Cómo este pilar contribuye a la promesa de empleo */
    jobOutcome: string;
    /** Temas concretos de mentoría 1:1 */
    sessionTopics: readonly string[];
    /** Párrafos únicos para la página pilar (evita texto genérico duplicado) */
    bodyParagraphs: readonly string[];
};

export const MENTORIA_PILLARS = [
    {
        slug: 'ingenieria-software',
        path: '/mentorias/ingenieria-software',
        title: 'Mentoría para conseguir trabajo de ingeniería de software',
        shortTitle: 'Software y entrevistas técnicas',
        description:
            'Preparación para pasar entrevistas técnicas, system design y negociación salarial: el objetivo es que consigas rol remoto o local con mejor paquete.',
        keywords: [
            'conseguir trabajo desarrollador Colombia',
            'entrevistas software',
            'preparación entrevistas desarrollador',
            'system design entrevista',
            'mentoría técnica empleo',
            'mock interview software',
        ],
        jobOutcome:
            'Sales con un plan de estudio, simulacros y narrativa de impacto alineada a lo que filtros técnicos y managers esperan ver.',
        sessionTopics: [
            'Simulacro de entrevista técnica y retro honesta',
            'System design adaptado al nivel (mid / senior / staff)',
            'Revisión de CV, LinkedIn y GitHub con ojo de reclutador técnico',
            'Negociación de oferta y comparación de paquetes (COP / USD)',
        ],
        bodyParagraphs: [
            'En ingeniería de software el mercado premia la señal: puedes saber mucho y aun así quedar fuera si no comunicas trade-offs, impacto y criterio bajo presión. Las mentorías están pensadas para que entrenes exactamente eso, con feedback directo y repetición.',
            'Trabajamos el embudo completo: cómo te presentas en screening, cómo cuentas experiencias con método STAR sin sonar robótico, y cómo cierras rondas de diseño sin perderte en la teoría. Todo apunta a conseguir la siguiente ronda y, al final, la oferta.',
            'Si ya tienes años de experiencia pero te trabas en procesos internacionales, o si eres mid y quieres dar el salto, el foco se ajusta a tu stack y al tipo de empresa (producto, consultora, startup). Los artículos enlazados abajo sirven como material entre sesiones.',
        ],
    },
    {
        slug: 'marketing-digital',
        path: '/mentorias/marketing-digital',
        title: 'Mentoría para conseguir trabajo en marketing y growth',
        shortTitle: 'Marketing, growth y consultoría',
        description:
            'Cómo pasar procesos de selección en agencias y equipos de growth: portfolio, case studies, pruebas y negociación para rol fijo o consultoría.',
        keywords: [
            'conseguir trabajo marketing digital',
            'entrevistas marketing digital',
            'mentoría growth marketing',
            'portfolio marketing empleo',
            'prueba práctica marketing entrevista',
        ],
        jobOutcome:
            'Presentas resultados con métricas creíbles, defendes decisiones en entrevista y evitas errores típicos en pruebas “take-home” mal acotadas.',
        sessionTopics: [
            'Estructura de case study que no aburre al entrevistador',
            'Respuestas para preguntas de canal, atribución y experimentación',
            'Cómo cotizar y empaquetar consultoría si tu meta es independencia',
            'Simulacro de entrevista comportamental para roles growth / performance',
        ],
        bodyParagraphs: [
            'Marketing digital se juega en la credibilidad: muchos candidatos listan herramientas; pocos explican hipótesis, experimentos y resultado neto para el negocio. En mentoría alineamos tu historia con lo que buscan lead, head of growth o agencia.',
            'Si tu objetivo es trabajo fijo, trabajamos pitch, pruebas y seguimiento. Si es consultoría, cruzamos con precios, propuestas y foco de nicho para que el pipeline sea sostenible.',
            'Este pilar enlaza con finanzas del freelance (facturación, impuestos) y con contenido de entrevistas del blog; la idea es que no solo “pases”, sino que llegues con claridad a la primera semana del rol.',
        ],
    },
    {
        slug: 'finanzas',
        path: '/mentorias/finanzas',
        title: 'Finanzas para tranquilidad laboral y negocio propio',
        shortTitle: 'Finanzas y negocio freelance',
        description:
            'Presupuesto, impuestos, facturación y estructura legal mínima para que el dinero no sea la razón por la que rechazas una buena oferta o te quemas freelance.',
        keywords: [
            'finanzas freelancers Colombia',
            'impuestos freelancers tech',
            'negociar salario Colombia',
            'consultoría software facturación',
            'flujo de caja freelance',
        ],
        jobOutcome:
            'Entiendes números de una oferta (bruto, beneficios, modalidad) y armás un plan simple para ahorro, impuestos y facturación sin sorpresas.',
        sessionTopics: [
            'Desglosar oferta salarial y comparar paquetes COP vs USD remoto',
            'RUT, facturación y obligaciones básicas para consultor tech en Colombia',
            'Colchón y reglas de gasto al cambiar de empleo o entrar al freelance',
            'Precios de consultoría alineados a tu costo real y a tu meta de ingresos',
        ],
        bodyParagraphs: [
            'Mucha gente talentosa acepta menos o dice que no a remoto por miedo a temas fiscales o por no saber cuánto necesita facturar para igualar un salario. Este pilar existe para bajar esa ansiedad con números claros y pasos concretos.',
            'No sustituimos a un contador, pero sí te damos criterio: qué preguntar, qué revisar y qué automatizar para que la parte financiera deje de ser freno al cerrar un proceso.',
            'Si estás entre dos ofertas o entre empleo y consultoría, usamos escenarios simples para que decidas con datos, no solo con intuición.',
        ],
    },
    {
        slug: 'inteligencia-artificial-empleo',
        path: '/mentorias/inteligencia-artificial-empleo',
        title: 'IA para buscar empleo y preparar entrevistas (sin sonar genérico)',
        shortTitle: 'IA y empleo',
        description:
            'Uso estratégico de IA para CV, LinkedIn, simulacros y estudio técnico: acelera sin perder tu voz ni fallar en entrevistas humanas.',
        keywords: [
            'inteligencia artificial buscar trabajo',
            'chatgpt entrevista trabajo',
            'ia para cv y linkedin',
            'preparar entrevista con ia',
            'herramientas ia empleo Colombia',
        ],
        jobOutcome:
            'Integrás IA en tu rutina de búsqueda y preparación sin depender de textos detectables, y con criterio para cuándo estudiar “a mano”.',
        sessionTopics: [
            'Prompts y flujos para revisar CV y descripciones de logros con evidencia',
            'Simulacros de entrevista con IA + corrección humana (lo que cuenta es el criterio)',
            'Uso de IA para estudio técnico vs. práctica deliberada sin atajos peligrosos',
            'Ética y transparencia: qué decir en procesos si te preguntan por herramientas',
        ],
        bodyParagraphs: [
            'La IA cambió la velocidad de preparación, no las reglas del juego: quien contrata sigue buscando juicio, comunicación y consistencia. En este pilar enseñamos a usar modelos y herramientas como multiplicador, no como sustituto de pensar.',
            'Evitamos el error común: CV y respuestas que suenan a plantilla, o respuestas técnicas memorizadas que se caen con una sola pregunta de seguimiento. Combinamos automatización con práctica realista.',
            'Si vienes de software o de marketing, el enfoque se adapta: en tech damos más peso a problemas y diseño; en perfiles comerciales, a narrativa y casos. Todo conecta con el hub de mentorías y con los artículos de abajo.',
        ],
    },
    {
        slug: 'inteligencia-emocional-laboral',
        path: '/mentorias/inteligencia-emocional-laboral',
        title: 'Inteligencia emocional para entrevistas y vida laboral',
        shortTitle: 'Emociones y carrera',
        description:
            'Manejo de ansiedad, presión en entrevistas, feedback difícil y transiciones: herramientas prácticas para que tu desempeño refleje tu nivel real.',
        keywords: [
            'ansiedad entrevista trabajo',
            'inteligencia emocional laboral',
            'manejo emociones trabajo',
            'miedo entrevistas laborales',
            'preparación emocional entrevista',
        ],
        jobOutcome:
            'Llegás más regulado a entrevistas y conversaciones difíciles, con rutinas antes/durante/después que bajan el sabotaje por nervios.',
        sessionTopics: [
            'Rutinas pre-entrevista (sueño, activación, foco) sin humo espiritual innecesario',
            'Reappraisal y lenguaje interno ante preguntas capciosas o paneles',
            'Cómo pedir feedback, procesar rechazo y mantener consistencia en la búsqueda',
            'Límites y comunicación en el primer mes del nuevo rol',
        ],
        bodyParagraphs: [
            'No es “piensa positivo”: es regular emoción para ejecutar. Muchos candidatos saben el contenido técnico y aun así bloquean en vivo; otros negocian mal por miedo al conflicto. Aquí trabajamos técnicas breves, probadas y aplicables la misma semana.',
            'Este pilar es transversal: sirve si buscas tu primer empleo, si vuelves al mercado después de años, o si enfrentas procesos largos con varias rondas. Se integra con simulacros técnicos o de marketing según tu perfil.',
            'La promesa sigue siendo laboral: que puedas mostrar lo que vales cuando la presión es real, no solo cuando estudias solo en casa.',
        ],
    },
] as const;

/** Artículos sugeridos por pilar (enlaces internos). */
export const MENTORIA_RELATED_BY_PILLAR: Record<string, readonly string[]> = {
    'ingenieria-software': [
        'encontrar-trabajo-mentoria-carrera-colombia',
        'preparacion-entrevistas-software-senior-colombia',
        'system-design-entrevistas-guia-2026',
        'algoritmos-entrevistas-tech-complejidad',
        'negociacion-salarial-desarrolladores-colombia',
        'cv-linkedin-ats-conseguir-trabajo-2026',
        'portfolio-github-linkedin-consejos-tech',
        'entrevistas-comportamentales-star-tech',
        'ia-busqueda-empleo-entrevistas-herramientas',
        'ansiedad-entrevistas-laborales-guia-practica',
    ],
    'marketing-digital': [
        'encontrar-trabajo-mentoria-carrera-colombia',
        'entrevistas-marketing-digital-growth-preguntas',
        'consultoria-marketing-precios-propuestas',
        'cv-linkedin-ats-conseguir-trabajo-2026',
        'inteligencia-emocional-entrevistas-trabajo',
        'ia-busqueda-empleo-entrevistas-herramientas',
    ],
    finanzas: [
        'encontrar-trabajo-mentoria-carrera-colombia',
        'finanzas-personales-freelance-tech',
        'impuestos-rut-freelancers-tech-colombia',
        'negociacion-salarial-desarrolladores-colombia',
        'consultoria-marketing-precios-propuestas',
    ],
    'inteligencia-artificial-empleo': [
        'ia-busqueda-empleo-entrevistas-herramientas',
        'prompts-ia-preparar-entrevista-trabajo',
        'cv-linkedin-ats-conseguir-trabajo-2026',
        'encontrar-trabajo-mentoria-carrera-colombia',
        'entrevistas-comportamentales-star-tech',
    ],
    'inteligencia-emocional-laboral': [
        'inteligencia-emocional-entrevistas-trabajo',
        'ansiedad-entrevistas-laborales-guia-practica',
        'encontrar-trabajo-mentoria-carrera-colombia',
        'entrevistas-comportamentales-star-tech',
        'negociacion-salarial-desarrolladores-colombia',
    ],
};

export const MENTORIA_BLOG_SLUGS = [
    'encontrar-trabajo-mentoria-carrera-colombia',
    'ia-busqueda-empleo-entrevistas-herramientas',
    'prompts-ia-preparar-entrevista-trabajo',
    'inteligencia-emocional-entrevistas-trabajo',
    'ansiedad-entrevistas-laborales-guia-practica',
    'cv-linkedin-ats-conseguir-trabajo-2026',
    'preparacion-entrevistas-software-senior-colombia',
    'system-design-entrevistas-guia-2026',
    'algoritmos-entrevistas-tech-complejidad',
    'negociacion-salarial-desarrolladores-colombia',
    'portfolio-github-linkedin-consejos-tech',
    'entrevistas-comportamentales-star-tech',
    'entrevistas-marketing-digital-growth-preguntas',
    'consultoria-marketing-precios-propuestas',
    'finanzas-personales-freelance-tech',
    'impuestos-rut-freelancers-tech-colombia',
] as const;
