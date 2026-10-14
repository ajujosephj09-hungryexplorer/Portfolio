# 04 — Ensemble case study (failure arc)

**What to build:** The Ensemble case study using the template from ticket 03. This is the case study that carries the deep, multi-beat failure arc (ADR 0009). The narrative follows the CH1→CH2→CH3 cascade: trial extension from 2 to 4 weeks kills PLG conversion (25% to 10%), revenue falls 40% below target. Sales recovery with 4 actions, Q3 forecast hits $140K (140% of target). But discounts used in the recovery crash unit economics, LTV:CAC falls to 1.3:1. Fix: coached team on 4 corrective actions. Each fix creates the next problem — the structure must make the failure read as the setup for the recovery, not as the headline.

Also includes the 0-to-1 SaaS incubation narrative (CH4): hypothesis validation despite false negatives (webinar showed $0 willingness, beta no-shows), 25% of sales team assigned, 10 deals closed month one. And the DMS sunset context (CH6): legacy CRM losing $115 per $100, sunset over 2 years, freed resources for Ensemble.

CanadaHelps named and framed with commercial scale in every mention (ADR 0008). Key metrics: $432K ARR, 200+ customers, 86% PLG. Page-specific meta title, description, and OG tags. All copy through Humanizer Gate and Post Humanizer Gate.

**Blocked by:** 03 — Case study template + CanadaHelps Turnaround.

**Status:** ready-for-agent

- [ ] Ensemble page renders using the case study template
- [ ] Three-beat failure arc present with specific numbers at each beat: conversion crash (25% to 10%), revenue gap (40% below target), LTV:CAC crash (1.3:1)
- [ ] Failure arc reads as setup for recovery, not as the headline (ADR 0009)
- [ ] 0-to-1 incubation narrative present (CH4 content)
- [ ] DMS sunset context included (CH6 content)
- [ ] CanadaHelps named and framed with commercial scale in every mention (ADR 0008)
- [ ] Key metrics present: $432K ARR, 200+ customers, 86% PLG
- [ ] IdentityBar provides standalone context (ADR 0005)
- [ ] CTA present on the page
- [ ] RelatedCaseStudies links to the other three case studies
- [ ] Meta title names the company and the incubation outcome
- [ ] Open Graph tags present: og:title, og:description, og:url
- [ ] Canonical URL declared
- [ ] Heading hierarchy: exactly one h1, no skipped levels
- [ ] All copy passed through Humanizer Gate and Post Humanizer Gate
- [ ] Page-level render tests pass including failure arc presence, framing, and SEO assertions
