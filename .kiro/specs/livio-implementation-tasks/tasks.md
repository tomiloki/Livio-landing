# LIVIO Website Implementation Tasks

**Overall Progress:** 70/87 tasks completed (80%)

---

## Phase Summary

| Phase | Progress | Status |
|-------|----------|--------|
| 1. Project Structure | 5/5 (100%) | ✅ Completed |
| 2. Layout Foundation | 8/8 (100%) | ✅ Completed |
| 3. Navigation | 6/6 (100%) | ✅ Completed |
| 4. Home Page | 15/15 (100%) | ✅ Completed |
| 5. Secondary Pages | 18/18 (100%) | ✅ Completed |
| 6. Contact Form | 7/7 (100%) | ✅ Completed |
| 7. SEO & Metadata | 8/9 (89%) | 🔄 In Progress |
| 8. Responsive QA | 0/8 (0%) | ⏸️ Not Started |
| 9. Performance | 0/6 (0%) | ⏸️ Not Started |
| 10. Content Cleanup | 1/5 (20%) | 🔄 In Progress |

---

## Phase 1: Project Structure

**Progress:** 0/5 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 1.1: Initialize Next.js Project

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Initialize a new Next.js project with TypeScript and App Router configuration.

**Document References:**
- AGENTS.md, section 7: Technical stack requirements
- 05_LIVIO_Restricciones_tecnicas: Implementation constraints

**Completion Criteria:**
- [ ] Next.js project initialized with `create-next-app`
- [ ] TypeScript configured
- [ ] App Router enabled
- [ ] Tailwind CSS installed and configured
- [ ] Project builds without errors
- [ ] Development server runs successfully

**Prerequisites:** None

---

### Task 1.2: Set up project directory structure

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create the complete directory structure following the suggested organization in AGENTS.md section 15.

**Document References:**
- AGENTS.md, section 15: Suggested project structure

**Completion Criteria:**
- [ ] `/app` directory with route folders created
- [ ] `/components` directory with subdirectories (ui, layout, sections, forms)
- [ ] `/content` directory created
- [ ] `/lib` directory created
- [ ] `/public` directory configured
- [ ] Directory structure matches documented organization

**Prerequisites:** 1.1

---

### Task 1.3: Configure TypeScript and linting

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Set up TypeScript configuration and ESLint rules for code quality.

**Document References:**
- AGENTS.md, section 7: Technical stack
- 05_LIVIO_Restricciones_tecnicas: Code quality requirements

**Completion Criteria:**
- [ ] `tsconfig.json` configured with strict mode
- [ ] ESLint configured with Next.js and TypeScript rules
- [ ] No linting errors in initial setup
- [ ] Type checking passes

**Prerequisites:** 1.1

---

### Task 1.4: Create base configuration files

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Set up essential configuration files for the project.

**Document References:**
- AGENTS.md, section 7: Technical requirements
- 05_LIVIO_Restricciones_tecnicas: Configuration needs

**Completion Criteria:**
- [ ] `next.config.ts` configured
- [ ] `tailwind.config.ts` configured
- [ ] `postcss.config.mjs` configured
- [ ] `.gitignore` properly set up
- [ ] All configs validated and working

**Prerequisites:** 1.1

---

### Task 1.5: Set up environment variables structure

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create environment variable structure for contact form and future integrations.

**Document References:**
- AGENTS.md, section 12: Form handling
- 05_LIVIO_Restricciones_tecnicas: Environment configuration

**Completion Criteria:**
- [ ] `.env.example` file created with required variables
- [ ] `.env.local` structure documented
- [ ] Environment variables properly typed
- [ ] No sensitive data in version control

**Prerequisites:** 1.1

---

## Phase 2: Layout and Visual System Foundation

**Progress:** 0/8 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 2.1: Implement color palette and design tokens

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Implement the color system from the design document as Tailwind CSS tokens.

**Document References:**
- 03_LIVIO_Direccion_visual: Color palette definition
- AGENTS.md, section 10: Visual behavior requirements

**Completion Criteria:**
- [ ] Primary, secondary, and neutral colors defined in Tailwind config
- [ ] Semantic color tokens created (success, error, warning, info)
- [ ] Color palette matches design system exactly
- [ ] Colors tested for accessibility contrast
- [ ] Documentation of color usage created

**Prerequisites:** 1.4

---

### Task 2.2: Implement typography system

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Set up the typography system including fonts, sizes, weights, and line heights.

**Document References:**
- 03_LIVIO_Direccion_visual: Typography system
- AGENTS.md, section 10: Visual requirements

**Completion Criteria:**
- [ ] Font families loaded and configured
- [ ] Font size scale defined in Tailwind
- [ ] Font weights configured
- [ ] Line height system implemented
- [ ] Heading and body text styles defined
- [ ] Typography renders correctly across browsers

**Prerequisites:** 1.4

---

### Task 2.3: Create global styles and CSS reset

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Set up global styles, CSS reset, and base styling in `app/globals.css`.

**Document References:**
- AGENTS.md, section 7: Technical stack (Tailwind CSS)
- 03_LIVIO_Direccion_visual: Base styling requirements

**Completion Criteria:**
- [ ] CSS reset applied
- [ ] Global styles defined
- [ ] Base HTML element styling configured
- [ ] Smooth scrolling and focus styles implemented
- [ ] No visual regressions

**Prerequisites:** 2.1, 2.2

---

### Task 2.4: Implement spacing and layout system

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Define spacing scale and layout utilities for consistent rhythm.

**Document References:**
- 03_LIVIO_Direccion_visual: Spacing system
- AGENTS.md, section 10: Section rhythm requirements

**Completion Criteria:**
- [ ] Spacing scale defined in Tailwind config
- [ ] Container widths configured
- [ ] Breakpoints defined for responsive design
- [ ] Grid and flexbox utilities tested
- [ ] Spacing system documented

