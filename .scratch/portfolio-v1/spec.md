# Portfolio V1 — Remaining Build Spec

**Status:** ready-for-agent
**Date:** 2026-10-15
**Covers:** Tickets 03 through 08 (case study template, four case study instances, about page, contact page, Lighthouse CI build gate)
**Prerequisite:** Tickets 01 (scaffold, visual system) and 02 (landing page) are complete. The landing page is built, finish-reviewed, and DESIGN.md is extracted.

---

## Problem Statement

A hiring manager Googles "Aju Joseph John" and lands on the portfolio. The landing page communicates positioning and key metrics in 60 seconds. But the site has no depth behind it. Case study links go nowhere. The About and Contact pages do not exist. The visitor cannot read a decision narrative, confirm career trajectory, or reach out. The credibility validator is a facade with one surface.

Panel hiring means a case study link gets forwarded to 2 to 5 evaluators who never see the homepage. Today, those links 404. Each forwarded link is a missed conversion.

The site also has no automated quality gate. A content change that breaks performance, accessibility, or SEO ships silently.

## Solution

Build the remaining six deliverables that complete the V1 credibility validator:

1. A reusable case study template and the CanadaHelps Turnaround instance (the first case study, which establishes the pattern).
2. The Ensemble case study with its three-beat failure arc (CH1→CH2→CH3).
3. The HPCC and Redline case studies (completing all four).
4. The About page (career narrative, experience timeline, education, what drives me).
5. The Contact page (minimal, 30 second conversion target).
6. A Lighthouse CI build gate (automated quality checks on every deploy).

After this build, the site has 8 working routes, every internal link resolves, every page stands alone, and an automated gate prevents quality regressions.

## User Stories

### Case study pages (general)

1. As a hiring manager, I want to read a full decision narrative for a specific case study, so that I can evaluate how Aju thinks under constraint, not just what the outcome was.
2. As a hiring manager, I want each case study to follow a consistent structure (Context, Problem, Decision, Execution, Outcome, Learning), so that I can scan predictably across case studies.
3. As a panel member who received a forwarded case study link, I want the page to tell me who Aju is without requiring me to visit the homepage, so that I can evaluate him from this single URL.
4. As a panel member, I want to see contact info on the case study page, so that I can reach out directly without navigating elsewhere.
5. As a hiring manager, I want to see links to the other three case studies at the bottom of each case study, so that I can continue reading without going back to the homepage.
6. As a hiring manager reading on mobile, I want the case study content to stack vertically and remain readable, so that I can review it between meetings on my phone.
7. As a PE/VC search firm member, I want headline metrics at pull-quote scale near the top of the case study, so that I can confirm commercial impact within seconds.
8. As a recruiter forwarding a case study link via Slack, I want the link preview to show a controlled title and description (not a blank card or random text grab), so that the recipient sees a professional preview before clicking.

### CanadaHelps Turnaround (case study instance)

9. As a hiring manager, I want the CanadaHelps Turnaround case study to show the transformation arc (4 disconnected teams to 1 coherent operating strategy), so that I can see executive judgment and organizational restructuring ability.
10. As a hiring manager, I want to see the AI sales agent as an operating lever within the turnaround narrative (not as a standalone AI story), so that I understand AI was deployed strategically, not experimentally.
11. As a hiring manager, I want to see specific before/after metrics (retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33, MAU 10K to 16K), so that I can assess the scale of impact.
12. As a hiring manager, I want every mention of CanadaHelps to include commercial framing ("$260M+ processing volume, $27M+ P&L"), so that I understand this is a payments platform, not a charity.

### Ensemble (case study instance)

13. As a hiring manager, I want to read a three-beat failure arc where each fix creates the next problem (trial extension kills conversion, discounts recover sales but crash unit economics, unit economics fix), so that I can see learning velocity and systems thinking.
14. As a hiring manager, I want the failure to read as the setup for the recovery, not as the headline, so that I come away impressed by the diagnostic ability rather than alarmed by the mistake.
15. As a hiring manager, I want to see the 0-to-1 incubation narrative (hypothesis validation despite false negatives, first deals closed personally, growth to 200+ customers), so that I can evaluate product building ability from scratch.
16. As a hiring manager, I want to understand the DMS sunset context (legacy CRM losing $115 per $100 earned, decision to sunset and reallocate resources), so that I can see the hard portfolio decisions that funded the incubation.
17. As a hiring manager, I want to see $432K ARR, 200+ customers, and 86% PLG as headline metrics, so that I can quickly assess the scale of the 0-to-1 outcome.

