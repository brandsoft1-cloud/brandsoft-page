# Web con IA — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar BrandSoft Education · **Web con IA** (2×90 min): hub + landings GEO, PayPal USD 190, replay 6 meses, repo privado post-pago, y CTA para que el **socio cierre por Google Meet** (asesoría comercial).

**Architecture:** Mismo patrón que Career Pack: data tipada (`web-con-ia.ts` + `web-con-ia-geo.ts`) → páginas App Router hub + `[geo]` → view visual comercial → PayPal Hosted Buttons + CTA Meet del socio (cierre) + WhatsApp. Sitemap/robots/hreflang. Sin Calendly ni membresía en MVP.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind, PayPal Hosted Buttons SDK, Google Meet (sala fija del socio).

**Spike fuente:** `docs/superpowers/specs/2026-09-25-webinar-web-ia-spike.md`

---

## Decisiones de producto (cerradas)

| Tema | Valor |
|------|--------|
| Nombre | **Web con IA · BrandSoft Education** |
| Precio | Ancla **USD 500** · especial **USD 190** |
| URL hub | `/crear-pagina-web-con-ia` |
| GEO | `/crear-pagina-web-con-ia/{co\|mx\|pe\|ar\|cl\|tx}` |
| Cohorte | Un solo live para todos los países |
| Pago | PayPal Hosted Button `Z8UWDTWD9ZNLW` |
| Cierre / asesoría | Meet del **socio**: `https://meet.google.com/yco-bujk-njw` — él cierra en Meet |
| Live webinar | Post-pago por WhatsApp (misma sala si el socio facilita, o link que envíe el equipo) |
| Replay | 6 meses |
| Repo starter | Privado (solo pagaron) |
| Cupo | Sin límite (Meet + Q&A chat) |
| Calendly | **No** en MVP — el socio cierra directo en Meet |

### Enlaces operativos (env)

```bash
# .env.local (client-id PayPal hosted es público en front)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=BAAg3O0cCSD3XR_J-FzbwEs4cxLH848_cyS-Cn-OagcWFbwKP6LgB2UbO9IUDBoSidTr1DVxBsHvoO7kT4
NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID=Z8UWDTWD9ZNLW
NEXT_PUBLIC_SOCIO_CIERRE_MEET_URL=https://meet.google.com/yco-bujk-njw
NEXT_PUBLIC_WHATSAPP_EDUCATION=573213296957
```

> **Quién cierra:** el Meet es del **socio**. CTA `#asesoria` → “Hablar con el asesor” abre esa sala (o WhatsApp “Quiero asesoría Web con IA” si el Meet está ocupado / preferencia de coordinación).  
> **No hay Calendly** en este flujo: el socio cierra la conversación en Meet.

---

## Mapa de archivos

| Archivo | Responsabilidad |
|---------|-----------------|
| `src/data/education/web-con-ia.ts` | Copy hub, temario S1/S2, precios, FAQs, promesa/no-promesa |
| `src/data/education/web-con-ia-geo.ts` | 6 mercados GEO + hreflang + keywords locales |
| `src/lib/education-routes.ts` | Detectar rutas Web con IA (nav/CTA) |
| `src/components/education/PayPalHostedButton.tsx` | Client: carga SDK + render hosted button |
| `src/components/education/AsesoriaCta.tsx` | Sección `#asesoria`: Meet del socio + WhatsApp respaldo |
| `src/components/education/WebConIaView.tsx` | Landing visual (hub o GEO) |
| `src/app/crear-pagina-web-con-ia/page.tsx` | Hub + metadata + JSON-LD |
| `src/app/crear-pagina-web-con-ia/[geo]/page.tsx` | GEO pages |
| `src/app/sitemap.ts` / `robots.ts` | Indexación |
| `src/components/education/HubView.tsx` | Card del producto nuevo |
| `src/components/MentorshipSection.tsx` / Navbar | Enlace Education |
| `.env.example` | Documentar vars |

