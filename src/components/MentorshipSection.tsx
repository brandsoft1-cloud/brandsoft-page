'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function MentorshipSection() {
    return (
        <section className="py-20 border-y border-white/10 bg-gradient-to-br from-amber-950/30 via-black to-violet-950/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
                        <GraduationCap className="w-4 h-4" />
                        Producto aparte — carrera tech
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4">
                        ¿Buscas trabajo en la industria tech?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Mentorías 1:1 para conseguir empleo: CV, LinkedIn, simulación de entrevistas y manejo de
                        nervios. Para todos los niveles — no es lo mismo que contratar la agencia para tu empresa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/mentorias"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-black font-black uppercase text-sm tracking-wide hover:bg-amber-300 transition-colors"
                        >
                            Ver mentorías
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/sube-de-nivel"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm hover:border-white/40 transition-colors"
                        >
                            Agendar llamada 15 min con Mauricio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
