# Career Pack GEO por país — Implementation Plan

> **For agentic workers:** execute task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Publicar landings indexables del Career Pack por mercado (CO, MX, PE, AR, CL, TX) con copy, meta, hreflang, sitemap y enlaces internos, sin romper `/mentorias/career-pack`.

**Architecture:** Hub LatAm en `/mentorias/career-pack`. Páginas GEO en `/mentorias/career-pack/[geo]`. Data en `career-pack-geo.ts` que especializa el copy base (`latam`/`tx`). `generateStaticParams` + `notFound` para slugs inválidos.

**Tech Stack:** Next.js App Router, TypeScript data files, Metadata API (`alternates.languages`), sitemap/robots existentes.

---

## Files

| File | Role |
|------|------|
| `src/data/education/career-pack-geo.ts` | Mercados GEO + copy por país |
| `src/lib/education-routes.ts` | `CAREER_GEO_SLUGS`, `resolveCareerGeo`, paths |
| `src/app/mentorias/career-pack/[geo]/page.tsx` | Landing GEO |
| `src/components/education/CareerPackView.tsx` | Switcher GEO + copy inyectable |
| `src/app/mentorias/career-pack/page.tsx` | Hub + links GEO; redirect `?r=tx` → `/tx` |
| `src/app/sitemap.ts` / `robots.ts` | Indexación |
| `src/components/education/HubView.tsx` | Enlaces a mercados |

---

### Task 1: Data GEO

- [x] Crear `career-pack-geo.ts` con `co|mx|pe|ar|cl|tx`
- [x] Helper `getCareerGeoPage(slug)` → copy + path + locale + hreflang map

### Task 2: Rutas

- [x] Extender `education-routes.ts`
- [x] Página `[geo]/page.tsx` con metadata + JSON-LD + static params

### Task 3: UI

- [x] `CareerPackView` acepta `copy` + `geo` + switcher de mercados
- [x] Hub lista países; `?r=tx` redirige a `/tx`

### Task 4: SEO técnico

- [x] Sitemap: 6 URLs GEO (priority ~0.88)
- [x] robots allow
- [x] `alternates.languages` hreflang entre geos + `x-default` → hub

### Task 5: Verify

- [x] Smoke estático de paths/slugs
- [x] Marcar plan done
