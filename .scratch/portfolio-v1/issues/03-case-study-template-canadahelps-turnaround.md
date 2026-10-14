# 03 — Case study template + CanadaHelps Turnaround

**What to build:** A reusable case study page template and the first instance (CanadaHelps Turnaround). The template includes: IdentityBar (standalone "who is Aju" context line so the page works without homepage context, per ADR 0005), title block with case study name, company framing with commercial scale, and headline metrics at pull-quote scale. Six ruled narrative sections following the decision narrative structure: Context, Problem, Decision, Execution, Outcome, Learning. Metrics inline within the narrative, not separated into a "results" section. RelatedCaseStudies linking to the other three case studies. CTAContact. CreativeWork + BreadcrumbList schema markup baked into the template. SEO infrastructure at the template level: meta title (names the company and outcome), meta description, OG tags, canonical URL — all driven by per-instance content. Heading hierarchy: h1 = case study title, h2 = narrative section headings.

First instance: CanadaHelps Turnaround (CH10). Executive transformation, AI as operating lever. CanadaHelps named and framed with commercial scale in every mention: "$260M+ processing volume, $27M+ P&L" (ADR 0008). Content sourced from story-bank CH10 and Story 5 (AI sales agent folds in). Key metrics: retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33, MAU 10K to 16K, 45 pp conversion lift. All copy through Humanizer Gate and Post Humanizer Gate.

Forwarding this case study URL to Slack or LinkedIn shows a controlled preview card with the case study title and description, not a blank box.

**Blocked by:** 01 — Scaffold, visual system, shared layout with SEO infrastructure.

**Status:** ready-for-agent

- [ ] Case study template renders: IdentityBar, title block, six narrative sections separated by horizontal rules, RelatedCaseStudies, CTAContact
- [ ] IdentityBar provides standalone "who is Aju" context (page works without homepage, ADR 0005)
- [ ] Six narrative sections follow decision narrative structure: Context, Problem, Decision, Execution, Outcome, Learning
- [ ] Metrics appear inline within narrative, not in a separate results section
- [ ] Vertical flow throughout — no sidebar, tabs, or accordions
- [ ] RelatedCaseStudies links to the other three case studies
- [ ] CTA present on the page
- [ ] CreativeWork + BreadcrumbList schema markup present and valid
- [ ] Meta title names the company and outcome
- [ ] Meta description summarizes the case study
- [ ] Open Graph tags present: og:title, og:description, og:url
- [ ] Canonical URL declared
- [ ] Heading hierarchy: exactly one h1 (case study title), h2 = narrative section headings, no skipped levels
- [ ] CanadaHelps named and framed with commercial scale in every mention (ADR 0008)
- [ ] Key metrics present: retention, stickiness, NPS, MAU, 45 pp conversion lift
- [ ] AI sales agent content (Story 5) folded into the narrative
- [ ] All copy passed through Humanizer Gate and Post Humanizer Gate
- [ ] Page-level render tests pass including standalone, framing, and SEO assertions
