# ADR 0006: Four Case Studies in V1

**Status:** Accepted (revised 2026-10-16)
**Date:** 2026-10-13 (revised 2026-10-16)

## Decision

V1 ships with four case studies. One CanadaHelps story (turnaround, with Ensemble failure arc folded in), one Fiserv story, one LexisNexis story, and one personal AI product.

### V1 case studies

1. **B2B Payments Business Turnaround** — Executive transformation at CanadaHelps. Inherited 4 disconnected teams, built coherent operating strategy, restructured into pods, deployed AI as operating lever (45 pp conversion lift). Processing revenue $230M to $266M. Ensemble incubation ($432K ARR, 200+ customers) and its failure arc folded in as a section.
2. **Building a $150M Banking Intelligence Portfolio** — Fiserv. Led a ~$150M banking intelligence portfolio serving ~4,000 banks. Built Abiliti SaaS platform ($0 to $24.9M ARR), led SBA PPP crisis response ($5B disbursed), drove Apple Pay API monetization (500+ banks, $10.5M revenue).
3. **HPCC Platform Commercialization** — Internal tech to $50M+ business. 100+ enterprise clients. 25K+ developer community.
4. **Redline** — Personal AI contract review product. Research driven (71% freelancer non payment), trust first architecture (every flag cites its source), full stack execution (auth, database, 68 tests, 13 routes). Live at redline-kappa-umber.vercel.app.

### What each proves

- B2B Payments Turnaround: Executive judgment, team restructuring, AI as operating lever, P&L stewardship, 0 to 1 incubation, failure and recovery
- Fiserv Portfolio: Portfolio scale ($150M), 0 to 1 SaaS building (Abiliti), crisis leadership (SBA), API monetization, strategic withdrawal (FDIC)
- HPCC: Platform commercialization and enterprise GTM from scratch
- Redline: AI product thinking (research to PRD to production), trust first architecture, full stack execution

### Revision history

**2026-10-16:** Replaced Ensemble with Fiserv case study. Ensemble failure arc folded into B2B Payments Turnaround. Renamed CanadaHelps Turnaround to B2B Payments Business Turnaround. Redline reframed as personal AI project (removed Mapleview Partners). Reasons: (1) Fiserv is a globally recognized brand name missing from the portfolio, (2) two CanadaHelps stories over concentrated the portfolio on one company, (3) the $150M portfolio and Abiliti $24.9M ARR are stronger proof points than Ensemble $432K ARR, (4) Ensemble failure arc is preserved by folding it into the turnaround narrative.

### Cut and why

- **Ensemble (standalone):** Failure arc and key metrics ($432K ARR, 200+ customers) folded into the B2B Payments Turnaround case study. Does not need a standalone page; the story is stronger as part of the turnaround narrative that enabled it.
- **AI Sales Agent:** The 45 pp conversion lift folds into the Turnaround as a proof point ("AI as operating lever"). More powerful as a beat within a transformation narrative.
- **AI Competitive Intelligence:** Replaced by Redline, which proves the same capability plus product thinking depth.
- **SBA Covid Deployment:** Folds into the Fiserv case study as a section. Impressive scale ($5B) but thin as a standalone decision narrative.
- **AI QuickBooks Reconciliation:** Strong decision narrative but small scope relative to the other four.

## Consequences

- Three major brand names (CanadaHelps, Fiserv, LexisNexis) plus one personal AI project. Better brand diversity than the previous two CanadaHelps concentration.
- The Ensemble failure arc does not disappear. It becomes a section within the turnaround case study.
- The SBA PPP story does not disappear. It becomes a section within the Fiserv case study.
- Redline has a live proof link (redline-kappa-umber.vercel.app) and a GitHub repo.
