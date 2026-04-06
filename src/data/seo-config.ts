export const CITIES = [
    { slug: 'bogota', name: 'Bogotá', context: 'el epicentro tecnológico de Colombia' },
    { slug: 'medellin', name: 'Medellín', context: 'la ciudad de la innovación' },
    { slug: 'cali', name: 'Cali', context: 'el motor del suroccidente colombiano' },
    { slug: 'barranquilla', name: 'Barranquilla', context: 'la puerta de oro de Colombia' },
    { slug: 'bucaramanga', name: 'Bucaramanga', context: 'la ciudad de los parques' }
];

export const SERVICES = [
    {
        slug: 'desarrollo-software-medida',
        name: 'Desarrollo de Software a la Medida',
        description: 'Plataformas escalables con Next.js y React para empresas que buscan rendimiento extremo.',
        icon: 'code',
        features: [
            'Arquitectura escalable en la nube (AWS/Vercel)',
            'Interfaces de alto impacto (UX/UI Premium)',
            'Integración nativa con APIs y CRMs',
            'Soporte técnico 24/7'
        ]
    },
    {
        slug: 'seo-tecnico-avanzado',
        name: 'SEO Técnico Avanzado',
        description: 'Auditorías de Core Web Vitals y optimización de conversión para dominar Google.',
        icon: 'search',
        features: [
            'Optimización de Core Web Vitals (LCP, CLS, INP)',
            'Estrategia de contenidos transaccionales',
            'Indexación inmediata con Search Console',
            'Monitoreo de competencia en tiempo real'
        ]
    },
    {
        slug: 'agentes-ia-automatizacion',
        name: 'Agentes de IA y Automatización',
        description: 'Implementación de Sendell para soporte 24/7 y automatización de procesos B2B.',
        icon: 'cpu',
        features: [
            'Chatbots inteligentes entrenados con tu data',
            'Automatización de flujos con Zapier/Make',
            'Agentes de ventas por WhatsApp 24/7',
            'Análisis predictivo de clientes'
        ]
    }
];

