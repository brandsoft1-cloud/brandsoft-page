import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    // 1. LIMPIEZA DE RUTAS LEGACY WORDPRESS / BASURA
    // Si la ruta contiene indicios de WP o es un archivo php sospechoso
    if (
        pathname.includes('/wp-') ||
        pathname.includes('/xmlrpc') ||
        pathname.endsWith('.php') ||
        pathname.includes('/wp-content')
    ) {
        // Retornamos 410 Gone (o 301 a la home para no perder el 'juice')
        // Usamos rewrite a / para ser amigables con el usuario pero 'limpiar'
        return NextResponse.rewrite(new URL('/', request.url));
    }

    // 2. NORMALIZACIÓN DE QUERY PARAMS (Ejemplo básico para evitar duplicados)
    const legacyParams = ['replytocom', 'attachment_id', 'share'];
    if (legacyParams.some(p => searchParams.has(p))) {
        const url = request.nextUrl.clone();
        legacyParams.forEach(p => url.searchParams.delete(p));
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Configuración de los paths donde se activará el middleware
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
