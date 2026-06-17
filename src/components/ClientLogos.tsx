const clients = [
    { name: 'Ecolimpieza Bogotá' },
    { name: "SAM's Services LTD." },
    { name: 'Fushion Fitness Center' },
    { name: 'Talently' },
    { name: 'TripleTen' },
    { name: 'Globant' },
];

export default function ClientLogos() {
    return (
        <section className="py-12 bg-black border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-8">
                    Empresas que ya crecen con BrandSoft
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
                    {clients.map((client) => (
                        <span
                            key={client.name}
                            className="text-sm md:text-base font-bold text-gray-500 hover:text-white transition-colors duration-300 cursor-default"
                        >
                            {client.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
