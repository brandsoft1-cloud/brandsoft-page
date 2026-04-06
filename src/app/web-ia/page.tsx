import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Sparkles, Code2, BotMessageSquare, Zap } from "lucide-react";

export const metadata = {
    title: "Páginas Web con Inteligencia Artificial | BrandSoft",
    description: "Revoluciona tu presencia online con sitios web impulsados por IA. Chatbots inteligentes, personalización dinámica y alta conversión.",
};

const aiWebFeatures = [
    {
        title: "Agentes Conversacionales",
        description: "Chatbots de IA que entienden el contexto, resuelven dudas y guían hacia la venta 24/7.",
        icon: BotMessageSquare,
    },
    {
        title: "Personalización Dinámica",
        description: "La estructura y el contenido de la web se adaptan en tiempo real según el comportamiento del usuario.",
        icon: Sparkles,
    },
    {
        title: "Generación de Contenido SEO",
        description: "Integración con CMS impulsados por IA para automatizar publicaciones y mantener el sitio fresco.",
        icon: Code2,
    },
    {
        title: "Arquitectura de Alta Velocidad",
        description: "Construidos sobre Next.js y Edge computing para un rendimiento inigualable y scores perfectos en Core Web Vitals.",
        icon: Zap,
    },
];

export default function AIWebPage() {
    return (
        <main className="min-h-screen relative selection:bg-pink-500/30 pt-20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 bg-black overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-pink-500/30 text-sm font-medium text-pink-300 mb-8">
                        <Sparkles className="w-4 h-4" />
                        <span>El Futuro del Desarrollo Web</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Sitios Web con <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Inteligencia Artificial</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        No construimos páginas estáticas. Creamos ecosistemas digitales interactivos que aprenden de tus clientes y automatizan tus ventas.
                    </p>
                </div>
            </section>

            {/* Detail Section */}
            <section className="py-24 bg-white/5 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-16">Características <span className="text-pink-400">Next-Gen</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {aiWebFeatures.map((item, idx) => (
                            <div key={idx} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-pink-500/50 transition-colors">
                                <div className="bg-pink-500/20 p-4 rounded-xl text-pink-400 w-fit mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
