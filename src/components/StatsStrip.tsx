const stats = [
    { value: '+47', label: 'proyectos entregados' },
    { value: '+3', label: 'años en el mercado' },
    { value: '+12', label: 'clientes activos' },
    { value: 'Colombia · Latam', label: 'alcance regional', accent: false },
];

export default function StatsStrip() {
    return (
        <section className="border-y border-white/10 bg-zinc-950/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p
                                className={`text-2xl md:text-3xl font-black tracking-tight ${
                                    stat.accent === false ? 'text-white text-lg md:text-xl' : 'text-violet-400'
                                }`}
                            >
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
