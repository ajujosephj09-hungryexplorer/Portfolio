---
name: Aju Joseph John Portfolio
description: Executive credibility validator styled as an investment memo
colors:
  ground: "#FAFAFA"
  ink: "#111827"
  accent: "#1D4ED8"
  secondary: "#4B5563"
  rule: "#D1D5DB"
typography:
  display:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
  metric:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
    fontFeature: "tnum"
spacing:
  section-y: "3rem / 4rem"
  content-px: "1.5rem"
  metric-gap: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "#1E40AF"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.875rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
---

# Design System: Aju Joseph John Portfolio

## Overview

**Creative North Star: "The Deal Memo"**

The visual system treats the portfolio as an investment memo: a document format so familiar to the target audience (hiring managers, PE/VC search firms) that the design disappears and only the evidence registers. Every surface is a ruled section of a single continuous document. The density is high but the texture is quiet. White ground, dark type, one accent color, horizontal rules as the only structural ornament.

The system is deliberately anti-portfolio. No project thumbnail grids, no hover animations on cards, no gradient heroes, no glass or glow effects. The only motion is a single entrance animation on the hero thesis block, which respects `prefers-reduced-motion`. The only color beyond the grayscale axis is one restrained blue used exclusively for interactive affordances: links, primary CTAs, focus rings, and text selection highlight.

**Key Characteristics:**
- Ruled sections as the primary spatial and visual device
- Pull-quote sized metrics in the heading serif, with tabular figures
- Single blue accent on near-white ground; no decorative color
- Serif/sans pairing that reads as institutional, not creative
- Zero border-radius on all interactive elements

## Colors

A five-token palette: one white ground, one near-black ink, one blue accent, one gray for secondary text, one light gray for rules and borders.

