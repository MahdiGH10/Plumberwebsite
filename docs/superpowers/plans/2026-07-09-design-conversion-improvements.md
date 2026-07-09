# Design Conversion Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the SOS DALI landing page conversion, trust, accessibility, and mobile safety while preserving the current industrial brass/petrol visual identity.

**Architecture:** Keep the existing component structure and make targeted edits to copy, layout, and CSS. Add one small trust/problem strip component rather than restructuring the whole page.

**Tech Stack:** Vite, React, TypeScript, Framer Motion, CSS-in-JS component styles, global CSS tokens.

## Global Constraints

- Preserve existing industrial identity: petrol teal, brass, patina, signal red, gauge motif.
- Keep French primary copy with short Arabic labels on CTAs.
- Do not introduce new dependencies.
- Maintain self-hosted fonts through existing fontsource imports.
- Maintain `npm run build` and `npm run lint` passing.
- Respect `prefers-reduced-motion` and visible keyboard focus.

---

### Task 1: Hero Trust And CTA Hierarchy

**Files:**
- Modify: `src/data/content.ts`
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `content.rating`, `content.reviewCount`, `content.trustBadge`, `content.phoneRaw`, `content.whatsappId`
- Produces: Hero with urgent value sentence, proof chips, dominant Call CTA, secondary WhatsApp CTA

- [ ] Add hero copy fields to `content.ts`: `heroProblem`, `proofItems`.
- [ ] Render `heroProblem` below the H1.
- [ ] Render proof chips above CTAs: rating, review count, response guarantee, service zones.
- [ ] Change WhatsApp button styling in hero to a secondary outline treatment while keeping sticky WhatsApp green.
- [ ] Run `npm run build` and verify PASS.

### Task 2: Problem/Solution Strip

**Files:**
- Create: `src/components/SituationStrip.tsx`
- Modify: `src/App.tsx`
- Modify: `src/data/content.ts`

**Interfaces:**
- Consumes: `content.situations`
- Produces: `<SituationStrip />` displayed between Hero and Services

- [ ] Add `situations` array to `content.ts` with four customer problems: fuite, gaz/chauffage, climatisation, urgence.
- [ ] Create `SituationStrip.tsx` with concise cards and consistent inline SVG icons.
- [ ] Insert `<SituationStrip />` after `<Hero />` in `App.tsx`.
- [ ] Run `npm run build` and verify PASS.

### Task 3: Accessibility And Mobile Safety

**Files:**
- Modify: `src/styles/index.css`
- Modify: `src/components/StickyBar.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Produces: visible `:focus-visible` ring and mobile bottom spacing so fixed CTA does not cover content

- [ ] Add global `:focus-visible` ring for `a`, `button`, and interactive elements.
- [ ] Add `body { padding-bottom }` only under mobile breakpoint to account for sticky bar.
- [ ] Add `padding-bottom: env(safe-area-inset-bottom)` to sticky bar buttons.
- [ ] Run `npm run lint` and verify PASS.

### Task 4: Final Conversion CTA

**Files:**
- Create: `src/components/FinalCta.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `content.phoneRaw`, `content.whatsappId`, `content.cta`
- Produces: `<FinalCta />` displayed before `<Footer />`

- [ ] Create final CTA block: `Besoin d'une intervention aujourd'hui ?` with Call and WhatsApp buttons.
- [ ] Insert before footer.
- [ ] Run `npm run build` and `npm run lint`; both must PASS.

## Self-Review

- Spec coverage: hero value, trust proof, CTA hierarchy, focus states, problem strip, final CTA, and mobile sticky-bar safety are covered.
- Placeholder scan: no placeholders remain.
- Type consistency: new content fields are consumed by matching component names.