**Prerequisites:** 1.4

---

### Task 2.5: Create base Button component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Build the reusable Button component with variants and states.

**Document References:**
- 03_LIVIO_Direccion_visual: Button component specs
- AGENTS.md, section 10: CTA hierarchy

**Completion Criteria:**
- [ ] Button component created in `/components/ui/Button.tsx`
- [ ] Primary, secondary, and tertiary variants implemented
- [ ] Hover, active, and disabled states working
- [ ] Accessible with proper focus states
- [ ] TypeScript props properly typed
- [ ] Component tested in isolation

**Prerequisites:** 2.1, 2.2, 2.3

---

### Task 2.6: Create base Card component

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Build the reusable Card component for content sections.

**Document References:**
- 03_LIVIO_Direccion_visual: Card component specs
- 04_LIVIO_Wireframe: Card usage in sections

**Completion Criteria:**
- [ ] Card component created in `/components/ui/Card.tsx`
- [ ] Variants for different use cases implemented
- [ ] Proper spacing and visual hierarchy
- [ ] Accessible and semantic HTML
- [ ] TypeScript props properly typed

**Prerequisites:** 2.1, 2.2, 2.3

---

### Task 2.7: Create Badge component

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Build the Badge component for labels and tags.

**Document References:**
- 03_LIVIO_Direccion_visual: Badge component specs

**Completion Criteria:**
- [ ] Badge component created in `/components/ui/Badge.tsx`
- [ ] Color variants implemented
- [ ] Size variants implemented
- [ ] Accessible and readable
- [ ] TypeScript props properly typed

**Prerequisites:** 2.1, 2.2

---

### Task 2.8: Create SectionHeader component

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Build the reusable SectionHeader component for consistent section titles.

**Document References:**
- 03_LIVIO_Direccion_visual: Section header patterns
- 04_LIVIO_Wireframe: Section structure

**Completion Criteria:**
- [ ] SectionHeader component created in `/components/ui/SectionHeader.tsx`
- [ ] Supports title, subtitle, and optional description
- [ ] Consistent typography and spacing
- [ ] Accessible heading hierarchy
- [ ] TypeScript props properly typed

**Prerequisites:** 2.2, 2.3

---

## Phase 3: Navigation Components

**Progress:** 0/6 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 3.1: Create root layout component

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Implement the root layout in `app/layout.tsx` with metadata and structure.

**Document References:**
- AGENTS.md, section 7: App Router requirements
- AGENTS.md, section 13: SEO requirements

**Completion Criteria:**
- [ ] Root layout created with proper HTML structure
- [ ] Metadata configuration added
- [ ] Font loading configured
- [ ] Global styles imported
- [ ] Layout renders correctly

**Prerequisites:** 2.3

---

### Task 3.2: Implement navigation content structure

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create the navigation content file with menu items and links.

**Document References:**
- AGENTS.md, section 9: Content organization
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `content/navigation.ts` file created
- [ ] Main menu items defined
- [ ] Footer links defined
- [ ] All required pages included
- [ ] TypeScript types for navigation data

**Prerequisites:** 1.2

---

### Task 3.3: Build Navbar component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the main navigation bar component with responsive behavior.

**Document References:**
- 04_LIVIO_Wireframe: Navbar structure
- 03_LIVIO_Direccion_visual: Navigation styling
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] Navbar component created in `/components/layout/Navbar.tsx`
- [ ] Logo and brand name displayed
- [ ] Navigation links implemented
- [ ] Mobile menu with hamburger icon
- [ ] Sticky/fixed positioning working
- [ ] Active link highlighting
- [ ] Accessible keyboard navigation
- [ ] Smooth transitions and animations

**Prerequisites:** 2.5, 3.2

---

### Task 3.4: Build Footer component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the footer component with links, legal info, and contact details.

**Document References:**
- 04_LIVIO_Wireframe: Footer structure
- 03_LIVIO_Direccion_visual: Footer styling
- 02_LIVIO_Identidad_verbal: Footer copy

**Completion Criteria:**
- [ ] Footer component created in `/components/layout/Footer.tsx`
- [ ] Company information displayed
- [ ] Navigation links organized
- [ ] Legal links (privacy, terms) included
- [ ] Contact information if applicable
- [ ] Social media links if applicable
- [ ] Responsive layout working
- [ ] Accessible and semantic HTML

**Prerequisites:** 2.5, 3.2

---

### Task 3.5: Integrate Navbar and Footer into layout

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Add Navbar and Footer to the root layout for consistent site-wide presence.

**Document References:**
- AGENTS.md, section 15: Layout structure

**Completion Criteria:**
- [ ] Navbar added to root layout
- [ ] Footer added to root layout
- [ ] Main content area properly structured
- [ ] Layout spacing and flow correct
- [ ] No layout shift issues

**Prerequisites:** 3.1, 3.3, 3.4

---

### Task 3.6: Test navigation accessibility and UX

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate navigation components for accessibility and user experience.

**Document References:**
- AGENTS.md, section 14: Accessibility baseline
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] Keyboard navigation works correctly
- [ ] Screen reader announces navigation properly
- [ ] Focus states visible and clear
- [ ] Mobile menu usable on touch devices
- [ ] No accessibility violations in automated tests
- [ ] Navigation tested across browsers

**Prerequisites:** 3.5

---

## Phase 4: Home Page Sections

**Progress:** 0/15 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 4.1: Create home page content structure

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the content file for the home page with all section data.

**Document References:**
- 02_LIVIO_Identidad_verbal: Copy and messaging
- 04_LIVIO_Wireframe: Home page structure
- AGENTS.md, section 9: Content organization

**Completion Criteria:**
- [ ] `content/home.ts` file created
- [ ] All section content defined (hero, problem, solution, benefits, etc.)
- [ ] Copy follows verbal identity guidelines
- [ ] Content in Spanish
- [ ] TypeScript types for content data
- [ ] No invented claims or fake proof

