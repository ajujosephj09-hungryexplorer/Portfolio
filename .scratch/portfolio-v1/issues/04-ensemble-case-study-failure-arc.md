# 04 — Ensemble case study (failure arc)

**What to build:** The Ensemble case study using the template from ticket 03. This is the most complex case study and the one that carries the deep, multi-beat failure arc (ADR 0009). The narrative weaves together three threads: the 0-to-1 SaaS incubation (CH4), the three-beat failure cascade (CH1→CH2→CH3), and the DMS sunset that funded the incubation (CH6).

The failure arc is the structural centerpiece. CH1: Extended trial from 2 to 4 weeks despite sales pushback. PLG conversion dropped from 25% to 10%. Revenue fell 40% below target ($60K vs $100K). CH2: Flipped trial back, offered targeted discounts, cleaned 20%+ of stale pipeline, replenished with better leads. Q3 forecast hit $140K (140% of target). CH3: The recovery discounts crashed LTV:CAC from 4:1 to 1.3:1, CAC payback stretched to 46 months. Fixed by improving product value first (Reporting feature, $75/month floor), 10% renewal price increase, engagement and retention plays, PLG funnel investment. Each fix creates the next problem — the structure must make the failure read as the setup for the recovery, not as the headline. A hiring manager should be able to identify the moment Aju was wrong and what he learned (the depth test from the PRD).

The incubation narrative includes: hypothesis validation despite false negatives (webinar showed $0 willingness to pay, beta invitees were all no-shows), 25% of sales team assigned, 10 deals closed in month one — real demand showed when the product was sold directly. The DMS sunset context: legacy CRM with ~70 clients losing $115 per $100 earned, LTV:CAC below 1, sunset over 2 years, freed headcount and budget for Ensemble.

CanadaHelps named and framed with commercial scale in every mention (ADR 0008). Content sourced from story-bank CH4 (incubation), CH1 (trial extension failure), CH2 (sales recovery), CH3 (unit economics fix), CH6 (DMS sunset). Key headline metrics: $432K ARR, 200+ customers, 86% PLG. Page-specific meta title, description, and OG tags. All copy through Humanizer Gate and Post Humanizer Gate.

**Blocked by:** 03 — Case study template + CanadaHelps Turnaround.

**Status:** done

- [ ] Ensemble page renders using the case study template from ticket 03
- [ ] Three-beat failure arc present with specific numbers at each beat: conversion crash (25% to 10%), revenue gap (40% below $100K target), LTV:CAC crash (4:1 to 1.3:1)
- [ ] Failure arc reads as setup for recovery, not as the headline (ADR 0009)
- [ ] Each fix visibly creates the next problem (trial fix → discounts, discounts → unit economics crash)
- [ ] 0-to-1 incubation narrative present: false negatives (webinar, beta), direct sales validation, growth to 200+ customers
- [ ] DMS sunset context included: $115 lost per $100 earned, sunset decision, resource reallocation to Ensemble
- [ ] CanadaHelps named and framed with commercial scale in every mention (ADR 0008)
- [ ] Headline metrics present: $432K ARR, 200+ customers, 86% PLG
- [ ] IdentityBar provides standalone context (ADR 0005)
- [ ] CTA present on the page
- [ ] RelatedCaseStudies links to the other three case studies
- [ ] CreativeWork + BreadcrumbList schema markup present
- [ ] Meta title names CanadaHelps and the incubation outcome
- [ ] Open Graph tags present: og:title, og:description, og:url
- [ ] Canonical URL declared
- [ ] Heading hierarchy: exactly one h1, no skipped levels
- [ ] All copy passed through Humanizer Gate and Post Humanizer Gate
