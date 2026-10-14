# 02 — Landing page

**What to build:** The complete homepage. A visitor who spends 60 seconds on this page should be able to say "He's built products from zero and run the P&L to scale them" (the takeaway line, ADR 0007). The first viewport contains the name in serif heading, positioning line, one-line context, four metric tiles (one per case study) at pull-quote scale, and a CTA. Below the fold: four CaseStudyCards with title, company framing, teaser, metric, and link to each case study. A career scope bar with headshot (headshot appears on this page only, not on about). The metric strip collapses to a 2x2 grid on mobile. Person + BreadcrumbList schema markup. Page-specific meta title (positioning anchor, e.g. "Aju Joseph John — Product & P&L Leader"), meta description, Open Graph tags, and canonical URL. Heading hierarchy: h1 = name, h2 = case study titles in featured section. Page-level render tests pass including SEO assertions. All copy goes through the Humanizer Gate and Post Humanizer Gate before finalization.

**Blocked by:** 01 — Scaffold, visual system, shared layout with SEO infrastructure.

**Status:** ready-for-agent

- [ ] Hero section renders name in serif heading, positioning line in body sans, one-line context
- [ ] Metric strip renders four MetricTiles in ruled columns (one per case study)
- [ ] Metric strip collapses to 2x2 grid on mobile
- [ ] Four CaseStudyCards render with title, company framing, teaser, metric, and link
- [ ] CaseStudyCards stack vertically on mobile
- [ ] Career scope bar renders with headshot
- [ ] CTA visible without scrolling (above the fold)
- [ ] Person + BreadcrumbList schema markup present and structurally valid
- [ ] Meta title contains positioning anchor (not generic)
- [ ] Meta description summarizes what the visitor will find
- [ ] Open Graph tags present: og:title, og:description, og:url
- [ ] Canonical URL declared
- [ ] Heading hierarchy: exactly one h1, no skipped levels
- [ ] All internal links resolve to valid routes
- [ ] All copy passed through Humanizer Gate and Post Humanizer Gate
- [ ] Page-level render tests pass