export const VERTICALS = [
    {
        slug: 'restaurantes',
        name: 'Restaurantes y Gastronomía',
        hook: 'Optimiza tus pedidos y duplica tu rentabilidad sin comisiones de apps externas.',
        painPoints: ['Comisiones altas de Rappi/iFood', 'Desorden en inventarios', 'Falta de base de datos de clientes'],
        solution: 'Sistema de pedidos propios con IA para fidelización y control de costos en tiempo real.',
        icon: 'utensils',
        image: '/images/verticals/restaurantes.png',
        subsections: [
            { title: 'Pedidos Sin Comisiones', desc: 'Recupera el 30% de tu rentabilidad ofreciendo un canal directo de pedidos web y WhatsApp.' },
            { title: 'Control de Inventarios con IA', desc: 'Predicciones inteligentes de stock para evitar desperdicios y optimizar compras.' }
        ]
    },
    {
        slug: 'abogados',
        name: 'Abogados y Firmas Legales',
        hook: 'Gestión de expedientes y captación de clientes con seguridad de grado bancario.',
        painPoints: ['Desorden en documentos', 'Páginas web que no generan leads', 'Mucho tiempo en tareas administrativas'],
        solution: 'Plataforma de gestión documental y SEO especializado para dominar el mercado legal.',
        icon: 'briefcase',
        image: '/images/verticals/abogados.png',
        subsections: [
            { title: 'Gestión Documental Segura', desc: 'Escritorios virtuales con encriptación avanzada para custodia de expedientes sensibles.' },
            { title: 'Captación de Leads Calificados', desc: 'Landing pages de alta conversión diseñadas específicamente para captar búsquedas legales.' }
        ]
    },
    {
        slug: 'estetica',
        name: 'Clínicas de Estética y Salud',
        hook: 'Agendamiento automático e historial de pacientes en una plataforma ultra-rápida.',
        painPoints: ['Citas perdidas por olvidos', 'Falta de seguimiento a pacientes', 'Imagen digital poco profesional'],
        solution: 'CRM especializado con recordatorios automáticos por WhatsApp y portafolio de alta gama.',
        icon: 'sparkles',
        image: '/images/verticals/estetica.png',
        subsections: [
            { title: 'Agendamiento Inteligente', desc: 'Calendario sincronizado que reduce ausencias en un 40% mediante recordatorios preventivos.' },
            { title: 'Historial Clínico Digital', desc: 'Fichas de pacientes seguras con antes/después y seguimiento de tratamientos.' }
        ]
    },
    {
        slug: 'limpieza',
        name: 'Empresas de Limpieza y Mantenimiento',
        hook: 'Trazabilidad total de cuadrillas y facturación masiva automatizada.',
        painPoints: ['Falta de control de personal en campo', 'Errores en facturación de contratos', 'Mala reputación por incumplimientos'],
        solution: 'App de control de servicios con geolocalización y generación de reportes automáticos para clientes.',
        icon: 'cleaning',
        image: '/images/verticals/limpieza.png',
        subsections: [
            { title: 'Seguimiento con GPS', desc: 'Verificación en tiempo real del cumplimiento de rutas y tiempos de limpieza.' },
            { title: 'Reportes de Servicio PDF', desc: 'Generación automática de informes para clientes con fotos del antes y el después.' }
        ]
    },
    {
        slug: 'odontologia',
        name: 'Clínicas Dentales y Odontólogos',
        hook: 'Digitaliza tu consultorio y aumenta las cirugías de alta gama con SEO focalizado.',
        painPoints: ['Poca recurrencia de pacientes', 'Dificultad para vender tratamientos costosos', 'Administración manual de citas'],
        solution: 'Plataforma integral de gestión dental con automatización de marketing y recordatorios.',
        icon: 'activity',
        image: '/images/verticals/odontologia.png',
        subsections: [
            { title: 'Recordatorios de Profilaxis', desc: 'Mensajes automáticos para fidelizar pacientes cada 6 meses.' },
            { title: 'Portafolio de Sonrisas', desc: 'Galería interactiva optimizada para SEO que vende tratamientos de estética dental.' }
        ]
    },
    {
        slug: 'inmobiliarias',
        name: 'Inmobiliarias y Bienes Raíces',
        hook: 'Publica tus inmuebles en una web ultra-rápida que captura leads antes que los portales masivos.',
        painPoints: ['Dependencia total de portales externos', 'Webs lentas que aburren al cliente', 'Mala gestión de leads interesados'],
        solution: 'Catálogo inmobiliario interactivo con filtros inteligentes y sincronización automática.',
        icon: 'home',
        image: '/images/verticals/inmobiliaria.png',
        subsections: [
            { title: 'Carga Instantánea de Inmuebles', desc: 'Mostramos tus propiedades sin esperas, aumentando la retención del usuario en un 60%.' },
            { title: 'Funnels de Captación', desc: 'Estrategias de SEO para personas que buscan comprar o arrendar en zonas específicas.' }
        ]
    },
    {
        slug: 'educacion',
        name: 'Educación, Colegios y Academias',
        hook: 'Automatiza procesos de inscripción y centraliza la comunicación con padres y alumnos.',
        painPoints: ['Inscripciones manuales lentas', 'Comunicación fragmentada', 'Falta de plataforma de e-learning propia'],
        solution: 'Campus virtual y sistema de gestión académica con CRM para admisiones inteligentes.',
        icon: 'graduation-cap',
        image: '/images/verticals/educacion.png',
        subsections: [
            { title: 'Admisiones Online', desc: 'Formularios inteligentes que automatizan el proceso de matrícula desde la web.' },
            { title: 'Comunicación unificada', desc: 'App para padres y alumnos con notificaciones académicas en tiempo real.' }
        ]
    },
    {
        slug: 'talleres',
        name: 'Talleres Mecánicos y Automotriz',
        hook: 'Control total de ingresos vehiculares y estados de reparación vía WhatsApp.',
        painPoints: ['Desorden en órdenes de servicio', 'Clientes llamando para preguntar estado', 'Falta de historial de mantenimientos'],
        solution: 'Sistema de órdenes de servicio digitales con notificaciones automáticas y seguimiento de repuestos.',
        icon: 'wrench',
        image: '/images/verticals/talleres.png',
        subsections: [
            { title: 'Órdenes de Trabajo Digitales', desc: 'Elimina el papel y permite que tus mecánicos reporten avances desde su celular.' },
            { title: 'CRM Vehicular', desc: 'Historial completo de cada placa para sugerir mantenimientos preventivos a futuro.' }
        ]
    },
    {
        slug: 'veterinarias',
        name: 'Veterinarias y Pet Shops',
        hook: 'Gestión clínica y venta de productos en una sola plataforma integrada.',
        painPoints: ['Historias clínicas en papel', 'Pérdida de stock en tienda física', 'Olvido de vacunas por parte de dueños'],
        solution: 'Software de clínica veterinaria con POS integrado y alertas de vacunación por WhatsApp.',
        icon: 'dog',
        image: '/images/verticals/veterinarias.png',
        subsections: [
            { title: 'Historia Clínica Cloud', desc: 'Acceso total a la salud de las mascotas desde cualquier dispositivo.' },
            { title: 'Alertas de Salud', desc: 'Fideliza a tus clientes enviando recordatorios automáticos de desparasitación y vacunas.' }
        ]
    },
    {
        slug: 'construccion',
        name: 'Constructoras y Arquitectos',
        hook: 'Seguimiento de fases de obra y gestión de proveedores de alto impacto.',
        painPoints: ['Sobrecostos por falta de control', 'Mala comunicación con el cliente final', 'Desorden en presupuestos'],
        solution: 'Plataforma de gestión de proyectos de construcción con visualizadores de avance para clientes.',
        icon: 'hammer',
        image: '/images/verticals/construccion.png',
        subsections: [
            { title: 'Reporte de Avance Diario', desc: 'Comparte fotos y estados de obra automáticamente con los inversionistas.' },
            { title: 'Control de Costos Real vs Presupuesto', desc: 'Alertas tempranas sobre desviaciones financieras en cada etapa de la obra.' }
        ]
    },
    {
        slug: 'logistica',
        name: 'Logística y Transporte',
        hook: 'Optimización de rutas y trazabilidad de carga en tiempo real.',
        painPoints: ['Desconocimiento de ubicación de flota', 'Errores en guías de despacho', 'Altos costos operativos por rutas ineficientes'],
        solution: 'TMS avanzado con optimizador de rutas y portal de rastreo para el cliente final.',
        icon: 'truck',
        image: '/images/verticals/logistica.png',
        subsections: [
            { title: 'Rastreo de Guías Online', desc: 'Reduce el soporte técnico permitiendo que tus clientes vean su carga en el mapa.' },
            { title: 'Liquidación de Viajes', desc: 'Automatiza el cálculo de fletes, viáticos y gastos de conductores.' }
        ]
    },
    {
        slug: 'gimnasios',
        name: 'Gimnasios y Centros Fitness',
        hook: 'Control de accesos y pagos recurrentes automatizados sin complicaciones.',
        painPoints: ['Dificultad en cobro de mensualidades', 'Desorden en reserva de clases', 'Falta de seguimiento a metas de socios'],
        solution: 'Sistema de gestión fitness con app para socios y cobro recurrente automático.',
        icon: 'dumbbell',
        image: '/images/verticals/gimnasios.png',
        subsections: [
            { title: 'Pagos Recurrentes Automáticos', desc: 'Asegura tu flujo de caja con suscripciones debitadas automáticamente.' },
            { title: 'Reserva de Clases App', desc: 'Organiza tus aforos y evita aglomeraciones mediante un sistema de reservas simple.' }
        ]
    }
];
