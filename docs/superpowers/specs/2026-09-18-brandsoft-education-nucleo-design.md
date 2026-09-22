# Brandsoft Education — Sub-proyecto 1: Núcleo de conversión

- **Fecha:** 2026-09-18
- **Autor:** Mauricio Forero (CTO) + Claude
- **Estado:** Diseño aprobado en brainstorming — pendiente revisión del spec escrito
- **Stack:** Next.js 16 (App Router), React 19, Tailwind v4, framer-motion, lucide-react, MDX. Tema oscuro (negro + violeta/emerald/cyan), clase `font-heading`.

---

## 1. Contexto

El proyecto ya tiene un sistema de mentorías (`/mentorias`): un hub SEO con pilares temáticos y perfiles por situación, más ~26 artículos MDX sobre CV/ATS, LinkedIn, entrevistas, system design y negociación. La conversión hoy es WhatsApp-first (`+57 321 329 6957`), sin backend ni base de datos.

**Brandsoft Education** es la evolución de ese sistema: un producto premium —el **Career Acceleration Program** de **5 mentorías 1:1 secuenciales**— con el CTO (Mauricio Forero) como figura central. Reemplaza y absorbe `/mentorias` bajo una sola marca en `/education`.

## 2. Decisiones bloqueadas (brainstorming)

| Decisión | Resolución |
|---|---|
| Relación con `/mentorias` | **Reemplaza y absorbe.** Marca única en `/education`; 301 desde `/mentorias`. |
| Destino del lead form | **WhatsApp prefill**, sin backend. Mensaje estructurado. |
| Primer entregable | **Núcleo de conversión** (landing completa + form + migración + SEO técnico). |
| Notificaciones de actividad | **Feed de actividad real curada por Mauricio** (lista editable). Nada fabricado. |
| SEO/GEO | Fundación SEO técnica **completa en SP1**; páginas geo por país en **SP2 inmediato**. |
| Idioma | Español ahora; datos preparados para EN después (campo `lang`, sin traducir). |
| Pricing y credenciales | **Placeholders marcados** (`[PRECIO]`, `[AÑOS_EXPERIENCIA]`…) que Mauricio rellena en data. |

## 3. Alcance

### Dentro (SP1)
- Landing `/education` premium con las 18 secciones del brief (ancladas).
- Roadmap visual de las 5 mentorías (01→05).
- Sección del mentor (Mauricio) con slot de video (placeholder).
- Segmentación "para quién es / no es".
- Pricing con placeholders + "Additional Mentorship".
- FAQ accesible (incluye respuesta transparente de no-garantía).
- Lead form inteligente → WhatsApp prefill.
- `SocialProofToaster` con actividad curada.
- Migración 301 de `/mentorias` → `/education`; actualización de sitemap y navbar.
- SEO técnico: metadata, canonical, OG/Twitter, JSON-LD (Person, Service/Course, FAQPage, BreadcrumbList), malla de enlaces internos hacia `/education`, estructura hreflang-ready.
- Adaptador de analytics (`track()` → `dataLayer` o no-op).
- Datos en archivos TS (CMS-ready); nada de copy hardcodeado en componentes.

### Fuera (sub-proyectos posteriores)
2. Video-first real (VideoCard/Grid, micro-videos, categorías).
3. Education hub/CMS + páginas topic SEO (`/education/cv-developers`, `/education/entrevistas-tecnicas`…).
4. **GEO** — páginas por país (`/co`, `/pe`, `/ar`, `/pa`, `/us`) con contenido localizado real + re-mapeo 301 de pillars/perfiles hacia `/education/*`.
5. Booking calendarizado + pre-work con uploads (CV/LinkedIn/GitHub).
6. Dashboard del alumno (progreso 01→05, documentos, feedback).
7. i18n EN (adaptado, no traducción literal).

### Frontera explícita sobre páginas existentes
En SP1, `/mentorias/perfil/[slug]` y las páginas de pilar **conservan su URL y ranking**; solo se re-apunta su marca/CTAs hacia Education. El re-mapeo completo con 301 hacia `/education/*` pertenece a SP4 (GEO/hub) para no perder tráfico ni inflar este entregable.

