# AGENTS.md — LIVIO Website Build Guide

## 1) Role and mission
You are building the **public commercial website for LIVIO**.

Your job is **not** to invent a new strategy, brand, or product scope. Your job is to **execute the website faithfully** based on the provided documents.

The site must communicate LIVIO as:
- a serious B2B logistics software brand,
- focused on **order, clarity, control, evidence, and daily operational closure**,
- built for **real SMEs with real operational pain**,
- and clearly differentiated from a generic route optimizer.

The website must feel:
- clear,
- sober,
- modern,
- operational,
- credible,
- and easy to understand.

---

## 2) Core project truth
The central idea of the website is:

**LIVIO brings order to the daily logistics operation of SMEs so they can delegate better, operate with visibility, and close the day with evidence and control.**

This website must **not** position LIVIO as:
- just a routing app,
- a trucking company,
- an enterprise ERP,
- a generic “AI startup”,
- or a magical automation tool.

It must position LIVIO as:
- an operational system,
- built for daily execution,
- grounded in real logistics workflows,
- simple enough to adopt,
- and strong enough to create trust.

---

## 3) Mandatory document reading order
Read the documents in this order before building anything:

1. `00_LIVIO_Organizacion_final_paquete_documental_web.docx`
2. `01_LIVIO_Brief_rector_web.docx`
3. `02_LIVIO_Identidad_verbal_y_copy_base.docx`
4. `03_LIVIO_Direccion_visual_y_sistema_de_componentes.docx`
5. `04_LIVIO_Wireframe_por_seccion.docx`
6. `05_LIVIO_Restricciones_tecnicas_e_implementacion_web.docx`

These documents are the working source of truth.

---

## 4) Authority hierarchy (what wins if documents overlap)
Use this hierarchy when two documents touch the same topic:

### A. Strategic truth
`01_LIVIO_Brief_rector_web.docx`
- This is the main strategic source.
- It defines what LIVIO is, who it serves, how it should position itself, and the structure of the site.

### B. Verbal truth
`02_LIVIO_Identidad_verbal_y_copy_base.docx`
- This governs tone of voice, copy style, claims, wording, CTA language, and messaging.
- Public-facing website copy should follow this file.

### C. Visual truth
`03_LIVIO_Direccion_visual_y_sistema_de_componentes.docx`
- This governs visual direction, color system, UI patterns, components, and design consistency.

### D. Layout truth
`04_LIVIO_Wireframe_por_seccion.docx`
- This governs section order, block composition, page structure, and narrative flow.

### E. Technical truth
`05_LIVIO_Restricciones_tecnicas_e_implementacion_web.docx`
- This governs implementation stack, architecture, technical constraints, performance, SEO, and deployment rules.

### Conflict rule
If something conflicts:
- **strategy and scope** → `01` wins,
- **copy and tone** → `02` wins,
- **design system and components** → `03` wins,
- **layout and section composition** → `04` wins,
- **technical implementation** → `05` wins.

If there is still ambiguity, choose the more conservative option and do **not** invent scope.

---

## 5) Non-negotiable project rules

### Brand name
The brand is **LIVIO**.

Do **not** surface or mix old names such as:
- CamiON
- Rumio

Old names may appear in legacy documents and history, but they must **not** leak into the final public site.

### Public language
The public-facing website copy must be in **Spanish**.

### Code language
Code structure, file naming, and component naming can stay in **English** if that improves clarity and maintainability.

### Visual identity
Do **not** default to:
- truck-heavy visuals,
- industrial transport clichés,
- aggressive startup gradients,
- overdesigned tech gimmicks.

The visual identity must communicate:
- order,
- calm operational control,
- seriousness,
- clarity,
- and usable software.

### Product truthfulness
Do **not** invent:
- fake product capabilities,
- fake metrics,
- fake clients,
- fake testimonials,
- fake integrations,
- fake traction,
- fake logos.

If proof is missing, stay simple and truthful.

### Strategic discipline
Do **not** reposition LIVIO as “just route optimization”.
The core differentiator is broader operational order:
- orders,
- planning,
- execution,
- evidence,
- closure.

---

## 6) What this website is and is not

### This website is
- a commercial marketing website,
- a trust-building B2B website,
- a lead generation site,
- a clear explanation layer for the product.

### This website is not
- the main product,
- a dashboard,
- a portal,
- an admin panel,
- a complex application,
- a CMS-first build,
- a backend-heavy system.

---

## 7) Technical stack (mandatory)
Build the website with:
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** deployment target

### Routing approach
- Use **App Router**.
- Prefer **Server Components** by default.
- Use **Client Components** only when needed.

### Avoid overengineering
Do **not** add:
- authentication,
- database layers,
- admin dashboards,
- complex CMS integration,
- multi-tenant logic,
- global state libraries unless truly necessary,
- heavy dependencies for simple UI work.