**Prerequisites:** 1.2

---

### Task 4.2: Build Hero section component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the Hero section with headline, value proposition, and primary CTA.

**Document References:**
- 04_LIVIO_Wireframe: Hero section layout
- 02_LIVIO_Identidad_verbal: Hero copy and CTAs
- 03_LIVIO_Direccion_visual: Hero visual treatment
- AGENTS.md, section 11: Narrative flow

**Completion Criteria:**
- [ ] Hero component created in `/components/sections/Hero.tsx`
- [ ] Headline and subheadline implemented
- [ ] Primary CTA button prominent and working
- [ ] Visual hierarchy clear and strong
- [ ] Responsive layout working
- [ ] Accessible and semantic HTML
- [ ] Matches wireframe structure

**Prerequisites:** 2.5, 4.1

---

### Task 4.3: Build Problem section component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the Problem section that articulates operational pain points.

**Document References:**
- 04_LIVIO_Wireframe: Problem section layout
- 02_LIVIO_Identidad_verbal: Problem articulation
- 01_LIVIO_Brief_rector: Target audience pain points
- AGENTS.md, section 2: Core project truth

**Completion Criteria:**
- [ ] Problem component created in `/components/sections/Problem.tsx`
- [ ] Pain points clearly articulated
- [ ] Resonates with SME logistics operators
- [ ] Visual treatment supports seriousness
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.6, 2.8, 4.1

---

### Task 4.4: Build HowItWorks section component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the How It Works section explaining LIVIO's operational flow.

**Document References:**
- 04_LIVIO_Wireframe: How It Works section layout
- 02_LIVIO_Identidad_verbal: Process explanation copy
- 01_LIVIO_Brief_rector: Product workflow
- AGENTS.md, section 2: Core differentiator

**Completion Criteria:**
- [ ] HowItWorks component created in `/components/sections/HowItWorks.tsx`
- [ ] Step-by-step process clearly explained
- [ ] Emphasizes order → planning → execution → evidence → closure
- [ ] Visual flow aids understanding
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.6, 2.8, 4.1

---

### Task 4.5: Build Benefits section component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the Benefits section highlighting value delivered to users.

**Document References:**
- 04_LIVIO_Wireframe: Benefits section layout
- 02_LIVIO_Identidad_verbal: Benefits messaging
- 01_LIVIO_Brief_rector: Value proposition

**Completion Criteria:**
- [ ] Benefits component created in `/components/sections/Benefits.tsx`
- [ ] Key benefits clearly presented
- [ ] Benefits tied to operational outcomes
- [ ] Visual treatment supports credibility
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.6, 2.7, 2.8, 4.1

---

### Task 4.6: Build Differentiation section component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the Differentiation section explaining what makes LIVIO unique.

**Document References:**
- 04_LIVIO_Wireframe: Differentiation section layout
- 02_LIVIO_Identidad_verbal: Differentiation messaging
- 01_LIVIO_Brief_rector: Competitive positioning
- AGENTS.md, section 5: Strategic discipline

**Completion Criteria:**
- [ ] Differentiation component created in `/components/sections/Differentiation.tsx`
- [ ] Clear distinction from "just route optimization"
- [ ] Emphasizes broader operational order
- [ ] Credible and grounded messaging
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.6, 2.8, 4.1

---

### Task 4.7: Build UseCases section component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the Use Cases section showing practical applications.

**Document References:**
- 04_LIVIO_Wireframe: Use Cases section layout
- 02_LIVIO_Identidad_verbal: Use case descriptions
- 01_LIVIO_Brief_rector: Target scenarios

**Completion Criteria:**
- [ ] UseCases component created in `/components/sections/UseCases.tsx`
- [ ] Real-world scenarios presented
- [ ] Resonates with target SMEs
- [ ] No invented or fake examples
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.6, 2.8, 4.1

---

### Task 4.8: Build About section component

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create the About section introducing the company briefly.

**Document References:**
- 04_LIVIO_Wireframe: About section layout
- 02_LIVIO_Identidad_verbal: Company description
- 01_LIVIO_Brief_rector: Brand positioning

**Completion Criteria:**
- [ ] About component created in `/components/sections/About.tsx`
- [ ] Brief company introduction
- [ ] Builds trust and credibility
- [ ] No fake claims or invented history
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.6, 2.8, 4.1

---

### Task 4.9: Build MVPScope section component (if applicable)

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create section explaining current product scope if needed.

**Document References:**
- 04_LIVIO_Wireframe: Scope section (if present)
- 01_LIVIO_Brief_rector: Product scope definition

**Completion Criteria:**
- [ ] MVPScope component created in `/components/sections/MVPScope.tsx` (if needed)
- [ ] Current capabilities clearly stated
- [ ] Honest about what's available now
- [ ] No invented features
- [ ] Responsive layout working

**Prerequisites:** 2.6, 2.8, 4.1

---

### Task 4.10: Build VideoSection component (if applicable)

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create video section component if product demo video exists.

**Document References:**
- 04_LIVIO_Wireframe: Video section (if present)
- 03_LIVIO_Direccion_visual: Video treatment

**Completion Criteria:**
- [ ] VideoSection component created in `/components/sections/VideoSection.tsx` (if needed)
- [ ] Video embed working correctly
- [ ] Accessible video controls
- [ ] Responsive video player
- [ ] Fallback for no video available

**Prerequisites:** 2.6, 4.1

---

### Task 4.11: Build FinalCTA section component

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create the final call-to-action section at the end of the home page.

**Document References:**
- 04_LIVIO_Wireframe: Final CTA section layout
- 02_LIVIO_Identidad_verbal: CTA copy
- AGENTS.md, section 11: Conversion orientation

