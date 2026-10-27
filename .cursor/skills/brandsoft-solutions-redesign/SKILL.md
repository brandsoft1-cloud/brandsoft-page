---
name: brandsoft-solutions-redesign
description: Orquesta el rediseño comercial de BrandSoft Solutions (home, pilares, CRO, SEO). Usar cuando Mauricio pida rediseñar brandsoft.com.co Solutions, convertir más leads B2B, o ejecutar el plan 2026-10-27-brandsoft-solutions-redesign.
---

# BrandSoft Solutions — Rediseño (orquestador)

## Plan canónico

`docs/superpowers/plans/2026-10-27-brandsoft-solutions-redesign.md`

Orden: protect → tokens/shell → home → nav/footer → CRO → servicios → SEO → industrias/casos → regresión.

## Posicionamiento (no diluir)

Socio de **crecimiento digital y automatización**. No solo agencia web/SEO/chatbots.

Mensaje base: *Atrae clientes. Convierte oportunidades. Automatiza tu crecimiento.*

Habla de problemas empresariales y sistema conectado. **Prohibido** inventar clientes, %, rankings, premios o “garantizamos ventas”.

## Sub-skills

| Tarea | Skill |
|-------|--------|
| Shared / Education | `brandsoft-education-protect` |
| Home | `brandsoft-solutions-home` |
| Pilares / money pages | `brandsoft-solutions-services` |
| Forms / WA / eventos | `brandsoft-solutions-cro` |
| Metadata / schema / GEO | `brandsoft-solutions-seo` |
| Aprobar / rechazar (loop) | `brandsoft-solutions-qa` |
| Equipo BrandSoft | `brandsoft-team` (Camila estrategia, Daniela copy, Mateo cierre, Valeria código) |

## Loop de calidad

Tras cada Task: `brandsoft-solutions-qa` → PASS o FAIL+fix hasta PASS (máx. 3 iteraciones). Ver `docs/solutions/qa-gate.md`.

## Arquitectura código

- Preferir nuevos componentes en `src/components/solutions/**`
- No reescribir Education ni mover sus rutas
- Money pages existentes: `/desarrollo-software-ia`, `/posicionamiento-seo-geo`, `/generacion-leads-b2b`
- WhatsApp canónico: `src/lib/contact.ts` → `573213296957`
- CTA principal: **Agenda un diagnóstico**

## Cómo ejecutar

1. Leer el plan y marcar el Task actual.
2. Invocar sub-skill correspondiente.
3. Commits pequeños por Task.
4. Tras shared-risk → checklist Education.

## No hacer

- Cambiar stack (seguir Next.js App Router).
- Mock de “mensaje enviado” sin backend real.
- City spam / thin content.
- Alterar Education “de paso”.
