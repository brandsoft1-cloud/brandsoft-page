'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { whatsAppHref } from '@/lib/contact';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Sparkles className="w-8 h-8 text-violet-500" />
                        <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-white">
                            Brand<span className="text-violet-500">Soft</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div
                            className="relative"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors py-2">
                                Servicios <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-72 bg-black border border-white/10 rounded-2xl shadow-xl overflow-hidden py-2"
                                    >
                                        <p className="px-4 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-emerald-500/90">
                                            Ecosistema B2B (hub)
                                        </p>
                                        <Link href="/desarrollo-software-ia" className="block px-4 py-2 text-sm text-white hover:bg-emerald-500/10 transition-colors font-semibold">
                                            Desarrollo software + IA
                                        </Link>
                                        <Link href="/posicionamiento-seo-geo" className="block px-4 py-2 text-sm text-white hover:bg-emerald-500/10 transition-colors font-semibold">
                                            SEO técnico + GEO / LLMO
                                        </Link>
                                        <Link href="/generacion-leads-b2b" className="block px-4 py-2 text-sm text-white hover:bg-emerald-500/10 transition-colors font-semibold">
                                            Generación leads B2B
                                        </Link>
                                        <Link href="/industrias" className="block px-4 py-2 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                            → Industrias (ecommerce, finanzas, salud)
                                        </Link>
                                        <Link href="/recursos" className="block px-4 py-2 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                                            → Recursos y lead magnets
                                        </Link>
                                        <Link href="/casos-de-exito" className="block px-4 py-2 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 mb-1">
                                            → Casos de éxito
                                        </Link>
                                        <p className="px-4 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                            Servicios (clásico)
                                        </p>
                                        <Link href="/desarrollo-web" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            Desarrollo Web y Apps
                                        </Link>
                                        <Link href="/desarrollo-web/ecommerce" className="block px-4 py-1.5 text-xs text-gray-500 hover:bg-white/10 hover:text-white transition-colors pl-8">
                                            ↳ Ecommerce Rendimiento
                                        </Link>
                                        <Link href="/marketing-digital" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            Marketing Digital y SEO
                                        </Link>
                                        <Link href="/marketing-digital/seo-tecnico" className="block px-4 py-1.5 text-xs text-gray-500 hover:bg-white/10 hover:text-white transition-colors pl-8">
                                            ↳ SEO Técnico
                                        </Link>
                                        <Link href="/ia-automatizaciones" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            IA y Automatizaciones
                                        </Link>
                                        <Link href="/web-ia" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            Web con IA
                                        </Link>
                                        <Link href="/agente-ai" className="block px-4 py-3 text-sm text-violet-400 bg-violet-500/5 hover:bg-violet-500/10 hover:text-white transition-colors border-t border-white/5 font-bold italic">
                                            ✨ Agente de Marketing IA
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setSolutionsOpen(true)}
                            onMouseLeave={() => setSolutionsOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors py-2">
                                Soluciones <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {solutionsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-64 bg-black border border-white/10 rounded-2xl shadow-xl overflow-hidden py-2"
                                    >
                                        <Link href="/soluciones/restaurantes" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            🍟 Restaurantes
                                        </Link>
                                        <Link href="/soluciones/abogados" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            ⚖️ Abogados
                                        </Link>
                                        <Link href="/soluciones/estetica" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            ✨ Clínicas Estéticas
                                        </Link>
                                        <Link href="/soluciones/odontologia" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            🦷 Odontología
                                        </Link>
                                        <Link href="/soluciones/limpieza" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            🧹 Limpieza Profesional
                                        </Link>
                                        <Link href="/soluciones/inmobiliaria" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            🏠 Inmobiliarias
                                        </Link>
                                        <Link href="/soluciones/educacion" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                                            🎓 Educación
                                        </Link>
                                        <Link href="/soluciones" className="block px-4 py-3 text-[10px] text-violet-400 font-black uppercase tracking-widest border-t border-white/5 hover:bg-violet-500/10 transition-colors mt-2 text-center italic">
                                            🔍 Ver todos los sectores
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link
                            href="/mentorias"
                            className={`transition-colors ${pathname?.startsWith('/mentorias') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
                        >
                            Mentorías
                        </Link>
                        <Link href="/blog" className={`transition-colors ${pathname === '/blog' || pathname?.startsWith('/blog/') ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Blog</Link>
                        <Link href="/casos-de-exito" className="text-gray-300 hover:text-white transition-colors">Casos de Éxito</Link>
                        <Link href="/#founder" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link>
                        <a
                            href={whatsAppHref('Hola BrandSoft, escribo desde el menú de la web y quiero cotizar.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full font-black text-[11px] uppercase tracking-wide transition-colors shadow-lg shadow-emerald-600/25 whitespace-nowrap border-l border-white/10 ml-2 pl-5"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 max-h-[80vh] overflow-y-auto"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="px-3 py-2 text-sm text-gray-500 font-bold uppercase tracking-wider">B2B — demanda</div>
                        <Link href="/desarrollo-software-ia" className="block pl-6 pr-3 py-2 text-emerald-400 font-bold" onClick={() => setIsOpen(false)}>• Software + IA</Link>
                        <Link href="/posicionamiento-seo-geo" className="block pl-6 pr-3 py-2 text-emerald-400 font-bold" onClick={() => setIsOpen(false)}>• SEO + GEO</Link>
                        <Link href="/generacion-leads-b2b" className="block pl-6 pr-3 py-2 text-emerald-400 font-bold" onClick={() => setIsOpen(false)}>• Leads B2B</Link>
                        <Link href="/industrias" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Industrias</Link>
                        <Link href="/recursos" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Recursos</Link>
                        <Link href="/casos-de-exito" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Casos de éxito</Link>
                        <div className="px-3 py-2 text-sm text-gray-500 font-bold uppercase tracking-wider">Servicios</div>
                        <Link href="/desarrollo-web" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Desarrollo Web y Apps</Link>
                        <Link href="/desarrollo-web/ecommerce" className="block pl-10 pr-3 py-1 text-xs text-gray-500 hover:text-white" onClick={() => setIsOpen(false)}>↳ Ecommerce</Link>
                        <Link href="/marketing-digital" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Marketing Digital e SEO</Link>
                        <Link href="/marketing-digital/seo-tecnico" className="block pl-10 pr-3 py-1 text-xs text-gray-500 hover:text-white" onClick={() => setIsOpen(false)}>↳ SEO Técnico</Link>
                        <Link href="/ia-automatizaciones" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• IA y Automatizaciones</Link>
                        <Link href="/web-ia" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Web con IA</Link>
                        <Link href="/agente-ai" className="block pl-6 pr-3 py-2 text-violet-400 font-bold" onClick={() => setIsOpen(false)}>• ✨ AGENTE AI (REELS & COPY)</Link>
                        <div className="px-3 py-2 text-sm text-gray-500 font-bold uppercase tracking-wider">Soluciones</div>
                        <Link href="/soluciones/restaurantes" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Restaurantes</Link>
                        <Link href="/soluciones/abogados" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Abogados</Link>
                        <Link href="/soluciones/estetica" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Clínicas Estéticas</Link>
                        <Link href="/soluciones/odontologia" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Odontología</Link>
                        <Link href="/soluciones/limpieza" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Servicios de Limpieza</Link>
                        <Link href="/soluciones/inmobiliaria" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Inmobiliarias</Link>
                        <Link href="/soluciones/educacion" className="block pl-6 pr-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>• Educación</Link>
                        <Link href="/soluciones" className="block pl-6 pr-3 py-2 text-violet-400 font-bold tracking-widest text-[10px] uppercase italic" onClick={() => setIsOpen(false)}>🔍 VER TODOS LOS SECTORES</Link>
                        <div className="border-t border-white/10 my-2"></div>
                        <Link href="/mentorias" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Mentorías</Link>
                        <Link href="/blog" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="/casos-de-exito" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Casos de Éxito</Link>
                        <Link href="/#founder" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Nosotros</Link>
                        <a
                            href={whatsAppHref('Hola BrandSoft, escribo desde el menú móvil y quiero cotizar.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-emerald-400 font-black uppercase text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            WhatsApp ahora
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
