---
name: brandsoft-solutions-home
description: Rediseña o itera la home comercial de BrandSoft Solutions (/). Usar al implementar hero, problemas, sistema de crecimiento, pilares, FAQ, CTA final o al tocar src/app/page.tsx y componentes de home B2B.
---

# BrandSoft Solutions — Home

## Entrada

- Página: `src/app/page.tsx`
- Componentes actuales: `Hero`, `StatsStrip`, `ClientLogos`, `Services`, `SolutionsGrid`, `Pricing`, `Founder`, `SuccessStories`, `MentorshipSection`, `Contact`
- Preferir nuevos en `src/components/solutions/home/`

## Estructura objetivo (ajustar si UX lo justifica)

1. Hero — qué hacemos, para quién, CTA diagnóstico + explorar
2. Problemas que resolvemos (reconocibles, máx. 6)
3. Sistema de crecimiento (5 fases visuales)
4. 5 pilares de servicio → money pages reales
5. Orientación por necesidad
6. Cómo trabajamos
7. Prueba social **solo verificada**
8. Modalidades de trabajo (sin precios inventados)
9. FAQ de compra
10. CTA final + WhatsApp
11. Mantener puente Education (`MentorshipSection`) sin rediseñar Education

## Reglas UX

- Primer viewport: marca + 1 headline + 1 lede + CTAs + ancla visual de sistema (no robot genérico)
- No cards en hero; no stats inventados; no popups
- Español colombiano; tono profesional cercano
- Conservar identidad (violeta/cyan/emerald) mejorando aplicación

## Antes de editar

Leer `brandsoft-education-protect`. No romper `isEducationLanding` ni quitar acceso a `/mentorias`.

## Verificación

- `/` desktop + móvil 390
- CTAs abren destino real (form ancla o WhatsApp)
- Education link sigue vivo
