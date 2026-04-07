/** Rutas y metadatos del hub de mentorías (SEO + enlaces internos). */

export const MENTORIA_HUB = {
    path: '/mentorias',
    title: 'Mentorías técnicas y consultoría de carrera | BrandSoft',
} as const;

export const MENTORIA_PILLARS = [
    {
        slug: 'ingenieria-software',
        path: '/mentorias/ingenieria-software',
        title: 'Mentoría entrevistas ingeniería de software',
        shortTitle: 'Ingeniería de software',
        description:
            'Preparación para entrevistas técnicas, system design, algoritmos y negociación salarial para perfiles dev en Colombia y remoto.',
        keywords: [
            'entrevistas software',
            'preparación entrevistas desarrollador',
            'system design entrevista',
            'mentoría técnica Colombia',
        ],
    },
    {
        slug: 'marketing-digital',
        path: '/mentorias/marketing-digital',
        title: 'Consultoría y mentoría marketing digital',
        shortTitle: 'Marketing y growth',
        description:
            'Cómo presentar case studies, fijar precios de consultoría y aprobar procesos de selección en agencias y equipos de growth.',
        keywords: [
            'entrevistas marketing digital',
            'consultoría marketing precios',
            'mentoría growth marketing',
        ],
    },
    {
        slug: 'finanzas',
        path: '/mentorias/finanzas',
        title: 'Finanzas para consultores tech y freelancers',
        shortTitle: 'Finanzas y negocio',
        description:
            'Presupuesto, impuestos, facturación y estructura legal mínima para quien vende software, marketing o consultoría en Colombia.',
        keywords: [
            'finanzas freelancers Colombia',
            'impuestos freelancers tech',
            'consultoría software facturación',
        ],
    },
] as const;

/** Artículos sugeridos por pilar (enlaces internos). */
export const MENTORIA_RELATED_BY_PILLAR: Record<string, readonly string[]> = {
    'ingenieria-software': [
        'preparacion-entrevistas-software-senior-colombia',
        'system-design-entrevistas-guia-2026',
        'algoritmos-entrevistas-tech-complejidad',
        'negociacion-salarial-desarrolladores-colombia',
        'portfolio-github-linkedin-consejos-tech',
        'entrevistas-comportamentales-star-tech',
    ],
    'marketing-digital': [
        'entrevistas-marketing-digital-growth-preguntas',
        'consultoria-marketing-precios-propuestas',
    ],
    finanzas: [
        'finanzas-personales-freelance-tech',
        'impuestos-rut-freelancers-tech-colombia',
        'consultoria-marketing-precios-propuestas',
    ],
};

export const MENTORIA_BLOG_SLUGS = [
    'preparacion-entrevistas-software-senior-colombia',
    'system-design-entrevistas-guia-2026',
    'algoritmos-entrevistas-tech-complejidad',
    'negociacion-salarial-desarrolladores-colombia',
    'portfolio-github-linkedin-consejos-tech',
    'entrevistas-marketing-digital-growth-preguntas',
    'consultoria-marketing-precios-propuestas',
    'finanzas-personales-freelance-tech',
    'impuestos-rut-freelancers-tech-colombia',
    'entrevistas-comportamentales-star-tech',
] as const;
