/** Landing comercial: agente de IA conversacional por sector (sectores más usados en nav). */

export type AgenteConversacionalSector = {
    slug: string;
    sectorLabel: string;
    metaTitle: string;
    metaDescription: string;
    hero: {
        badge: string;
        headline: string;
        headlineAccent: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    pains: { title: string; description: string }[];
    steps: { title: string; description: string }[];
    caseStudy: {
        company: string;
        headline: string;
        story: string;
        metric: string;
    };
    faq: { q: string; a: string }[];
    whatsappIntro: string;
    lostClientAnchor: string;
};

const MONTHLY_PRICE = '$2.000.000';
const MONTHLY_PRICE_NUM = 2_000_000;

export const AGENTE_CONVERSACIONAL_PRICE = {
    label: MONTHLY_PRICE,
    cop: MONTHLY_PRICE_NUM,
    period: 'mes',
} as const;

export const AGENTE_CONVERSACIONAL_SECTORS: AgenteConversacionalSector[] = [
    {
        slug: 'restaurantes',
        sectorLabel: 'restaurantes y gastronomía',
        metaTitle: 'Agente de IA para restaurantes | Responde WhatsApp 24/7 | BrandSoft',
        metaDescription:
            'Agente conversacional para restaurantes en Colombia: pedidos, reservas y preguntas por WhatsApp sin perder clientes. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para dueños de restaurante en Colombia',
            headline: 'Te escriben por WhatsApp a las 9 de la noche',
            headlineAccent: 'y nadie responde. Ese pedido se lo lleva la competencia.',
            subtitle:
                'Un agente de IA atiende chats de WhatsApp, web e Instagram las 24 horas: toma pedidos, responde menú, califica si es reserva o domicilio y te manda el resumen al correo para que cierres la venta.',
            ctaPrimary: 'Quiero la demo gratis',
            ctaSecondary: 'WhatsApp — hablar con un asesor',
        },
        pains: [
            {
                title: 'Chats acumulados en hora pico',
                description:
                    'El mesero no puede estar en cocina y en el celular. Mientras tanto, el cliente ya pidió en Rappi o en el local de al lado.',
            },
            {
                title: 'Mismo menú, misma pregunta, todo el día',
                description:
                    '"¿Tienen opción vegana?", "¿Hasta qué hora?", "¿Cuánto demora?" — tu equipo repite lo mismo y se cansa.',
            },
            {
                title: 'Pedidos que se pierden entre mensajes',
                description:
                    'Sin un sistema, un domicilio queda en visto o se olvida la dirección. Un solo pedido grande paga más que un mes del agente.',
            },
        ],
        steps: [
            {
                title: '1. Conectamos tus canales',
                description: 'WhatsApp Business, web y Instagram. El agente aprende tu menú, horarios y zonas de domicilio.',
            },
            {
                title: '2. Atiende y califica solo',
                description:
                    'Responde al instante, filtra curiosos de clientes listos para pedir y arma el resumen del pedido o reserva.',
            },
            {
                title: '3. Tú cierras con humano cuando toca',
                description:
                    'Te llega correo con nombre, pedido y urgencia. Tu equipo entra solo para confirmar pago o casos especiales.',
            },
        ],
        caseStudy: {
            company: 'La Brasa Urbana — comida rápida en Bogotá',
            headline: 'El domingo a las 9 pm perdían pedidos porque nadie contestaba WhatsApp',
            story: `Andrea abrió La Brasa Urbana con sueño de canal propio, sin depender tanto de las apps. Pero en hora pico el celular explotaba: "¿tienen combo?", "¿demora?", "¿hasta qué hora?". El personal estaba en cocina y los mensajes quedaban en visto.

Un fin de semana contó 23 chats sin respuesta en tres horas. Hizo la cuenta: varios eran pedidos de $80 mil o más. Ahí entendió que no necesitaba otro mesero: necesitaba alguien que respondiera siempre.

Implementamos el agente con menú, zonas de domicilio y horarios reales. En la primera semana, el 95% de los chats se respondieron en menos de un minuto. Andrea y su equipo solo entran a confirmar pago o casos raros. Los pedidos directos subieron sin pagar comisión a terceros.`,
            metric: '+28% pedidos por canal propio en 60 días',
        },
        faq: [
            {
                q: '¿Y si el cliente pide algo raro que no está en el menú?',
                a: 'El agente escala al humano con contexto completo. No inventa platos ni precios que no le diste.',
            },
            {
                q: '¿Funciona con el WhatsApp que ya tengo?',
                a: 'Sí. Trabajamos sobre WhatsApp Business. La implementación la hacemos nosotros; tú no necesitas saber de IA.',
            },
            {
                q: '¿$2 millones no es mucho para un restaurante?',
                a: 'Un empleado de turno cuesta más, se enferma y no trabaja de madrugada. Un solo pedido corporativo perdido puede costar $500 mil o más.',
            },
            {
                q: '¿Puedo probar antes de pagar?',
                a: 'Sí. Demo gratis: configuramos un escenario con tu menú y ves cómo responde en vivo.',
            },
            {
                q: '¿Qué pasa si no me sirve?',
                a: 'Contrato mensual sin amarrarte años. Si no ves respuestas más rápidas en la primera semana, no tiene sentido seguir.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo un restaurante y quiero demo del agente de IA para WhatsApp (pedidos y reservas 24/7).',
        lostClientAnchor: 'un evento o pedido corporativo que se va porque nadie contestó a tiempo',
    },
    {
        slug: 'abogados',
        sectorLabel: 'firmas legales y abogados',
        metaTitle: 'Agente de IA para abogados | Captación y consultas 24/7 | BrandSoft',
        metaDescription:
            'Agente de IA para firmas legales: califica consultas, responde dudas iniciales y envía leads calientes a tu correo. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para socios y gerentes de firma legal',
            headline: 'Un cliente potencial escribe a las 11 pm',
            headlineAccent: 'y mañana ya contrató a otro abogado.',
            subtitle:
                'El agente responde consultas iniciales, explica áreas de práctica, filtra casos que sí te interesan y te entrega resumen por correo para agendar cita con el abogado correcto.',
            ctaPrimary: 'Agendar demo gratis',
            ctaSecondary: 'WhatsApp — cotizar agente',
        },
        pains: [
            {
                title: 'Leads fríos mezclados con casos serios',
                description:
                    'Tu secretaria pierde horas en "¿cuánto cobran por una tutela?" cuando debía estar con clientes que sí van a pagar honorarios.',
            },
            {
                title: 'Web que no contesta',
                description:
                    'Invertiste en SEO pero el formulario tarda días en responder. El prospecto ya firmó con la firma que le escribió primero.',
            },
            {
                title: 'Horario de oficina vs urgencia legal',
                description:
                    'Divorcios, accidentes, embargos — muchas consultas llegan fuera de horario y nadie las atiende hasta el lunes.',
            },
        ],
        steps: [
            {
                title: '1. Definimos qué casos sí y cuáles no',
                description: 'Áreas de práctica, ciudades, montos mínimos y preguntas de calificación que haría tu recepcionista.',
            },
            {
                title: '2. El agente educa y califica',
                description: 'Responde en WhatsApp y web, pide datos clave y detecta urgencia sin dar asesoría legal que no corresponde.',
            },
            {
                title: '3. Recibes lead listo para llamar',
                description: 'Correo con resumen, tipo de caso y datos de contacto. Tu equipo solo agenda y cierra.',
            },
        ],
        caseStudy: {
            company: 'Torres & Asociados — derecho laboral en Medellín',
            headline: 'Una consulta a las 11 pm se fue con la firma de al lado',
            story: `El socio fundador de Torres & Asociados tenía buena reputación, pero la secretaria no daba abasto. Llegaban consultas por web y WhatsApp sobre despidos, liquidaciones y tutelas. Muchas eran curiosos, sí, pero entre medio había casos que valían millones.

Un cliente potencial escribió un viernes en la noche. La respuesta llegó el lunes. Para entonces ya había firmado con otro abogado. Ese golpe duele más que cualquier mensualidad de software.

Con el agente, cada consulta recibe respuesta en minutos: áreas de práctica, qué documentos traer, si el caso encaja o no. El abogado senior recibe un correo con resumen y solo agenda las citas que valen la pena. En dos meses, las citas con casos calificados subieron sin contratar otra recepcionista.`,
            metric: '+12 consultas calificadas al mes',
        },
        faq: [
            {
                q: '¿El agente da consejo legal?',
                a: 'No. Orienta sobre procesos generales y califica. Siempre deja claro que la asesoría la da el abogado en cita.',
            },
            {
                q: '¿Es seguro con datos de clientes?',
                a: 'Trabajamos con buenas prácticas de privacidad. Los datos sensibles los maneja tu equipo en el cierre.',
            },
            {
                q: '¿Por qué $2 millones y no una secretaria virtual?',
                a: 'Una persona cuesta más, tiene turnos y se equivoca en horarios. El agente no duerme ni se va de vacaciones.',
            },
            {
                q: '¿Se integra con mi web actual?',
                a: 'Sí. Chat en web más WhatsApp. Mismo cerebro, varios canales.',
            },
            {
                q: '¿Cuánto demora la implementación?',
                a: 'Entre 5 y 10 días hábiles según complejidad de áreas y preguntas de calificación.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo una firma legal y quiero demo del agente de IA para captar y calificar consultas 24/7.',
        lostClientAnchor: 'un caso laboral o comercial que cierra con otra firma por demora en responder',
    },
    {
        slug: 'estetica',
        sectorLabel: 'clínicas de estética',
        metaTitle: 'Agente de IA para clínicas estéticas | Agenda y WhatsApp 24/7 | BrandSoft',
        metaDescription:
            'Agente conversacional para clínicas estéticas: responde tratamientos, precios orientativos y agenda citas. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para dueños de clínica estética',
            headline: 'Te preguntan por el valor del botox a medianoche',
            headlineAccent: 'y al otro día ya agendaron en la clínica de enfrente.',
            subtitle:
                'El agente responde tratamientos, contraindicaciones básicas, horarios y deja la cita lista para confirmar. Tú recibes el lead caliente en el correo.',
            ctaPrimary: 'Ver demo en mi clínica',
            ctaSecondary: 'WhatsApp — más información',
        },
        pains: [
            {
                title: 'Recepción saturada en fin de semana',
                description:
                    'Instagram y WhatsApp explotan después de un reel. La recepcionista no da abasto y las citas se enfrían.',
            },
            {
                title: 'Pacientes que solo preguntan precio',
                description:
                    'Gastas tiempo en quien no va a pagar. Necesitas filtrar quién tiene interés real en tratamiento.',
            },
            {
                title: 'Citas que no confirman',
                description:
                    'Sin seguimiento automático pierdes huecos en agenda. Cada hueco vacío es plata que no vuelve.',
            },
        ],
        steps: [
            {
                title: '1. Cargamos tu catálogo de tratamientos',
                description: 'Precios orientativos, duración, preparación y políticas que ya usas en recepción.',
            },
            {
                title: '2. Responde y pre-califica',
                description: 'WhatsApp, web e Instagram. El agente detecta interés alto y pide datos para agendar.',
            },
            {
                title: '3. Tu equipo confirma y cierra',
                description: 'Llega resumen al correo. Recepción solo confirma pago de anticipo si aplica.',
            },
        ],
        caseStudy: {
            company: 'Lúmina Estética — clínica en Cali',
            headline: 'Un reel de botox les llenó el Instagram y vació la agenda de respuestas',
            story: `Camila había invertido en un reel que explotó: cientos de mensajes preguntando precio, contraindicaciones y disponibilidad. La recepcionista respondía lo que podía; el resto se enfriaba. En estética, quien no contesta hoy agenda mañana con la clínica de enfrente.

Antes del agente, más de la mitad de los mensajes del fin de semana quedaban sin respuesta el mismo día. Huecos en la agenda los martes, caos los sábados.

Hoy el agente educa con los tratamientos autorizados, filtra quién tiene interés real y deja la cita lista para confirmar. Camila dice que su recepción volvió a sonreír: menos repetición, más cierre de tratamientos premium.`,
            metric: '+22% citas agendadas en 45 días',
        },
        faq: [
            {
                q: '¿Reemplaza a mi recepcionista?',
                a: 'No. La libera del repetitivo para que atienda pacientes en sala y cierre ventas de tratamientos premium.',
            },
            {
                q: '¿Puede dar precios exactos?',
                a: 'Solo los que tú autorices. Para casos complejos escala a humano con el historial del chat.',
            },
            {
                q: '¿$2 millones vale la pena?',
                a: 'Un tratamiento de armonización puede valer $800 mil a $2 millones. Perder uno al mes ya duele más que la mensualidad.',
            },
            {
                q: '¿Funciona con Instagram?',
                a: 'Sí, además de WhatsApp y chat web.',
            },
            {
                q: '¿Hay permanencia?',
                a: 'Mensual. Si no mejora tu tiempo de respuesta, no te conviene seguir.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo clínica estética y quiero demo del agente de IA para WhatsApp e Instagram.',
        lostClientAnchor: 'un paciente de tratamiento premium que agenda en otra clínica por no obtener respuesta',
    },
    {
        slug: 'odontologia',
        sectorLabel: 'clínicas dentales',
        metaTitle: 'Agente de IA para odontología | Citas y consultas 24/7 | BrandSoft',
        metaDescription:
            'Agente de IA para clínicas dentales en Colombia: urgencias, limpiezas, ortodoncia y agendamiento por WhatsApp. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para odontólogos y gerentes de clínica dental',
            headline: 'El dolor de muela no espera al lunes',
            headlineAccent: 'y tu WhatsApp tampoco debería dormir.',
            subtitle:
                'Agente que atiende urgencias iniciales, explica procedimientos, filtra pacientes y deja la cita lista para tu auxiliar de odontología.',
            ctaPrimary: 'Demo gratis para mi clínica',
            ctaSecondary: 'WhatsApp — asesoría',
        },
        pains: [
            {
                title: 'Llamadas y chats de urgencia fuera de horario',
                description: 'El paciente con dolor busca quien responda ya. Si tú no, el de la esquina sí.',
            },
            {
                title: 'Auxiliar respondiendo lo mismo 20 veces',
                description: 'Valor de limpieza, blanqueamiento, si aceptan POS — tiempo que debería ir a confirmar citas.',
            },
            {
                title: 'Pacientes que no vuelven a profilaxis',
                description: 'Sin seguimiento pierdes recurrencia. Cada limpieza anual es ingreso predecible.',
            },
        ],
        steps: [
            {
                title: '1. Configuramos servicios y horarios',
                description: 'Urgencias, estética, ortodoncia, convenios y doctores disponibles.',
            },
            {
                title: '2. Atiende y prioriza',
                description: 'Detecta urgencia real vs consulta general. Responde en segundos por WhatsApp y web.',
            },
            {
                title: '3. Agenda en bandeja para confirmar',
                description: 'Correo con paciente, motivo y slot sugerido. Tu equipo confirma en el software que uses.',
            },
        ],
        caseStudy: {
            company: 'Sonríe Bucaramanga — clínica dental',
            headline: 'A las 2 am llegó un dolor de muela; la clínica dormía',
            story: `El Dr. Martínez sabía que las urgencias no esperan al lunes. Pero su auxiliar solo contestaba en horario de oficina. Los pacientes con dolor escribían a WhatsApp, no obtenían respuesta y buscaban "odontólogo urgente" en Google. El de la esquina, con chat activo, se llevaba el caso.

Montamos el agente con servicios, urgencias, horarios y preguntas frecuentes de limpieza y ortodoncia. De noche y fines de semana, el paciente recibe orientación inicial y deja datos para confirmar cita al abrir.

La primera semana captaron tres urgencias que antes se habrían perdido. El tiempo promedio de respuesta bajó de horas a menos de dos minutos. La agenda dejó de tener huecos fantasma por pacientes que nunca confirmaron.`,
            metric: '+18 citas nuevas al mes',
        },
        faq: [
            {
                q: '¿Diagnostica por chat?',
                a: 'No. Orienta y agenda. El diagnóstico lo hace el odontólogo en consulta.',
            },
            {
                q: '¿Se conecta con mi software dental?',
                a: 'Empezamos con notificación por correo y WhatsApp interno. Integraciones avanzadas se cotizan aparte.',
            },
            {
                q: '¿Cuánto cuesta vs una auxiliar?',
                a: 'Auxiliar + prestaciones supera $2.5M. El agente cubre noches y fines de semana sin horas extra.',
            },
            {
                q: '¿Demo gratis?',
                a: 'Sí, con escenarios de tu clínica.',
            },
            {
                q: '¿Solo para Bogotá?',
                a: 'No. Trabajamos con clínicas en toda Colombia de forma remota.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo clínica dental y quiero demo del agente de IA para citas y consultas por WhatsApp.',
        lostClientAnchor: 'un paciente de ortodoncia o implante que agenda en otra clínica',
    },
    {
        slug: 'limpieza',
        sectorLabel: 'empresas de limpieza',
        metaTitle: 'Agente de IA para empresas de limpieza | Cotizaciones 24/7 | BrandSoft',
        metaDescription:
            'Agente de IA para empresas de limpieza: cotiza servicios, califica clientes B2B y B2C por WhatsApp. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para dueños de empresas de aseo y mantenimiento',
            headline: 'Te piden cotización un sábado',
            headlineAccent: 'y el lunes ya contrataron a otro proveedor.',
            subtitle:
                'El agente pregunta metros, frecuencia, tipo de local, zona y deja la cotización lista para que tu comercial solo revise y envíe precio final.',
            ctaPrimary: 'Quiero demo gratis',
            ctaSecondary: 'WhatsApp — cotizar agente',
        },
        pains: [
            {
                title: 'Cotizaciones que tardan días',
                description: 'Edificios y oficinas no esperan. El que responde primero con seriedad se lleva el contrato.',
            },
            {
                title: 'Comercial haciendo de recepcionista',
                description: 'Tu vendedor pierde terreno visitando clientes mientras contesta "¿cuánto por limpieza de apartamento?"',
            },
            {
                title: 'Leads sin datos completos',
                description: 'Llegan mensajes sin dirección, sin metros ni frecuencia. Hay que volver a preguntar todo.',
            },
        ],
        steps: [
            {
                title: '1. Armamos el cuestionario de cotización',
                description: 'Tipo de inmueble, m², frecuencia, ciudad y servicios extra (vidrios, alfombras, etc.).',
            },
            {
                title: '2. El agente califica y recopila',
                description: 'WhatsApp y web 24/7. Separa curiosos de contratos reales.',
            },
            {
                title: '3. Comercial recibe ficha lista',
                description: 'Correo con todos los datos para cotizar en minutos, no en días.',
            },
        ],
        caseStudy: {
            company: 'ProAseo Empresarial — limpieza corporativa en Bogotá',
            headline: 'Un sábado pidieron cotización para un edificio; el lunes ya habían firmado con otro',
            story: `Laura dirigía ProAseo con clientes corporativos exigentes. Cuando llegaba una solicitud grande, necesitaba metros, frecuencia, tipo de superficie y zona. Pero el comercial estaba en visitas y el WhatsApp acumulaba "¿cuánto cobran por limpiar oficinas?" sin datos útiles.

Un contrato de mantenimiento mensual se perdió porque la cotización formal salió cuatro días después. Cuatro días en B2B es una eternidad.

El agente ahora hace el cuestionario completo 24/7: tipo de inmueble, m², frecuencia, ciudad. Laura recibe la ficha por correo y su equipo cotiza el mismo día. Pasó de 2 de cada 10 cotizaciones rápidas a 8 de cada 10 con información lista para cerrar.`,
            metric: '+35% cotizaciones enviadas a tiempo',
        },
        faq: [
            {
                q: '¿Cotiza solo o da precio final?',
                a: 'Recopila datos y puede dar rangos que tú definas. Precio final lo valida tu comercial.',
            },
            {
                q: '¿Sirve para clientes residenciales y corporativos?',
                a: 'Sí. Flujos distintos según tipo de cliente.',
            },
            {
                q: '¿$2 millones mensuales?',
                a: 'Un contrato de oficina pequeño puede pagar $3-5 millones al mes. Un solo contrato recupera la inversión.',
            },
            {
                q: '¿Implementación?',
                a: '5-10 días hábiles con tus servicios y zonas de cobertura.',
            },
            {
                q: '¿Demo?',
                a: 'Gratis. Simulamos una cotización real de tu empresa.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo empresa de limpieza y quiero demo del agente de IA para cotizaciones por WhatsApp.',
        lostClientAnchor: 'un contrato de aseo corporativo que se va por demora en la cotización',
    },
    {
        slug: 'inmobiliarias',
        sectorLabel: 'inmobiliarias',
        metaTitle: 'Agente de IA para inmobiliarias | Leads y visitas 24/7 | BrandSoft',
        metaDescription:
            'Agente de IA para inmobiliarias: califica compradores, responde por WhatsApp y agenda visitas. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para dueños y gerentes de inmobiliaria',
            headline: 'Preguntan por el apartamento del portafolio',
            headlineAccent: 'y el asesor está en visita. El lead se enfría en 15 minutos.',
            subtitle:
                'El agente responde fichas, zona, precio orientativo, requisitos y califica si tiene crédito o es curioso. Tu asesor recibe lead listo para llamar.',
            ctaPrimary: 'Agendar demo gratis',
            ctaSecondary: 'WhatsApp — hablar con BrandSoft',
        },
        pains: [
            {
                title: 'Portales caros y leads compartidos',
                description: 'Pagas Finca Raíz y aun así el cliente contacta a tres inmobiliarias. El primero en responder gana.',
            },
            {
                title: 'Asesores en calle, no en chat',
                description: 'Mientras muestran inmueble, se acumulan 20 WhatsApps sin contestar.',
            },
            {
                title: 'Turistas de precio',
                description: 'Pierdes tiempo con quien no tiene cupo de crédito ni separación. Necesitas filtro automático.',
            },
        ],
        steps: [
            {
                title: '1. Conectamos tu inventario',
                description: 'Tipos de inmueble, zonas, rangos de precio y requisitos de arriendo o compra.',
            },
            {
                title: '2. Califica y responde al instante',
                description: 'WhatsApp, web e Instagram. Pregunta presupuesto, urgencia y financiación.',
            },
            {
                title: '3. Asesor cierra visita',
                description: 'Recibes ficha completa por correo. El humano solo agenda y acompaña cierre.',
            },
        ],
        caseStudy: {
            company: 'Altura Inmobiliaria — boutique en Medellín',
            headline: 'El asesor estaba en visita y el comprador se enfrió en 15 minutos',
            story: `Altura vende apartamentos de gama media-alta en El Poblado. Invertían en portales, pero los leads también escribían por Instagram. El problema: cuando el asesor mostraba un inmueble, el celular quedaba muteado. Tres horas después, el interesado ya había agendado con otra inmobiliaria.

Javier, el gerente, lo dijo sin rodeos: "No perdemos por precio, perdemos por velocidad."

El agente responde fichas, zonas, rangos orientativos y pregunta presupuesto y urgencia. El asesor recibe un lead con contexto: quién es, qué busca, si tiene crédito preaprobado. Solo agenda visitas con compradores serios. En seis semanas, las visitas calificadas subieron sin sumar otro asesor de tiempo completo.`,
            metric: '+15 visitas calificadas al mes',
        },
        faq: [
            {
                q: '¿Reemplaza al asesor?',
                a: 'No. Le quita el filtro inicial para que cierre ventas, no conteste lo básico.',
            },
            {
                q: '¿Se sincroniza con mi web de inmuebles?',
                a: 'Podemos enlazar fichas principales. Inventario grande se configura por etapas.',
            },
            {
                q: '¿Vale $2 millones?',
                a: 'Una comisión de arriendo o venta paga años del servicio. Un lead perdido cuesta mucho más.',
            },
            {
                q: '¿Demo gratis?',
                a: 'Sí, con 2-3 inmuebles de tu portafolio.',
            },
            {
                q: '¿Contrato largo?',
                a: 'Mensual. Sin cláusulas de un año.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo inmobiliaria y quiero demo del agente de IA para calificar leads y agendar visitas.',
        lostClientAnchor: 'una comisión de venta o arriendo que se pierde por no responder a tiempo',
    },
    {
        slug: 'educacion',
        sectorLabel: 'colegios y academias',
        metaTitle: 'Agente de IA para educación | Admisiones y WhatsApp 24/7 | BrandSoft',
        metaDescription:
            'Agente de IA para colegios y academias: responde admisiones, programas y costos orientativos 24/7. Inversión según alcance tras diagnóstico.',
        hero: {
            badge: 'Para rectores y directores de admisiones',
            headline: 'Los papás preguntan en enero por cupos',
            headlineAccent: 'y tu equipo de admisiones no da abasto.',
            subtitle:
                'El agente responde programas, jornadas, costos orientativos y requisitos de matrícula. Admisiones recibe familias ya informadas y listas para visita.',
            ctaPrimary: 'Demo gratis para mi institución',
            ctaSecondary: 'WhatsApp — más info',
        },
        pains: [
            {
                title: 'Temporada alta desbordada',
                description: 'Enero y junio explotan llamadas y chats. Pierdes familias que no esperan callback.',
            },
            {
                title: 'Misma información 100 veces',
                description: 'Horarios, uniformes, transporte, becas — tu equipo repite en lugar de cerrar matrículas.',
            },
            {
                title: 'Leads sin seguimiento',
                description: 'Formularios web sin respuesta en 48h. El papá ya matriculó en otro colegio.',
            },
        ],
        steps: [
            {
                title: '1. Cargamos oferta académica',
                description: 'Grados, jornadas, valores referencia, documentos y fechas de admisión.',
            },
            {
                title: '2. Atiende papás 24/7',
                description: 'WhatsApp, web y redes. Filtra familias con interés real en matrícula.',
            },
            {
                title: '3. Admisiones cierra visita',
                description: 'Correo con perfil del estudiante y dudas pendientes. Tu equipo agenda tour o entrevista.',
            },
        ],
        caseStudy: {
            company: 'English Bridge — academia de idiomas en Bogotá',
            headline: 'En enero los papás preguntan a las 11 pm; admisiones responde el martes',
            story: `English Bridge tenía buena reputación en barrios del norte de Bogotá, pero cada enero y junio el caos era el mismo: cientos de familias preguntando cupos, horarios, uniformes y costos. El equipo de admisiones de tres personas no alcanzaba. Muchos padres matricularon en el colegio que les contestó primero por WhatsApp.

La directora de admisiones nos mostró un chat de un papá: siete preguntas el domingo, respuesta el miércoles. El niño ya estaba en otra academia.

Con el agente, cada familia recibe información oficial al instante y deja datos para tour o entrevista. Admisiones entra solo con prospectos que ya entienden la propuesta. En el último periodo de inscripción, las matrículas cerradas subieron sin contratar temporales.`,
            metric: '+20% matrículas en periodo de inscripción',
        },
        faq: [
            {
                q: '¿Da información oficial de la institución?',
                a: 'Solo lo que tú apruebes. Cambios de política se actualizan en minutos.',
            },
            {
                q: '¿Reemplaza admisiones?',
                a: 'No. Les quita lo repetitivo para que cierren matrícula en visita.',
            },
            {
                q: '¿$2 millones para un colegio?',
                a: 'Una matrícula nueva paga el año del agente. Una familia perdida cuesta mucho más.',
            },
            {
                q: '¿Varios sedes?',
                a: 'Sí. El agente puede dirigir según ciudad o campus.',
            },
            {
                q: '¿Demo?',
                a: 'Gratis con tu información de admisiones.',
            },
        ],
        whatsappIntro:
            'Hola BrandSoft, tengo colegio/academia y quiero demo del agente de IA para admisiones por WhatsApp.',
        lostClientAnchor: 'una matrícula nueva que se va a la competencia por no responder a tiempo',
    },
];

export const AGENTE_CONVERSACIONAL_SLUGS = AGENTE_CONVERSACIONAL_SECTORS.map((s) => s.slug);

export function getAgenteConversacionalSector(slug: string): AgenteConversacionalSector | undefined {
    return AGENTE_CONVERSACIONAL_SECTORS.find((s) => s.slug === slug);
}
