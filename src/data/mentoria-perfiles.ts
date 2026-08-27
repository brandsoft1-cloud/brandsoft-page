/**
 * Perfiles de mentoría por SITUACIÓN (no por tema).
 * Se cruzan con los pilares de `mentoria-seo.ts` (que van por tema: software, IA, finanzas, etc.).
 * Objetivo: que cualquier persona que llegue se reconozca en un perfil y entre a su landing propia.
 * Promesa transversal: pasar de "estoy bloqueado / perdido" a entrevistas, ofertas y claridad — con foco técnico Y emocional.
 */

export type MentoriaPerfil = {
    slug: string;
    path: string;
    /** Etiqueta corta para tarjetas y navegación */
    shortTitle: string;
    /** Chip superior */
    badge: string;
    /** Título SEO/H1 (con keyword de la situación) */
    h1: string;
    /** Palabra(s) a resaltar dentro del H1 */
    h1Highlight: string;
    /** Entrada emocional: le habla directo al dolor, en segunda persona */
    emotionalIntro: string;
    /** "Te identificas si…" — señales concretas para que la persona se reconozca */
    identifyIf: readonly string[];
    /** Promesa clara de a dónde lo llevamos */
    promise: string;
    /** Qué trabajamos en la mentoría (técnico + emocional) */
    weWorkOn: readonly string[];
    /** Pilares temáticos relacionados (slugs de MENTORIA_PILLARS) */
    relatedPillars: readonly string[];
    /** Artículos de apoyo (slugs de blog) */
    relatedBlog: readonly string[];
    /** Color de acento tailwind: violet | emerald | cyan | amber */
    accent: 'violet' | 'emerald' | 'cyan' | 'amber';
    /** Icono lucide (nombre) */
    icon: 'seedling' | 'lock' | 'compass' | 'trending-up';
    metaTitle: string;
    metaDescription: string;
    keywords: readonly string[];
    /** Contexto para el mensaje de WhatsApp */
    whatsappContext: string;
};

