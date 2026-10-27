---
name: brandsoft-solutions-cro
description: CRO y conversión B2B BrandSoft Solutions — CTAs, formularios de diagnóstico, WhatsApp, eventos analytics. Usar al tocar Contact, LeadMagnetForm, WhatsAppWidget, StickyMobileCta, lib/contact o flujos Agenda un diagnóstico.
---

# BrandSoft Solutions — CRO

## CTA canónico

**Agenda un diagnóstico** — debe llevar a acción real (`#diagnostico`, form, o WhatsApp). Nunca botón muerto.

Secundario frecuente: **Explora nuestras soluciones** / WhatsApp.

## WhatsApp

- Número: `WHATSAPP_E164` en `src/lib/contact.ts` → `573213296957`
- Usar `whatsAppHref(message)` — no hardcodear otros números en Solutions
- Mensajes precargados por contexto (home vs pilar)
- Booking Education `/sube-de-nivel` puede usar número personal distinto — **no unificar sin orden**

## Formulario diagnóstico (campos)

- Nombre
- Empresa
- Correo **o** WhatsApp
- Necesidad (captación / SEO / web / redes / automatización / software / integral / otro)
- Descripción opcional
- Consentimiento privacidad

Estados: idle → submitting → success | error. **Prohibido** mostrar éxito si falla el request.

## Backend

Si no hay API/CRM configurada:

1. Implementa UI + validación
2. Documenta en `docs/solutions/integrations.md` qué falta
3. Alternativa válida: CTA primario a WhatsApp hasta tener CRM
4. No simules envío exitoso local

## Analytics (sin PII)

Eventos sugeridos: `cta_click`, `wa_click`, `form_start`, `form_success`, `form_error`, `demo_click`.

Reutilizar `dataLayer`/`gtag` si existen. **No inventar** Measurement IDs.

## Shared-risk

`Contact`, `WhatsAppWidget`, `StickyMobileCta` afectan Education paths — leer `brandsoft-education-protect` y respetar `isEducationLanding`.
