# ADR 0006: Four Case Studies in V1

**Status:** Accepted (revised 2026-10-13)
**Date:** 2026-10-13

## Decision

V1 ships with four case studies. Two CanadaHelps stories (turnaround and incubation), one LexisNexis story, and one Mapleview AI product.

### V1 case studies

1. **CanadaHelps Turnaround** (CH10) — Executive transformation. Inherited 4 disconnected teams, built coherent operating strategy, restructured into pods, deployed AI as operating lever (45 pp conversion lift). Retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33.
2. **CanadaHelps Ensemble** — 0 to 1 SaaS incubation. $432K ARR, 200+ customers, 86% PLG. Includes CH1→CH2→CH3 failure arc.
3. **HPCC Platform Commercialization** — Internal tech to $50M+ business. 100+ enterprise clients. 25K+ developer community.
4. **Redline** — AI contract review product. Research driven (71% freelancer non payment), trust first architecture (every flag cites its source), full stack execution (auth, database, 68 tests, 13 routes). Live at redline-kappa-umber.vercel.app.

### What each proves

- CH10 Turnaround: Executive judgment, team restructuring, AI as operating lever, P&L stewardship
- Ensemble: 0 to 1 product incubation, failure and recovery, unit economics thinking
- HPCC: Platform commercialization and enterprise GTM from scratch
- Redline: AI product thinking (research to PRD to production), trust first architecture, full stack execution

### Cut and why

- **AI Sales Agent:** The 45 pp conversion lift folds into the CH10 Turnaround as a proof point ("AI as operating lever"). Does not need a standalone case study; the metric is strongest when it demonstrates a lever within a transformation narrative, not as an isolated AI deployment story.
- **AI Competitive Intelligence:** Replaced by Redline, which proves the same capability (production AI build, live proof link) plus product thinking (user research, PRD with trade offs, trust first architecture, 68 tests). AI CI is a tool; Redline is a full product.
- **SBA Covid Deployment:** Impressive scale ($5B) but thin decision narrative. Demonstrates crisis execution, not strategic thinking.
- **AI QuickBooks Reconciliation:** Strong decision narrative but small scope relative to the other four.

## Alternatives

1. **Keep AI Sales Agent as standalone.** The 45 pp lift is attention grabbing but the decision narrative is thin (could have hired reps, chose AI). More powerful as a beat within the turnaround story than as a standalone page.
2. **Keep AI Competitive Intelligence instead of Redline.** AI CI has a live proof link but lacks the product thinking depth. Redline has research, a PRD with documented trade offs, a trust first architecture, and 68 tests. Both have live deployments.
3. **Combine CH10 and Ensemble into one mega case study.** Would be too long for a 5 to 10 minute read. They prove different things (turnaround vs. builder) and are stronger as separate narratives.

## Consequences

- Two CanadaHelps case studies out of four. This is intentional: CanadaHelps is the defining experience ($27M+ P&L, board governance, 0 to 1, AI deployment). Two stories give it proportional weight.
- The AI Sales Agent's 45 pp lift does not disappear. It becomes a proof point within the CH10 Turnaround narrative.
- Redline has a live proof link (redline-kappa-umber.vercel.app) and a GitHub repo, same as AI CI did.
- Cut stories can be referenced in the About page timeline and added as V2 case studies.
