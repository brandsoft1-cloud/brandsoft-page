import { getAllPosts } from '@/lib/mdx';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Link from 'next/link';
import { Calendar, User, ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Blog SEO B2B & Desarrollo | BrandSoft',
    description: 'Estrategias de crecimiento, desarrollo de software premium con Next.js y SEO técnico.'
};

export default async function BlogIndex() {
    const posts = await getAllPosts();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-violet-500/30">
            <Navbar />

            <section className="pt-32 pb-16 px-4 relative overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/10 blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        CONOCIMIENTO <span className="text-violet-500 italic">B2B</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl font-light">
                        Artículos y estrategias para dominar Google, automatizar procesos y escalar tu software.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 shadow-2xl hover:shadow-violet-500/10 flex flex-col">
                            {post.frontmatter.coverImage && (
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                                    <img
                                        src={post.frontmatter.coverImage}
                                        alt={post.frontmatter.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-violet-400 uppercase tracking-widest border border-white/10">
                                            {post.frontmatter.category}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div className="p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors uppercase leading-tight line-clamp-2">
                                    {post.frontmatter.title}
                                </h2>
                                <p className="text-gray-400 text-sm mb-6 flex-1 font-light line-clamp-3">
                                    {post.frontmatter.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500 font-bold tracking-widest uppercase mt-auto pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-violet-500" />
                                            {post.frontmatter.date}
                                        </div>
                                    </div>
                                    <div className="text-violet-400 flex items-center group-hover:translate-x-1 transition-transform">
                                        LEER <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Contact />
        </main>
    );
}
