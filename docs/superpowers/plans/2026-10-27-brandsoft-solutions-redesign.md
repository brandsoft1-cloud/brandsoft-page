# BrandSoft Solutions — Rediseño comercial (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use `brandsoft-education-protect` before any edit. Prefer `brandsoft-solutions-redesign` as orchestrator. Implement task-by-task with checkboxes. Use `superpowers:subagent-driven-development` or `executing-plans` when executing.

**Goal:** Convertir la home y el ecosistema B2B de BrandSoft Solutions en una plataforma comercial de alta conversión (atraer → convertir → automatizar), **sin alterar BrandSoft Education**.

**Architecture:** Next.js 16 App Router + Tailwind 4. Solutions vive en `src/app/page.tsx`, money pages y legacy; Education vive en `src/app/mentorias/**`, `crear-pagina-web-con-ia/**`, `src/components/education/**`. Cambios de nav/layout/globals son **shared-risk** y requieren checklist Education.

**Tech Stack:** Next.js 16.1.6, React 19, Tailwind 4, Framer Motion, MDX, Lucide. Conversión: WhatsApp `573213296957` (`src/lib/contact.ts`). Forms hoy UI/`dataLayer` (sin CRM backend en Solutions).

**Posicionamiento:** Socio de crecimiento digital y automatización. Mensaje base: *Atrae clientes. Convierte oportunidades. Automatiza tu crecimiento.* (ajustar copy solo si mejora claridad sin inventar claims).

**Skills del proyecto (usar según tarea):**

| Skill | Cuándo |
|-------|--------|
| `brandsoft-education-protect` | Antes de tocar Navbar, layout, globals, sitemap, home, Contact |
| `brandsoft-solutions-redesign` | Orquestación del rediseño / prioridades |
| `brandsoft-solutions-home` | Home `/` secciones 1–10 |
| `brandsoft-solutions-services` | Pilares de servicio y money pages |
| `brandsoft-solutions-cro` | CTA, formularios, WhatsApp, eventos |
| `brandsoft-solutions-seo` | Metadata, schema, sitemap, GEO honest |

---

## 0. Línea base — Inventario (completado en auditoría)

### Solutions (modificable)

- Home: `src/app/page.tsx` + `Hero`, `StatsStrip`, `ClientLogos`, `Services`, `SolutionsGrid`, `Pricing`, `Founder`, `SuccessStories`, `Contact`, `MentorshipSection`
- Money: `/desarrollo-software-ia`, `/posicionamiento-seo-geo`, `/generacion-leads-b2b`
- Industrias: `/industrias`, `/industrias/[slug]`
- Local: `/paginas-web-colombia`, `/paginas-web/[city]`
- Legacy: `/desarrollo-web`, `/marketing-digital`, `/ia-automatizaciones`, `/agente-ai`, `/web-ia` (B2B)
- Programáticas: `/servicios/...`, `/soluciones/...`
- Shell B2B: `Navbar`, `WhatsAppWidget`, `StickyMobileCta`, `SchemaOrg`
- Datos: `src/data/seo-config.ts`, `b2b-hub-structure.ts`, casos existentes

### Education (PROTEGIDO — no modificar)

- Rutas: `/mentorias/**`, `/crear-pagina-web-con-ia/**`, `/sube-de-nivel` (booking mentoría)
- Código: `src/components/education/**`, `src/data/education/**`, `src/lib/education-*.ts(x)`, `src/app/api/education/**`
- Datos SEO mentoría: `src/data/mentoria-seo.ts`, `mentoria-perfiles.ts`
- Blogs Education / Mentoría* en `content/blog/`
- PayPal / Meet socio / precios Education

### Shared-risk (solo con skill protect + checklist)

- `src/components/Navbar.tsx`
- `src/app/layout.tsx`, `src/app/globals.css`
- `src/components/StickyMobileCta.tsx`, `WhatsAppWidget.tsx`, `Contact.tsx`
- `src/app/sitemap.ts`, `robots.ts`
- `MentorshipSection` (home → Education): puede quedarse como puente; no redirigir Education a Solutions

### Hallazgos comerciales críticos