---

## 8) Required pages
At minimum, implement:
- `/`
- `/como-funciona`
- `/soluciones`
- `/nosotros`
- `/contacto`
- `/privacidad`
- `/terminos`

Do not create extra routes without a clear reason.

---

## 9) Required content behavior

### Content organization
Do not hardcode all content chaotically inside components.
Prefer a content structure such as:
- `content/navigation.ts`
- `content/home.ts`
- `content/solutions.ts`
- `content/company.ts`

The goal is to keep the copy editable without rewriting layout components.

### Copy behavior
Use the copy documents as baseline, but keep implementation readable and modular.
If exact wording needs small adjustments for layout, preserve:
- tone,
- meaning,
- promise discipline,
- and positioning.

### If something is missing
Use a clearly marked conservative placeholder or TODO.
Do not invent business claims.

---

## 10) Required visual behavior
The website must look like:
- a calm, modern B2B SaaS site,
- with a strong sense of operational clarity,
- and reusable UI structure.

It must **not** look like:
- a trucking fleet site,
- a logistics marketplace,
- a noisy AI landing page,
- or a generic enterprise consultancy page.

### Follow the provided design system
Respect:
- color palette,
- type system,
- section rhythm,
- spacing,
- cards,
- CTA hierarchy,
- UI mockup usage,
- and component consistency.

---

## 11) Required UX behavior
The site must be:
- easy to scan,
- clear in narrative progression,
- conversion-oriented,
- and comfortable in both desktop and mobile.

### Narrative flow on Home
The user should move through this logic:
1. understand what LIVIO is,
2. recognize the operational pain,
3. understand how it works,
4. see the value,
5. confirm fit,
6. trust the brand,
7. take action.

Do not break this flow with decorative sections that add no business value.

---

## 12) Form handling
The contact form is the main interactive/business feature.

### Requirements
It should include the required fields from the technical document and:
- validate properly,
- show loading state,
- show success state,
- show error state.

### Architecture rule
Keep the form implementation simple and extensible.
A minimal route handler is acceptable.
Do not build a complex backend.

---

## 13) SEO and performance are mandatory
Do not leave SEO or performance as “later work”.

### Must include
- metadata by route,
- proper page titles and descriptions,
- Open Graph basics,
- favicon,
- sitemap,
- robots,
- semantic headings,
- alt text,
- clean URLs.

### Performance rules
- optimize images,
- avoid heavy motion,
- avoid unnecessary packages,
- lazy load where appropriate,
- keep the initial experience fast.

---

## 14) Accessibility baseline
The site must maintain a serious baseline for accessibility.

At minimum:
- visible focus states,
- correct labels,
- usable contrast,
- correct semantic elements,
- keyboard-friendly interactions where applicable.

Do not trade usability for style.

---

## 15) Suggested project structure
Use the technical document as source, but this is the intended direction:

```txt
/app
  /como-funciona
  /soluciones
  /nosotros
  /contacto
  /privacidad
  /terminos
  /api/contact
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  opengraph-image.tsx

/components
  /ui
  /layout
  /sections
  /forms

/content
/lib
/public
```

Pages should compose sections, not become giant files.

---

## 16) What not to invent
Do not invent any of the following unless explicitly documented elsewhere:
- hidden product features,
- enterprise modules,
- advanced AI capabilities,
- integrations,
- pricing tables,
- case studies,
- hard numbers,
- partner logos,
- customer testimonials,
- team biographies,
- legal claims.

If the documents do not support it, do not add it.

---

## 17) First-pass implementation priorities
When building the first usable version, prioritize in this order:

1. project structure,
2. layout and visual system foundation,
3. navbar + footer,
4. Home page sections,
5. secondary pages,
6. contact form,
7. metadata + SEO technical files,
8. responsive QA,
9. performance cleanup,
10. final content cleanup.

---

## 18) Deliverable standard
A good first delivery should include:
- the required pages,
- consistent layout and components,
- brand-consistent copy,
- responsive behavior,
- a working contact form flow,
- metadata and SEO basics,
- assets organized cleanly,
- deployability on Vercel without hacks.

Optional but valuable:
- a short README explaining structure and content locations.

---

## 19) Final decision principle
When in doubt, prefer:
- simpler over more complex,
- truer over more impressive,
- clearer over cleverer,
- reusable over improvised,
- and operational credibility over visual spectacle.

The site should not feel like an agency stunt.
It should feel like a serious product for real operators.

---

## 20) Final instruction
Build LIVIO’s website as a **modular, sober, high-clarity B2B marketing site** that reflects:
- operational order,
- daily control,
- evidence-driven execution,
- and real-world simplicity.

Do not improvise the strategy.
Do not overbuild the stack.
Do not fake proof.
Do not drift from the brand.

Execute the documented vision cleanly.
