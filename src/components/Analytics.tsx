'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { GA_ID, META_PIXEL_ID, classifyConversionLink, trackEvent } from '@/lib/analytics';

/**
 * Carga GA4 y el píxel de Meta, y mide los clics a WhatsApp, agendar y PayPal
 * en todo el sitio con un solo listener (no hay que tocar cada botón).
 * GA4 registra las vistas de página al navegar por su cuenta (medición mejorada);
 * el píxel de Meta no, por eso se le manda PageView en cada cambio de ruta.
 */
export default function Analytics() {
    const pathname = usePathname();
    const firstView = useRef(true);

    useEffect(() => {
        if (firstView.current) {
            firstView.current = false; // el PageView inicial lo manda el script de init
            return;
        }
        window.fbq?.('track', 'PageView');
    }, [pathname]);

    useEffect(() => {
        if (!GA_ID && !META_PIXEL_ID) return;
        const onClick = (e: MouseEvent) => {
            const link = (e.target as Element | null)?.closest?.('a[href]');
            if (!(link instanceof HTMLAnchorElement)) return;
            const conversion = classifyConversionLink(link.href);
            if (!conversion) return;
            trackEvent(
                conversion.name,
                {
                    link_url: link.href.slice(0, 200),
                    link_text: (link.textContent ?? '').trim().slice(0, 80),
                    page_path: window.location.pathname,
                },
                conversion.metaEvent,
            );
        };
        document.addEventListener('click', onClick, { capture: true });
        return () => document.removeEventListener('click', onClick, { capture: true });
    }, []);

    return (
        <>
            {GA_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga4-init" strategy="afterInteractive">
                        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(GA_ID)});`}
                    </Script>
                </>
            )}
            {META_PIXEL_ID && (
                <Script id="meta-pixel-init" strategy="afterInteractive">
                    {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(META_PIXEL_ID)});fbq('track','PageView');`}
                </Script>
            )}
        </>
    );
}
