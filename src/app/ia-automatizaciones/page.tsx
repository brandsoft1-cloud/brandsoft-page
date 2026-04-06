import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import {
    BrainCircuit,
    Zap,
    Bot,
    Workflow,
    Cpu,
    MessageSquare,
    ChevronRight,
    Search,
    UserCircle,
    Globe,
    Target,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Agentes de IA y Automatizaciones (Sendell)",
    description: "Implementación experta de Agentes de IA impulsados por Sendell en Colombia. Automatiza ventas, soporte 24/7 y contabilidad con inteligencia artificial personalizada.",
    alternates: {
        canonical: '/ia-automatizaciones',
    }
};

const solutions = [
    {
        title: "Sendell Personal",
        description: "Asistente inteligente diseñado para organizar tu día y recordar cada detalle a largo plazo. Integrado con WhatsApp, Web y Discord.",
        icon: Bot,
        color: "emerald"
    },
    {
        title: "NexaHelp Soporte AI",
        description: "IA de soporte técnico 24/7 en WhatsApp, Web y Email. Interpreta capturas de pantalla, reduce tiempos a <2 mins y escala soporte T2 con 98% de satisfacción.",
        icon: Workflow,
        color: "emerald"
    },
    {
        title: "Sendell Business",
        description: "Hub de automatización empresarial para ventas y operaciones. Captura leads, automatiza contabilidad (DIAN) y procesa hasta 500 interacciones diarias.",
        icon: BrainCircuit,
        color: "emerald"
    }
];

const faqs = [
    {
        q: "¿Es seguro dar acceso a mis datos a un agente de IA?",
        a: "Nuestros agentes utilizan encriptación de grado empresarial y cumplen con las leyes de protección de datos. Tú controlas qué información tiene el agente y cómo la usa."
    },
    {
        q: "¿Cómo se integra la IA con mis procesos actuales?",
        a: "La IA se conecta vía API a tus herramientas (WhatsApp, CRM, ERP, Correo). No tienes que cambiar tu forma de trabajar; la IA se adapta a tus flujos existentes."
    },
    {
        q: "¿Qué sucede si la IA no sabe responder algo?",
        a: "Configuramos protocolos de escalado. Si la IA detecta una duda compleja, transfiere automáticamente la conversación a un humano para una atención personalizada."
    },
    {
        q: "¿Cuánto tiempo toma el entrenamiento?",
        a: "Un agente estándar está listo en 5-10 días. Proyectos que requieren conexión a bases de datos profundas pueden tomar de 2 a 3 semanas."
    }
];

export default function AIPage() {
    return (
        <main className="min-h-screen relative selection:bg-emerald-500/30 pt-20 bg-black">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-600/5 blur-[120px] pointer-events-none" />

            {/* HERO SECTION */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6">
                            <Zap className="w-3 h-3" />
                            <span>IA DE ÚLTIMA GENERACIÓN - POWERED BY SENDELL</span>
                        </div>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Escala con <span className="text-emerald-400">Inteligencia Artificial</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                            Automatizamos tus ventas y soporte mediante <span className="text-white font-medium">Agentes de IA</span> que actúan y aprenden como humanos. Ahorra tiempo y recursos operando 24/7.
                        </p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link href="#contacto" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-emerald-400 hover:text-white transition-all flex items-center gap-2">
                                Implementar mi Agente AI
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-emerald-600/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm min-h-[400px] flex items-center justify-center">
                            <Cpu className="w-32 h-32 text-emerald-500 animate-[pulse_3s_ease-in-out_infinite]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS GRID */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-16">Ecosistema de <span className="text-emerald-400">Automatización</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {solutions.map((item, idx) => (
                            <div key={idx} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors flex flex-col text-left">
                                <div className="bg-emerald-500/20 p-4 rounded-xl text-emerald-400 w-fit mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
                                <Link href="#contacto" className="mt-auto text-emerald-400 font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                                    Saber más <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-4xl mx-auto text-gray-400 leading-relaxed text-left space-y-8">
                        <h3 className="text-white text-3xl font-bold">¿Cómo Transformamos tu Empresa B2B?</h3>
                        <p>
                            En el exigente entorno industrial y residencial de **Bogotá**, el tiempo de respuesta es la métrica reina. Nuestras integraciones de **Sendell** permiten que inmobiliarias, constructoras y empresas de servicios técnicos (como vactor y alcantarillado) tengan un agente capaz de citar, agendar y hasta facturar de forma autónoma.
                        </p>
                        <p>
                            **NexaHelp Soporte AI**, por ejemplo, revoluciona la atención de urgencias permitiendo que la IA identifique el problema a través de una foto enviada por WhatsApp y asigne la cuadrilla técnica más cercana, reduciendo errores humanos en el despacho hasta en un 60%.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-12">
                            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    Facturación DIAN Automática
                                </h4>
                                <p className="text-sm">Integramos contabilidad inteligente que genera retenciones y facturación sin intervención humana.</p>
                            </div>
                            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <Target className="w-4 h-4 text-emerald-400" />
                                    Ventas Proactivas
                                </h4>
                                <p className="text-sm">Agentes de ventas que capturan, califican y calientan leads las 24 horas del día, los 7 días de la semana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold text-white mb-16">Implementamos en <span className="text-emerald-400">Récord</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', name: 'Brain Audit', desc: 'Identificamos las fuentes de información del agente.' },
                            { step: '02', name: 'Knowledge Feed', desc: 'Entrenamos al agente con tus PDFs, URL y documentos clave.' },
                            { step: '03', name: 'API Link', desc: 'Conectamos con tus canales de ventas actuale.' },
                            { step: '04', name: 'Live & Monitor', desc: 'Lanzamiento y optimización de tasas de respuesta.' }
                        ].map((p, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-emerald-500/50 transition-colors">
                                <div className="text-2xl font-black text-emerald-500 mb-4">{p.step}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{p.name}</h4>
                                <p className="text-sm text-gray-500">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center">
                        <MessageSquare className="text-emerald-400" />
                        Dudas sobre Inteligencia Artificial
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
