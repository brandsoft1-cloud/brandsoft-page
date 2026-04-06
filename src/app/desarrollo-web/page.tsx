import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import {
    Layout,
    Zap,
    Monitor,
    Database,
    ShieldCheck,
    Layers,
    MessageSquare,
    ChevronRight,
    Search,
    UserCircle,
    ShoppingBag
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Desarrollo de Software a la Medida",
    description: "Expertos en Desarrollo Web con Next.js y React en Colombia. Creamos plataformas escalables, rápidas y optimizadas para SEO industrial y corporativo.",
    alternates: {
        canonical: '/desarrollo-web',
    }
};

const valueProps = [
    {
        title: "Arquitecturas de Vanguardia",
        description: "Utilizamos Next.js 15+ y React 19 para garantizar carga instantánea (LCP < 1.0s) e indexación perfecta por Google.",
        icon: Layout,
    },
    {
        title: "Escalabilidad Cloud",
        description: "Servicios distribuidos y microservicios diseñados para crecer con tu empresa sin degradación del rendimiento.",
        icon: Database,
    },
    {
        title: "Seguridad y Cumplimiento",
        description: "Protocolos robustos de cifrado y cumplimiento normativo (Habeas Data / GDPR) en cada desarrollo.",
        icon: ShieldCheck,
    },
    {
        title: "Integraciones API",
        description: "Conectamos tu software con SAP, CRMs, ERPs y gateways de pago de forma fluida y segura.",
        icon: Layers,
    }
];

const faqs = [
    {
        q: "¿Cuánto tiempo toma desarrollar una plataforma a la medida?",
        a: "Un MVP profesional suele tomar entre 4 y 8 semanas. Proyectos corporativos complejos pueden tardar de 3 a 6 meses."
    },
    {
        q: "¿Trabajan con tecnologías específicas?",
        a: "Somos especialistas en el stack de Next.js, TypeScript y Tailwind CSS, pero integramos cualquier backend (Node.js, Python, Go) según la necesidad."
    },
    {
        q: "¿Entregan el código fuente?",
        a: "Sí. Todo el desarrollo es propiedad del cliente y entregamos la documentación técnica y repositorio completo al cierre."
    },
    {
        q: "¿Ofrecen mantenimiento después del lanzamiento?",
        a: "Ofrecemos soporte preventivo, correctivo y evolutivo 24/7 para garantizar que tu operación nunca se detenga."
    }
];

export default function SoftwarePage() {
    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-violet-600/5 blur-[120px] pointer-events-none" />

            {/* HERO SECTION - Intro Comercial */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-6">
                            <Zap className="w-3 h-3" />
                            <span>SOFTWARE DE ALTA PRECISIÓN</span>
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Desarrollo de <span className="text-violet-400">Software a la Medida</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                            ¿Tu empresa en Bogotá o Cundinamarca necesita escalar? En BrandSoft creamos soluciones digitales que no solo cumplen funciones, sino que dominan el mercado técnico.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link href="#contacto" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-violet-400 hover:text-white transition-all flex items-center gap-2">
                                Iniciar Consultoría Gratis
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden min-h-[400px] flex items-center justify-center">
                            <Monitor className="w-32 h-32 text-violet-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION - Detalle Técnico */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">¿Qué incluye nuestro Servicio?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold">EXCELENCIA EN CADA LÍNEA DE CÓDIGO</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {valueProps.map((item, idx) => (
                            <div key={idx} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-violet-500/30 transition-all flex flex-col items-center text-center">
                                <div className="bg-violet-500/10 p-4 rounded-xl text-violet-400 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-4xl mx-auto text-gray-400 leading-relaxed space-y-8">
                        <p>
                            En el competitivo mercado de **Colombia**, el software no debe ser un gasto, sino una inversión estratégica. En **BrandSoft**, acompañamos a empresas industriales, corporativas y del sector público en el diseño de arquitecturas digitales sólidas.
                        </p>
                        <h3 className="text-white text-2xl font-bold">Casos de Uso Reales</h3>
                        <p>
                            Desde plataformas de logística avanzada para flotas de camiones hasta sistemas dinámicos para el sector de **Saneamiento Hídrico** (como nuestro exitoso proyecto con Ecolimpieza Bogotá). Hemos demostrado que la tecnología personalizada reduce costos operativos hasta en un 40%.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="mt-1"><Zap className="w-5 h-5 text-violet-400" /></div>
                                <span>**Administración de Conjuntos:** Portales de pagos y PQRs automatizados.</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><Zap className="w-5 h-5 text-violet-400" /></div>
                                <span>**Sector Industrial:** Dashboards de rendimiento de maquinaria en tiempo real.</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><Zap className="w-5 h-5 text-violet-400" /></div>
                                <span>**Comercio B2B:** Portales de pedidos mayoristas con integraciones de inventario.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROCESS - Paso a Paso */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold text-white mb-16">Proceso de Trabajo <span className="text-violet-400">Sin Sorpresas</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {[
                            { step: '01', name: 'Discovery', desc: 'Analizamos tus KPIs y procesos de negocio.' },
                            { step: '02', name: 'UX/UI Design', desc: 'Prototipado rápido y validación visual.' },
                            { step: '03', name: 'Agile Dev', desc: 'Sprint planning y código con Next.js.' },
                            { step: '04', name: 'QA & Launch', desc: 'Pruebas de estrés y despliegue continuo.' }
                        ].map((p, i) => (
                            <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-3xl">
                                <div className="text-4xl font-black text-violet-500/20 absolute top-4 right-4">{p.step}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{p.name}</h4>
                                <p className="text-sm text-gray-500">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENFITS - Ambiental & Auditoría */}
            <section className="py-24 bg-violet-600/5 backdrop-blur-xl border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Tecnología con <br /><span className="text-violet-400">Trazabilidad Total</span></h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Si tu negocio maneja auditorías de entidades como la **Secretaría de Ambiente** o requiere **manifiestos de carga/servicio**, nuestro software automatiza la generación de documentos legales con firma digital y cumplimiento de trazabilidad.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Evite sanciones y paros de operación mediante sistemas inteligentes que notifican vencimientos y alertas preventivas.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-black border border-white/10 p-6 rounded-2xl">
                            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Auditoría Lista</h4>
                            <p className="text-xs text-gray-500">Documentación automatizada para entes de control.</p>
                        </div>
                        <div className="bg-black border border-white/10 p-6 rounded-2xl">
                            <Layers className="w-8 h-8 text-violet-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Cumplimiento</h4>
                            <p className="text-xs text-gray-500">GDPR y leyes de protección de datos colombianas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                        <MessageSquare className="text-violet-400" />
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((f, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <h4 className="text-lg font-bold text-white mb-2">{f.q}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
