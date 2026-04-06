'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Video,
    Instagram,
    Type,
    Hash,
    Image as ImageIcon,
    Upload,
    Sparkles,
    Send,
    CheckCircle2,
    Copy,
    RefreshCw
} from 'lucide-react';

const contentTypes = [
    { id: 'reels', icon: Video, label: 'Guion para Reels', color: 'from-pink-500 to-rose-500' },
    { id: 'posts', icon: Instagram, label: 'Post / Carrusel', color: 'from-purple-500 to-indigo-500' },
    { id: 'copy', icon: Type, label: 'Ad Copy (Ventas)', color: 'from-blue-500 to-cyan-500' },
    { id: 'hashtags', icon: Hash, label: 'Hashtags Estratégicos', color: 'from-emerald-500 to-teal-500' },
];

export default function MarketingAgent() {
    const [selectedType, setSelectedType] = useState('reels');
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<null | any>(null);
    const [files, setFiles] = useState<File[]>([]);

    const handleGenerate = () => {
        if (!prompt) return;
        setIsGenerating(true);
        setResult(null);

        // Simulate AI generation
        setTimeout(() => {
            setIsGenerating(false);
            setResult({
                reels: {
                    hook: "¡Deja de perder el tiempo con estrategias de marketing que no funcionan!",
                    content: "En este reel vamos a desglosar cómo la IA de BrandSoft multiplicó por 5 las ventas de una empresa de servicios industriales.",
                    cta: "Comenta 'IA' si quieres que auditemos tu negocio gratis.",
                    hashtags: "#MarketingDigital #IA #BrandSoft #Emprendimiento #Negocios"
                },
                posts: {
                    caption: "La era del branding tradicional terminó. 🚀\n\nHoy en día, si tu marca no respira tecnología, se queda atrás. En BrandSoft no solo diseñamos logos, creamos ecosistemas digitales inteligentes.\n\n¿Estás listo para el siguiente nivel?",
                    hashtags: "#Branding #Innovacion #BrandSoft #NextGen"
                },
                copy: {
                    headline: "¿Tu empresa está en el pasado?",
                    body: "Descubre cómo las automatizaciones inteligentes pueden ahorrarte 20 horas a la semana. Implementamos soluciones de IA personalizadas para que tú te enfoques en lo que importa: crecer.",
                    cta: "Agenda una consultoría hoy."
                },
                hashtags: {
                    groups: [
                        { name: "Posicionamiento", tags: "#SEO #Growth #Visibility #Ranking" },
                        { name: "Tecnología", tags: "#AI #Automation #Software #Sendell" },
                        { name: "Marca", tags: "#BrandSoft #LogoDesign #DigitalAgency" }
                    ]
                }
            }[selectedType]);
        }, 2000);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    return (
        <section className="py-12">
            <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

                    {/* Sidebar / Options */}
                    <div className="lg:col-span-4 border-r border-white/10 p-8 bg-black/20">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
                                <Sparkles className="text-white w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider">AI Studio</h2>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Tipo de Contenido</p>
                            {contentTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${selectedType === type.id
                                            ? `bg-gradient-to-r ${type.color} text-white shadow-lg`
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    <type.icon className="w-5 h-5" />
                                    <span className="font-medium">{type.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-12">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Activos de Marca</p>
                            <label className="cursor-pointer group">
                                <div className="border-2 border-dashed border-white/10 group-hover:border-violet-500/50 rounded-2xl p-6 transition-all bg-white/5 flex flex-col items-center justify-center text-center">
                                    <Upload className="w-8 h-8 text-gray-500 group-hover:text-violet-400 mb-2" />
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300">Sube tu logo o fotos de referencia</p>
                                    <input type="file" className="hidden" multiple onChange={handleFileUpload} />
                                </div>
                            </label>
                            {files.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {files.map((f, i) => (
                                        <div key={i} className="text-[10px] bg-violet-500/20 text-violet-300 px-2 py-1 rounded-md border border-violet-500/30 truncate max-w-[100px]">
                                            {f.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Interface */}
                    <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-2">Cuéntame la idea</h3>
                            <p className="text-gray-400 mb-8">Describe qué quieres vender o comunicar. Entre más detalles des, mejor será el resultado.</p>

                            <div className="relative mb-8">
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Ej: Un reel animado para promocionar servicios de SEO a dueños de empresas industriales..."
                                    className="w-full h-40 bg-black/40 border border-white/10 rounded-3xl p-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                                />
                                <div className="absolute bottom-4 right-4 text-[10px] text-gray-500">Impulsado por Sendell AI Hub</div>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={!prompt || isGenerating}
                                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${!prompt || isGenerating
                                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                        : 'bg-white text-black hover:bg-violet-400 hover:text-white'
                                    }`}
                            >
                                {isGenerating ? (
                                    <>
                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                        Generando Magia...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5" />
                                        Crear Contenido Estratégico
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Result Display */}
                        <AnimatePresence>
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-12 p-8 border border-violet-500/20 bg-violet-500/5 rounded-3xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4">
                                        <CheckCircle2 className="text-emerald-400 w-6 h-6" />
                                    </div>

                                    <h4 className="text-violet-400 font-bold uppercase tracking-widest text-xs mb-6">Resultado del Agente</h4>

                                    <div className="space-y-6">
                                        {selectedType === 'reels' && (
                                            <>
                                                <div>
                                                    <p className="text-emerald-400 text-[10px] font-bold uppercase mb-1">Hook (Enganche)</p>
                                                    <p className="text-white text-lg font-medium italic">"{result.hook}"</p>
                                                </div>
                                                <div>
                                                    <p className="text-violet-400 text-[10px] font-bold uppercase mb-1">Cuerpo del Reel</p>
                                                    <p className="text-gray-300 leading-relaxed">{result.content}</p>
                                                </div>
                                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                                    <p className="text-gray-500 text-sm italic">{result.cta}</p>
                                                    <button className="text-violet-400 hover:text-white transition-colors">
                                                        <Copy className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </>
                                        )}

                                        {selectedType === 'posts' && (
                                            <>
                                                <div>
                                                    <p className="text-white whitespace-pre-line leading-relaxed">{result.caption}</p>
                                                </div>
                                                <div className="text-cyan-400 text-sm font-mono mt-4">
                                                    {result.hashtags}
                                                </div>
                                            </>
                                        )}

                                        {selectedType === 'copy' && (
                                            <>
                                                <h5 className="text-xl font-bold text-white mb-2">{result.headline}</h5>
                                                <p className="text-gray-400 mb-4">{result.body}</p>
                                                <div className="bg-white/10 p-4 rounded-xl text-center font-bold text-white italic">
                                                    {result.cta}
                                                </div>
                                            </>
                                        )}

                                        {selectedType === 'hashtags' && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {result.groups.map((group: any, i: number) => (
                                                    <div key={i} className="bg-black/40 p-4 rounded-2xl border border-white/5">
                                                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">{group.name}</p>
                                                        <p className="text-emerald-400 text-xs font-mono">{group.tags}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
