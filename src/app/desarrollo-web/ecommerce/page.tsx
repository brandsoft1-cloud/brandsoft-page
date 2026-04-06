import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Link from "next/link";
import { CheckCircle, ShoppingCart, TrendingUp, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Desarrollo de Ecommerce a Medida en Bogotá | BrandSoft',
    description: 'Creamos tiendas online B2B y plataformas ecommerce de alto rendimiento con Next.js. Vende más con menor fricción tecnológica.',
    alternates: {
        canonical: '/desarrollo-web/ecommerce',
    }
};

export default function EcommercePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-24 px-4 relative overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/10 blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-black mb-8 uppercase tracking-widest">
                        <ShoppingCart className="w-4 h-4" />
                        <span>ECOMMERCE DE ALTO RENDIMIENTO</span>
                    </div>
                    <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                        Tu tienda no vende <br /> porque es lenta.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl font-light mb-12">
                        Desarrollamos plataformas de comercio electrónico y catálogos transaccionales B2B que cargan en menos de 1 segundo. Menos fricción = Más ventas.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#contacto" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105">
                            Cotizar Plataforma
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black uppercase italic mb-8">El Problema de las Tiendas Genéricas</h2>
                            <p className="text-xl text-gray-400 mb-8 font-light">
                                La mayoría de las agencias te venden un Shopify lento o un WooCommerce saturado de plugins. ¿El resultado? Un LCP de 6 segundos, clientes frustrados, y un algoritmo de Google Ads cobrándote el doble por clic.
                            </p>
                            <div className="space-y-6 text-gray-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 text-red-500"><CheckCircle className="w-6 h-6" /></div>
                                    <p>Checkouts con fricción que matan conversiones.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 text-red-500"><CheckCircle className="w-6 h-6" /></div>
                                    <p>Velocidad de carga penalizada por Google.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 text-red-500"><CheckCircle className="w-6 h-6" /></div>
                                    <p>Imposibilidad de integrar con tu ERP o facturación local.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-950 p-12 rounded-3xl border border-white/5 relative">
                            <h3 className="text-3xl font-black uppercase mb-6 text-violet-400">La Solución BrandSoft</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <Zap className="w-6 h-6 text-violet-500 flex-shrink-0" />
                                    <div>
                                        <strong className="block text-white">Headless Commerce</strong>
                                        <span className="text-sm text-gray-400">Separamos el frontend del backend para ganar velocidad extrema.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <TrendingUp className="w-6 h-6 text-violet-500 flex-shrink-0" />
                                    <div>
                                        <strong className="block text-white">Conversión SEO Nivel 100</strong>
                                        <span className="text-sm text-gray-400">Inyectamos Schema Markups para que tus productos salgan en fragmentos destacados en Google.</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-10 p-6 bg-violet-600/10 rounded-2xl border border-violet-500/20">
                                <p className="text-center font-bold text-violet-400 text-sm uppercase tracking-widest">+40% en Tasa de Conversión Promedio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
