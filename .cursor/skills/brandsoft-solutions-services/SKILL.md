---
name: brandsoft-solutions-services
description: Alinea y mejora las páginas de servicios/pilares B2B de BrandSoft Solutions (money pages, industrias, legacy). Usar al editar desarrollo-software-ia, posicionamiento-seo-geo, generacion-leads-b2b, ia-automatizaciones, paginas-web, MoneyServiceTemplate o pilares de captación/SEO/web/IA/software.
---

# BrandSoft Solutions — Servicios / pilares

## Cinco pilares → URLs reales

| Pilar | Ruta principal | Relacionadas |
|-------|----------------|--------------|
| Captación y marketing | `/generacion-leads-b2b` | `/marketing-digital` |
| SEO, SEO local y GEO | `/posicionamiento-seo-geo` | `/como-posicionar-google-gratis` |
| Presencia digital / web | `/paginas-web-colombia` | `/desarrollo-web` |
| Automatización e IA | `/ia-automatizaciones` | `/agente-ai` (B2B; no Education) |
| Software e integraciones | `/desarrollo-software-ia` | `/servicios/...` programáticas |

## Plantilla de página de servicio

Cada página debe tener:

1. H1 orientado a resultado empresarial (no solo tech)
2. Problema → enfoque BrandSoft
3. Entregables claros
4. Qué no incluye / dependencias del cliente
5. CTA **Agenda un diagnóstico** + WhatsApp con mensaje del pilar
6. FAQ específicas sin promesas absolutas
7. Metadata única + schema Service/FAQ solo con datos reales

## GEO / SEO local

- No prometas aparición en ChatGPT/Gemini
- No multipliques city pages thin; mejora las que ya existen
- `/soluciones/educacion` es vertical B2B, **no** BrandSoft Education

## Archivos típicos

- `src/components/b2b/MoneyServiceTemplate.tsx`
- `src/app/desarrollo-software-ia/**`, `posicionamiento-seo-geo/**`, `generacion-leads-b2b/**`
- `src/data/seo-config.ts`, `b2b-hub-structure.ts`

## Honestidad

Sin clientes/logos/métricas inventadas. Si no hay caso, no lo fabriques.