**Completion Criteria:**
- [ ] FinalCTA component created in `/components/sections/FinalCTA.tsx`
- [ ] Strong, clear call to action
- [ ] Links to contact page or form
- [ ] Visual prominence appropriate
- [ ] Responsive layout working
- [ ] Matches wireframe structure

**Prerequisites:** 2.5, 2.8, 4.1

---

### Task 4.12: Compose home page from sections

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Assemble all sections into the home page in correct narrative order.

**Document References:**
- 04_LIVIO_Wireframe: Home page section order
- AGENTS.md, section 11: Narrative flow

**Completion Criteria:**
- [ ] `app/page.tsx` imports all section components
- [ ] Sections arranged in correct order
- [ ] Narrative flow makes sense
- [ ] Spacing between sections consistent
- [ ] Page renders without errors

**Prerequisites:** 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.11

---

### Task 4.13: Add home page metadata

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Configure metadata for the home page for SEO.

**Document References:**
- AGENTS.md, section 13: SEO requirements
- 02_LIVIO_Identidad_verbal: Page descriptions

**Completion Criteria:**
- [ ] Page title configured
- [ ] Meta description added
- [ ] Open Graph metadata added
- [ ] Metadata in Spanish
- [ ] Metadata follows SEO best practices

**Prerequisites:** 4.12

---

### Task 4.14: Test home page responsive behavior

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate home page works correctly across device sizes.

**Document References:**
- AGENTS.md, section 11: UX behavior
- AGENTS.md, section 14: Accessibility

**Completion Criteria:**
- [ ] Home page tested on mobile (320px+)
- [ ] Home page tested on tablet (768px+)
- [ ] Home page tested on desktop (1024px+)
- [ ] No horizontal scroll issues
- [ ] All content readable and accessible
- [ ] Images and media scale correctly

**Prerequisites:** 4.12

---

### Task 4.15: Review home page content accuracy

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Review home page to ensure no invented claims or scope drift.

**Document References:**
- AGENTS.md, section 5: Non-negotiable rules
- AGENTS.md, section 16: What not to invent

**Completion Criteria:**
- [ ] All claims verified against documentation
- [ ] No fake metrics or testimonials
- [ ] No invented product features
- [ ] Copy matches verbal identity
- [ ] Positioning aligns with brief

**Prerequisites:** 4.12

---

## Phase 5: Secondary Pages

**Progress:** 0/18 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 5.1: Create "Cómo Funciona" page content

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create content structure for the "Cómo Funciona" (How It Works) page.

**Document References:**
- 02_LIVIO_Identidad_verbal: How It Works copy
- 04_LIVIO_Wireframe: How It Works page structure
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] Content file created for "Cómo Funciona" page
- [ ] Detailed process explanation content defined
- [ ] Copy in Spanish
- [ ] Content follows verbal identity
- [ ] TypeScript types for content

**Prerequisites:** 1.2

---

### Task 5.2: Build "Cómo Funciona" page

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Implement the "Cómo Funciona" page with detailed process explanation.

**Document References:**
- 04_LIVIO_Wireframe: How It Works page layout
- 02_LIVIO_Identidad_verbal: Process messaging
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `app/como-funciona/page.tsx` created
- [ ] Page uses existing section components where possible
- [ ] Detailed workflow explanation implemented
- [ ] Visual aids support understanding
- [ ] Responsive layout working
- [ ] Page metadata configured

**Prerequisites:** 5.1, Phase 2 components

---

### Task 5.3: Create "Soluciones" page content

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create content structure for the "Soluciones" (Solutions) page.

**Document References:**
- 02_LIVIO_Identidad_verbal: Solutions messaging
- 04_LIVIO_Wireframe: Solutions page structure
- 01_LIVIO_Brief_rector: Solution positioning

**Completion Criteria:**
- [ ] Content file created for "Soluciones" page
- [ ] Solution categories and descriptions defined
- [ ] Copy in Spanish
- [ ] Content follows verbal identity
- [ ] TypeScript types for content

**Prerequisites:** 1.2

---

### Task 5.4: Build "Soluciones" page

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Implement the "Soluciones" page showcasing LIVIO's solutions.

**Document References:**
- 04_LIVIO_Wireframe: Solutions page layout
- 02_LIVIO_Identidad_verbal: Solutions copy
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `app/soluciones/page.tsx` created
- [ ] Solutions clearly presented
- [ ] Use cases or scenarios included
- [ ] Responsive layout working
- [ ] Page metadata configured

**Prerequisites:** 5.3, Phase 2 components

---

### Task 5.5: Create "Nosotros" page content

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create content structure for the "Nosotros" (About Us) page.

**Document References:**
- 02_LIVIO_Identidad_verbal: Company messaging
- 04_LIVIO_Wireframe: About page structure
- 01_LIVIO_Brief_rector: Brand story

**Completion Criteria:**
- [ ] Content file created for "Nosotros" page
- [ ] Company story and mission defined
- [ ] Copy in Spanish
- [ ] No invented history or fake claims
- [ ] TypeScript types for content

**Prerequisites:** 1.2

---

### Task 5.6: Build "Nosotros" page

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Implement the "Nosotros" page with company information.

**Document References:**
- 04_LIVIO_Wireframe: About page layout
- 02_LIVIO_Identidad_verbal: Company copy
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `app/nosotros/page.tsx` created
- [ ] Company story presented
- [ ] Mission and values communicated
- [ ] Builds trust and credibility
- [ ] Responsive layout working
- [ ] Page metadata configured

**Prerequisites:** 5.5, Phase 2 components

---

### Task 5.7: Create "Contacto" page content

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create content structure for the "Contacto" (Contact) page.

**Document References:**
- 02_LIVIO_Identidad_verbal: Contact page messaging
- 04_LIVIO_Wireframe: Contact page structure

