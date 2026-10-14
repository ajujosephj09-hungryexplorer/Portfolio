# 08 — Lighthouse CI and build gate

**What to build:** The automated quality gate that runs on every deploy. A GitHub Action that runs Lighthouse CI against the built static output and fails the build if thresholds are breached. Plus cross-page validation that confirms the full site hangs together.

Lighthouse CI thresholds:
- Performance score > 90 (LCP < 2s on mobile 4G)
- Accessibility score > 90 (WCAG 2.1 AA)
- SEO score checked (meta tags, schema markup, heading hierarchy)

Static export build gate: `next build` succeeds with zero errors, all 8 routes resolve in the exported output.

Cross-page validation:
- All navigation links resolve to valid routes across every page
- CTA (contact info) accessible on every page
- Every page has a unique meta title and meta description
- Every page has Open Graph tags (og:title, og:description, og:url)
- Every page declares a canonical URL
- Every page has exactly one h1 and headings do not skip levels
- /sitemap.xml exists and includes all 8 routes
- Person, CreativeWork, and BreadcrumbList schema markup valid on appropriate pages

This ticket confirms the credibility validator meets its performance, accessibility, and SEO requirements end-to-end.

**Blocked by:** 02 — Landing page, 04 — Ensemble case study, 05 — HPCC and Redline case studies, 06 — About page, 07 — Contact page.

**Status:** ready-for-agent

- [ ] GitHub Action created that runs Lighthouse CI on deploy
- [ ] Lighthouse Performance threshold > 90 configured and passing
- [ ] Lighthouse Accessibility threshold > 90 configured and passing
- [ ] Lighthouse SEO score checked
- [ ] `next build` succeeds with zero errors
- [ ] All 8 routes resolve in the static export
- [ ] All navigation links resolve across every page
- [ ] CTA accessible on every page
- [ ] Every page has a unique meta title and description
- [ ] Every page has OG tags (og:title, og:description, og:url)
- [ ] Every page has a canonical URL
- [ ] Every page has exactly one h1, no skipped heading levels
- [ ] /sitemap.xml includes all 8 routes
- [ ] Schema markup valid: Person (landing, about), CreativeWork (case studies), BreadcrumbList (landing, case studies)
- [ ] CI pipeline runs green
