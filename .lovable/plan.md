# Yulianto Portfolio — Build Plan

A premium dark, single-page portfolio inspired by JetBrains.com. Built on the project's existing stack (TanStack Start + React + Tailwind v4), not Next.js — the visual result will be identical, and the existing stack is already configured.

## Design system (src/styles.css)

- Background: near-black `oklch(0.14 0.01 270)` with a slightly lighter card surface.
- Foreground: soft white.
- Accents: JetBrains-style gradient stops — purple `#9333EA`, blue `#2563EB`, cyan `#06B6D4`.
- Tokens added: `--gradient-brand` (linear 135deg purple→blue→cyan), `--gradient-text`, `--shadow-glow`, subtle `--border` at 8% white.
- Typography: Inter (loaded via Google Fonts link in `__root.tsx` head). Display weight 700 with tight tracking for headlines, 400/500 for body.
- Radius: `0.75rem`. Rounded but not pill.

## Sections

1. **Hero** (`src/components/sections/Hero.tsx`)
   - Large headline with gradient text on the keywords "Scalable", "Cloud-Native", "JVM-Powered".
   - Name + role above headline, short subtext below.
   - Two CTAs: "View Projects" (gradient fill) → `#projects`, "Contact Me" (outline) → `#contact`.
   - Floating animated tech badges (Java, Spring Boot, Docker, Kubernetes, Laravel, Django, PostgreSQL, Keycloak) — subtle float + fade-in stagger.
   - Background: radial gradient glow + faint grid pattern.

2. **About** (`About.tsx`)
   - Two-column: bio paragraph + three stat cards (5+ Years, JVM Specialist, Cloud Enthusiast).
   - Cards have gradient top-border on hover.

3. **Skills** (`Skills.tsx`)
   - 4 category cards: Backend, Database, Cloud & DevOps, Security.
   - Each lists items as pill chips with hover glow.

4. **Experience** (`Experience.tsx`)
   - Vertical timeline of focus areas: Big Data & Analytics, Backend Development, API Design, Auth & Authorization, System Integration.
   - Each item: icon, title, one-line description.

5. **Projects** (`Projects.tsx`)
   - 2×2 grid of 4 project cards (Enterprise Identity Management, Big Data Analytics Platform, ERP Customization Platform, Cloud Native API Gateway).
   - Card: tech tags, short description, hover lift + gradient border glow.

6. **Contact** (`Contact.tsx`)
   - Centered block with email, LinkedIn, GitHub buttons + "Indonesia" location chip.
   - Email/LinkedIn/GitHub use placeholder hrefs (`mailto:yulianto@example.com`, `#`) — user can swap.

7. **Nav** (`Nav.tsx`) — fixed top, blurred background, logo "Y." + section anchor links + theme is always dark.

8. **Footer** — copyright + small gradient divider.

## Routing & files

- Replace `src/routes/index.tsx` placeholder with the assembled portfolio page; update its `head()` with SEO meta (title: "Yulianto — Software Engineer", description with headline, og tags).
- Add `<html class="dark">` in `__root.tsx` shell and Inter font link.
- All new components under `src/components/sections/` plus `src/components/Nav.tsx`.
- Icons: `lucide-react` (already available via shadcn).
- Animations: Tailwind utilities (`animate-fade-in`, hover scale) + small custom keyframes for the floating badges in `styles.css`.

## Out of scope

- No backend, no contact form submission, no CMS.
- No Lovable Cloud — pure static content.
- Tech stack note: building on TanStack Start rather than Next.js as requested, since that is what this project runs on. Visual/UX outcome is the same.
