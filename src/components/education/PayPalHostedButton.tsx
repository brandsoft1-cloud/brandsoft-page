'use client';

import { useEffect, useId, useRef } from 'react';
import { WEB_CON_IA } from '@/data/education/web-con-ia';

declare global {
    interface Window {
        paypal?: {
            HostedButtons: (opts: { hostedButtonId: string }) => {
                render: (selector: string) => Promise<void>;
            };
        };
    }
}

type Props = { className?: string };

export default function PayPalHostedButton({ className }: Props) {
    const reactId = useId().replace(/:/g, '');
    const clientId = WEB_CON_IA.paypalClientId;
    const buttonId = WEB_CON_IA.paypalHostedButtonId;
    const containerId = `paypal-container-${buttonId}-${reactId}`;
    const started = useRef(false);

    useEffect(() => {
        if (started.current || !clientId) return;
        started.current = true;

        const render = () => {
            void window.paypal
                ?.HostedButtons({ hostedButtonId: buttonId })
                .render(`#${containerId}`);
        };

        const existing = document.querySelector<HTMLScriptElement>(
            'script[data-brandsoft-paypal-hosted="1"]',
        );
        if (existing) {
            if (window.paypal?.HostedButtons) render();
            else existing.addEventListener('load', render, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
            clientId,
        )}&components=hosted-buttons&disable-funding=venmo&currency=USD`;
        script.async = true;
        script.dataset.brandsoftPaypalHosted = '1';
        script.onload = render;
        document.body.appendChild(script);
    }, [buttonId, clientId, containerId]);

    if (!clientId) {
        return (
            <p className="text-sm text-amber-800">
                Falta configurar <code className="font-mono">NEXT_PUBLIC_PAYPAL_CLIENT_ID</code>.
            </p>
        );
    }

    return <div id={containerId} className={className ?? 'min-h-[45px] w-full max-w-md'} />;
}
