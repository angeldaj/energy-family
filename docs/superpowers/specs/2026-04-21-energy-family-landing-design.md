# Energy Family Landing Page Design

## Overview

Create a one-page landing page for the CrossFit brand `Energy Family` using a premium `Luxury Black Gold` visual direction. The page should feel elite, disciplined, and professional while still supporting a mixed audience. The primary conversion action is WhatsApp contact. Pricing plans and physical location must be highly visible to reduce friction before contact.

## Goals

- Drive users to start a WhatsApp conversation.
- Present the brand as serious, premium, and competitive.
- Show plans clearly and quickly.
- Show location with text, embedded map, and Google Maps link.
- Keep the page concise, high-impact, and mobile-friendly.

## Non-Goals

- No testimonial system.
- No CMS or admin tooling.
- No online checkout or booking flow.
- No multi-page marketing site.

## Audience

Primary audience is mixed:

- New people considering starting CrossFit.
- Existing trainees looking for a more serious training environment.

Brand tone should lean `elite competitiva`, not casual or playful.

## Visual Direction

### Aesthetic

`Luxury Black Gold`

- Black as dominant base.
- Gold as controlled accent.
- Strong typography with editorial/premium feel.
- Dramatic contrast, subtle glow, refined framing.
- Avoid generic fitness-site patterns and overused SaaS aesthetics.

### Design Principles

- Immediate visual impact above the fold.
- Tight copy with no filler or exaggerated claims.
- Premium restraint: gold should highlight, not overwhelm.
- Desktop and mobile layouts should preserve hierarchy and readability.

## Information Architecture

The landing page will be a single vertical flow with these sections:

1. Hero
2. Brand pillars
3. Plans
4. Location
5. Final CTA

## Section Design

### 1. Hero

Purpose:
Establish brand positioning fast and push the primary CTA.

Content:

- Brand name: `Energy Family`
- Headline: `Entrena con disciplina. Compite con energía.`
- Subheadline: `Energy Family es espacio para quienes quieren avanzar en serio. Comunidad, constancia y entrenamiento de CrossFit en un ambiente de alto nivel.`
- Primary CTA: `Escribir por WhatsApp`
- Secondary CTA: `Ver planes`
- Support badge: `1 clase gratis de prueba`

Behavior:

- Primary CTA should be the most visually prominent action.
- Secondary CTA should scroll to the plans section.
- Hero should fill most of the first viewport.

Visual notes:

- Dark atmospheric background with subtle gold accents.
- Optional abstract geometry, lines, or glow for depth.
- No stock-photo dependency required.

### 2. Brand Pillars

Purpose:
Explain value in a fast, scannable format.

Content:

- `Disciplina real`
  - `Cada clase exige enfoque, técnica y constancia.`
- `Comunidad que empuja`
  - `Entrenas con personas que suman, retan y acompañan.`
- `Entrenamiento con intención`
  - `Cada sesión está pensada para mejorar tu resistencia, fuerza y mentalidad.`

Behavior:

- Use three compact content blocks or cards.
- Keep this section short to preserve page momentum.

### 3. Plans

Purpose:
Remove pricing uncertainty before WhatsApp contact.

Content:

- `Mensual`
  - Price: `$15`
  - Description: `Entrena 5 días por semana durante 1 mes.`
- `Semanal`
  - Price: `$5`
  - Description: `Entrena 5 días durante esa semana.`
- `Clase individual`
  - Price: `$2`
  - Description: `Perfecta para probar ritmo antes de comprometerte.`

Persistent note:

- `Incluye 1 clase gratis de prueba`

Behavior:

- Present all three options in a clean comparison layout.
- Monthly plan should receive the strongest visual emphasis.
- Section should be readable without extra clicks or accordions.

### 4. Location

Purpose:
Answer the logistics question immediately.

Content:

- Address: `Final de Av. Paseo Caroní, Urb. Paratepuy. Mnza 45 Casa #1.`
- Google Maps URL: `https://maps.app.goo.gl/KK5ZYWSipRsDN4yj9`

Behavior:

- Show address in readable text.
- Embed map directly on page.
- Include button: `Abrir en Google Maps`

### 5. Final CTA

Purpose:
Close page with a clear action prompt.

Content:

- Closing line: `Tu primera clase puede ser hoy. Escríbenos por WhatsApp y reserva tu prueba gratuita.`
- CTA: `Escribir por WhatsApp`

Behavior:

- Repeat primary CTA with strong contrast.
- Keep copy concise.

## Copy Strategy

The page copy should:

- Sound confident and disciplined.
- Avoid clichés like generic motivation slogans.
- Stay clear before trying to sound clever.
- Support a premium, competitive tone without inventing proof points.

## Interaction Notes

- Use smooth anchor navigation for `Ver planes`.
- All WhatsApp CTAs should point to a single configurable WhatsApp URL constant.
- If the final WhatsApp number is not yet available at implementation time, keep the constant isolated for easy replacement rather than hardcoding it across the page.
- Hover states should feel polished but restrained.
- Motion should focus on staged reveal and premium emphasis, not noisy animation.

## Responsive Behavior

- Hero must stay impactful on mobile without forcing oversized text.
- Plans should stack cleanly on smaller screens.
- Map embed must remain usable on mobile.
- CTA buttons should remain large and easy to tap.

## Accessibility

- Maintain strong contrast between black, gold, and body text.
- Buttons and links must have visible focus states.
- Decorative effects should not reduce readability.
- Embedded map should not be the only way to access location information.

## Technical Notes

- Implement inside existing Next.js app router project.
- Replace starter content in `app/page.tsx`.
- Update metadata in `app/layout.tsx`.
- Expand `app/globals.css` with page-specific design tokens and global styling baseline.
- Follow current Next.js 16 documentation in `node_modules/next/dist/docs/` before implementation because project has local rules noting breaking changes.

## Success Criteria

- User immediately understands brand tone, offer, and next action.
- Plans are visible and easy to compare.
- Location is easy to find and open in Google Maps.
- WhatsApp remains the dominant CTA across the page.
- Page feels premium and intentional, not template-like.