### HPCC Platform Commercialization (case study instance)

18. As a hiring manager, I want to read how an internal technology was turned into a $50M+ market-facing business, so that I can evaluate commercialization ability at enterprise scale.
19. As a hiring manager, I want to see the channel-building detail (reseller network, delivery partnerships, marketplace, 25K+ developer community), so that I can assess GTM execution breadth.
20. As a hiring manager, I want to understand the investment case process (12 business cases, $38M total, CEO + chairman approvals), so that I can see board-level communication and governance ability.

### Redline (case study instance)

21. As a hiring manager, I want to see that Redline started from user research (71% of freelancers experience non-payment), so that I can evaluate product thinking, not just technical execution.
22. As a hiring manager, I want to understand the trust-first architecture (every risk flag cites its source sentence), so that I can see how Aju designs AI systems that earn user trust.
23. As a hiring manager, I want proof links to the live deployed app and GitHub repo, so that I can verify the product is real and inspect the code.
24. As a hiring manager, I want to see the execution scope (68 tests, 13 routes, auth, database), so that I can assess full-stack delivery capability.

### About page

25. As a hiring manager who has read a case study, I want a career narrative that explains the trajectory thematically (not chronologically), so that the breadth reads as deliberate range rather than scattered generalism.
26. As a hiring manager, I want an experience timeline that shows the progression from Cognizant through Databricks with 1-2 proof points per role, so that I can quickly map the career arc.
27. As a hiring manager, I want to see Mapleview Partners framed as a continuous advisory practice (not a gap), so that the Nov 2021 to Aug 2023 period reads as productive consulting rather than unemployment.
28. As a hiring manager, I want CanadaHelps framed with commercial scale in every mention on the About page, so that the payments platform reality reinforces what I saw in the case studies.
29. As a PE/VC search firm member, I want to see education credentials (Duke MBA, B.Tech with First Class with Distinction), so that I can confirm academic caliber.
30. As a hiring manager, I want a "what drives me" section that reveals motivations and working style, so that I can assess cultural and role fit beyond the resume.
31. As a hiring manager, I want the About page to have no headshot, skills grid, tag cloud, or horizontal timeline, so that it reads as an executive narrative, not a developer portfolio.

### Contact page

32. As a visitor ready to reach out, I want to see email and LinkedIn links immediately with no friction, so that I can make contact within 30 seconds of landing.
33. As a recruiter on mobile, I want all contact links to have generous tap targets, so that I can tap accurately on a phone screen.
34. As a visitor, I want to see Substack and GitHub as secondary links, so that I can explore further if interested without those links competing with the primary action.
35. As a visitor, I want no contact form, calendar widget, or decorative content, so that the page is fast and focused on the single action.

### Quality gate

36. As the site owner, I want `next build` to produce all 8 routes in the static export with zero errors, so that I know the full site compiles correctly.
37. As the site owner, I want a GitHub Action that runs Lighthouse CI on every deploy and fails the build if Performance drops below 90 or Accessibility drops below 90, so that quality regressions are caught before they ship.
38. As the site owner, I want automated checks confirming every page has a unique meta title, meta description, OG tags, canonical URL, one h1, and no skipped heading levels, so that SEO hygiene is maintained as content changes.
39. As the site owner, I want all internal navigation links validated against the routes in the export, so that broken links never ship.
40. As the site owner, I want a sitemap at /sitemap.xml that includes all 8 routes, so that search engines can index the full site.
41. As the site owner, I want schema markup validated (Person on landing and about, CreativeWork on case studies, BreadcrumbList on landing and case studies), so that rich results are available in Google search.

### Cross-cutting

42. As a hiring manager, I want every page to load in under 2 seconds on mobile 4G, so that I do not abandon the site due to slow performance.
43. As a visitor using assistive technology, I want the site to meet WCAG 2.1 AA, so that I can navigate and read all content.
44. As a hiring manager comparing candidates, I want the navigation to be consistent across all pages (same nav bar, same footer, same social icons), so that the site feels cohesive.
45. As the site owner, I want all copy to go through the Humanizer Gate and Post Humanizer Gate (no hyphens between words, no em dashes in body text), so that the voice is consistent and human.