---

## Task 1: Data hub Web con IA

**Files:**
- Create: `src/data/education/web-con-ia.ts`
- Modify: `src/data/education/types.ts` (si hace falta slug de programa)
- Test: smoke TypeScript / import

- [ ] **Step 1: Crear `web-con-ia.ts`** con:

```ts
export const WEB_CON_IA = {
  slug: 'web-con-ia',
  path: '/crear-pagina-web-con-ia',
  brandName: 'Web con IA · BrandSoft Education',
  cardTitle: 'Web con IA',
  cardQuestion: '¿Quieres crear (o vender) una landing con IA sin saber programar?',
  promiseLine:
    'En 2 webinars de 90 min armas tu landing con IA + Next.js, la subes a Vercel y te llevas el guion para venderla.',
  priceAnchorUsd: 500,
  priceSpecialUsd: 190,
  sessions: [
    /* S1 y S2 del spike: bloques, entregables */
  ],
  avatars: [/* A aprender / B mi web / C vender */],
  faqs: [/* … */],
  socioCierreMeetUrl:
    process.env.NEXT_PUBLIC_SOCIO_CIERRE_MEET_URL ?? 'https://meet.google.com/yco-bujk-njw',
  paypalHostedButtonId: process.env.NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID ?? 'Z8UWDTWD9ZNLW',
} as const;
```

- [ ] **Step 2: Verificar** que el archivo typecheckea (`npx tsc --noEmit` o lint del archivo).

- [ ] **Step 3: Commit**

```bash
git add src/data/education/web-con-ia.ts
git commit -m "feat(education): add Web con IA hub data and pricing"
```

---

## Task 2: Data GEO (6 países)

**Files:**
- Create: `src/data/education/web-con-ia-geo.ts`
- Pattern: copy from `career-pack-geo.ts` (slugs, hreflang, paths)

- [ ] **Step 1: Definir mercados** `co|mx|pe|ar|cl|tx` con:
  - `path: /crear-pagina-web-con-ia/${slug}`
  - `keyword` local (“crear página web con IA Colombia”, etc.)
  - `metaTitle` / `metaDescription` / `headline` / `lede` / `symptoms` / `localFaqs`
  - TX: copy EN o bilingüe controlado

- [ ] **Step 2: Helpers** `getWebConIaGeoPage(slug)`, `webConIaGeoStaticParams()`, `languageAlternates`

- [ ] **Step 3: Commit**

```bash
git add src/data/education/web-con-ia-geo.ts
git commit -m "feat(education): add Web con IA GEO markets and hreflang map"
```

---

## Task 3: PayPal Hosted Button (client)

**Files:**
- Create: `src/components/education/PayPalHostedButton.tsx`
- Create/Modify: `.env.example`

- [ ] **Step 1: Componente client**

```tsx
'use client';
import { useEffect, useRef } from 'react';

const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const BUTTON_ID = process.env.NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID ?? 'Z8UWDTWD9ZNLW';
const CONTAINER_ID = `paypal-container-${BUTTON_ID}`;

export default function PayPalHostedButton() {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current || !CLIENT_ID) return;
    loaded.current = true;
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&components=hosted-buttons&disable-funding=venmo&currency=USD`;
    script.async = true;
    script.onload = () => {
      // @ts-expect-error PayPal global
      window.paypal?.HostedButtons({ hostedButtonId: BUTTON_ID }).render(`#${CONTAINER_ID}`);
    };
    document.body.appendChild(script);
  }, []);
  return <div id={CONTAINER_ID} className="min-h-[45px] w-full max-w-md" />;
}
```

- [ ] **Step 2: Documentar** vars en `.env.example`

- [ ] **Step 3: Commit**

```bash
git add src/components/education/PayPalHostedButton.tsx .env.example
git commit -m "feat(education): PayPal hosted button for Web con IA checkout"
```

---

## Task 4: Meet del socio — cierre / asesoría

**Files:**
- Create: `src/components/education/AsesoriaCta.tsx`

**Comportamiento (Mateo + Andrés):**
1. CTA primario: **“Hablar con el asesor”** → abre Meet del socio [`yco-bujk-njw`](https://meet.google.com/yco-bujk-njw) (`target="_blank"`).
2. CTA secundario: WhatsApp prefilled “Hola, quiero asesoría Web con IA antes de pagar”.
3. Copy claro: *“Te atiende nuestro socio por Google Meet — ahí resuelves dudas y cierras.”*
4. El Meet de **cierre es público** en `#asesoria` (es la herramienta de venta del socio). El acceso al **webinar live** no se regala en hero: va en “¿Ya pagaste?” / WhatsApp post-pago.

