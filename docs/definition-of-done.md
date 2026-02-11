# Definition of Done

## Quality gates

- Lighthouse (mobile): Performance > 90, SEO > 90, Accessibility > 90.
- All key blocks are responsive mobile-first (320px, 768px, 1024px, 1280px).
- Animations are micro-motion only and respect `prefers-reduced-motion`.
- Single design token system is used for colors, fonts and radii.
- Every indexable page has base metadata + Open Graph + Twitter card.

## Verification checklist

1. Run static checks:
   - `npm run lint`
   - `npm run build`
2. Run Lighthouse in Chrome DevTools on:
   - `/`
   - `/services`
   - `/contact`
3. Verify responsive layouts at breakpoints:
   - 320px, 375px, 768px, 1024px, 1280px
4. Verify reduced motion:
   - Enable `prefers-reduced-motion: reduce`
   - Confirm no large transforms/looped animations.
5. Verify metadata/OG:
   - Open page source and confirm title/description/canonical/og/twitter tags.

## Where implemented in this project

- Tokens: `src/app/globals.css`
- Motion primitives: `src/components/motion/FadeIn.tsx`, `src/components/motion/SlideUp.tsx`, `src/components/motion/Stagger.tsx`
- SEO helper: `src/lib/seo.ts`
- Global metadata: `src/app/layout.tsx`
- OG image routes: `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`