## Implementation Decisions

### Case study template architecture

One reusable page layout serves all four case study instances. Each instance provides its own content (title, company framing, metrics, narrative sections, related links, proof links, SEO metadata). The template handles structure: IdentityBar, title block, six ruled narrative sections, RelatedCaseStudies, CTAContact, schema markup, and SEO tags. New case studies in V2 reuse the same template by adding a new content file and route.

### Decision narrative structure

Every case study follows six sections in order: Context, Problem, Decision, Execution, Outcome, Learning. Sections are separated by horizontal rules (the site-wide structural device). Metrics appear inline within the narrative, not in a separate "results" section. This keeps the numbers connected to the decisions that produced them.

### Standalone page requirement (ADR 0005)

Every case study includes an IdentityBar: a one-line "who is Aju" context sentence at the top. This makes the page work for a panel member who received a forwarded link with zero context. The IdentityBar, CTA, and page-level SEO metadata together ensure each case study converts independently.

### CanadaHelps framing rule (ADR 0008)

Every mention of CanadaHelps on any page includes commercial scale in the same breath. Format: company name + platform descriptor + financial scale. This applies to: CanadaHelps Turnaround case study, Ensemble case study, About page timeline entries, and any other surface where the company name appears. The framing prevents the "nonprofit snap judgment" identified in the PRD.

### Failure arc integration (ADR 0009)

The Ensemble case study carries the CH1→CH2→CH3 three-beat failure arc. The narrative structure accommodates it naturally: Context → Decision (trial extension) → Failure (conversion crash) → Diagnosis → Recovery (discounts) → Second-order failure (unit economics crash) → Fix → Outcome. The failure is specific (numbers, timelines) not vague. No other case study is required to include a forced failure arc.

### About page: thematic, not chronological

The career narrative uses 3-4 thematic paragraphs organized around the positioning line ("built products from zero and run the P&L to scale them"). The experience timeline is a separate section that provides chronological facts (period, role, company, 1-2 proof points per entry) as a ruled vertical list. This separates the "why the career makes sense" narrative from the "what happened when" reference. Mapleview Partners appears as a continuous advisory practice. The "what drives me" section is sourced from the mnookin two-pager but filtered: no comp ranges, no work authorization details, no in-office mandate opinions.

### Contact page: minimal by design

One invitation line, email mailto, LinkedIn link, Substack link, GitHub link. No form, no calendar, no map, no decorative content. Generous tap targets on mobile. The 30-second conversion target means the page should feel like a business card, not a landing page.

### Visual system continuity

All new pages use the design system documented in DESIGN.md and its sidecar design.json. The five-token palette, six type roles, horizontal rules as structural device, zero border-radius, zero box-shadows, single blue accent. The case study template, about page, and contact page inherit the same visual world as the landing page. No new colors, no new type roles, no new structural devices.

### SEO infrastructure per page

Every page declares: meta title (controls Google snippet), meta description, Open Graph tags (og:title, og:description, og:url — controls Slack/LinkedIn preview cards), canonical URL, and semantic heading hierarchy (one h1, no skipped levels). Case study pages add CreativeWork schema. The about page adds Person schema. The landing page already has Person + BreadcrumbList. A sitemap at /sitemap.xml includes all 8 routes.

### Content pipeline

All website copy goes through the Humanizer Gate (voice and tone), then the Post Humanizer Gate (strip hyphens between words, replace em dashes with appropriate punctuation). This applies to every page, every heading, every body text block. The gates run before copy is finalized in code.

### Static export constraint

The entire site is a Next.js static export. No server runtime, no API routes, no database queries, no dynamic rendering. Every page is pre-rendered at build time. This means: no contact form backend (mailto only in V1), no analytics beyond what Vercel provides, no dynamic content. The constraint is a feature: sub-2-second LCP, zero server costs, zero attack surface.

## Testing Decisions

### What makes a good test

Tests assert on the shipped artifact (the static export HTML files), not on internal component behavior. A test that imports a React component and checks its props is testing implementation. A test that reads the exported HTML and checks for a meta tag is testing what the user gets. We test what the user gets.

### Single testing seam: the static export

`next build` produces HTML files in the output directory. All assertions run against these files:

- **Build completeness:** all 8 routes exist as HTML files in the export.
- **SEO assertions per page:** meta title present and unique, meta description present, OG tags present (og:title, og:description, og:url), canonical URL declared, exactly one h1, heading levels do not skip.
- **Schema markup:** JSON-LD blocks parsed and validated. Person schema on landing and about. CreativeWork schema on case study pages. BreadcrumbList on landing and case study pages.
- **Content assertions:** CanadaHelps commercial framing text present on relevant pages. Failure arc beats (specific numbers) present in Ensemble. Proof links present in Redline. IdentityBar text present on all case study pages. CTA present on every page.
- **Navigation integrity:** all internal href values in anchor tags resolve to routes that exist in the export.
- **Sitemap:** /sitemap.xml exists and contains all 8 route URLs.

### Second testing seam: Lighthouse CI

A GitHub Action runs Lighthouse against the exported site served locally. Thresholds:
- Performance > 90
- Accessibility > 90
- SEO score checked (not hard-gated, but reported)

Lighthouse catches what HTML assertions cannot: render performance, color contrast, tap target sizing, image optimization, and cumulative layout shift.

### No prior art

The codebase has no existing tests. These are the first. The pattern (assert on exported HTML + Lighthouse CI) becomes the testing convention for future pages.

## Out of Scope

- **Writing/Blog page or Substack integration.** Cut from V1 (ADR 0004). The LinkedIn content audience is not served.
- **Contact form backend.** V1 uses mailto. A form service (Formspree or similar) is a V2 consideration.
- **Custom domain.** Not yet purchased. The site deploys to a Vercel subdomain.
- **CMS or admin interface.** Content updates happen via git commit and Vercel deploy.
- **Database, auth, or server runtime.** Nothing in V1 requires them (ADR 0010).
- **Additional case studies beyond the four specified.** AI Sales Agent, AI Competitive Intelligence, SBA Covid, and QuickBooks Reconciliation are cut (ADR 0006). They can be added in V2.
- **Testimonials or third-party endorsements.** None exist. The site must not fabricate any.
- **Dark mode.** Not in the design system. Not requested.
- **Analytics integration beyond Vercel defaults.** No tracking pixels, no Google Analytics, no event instrumentation.
- **Headshot on the About page.** Headshot appears on the landing page only (about surface brief anti-goal).
- **i18n.** English only.

## Further Notes

### Content sourcing by page

Each page's content comes from specific source documents. The builder should read the relevant sources, not invent content:

- **CanadaHelps Turnaround:** story-bank CH10 (first 90 days, pod restructuring, results) + Story 5 (AI sales agent folds in as operating lever). Intake summary career highlights for metrics.
- **Ensemble:** story-bank CH4 (0-to-1 incubation), CH1 (trial extension failure), CH2 (sales recovery), CH3 (unit economics fix), CH6 (DMS sunset context). Intake summary for headline metrics.
- **HPCC:** story-bank LN1 (HPCC commercialization), intake summary. Additional LN stories (LN2 Brazil pricing, LN5 positioning pivot) can be referenced if they fit the narrative sections.
- **Redline:** The Redline repo's PRD.md and BUILD-REPORT.md are the primary sources. The intake summary has a brief version.
- **About page:** intake summary (experience timeline, differentiators), mnookin two-pager (what drives me, what to avoid — filtered for public content), resume-archetypes (bullet text for proof points per role).
- **Contact page:** contact details from intake summary. Invitation line is new copy (goes through Humanizer Gate).

### Ticket dependency graph

```
01 (scaffold) ─── done
02 (landing)  ─── done
03 (template + CH turnaround) ← blocked by 01
04 (ensemble)                 ← blocked by 03
05 (HPCC + Redline)           ← blocked by 03
06 (about)                    ← blocked by 01
07 (contact)                  ← blocked by 01
08 (lighthouse CI)            ← blocked by 02, 04, 05, 06, 07
```

Tickets 03, 06, and 07 can start in parallel (all blocked only by 01, which is done). Ticket 04 and 05 can start in parallel once 03 is done. Ticket 08 runs last after all pages exist.

### Redline source material

The Redline case study references a separate repo's PRD.md and BUILD-REPORT.md. If those files are not accessible from this repo's working directory, the builder should check for them at the path specified in the intake summary or ask for the content. The live app URL (redline-kappa-umber.vercel.app) and GitHub repo URL should be confirmed before hardcoding as proof links.