- [ ] **Step 1: `AsesoriaCta`**

```tsx
type Props = {
  meetUrl: string;
  whatsappUrl: string;
};

export default function AsesoriaCta({ meetUrl, whatsappUrl }: Props) {
  return (
    <section id="asesoria" className="scroll-mt-24 py-16">
      <h2>Habla con el asesor antes de pagar</h2>
      <p>Sesión corta por Google Meet con nuestro socio. Él te orienta y cierra contigo.</p>
      <a href={meetUrl} target="_blank" rel="noopener noreferrer">
        Entrar a la Meet con el asesor
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        Preferís WhatsApp primero
      </a>
    </section>
  );
}
```

- [ ] **Step 2:** Wire en `WebConIaView` con `WEB_CON_IA.socioCierreMeetUrl`.

- [ ] **Step 3: Commit**

```bash
git add src/components/education/AsesoriaCta.tsx
git commit -m "feat(education): partner Meet closing CTA for Web con IA"
```

> Meet del socio (cierre): [meet.google.com/yco-bujk-njw](https://meet.google.com/yco-bujk-njw) — **sin Calendly**.

---

## Task 5: View visual `WebConIaView`

**Files:**
- Create: `src/components/education/WebConIaView.tsx`
- Reuse: `EducationFrame`, patterns de `CareerPackView` pero **más comercial/gráfico** (timeline S1/S2, 3 avatares, precios 500/190, PayPal, Meet socio)

**Secciones (orden):**
1. Hero (marca + H1 keyword + CTA comprar / CTA hablar con asesor)
2. Switcher GEO
3. Para quién (A/B/C)
4. Método: cómo lo haces / explicas / vendes
5. Temario S1 / S2 (timeline)
6. Precios (500 tachado · 190 · PayPal)
7. “En vivo + replay 6 meses” (fecha COT cuando exista)
8. Ya pagaste → WhatsApp confirmación + invite repo (+ Meet live si aplica)
9. `#asesoria` Meet del socio (cierre)
10. FAQ + otros productos Education

- [ ] **Step 1: Implementar view** con props `{ copy, geo?, marketLabel? }`

- [ ] **Step 2: Smoke visual** en local (`/crear-pagina-web-con-ia`)

- [ ] **Step 3: Commit**

```bash
git add src/components/education/WebConIaView.tsx
git commit -m "feat(education): Web con IA landing view with checkout and advisory"
```

---

## Task 6: Páginas hub + GEO

**Files:**
- Create: `src/app/crear-pagina-web-con-ia/page.tsx`
- Create: `src/app/crear-pagina-web-con-ia/[geo]/page.tsx`
- Pattern: `src/app/mentorias/career-pack/page.tsx` + `[geo]/page.tsx`

- [ ] **Step 1: Hub** — `generateMetadata`, JSON-LD `Course`/`EducationEvent`, `WebConIaView`

- [ ] **Step 2: `[geo]`** — `generateStaticParams`, metadata + `alternates.languages`, `notFound` si slug inválido

- [ ] **Step 3: Verificar** rutas `/crear-pagina-web-con-ia` y `/crear-pagina-web-con-ia/co` → 200

- [ ] **Step 4: Commit**

```bash
git add src/app/crear-pagina-web-con-ia
git commit -m "feat(education): add Web con IA hub and GEO routes"
```

---

## Task 7: Sitemap, robots, hub Education, nav

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts` (si lista allow explícita)
- Modify: `src/components/education/HubView.tsx`
- Modify: `src/components/MentorshipSection.tsx` y/o Navbar
- Modify: `src/lib/education-routes.ts`

- [ ] **Step 1: Sitemap** — hub + 6 GEO (priority ~0.88)

- [ ] **Step 2: Hub Education** — card “Web con IA” junto Career Pack

- [ ] **Step 3: Nav / home strip** — link a `/crear-pagina-web-con-ia`

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/components/education/HubView.tsx src/lib/education-routes.ts src/components/MentorshipSection.tsx
git commit -m "feat(education): wire Web con IA into sitemap, hub, and nav"
```

---

## Task 8: Post-pago / ops copy (sin backend de membresía)

**Files:**
- Modify: `WebConIaView` bloque “¿Ya pagaste?”
- Optional: `src/app/crear-pagina-web-con-ia/gracias/page.tsx` (si PayPal permite return URL)

**Flujo MVP (manual Andrés/Mateo + socio):**
1. Lead habla con el **socio en Meet** (cierre) **o** paga directo PayPal  
2. Si pagó: WhatsApp “Pagué Web con IA + correo”  
3. Equipo/socio envía: fecha/hora COT del live, invite repo, link grabación (cuando exista); Meet live = sala del socio si él facilita  

- [ ] **Step 1: Bloque UI** “¿Ya pagaste?” con WhatsApp prefilled (+ Meet live si mismo URL)

- [ ] **Step 2: (Opcional)** página `/crear-pagina-web-con-ia/gracias`

- [ ] **Step 3: Commit**

---

## Task 9: SEO blogs puente (Daniela)

**Files:**
- Create: 1–2 MDX en `content/blog/`  
  - `crear-pagina-web-con-ia-sin-programar.mdx`  
  - `vender-landing-pages-con-ia-latam.mdx`  
- Enlaces internos al hub + GEO

- [ ] **Step 1: Escribir posts** con CTA a `/crear-pagina-web-con-ia` y `#asesoria` (Meet del socio)

- [ ] **Step 2: Commit**

```bash
git add content/blog/crear-pagina-web-con-ia-sin-programar.mdx content/blog/vender-landing-pages-con-ia-latam.mdx
git commit -m "content: SEO bridge posts for Web con IA webinar"
```

---

## Task 10: Verificación final

- [ ] **Step 1:** Hub 200 + GEO 200 (co, mx, pe, ar, cl, tx)  
- [ ] **Step 2:** PayPal container renderiza en browser  
- [ ] **Step 3:** `#asesoria` abre Meet del socio `yco-bujk-njw` + WhatsApp respaldo  
- [ ] **Step 4:** Bloque “¿Ya pagaste?” con WhatsApp (y Meet si aplica)  
- [ ] **Step 5:** Titles con BrandSoft Education; hreflang entre geos  
- [ ] **Step 6:** Sitemap incluye 7 URLs nuevas  

---

## Fuera de scope (MVP)

- Pasarela automática repo invite / Zoom email  
- Membresía con login  
- App de prompts versionada  
- Traducción full EN salvo copy TX  

---

## Dependencias de Mauricio (bloqueantes)

1. ~~Calendly~~ — **no aplica**; el socio cierra en Meet `yco-bujk-njw`  
2. Confirmar que PayPal button `Z8UWDTWD9ZNLW` cobra **USD 190**  
3. Fecha/hora primera cohorte (COT) para landings  
4. Cuenta GitHub del repo privado starter (invite workflow)  
5. Alinear con el **socio**: horarios en que atiende esa sala Meet

---

## Orden de ejecución recomendado

`Task 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10`

Tras aprobar este plan: ejecutar con **subagent-driven-development** o **executing-plans**.
