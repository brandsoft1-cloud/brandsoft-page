'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
                            ¿Listo para dar el <br /> <span className="text-violet-400">siguiente paso?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Impulsa tu negocio con soluciones de software a la medida e IA de vanguardia. Escríbenos y nuestro equipo analizará las mejores estrategias para tu empresa.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                <div className="bg-violet-500/20 p-3 rounded-xl text-violet-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Correo Electrónico</div>
                                    <div className="text-white font-medium">contacto@brandsoft.com.co</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Llámanos (WhatsApp)</div>
                                    <div className="text-white font-medium">+57 321 329 6957</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black border border-white/10 rounded-3xl p-8"
                    >
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
                            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25">
                                Enviar Mensaje
                                <Send className="w-5 h-5" />
                            </button>
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
