# 03 — Case study template + CanadaHelps Turnaround

**What to build:** A reusable case study page layout and the first live instance (CanadaHelps Turnaround). The template handles everything that is the same across all four case studies: IdentityBar (standalone "who is Aju" context line so the page converts without the homepage, per ADR 0005), title block with case study name, company framing with commercial scale, and headline metrics at pull-quote scale. Six ruled narrative sections following the decision narrative structure: Context, Problem, Decision, Execution, Outcome, Learning. Metrics appear inline within the narrative, not in a separate results section. RelatedCaseStudies linking to the other three case studies. CTAContact with email and LinkedIn. CreativeWork + BreadcrumbList schema markup baked into the template. SEO infrastructure at the template level: meta title (names the company and outcome), meta description, OG tags (og:title, og:description, og:url), canonical URL — all driven by per-instance content. Heading hierarchy: h1 = case study title, h2 = narrative section headings. New case studies in V2 reuse this template by adding new content and a route.

First instance: CanadaHelps Turnaround (CH10). The transformation narrative: inherited 4 disconnected teams operating in silos, diagnosed gaps in first 90 days, built one coherent operating strategy with two pillars (pod restructuring and AI as operating lever). The AI sales agent (Story 5) folds into the narrative as the second pillar, not as a standalone AI story — it demonstrates strategic AI deployment within a transformation, not experimental tinkering. CanadaHelps named and framed with commercial scale in every mention: "$260M+ processing volume, $27M+ P&L" (ADR 0008). Content sourced from story-bank CH10 and Story 5. Key metrics: retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33, MAU 10K to 16K, AI sales agent 5% to 45% conversion. All copy through Humanizer Gate and Post Humanizer Gate.

Forwarding this case study URL to Slack or LinkedIn shows a controlled preview card with the case study title and description, not a blank box.

**Blocked by:** None — 01 (scaffold) is complete.

**Status:** ready-for-agent

- [ ] Case study template renders: IdentityBar, title block with company framing and pull-quote metrics, six narrative sections separated by horizontal rules, RelatedCaseStudies, CTAContact
- [ ] IdentityBar provides standalone "who is Aju" context (page works without homepage, ADR 0005)
- [ ] Six narrative sections follow decision narrative structure: Context, Problem, Decision, Execution, Outcome, Learning
- [ ] Metrics appear inline within narrative, not in a separate results section
- [ ] Vertical flow throughout — no sidebar, tabs, or accordions
- [ ] RelatedCaseStudies links to the other three case studies
- [ ] CTA present on the page with email and LinkedIn
- [ ] CreativeWork + BreadcrumbList schema markup present and valid
- [ ] Meta title names CanadaHelps and the transformation outcome
- [ ] Meta description summarizes the turnaround narrative
- [ ] Open Graph tags present: og:title, og:description, og:url
- [ ] Canonical URL declared
- [ ] Heading hierarchy: exactly one h1 (case study title), h2 = narrative section headings, no skipped levels
- [ ] CanadaHelps named and framed with commercial scale in every mention (ADR 0008)
- [ ] Key metrics present: retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33, MAU 10K to 16K
- [ ] AI sales agent content (Story 5) woven into the narrative as an operating lever, not a standalone AI story
- [ ] Pod restructuring narrative present (4 disconnected teams to 3 cross-functional pods)
- [ ] All copy passed through Humanizer Gate and Post Humanizer Gate
- [ ] Template is reusable: a new case study instance can be added by providing content and a route, not by duplicating layout code
