# Energy Family

Landing brutalista para [Energy Family](#) — box de CrossFit en Puerto Ordaz, Urb. Paratepuy.

Mobile-first, paleta negro / azul eléctrico / blanco, con animaciones minimalistas en scroll. Sin tracking, sin formularios — todo el funnel cae en WhatsApp.

---

## Stack

| Capa | Tech |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| UI | React 19 |
| Estilos | Tailwind CSS v4 + CSS modules custom |
| Componentes base | shadcn/ui (`new-york`, neutral) sobre Radix |
| Animaciones | Framer Motion 12 |
| Carousel | Embla Carousel (vía shadcn) |
| Iconos | Lucide |
| Fuente | `next/font` (Geist) |
| Tipos | TypeScript 5 |

> ⚠️ Este proyecto usa Next.js 16 con cambios de API respecto a versiones anteriores. Antes de tocar conventions, leer `node_modules/next/dist/docs/`.

---

## Scripts

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # build producción
npm run start    # servir el build
npm run lint     # ESLint
```

---

## Estructura

```
app/
  globals.css           # tokens, layout primitives, secciones brutalistas
  layout.tsx            # root layout, fuentes
  page.tsx              # landing — orquesta todas las secciones
components/
  ui/                   # shadcn primitives (button, badge, sheet, carousel)
  landing/
    nav.tsx             # nav fija + Sheet móvil con stagger
    motion.tsx          # primitivas Reveal / Stagger / StaggerItem
    gallery.tsx         # grid desktop + carousel móvil
    classes-table.tsx   # tabla desktop / cards móvil
    schedule-table.tsx  # tabla desktop / cards móvil
    pricing-card.tsx
    feature-card.tsx
    manifesto.tsx
    section-heading.tsx
    ticker.tsx
public/photos/          # fotos del box
```

---

## Sistema de diseño

### Tokens

Definidos como CSS vars en `app/globals.css:3`:

```css
--background: #0a0a0a       /* negro absoluto */
--foreground: #f5f5f5       /* blanco neutro (impacto bajo) */
--brand: #2563ff            /* azul eléctrico — acento principal */
--brand-bright: #4d7dff     /* hover */
--brand-deep: #1a44b8       /* sombras */
--block: #141414            /* card surfaces */
--muted-foreground: #7a7a7a /* texto secundario */
```

Jerarquía visual: **negro domina → azul puntúa → blanco lee**.

### Tipografía

- `--font-display` (Geist display) para headlines uppercase
- `--font-sans` para body
- `--font-mono` para meta, kickers, números, ticker

Headlines usan `clamp()` agresivo (3.5rem → 11rem) para responsive sin breakpoints.

### Animaciones

Tres primitivas en `components/landing/motion.tsx`:

| Componente | Uso |
|---|---|
| `<Reveal>` | Single element fade+y on scroll (`once: true`) |
| `<Stagger>` | Parent que coordina cascada en sus hijos |
| `<StaggerItem>` | Hijo de Stagger; hereda timing del padre |

Parámetros minimalistas: 16px translate, 600ms, ease `[0.2, 0.8, 0.2, 1]`, stagger 80ms.

Hero anima `immediate` (al montar). Resto se dispara en `whileInView` con `amount: 0.2-0.25`. Respeta `prefers-reduced-motion`.

---

## Responsive

Breakpoints Tailwind v4 default (`sm: 640`, `md: 768`, `lg: 1024`).

### Patrones móviles

- **Nav**: hamburger → `<Sheet>` lateral con stagger de links + cross-fade icon Menu↔X
- **Tablas (clases / horarios)**: tabla en `md+`, **cards apiladas** en `<md` (sin scroll horizontal)
- **Galería**: grid en `md+`, **carousel embla** en `<md` con peek 85% del siguiente slide
- **Hero**: imagen ratio `16/11` y `max-height: 60svh` en móvil; vuelve a `4/5` en `lg+`
- **Stats grid**: 2-col móvil → 4-col `md+`, borders ajustados por breakpoint

### Touch targets

Botones críticos `min-h-12` (48px). Carousel arrows `size-12` con bg sólido azul para visibilidad.

---

## Funnel

Todos los CTA principales abren WhatsApp con mensaje pre-rellenado:

```
WHATSAPP_URL = "https://wa.me/?text=Hola%20Energy%20Family%2C%20quiero..."
```

Definido en `app/page.tsx:28`. Cambiar el número agregando `<phone>` después de `wa.me/`.

---

## Deploy

Cualquier host con soporte Next.js 16 (Vercel recomendado):

```bash
npm run build
npm run start
```

No hay variables de entorno requeridas.

---

## Roadmap corto

- [ ] Reemplazar fotos placeholder en `/public/photos/`
- [ ] Conectar número real de WhatsApp
- [ ] OG image custom + meta tags por sección
- [ ] Tests visuales (Playwright) para regresiones de layout móvil
