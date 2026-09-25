import type { ReactNode } from 'react';
import { Manrope, Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-edu-body' });
const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-edu-mono' });

export default function EducationFrame({ children }: { children: ReactNode }) {
    return (
        <div
            className={`${manrope.variable} ${mono.variable} bg-[#FBFBFE] text-slate-900 [font-family:var(--font-edu-body),Manrope,sans-serif] mb-[-5.5rem] lg:mb-0`}
            style={{ colorScheme: 'light' }}
        >
            <Navbar />
            <main className="pt-24">{children}</main>
            <footer className="border-t border-[#E7E2F3] px-4 py-10">
                <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>BrandSoft Education · Mauricio Forero Acosta</p>
                    <Link href="/" className="min-h-11 inline-flex items-center text-[#6D28D9] underline-offset-4 hover:underline">
                        Volver a brandsoft.com.co
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export function CtaLink({ href = '#diagnostico' }: { href?: string }) {
    return (
        <a
            href={href}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#047857] px-6 py-3 text-center text-base font-semibold text-white hover:bg-[#065f46]"
        >
            Agendar llamada de diagnóstico de 15 minutos
        </a>
    );
}