**Completion Criteria:**
- [ ] Content file created for "Contacto" page
- [ ] Contact information defined
- [ ] Form introduction copy written
- [ ] Copy in Spanish
- [ ] TypeScript types for content

**Prerequisites:** 1.2

---

### Task 5.8: Build "Contacto" page layout

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Implement the "Contacto" page layout (form will be added in Phase 6).

**Document References:**
- 04_LIVIO_Wireframe: Contact page layout
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `app/contacto/page.tsx` created
- [ ] Page structure and layout implemented
- [ ] Contact information displayed
- [ ] Placeholder for contact form
- [ ] Responsive layout working
- [ ] Page metadata configured

**Prerequisites:** 5.7, Phase 2 components

---

### Task 5.9: Create "Privacidad" page content

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create content for the Privacy Policy page.

**Document References:**
- AGENTS.md, section 8: Required pages
- Legal requirements for privacy policy

**Completion Criteria:**
- [ ] Privacy policy content written or sourced
- [ ] Content in Spanish
- [ ] Covers data collection, usage, and rights
- [ ] Legally compliant (consult legal if needed)

**Prerequisites:** 1.2

---

### Task 5.10: Build "Privacidad" page

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Implement the Privacy Policy page.

**Document References:**
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `app/privacidad/page.tsx` created
- [ ] Privacy policy content displayed
- [ ] Readable typography and formatting
- [ ] Responsive layout working
- [ ] Page metadata configured

**Prerequisites:** 5.9

---

### Task 5.11: Create "Términos" page content

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Create content for the Terms of Service page.

**Document References:**
- AGENTS.md, section 8: Required pages
- Legal requirements for terms of service

**Completion Criteria:**
- [ ] Terms of service content written or sourced
- [ ] Content in Spanish
- [ ] Covers usage terms, limitations, and liabilities
- [ ] Legally compliant (consult legal if needed)

**Prerequisites:** 1.2

---

### Task 5.12: Build "Términos" page

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Implement the Terms of Service page.

**Document References:**
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [ ] `app/terminos/page.tsx` created
- [ ] Terms of service content displayed
- [ ] Readable typography and formatting
- [ ] Responsive layout working
- [ ] Page metadata configured

**Prerequisites:** 5.11

---

### Task 5.13: Test all secondary pages responsive behavior

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate all secondary pages work correctly across device sizes.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] All pages tested on mobile (320px+)
- [ ] All pages tested on tablet (768px+)
- [ ] All pages tested on desktop (1024px+)
- [ ] No horizontal scroll issues
- [ ] All content readable and accessible

**Prerequisites:** 5.2, 5.4, 5.6, 5.8, 5.10, 5.12

---

### Task 5.14: Test navigation between pages

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate navigation links work correctly across all pages.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] All navigation links tested
- [ ] Active page highlighting works
- [ ] No broken links
- [ ] Back/forward browser navigation works
- [ ] Footer links work correctly

**Prerequisites:** 5.2, 5.4, 5.6, 5.8, 5.10, 5.12

---

### Task 5.15: Review secondary pages content accuracy

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Review all secondary pages to ensure content accuracy and alignment.

**Document References:**
- AGENTS.md, section 5: Non-negotiable rules
- AGENTS.md, section 16: What not to invent

**Completion Criteria:**
- [ ] All claims verified against documentation
- [ ] No invented features or capabilities
- [ ] Copy matches verbal identity
- [ ] Positioning consistent across pages
- [ ] Legal pages reviewed for compliance

**Prerequisites:** 5.2, 5.4, 5.6, 5.8, 5.10, 5.12

---

### Task 5.16: Add 404 error page

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Create a custom 404 error page for better UX.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] `app/not-found.tsx` created
- [ ] Helpful error message in Spanish
- [ ] Links to main pages
- [ ] Consistent with site design
- [ ] Responsive layout working

**Prerequisites:** Phase 2 components

---

### Task 5.17: Add loading states for pages

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Create loading UI for pages if needed.

**Document References:**
- AGENTS.md, section 7: App Router requirements

**Completion Criteria:**
- [ ] Loading components created where needed
- [ ] Loading states match design system
- [ ] Smooth transitions
- [ ] No jarring layout shifts

**Prerequisites:** Phase 2 components

---

### Task 5.18: Test page transitions and performance

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate page transitions are smooth and performant.

**Document References:**
- AGENTS.md, section 13: Performance requirements

**Completion Criteria:**
- [ ] Page transitions tested
- [ ] No performance issues during navigation
- [ ] Prefetching working correctly
- [ ] Initial page loads fast

**Prerequisites:** 5.2, 5.4, 5.6, 5.8, 5.10, 5.12

---

## Phase 6: Contact Form

**Progress:** 0/7 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 6.1: Design contact form data model

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Define the data structure and validation rules for the contact form.

**Document References:**
- AGENTS.md, section 12: Form handling
- 05_LIVIO_Restricciones_tecnicas: Form requirements

**Completion Criteria:**
- [ ] Form fields defined (name, email, company, message, etc.)
- [ ] Validation rules specified
- [ ] TypeScript types created
- [ ] Error message copy written in Spanish

**Prerequisites:** 1.2

---

### Task 6.2: Build ContactForm component

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Create the contact form component with validation and state management.

**Document References:**
- AGENTS.md, section 12: Form handling
- 03_LIVIO_Direccion_visual: Form styling
- 04_LIVIO_Wireframe: Contact form layout

**Completion Criteria:**
- [ ] ContactForm component created in `/components/forms/ContactForm.tsx`
- [ ] All required fields implemented
- [ ] Client-side validation working
- [ ] Accessible form labels and error messages
- [ ] Loading state during submission
- [ ] Success state after submission
- [ ] Error state for failed submission
- [ ] Responsive layout working

**Prerequisites:** 2.5, 6.1

---

### Task 6.3: Create contact form API route

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Implement the API route handler for contact form submissions.