### Primary
- **Restrained Blue** (#1D4ED8): Links, primary button fills, focus rings, text selection background. Used only on interactive elements; never as decoration, background tint, or section color. Hover state darkens to #1E40AF (Tailwind `blue-800`).

### Neutral
- **Near-White Ground** (#FAFAFA): Page background, scrollbar track, button-secondary hover text color. Not pure white; the warmth is imperceptible but prevents clinical harshness on large screens.
- **Near-Black Ink** (#111827): All primary text, heading text, secondary button border and text, nav wordmark, active nav link text. The darkest value in the system.
- **Secondary Gray** (#4B5563): Supporting text (company names, metric labels, context lines), nav links at rest, footer text, breadcrumb text, scrollbar thumb hover. Provides hierarchy without adding a new hue.
- **Rule Gray** (#D1D5DB): Horizontal rules, nav/footer borders, metric column dividers, headshot border, breadcrumb slash separator, scrollbar thumb. The lightest functional gray.

### Named Rules
**The One Accent Rule.** The only chromatic color in the system is #1D4ED8. If a new surface needs a second color, the system does not support it; reconsider the surface.

## Typography

**Display Font:** Libre Baskerville (with Georgia, serif fallback)
**Body Font:** Source Sans 3 (with system-ui, sans-serif fallback)

**Character:** Institutional serif for authority and permanence; systematic sans for readability and density. The pairing reads as a financial document or annual report, not a design portfolio. Both are Google Fonts loaded via `next/font` with `display: swap`.

### Hierarchy
- **Display** (400, text-4xl/text-5xl/text-6xl responsive, leading-tight): The hero name and page titles (About, Contact, 404). Only one instance per page. Libre Baskerville at normal weight; the font's natural presence carries without bold.
- **Headline** (700, text-2xl/text-3xl responsive, leading-tight): Section headings (Case Studies, Career Scope, Get in Touch, Experience, Education, What Drives Me). Libre Baskerville bold.
- **Title** (700, text-xl/text-2xl responsive, leading-tight): Case study titles within sections. Libre Baskerville bold.
- **Metric** (700, text-3xl/text-4xl responsive, leading-tight, tabular-nums): Pull-quote sized numbers. Libre Baskerville bold with `font-variant-numeric: tabular-nums` for columnar alignment.
- **Body** (400, text-base, leading-relaxed, max-w-prose): Running text. Source Sans 3 regular. Line length capped at `max-w-prose` (65ch) or `max-w-2xl` (42rem).
- **Label** (600, text-sm, leading-normal): Metric labels, company context, nav links, CTA button text, breadcrumb text. Source Sans 3 semibold.

### Named Rules
**The Metric Typography Rule.** Numbers that represent outcomes (revenue, retention, ARR) are always set in the serif face at pull-quote scale with tabular figures enabled. They are never set in the sans body face.

## Layout

Container: `max-w-content` (72rem / 1152px) centered with `mx-auto`. Horizontal padding: `px-6` (1.5rem) at all breakpoints.

Breakpoints follow Tailwind defaults: `sm` at 640px, `md` at 768px, `lg` at 1024px.

Section rhythm: `py-12 md:py-16` (3rem / 4rem) for major content sections. Hero uses `pt-16 pb-12 md:pt-24 md:pb-16`. Metric strip uses `py-10 md:py-14`.

Grid: Case studies use `md:grid-cols-[1fr_auto]` with the metric column right-aligned on desktop. Metric strips use `grid-cols-2 md:grid-cols-4`. Career scope mirrors the metric grid pattern. Experience timeline uses `md:flex-row md:items-baseline` with a fixed-width date column (`md:w-48`).

Mobile behavior: metric grids collapse to 2x2 with left-border dividers on odd columns. Case study metric columns hide on mobile; inline metrics appear instead. Nav collapses to a hamburger menu with a slide-down panel. Footer stacks vertically below `sm`.

Footer sits at page bottom via `min-h-screen flex flex-col` on `body` with `flex-1` on `main`. Footer top margin: `mt-24`.

## Elevation & Depth

The system is completely flat. No box-shadows exist anywhere: not on cards, buttons, nav, or any other element. Depth is conveyed exclusively through horizontal rules (1px solid, rule gray) and typographic scale contrast. The scrollbar thumb uses a subtle 4px border-radius as the only rounded element, and it is non-structural.

### Named Rules
**The No Shadow Rule.** No surface in this system casts a shadow. Hierarchy comes from typography scale and horizontal rules alone. If a new component needs perceived depth, use a border in rule gray, not a shadow.

## Shapes

All interactive elements (buttons, nav, inputs) use zero border-radius. The system's form language is rectilinear throughout. Buttons are sharp-cornered rectangles. The headshot is a sharp-cornered square with a 1px rule-gray border. Horizontal rules are straight 1px lines. All SVG icon containers (email `<rect>`) use `rx="0"`.

The only border-radius in the build is `4px` on the scrollbar thumb, which is browser chrome and not part of the design vocabulary.

### Named Rules
**The Sharp Corner Rule.** Border-radius is zero on every designed element. Rounded corners signal a different visual world (consumer, friendly, approachable). This system signals institutional authority through sharp geometry.

## Components

### Buttons
- **Shape:** Sharp rectangle (0px radius)
- **Primary (Email CTA):** Restrained Blue (#1D4ED8) fill, white text, 14px 24px padding (`py-3.5 px-6`), text-sm font-semibold. Inline SVG icon (16px) left of label.
- **Hover:** Background darkens to #1E40AF (`blue-800`), `transition-colors`.
- **Secondary (LinkedIn CTA):** Transparent fill, 1px ink border, ink text, same padding and size. Inline SVG icon left of label.
- **Hover:** Fill inverts to ink background with ground text color, `transition-colors`.

### Navigation
- **Style:** Full-width bar, bottom border in rule gray. Name as serif bold wordmark (text-lg) left-aligned. Text links right-aligned in secondary gray, text-sm.
- **Desktop:** Horizontal link row with social icons separated by a left border in rule gray. Social icons are 18px inline SVGs in secondary gray.
- **Active State:** Active page link receives `text-ink font-semibold`, replacing the default secondary gray. Determined by `usePathname`: exact match for `/about` and `/contact`, startsWith match for `/case-studies` against the "Case Studies" link.
- **Hover:** Text links shift to ink. Wordmark shifts to accent.
- **Mobile:** Hamburger icon (20px) toggles a dropdown panel with vertical link stack and social icon row, separated by rule borders. Links gain `py-2` vertical padding for touch targets.
- **Focus:** 2px solid accent outline with 2px offset (global `focus-visible` rule).

### Breadcrumb
- **Location:** Case study pages only, above the identity bar.
- **Style:** `pt-8 text-sm text-secondary`. Plain text, no underline at rest.
- **Structure:** "Case Studies" as a link (`text-secondary hover:text-ink transition-colors`) followed by a slash separator in rule gray (`mx-2 text-rule`) followed by the current page title as a plain `<span>`.
- **Semantic:** Visual breadcrumb in the markup; structured BreadcrumbList provided via JSON-LD in a separate `<script>` block.

### Metric Tiles
- **Style:** Vertically stacked: large serif number over small sans label. On desktop, separated by left borders in rule gray with `pl-8` padding (except first).
- **Mobile:** 2x2 grid. Odd columns get left border and `pl-6`.
- **Numbers:** Tabular figures for column alignment (`font-variant-numeric: tabular-nums`).

### Case Study Blocks
- **Layout:** Two-column grid on desktop (content left, metric right-aligned). Single column on mobile with inline metric.
- **Title:** Serif bold, linked to case study page. Ink color at rest, accent on hover.
- **Company line:** Secondary gray, text-sm.
- **Teaser:** Body text, ink, text-base, max-w-prose.
- **Action links:** "Read the case study" in accent blue, text-sm font-semibold. "View live product" in secondary gray.
- **Separated by:** Horizontal rules between entries.

### Case Study Page (CaseStudyLayout)
- **Structure:** Breadcrumb, identity bar, horizontal rule, title block with headline metrics, narrative sections separated by rules, related studies grid, contact CTA.
- **Identity Bar:** `mt-4 text-sm text-secondary leading-relaxed`. One-line company/role context.
- **Narrative Sections:** Each section has a headline (serif bold, text-2xl/text-3xl) and body content (`text-base text-ink leading-relaxed max-w-prose`), separated by horizontal rules.
- **Related Studies:** Grid rows with serif bold title (linked, ink to accent on hover) and right-aligned metric. Separated by horizontal rules.

### 404 Page
- **Style:** Minimal. Display typography for "Page Not Found" (font-serif text-4xl md:text-5xl font-normal). Body text in secondary. Single primary button "Back to Home" without icon.
- **Layout:** Same container and hero spacing as other pages (`pt-16 pb-12 md:pt-24 md:pb-16`).

### Footer
- **Style:** Top border in rule gray. `mt-24` top margin. `py-8` vertical padding.
- **Layout:** Serif name link (text-sm, secondary) left, social icon row (16px SVGs, secondary) right. Stacks vertically below `sm`. Four icons: LinkedIn, GitHub, Substack, Email.

### Secondary Link Row
- **Location:** Contact page, below the primary CTA buttons.
- **Style:** Inline-flex with 16px SVG icon and text-sm label, secondary gray, no border or background. `hover:text-ink transition-colors`.
- **Use:** Substack and GitHub links on the contact page.

## Do's and Don'ts

### Do:
- **Do** use horizontal rules (`<hr>`) as the primary section divider. Every content transition gets one.
- **Do** set outcome numbers in the serif metric style with tabular figures enabled.
- **Do** keep body text within `max-w-prose` or `max-w-2xl` to maintain readable line lengths.
- **Do** use inline SVGs for all icons. Size them consistently: 16px in buttons, footer, and secondary links; 18px in nav.
- **Do** respect `prefers-reduced-motion` by disabling entrance animations.
- **Do** use `rx="0"` on all SVG `<rect>` elements to enforce the Sharp Corner Rule in icon artwork.

### Don't:
- **Don't** add a second chromatic color. The palette is monochrome plus one blue.
- **Don't** add border-radius to any designed element. Sharp corners are the system.
- **Don't** add box-shadows or elevation effects. This is a flat ruled-document system.
- **Don't** use gradients, glass, glow, or decorative background color on any surface.
- **Don't** use icon fonts or external icon libraries. All icons are inline SVG.
- **Don't** set metric numbers in the sans body face or at body text scale.