## 4. Posicionamiento y mensajería

**Ángulo central (wedge imposible de copiar):**
> "Soy CTO. He estado del otro lado de la mesa: evalúo, contrato y rechazo developers. Te preparo con el criterio de quien realmente decide."

**Principios:**
- Categoría ("aceleradora de carrera dirigida por un CTO"), no producto ("5 clases").
- Autoridad demostrada + transparencia en vez de métricas falsas. La honestidad ES el posicionamiento premium.
- Nicho destacado de mayor valor/menor competencia: **developer LATAM → trabajo remoto para empresas de EE. UU.** (flujo resaltado, sin prometer empleo).
- SEO: `/education` es el **destino que convierte**; el blog y las páginas existentes **capturan intención** y concentran enlaces internos hacia `/education`.

**Frase de hero (semilla):** "No necesitas otro curso. Necesitas prepararte con quien decide a quién contratar."

Toda la biblioteca de copy cuelga de este ángulo. Frameworks a usar: PAS, Before-After-Bridge, Feature-Benefit-Outcome, objection handling, authority. Prohibido: garantías de empleo, estadísticas inventadas, escasez falsa.

## 5. Arquitectura de información y migración

### Rutas (SP1)
- `/education` — landing única del programa. CTAs secundarios → anclas: `#mentorias`, `#mentor`, `#pricing`, `#faq`, `#diagnostico` (form).

### Migración
- `next.config.ts` → `redirects()`: `{ source: '/mentorias', destination: '/education', permanent: true }`.
- `sitemap.ts`: reemplazar la entrada `/mentorias` por `/education` (priority ~0.95, changeFrequency weekly). Mantener entradas de pillars/perfiles (siguen vivas).
- `Navbar`: enlace "Education" → `/education`.
- El componente `MentorshipSection` de la home apunta su CTA a `/education`.

## 6. Modelo de datos — `src/data/education/`

Archivos TS tipados, sin copy en componentes. Cada objeto lleva `lang: 'es'` para futuro EN.

- **`education-program.ts`** — meta del programa: nombre, tagline, `valueStack[]`, pricing (`precio: '[PRECIO]'`, `moneda`, `duracionSesion`, `duracionTotal`), `additionalMentorship` (temas de refuerzo).
- **`education-mentorias.ts`** — array de 5:
  `{ number: 1..5, slug, name, objetivo, queHacemos: string[], entregables: string[], resultado, ctaLabel, ctaContext, accent: 'violet'|'emerald'|'cyan'|'amber', icon: LucideName }`.
  Nombres: 01 Diagnóstico de Perfil · 02 Tu Roadmap Profesional · 03 Simulación de Entrevista · 04 Technical + Manager Interview · 05 Career Strategy.
- **`education-mentor.ts`** — Mauricio: `nombre`, `rol`, `bio`, `credenciales: string[]` (con placeholders `[AÑOS_EXPERIENCIA]`, `[EMPRESAS]`, `[NÚMERO_MENTORÍAS]`, `[LOGROS]`), `foto`, `videoUrl` (placeholder), `linkedin`.
- **`education-audience.ts`** — `paraQuienEs: Segment[]` (junior, mid, senior, lead/arquitecto, internacional LATAM→USA) y `paraQuienNoEs: string[]`.
- **`education-faq.ts`** — `FaqItem[] { q, a }`, incluye la de no-garantía con respuesta transparente literal del brief.
- **`education-copy.ts`** — `headlines: string[]` (≥20), `subheadlines: string[]` (≥20), `problemScenarios: string[]`, `emotionalMessages: string[]`. Todo anclado al wedge de CTO.
- **`education-form.ts`** — definición declarativa de campos del lead form (ver §8).
- **`education-activity.ts`** — feed curado para el toaster (ver §9).

## 7. Componentes UI — `src/components/education/`