1. Home mezcla claims/stats y servicios sin un sistema de crecimiento claro.
2. CTA inconsistente; forms Solutions no tienen backend CRM (solo UI/`dataLayer`).
3. WhatsApp real OK (`573213296957`); no inventar números.
4. No hay GA4/GTM IDs en env — documentar, no inventar.
5. Casos/testimonios: auditar; **no inventar** métricas.
6. Education y Solutions comparten Navbar → riesgo alto en rediseño de nav.

### Criterios de aceptación (del brief)

Ver §15 del prompt maestro. Regresión Education obligatoria en cada etapa que toque shared-risk.

---

## Task 1: Aislamiento y reglas (foundation)

**Files:**
- Create: `.cursor/rules/brandsoft-education-protect.mdc`
- Create: `.cursor/skills/brandsoft-education-protect/SKILL.md`
- Create: `.cursor/skills/brandsoft-solutions-*/SKILL.md` (orquestador + home/services/cro/seo)
- Create: `docs/solutions/education-regression-checklist.md`

- [ ] Confirmar skills/rules instalados en repo
- [ ] Checklist Education: abrir `/mentorias`, `/mentorias/career-pack`, `/crear-pagina-web-con-ia`, `/sube-de-nivel` sin cambios visuales/funcionales tras cada PR shared-risk
- [ ] Commit: `chore(cursor): skills y regla de protección Education + plan Solutions`

---

## Task 2: Tokens visuales Solutions (sin romper Education)

**Files:**
- Modify (cuidado): `src/app/globals.css` — preferir variables scoped o clase wrapper `.solutions-shell`
- Prefer create: `src/components/solutions/` (nuevos componentes B2B)
- Avoid changing fonts globales usadas por EducationFrame sin prueba

- [ ] Definir tokens Solutions (primary/accent/spacing) reutilizando violeta/cyan/emerald actuales si posible
- [ ] Wrapper `SolutionsShell` (Navbar + main + footer Solutions) separado de `EducationFrame`
- [ ] `prefers-reduced-motion` en animaciones nuevas
- [ ] Verificar `/mentorias` no cambia tipografía/colores Education
- [ ] Commit: `feat(solutions): shell y tokens visuales aislados`

---

## Task 3: Home comercial (secciones 1–10)

**Files:**
- Modify: `src/app/page.tsx`
- Create under `src/components/solutions/home/`: HeroGrowth, ProblemsGrid, GrowthSystem, ServicePillars, NeedNavigator, HowWeWork, SocialProof, WorkModes, FaqCommercial, FinalCta
- Modify carefully: `Hero.tsx` o reemplazar import en page (no tocar Education)
- Audit: `StatsStrip`, `SuccessStories`, `Pricing` — quitar cifras no verificables

- [ ] Hero: valor + CTAs **Agenda un diagnóstico** / **Explora soluciones**
- [ ] Problemas → solución BrandSoft (6 items max)
- [ ] Sistema 5 fases (atraer → convertir → CRM → automatizar → medir)
- [ ] 5 pilares de servicio con links a money/legacy reales
- [ ] Navegador por necesidad → rutas existentes
- [ ] Cómo trabajamos (5 pasos honestos)
- [ ] Prueba social solo con evidencia auditada; si falta, estructura “proyectos / demos” etiquetada
- [ ] Modalidades (proyecto / mensual / automatización / integral) sin precios inventados
- [ ] FAQ compra + CTA final + WhatsApp contextual
- [ ] Mantener `MentorshipSection` como acceso Education (no rediseñar Education)
- [ ] Commit: `feat(solutions): nueva home de crecimiento digital`

---

## Task 4: Navbar / Footer Solutions (shared-risk)

**Files:**
- Modify: `src/components/Navbar.tsx` (usar skill protect)
- Create: `src/components/solutions/SolutionsFooter.tsx` (extraer footer de Contact si aplica)

- [ ] Nav: Inicio, Servicios (5 pilares), Industrias, Casos, Recursos, Contacto + CTA diagnóstico
- [ ] Education: un solo enlace claro a `/mentorias` (no romper dropdowns Education existentes: Career Pack / Web con IA)
- [ ] Footer: servicios, industrias, casos, legales, Education link independiente
- [ ] Regresión: `isEducationLanding` + solidNav + WhatsApp/Sticky hide siguen OK
- [ ] Commit: `feat(solutions): nav y footer orientados a conversión`