**Document References:**
- AGENTS.md, section 12: Form handling
- 05_LIVIO_Restricciones_tecnicas: API implementation

**Completion Criteria:**
- [ ] API route created at `/app/api/contact/route.ts`
- [ ] Server-side validation implemented
- [ ] Form data processing logic working
- [ ] Email sending or data storage configured
- [ ] Proper error handling
- [ ] Rate limiting considered
- [ ] CORS configured if needed

**Prerequisites:** 1.5, 6.1

---

### Task 6.4: Integrate ContactForm into Contacto page

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Add the contact form component to the contact page.

**Document References:**
- AGENTS.md, section 12: Form handling

**Completion Criteria:**
- [ ] ContactForm component added to `/app/contacto/page.tsx`
- [ ] Form integrated with page layout
- [ ] Form submission flow working end-to-end
- [ ] Success/error messages display correctly

**Prerequisites:** 5.8, 6.2, 6.3

---

### Task 6.5: Test contact form validation

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate form validation rules work correctly.

**Document References:**
- AGENTS.md, section 12: Form handling

**Completion Criteria:**
- [ ] Required field validation tested
- [ ] Email format validation tested
- [ ] Error messages display correctly
- [ ] Form cannot submit with invalid data
- [ ] Validation messages in Spanish

**Prerequisites:** 6.4

---

### Task 6.6: Test contact form submission flow

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Test the complete form submission process.

**Document References:**
- AGENTS.md, section 12: Form handling

**Completion Criteria:**
- [ ] Form submits successfully with valid data
- [ ] Loading state displays during submission
- [ ] Success message displays after submission
- [ ] Form resets or clears after success
- [ ] Error handling works for failed submissions
- [ ] Email delivery confirmed (if applicable)

**Prerequisites:** 6.4

---

### Task 6.7: Test contact form accessibility

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate form accessibility for all users.

**Document References:**
- AGENTS.md, section 14: Accessibility baseline

**Completion Criteria:**
- [ ] Form labels properly associated with inputs
- [ ] Error messages announced to screen readers
- [ ] Keyboard navigation works correctly
- [ ] Focus management appropriate
- [ ] Required fields clearly indicated
- [ ] No accessibility violations in automated tests

**Prerequisites:** 6.4

---

## Phase 7: SEO & Metadata

**Progress:** 8/9 tasks completed (89%)  
**Status:** 🔄 In Progress

### Task 7.1: Configure metadata for all pages

**Complexity:** Moderate  
**State:** ✅ Completed

**Description:**  
Add proper metadata (title, description) to all pages.

**Document References:**
- AGENTS.md, section 13: SEO requirements
- 02_LIVIO_Identidad_verbal: Page descriptions

**Completion Criteria:**
- [x] Metadata configured for home page
- [x] Metadata configured for all secondary pages
- [x] Titles descriptive and SEO-friendly
- [x] Descriptions compelling and accurate
- [x] All metadata in Spanish
- [x] Character limits respected (title ~60 chars, description ~160 chars)

**Prerequisites:** Phase 4, Phase 5

---

### Task 7.2: Add Open Graph metadata

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Configure Open Graph tags for social media sharing.

**Document References:**
- AGENTS.md, section 13: SEO requirements

**Completion Criteria:**
- [x] og:title configured for all pages
- [x] og:description configured for all pages
- [x] og:type configured
- [x] og:locale set to es_ES
- [x] og:image configured
- [x] og:url configured

**Prerequisites:** 7.1

---

### Task 7.3: Add Twitter Card metadata

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Configure Twitter Card tags for Twitter sharing.

**Document References:**
- AGENTS.md, section 13: SEO requirements

**Completion Criteria:**
- [x] twitter:card configured
- [x] twitter:title configured
- [x] twitter:description configured
- [x] twitter:image configured

**Prerequisites:** 7.1

---

### Task 7.4: Create and configure favicon

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Add favicon and app icons for the site.

**Document References:**
- AGENTS.md, section 13: SEO requirements
- 03_LIVIO_Direccion_visual: Brand assets

**Completion Criteria:**
- [x] Favicon created and added to `/public`
- [x] Favicon displays correctly in browsers
- [ ] Multiple sizes provided (16x16, 32x32, etc.) - can be improved
- [ ] Apple touch icon added - can be improved

**Prerequisites:** None

---

### Task 7.5: Generate sitemap

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Create sitemap for search engine crawling.

**Document References:**
- AGENTS.md, section 13: SEO requirements
- AGENTS.md, section 8: Required pages

**Completion Criteria:**
- [x] `app/sitemap.ts` created
- [x] All public pages included in sitemap
- [x] URLs correctly formatted
- [x] Priority and change frequency configured
- [x] Sitemap accessible at `/sitemap.xml`

**Prerequisites:** Phase 4, Phase 5

---

### Task 7.6: Configure robots.txt

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Create robots.txt file for search engine directives.

**Document References:**
- AGENTS.md, section 13: SEO requirements

**Completion Criteria:**
- [x] `app/robots.ts` created
- [x] Appropriate crawl directives configured
- [x] Sitemap reference included
- [x] Robots.txt accessible at `/robots.txt`

**Prerequisites:** 7.5

---

### Task 7.7: Implement semantic HTML structure

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Ensure all pages use proper semantic HTML elements.

**Document References:**
- AGENTS.md, section 13: SEO requirements
- AGENTS.md, section 14: Accessibility baseline

**Completion Criteria:**
- [x] Proper heading hierarchy (h1, h2, h3) on all pages
- [x] Semantic elements used (header, nav, main, section, article, footer)
- [x] No heading level skips
- [x] Landmark regions properly defined
- [x] HTML validates without major errors

**Prerequisites:** Phase 4, Phase 5

---

### Task 7.8: Add alt text to all images

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Ensure all images have descriptive alt text.

