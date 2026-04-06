import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import MarketingAgent from "@/components/MarketingAgent";
import { Sparkles, Zap, BrainCircuit, Globe } from "lucide-react";

export const metadata = {
    title: "AI Marketing Agent | BrandSoft Studio",
    description: "Genera guiones de Reels, Copy creativo, Hashtags e ideas de contenido con nuestra IA entrenada para marketing industrial y corporativo.",
};

export default function AIMarketingPage() {
    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black">
            <Navbar />

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[128px]" />
            </div>

            {/* Header Section */}
            <section className="relative pt-20 pb-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6 animate-pulse">
                        <Zap className="w-4 h-4" />
                        <span>PRO Engine v2.0 - Powered by Sendell</span>
                    </div>
                    <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                        Agente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Marketing</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400">
                        Sube tus archivos, describe tu idea y deja que nuestro super agente diseñe toda tu estrategia de contenido en segundos.
                    </p>
                </div>
            </section>

            {/* Main Tool Component */}
            <div className="px-4 pb-24">
                <MarketingAgent />
            </div>

            {/* Feature Highlights */}
            <section className="py-24 border-t border-white/10 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 mb-2">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Análisis Multimodal</h3>
                            <p className="text-gray-400">Nuestro agente interpreta tus logos e imágenes para mantener la coherencia de marca en cada copy.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Scripts para Reels</h3>
                            <p className="text-gray-400">Ganchos (hooks) de alta retención y estructuras probadas para viralizar servicios complejos.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Hashtags Estratégicos</h3>
                            <p className="text-gray-400">Segmentación por nichos para que tu contenido llegue exactamente a los tomadores de decisión.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
