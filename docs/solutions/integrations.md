# BrandSoft Solutions — Integraciones (estado)

Actualizado: 2026-10-27

## Operativas hoy

| Integración | Estado | Dónde |
|-------------|--------|--------|
| WhatsApp comercial | OK | `src/lib/contact.ts` → `573213296957` |
| Email público | OK | `contacto@brandsoft.com.co` |
| Schema Organization/WebSite | Parcial | `SchemaOrg.tsx` |
| dataLayer / gtag hooks | Opcional | Forms / WhatsAppWidget (sin ID GA4 en env) |

## Pendientes (no inventar IDs)

| Integración | Necesita | Notas |
|-------------|----------|--------|
| GA4 / GTM | Measurement ID / Container ID de Mauricio | Documentar en `.env.example` cuando existan |
| CRM / email form diagnóstico | Endpoint o proveedor (Resend, HubSpot, etc.) | Hasta entonces: WhatsApp como canal primario de cierre |
| Calendario diagnóstico B2B | URL Calendly/Meet Solutions | Distinto del Meet Education del socio |

## Reglas

- No mostrar “enviado” si el POST falla.
- No reutilizar PayPal / Meet Education para Solutions.
- No loguear PII en analytics.