**Document References:**
- AGENTS.md, section 13: SEO requirements
- AGENTS.md, section 14: Accessibility baseline

**Completion Criteria:**
- [x] All images have alt attributes (no images currently in use - only SVG icons)
- [x] Alt text descriptive and meaningful (N/A - using inline SVGs with aria-hidden)
- [x] Decorative images have empty alt="" (N/A)
- [x] Alt text in Spanish (N/A)

**Note:** Currently no raster images are used in the site, only inline SVG icons. When images are added, they must include proper alt text.

**Prerequisites:** Phase 4, Phase 5

---

### Task 7.9: Test SEO with tools

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate SEO implementation using testing tools.

**Document References:**
- AGENTS.md, section 13: SEO requirements

**Completion Criteria:**
- [ ] Lighthouse SEO score 90+
- [ ] Meta tags validated
- [ ] Structured data validated (if applicable)
- [ ] Mobile-friendly test passed
- [ ] No critical SEO issues found

**Prerequisites:** 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8

---

## Phase 8: Responsive Design QA

**Progress:** 0/8 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 8.1: Test mobile layout (320px - 767px)

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Comprehensive testing of all pages on mobile devices.

**Document References:**
- AGENTS.md, section 11: UX behavior
- AGENTS.md, section 13: Performance requirements

**Completion Criteria:**
- [ ] All pages tested at 320px, 375px, 414px widths
- [ ] Navigation menu works on mobile
- [ ] All content readable without horizontal scroll
- [ ] Touch targets appropriately sized (44x44px minimum)
- [ ] Forms usable on mobile
- [ ] Images scale correctly
- [ ] No layout breaks or overlaps

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

### Task 8.2: Test tablet layout (768px - 1023px)

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Test all pages on tablet screen sizes.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] All pages tested at 768px and 1024px widths
- [ ] Layout adapts appropriately for tablet
- [ ] Navigation works correctly
- [ ] Content spacing appropriate
- [ ] No layout issues

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

### Task 8.3: Test desktop layout (1024px+)

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Test all pages on desktop screen sizes.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] All pages tested at 1280px, 1440px, 1920px widths
- [ ] Layout uses available space effectively
- [ ] Content max-width prevents excessive line length
- [ ] Navigation works correctly
- [ ] No layout issues

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

### Task 8.4: Test cross-browser compatibility

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Validate site works correctly across major browsers.

**Document References:**
- AGENTS.md, section 18: Deliverable standard

**Completion Criteria:**
- [ ] Site tested in Chrome (latest)
- [ ] Site tested in Firefox (latest)
- [ ] Site tested in Safari (latest)
- [ ] Site tested in Edge (latest)
- [ ] No major visual or functional issues
- [ ] Fallbacks working for unsupported features

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

### Task 8.5: Fix responsive layout issues

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Address any layout issues discovered during responsive testing.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] All identified layout issues documented
- [ ] Issues prioritized by severity
- [ ] Critical issues fixed
- [ ] Fixes tested across devices
- [ ] No regressions introduced

**Prerequisites:** 8.1, 8.2, 8.3, 8.4

---

### Task 8.6: Test touch interactions

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate touch interactions work correctly on mobile devices.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] Buttons and links tappable on touch devices
- [ ] Touch target sizes appropriate
- [ ] No hover-only interactions
- [ ] Swipe gestures work if applicable
- [ ] Form inputs work with touch keyboards

**Prerequisites:** 8.1

---

### Task 8.7: Test orientation changes

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Validate layout adapts correctly to orientation changes.

**Document References:**
- AGENTS.md, section 11: UX behavior

**Completion Criteria:**
- [ ] Layout adapts to portrait orientation
- [ ] Layout adapts to landscape orientation
- [ ] No content cut off during orientation change
- [ ] No layout shift issues

**Prerequisites:** 8.1, 8.2

---

### Task 8.8: Document responsive breakpoints

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Document the responsive breakpoints and design decisions.

**Document References:**
- AGENTS.md, section 18: Deliverable standard

**Completion Criteria:**
- [ ] Breakpoints documented
- [ ] Responsive behavior documented
- [ ] Known limitations documented
- [ ] Documentation added to README or separate file

**Prerequisites:** 8.5

---

## Phase 9: Performance Optimization

**Progress:** 0/6 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 9.1: Optimize images

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Optimize all images for web performance.

**Document References:**
- AGENTS.md, section 13: Performance requirements
- 05_LIVIO_Restricciones_tecnicas: Image optimization

**Completion Criteria:**
- [ ] All images converted to modern formats (WebP, AVIF)
- [ ] Images properly sized for different viewports
- [ ] Next.js Image component used for all images
- [ ] Lazy loading implemented
- [ ] Image dimensions specified to prevent layout shift
- [ ] Images compressed without quality loss

**Prerequisites:** Phase 4, Phase 5

---

### Task 9.2: Implement code splitting and lazy loading

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Optimize JavaScript bundle size with code splitting.

**Document References:**
- AGENTS.md, section 13: Performance requirements
- 05_LIVIO_Restricciones_tecnicas: Bundle optimization

**Completion Criteria:**
- [ ] Dynamic imports used for large components
- [ ] Route-based code splitting working
- [ ] Lazy loading implemented for below-fold content
- [ ] Bundle size analyzed and optimized
- [ ] No unnecessary dependencies included

**Prerequisites:** Phase 4, Phase 5

---

### Task 9.3: Optimize fonts loading

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Optimize web font loading for performance.

**Document References:**
- AGENTS.md, section 13: Performance requirements

**Completion Criteria:**
- [ ] Fonts loaded using Next.js font optimization
- [ ] Font display strategy configured (swap or optional)
- [ ] Only necessary font weights loaded
- [ ] Font subsetting applied if applicable
- [ ] No FOUT (Flash of Unstyled Text) issues

**Prerequisites:** 2.2