export const MENTORIA_PERFILES: readonly MentoriaPerfil[] = [
    {
        slug: 'junior-sin-trabajo',
        path: '/mentorias/perfil/junior-sin-trabajo',
        shortTitle: 'Junior sin primer empleo',
        badge: 'JUNIOR SIN PRIMER EMPLEO',
        h1: 'Aplicas a todo y nadie te responde. No es que no sirvas: te falta estrategia.',
        h1Highlight: 'No es que no sirvas',
        emotionalIntro:
            'Estudiaste, hiciste el bootcamp o la carrera, tienes proyectos… y aun así el primer trabajo no llega. Envías decenas de hojas de vida al vacío, te piden "experiencia" para un puesto de entrada, y empiezas a creer que el problema eres tú. No lo eres. El primer empleo tech es un filtro de estrategia y señal, no de talento — y eso se entrena.',
        identifyIf: [
            'Aplicas a muchas vacantes y casi nunca te contestan.',
            'Te piden experiencia para un puesto que se supone es de entrada.',
            'Tu CV y LinkedIn no reflejan lo que realmente sabes hacer.',
            'Cuando te llaman a entrevista, los nervios te traicionan.',
            'Sientes que todos avanzan menos tú y ya dudas de haber elegido bien.',
        ],
        promise:
            'Salimos del "aplico sin respuesta" a tener entrevistas reales: CV y LinkedIn que sí llaman, un proyecto que demuestra criterio, y simulacros hasta que dejes de bloquearte.',
        weWorkOn: [
            'Rediseño de CV y LinkedIn orientado a ATS y a reclutador técnico.',
            'Un proyecto/portafolio que demuestre criterio, no solo tutoriales copiados.',
            'Estrategia de aplicación: dónde, cómo y a quién escribir (no spamear vacantes).',
            'Simulacros de entrevista técnica y comportamental con feedback directo.',
            'Manejo de nervios y síndrome del impostor del primer proceso.',
        ],
        relatedPillars: ['ingenieria-software', 'inteligencia-artificial-empleo', 'inteligencia-emocional-laboral'],
        relatedBlog: [
            'cv-linkedin-ats-conseguir-trabajo-2026',
            'portfolio-github-linkedin-consejos-tech',
            'encontrar-trabajo-mentoria-carrera-colombia',
            'ansiedad-entrevistas-laborales-guia-practica',
        ],
        accent: 'emerald',
        icon: 'seedling',
        metaTitle: 'Mentoría para tu primer trabajo como programador (junior sin experiencia)',
        metaDescription:
            'Mentoría 1:1 para juniors que no consiguen el primer empleo tech: CV que sí llama, portafolio con criterio, simulacros de entrevista y manejo de nervios. Colombia y remoto.',
        keywords: [
            'primer trabajo programador sin experiencia',
            'conseguir primer empleo tech',
            'mentoría junior desarrollador',
            'no consigo trabajo de programador',
            'cómo conseguir trabajo junior developer Colombia',
        ],
        whatsappContext:
            'soy junior y no consigo mi primer trabajo tech; quiero mentoría para CV, portafolio y entrevistas.',
    },
    {
        slug: 'estancado-en-empleo',
        path: '/mentorias/perfil/estancado-en-empleo',
        shortTitle: 'Empleado que no logra saltar',
        badge: 'YA TIENES EMPLEO, PERO NO PUEDES SALTAR',
        h1: 'Tienes trabajo como dev, pero llevas meses sin poder cambiar. Y eso desgasta.',
        h1Highlight: 'sin poder cambiar',
        emotionalIntro:
            'Eres front, back, fullstack o arquitecto. Ya estás dentro de la industria, pero sientes que te quedaste: mismo sueldo, mismo stack, mismas tareas. Aplicas a otras empresas y no cierras; te da miedo soltar lo seguro; y cada semana que pasa se siente como estancamiento. No estás mal como profesional — estás sin una estrategia de salto y sin entrenar los procesos que hoy son más duros.',
        identifyIf: [
            'Llevas tiempo queriendo cambiar de empresa y no lo logras.',
            'Sientes un techo salarial o de aprendizaje donde estás.',
            'Pasas screenings pero te caes en la técnica o en system design.',
            'Te da miedo dejar lo estable por algo incierto.',
            'Sabes que vales más de lo que hoy te pagan, pero no sabes cómo demostrarlo.',
        ],
        promise:
            'Diseñamos tu salto: narrativa de impacto, entrenamiento técnico al nivel del rol objetivo (mid/senior/staff), y negociación para que el cambio también mejore tu paquete.',
        weWorkOn: [
            'Narrativa de impacto: contar lo que haces con método STAR sin sonar robótico.',
            'Entrenamiento técnico y de system design al nivel del rol que quieres.',
            'Estrategia para procesos internacionales y remotos (COP vs USD).',
            'Negociación salarial para que el salto sea también económico.',
            'Manejar el miedo a soltar lo estable con un plan, no con impulso.',
        ],
        relatedPillars: ['ingenieria-software', 'finanzas', 'inteligencia-emocional-laboral'],
        relatedBlog: [
            'preparacion-entrevistas-software-senior-colombia',
            'system-design-entrevistas-guia-2026',
            'negociacion-salarial-desarrolladores-colombia',
            'entrevistas-comportamentales-star-tech',
        ],
        accent: 'violet',
        icon: 'lock',
        metaTitle: 'Mentoría para cambiar de trabajo como desarrollador (salir del estancamiento)',
        metaDescription:
            'Mentoría 1:1 para devs con empleo que no logran cambiar de empresa: narrativa de impacto, system design, procesos remotos y negociación salarial. Da el salto con estrategia.',
        keywords: [
            'cambiar de trabajo desarrollador',
            'estancado como programador',
            'mentoría senior developer',
            'no consigo cambiar de empresa tech',
            'subir de salario programador Colombia',
        ],
        whatsappContext:
            'ya trabajo como dev pero no logro cambiar de empresa; quiero mentoría para dar el salto y negociar mejor.',
    },
    {
        slug: 'perdido-emocional',
        path: '/mentorias/perfil/perdido-emocional',
        shortTitle: 'Perdido y bloqueado',
        badge: 'TE SIENTES PERDIDO Y BLOQUEADO',
        h1: 'Sabes de esto, pero te sientes perdido, ansioso y sin rumbo. Hablemos de eso.',
        h1Highlight: 'sin rumbo',
        emotionalIntro:
            'No es solo el trabajo. Es la sensación de no hallarte: síndrome del impostor aunque tengas resultados, ansiedad que te bloquea en las entrevistas, comparación constante con otros, y no saber qué camino tomar. En tech casi nadie habla de esto, pero es lo que más frena a gente talentosa. Aquí lo tratamos de frente, con herramientas prácticas — no con frases motivacionales vacías.',
        identifyIf: [
            'Tienes conocimiento y hasta resultados, pero sientes que "no eres suficiente".',
            'La ansiedad te bloquea justo cuando más necesitas rendir.',
            'No sabes qué camino tomar en tu carrera y eso te paraliza.',
            'Te comparas todo el tiempo y sales perdiendo.',
            'Estás agotado o desmotivado y perdiste el norte.',
        ],
        promise:
            'Recuperas claridad y regulación: rutinas concretas para bajar la ansiedad, una dirección de carrera que tenga sentido para ti, y la seguridad para mostrar lo que realmente sabes.',
        weWorkOn: [
            'Herramientas prácticas para regular ansiedad antes, durante y después de entrevistas.',
            'Trabajar el síndrome del impostor con evidencia, no con autoengaño.',
            'Definir una dirección de carrera que encaje contigo, no con la moda.',
            'Rutinas de foco y energía para sostener la búsqueda sin quemarte.',
            'Cómo procesar el rechazo y mantener consistencia emocional.',
        ],
        relatedPillars: ['inteligencia-emocional-laboral', 'ingenieria-software', 'inteligencia-artificial-empleo'],
        relatedBlog: [
            'inteligencia-emocional-entrevistas-trabajo',
            'ansiedad-entrevistas-laborales-guia-practica',
            'entrevistas-comportamentales-star-tech',
            'encontrar-trabajo-mentoria-carrera-colombia',
        ],
        accent: 'amber',
        icon: 'compass',
        metaTitle: 'Mentoría emocional para carrera tech: ansiedad, impostor y rumbo',
        metaDescription:
            'Acompañamiento 1:1 para devs que se sienten perdidos: manejo de ansiedad en entrevistas, síndrome del impostor y claridad de carrera. Herramientas prácticas, sin humo.',
        keywords: [
            'síndrome del impostor programador',
            'ansiedad entrevistas tech',
            'me siento perdido en mi carrera de programador',
            'burnout desarrollador',
            'orientación de carrera tech',
        ],
        whatsappContext:
            'me siento perdido/ansioso en mi carrera tech; quiero mentoría con foco emocional y de rumbo, no solo técnico.',
    },
    {
        slug: 'subir-de-nivel',
        path: '/mentorias/perfil/subir-de-nivel',
        shortTitle: 'Subir de nivel / reinventarse',
        badge: 'QUIERES SUBIR DE NIVEL O REINVENTARTE',
        h1: 'Quieres pasar a senior, arquitecto o lead — o cambiar de rumbo. Vamos por ello.',
        h1Highlight: 'senior, arquitecto o lead',
        emotionalIntro:
            'No estás desesperado por un empleo: quieres el siguiente nivel. Dar el paso a senior, arquitecto o líder técnico, cambiar de especialidad, o reinventar tu perfil hacia IA y automatización. El problema es que los procesos de ese nivel piden otra cosa — diseño de sistemas, criterio, comunicación y posicionamiento — y nadie te enseñó eso explícitamente. Ahí es donde entra la mentoría.',
        identifyIf: [
            'Quieres pasar a un rol senior, arquitecto o de liderazgo técnico.',
            'Buscas reinventarte hacia IA, automatización o un nuevo stack.',
            'Los procesos de alto nivel te exigen system design y visión, no solo código.',
            'Sientes que tu perfil no comunica el nivel que ya tienes.',
            'Quieres posicionarte como referente, no como uno más.',
        ],
        promise:
            'Construimos tu salto de nivel: diseño de sistemas y criterio de arquitectura, posicionamiento de perfil experto, y una narrativa que te ponga en la conversación de los roles top.',
        weWorkOn: [
            'System design y decisiones de arquitectura al nivel senior/staff.',
            'Posicionamiento de perfil experto (LinkedIn, portafolio, presencia).',
            'Reconversión hacia IA y automatización (incluido n8n) si ese es tu norte.',
            'Comunicación y liderazgo técnico para roles de mayor responsabilidad.',
            'Negociación de paquetes de nivel senior/lead.',
        ],
        relatedPillars: ['ingenieria-software', 'inteligencia-artificial-empleo', 'finanzas'],
        relatedBlog: [
            'system-design-entrevistas-guia-2026',
            'preparacion-entrevistas-software-senior-colombia',
            'portfolio-github-linkedin-consejos-tech',
            'negociacion-salarial-desarrolladores-colombia',
        ],
        accent: 'cyan',
        icon: 'trending-up',
        metaTitle: 'Mentoría para subir a senior, arquitecto o líder técnico',
        metaDescription:
            'Mentoría 1:1 para dar el salto a senior, arquitecto o lead, o reinventarte hacia IA y automatización: system design, posicionamiento de perfil y negociación de nivel.',
        keywords: [
            'cómo pasar a arquitecto de software',
            'mentoría senior a staff',
            'liderazgo técnico developer',
            'reconversión a ingeniería de IA',
            'system design senior',
        ],
        whatsappContext:
            'quiero subir de nivel (senior/arquitecto/lead) o reinventarme hacia IA; busco mentoría de alto nivel.',
    },
] as const;

export const MENTORIA_PERFIL_SLUGS = MENTORIA_PERFILES.map((p) => p.slug);

export function getPerfilBySlug(slug: string): MentoriaPerfil | undefined {
    return MENTORIA_PERFILES.find((p) => p.slug === slug);
}
