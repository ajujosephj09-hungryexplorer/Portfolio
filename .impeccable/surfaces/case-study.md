---
version: 1
slug: "case-study"
primary_target: "case-study"
related_targets: []
---

# Case Study — Surface Brief

## Scope and mode

- **Surface:** Case study page (×4 instances, one template)
- **Mode:** Read
- **Build path:** Code-led

## Audience

Hiring manager or panel member evaluating a VP/GM/CEO candidate. May have arrived via forwarded link with zero context about Aju. Skeptical, comparing candidates. 5 to 10 minutes per case study. The forwarded link use case is the design constraint: this page must convert without the homepage.

## Job

After reading, the visitor says "I see how he thinks under constraint, and the numbers are real." Primary action: read a second case study, visit About, or contact.

## Proof and content

- Headline metrics at pull-quote scale (varies per instance)
- Company framing with commercial scale in the same breath as the company name
- Six-section decision narrative: Context, Problem, Decision, Execution, Outcome, Learning
- Failure arc woven into Decision and Execution sections (Ensemble carries CH1→CH2→CH3)
- Standalone "who is Aju" context line
- CTA with contact info
- Links to the other three case studies

### Four instances

1. **CanadaHelps Turnaround** (CanadaHelps): Executive transformation. Inherited 4 disconnected teams, built coherent operating strategy, restructured into pods, deployed AI as operating lever (45pp conversion lift). Retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33, MAU 10K to 16K. Source: story bank CH10, CH5 (AI sales agent).
2. **Ensemble** (CanadaHelps): $432K ARR, 200+ customers, 86% PLG. Three-part failure arc (CH1→CH2→CH3): trial extension kills conversion, discounts recover sales, discounts crash unit economics, fix. Source: story bank CH4, CH1, CH2, CH3, CH6.
3. **HPCC Platform Commercialization** (LexisNexis): $50M+ revenue, 100+ enterprise clients, 25K+ developer community. 12 business cases, $38M investment. Source: intake, story bank LN stories.
4. **Redline** (Mapleview Partners): AI contract review product for freelancers. Research driven (71% non payment), trust first architecture (every flag cites its source), full stack execution (auth, database, 68 tests, 13 routes). Live at redline-kappa-umber.vercel.app. GitHub repo. Source: Redline repo PRD.md, BUILD-REPORT.md.

## Content blocks

1. Nav: name (left), page links, social icons (same as landing page)
2. Identity bar: "who is Aju" one-line context (standalone requirement)
3. Title block: case study name, company framing with commercial scale, headline metrics at pull-quote scale
4. Decision narrative: six ruled sections flowing vertically (Context, Problem, Decision, Execution, Outcome, Learning)
5. CTA/Contact: email, LinkedIn, invitation line
6. Related case studies: links to the other three case studies
7. Footer: social links, minimal (same as landing page)

## Anti-goals

No sidebar navigation within the case study. No tabbed sections. No collapsible accordions. No timeline visualization of the narrative. No "results" section separate from the narrative (metrics live inline). No stock imagery or decorative illustrations.

## Constraints

- WCAG 2.1 AA
- Sub 2 second LCP
- CreativeWork + BreadcrumbList schema markup per case study
- Each page standalone: works without homepage context (ADR 0005)
- CanadaHelps named and framed with commercial scale in every mention (ADR 0008)
- Ensemble includes a deep, multi-beat failure arc with specific numbers and consequences (ADR 0009)
- Every claim supported by source documents (ADR 0001)
- All copy through Humanizer Gate then Post Humanizer Gate
- Mobile: content blocks stack vertically, metrics remain prominent
