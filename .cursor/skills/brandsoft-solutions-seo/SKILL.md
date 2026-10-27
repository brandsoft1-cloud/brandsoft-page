---
name: brandsoft-solutions-seo
description: SEO técnico, on-page, local y GEO honesto para BrandSoft Solutions. Usar al editar metadata, SchemaOrg, sitemap, robots, FAQs comerciales, money page SEO o copy de posicionamiento/GEO.
---

# BrandSoft Solutions — SEO / GEO

## On-page por página comercial

- Title único + meta description útil
- Un H1 claro
- Jerarquía H2/H3
- Canonical + Open Graph
- Internal links a money pages y diagnóstico
- Alt text en imágenes reales

## Técnico

- `src/app/sitemap.ts` — **no eliminar** URLs Education
- `src/app/robots.ts` + `src/lib/robots-config.ts`
- Conservar URLs con valor; 301 documentado si se retira algo

## Schema

Solo tipos justificables: Organization, WebSite, Service, BreadcrumbList, FAQPage.

No inventar Review/AggregateRating, precios, direcciones de oficinas ni áreas de servicio falsas.

Datos contacto verificables: `contacto@brandsoft.com.co`, `+57 321 329 6957` (vía `contact.ts`).

## GEO (Generative Engine Optimization)

- Definiciones claras, FAQs útiles, alcance explícito de servicios
- Consistencia de nombre de marca y oferta
- **Prohibido:** “te haremos aparecer en ChatGPT/Gemini”

## Separación blog

- Artículos B2B → venden Solutions
- Artículos Education/Mentoría* → no reescribir ni redirigir a Solutions

## Education

Cualquier cambio en sitemap/robots → checklist `docs/solutions/education-regression-checklist.md`.
