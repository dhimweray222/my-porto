# Porto Project Plan & Rules

## Goals
- Build a personal portfolio in Nuxt 3 + TypeScript.
- Clean, modern design with a liquid glass navbar.
- Simple, scannable sections: Intro, Experience, Contact, Footer.

## Pages & Routing
- Single page at `/` (SPA style) with in-page anchors.
- Anchors: `#home`, `#intro`, `#experience`, `#contact`, `#footer`.

## Components
- `components/Navbar.vue`: Liquid glass navbar, sticky at top.
- `components/IntroSection.vue`: Split layout with Introduction (text/skills) on the left and Visual/Image on the right.
- `components/ExperienceSection.vue`: Work experience timeline/cards with alternating (zig-zag) layout, aesthetic images, lightweight animations, and a "Detail" button triggering a popup (modal).
- `components/ContactSection.vue`: Engaging contact area (email, social links) with attractive design.
- `components/AppFooter.vue`: Footer with copyright and quick links.

## Styling Rules
- Use plain CSS with scoped styles (no Tailwind).
- Define CSS variables in `app.vue` for colors and blur.
- Liquid glass navbar: translucent background, blur (`backdrop-filter`), subtle border.
- Responsive layout: mobile-first, max width container 960px.

## Content Rules
- Intro: Split layout (Text Left, Visual Right). Keep text to 2-3 lines. Include name, role, and Skills / Tech Stack.
- Experience: 3-6 items max. Use alternating layout (Left/Right). Include aesthetic images (logos/thumbnails), lightweight animations, and a detail view (modal).
- Contact: Make it visually attractive. Primary email visible, social links (GitHub, LinkedIn) as icons/text.
- Footer: current year, name, minimal links.

## Accessibility & UX
- Color contrast AA minimum.
- Keyboard focus states visible.
- Skip heavy animations; use subtle transitions.

## Technical Rules
- TypeScript in `<script setup lang="ts">` for all components.
- Props and component exports typed.
- No global state library; local state only.
- Lint passes with project ESLint config.

## Data Structure (example)
```ts
// types/experience.ts
export interface ExperienceItem {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM or 'Present'
  highlights: string[];
}
```

## Implementation Outline
1. Create components listed above.
2. Add anchors and smooth scroll in `Navbar.vue`.
3. Provide sample data for experience in `data/experience.ts`.
4. Wire sections into `pages/index.vue`.
5. Add base CSS variables and container styles in `app.vue`.

## Next Steps
- Confirm content text and experience items.
- Implement components and wire up navigation.
- Validate on mobile and desktop.
