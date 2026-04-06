import Image from 'next/image';
import Link from 'next/link';

export const MDXComponents = {
    h1: (props: any) => <h1 className="text-4xl md:text-5xl font-black mb-6 mt-12 text-white italic tracking-tighter" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold mb-4 mt-10 text-white" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-bold mb-3 mt-8 text-violet-400" {...props} />,
    p: (props: any) => <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light" {...props} />,
    a: (props: any) => {
        const href = props.href;
        const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

        if (isInternalLink) {
            return (
                <Link href={href} className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30 underline-offset-4 transition-colors" {...props}>
                    {props.children}
                </Link>
            );
        }

        return (
            <a target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline decoration-violet-500/30 underline-offset-4 transition-colors" {...props} />
        );
    },
    ul: (props: any) => <ul className="mb-6 space-y-2 list-none" {...props} />,
    ol: (props: any) => <ol className="mb-6 space-y-2 list-decimal list-outside ml-6 text-gray-300" {...props} />,
    li: (props: any) => (
        <li className="flex gap-2 items-start text-gray-300" {...props}>
            {!props.parentNode?.nodeName?.includes('ol') && <span className="text-violet-500 mt-1">•</span>}
            <span>{props.children}</span>
        </li>
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-violet-500 bg-violet-500/5 p-6 my-8 rounded-r-xl italic text-gray-300 relative" {...props}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-[40px] pointer-events-none rounded-full" />
            {props.children}
        </blockquote>
    ),
    img: (props: any) => (
        <span className="block my-10 relative rounded-3xl overflow-hidden border border-white/10 group">
            <span className="absolute inset-0 bg-violet-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <img className="w-full h-auto rounded-3xl object-cover transform group-hover:scale-[1.02] transition-transform duration-700" alt={props.alt} {...props} />
        </span>
    ),
    strong: (props: any) => <strong className="font-bold text-white" {...props} />,
    code: (props: any) => <code className="bg-white/5 text-violet-300 px-2 py-0.5 rounded font-mono text-sm border border-white/10" {...props} />,
    pre: (props: any) => <pre className="bg-black border border-white/10 p-6 rounded-2xl overflow-x-auto my-8 custom-scrollbar shadow-2xl" {...props} />
};
