---
name: brandsoft-education-protect
description: Protege BrandSoft Education al editar el sitio. Usar antes de tocar Navbar, layout, globals, sitemap, home, Contact, StickyMobileCta, WhatsAppWidget o cualquier archivo compartido; y siempre que el usuario pida rediseño Solutions.
---

# BrandSoft Education — Protect

## Cuándo usar

Antes de modificar código que pueda afectar mentorías, Career Pack, Web con IA o booking `/sube-de-nivel`.

## Zona protegida (no editar sin orden explícita “cambia Education”)

| Área | Paths |
|------|--------|
| App | `src/app/mentorias/**`, `src/app/crear-pagina-web-con-ia/**`, `src/app/sube-de-nivel/**`, `src/app/api/education/**` |
| UI | `src/components/education/**` |
| Data | `src/data/education/**`, `src/data/mentoria-seo.ts`, `src/data/mentoria-perfiles.ts` |
| Lib | `src/lib/education-routes.ts`, `education-lead.ts`, `education-og.tsx` |
| Content | blogs categoría Education / Mentoría* |

No cambiar precios, PayPal, Meet socio, FAQs Education, GEO Education ni CTAs educativos.

## Shared-risk

`Navbar.tsx`, `src/app/layout.tsx`, `globals.css`, `StickyMobileCta.tsx`, `WhatsAppWidget.tsx`, `Contact.tsx`, `MentorshipSection.tsx`, `sitemap.ts`, `robots.ts`.

Si debes tocarlos:

1. Explica el impacto en Education en 1–2 líneas.
2. Prefiere cambios scoped (p. ej. solo rutas `!isEducationLanding`).
3. No quites enlaces a `/mentorias`, `/crear-pagina-web-con-ia`, `/sube-de-nivel`.
4. Corre checklist: `docs/solutions/education-regression-checklist.md`.

## Falsos amigos

- `/web-ia` = Solutions B2B
- `/soluciones/educacion` = vertical B2B

## Output

Al terminar un cambio shared-risk, declara: **Education regression: PASS/FAIL** + rutas verificadas.