Mobile-first, responsive, `framer-motion` sutil, `lucide` icons. Reutilizan `Navbar` y `Contact` (footer). La página `src/app/education/page.tsx` compone en el orden del brief §41.

| Componente | Responsabilidad |
|---|---|
| `EduHero` | Headline (wedge) + subheadline + CTA principal "Agendar diagnóstico" + secundario "Ver cómo funciona" + slot video CTO. |
| `EduProblem` | Escenarios de dolor (§13 del brief) desde `education-copy`. |
| `EduSolutionRoadmap` | Timeline visual 01→05, consume `education-mentorias`. Ancla `#mentorias`. |
| `EduMentoriaCard` | Tarjeta por etapa: nombre, objetivo, qué hacemos, entregables, resultado, CTA. |
| `EduDimensionTecnicaEmocional` | Bloque técnico + comunicación/manejo de presión (no clínico). |
| `EduMentorProfile` | Mauricio, credenciales (placeholders), slot de video. Ancla `#mentor`. |
| `EduAudienceFit` | "Para quién es" (segmentos) / "para quién NO es". |
| `EduPricing` | Value stack + precio (placeholders) + Additional Mentorship. Ancla `#pricing`. |
| `EduFaq` | Acordeón accesible (teclado, `aria-expanded`). Ancla `#faq`. Emite `faq_opened`. |
| `EduLeadForm` | Form inteligente → WhatsApp (§8). Ancla `#diagnostico`. |
| `EduCtaBand` | Banda CTA reutilizable entre secciones (patrón `CtaConversionBand`). |
| `SocialProofToaster` | Notificaciones de actividad curada (§9). Montado a nivel de página. |

**Orden de la landing:** Navbar → Hero(+video) → Problema → Nueva forma de pensar → Qué la hace diferente → 5 mentorías (roadmap) → Dimensión técnica+emocional → Perfil CTO → Para quién es → Para quién no es → Testimonios (placeholders) → Pricing → FAQ → CTA final → Footer. CTAs intercalados tras Hero, Problema, Mentorías, CTO, FAQ y final.

## 8. Lead form → WhatsApp

Client component. Campos (del brief §18): nombre, email, país, LinkedIn, rol actual, años de experiencia, stack, seniority, rol objetivo, ¿trabajando?, tipo de oportunidad, ¿remoto?, ¿interés en USA?, principal dificultad, cuándo empezar, campo abierto "qué quieres conseguir".

- Validación en cliente (email/campos requeridos). Estados accesibles (labels, `aria-invalid`, focus).
- Al enviar: arma mensaje estructurado y abre `whatsAppHref(mensaje)` de `src/lib/contact.ts`.
- Formato del mensaje:
  ```
  Diagnóstico Brandsoft Education
  Nombre: {nombre} · {país}
  Rol: {rol} ({seniority}, {años} años) → objetivo: {rolObjetivo}
  Stack: {stack}
  Trabajando: {sí/no} · Remoto: {sí/no} · USA: {sí/no}
  Dificultad: {dificultad}
  Empezar: {cuándo}
  Meta: {campoAbierto}
  ```
- Eventos: `form_start` (primer focus), `lead_submitted` (envío). Sin persistencia (los datos llegan al WhatsApp de Mauricio).

## 9. `SocialProofToaster` — actividad curada

- Fuente: `education-activity.ts` → `ActivityItem[] { rol, ciudad, accion, hace }` (ej. `{ rol:'Dev backend', ciudad:'Medellín', accion:'agendó su diagnóstico', hace:'hace 2 días' }`). **Solo datos reales/anonimizados** que Mauricio edita. Nada aleatorio ni fabricado.
- Comportamiento: aparece cada N segundos (config), una a la vez, esquina inferior; descartable; **no** se muestra si la lista está vacía.
- Accesibilidad/performance: `aria-live="polite"`, respeta `prefers-reduced-motion`, límite de frecuencia, no bloquea LCP.
- Evento opcional: `social_proof_shown`.

## 10. SEO técnico, schema y analytics

