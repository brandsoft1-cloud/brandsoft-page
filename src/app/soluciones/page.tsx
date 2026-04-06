import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { VERTICALS } from "@/data/seo-config";
import {
    Zap,
    ChevronRight,
    Layout,
    Search,
    ArrowRight,
    TrendingUp,
    CheckCircle,
    Briefcase,
    Utensils,
    Sparkles,
    Activity,
    Home,
    GraduationCap,
    Wrench,
    Dog,
    Hammer,
    Truck,
    Dumbbell
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Soluciones por Sector | Software a la Medida | BrandSoft',
    description: 'Explora nuestras soluciones de software especializadas para más de 12 sectores industriales en Colombia. Restaurantes, Abogados, Educación, Logística y más.',
};

const icons: Record<string, any> = {
    utensils: Utensils,
    briefcase: Briefcase,
    sparkles: Sparkles,
    cleaning: Layout,
    activity: Activity,
    home: Home,
    'graduation-cap': GraduationCap,
    wrench: Wrench,
    dog: Dog,
    hammer: Hammer,
    truck: Truck,
    dumbbell: Dumbbell
};

export default function SolutionsDirectoryPage() {
    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 pt-20 bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/5 blur-[150px] pointer-events-none rounded-full" />
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-8 uppercase tracking-widest">
                        <Layout className="w-3.5 h-3.5" />
                        <span>DIRECTORIO DE SOLUCIONES B2B</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase">
                        Sectores <span className="text-violet-500 italic">Inteligentes</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                        Selecciona tu industria y descubre cómo nuestra infraestructura digital puede automatizar tu rentabilidad en tiempo récord.
                    </p>

                    {/* Visual Search Bar */}
                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-gray-500 group-focus-within:text-violet-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Busca tu industria (ej: Restaurantes, Logística...)"
                            className="w-full bg-zinc-950 border border-white/10 rounded-full py-6 pl-16 pr-8 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-all shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Grid of Solutions */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VERTICALS.map((v, i) => {
                        const Icon = icons[v.icon] || Zap;
                        return (
                            <Link key={v.slug} href={`/soluciones/${v.slug}`} className="group">
                                <div className="h-full p-10 bg-zinc-950 border border-white/5 rounded-[3rem] hover:border-violet-500/30 hover:bg-zinc-900 transition-all duration-500 flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 blur-3xl pointer-events-none group-hover:bg-violet-600/10 transition-colors" />

                                    <div className="w-16 h-16 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-400 mb-8 border border-violet-500/10 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-violet-500/5">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic lg:text-3xl">
                                        {v.name}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                                        {v.hook}
                                    </p>

                                    <div className="space-y-3 mb-10">
                                        {v.subsections && v.subsections.slice(0, 2).map((sub: any, idx: number) => (
                                            <div key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-400">
                                                <div className="w-1 h-1 bg-violet-500 rounded-full" />
                                                {sub.title.toUpperCase()}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-xs font-black text-violet-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        EXPLORAR SOLUCIÓN <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 bg-zinc-950 border-t border-white/5 text-center px-4 relative">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">¿NO ENCUENTRAS <br /> TU <span className="text-violet-500 italic">SECTOR</span>?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Construimos software a la medida para cualquier tipo de negocio. Explícanos tu reto y lo digitalizamos.</p>
                    <Link href="#contacto" className="bg-violet-600 text-white px-12 py-5 rounded-full font-black hover:bg-violet-700 transition-all shadow-xl shadow-violet-500/20 inline-flex items-center gap-3 text-lg">
                        HABLAR CON UN EXPERTO
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Contact />
        </main>
    );
}
