'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { whatsAppHref, PHONE_DISPLAY } from '@/lib/contact';

export default function Contact() {
    return (
        <section id="contacto" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            Hablemos <span className="text-emerald-400">hoy</span> de tu proyecto
                        </h2>
                        <p className="text-xl text-gray-400 mb-4">
                            No dejes el contacto para después: si tienes una idea, un bug de negocio o un reto de SEO o software,{' '}
                            <span className="text-white font-semibold">priorizamos respuesta el mismo día</span>.
                        </p>
                        <p className="text-emerald-400/90 font-bold text-sm uppercase tracking-widest mb-8">
                            Asesoría inicial sin costo · sin letra pequeña
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mb-10">
                            <a
                                href={whatsAppHref('Hola BrandSoft, quiero cotizar / asesoría. Les escribo desde el formulario de contacto de la web.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-emerald-600/25 transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Abrir WhatsApp
                            </a>
                            <a
                                href="tel:+573213296957"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-white/15 hover:border-violet-500/40 text-white font-bold text-sm transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Llamar {PHONE_DISPLAY}
                            </a>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                <div className="bg-violet-500/20 p-3 rounded-xl text-violet-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Correo Electrónico</div>
                                    <a href="mailto:contacto@brandsoft.com.co" className="text-white font-medium hover:text-violet-300">
                                        contacto@brandsoft.com.co
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">WhatsApp / llamada</div>
                                    <div className="text-white font-medium">{PHONE_DISPLAY}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-violet-500/20 rounded-3xl p-8 shadow-xl shadow-violet-950/40"
                    >
                        <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-2">O déjanos tus datos</p>
                        <h3 className="text-2xl font-bold text-white mb-6">Te contactamos en menos de 24 h</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full bg-violet-600 hover:bg-violet-500 text-white font-black uppercase text-sm tracking-wide py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/30"
                            >
                                Enviar y que me contacten
                                <Send className="w-5 h-5" />
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                ¿Urgente?{' '}
                                <a
                                    href={whatsAppHref('Es urgente, prefiero WhatsApp.')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 font-bold hover:underline"
                                >
                                    Ir directo a WhatsApp
                                </a>
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Basic Footer embedded closely */}
            <footer className="mt-24 pt-8 border-t border-white/10 text-center text-gray-500 text-sm pb-8">
                &copy; {new Date().getFullYear()} BrandSoft. Todos los derechos reservados.
            </footer>
        </section>
    );
}