- **Metadata** (`export const metadata`): title/description con keyword de intención, `alternates.canonical: '/education'`, OG y Twitter.
- **JSON-LD** (nuevo `EducationSchema.tsx`, patrón de `SchemaOrg.tsx`):
  - `Person` (Mauricio, `sameAs` LinkedIn ya conocido).
  - `Service` o `Course` (el programa de 5 mentorías, `provider` → Organization existente por `@id`).
  - `FAQPage` (desde `education-faq`).
  - `BreadcrumbList`.
- **Malla de enlaces internos:** artículos de blog relevantes + páginas de pilar/perfil + home enlazan a `/education`; `/education` enlaza de vuelta a guías de apoyo del blog.
- **Sitemap:** alta de `/education`; retiro de `/mentorias` (ahora 301).
- **hreflang-ready:** estructura de datos con `lang`; sin emitir alternates EN aún.
- **Analytics** (`src/lib/analytics.ts`): `track(event, props)` empuja a `window.dataLayer` si existe, si no no-op. Eventos: `hero_cta_click`, `booking_cta`, `form_start`, `lead_submitted`, `pricing_viewed`, `faq_opened`, `mentorias_viewed`, `social_proof_shown`. Vendors (GA/GTM/Pixel/LinkedIn) se cablean en ciclo posterior; el adaptador queda listo.

## 11. Accesibilidad y performance

- Semantic HTML, jerarquía H1→H3 correcta, `alt` en imágenes, foco visible, navegación por teclado (FAQ, form, toaster).
- Contraste AA sobre fondo oscuro.
- Video del CTO: lazy (poster/placeholder ahora; sin afectar LCP).
- Imágenes optimizadas (`next/image`, WebP/AVIF), `framer-motion` sutil respetando `prefers-reduced-motion`.

## 12. Inventario de placeholders (para que Mauricio rellene en data)

`[PRECIO]`, `[MONEDA]`, `[DURACION_SESION]`, `[DURACION_TOTAL]`, `[AÑOS_EXPERIENCIA]`, `[EMPRESAS]`, `[NÚMERO_MENTORÍAS]`, `[LOGROS_VERIFICABLES]`, foto profesional, URL de video, y testimonios reales (`[TESTIMONIO]`, `[NOMBRE]`, `[ROL]`, `[PAÍS]`). Ninguno se inventa en código.

## 13. Criterios de aceptación

1. `/education` renderiza las 18 secciones desde datos TS, responsive y accesible.
2. `/mentorias` responde 301 → `/education`; sitemap actualizado; navbar/ home enlazan a `/education`.
3. Lead form valida y abre WhatsApp con el mensaje estructurado correcto.
4. `SocialProofToaster` muestra solo actividad de `education-activity.ts` y no aparece con lista vacía.
5. JSON-LD válido (Person, Service/Course, FAQPage, BreadcrumbList); metadata/OG/canonical presentes.
6. `track()` emite los eventos sin errores con o sin `dataLayer`.
7. Sin métricas/testimonios/garantías inventadas; placeholders visibles donde falta dato real.
8. `next build` y `eslint` pasan.

## 14. Roadmap de sub-proyectos siguientes

2. Video-first · 3. Education hub/CMS + topic pages · 4. GEO por país + 301 de pillars · 5. Booking + pre-work · 6. Dashboard · 7. i18n EN.

## 15. Riesgos / decisiones abiertas

- **SEO "se posiciona solo":** el motor (SEO técnico + malla interna + schema) se entrega en SP1, pero el posicionamiento real **compone con el tiempo** y se potencia con SP4 (GEO). No es instantáneo.
- **Actividad curada:** requiere que Mauricio mantenga `education-activity.ts` con datos reales; si no lo actualiza, se muestra vacío (correcto, no se fabrica).
- **Consistencia de dominio:** `SchemaOrg` usa `brandsoft.com.co` y `next.config` canónico es `www.brandsoft.com.co`; se mantiene la convención existente de cada archivo (no se corrige en este SP salvo que se decida lo contrario).
