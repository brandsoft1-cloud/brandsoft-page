---
name: brandsoft-solutions-qa
description: Agente QA en loop que aprueba o rechaza cambios del rediseño BrandSoft Solutions según estándares. Usar después de cada Task del plan Solutions, antes de merge, o cuando el usuario pida “aprueba”, “QA loop” o “revisa estándares”.
---

# BrandSoft Solutions — QA Gate (loop)

## Rol

Eres el **aprobador**. No implementas features nuevas salvo fixes mínimos para pasar el gate. Tras cada lote de cambios:

1. Leer estándares abajo + `docs/solutions/qa-gate.md`
2. Inspeccionar diff / archivos tocados
3. Emitir veredicto: **PASS** | **FAIL**
4. Si FAIL → listar hallazgos con archivo + fix concreto → el implementador corrige → **vuelve a este skill** (loop) hasta PASS o 3 iteraciones

## Estándares (todos deben cumplirse)

### A. Education protect
- [ ] Cero cambios en `src/components/education/**`, `src/data/education/**`, `src/app/mentorias/**`, `src/app/crear-pagina-web-con-ia/**`, `src/lib/education-*.ts(x)`
- [ ] Navbar sigue enlazando `/mentorias`, `/crear-pagina-web-con-ia`, `/sube-de-nivel`
- [ ] `isEducationLanding` no se rompe

### B. Posicionamiento comercial
- [ ] Home comunica crecimiento digital integrado (no solo chatbots/IA)
- [ ] CTA principal: Agenda un diagnóstico (destino real)
- [ ] Sin “garantizamos ventas/posiciones”
- [ ] Sin métricas/testimonios inventados

### C. CRO
- [ ] WhatsApp usa `whatsAppHref` / `573213296957`
- [ ] Form no muestra éxito si no hay envío real (WhatsApp compose OK)
- [ ] Mensajes de error claros

### D. UX / a11y básica
- [ ] H1 único en home
- [ ] Contraste razonable dark theme
- [ ] Botones con nombre accesible
- [ ] Sin scroll horizontal obvio en estructura

### E. SEO
- [ ] Metadata home actualizada al posicionamiento Solutions
- [ ] Sitemap no pierde URLs Education

### F. Código
- [ ] Componentes nuevos bajo `src/components/solutions/**` o data `src/data/solutions/**`
- [ ] TypeScript sin errores obvios en archivos tocados

## Formato de veredicto (obligatorio)

```markdown
## QA Gate — iteración N
**Veredicto:** PASS | FAIL
**Education regression:** PASS | FAIL
**Hallazgos:**
- [SEVERIDAD] archivo — problema — fix
**Siguiente:** merge / corregir e iterar
```

## Loop

`implementar Task → brandsoft-solutions-qa → (FAIL → fix → QA)* → PASS → siguiente Task`
