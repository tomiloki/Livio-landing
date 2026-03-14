# LIVIO — Sitio web comercial

Sitio web B2B de marketing para LIVIO, software de gestión logística para pymes chilenas con flota de 1-15 vehículos. Fase pre-lanzamiento, piloto abril 2026.

**Idea fuerza:** LIVIO ordena la operación logística diaria para que una pyme pueda delegar, controlar y cerrar el día con evidencia. No vendemos rutas. Vendemos operación bajo control.

## Tech Stack
- Next.js 15 (App Router) + React + TypeScript
- Tailwind CSS
- Vercel (liviogistics.com)

## Project Structure
- `/app` — Pages y layouts (App Router). Pages livianas que componen secciones.
- `/components/ui` — Componentes reutilizables (Button, Card, Badge)
- `/components/layout` — Layout (Navbar, Footer, Container)
- `/components/sections` — Secciones de página (Hero, Problem, Benefits)
- `/components/forms` — Formularios (ContactForm)
- `/content` — Contenido estructurado: `home.ts`, `navigation.ts`
- `/public` — Assets estáticos
- `/docs` — Paquete documental del proyecto (fuente de verdad)

## Commands
- `npm run dev` — Desarrollo local (localhost:3000)
- `npm run build` — Build producción
- `npm run lint` — ESLint
- `npx tsc --noEmit` — TypeScript check

## Coding Rules
- Server Components por defecto. Client Components solo cuando haga falta.
- Tailwind CSS — no CSS custom. Paleta oficial en docs/03.
- Mobile-first. Todo debe funcionar en 375px.
- Imágenes con next/image, fuentes con next/font.
- Contenido en `/content`, separado del JSX.
- No sobreingeniería: no auth, no DB, no CMS, no admin panel.

## Brand Rules — IMPORTANT
- La marca es **LIVIO**. NUNCA usar nombres legacy: CamiON, Rumio.
- Web pública en **español**. Código en **inglés**.
- NO inventar: métricas falsas, testimonios, clientes, logos, integraciones, features no documentadas.
- NO posicionar como "app de rutas" — es un sistema operativo para logística diaria.
- Tono: simple, sobrio, confiable, directo. Con autoridad operativa, sin humo startup.
- Evitar: disrupción, revolución, game changer, ecosistema, hiperautomatización.

## Visual Identity
- Estilo: minimalismo operativo B2B. Calma operativa, no startup gritona.
- Paleta: 70% neutros, 20% primario (#16353F), 10% acento teal (#2F8F83).
- Fondos alternados: secciones oscuras (#16353F) intercaladas con claras (#F7F8F6, #FFFFFF).
- Mockups de UI deben verse como software real, construidos en JSX/Tailwind.
- Iconos: Lucide Icons exclusivamente. No emojis, no fotos stock genéricas.
- Motion: fade+slide-up en viewport, hover sutil en cards. No parallax, no loaders teatrales.

## Design Decision Hierarchy
Si hay conflicto entre documentos, resuelve así:
1. Estrategia → @docs/01_LIVIO_Brief_rector_web.md
2. Copy y tono → @docs/02_LIVIO_Identidad_verbal_y_copy_base.md
3. Visual y UI → @docs/03_LIVIO_Direccion_visual_y_sistema_de_componentes.md
4. Layout → @docs/04_LIVIO_Wireframe_por_seccion.md
5. Técnica → @docs/05_LIVIO_Restricciones_tecnicas_e_implementacion_web.md
6. Mejoras de diseño → @docs/06_LIVIO_Mejoras_diseño.md

## Key References
- @docs/06_LIVIO_Mejoras_diseño.md — Especificaciones de mejora visual pendientes (prioridad actual)
- @GETTING_STARTED.md — Setup del entorno de desarrollo
- @DEPLOYMENT.md — Flujo de deploy en Vercel
- @AUDITORIA_WEB.md — Última auditoría de cumplimiento (8 marzo 2026)

## Git Workflow
- Rama por cambio: `design/nombre-seccion` o `fix/descripcion`
- Commits descriptivos en español
- No push directo a main

## Tools disponibles
- **Playwright CLI**: Para QA visual, screenshots y testing en browser real. Comando: `playwright-cli`. Correr `npm run dev` primero.
- **frontend-design plugin**: Guía de diseño activada automáticamente. Las reglas de @docs/03 y @docs/06 tienen prioridad sobre sus sugerencias genéricas.
- **Magic UI MCP**: Para buscar componentes animados de referencia. IMPORTANTE: usar solo como inspiración o para componentes específicos que encajen con el estilo de LIVIO. No aplicar animaciones llamativas por defecto — respetar "minimalismo operativo" del doc 03 y las reglas de motion del doc 06.