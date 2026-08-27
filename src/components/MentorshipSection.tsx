'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, ChevronRight } from 'lucide-react';
import { MENTORIA_PERFILES } from '@/data/mentoria-perfiles';

export default function MentorshipSection() {
    return (
        <section
            id="mentorias"
            className="py-24 border-y border-white/10 bg-gradient-to-br from-amber-950/30 via-black to-violet-950/20"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
                        <GraduationCap className="w-4 h-4" />
                        ¿Eres desarrollador? Esto es para ti, no para tu empresa
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                        ¿Sientes que tu carrera tech se{' '}
                        <span className="text-amber-300 italic">estancó</span> y no sabes cómo avanzar?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                        Mentorías 1:1 con foco técnico <span className="text-white font-medium">y emocional</span>:
                        para conseguir trabajo, dar el salto o simplemente recuperar el rumbo cuando te sientes perdido.
                        Elige la situación en la que te reconoces.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {MENTORIA_PERFILES.map((perfil, i) => (
                        <motion.div
                            key={perfil.slug}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                        >
                            <Link
                                href={perfil.path}
                                className="group flex items-center justify-between gap-4 p-6 rounded-2xl border border-white/10 bg-black/60 hover:border-amber-400/40 hover:bg-amber-950/10 transition-all h-full"
                            >
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400/90 block mb-1">
                                        {perfil.badge}
                                    </span>
                                    <p className="font-bold text-white group-hover:text-amber-200 transition-colors">
                                        {perfil.shortTitle}
                                    </p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/mentorias"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-black font-black uppercase text-sm tracking-wide hover:bg-amber-300 transition-colors"
                    >
                        Ver todas las mentorías
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/agendar"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm hover:border-white/40 transition-colors"
                    >
                        Agendar llamada 15 min con Mauricio
                    </Link>
                </div>
            </div>
        </section>
    );
}
