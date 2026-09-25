import type { EducationProgram } from '@/data/education/types';

export const PRODUCTO_REAL: EducationProgram = {
    slug: 'producto-real',
    keyword: 'mentoría para desarrolladores',
    path: '/mentorias/producto-real',
    cardQuestion: 'Escribo código, pero nunca he puesto nada en producción',
    cardTitle: 'Producto Real',
    cardBody:
        'Ocho semanas para dejar un producto funcionando en la nube, con historial de revisiones. En LatAm, para quien quiere que lo que ya sabe se vea. En Texas, para quien quiere entrar a tech o subir de nivel donde ya está.',
    checklistIntro:
        'Te mostramos el instrumento con el que se te evalúa antes de empezar. Un criterio que se conoce después de entregar no es un criterio: es una trampa.',
    deliveries: [
        {
            name: 'Cimientos',
            deliver: 'Repositorio, entorno local y el esqueleto del producto con la primera decisión de arquitectura escrita.',
            acceptance: 'Otra persona clona el repo, lo levanta con las instrucciones y entiende qué problema resuelve el producto sin preguntarte.',
        },
        {
            name: 'Identidad',
            deliver: 'Inicio de sesión con autenticación delegada (OAuth 2.0). Tú no guardas contraseñas.',
            acceptance: 'Un usuario entra con un proveedor externo, la sesión persiste y cerrar sesión deja de tener acceso. Queda escrito por qué ese proveedor y no otro.',
        },
        {
            name: 'Integración',
            deliver: 'El producto consume una API de terceros y habla con al menos otro sistema.',
            acceptance: 'El flujo feliz funciona, el fallo de la API no tumba la pantalla, y el contrato (qué datos entran y salen) está escrito.',
        },
        {
            name: 'Producción',
            deliver: 'Despliegue con infraestructura como código y una URL pública.',
            acceptance: 'La URL responde, el despliegue se puede repetir desde el repositorio, y existe una nota de cómo se observa si se cae.',
        },
    ],
    checklist: [
        { title: 'Funciona', detail: 'El flujo principal se completa de punta a punta, no solo en tu máquina.' },
        { title: 'Se entiende', detail: 'Un lector ajeno sabe qué hace el producto y por qué tomaste esa decisión.' },
        { title: 'Backend', detail: 'Los datos, las rutas y los errores tienen un lugar claro. No hay lógica regada.' },
        { title: 'Frontend', detail: 'La interfaz deja hacer la tarea sin instrucciones orales.' },
        { title: 'Seguridad', detail: 'La sesión, los secretos y los permisos no quedan en el cliente ni en el repositorio.' },
        { title: 'Pruebas', detail: 'Hay al menos una prueba que fallaría si se rompe el flujo de esa entrega.' },
        { title: 'Operación', detail: 'Se puede volver a desplegar y se sabe qué mirar si la URL deja de responder.' },
    ],
    calendarNote:
        'Ocho semanas, cuatro cortes, uno cada dos semanas. La fecha de arranque de la próxima cohorte se fija en la llamada de diagnóstico: no publicamos un día que todavía no está cerrado. El ritmo sí está cerrado.',
    calendar: [
        { when: 'Semana 0', what: 'Diagnóstico. Se escribe la brecha y los criterios de la primera entrega.' },
        { when: 'Semanas 1–2', what: 'Cimientos. Entrega y revisión escrita en menos de 48 horas.' },
        { when: 'Semanas 3–4', what: 'Identidad. OAuth y la decisión escrita de cómo entra la gente.' },
        { when: 'Semanas 5–6', what: 'Integración. API de terceros y el contrato entre sistemas.' },
        { when: 'Semanas 7–8', what: 'Producción. URL pública, infraestructura como código y el cierre: contar el producto con evidencia.' },
    ],
    routes: [
        {
            id: 'base',
            name: 'Ruta base',
            summary: 'El método completo sobre tu producto.',
            includes: [
                'Diagnóstico y programa armado después, no antes',
                'Cuatro entregas con criterios de aceptación',
                'Revisión escrita en menos de 48 horas por corte',
                'Rúbrica de cinco ejes y cierre con evidencia',
            ],
        },
        {
            id: 'completa',
            name: 'Ruta completa',
            summary: 'La base, más los bloques de carrera.',
            includes: [
                'Todo lo de la ruta base',
                'Simulación de entrevista técnica sobre TU producto, no sobre un ejercicio genérico',
                'Negociación de una oferta: cómo leer un paquete, no cómo «cerrarla seguro»',
                'CV o resume y LinkedIn reescritos a partir de las decisiones que ya defendiste',
                'Carta de recomendación si la rúbrica cierra en aprobado',
            ],
        },
    ],
    reference: {
        kicker: 'Cohorte de referencia, no un egresado',
        title: 'Esta es la primera cohorte. No hay alumnos que mostrar.',
        body: 'El caso de referencia es el propio artefacto del programa: un producto con URL pública, OAuth 2.0, una API de terceros, despliegue repetible y un repositorio cuyo historial son las revisiones, no un commit gigante al final. Cuando haya egresados, aquí irá su enlace. Hoy no inventamos testimonios ni fotos.',
    },
    outcomes: [
        'Una URL pública que responde',
        'Un repositorio con historial de revisiones reales',
        'Decisiones de arquitectura escritas que puedes defender',
        'En la ruta completa: CV o resume, LinkedIn y carta si la rúbrica cierra',
    ],
    regions: {
        latam: {
            metaTitle: 'Mentoría para desarrolladores | Producto en producción | BrandSoft Education',
            metaDescription:
                'Mentoría para desarrolladores en Colombia, México, Perú, Argentina y Chile: un producto en la nube, con revisión escrita. Sin promesa de empleo.',
            headline: 'Mentoría para desarrolladores: una URL pública, no otro repo que nadie abre',
            lede: 'Esta mentoría para desarrolladores es para quien ya programa y nunca ha llevado algo a producción. En ocho semanas construyes un solo producto —con autenticación delegada, una API de terceros y despliegue repetible— y cada quincena te lo revisan por escrito. Sirve en Colombia, México, Perú, Argentina y Chile, donde lo que ya sabes muchas veces no se ve.',
            symptoms: [
                'Tengo proyectos en GitHub, pero nadie los abre.',
                'Sé la teoría, pero nunca la he puesto en producción.',
                'No sé qué responder cuando preguntan por una decisión de arquitectura.',
            ],
            buildTitle: 'Qué vas a construir',
            buildBody:
                'Un producto funcionando en la nube. Una persona entra con OAuth 2.0, el sistema habla con una API de terceros y con otro servicio, y el despliegue vive como código, no como clics que solo tú recuerdas. Al final hay una URL. No es una lista de tecnologías: es una cosa que existe y que puedes abrir en una videollamada.',
            diagram: [
                { label: 'Persona', detail: 'Entra con un proveedor. Tú no guardas la contraseña.' },
                { label: 'Tu producto', detail: 'La lógica y la interfaz de una sola cosa, que crece en cuatro cortes.' },
                { label: 'API externa', detail: 'Datos de otro sistema, con un contrato escrito y un plan si falla.' },
                { label: 'URL pública', detail: 'Infraestructura como código. Se puede volver a desplegar.' },
            ],
            notPromise:
                'No te prometemos empleo ni salario. A nivel senior, en el mercado, la brecha entre un salario corporativo local en LatAm y uno remoto para Estados Unidos llega a ser de cuatro veces el bruto. Los stacks con más demanda, como TypeScript y Next.js, pagan entre 20 % y 30 % más que Java con Spring Boot, por oferta y demanda, no porque sean «mejores». Eso es contexto del mercado. No es una oferta, ni un piso, ni algo que este programa te asegure.',
            requirementsIntro: 'Antes de entrar tiene que ser verdad esto. Filtrar aquí evita devoluciones después.',
            requirements: [
                'Ya programas. Si estás en el primer «hola mundo», esta cohorte no es la tuya.',
                'Seis a ocho horas por semana, ocho semanas, además de tu trabajo de tiempo completo si lo tienes.',
                'Cuenta de GitHub y ganas de escribir las decisiones, no solo el código.',
                'Puedes sostener una videollamada. La revisión igual queda por escrito.',
            ],
            faqs: [
                {
                    q: '¿La mentoría para desarrolladores me consigue trabajo remoto?',
                    a: 'No. La mentoría para desarrolladores de Producto Real te deja una URL, un repositorio con revisiones y decisiones que puedes defender. No te conseguimos trabajo, ni en Colombia ni remoto, ni te prometemos un sueldo en dólares.',
                },
                {
                    q: '¿Por qué el proyecto usa un stack moderno y no el de mi trabajo?',
                    a: 'Porque el artefacto tiene que poder desplegarse y mostrarse. En el mercado, TypeScript y Next.js pagan entre 20 % y 30 % más que Java con Spring Boot por oferta y demanda. El programa no te paga esa diferencia: te deja un producto que puedes explicar.',
                },
                {
                    q: '¿AWS sale gratis para desplegar?',
                    a: 'No cuentes con un año gratis. Desde julio de 2025, las cuentas nuevas de AWS reciben créditos y seis meses, no doce. El criterio de la entrega de producción es que la URL responda y el despliegue se pueda repetir, no que la factura sea cero.',
                },
                {
                    q: '¿Me sirve si ya trabajo como junior o mid en una empresa de LatAm?',
                    a: 'Sí, si el hueco es producción y evidencia, no si el hueco es aprender a programar desde cero. El diagnóstico de la primera sesión dice si la brecha cabe en ocho semanas.',
                },
                {
                    q: '¿La carta de recomendación sale siempre?',
                    a: 'No. Sale en la ruta completa si la rúbrica cierra en aprobado. Aprobado con observaciones o devuelto no se disfraza de carta.',
                },
                {
                    q: '¿Qué pasa con mi hoja de vida?',
                    a: 'En la ruta completa se reescribe a partir de las decisiones del producto, no con adjetivos. En la ruta base te llevas la evidencia; la hoja de vida y LinkedIn entran en la ruta completa. Postularte sigue siendo tuyo.',
                },
            ],
            marketNote:
                'La plata del mercado —esa brecha de hasta cuatro veces, o el 20 % a 30 % entre stacks— se cita para que sepas el contexto. El programa no la convierte en promesa.',
        },
        tx: {
            metaTitle: 'Mentoría para desarrolladores en Texas | Producto en producción | BrandSoft Education',
            metaDescription:
                'Mentoría para desarrolladores latinos en Texas: un producto con URL pública, revisión escrita y resume armado con evidencia. Sin promesa de empleo.',
            headline: 'Mentoría para desarrolladores: a live URL you can put on your resume',
            lede: 'Esta mentoría para desarrolladores es para latinos en Texas que ya programan —o están a un paso— y no tienen un producto en producción que enseñar. En ocho semanas construyes uno, con OAuth, una API de terceros y deploy repetible. Cada quincena hay revisión escrita. Houston, Dallas y el resto del estado compiten con gente que sí tiene algo abierto en una URL, no solo un repo.',
            symptoms: [
                'Tengo repos en GitHub, pero en la entrevista nadie los abre.',
                'Sé la teoría, pero nunca he hecho deploy de algo que use gente de verdad.',
                'Cuando preguntan por trade-offs, me quedo en el tutorial.',
            ],
            buildTitle: 'Qué vas a construir',
            buildBody:
                'Un producto en la nube, con URL pública. Alguien entra con OAuth 2.0, el sistema habla con una API de terceros y el deploy queda como código. No es un slide de arquitectura: es una cosa que abres en la llamada y que puedes pegar en el resume.',
            diagram: [
                { label: 'Usuario', detail: 'Entra con un proveedor. Tú no guardas passwords.' },
                { label: 'Tu producto', detail: 'Una sola pieza, en cuatro entregas, con decisiones escritas.' },
                { label: 'API externa', detail: 'Contrato de datos y un plan cuando el tercero se cae.' },
                { label: 'URL pública', detail: 'Infraestructura como código. El deploy se puede repetir.' },
            ],
            notPromise:
                'No te prometemos empleo ni salario. No hay «te conseguimos el job» ni un rango asegurado. El mercado de Texas paga distinto al de LatAm; este programa no te traslada a esa nómina. Te deja un producto que puedes defender cuando alguien te lo pida.',
            requirementsIntro: 'Si esto no se cumple, la llamada sirve para decir que no.',
            requirements: [
                'Ya escribes código. No es un bootcamp desde cero.',
                'Seis a ocho horas por semana. Se puede cruzar con un trabajo part-time; no se puede cruzar con cero horas.',
                'GitHub y disposición a escribir las decisiones en el repo.',
                'Puedes hacer la sesión por videollamada. La revisión igual queda por escrito.',
            ],
            faqs: [
                {
                    q: '¿Esta mentoría para desarrolladores me coloca en un trabajo en Texas?',
                    a: 'No. La mentoría para desarrolladores de Producto Real no coloca, no garantiza oferta y no negocia por ti con una empresa. Te deja una URL, un repo con revisiones y, en la ruta completa, un resume que habla de decisiones reales.',
                },
                {
                    q: '¿El resume entra en el programa?',
                    a: 'En la ruta completa, sí: se reescribe con la evidencia del producto. Decimos resume, no hoja de vida. En la ruta base te llevas el producto; el resume y LinkedIn van en la completa.',
                },
                {
                    q: '¿Me sirve si ya estoy en un equipo y quiero subir de nivel?',
                    a: 'Sí, si el hueco es producción, integración y saber explicar trade-offs. El diagnóstico mide esa brecha. Si el hueco es el idioma de una entrevista de sistema y todavía no programas, no es esta cohorte.',
                },
                {
                    q: '¿Tengo que pagar taxes o abrir una LLC para entrar?',
                    a: 'No. Taxes y LLC son de cómo facturas si trabajas por tu cuenta. El programa no te abre una LLC ni te hace la declaración. Si eso es lo que necesitas resolver primero, dilo en la llamada.',
                },
                {
                    q: '¿La simulación de entrevista promete que pase el loop?',
                    a: 'No. En la ruta completa simulamos una entrevista técnica sobre tu producto y te devolvemos la revisión. Pasar el proceso de una empresa no está incluido y no se promete.',
                },
                {
                    q: '¿Por qué mencionan AWS y los créditos?',
                    a: 'Porque desde julio de 2025 las cuentas nuevas de AWS traen créditos y seis meses, no doce. Es un detalle para que no armes el presupuesto del deploy con un año gratis. No es el argumento para entrar.',
                },
            ],
            marketNote:
                'En Texas el presupuesto de las empresas existe. Este programa no te lo transfiere: te deja algo que puedes mostrar cuando compites por él.',
        },
    },
};
