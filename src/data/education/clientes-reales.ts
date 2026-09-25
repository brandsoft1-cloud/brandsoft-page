import type { EducationProgram } from '@/data/education/types';

export const CLIENTES_REALES: EducationProgram = {
    slug: 'clientes-reales',
    keyword: 'mentoría de marketing digital para negocios',
    path: '/mentorias/clientes-reales',
    cardQuestion: 'Tengo un negocio y no sé si lo que publico sirve',
    cardTitle: 'Clientes Reales',
    cardBody:
        'Ocho semanas para dejar el motor de captación de un negocio —el tuyo, si tienes uno— publicado, medido y sostenible. En LatAm, para no depender de recomendados. En Texas, para que te encuentren en inglés y en español.',
    checklistIntro:
        'Te mostramos el instrumento con el que se te evalúa antes de empezar. Un criterio que se conoce después de entregar no es un criterio: es una trampa.',
    deliveries: [
        {
            name: 'Sitio publicado',
            deliver: 'El negocio queda en un dominio propio, con una página que dice qué vende.',
            acceptance: 'La URL carga en celular, el mensaje se entiende en cinco segundos y el formulario llega a un buzón que sí revisas.',
        },
        {
            name: 'Visibilidad',
            deliver: 'SEO local y GEO: la ficha del negocio y el contenido que una búsqueda —y un chat de IA— pueden citar.',
            acceptance: 'Hay títulos, datos del negocio y una página que responde una pregunta real de tus clientes, no una lista de palabras sueltas.',
        },
        {
            name: 'Motor de captación',
            deliver: 'Un canal de contenido con calendario y una campaña corriendo, no un post suelto.',
            acceptance: 'El calendario cubre las siguientes cuatro semanas, la campaña tiene una sola oferta y sabes a dónde cae cada contacto.',
        },
        {
            name: 'Medición',
            deliver: 'Números de antes y después: visitas, contactos y qué pieza trajo cada uno.',
            acceptance: 'Puedes abrir el tablero y decir, sin que te lo expliquen, si la quincena sirvió o no.',
        },
    ],
    checklist: [
        { title: 'Carga y se ve en celular', detail: 'El sitio abre rápido en un teléfono y no pide zoom para leerse.' },
        { title: 'Mensaje claro en 5 segundos', detail: 'Un desconocido dice qué vendes y a quién, sin bajar.' },
        { title: 'SEO técnico', detail: 'Títulos, indexación y datos locales están puestos, no «para después».' },
        { title: 'Contenido', detail: 'Hay piezas con calendario, no una ráfaga que se apaga a la semana.' },
        { title: 'Captación y seguimiento', detail: 'El formulario o el mensaje llega a un lugar y alguien responde.' },
        { title: 'Medición', detail: 'Existe un antes y un después con números, no con sensaciones.' },
        { title: 'Sostenibilidad', detail: 'Puedes publicar la siguiente quincena sin que el mentor esté al lado.' },
    ],
    calendarNote:
        'Ocho semanas, cuatro cortes, uno cada dos semanas. La fecha de arranque se fija en la llamada de diagnóstico. Aquí está el ritmo, no un día inventado.',
    calendar: [
        { when: 'Semana 0', what: 'Diagnóstico del negocio: qué vendes, a quién, y qué se puede medir hoy.' },
        { when: 'Semanas 1–2', what: 'Sitio publicado en dominio propio. Revisión escrita del mensaje y del celular.' },
        { when: 'Semanas 3–4', what: 'Visibilidad: SEO local y GEO. La página responde una pregunta que tus clientes ya hacen.' },
        { when: 'Semanas 5–6', what: 'Calendario de contenido y una campaña con una sola oferta.' },
        { when: 'Semanas 7–8', what: 'Medición. Números de antes y después, y el cierre: puedes sostener el calendario solo.' },
    ],
    routes: [
        {
            id: 'base',
            name: 'Ruta base',
            summary: 'El motor de captación, construido contigo.',
            includes: [
                'Diagnóstico del negocio antes del calendario',
                'Cuatro entregas con criterios de aceptación',
                'Revisión escrita en menos de 48 horas por corte',
                'Rúbrica y cierre: un calendario que puedes sostener sin el mentor',
            ],
        },
        {
            id: 'completa',
            name: 'Ruta completa',
            summary: 'La base, más leer tus números y cotizar.',
            includes: [
                'Todo lo de la ruta base',
                'Cómo leer tus propios números: qué mirar cada semana y qué ignorar',
                'Cómo cotizar tu trabajo si vendes como freelance, con un rango que puedes explicar',
                'Una pasada final del mensaje en los idiomas en los que atiendes',
            ],
        },
    ],
    reference: {
        kicker: 'Cohorte de referencia, no un cliente graduado',
        title: 'Esta es la primera cohorte. No hay egresados que mostrar.',
        body: 'El caso de referencia es el motor que el programa construye: sitio en dominio propio, SEO local, una página citable, calendario de cuatro semanas, una campaña y un tablero con antes y después. No es la captura de un alumno. Cuando exista una cohorte cerrada, aquí irá el enlace. Hoy no hay testimonios inventados.',
    },
    outcomes: [
        'Un sitio en dominio propio que se entiende en el celular',
        'Presencia que una búsqueda y un chat de IA pueden citar',
        'Un calendario de contenido que puedes sostener solo',
        'Números de antes y después, no una sensación de que «algo pasó»',
    ],
    regions: {
        latam: {
            metaTitle: 'Mentoría de marketing digital para negocios | Clientes Reales | BrandSoft Education',
            metaDescription:
                'Mentoría de marketing digital para negocios en Colombia y LatAm: sitio, SEO local, contenido y números. Sin promesa de ventas.',
            headline: 'Mentoría de marketing digital para negocios que ya no quieren depender del recomendado',
            lede: 'Esta mentoría de marketing digital para negocios construye el motor de captación de un negocio real —el tuyo, si tienes uno— en ocho semanas. Sitio en dominio propio, SEO local y GEO, un calendario de contenido, una campaña y la medición que dice si sirvió. Está pensada para Colombia, México, Perú y el resto de LatAm, donde muchos venden solo porque alguien los pasó por WhatsApp.',
            symptoms: [
                'Publico seguido, pero no sé si eso trae clientes o solo likes.',
                'Si nadie me recomienda, el mes sale flojo.',
                'Tengo sitio, o quiero uno, y en cinco segundos no se entiende qué vendo.',
            ],
            buildTitle: 'Qué vas a construir',
            buildBody:
                'El motor de captación de tu negocio. Una persona te busca, cae en un sitio que carga en el celular, entiende la oferta, deja sus datos y tú ves si esa quincena trajo contactos o no. No es un curso de redes. Es el sitio, la visibilidad, el calendario y los números, en ese orden.',
            diagram: [
                { label: 'Búsqueda', detail: 'Google o un chat de IA cita tu negocio porque la página responde algo concreto.' },
                { label: 'Sitio', detail: 'Dominio propio. Mensaje claro. Formulario que sí llega.' },
                { label: 'Canal', detail: 'Calendario de cuatro semanas y una campaña con una sola oferta.' },
                { label: 'Números', detail: 'Antes y después: visitas, contactos y qué pieza los trajo.' },
            ],
            notPromise:
                'No te prometemos ventas ni el puesto número uno en Google. Una agencia en Estados Unidos cobra entre USD 5.000 y 10.000 por un sitio de negocio. Hacerlo uno mismo con herramientas sale entre USD 500 y 1.000, y el mantenimiento mensual entre USD 40 y 300. Esas cifras son del mercado, para que compares. El precio de este programa se confirma en la llamada: no lo inventamos aquí ni tachamos un precio que nunca existió.',
            requirementsIntro: 'Si esto no está, el programa se devuelve antes de empezar.',
            requirements: [
                'Tienes un negocio, o una oferta freelance que ya podrías cobrar. No construimos una idea desde cero sin oferta.',
                'Cinco a siete horas por semana durante ocho semanas.',
                'Puedes comprar un dominio si todavía no tienes, y revisar el buzón donde caen los contactos.',
                'Aceptas que «sirve» se decide con números, no con la cantidad de publicaciones.',
            ],
            faqs: [
                {
                    q: '¿La mentoría de marketing digital para negocios me llena la agenda?',
                    a: 'No. La mentoría de marketing digital para negocios te deja el motor: sitio, visibilidad, calendario y medición. No promete ventas, ni un número de clientes, ni la primera posición en Google.',
                },
                {
                    q: '¿Trabajamos sobre mi negocio o sobre uno de mentira?',
                    a: 'Sobre el tuyo, si tienes oferta. Si no tienes negocio, no inventamos una marca de práctica: la llamada dice si hay con qué construir.',
                },
                {
                    q: '¿Me sirve si solo me llegan clientes por recomendados?',
                    a: 'Ese es el caso de entrada. El programa no te pide que dejes de atender recomendados: te deja un canal que no depende de que alguien te presente.',
                },
                {
                    q: '¿Por qué comparan con lo que cobra una agencia?',
                    a: 'Porque en Estados Unidos un sitio de negocio sale entre USD 5.000 y 10.000, y hacerlo con herramientas entre USD 500 y 1.000, más USD 40 a 300 al mes de mantenimiento. El programa apunta a que el negocio quede con la capacidad de sostenerlo. El precio exacto se dice en la llamada, no en un tachado.',
                },
                {
                    q: '¿Incluye que ustedes escriban todo el contenido?',
                    a: 'No. El mentor no hace el trabajo por ti. Revisamos lo que tú publicas, con el checklist, en menos de 48 horas.',
                },
                {
                    q: '¿Y si vendo como freelance y no tengo local?',
                    a: 'En la ruta completa vemos cómo cotizar tu trabajo con un rango que puedas explicar. No te conseguimos los contratos. En la ruta base igual dejas sitio, calendario y números.',
                },
            ],
            marketNote:
                'El contraste con la agencia (USD 5.000 a 10.000) y con hacerlo solo (USD 500 a 1.000, más el mantenimiento) es contexto. El precio del programa no se publica hasta que esté cerrado.',
        },
        tx: {
            metaTitle: 'Mentoría de marketing digital para negocios en Texas | BrandSoft Education',
            metaDescription:
                'Mentoría de marketing digital para negocios latinos en Texas: sitio, SEO local en inglés y español, y números. Sin promesa de ventas.',
            headline: 'Mentoría de marketing digital para negocios que necesitan que los encuentren en inglés y en español',
            lede: 'Esta mentoría de marketing digital para negocios arma el motor de captación de un negocio latino en Texas. Sitio en dominio propio, SEO local y GEO en los dos idiomas, calendario, una campaña y números de antes y después. Houston, Dallas y cualquier zip code donde hoy dependas de un solo cliente o de un solo grupo.',
            symptoms: [
                'Posteo en los dos idiomas y no sé cuál está trayendo llamadas.',
                'Dependo de un solo cliente, o del grupo del zip code.',
                'Pagué un sitio y no aparezco cuando buscan mi servicio.',
            ],
            buildTitle: 'Qué vas a construir',
            buildBody:
                'El motor de tu negocio en Texas: una página que en cinco segundos dice qué haces, en el idioma en que te buscan; una ficha local que coincide con tu ciudad; un calendario que puedes sostener part-time; y un tablero que separa las llamadas que vinieron de Google de las que vinieron de un conocido.',
            diagram: [
                { label: 'Búsqueda local', detail: 'Tu ciudad, tu servicio, en inglés o en español. La página responde esa búsqueda.' },
                { label: 'Sitio', detail: 'Dominio propio. Se lee en el teléfono. El formulario cae donde tú miras.' },
                { label: 'Campaña', detail: 'Una oferta, no cinco. Calendario de cuatro semanas.' },
                { label: 'Números', detail: 'Antes y después. Sin números, no hay «nos fue bien».' },
            ],
            notPromise:
                'No te prometemos ventas ni el número uno en Google o en Maps. En Estados Unidos una agencia cobra entre USD 5.000 y 10.000 por un sitio de negocio. Hacerlo con herramientas sale entre USD 500 y 1.000, y mantenerlo entre USD 40 y 300 al mes. Esas son cifras del mercado. El precio de este programa se confirma en la llamada.',
            requirementsIntro: 'Si esto no cuadra, mejor decirlo en los 15 minutos.',
            requirements: [
                'Tienes un negocio en Texas, o una oferta que ya cobras, aunque sea part-time.',
                'Cinco a siete horas por semana. Se puede hacer además del día de trabajo.',
                'Dominio propio, o la decisión de comprarlo. El sitio no se queda en un subdominio gratis.',
                'Puedes atender en inglés, en español, o en los dos, y el sitio tiene que decirlo.',
            ],
            faqs: [
                {
                    q: '¿La mentoría de marketing digital para negocios me trae clientes en Houston o Dallas?',
                    a: 'No lo promete. La mentoría de marketing digital para negocios deja el sitio, el SEO local, el calendario y la medición para que te puedan encontrar en Houston, Dallas o tu ciudad. Las ventas no hacen parte de lo que se entrega.',
                },
                {
                    q: '¿El sitio queda en inglés, en español, o en los dos?',
                    a: 'En los idiomas en los que sí atiendes. Si contestas el teléfono en los dos, las páginas que captan tienen que poder citarse en los dos. No traducimos por adornar.',
                },
                {
                    q: '¿Me ayudan con la LLC o con los taxes del negocio?',
                    a: 'No. LLC y taxes se resuelven con quien lleve tus cuentas. Aquí se construye el motor de captación. Si el negocio todavía no puede cobrar, la llamada lo dice.',
                },
                {
                    q: '¿Por qué hablan de lo que cobra una agencia?',
                    a: 'Porque en Estados Unidos un sitio de negocio va de USD 5.000 a 10.000, y hacerlo con herramientas de USD 500 a 1.000, más USD 40 a 300 al mes. El programa existe para que no dependas de la agencia para la siguiente publicación. El precio se confirma en la llamada.',
                },
                {
                    q: '¿Puedo entrar si trabajo part-time en el negocio?',
                    a: 'Sí, si proteges cinco a siete horas por semana. Part-time no es el problema. Cero horas para publicar y mirar los números, sí.',
                },
                {
                    q: '¿Ustedes manejan la campaña por mí?',
                    a: 'No. Tú la dejas corriendo y nosotros la revisamos con el checklist. El mentor no opera el negocio.',
                },
            ],
            marketNote:
                'El rango de agencia en Estados Unidos (USD 5.000 a 10.000) es el contraste. No es un precio tachado de BrandSoft.',
        },
    },
};
