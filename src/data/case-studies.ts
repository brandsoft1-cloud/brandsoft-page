export type CaseStudy = {
    company: string;
    logo?: string;
    tags: string[];
    /** Gancho corto de la historia */
    headline: string;
    /** Narrativa completa: contexto, conflicto, giro y resultado */
    story: string;
    /** Resultado medible en una línea */
    metric: string;
    link?: string;
    linkLabel?: string;
    instagramLink?: string;
    imageSrc?: string;
    imageAlt?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
    {
        company: 'Ecolimpieza Bogotá S.A.S.',
        tags: ['Web corporativa', 'SEO local', 'Conversión'],
        headline: 'De depender del teléfono a llenar la agenda con Google',
        story: `Carlos llevaba años moviendo camiones Vactor por Bogotá y Cundinamarca con clientes que lo conocían de palabra. El negocio crecía, pero cada vez más empresas buscaban en Google a las 10 de la noche y no encontraban nada serio: solo un número suelto y respuestas cuando alguien alcanzaba a contestar.

Cuando llegó a BrandSoft, la situación era clara: tenían servicio de primera, pero cero embudo digital. Armamos un sitio que habla el idioma del gerente de planta: urgencias 24/7, trampas de grasa, alcantarillado, cotización en un clic y WhatsApp visible en cada servicio. No fue “una web bonita”; fue una máquina de captar confianza.

Hoy, quien busca destape o Vactor en la zona llega, entiende el alcance y pide cotización sin que Carlos tenga que repetir lo mismo veinte veces al día. El teléfono sigue sonando, pero ahora también entran leads que antes se iban con la competencia que sí aparecía en Google.`,
        metric: 'Presencia 24/7 en Bogotá y Cundinamarca con embudo de cotización en cada servicio',
        link: 'https://ecolimpiezabogota.com.co/',
        linkLabel: 'Visitar sitio web',
        imageSrc: '/images/ecolimpieza-bogota-sitio.png',
        imageAlt: 'Sitio web Ecolimpieza Bogotá con hero Vactor y CTAs de cotización',
    },
    {
        company: "SAM's Services LTD.",
        tags: ['Web internacional', 'Marca', 'B2B industrial'],
        headline: 'Un operador en Canadá que necesitaba verse tan grande como lo que vende',
        story: `En Ontario, SAM's Services movía contenedores y flota industrial con trabajo de calidad, pero su presencia online no estaba a la altura. Los clientes B2B comparan tres proveedores antes de llamar: si tu web se ve amateur, asumen que tu operación también lo es.

El reto no era solo traducir servicios al inglés. Había que transmitir escala, seguridad y respuesta rápida en un mercado donde la confianza se decide en los primeros ocho segundos de pantalla. Diseñamos una web con identidad naranja fuerte, flota visible desde el hero y un camino claro: cotización gratuita, contacto directo, cero fricción.

La historia cambió cuando dejaron de explicar por teléfono quiénes son. La web hace ese trabajo. Llegan contactos que ya entienden el servicio, el tono de la marca y el siguiente paso. SAM pasó de “somos buenos pero pocos nos conocen” a tener un escaparate internacional que trabaja mientras duermen.`,
        metric: 'Marca industrial sólida y canal de cotización directa en mercado anglófono',
        link: 'https://samservicesltd.ca/',
        linkLabel: 'Visitar sitio web',
        imageSrc: '/images/sam-services-ltd-sitio.png',
        imageAlt: "Sitio SAM's Services LTD con flota industrial y cotización",
    },
    {
        company: 'FUSHION FITNESS CENTER',
        tags: ['Instagram', 'Comunidad', 'Fitness'],
        headline: 'La #FiebreAmarilla del fitness necesitaba voz, no solo publicaciones sueltas',
        story: `Fushion no era un gym más: era comunidad, CrossFit, sudor y pertenencia. Pero en Instagram competían con cadenas que publican todos los días con equipo de marketing completo. Tenían energía en el piso, pero en redes se quedaban cortos: posts sin hilo, sin historia, sin razón para seguir cada semana.

Trabajamos la narrativa alrededor de la #FiebreAmarilla: no vendemos membresías frías, vendemos transformación y tribu. Cada pieza conecta con el mismo espíritu del boot camp: disciplina, resultados, gente real. La comunidad empezó a reconocerse en el feed, a etiquetar, a compartir.

El antes y después no fue solo “más likes”. Fue coherencia: quien ve el perfil siente lo mismo que quien entra al centro. Eso convierte curiosos en personas que preguntan por horarios, planes y retos. La historia del gym por fin se ve como se vive.`,
        metric: 'Comunidad activa y marca coherente en Instagram para fitness y CrossFit',
        instagramLink: 'https://www.instagram.com/fushionfitnesscenter/',
        linkLabel: 'Ver en Instagram',
        imageSrc: '/images/fushion-fitness-center-instagram.png',
        imageAlt: 'Perfil Instagram Fushion Fitness Center',
    },
];
