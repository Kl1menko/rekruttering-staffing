
Landing website for a B2B recruitment/staffing company.
Built with Next.js App Router and focused on lead generation, trust, and compliance messaging.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- Lucide icons
- `libphonenumber-js` for phone validation

## What Is Implemented

- Marketing pages and structure:
  - `/`
  - `/services`, `/services/[slug]`
  - `/industries`, `/industries/[slug]`
  - `/about`, `/contact`
  - `/blog`, `/candidates`
- Custom design system (fonts, color tokens, spacing)
- Responsive header with mobile burger menu
- Hero section with decorative cards and micro-motion
- Services slider (auto-slide + pause on hover/focus)
- Industries cards in editorial poster-like style
- Process section in matching visual style
- FAQ accordion redesign
- Contact form redesign with:
  - required/optional field validation
  - country selector + phone formatting logic
  - full phone number generation
  - success dialog after submit

## Project Structure

```text
src/
  app/
    (marketing)/
    layout.tsx
    globals.css
  components/
    layout/
    marketing/
    motion/
    ui/
  content/
  lib/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Notes

- The project uses local custom fonts from `src/fonts`.
- Static assets (avatars, flags, logo) are in `public/`.
- If you see hydration warnings in dev, browser extensions may be injecting attributes before React hydration.