---

## Task 5: Páginas de servicio (5 pilares)

**Files:**
- Money templates: `src/components/b2b/MoneyServiceTemplate.tsx` + pages money
- Mapear pilares → URLs:
  - Captación → `/generacion-leads-b2b` (+ marketing legacy)
  - SEO/GEO → `/posicionamiento-seo-geo`
  - Presencia/web → `/paginas-web-colombia` / desarrollo-web
  - Automatización IA → `/ia-automatizaciones` / `/agente-ai`
  - Software → `/desarrollo-software-ia`
- Create opcional hubs `/servicios/...` solo si no canibalizan money pages

- [ ] Alinear H1, problema, entregables, CTA, WhatsApp message por pilar
- [ ] No duplicar contenido thin entre `/servicios/[slug]/[city]` y money hubs
- [ ] Commit: `feat(solutions): pilares de servicio alineados a money pages`

---

## Task 6: CRO — diagnóstico, WhatsApp, analytics

**Files:**
- Modify: `src/components/Contact.tsx` o create `solutions/DiagnosticForm.tsx`
- Modify: `src/lib/contact.ts` (mensajes precargados por servicio)
- Document: `docs/solutions/integrations.md` (GA4/CRM pendientes)

- [ ] Form breve: nombre, empresa, email o WhatsApp, necesidad, mensaje opcional + privacidad
- [ ] Estados: idle / submitting / success / error (nunca success en fallo)
- [ ] Si no hay API CRM: mantener UI + documentar env vars necesarias; no mockear “enviado”
- [ ] WhatsApp mensajes por pilar
- [ ] Eventos dataLayer/gtag opcionales sin PII (cta_click, wa_click, form_start, form_success, form_error)
- [ ] Commit: `feat(solutions): flujo de diagnóstico y tracking CRO`

---

## Task 7: SEO técnico + GEO honest

**Files:**
- Money `generateMetadata` / `buildMoneyPageMetadata`
- `SchemaOrg.tsx`, FAQ JSON-LD
- `sitemap.ts` (no quitar URLs Education)
- Contenido FAQ home

- [ ] Titles/descriptions únicos en home + money
- [ ] Organization/WebSite/Service/Breadcrumb solo con datos verificables
- [ ] Sin claims “aparecerás en ChatGPT”
- [ ] Conservar URLs; 301 solo si se retira una URL con tráfico (documentar)
- [ ] Commit: `feat(solutions): SEO on-page y schema comercial`

---

## Task 8: Industrias y casos (solo evidencia)

**Files:**
- `src/app/industrias/**`, `casos-de-exito`, componentes CaseStudy*
- Auditar copy; eliminar cifras sin fuente

- [ ] Priorizar verticales con propuesta real (salud, etc. ya existentes)
- [ ] No crear city pages spam
- [ ] Commit: `feat(solutions): industrias y casos honestos`

---

## Task 9: Rendimiento, a11y, regresión Education

- [ ] Build producción + lint + tsc
- [ ] Mobile 360/390, tablet, desktop
- [ ] Keyboard + contraste + reduced-motion
- [ ] Checklist Education completo
- [ ] Commit: `test(solutions): regresión Education y a11y home`

---

## Task 10: Medición de impacto (post-launch)

- [ ] Definir baseline: leads WA/semana, form submits, bounce home
- [ ] Configurar GA4/GTM cuando Mauricio entregue IDs
- [ ] Revisar Search Console: money pages + home

---

## Orden de ejecución recomendado

1 → 2 → 3 → 4 → 6 → 5 → 7 → 8 → 9 → 10

No empezar Task 3 sin Task 1 (protección). No mergear Task 4 sin checklist Education.

## Decisiones pendientes del usuario (no bloquean Tasks 1–3 UI)

1. ¿Existe CRM/email API para el form de diagnóstico Solutions o solo WhatsApp por ahora?
2. ¿IDs GA4/GTM?
3. ¿Qué casos/testimonios están autorizados a mostrar (lista verificada)?
4. ¿Precios públicos de entrada para algún paquete Solutions o solo “cotización”?
