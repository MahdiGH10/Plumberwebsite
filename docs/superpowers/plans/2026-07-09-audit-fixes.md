# Audit Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve the highest-impact design audit findings while preserving the current visual identity.

**Architecture:** Make small targeted edits to existing React components and global CSS. Use Framer Motion's native reduced-motion support instead of adding dependencies.

**Tech Stack:** Vite, React, TypeScript, Framer Motion, CSS.

## Global Constraints

- Preserve petrol/brass/patina industrial design identity.
- Do not add dependencies.
- Keep French primary copy and Arabic CTA labels.
- Use `npm run build` and `npm run lint` as verification gates because the project has no test framework.
- Maintain app source linting through `oxlint src`.

---

### Task 1: Copy Consistency

**Files:**
- Modify: `src/data/content.ts`

**Interfaces:**
- Produces consistent service copy aligned with Google Maps hours.

- [ ] Change `Dépannage rapide 7j/7 — intervention sous 30 min` to `Dépannage rapide Lun–Sam — contact direct sous 30 min`.
- [ ] Run `npm run build` and verify PASS.

### Task 2: Reduced Motion Support

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/components/Gauge.tsx`

**Interfaces:**
- Produces global Framer Motion reduced-motion behavior and a static gauge completion state for reduced-motion users.

- [ ] Wrap `<App />` in `<MotionConfig reducedMotion="user">`.
- [ ] Use `useReducedMotion()` in `Gauge.tsx` to skip the needle sweep and show `Disponible` immediately when reduced motion is preferred.
- [ ] Run `npm run build` and verify PASS.

### Task 3: Accessibility Labels And Decorative Icons

**Files:**
- Modify: `src/components/Gauge.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/FinalCta.tsx`
- Modify: `src/components/StickyBar.tsx`

**Interfaces:**
- Produces clearer screen-reader output by labelling meaningful SVG and hiding decorative icons.

- [ ] Add `role="img"` and `aria-label` to the gauge SVG.
- [ ] Add `aria-hidden="true"` to decorative CTA/contact icons.
- [ ] Add explicit `aria-label` to call and WhatsApp links where visual text includes two languages or phone number.
- [ ] Run `npm run lint` and verify PASS.

### Task 4: Mobile Conversion Timing And Hero Fit

**Files:**
- Modify: `src/components/StickyBar.tsx`
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Produces immediate mobile contact access and better small-phone hero spacing.

- [ ] Change sticky CTA delay from 1.5s to 0.2s.
- [ ] Add small-phone CSS under `max-width: 420px` to reduce hero padding, gauge width, headline size, proof chip size, and button width.
- [ ] Run `npm run build` and `npm run lint`; both must PASS.

## Self-Review

- Spec coverage: copy consistency, reduced motion, accessibility labels, sticky CTA timing, and small-phone hero fit are covered.
- Placeholder scan: no placeholders remain.
- Type consistency: changes are local to existing component interfaces.
