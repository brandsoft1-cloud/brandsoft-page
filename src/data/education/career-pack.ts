import type { EducationRegion, FaqItem } from '@/data/education/types';

export type CareerSession = {
    n: string;
    name: string;
    objective: string;
    covers: readonly string[];
    outcome: string;
};

export type CareerPriceTier = {
    id: 'uno-a-uno' | 'grupal' | 'suelta';
    name: string;
    price: string;
    summary: string;
    includes: readonly string[];
    badge?: string;
};

export type CareerRegionCopy = {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    lede: string;
    symptoms: readonly [string, string, string];
    notPromise: string;
    marketNote: string;
    requirementsIntro: string;
    requirements: readonly string[];
    faqs: readonly FaqItem[];
};

export type CareerPack = {
    slug: 'career-pack';
    path: string;
    keyword: string;
    cardQuestion: string;
    cardTitle: string;
    cardBody: string;
    promiseLine: string;
    sessions: readonly CareerSession[];
    prices: readonly CareerPriceTier[];
    regions: Record<EducationRegion, CareerRegionCopy>;
};

export const CAREER_PACK: CareerPack = {
    slug: 'career-pack',
    path: '/mentorias/career-pack',
    keyword: 'mentoría conseguir empleo',
    cardQuestion: 'Necesito rumbo y prepararme para conseguir o cambiar de trabajo',
    cardTitle: 'Career Pack · 5 mentorías',
    cardBody:
        'Cinco sesiones 1:1: diagnóstico (CV, LinkedIn, emoción y rumbo), plan de skills, simulacro con psicólogo/HR, simulacro técnico, y cierre con manager y negociación. Enfoque LatAm; también disponible en Texas.',
    promiseLine:
        'En 5 sesiones pasas de «no sé por dónde voy» a un rumbo claro, un plan de skills, simulacros (humano + técnico) y cierre con manager y salario — con CV, LinkedIn y marca puestos en orden desde el día uno.',
    sessions: [
        {
            n: '01',
            name: 'Diagnóstico integral',
            objective:
                'Evaluar dónde estás: ¿buscas trabajo, cambio, assessment? Rumbo de vida/carrera, estado emocional, CV, LinkedIn y marca personal.',
            covers: [
                'Lectura de perfil y objetivo real (empleo, cambio, clarity)',
                'Estado anímico y bloqueos (sin terapia clínica)',
                'Hoja de vida: cómo está y qué cambiar',
                'LinkedIn y primeros pasos de posicionamiento de marca',
            ],
            outcome: 'Sabes dónde estás, a dónde vas y qué señal das hoy.',
        },
        {
            n: '02',
            name: 'Plan de trabajo',
            objective:
                'Armar el roadmap de skills según tu área: developer, marketing u otra — certificaciones y diplomados solo si suman.',
            covers: [
                'Brecha de skills vs el rol objetivo',
                'Orden de aprendizaje (qué primero, qué después)',
                'Certificaciones / diplomados con criterio de mercado',
                'Ritmo semanal realista entre mentorías',
            ],
            outcome: 'Un plan concreto: qué estudiar, en qué orden y para qué.',
        },
        {
            n: '03',
            name: 'Banco técnico + simulacro psicólogo/HR',
            objective:
                'Mapear lo que te pueden preguntar en lo técnico y hacer la primera simulación: entrevista con psicólogo / HR comportamental. Revisión del plan 02.',
            covers: [
                'Banco de preguntas técnicas del rol',
                'Simulacro con psicólogo / HR (ronda humana)',
                'Feedback de narrativa y nervios',
                'Ajustes al plan de trabajo de la sesión 02',
            ],
            outcome: 'Entras a proceso sin improvisar ni congelarte en la ronda humana.',
        },
        {
            n: '04',
            name: 'Simulacro entrevista técnica',
            objective:
                'Practicar la ronda técnica: por qué preguntan, cómo responder, qué no decir, qué hacer y por qué.',
            covers: [
                'Simulación técnica sobre tu stack / rol',
                'Estructura de respuesta (criterio, no memorización)',
                'Qué evitar y cómo recuperar si te trabas',
                'Notas de mejora para la siguiente ronda real',
            ],
            outcome: 'Sales sabiendo defender criterio, no solo memorizar.',
        },
        {
            n: '05',
            name: 'Soft skills + manager + salario',
            objective:
                'Cerrar el ciclo: entrevista con manager, negociación salarial, chequeo anímico y técnico vs el objetivo de empleo.',
            covers: [
                'Simulacro con manager / liderazgo',
                'Cómo leer y negociar un paquete (sin «cierre garantizado»)',
                'Chequeo de estado anímico y nivel técnico',
                'Próximos pasos hacia el objetivo de trabajo',
            ],
            outcome: 'Listo para cerrar proceso con cabeza fría.',
        },
    ],
    prices: [
        {
            id: 'uno-a-uno',
            name: '1:1 · paquete de 5',
            price: 'USD 500',
            badge: 'Recomendado',
            summary: 'Las cinco sesiones contigo y Mauricio. Oferta principal para LatAm.',
            includes: [
                'Las 5 mentorías en orden',
                '~1 hora por sesión',
                'CV, LinkedIn y rumbo desde la 01',
                'Simulacros humano + técnico + manager',
            ],
        },
        {
            id: 'grupal',
            name: 'Grupal · 5 sesiones',
            price: 'USD 300 / persona',
            summary: 'Mismo temario. Arranca con mínimo 5 personas (máx. 8).',
            includes: [
                'Las 5 sesiones en grupo',
                'Mínimo 5 inscritos para abrir',
                'Menos profundidad 1:1 en CV/emoción',
                'Lista de espera hasta completar el cupo',
            ],
        },
        {
            id: 'suelta',
            name: 'Sesión suelta',
            price: 'USD 120',
            summary: 'Casi siempre la 01 (diagnóstico). El resto se vende como paquete.',
            includes: [
                'Una sesión de ~1 hora',
                'Ideal para medir fit',
                'Upsell al paquete 1:1 en la misma llamada',
            ],
        },
    ],
    regions: {
        latam: {
            metaTitle: 'Career Pack: 5 mentorías para empleo y rumbo | LatAm | BrandSoft Education',
            metaDescription:
                'Mentoría 1:1 en Colombia, México, Perú, Argentina y Chile: diagnóstico, plan de skills, simulacros HR y técnico, manager y negociación. Desde USD 500 el paquete. Sin promesa de empleo.',
            headline:
                '5 mentorías para encontrar rumbo y competir por empleo en LatAm',
            lede: 'Para profesionales en Colombia, México, Perú, Argentina y Chile que buscan trabajo, quieren cambiar o necesitan claridad de carrera. No es un curso grabado: es un paquete de 5 sesiones 1:1 (o grupal) con diagnóstico, plan de skills, simulacros y cierre con manager y salario.',
            symptoms: [
                'No sé si seguir buscando, cambiar de rol o reinventarme.',
                'Mi CV y LinkedIn no reflejan lo que sé hacer.',
                'Me trabo en entrevistas (técnicas o con RH) y no tengo plan de skills.',
            ],
            notPromise:
                'No prometemos empleo ni un salario fijo. El mercado decide. Lo que sí entregamos es rumbo, plan, práctica de entrevistas y una señal más clara (CV, LinkedIn, narrativa).',
            marketNote:
                'El foco comercial y de validación es LatAm. Precios en USD para que compares entre países. Texas aparece como la misma oferta de producto, no como campaña principal.',
            requirementsIntro: 'Antes de pagar el paquete, esto tiene que ser verdad:',
            requirements: [
                'Puedes sostener ~1 hora por sesión y trabajo entre mentorías (plan de skills).',
                'Tienes un objetivo de empleo o cambio (aunque aún esté borroso: la 01 lo aclara).',
                'Aceptas que no hay garantía de contratación.',
                'Si eliges grupal, entras a lista de espera hasta mínimo 5 personas.',
            ],
            faqs: [
                {
                    q: '¿Para quién es en LatAm?',
                    a: 'Developers, marketing y otros perfiles profesionales en Colombia, México, Perú, Argentina y Chile que necesitan rumbo y preparación para procesos de selección (locales o remotos).',
                },
                {
                    q: '¿Por qué USD 500 el paquete 1:1?',
                    a: 'Son 5 sesiones secuenciales con el mismo mentor. La sesión suelta sale USD 120; el paquete baja el costo efectivo a USD 100 por sesión.',
                },
                {
                    q: '¿Cómo funciona el grupal a USD 300?',
                    a: 'Mismo temario de 5 sesiones. Se abre cuando hay mínimo 5 personas (máximo 8). Hasta entonces quedas en lista de espera; no se finge un grupo que no existe.',
                },
                {
                    q: '¿Esto me garantiza trabajo?',
                    a: 'No. BrandSoft no ofrece empleo. Preparas rumbo, señal y entrevistas; el proceso de selección lo decide la empresa.',
                },
                {
                    q: '¿Y Texas?',
                    a: 'La misma estructura de 5 mentorías está disponible como info de producto para profesionales en Texas. El foco de validación y mensaje principal sigue siendo LatAm.',
                },
            ],
        },
        tx: {
            metaTitle: 'Career Pack: 5 mentorship sessions for job direction | Texas | BrandSoft Education',
            metaDescription:
                'Same 5-session Career Pack for professionals in Texas: diagnosis, skills plan, HR + technical mocks, manager interview and salary talk. From USD 500. No job guarantee.',
            headline: 'Same Career Pack — available for professionals in Texas',
            lede: 'Product info for Texas: the same 5 sessions (diagnosis, skills plan, psychologist/HR mock, technical mock, manager + salary). Primary go-to-market remains LatAm; here you get the same structure and USD pricing.',
            symptoms: [
                'I need clarity on career direction, not another recorded course.',
                'My resume/LinkedIn and interview story are weak.',
                'I want structured mocks before applying harder.',
            ],
            notPromise:
                'We do not promise a job or a salary band. You get direction, a skills plan, interview practice, and clearer signal (resume/LinkedIn/narrative).',
            marketNote:
                'Texas is listed as product availability. Validation and primary messaging stay focused on LatAm (Colombia, México, Perú, Argentina, Chile).',
            requirementsIntro: 'Before you buy the pack:',
            requirements: [
                'You can protect ~1 hour per session plus work between sessions.',
                'You have (or want) a job/change goal — session 01 clarifies it.',
                'You accept there is no hiring guarantee.',
                'Group tier needs at least 5 people before it starts.',
            ],
            faqs: [
                {
                    q: 'Is this different from the LatAm offer?',
                    a: 'No. Same five sessions and USD prices. LatAm is the primary market; Texas is the same product listed for local professionals.',
                },
                {
                    q: 'What are the prices?',
                    a: '1:1 pack of 5: USD 500. Group of 5 sessions: USD 300 per person (min 5). Single session: USD 120.',
                },
                {
                    q: 'Do you guarantee a job in the US?',
                    a: 'No. We prepare direction and interviews; employers decide.',
                },
            ],
        },
    },
};
