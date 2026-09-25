'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';

const paths = [
    {
        href: '/mentorias/career-pack',
        kicker: 'Career Pack',
        title: 'Necesito rumbo y prepararme para conseguir o cambiar de trabajo',
    },
    {
        href: '/crear-pagina-web-con-ia',
        kicker: 'Web con IA',
        title: 'Quiero crear (o vender) una landing con IA sin saber programar',
    },
    {
        href: '/mentorias/producto-real',
        kicker: 'Producto Real',
        title: 'Escribo código, pero nunca he puesto nada en producción',
    },
    {
        href: '/mentorias/clientes-reales',
        kicker: 'Clientes Reales',
        title: 'Tengo un negocio y no sé si lo que publico sirve',
    },
];

export default function MentorshipSection() {
    return (
        <section
            id="mentorias"
            className="py-24 border-y border-white/10 bg-gradient-to-br from-violet-950/40 via-black to-emerald-950/20"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6">
                        <GraduationCap className="w-4 h-4" />
                        BrandSoft Education
                    </div>
                    <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-white md:text-5xl">
                        BrandSoft Education. Empleo, producto o clientes.
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
                        BrandSoft Education: Career Pack (empleo), Web con IA (landing + método de venta en 2×90),
                        Producto Real o Clientes Reales. Landings GEO en Colombia, México, Perú, Argentina, Chile y Texas.
                        Sin promesa de empleo ni ventas.
                    </p>
                </motion.div>

                <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {paths.map((item, i) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                        >
                            <Link
                                href={item.href}
                                className="group flex flex-col gap-2 p-6 rounded-2xl border border-white/10 bg-black/60 hover:border-violet-400/40 transition-all h-full min-h-11"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400/90">
                                    {item.kicker}
                                </span>
                                <p className="font-bold text-white group-hover:text-violet-200 transition-colors">
                                    {item.title}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/mentorias#diagnostico"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-colors min-h-11"
                    >
                        Agendar llamada de diagnóstico de 15 minutos
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
