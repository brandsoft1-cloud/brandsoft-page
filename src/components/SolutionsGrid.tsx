'use client';

import { motion } from 'framer-motion';
import { VERTICALS } from '@/data/seo-config';
import {
    Utensils,
    Briefcase,
    Sparkles,
    Layout,
    Activity,
    Home,
    GraduationCap,
    ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const icons: Record<string, any> = {
    utensils: Utensils,
    briefcase: Briefcase,
    sparkles: Sparkles,
    cleaning: Layout,
    activity: Activity,
    home: Home,
    'graduation-cap': GraduationCap
};

export default function SolutionsGrid() {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="sectores">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">
                        Software para <span className="text-violet-500">Cualquier Sector</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        No importa tu industria, tenemos la infraestructura perfecta para tu negocio. Filtramos la complejidad tecnológica para entregarte rentabilidad pura.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VERTICALS.map((v, i) => {
                        const Icon = icons[v.icon] || Layout;
                        return (
                            <motion.div
                                key={v.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <Link href={`/soluciones/${v.slug}`}>
                                    <div className="h-full p-8 bg-zinc-950 border border-white/5 rounded-[2rem] hover:border-violet-500/30 hover:bg-zinc-900 transition-all duration-500 flex flex-col items-start">
                                        <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{v.name}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                            {v.hook}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-bold text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            VER SOLUCIÓN <ChevronRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
