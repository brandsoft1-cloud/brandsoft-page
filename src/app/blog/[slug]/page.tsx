import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/MDXComponents';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) {
        return { title: 'Post no encontrado' };
    }

    return {
        title: `${post.frontmatter.title} | BrandSoft`,
        description: post.frontmatter.description,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen relative selection:bg-violet-500/30 bg-black text-white">
            <Navbar />

            <article className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4">
                    <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-violet-400 font-bold uppercase tracking-widest text-xs mb-10 transition-colors">
                        <ChevronLeft className="w-4 h-4 mr-1" /> VOLVER AL BLOG
                    </Link>

                    {post.frontmatter.category && (
                        <div className="mb-6 flex items-center gap-2">
                            <Tag className="w-4 h-4 text-violet-500" />
                            <span className="text-violet-400 uppercase tracking-widest font-black text-xs">
                                {post.frontmatter.category}
                            </span>
                        </div>
                    )}

                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                        {post.frontmatter.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 py-6 border-y border-white/10 mb-12 text-sm text-gray-400 font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-violet-500" />
                            {post.frontmatter.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-violet-500" />
                            {post.frontmatter.date}
                        </div>
                    </div>

                    {post.frontmatter.coverImage && (
                        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-violet-500/10 mb-16">
                            <img
                                src={post.frontmatter.coverImage}
                                alt={post.frontmatter.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="prose prose-invert prose-violet lg:prose-lg max-w-none">
                        <MDXRemote source={post.content} components={MDXComponents} />
                    </div>
                </div>
            </article>

            {/* Banner CTA */}
            <section className="py-24 border-t border-white/10 bg-violet-600/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 italic">¿Listo para escalar?</h2>
                    <p className="text-xl text-gray-400 mb-10 font-light">Implementamos la misma tecnología que acabas de leer para que tu empresa domine su mercado.</p>
                    <Link href={`https://wa.me/573214567890?text=Hola, acabo de leer el blog: ${post.frontmatter.title} y quiero mejorar el SEO de mi negocio`} target="_blank" className="bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105 inline-flex items-center gap-2">
                        Hablar con Expertos
                    </Link>
                </div>
            </section>

            <Contact />
        </main>
    );
}
