# 09 — Lighthouse CI and build gate

**What to build:** The automated quality gate that runs on every deploy and the cross-page validation that confirms the full site hangs together. This is the single testing seam described in the spec: all assertions run against the static export output.

**Build gate:** `next build` must succeed with zero errors and produce all 8 routes as HTML files in the exported output: /, /about, /contact, /case-studies/canadahelps-turnaround, /case-studies/ensemble, /case-studies/hpcc-platform, /case-studies/redline.

**Lighthouse CI:** A GitHub Action that runs Lighthouse against the exported site served locally. Thresholds: Performance > 90 (ensures sub-2-second LCP on mobile 4G), Accessibility > 90 (WCAG 2.1 AA). SEO score checked and reported. The build fails if Performance or Accessibility thresholds are breached.

**Cross-page validation (assertions on exported HTML):**
- All internal navigation links resolve to routes that exist in the export (no broken links ship)
- CTA (contact info) accessible on every page
- Every page has a unique meta title and meta description
- Every page has Open Graph tags (og:title, og:description, og:url)
- Every page declares a canonical URL
- Every page has exactly one h1 and headings do not skip levels
- /sitemap.xml exists and includes all 8 routes
- Schema markup valid on appropriate pages: Person (landing, about), CreativeWork (case study pages), BreadcrumbList (landing, case study pages)

This ticket confirms the credibility validator meets its performance, accessibility, and SEO requirements end-to-end. No component-level tests, no mocking, no test renderer — tests assert on the shipped artifact.

**Blocked by:** 04 — Ensemble case study, 05 — HPCC case study, 06 — Redline case study, 07 — About page, 08 — Contact page.

**Status:** ready-for-agent

- [ ] `next build` succeeds with zero errors
- [ ] All 8 routes exist as HTML files in the static export
- [ ] GitHub Action created that runs Lighthouse CI on deploy
- [ ] Lighthouse Performance threshold > 90 configured and passing
- [ ] Lighthouse Accessibility threshold > 90 configured and passing
- [ ] Lighthouse SEO score checked and reported
- [ ] All internal navigation links resolve to valid routes in the export
- [ ] CTA accessible on every page
- [ ] Every page has a unique meta title and description
- [ ] Every page has OG tags (og:title, og:description, og:url)
- [ ] Every page has a canonical URL
- [ ] Every page has exactly one h1, no skipped heading levels
- [ ] /sitemap.xml includes all 8 routes
- [ ] Person schema valid on landing and about pages
- [ ] CreativeWork schema valid on all four case study pages
- [ ] BreadcrumbList schema valid on landing and case study pages
- [ ] CI pipeline runs green
