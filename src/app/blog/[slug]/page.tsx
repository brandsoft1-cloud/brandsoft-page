import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/MDXComponents';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Tag, MessageCircle } from 'lucide-react';
import { whatsAppHref } from '@/lib/contact';

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

    const keywords = post.frontmatter.keywords as string[] | undefined;

    return {
        title: `${post.frontmatter.title} | BrandSoft`,
        description: post.frontmatter.description,
        keywords,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: 'article',
        },
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
            <section className="py-24 border-t border-white/10 bg-gradient-to-b from-violet-950/40 to-black relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.25em] mb-4">Respuesta el mismo día</p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 italic leading-tight">¿Aplicamos esto a tu negocio o carrera?</h2>
                    <p className="text-xl text-gray-400 mb-10 font-light">
                        Cotización, mentoría o desarrollo: elige canal y te atendemos sin vueltas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={whatsAppHref(
                                `Acabo de leer en el blog: "${post.frontmatter.title}" y quiero hablar con BrandSoft.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp ahora
                        </a>
                        <a
                            href="tel:+573213296957"
                            className="w-full sm:w-auto border-2 border-white/25 hover:border-white/50 text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest transition-all inline-flex items-center justify-center"
                        >
                            Llamar
                        </a>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
