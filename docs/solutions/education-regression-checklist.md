# Checklist de regresión — BrandSoft Education

Usar después de cualquier cambio en **shared-risk**: Navbar, layout, globals.css, StickyMobileCta, WhatsAppWidget, Contact, sitemap, robots, MentorshipSection, home.

Fecha: ________  PR/commit: ________

## Rutas (cargar 200, sin errores de consola críticos)

| Ruta | OK | Notas |
|------|----|-------|
| `/mentorias` | ☐ | Hub Education, frame claro |
| `/mentorias/career-pack` | ☐ | Precios/CTAs Education intactos |
| `/mentorias/producto-real` | ☐ | |
| `/mentorias/clientes-reales` | ☐ | |
| `/crear-pagina-web-con-ia` | ☐ | LatAm Meet / precios Education |
| `/crear-pagina-web-con-ia/tx` | ☐ | PayPal TX si aplica |
| `/sube-de-nivel` | ☐ | Booking mentoría |
| Un pillar p.ej. `/mentorias/ingenieria-software` | ☐ | |

## Comportamiento

| Check | OK |
|-------|----|
| Navbar en Education: enlace a hub / Sube de Nivel / Web con IA visibles | ☐ |
| `solidNav` / estilo Education no roto | ☐ |
| StickyMobileCta **oculto** en landings Education (`isEducationLanding`) | ☐ |
| WhatsAppWidget no rompe UX Education (oculto o coherente) | ☐ |
| Footer/CTA Education no redirige a “comprar Solutions” por error | ☐ |
| Sitemap sigue listando URLs Education | ☐ |

## Resultado

- [ ] **PASS** — Education intacta
- [ ] **FAIL** — revertir shared-risk antes de merge

Verificado por: ________
