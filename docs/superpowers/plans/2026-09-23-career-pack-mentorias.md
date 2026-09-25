# Career Pack — Plan de implementación

> **For agentic workers:** steps use checkbox syntax. Execute in order.

**Goal:** Publicar el paquete de 5 mentorías (empleo + rumbo) con precios USD, foco LATAM (CO, MX, PE, AR, CL) y Texas como info producto, sin romper Producto Real / Clientes Reales.

**Architecture:** Tercera oferta bajo `/mentorias/career-pack` con data propia (`career-pack.ts`) y vista dedicada. Coexiste con los dos programas “Hecho contigo”.

**Tech Stack:** Next.js App Router, TypeScript data files, componentes education existentes.

---

## Plan de pasos

- [x] 1. Data `src/data/education/career-pack.ts` (5 sesiones, precios, copy LATAM/TX)
- [x] 2. Tipos/leads: slug `career-pack` en `education-lead.ts`
- [x] 3. Vista `CareerPackView.tsx` + página `/mentorias/career-pack`
- [x] 4. Hub: card destacada + copy; routes, sitemap, robots, DiagnosticForm
- [x] 5. Home `MentorshipSection` + JSON-LD
- [x] 6. Verificar `tsc`/lint de archivos tocados

## Precios (canon)

| Oferta | Precio |
|--------|--------|
| 1:1 · 5 mentorías | USD 500 |
| Grupal · 5 mentorías (mín. 5) | USD 300 / persona |
| Sesión suelta | USD 120 |

## Las 5 sesiones

01 Diagnóstico integral · 02 Plan de trabajo · 03 Banco técnico + simulacro psicólogo/HR · 04 Simulacro técnico · 05 Soft skills + manager + salario