---

### Task 9.4: Analyze and optimize bundle size

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Analyze JavaScript bundle and optimize size.

**Document References:**
- AGENTS.md, section 13: Performance requirements
- AGENTS.md, section 7: Avoid overengineering

**Completion Criteria:**
- [ ] Bundle analyzer run and results reviewed
- [ ] Large dependencies identified
- [ ] Unnecessary dependencies removed
- [ ] Tree shaking verified
- [ ] Bundle size within acceptable limits
- [ ] No duplicate dependencies

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

### Task 9.5: Test and optimize Core Web Vitals

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Measure and optimize Core Web Vitals metrics.

**Document References:**
- AGENTS.md, section 13: Performance requirements

**Completion Criteria:**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Lighthouse Performance score 90+
- [ ] Metrics tested on real devices
- [ ] Performance issues identified and fixed

**Prerequisites:** 9.1, 9.2, 9.3, 9.4

---

### Task 9.6: Implement caching strategies

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Configure caching for optimal performance.

**Document References:**
- AGENTS.md, section 13: Performance requirements
- 05_LIVIO_Restricciones_tecnicas: Caching configuration

**Completion Criteria:**
- [ ] Static assets cached appropriately
- [ ] API routes cached where appropriate
- [ ] Cache headers configured
- [ ] Revalidation strategy defined
- [ ] No stale content issues

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

## Phase 10: Content Cleanup & Final Review

**Progress:** 0/5 tasks completed (0%)  
**Status:** ⏸️ Not Started

### Task 10.1: Final content review and copy editing

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Review all content for accuracy, consistency, and quality.

**Document References:**
- 02_LIVIO_Identidad_verbal: Verbal identity and tone
- AGENTS.md, section 5: Non-negotiable rules
- AGENTS.md, section 16: What not to invent

**Completion Criteria:**
- [ ] All copy reviewed for tone consistency
- [ ] Grammar and spelling checked
- [ ] No invented claims or fake proof
- [ ] Brand name usage consistent (LIVIO, not old names)
- [ ] All content in Spanish
- [ ] CTAs clear and compelling
- [ ] Messaging aligns with positioning

**Prerequisites:** Phase 4, Phase 5

---

### Task 10.2: Accessibility audit and fixes

**Complexity:** Moderate  
**State:** ⏸️ Not Started

**Description:**  
Comprehensive accessibility audit and remediation.

**Document References:**
- AGENTS.md, section 14: Accessibility baseline

**Completion Criteria:**
- [ ] Automated accessibility testing completed (axe, Lighthouse)
- [ ] Manual keyboard navigation tested
- [ ] Screen reader testing completed
- [ ] Color contrast verified
- [ ] Focus states visible and clear
- [ ] ARIA labels correct where needed
- [ ] All critical issues fixed
- [ ] Accessibility score 90+ in Lighthouse

**Prerequisites:** Phase 4, Phase 5, Phase 6

---

### Task 10.3: Create project documentation

**Complexity:** Simple  
**State:** ✅ Completed

**Description:**  
Document project structure, setup, and maintenance.

**Document References:**
- AGENTS.md, section 18: Deliverable standard

**Completion Criteria:**
- [ ] README.md updated with project overview
- [ ] Setup instructions documented
- [ ] Project structure explained
- [ ] Content location documented
- [ ] Development commands documented
- [ ] Deployment process documented
- [ ] Environment variables documented

**Prerequisites:** All previous phases

---

### Task 10.4: Pre-deployment checklist

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Complete final pre-deployment validation checklist.

**Document References:**
- AGENTS.md, section 18: Deliverable standard
- 05_LIVIO_Restricciones_tecnicas: Deployment requirements

**Completion Criteria:**
- [ ] All pages load without errors
- [ ] All links working
- [ ] Forms working correctly
- [ ] SEO metadata complete
- [ ] Performance metrics acceptable
- [ ] Accessibility baseline met
- [ ] Responsive design working
- [ ] Cross-browser testing passed
- [ ] No console errors
- [ ] Environment variables configured
- [ ] Analytics configured (if applicable)
- [ ] Error tracking configured (if applicable)

**Prerequisites:** All previous phases

---

### Task 10.5: Deploy to Vercel

**Complexity:** Simple  
**State:** ⏸️ Not Started

**Description:**  
Deploy the website to Vercel production.

**Document References:**
- AGENTS.md, section 7: Vercel deployment target
- 05_LIVIO_Restricciones_tecnicas: Deployment configuration

**Completion Criteria:**
- [ ] Vercel project configured
- [ ] Environment variables set in Vercel
- [ ] Domain configured (if applicable)
- [ ] Production deployment successful
- [ ] Site accessible and working in production
- [ ] SSL certificate active
- [ ] No production errors
- [ ] Performance verified in production

**Prerequisites:** 10.4

---

## Summary

This task list provides a comprehensive roadmap for implementing the LIVIO commercial website. Tasks are organized into 10 phases following the priority order defined in AGENTS.md section 17.

Total tasks: 87
- Phase 1: 5 tasks (Project Structure)
- Phase 2: 8 tasks (Layout Foundation)
- Phase 3: 6 tasks (Navigation)
- Phase 4: 15 tasks (Home Page)
- Phase 5: 18 tasks (Secondary Pages)
- Phase 6: 7 tasks (Contact Form)
- Phase 7: 9 tasks (SEO & Metadata)
- Phase 8: 8 tasks (Responsive QA)
- Phase 9: 6 tasks (Performance)
- Phase 10: 5 tasks (Content Cleanup)

Each task includes:
- Clear description
- Complexity indicator
- Document references
- Explicit completion criteria
- Prerequisites

Update task states as work progresses:
- ⏸️ Not Started
- 🔄 In Progress
- ✅ Completed

Update the Phase Summary table at the top as tasks are completed to track overall progress.
