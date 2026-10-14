# Spec: Portfolio V1 Build

**Date:** 2026-10-13
**Status:** Ready for agent

---

## Problem Statement

When a hiring manager, PE search firm, or potential co-founder Googles "Aju Joseph John," there is no controlled result that communicates P&L ownership, commercial impact, or executive judgment. The Google result is a LinkedIn profile and whatever else surfaces organically. There is no credibility validator.

The research shows 93% of hiring managers would examine a portfolio if provided, but only 15% of candidates provide one. The gap is the opportunity. However, a mediocre portfolio is worse than none: candidates who embed portfolio URLs in applications receive 37% fewer positive screening responses. The site must deliver signal faster than the visitor's patience window (3 to 5 minutes for recruiters, 5 to 10 minutes for hiring managers) or it actively hurts the candidacy.

Three compounding problems make this harder for a VP/GM profile: no executive portfolio conventions exist (all templates target designers and developers), the most recent employer name ("CanadaHelps") creates a nonprofit snap judgment that masks $260M+ commercial reality, and breadth across product/GTM/P&L/AI reads as generalist without deep decision narratives anchored in hard metrics.

---

## Solution

A lean, fast, frontend-only portfolio website that controls the Google result for "Aju Joseph John" and converts visitors who already have the name. Four page types (landing, case study x4, about, contact) following "The Deal Memo" visual world: near-white ground, near-black type, one blue accent, horizontal rules as the primary structural device, pull-quote sized metrics, no decorative elements.

Each case study follows a decision narrative structure (context, problem, decision, execution, outcome, learning) and works as a standalone page for the forwarded link use case. CanadaHelps is named and framed with commercial scale in every mention. The Ensemble case study carries a three-part failure arc. Every claim is sourced.

The site links outbound to Substack, LinkedIn, and GitHub. It does not embed or replicate content from those platforms. All copy goes through the Humanizer Gate and Post Humanizer Gate before finalization.

---

## User Stories

1. As a hiring manager, I want to see P&L ownership and commercial impact within 60 seconds of landing on the homepage, so that I can quickly assess whether this candidate operates at the level I am hiring for.

2. As a hiring manager, I want to read a decision narrative that shows how the candidate thinks under constraint, so that I can evaluate judgment quality beyond resume bullet points.

3. As a hiring manager on a panel, I want to forward a single case study link to co-evaluators, so that each person can assess the candidate independently without needing to navigate from the homepage.

4. As a panel evaluator receiving a forwarded case study link, I want to understand who this person is, what they did, and how to contact them from that single page, so that I do not need to navigate elsewhere.

5. As a hiring manager reading the Ensemble case study, I want to see a visible moment where the candidate was wrong and what they learned, so that I can assess self-awareness and recovery capability.

6. As a hiring manager unfamiliar with CanadaHelps, I want to immediately understand it as a $260M+ payments platform with 200+ SaaS customers, so that I do not dismiss the experience as nonprofit charity work.

7. As a PE/VC search firm partner, I want to find P&L evidence, board-level communication proof, and value creation stories within 5 minutes, so that I can decide whether to schedule a first meeting.

8. As a recruiter reviewing candidates between meetings on a phone, I want to find contact info and confirm role level within 90 seconds, so that I can move quickly to the next step.

9. As a recruiter on a mobile device, I want the site to load fast and be fully readable on my phone, so that I do not abandon it due to poor mobile experience.

10. As a peer or network contact, I want to share a specific case study link when making a referral, so that the recipient gets a self-contained credibility proof rather than a generic homepage.

11. As a visitor on any page, I want clear navigation to all other pages and a visible CTA, so that I can explore further or make contact without friction.

12. As a visitor scanning the homepage, I want to see four headline metrics (one per case study) at pull-quote scale, so that I can grasp the scope of impact before reading any narrative.

13. As a visitor on the about page, I want to see a career narrative organized thematically (not chronologically), so that I understand the thread connecting different roles rather than parsing a timeline.

14. As a visitor on the about page, I want to see an experience timeline with company, role, and 1-2 proof points per entry, so that I can verify career scope and progression.

15. As a visitor on the contact page, I want to reach Aju via email, LinkedIn, Substack, or GitHub with one tap, so that there is zero friction between intent and action.

16. As a visitor on any case study page, I want to see links to the other three case studies, so that I can continue reading without navigating back to the homepage.

17. As a visitor reading the Redline case study, I want a live proof link to the deployed app and a GitHub repo link, so that I can verify the work is real and inspect the code.

18. As a visitor reading the CanadaHelps Turnaround case study, I want to see how AI was deployed as an operating lever (45 pp conversion lift), so that I understand AI is a tool the candidate uses to drive outcomes, not a buzzword.

19. As a visitor reading the HPCC case study, I want to see the path from internal technology to $50M+ business with 100+ enterprise clients, so that I understand the candidate can commercialize at scale.

20. As a search engine crawler, I want Person, CreativeWork, and BreadcrumbList schema markup, so that the site ranks on page 1 for "Aju Joseph John" and displays rich results.

21. As a visitor using assistive technology, I want the site to meet WCAG 2.1 AA, so that I can navigate and read all content without barriers.

22. As a visitor on a slow mobile connection, I want the site to load with LCP under 2 seconds, so that I do not abandon it before content appears.

23. As the site owner, I want to add a new case study by following the same template and structure, so that the portfolio grows without architectural changes.

24. As the site owner, I want to update content via git commit and Vercel deploy, so that there is no CMS dependency.

---

## Implementation Decisions

### Stack

- Next.js static export deployed on Vercel. No database, no auth, no server runtime, no CMS. Confirmed in ADR 0010.
- Deploy initially on a Vercel subdomain. Custom domain added later (domain name not yet purchased).
- Contact via mailto link. Third-party form service (e.g., Formspree) is TBD and not required for V1 launch.

### Routing

Eight routes total, flat architecture:
- `/` — landing page
- `/case-studies/canadahelps-turnaround` — CanadaHelps Turnaround
- `/case-studies/ensemble` — Ensemble
- `/case-studies/hpcc` — HPCC Platform Commercialization
- `/case-studies/redline` — Redline
- `/about` — about page
- `/contact` — contact page

Case studies share a single template component with four content instances. No nested routing.

### Visual System (The Deal Memo)

- Background: #FAFAFA. Text: #111827. Accent: #1D4ED8 (links and CTAs only).
- Serif heading face (resolved at build via font-match), systematic sans body.
- Horizontal rules as the primary structural device. No gradients, glass, glow, decorative color, stock photography, or animations beyond subtle transitions.
- Pull-quote sized metrics (large number, small label).

### Structural SEO

Built in from the start, not retrofitted. These are invisible infrastructure items that directly serve the product goal of controlling the Google result for "Aju Joseph John."

- **Meta titles and descriptions** per page. The meta title controls the Google search snippet. Without it, Google picks whatever it wants and the framing is lost before the visitor clicks.
  - Landing: "Aju Joseph John — Product & P&L Leader" (or similar positioning anchor)
  - Case studies: title that names the company and the outcome
  - About: "About Aju Joseph John — Career & Leadership"
  - Contact: "Contact Aju Joseph John"
  - Descriptions: one sentence per page summarizing what the visitor will find

- **Open Graph tags** per page (og:title, og:description, og:image, og:url). When a case study link is forwarded via Slack, email, or LinkedIn, OG tags control the preview card. Without them, the link preview is blank or a random text grab. This directly affects the forwarded link use case (ADR 0005). The preview card IS the first impression for panel evaluators.

- **Canonical URLs** per page. Prevents duplicate content issues when the site is accessible on both a Vercel subdomain and a future custom domain. Each page declares its canonical URL.

- **Semantic heading hierarchy** per page:
  - Landing: h1 = name, h2 = case study titles in featured section
  - Case studies: h1 = case study title, h2 = narrative section headings (Context, Problem, Decision, Execution, Outcome, Learning)
  - About: h1 = page title, h2 = career narrative, experience timeline, education, what drives me
  - Contact: h1 = page title

- **Sitemap** (auto-generated at build). All 8 routes included. For a small new site competing against LinkedIn for "Aju Joseph John," every indexing signal matters.

### Shared Components

Seven shared components used across pages:
- **Nav** — Name (left), page links, social icons. Present on all pages.
- **Footer** — Social links, minimal. Present on all pages.
- **CTAContact** — Email, LinkedIn, invitation line. Present on all pages.
- **MetricTile** — Large number + small label in ruled columns. Used on landing and case study pages.
- **IdentityBar** — One-line "who is Aju" context. Used on case study pages for standalone requirement.
- **CaseStudyCard** — Title, company framing, teaser, metric, link. Used on landing page.
- **RelatedCaseStudies** — Links to the other three case studies. Used on case study pages.

### Landing Page Architecture

Content blocks in order:
1. Nav
2. Hero/Thesis — Name in serif heading, positioning line in body sans, one-line context
3. Metric strip — Four tiles in ruled columns (one per case study), 2x2 grid on mobile
4. Featured case studies — Four CaseStudyCards, stacking vertically on mobile
5. Career scope bar — Brief proof bar with headshot (headshot appears here only, not on about page)
6. CTAContact
7. Footer

First viewport contains: name, positioning line, context line, four metric tiles, CTA. Fold falls after the CTA. No image in first viewport.

Schema: Person + BreadcrumbList.

### Case Study Page Architecture (Single Template, 4 Instances)

Content blocks in order:
1. Nav
2. IdentityBar — standalone context line
3. Title block — case study name, company framing with commercial scale, headline metrics at pull-quote scale
4. Decision narrative — six ruled sections: Context, Problem, Decision, Execution, Outcome, Learning. Metrics inline within narrative, not separated into a "results" section.
5. CTAContact
6. RelatedCaseStudies — links to the other three
7. Footer

Vertical flow throughout. No sidebar, tabs, or accordions. Mobile: all blocks stack, metrics remain prominent.

Schema: CreativeWork + BreadcrumbList per page.

**Four instances:**
- CanadaHelps Turnaround (CH10): executive transformation, AI as operating lever. Source: story-bank CH10, Story 5 (AI sales agent folds in). Metrics: retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33, MAU 10K to 16K, 45 pp conversion lift.
- Ensemble: 0-to-1 SaaS incubation + CH1→CH2→CH3 failure arc. Source: story-bank CH4, CH1, CH2, CH3, CH6. Metrics: $432K ARR, 200+ customers, 86% PLG, LTV:CAC fix.
- HPCC Platform Commercialization: internal tech to $50M+ business. Source: intake + story-bank LN stories. Metrics: $50M+ revenue, 100+ enterprise clients, 25K+ developer community, 12 business cases, $38M investment.
- Redline: AI contract review product. Source: Redline PRD.md + BUILD-REPORT.md. Metrics: 71% freelancer non-payment research finding, 68 tests, 13 routes. Proof links: live app (redline-kappa-umber.vercel.app), GitHub repo.

### About Page Architecture

Content blocks in order:
1. Nav
2. Career narrative — 3-4 thematic paragraphs (not chronological), organized around the positioning line
3. Experience timeline — ruled vertical list. Each entry: period, role, company, 1-2 proof points. Eight entries from Cognizant through Databricks. Mapleview shown as continuous advisory practice (Nov 2021 to Aug 2023, paused for CanadaHelps, resumed Jul 2026).
4. Education — Duke MBA, B.Tech (First Class with Distinction), Pragmatic Institute Certified
5. What drives me — sourced from mnookin two-pager, filtered for public-appropriate content (no comp ranges, work auth, in-office mandates)
6. CTAContact
7. Footer

No headshot on this page. No skills grid, tag cloud, or horizontal timeline.

Schema: Person.

### Contact Page Architecture

Content blocks in order:
1. Nav
2. Invitation line — one sentence
3. Primary contact — email (mailto:ajujosephj09@gmail.com), LinkedIn profile link
4. Secondary links — Substack, GitHub
5. Footer

30-second conversion target. Generous tap targets on mobile. No form, calendar widget, or map.

### Content Rules (Apply to All Pages)

- CanadaHelps named and framed with commercial scale in every mention (ADR 0008).
- Ensemble includes CH1→CH2→CH3 failure arc with specific numbers and consequences (ADR 0009).
- Every claim sourced from documents. Unsourced claims are bugs (ADR 0001).
- Each case study works standalone without homepage context (ADR 0005).
- All copy through Humanizer Gate then Post Humanizer Gate before finalization.
- No invented claims, testimonials, or metrics.

### Content Source Mapping

| Content | Source File |
|---------|------------|
| Case study narratives | `../job-search-os/output/story-bank.md` |
| Metrics and career highlights | `output/Aju-summary.md` |
| Experience timeline bullets | `../job-search-os/context-library/resume-archetypes.md` |
| "What drives me" content | `../job-search-os/output/mnookin-two-pager.md` |
| Redline product details | `../Redline/PRD.md`, `../Redline/BUILD-REPORT.md` |
| Research citations | `research/summary.md` |

---

## Testing Decisions

### What makes a good test for this project

Tests should verify external behavior as experienced by the visitor, not implementation details. A good test renders a page and asserts that the visitor-facing contract is met: required content blocks are present, content rules are followed, links resolve, schema markup is valid. A bad test asserts on component internals, CSS class names, or implementation structure.

Since there is no backend, API, or database, all meaningful behavior is in the rendered output.

### Primary seam: Page-level render tests

Render each of the 8 pages and assert against the acceptance criteria from PRD Section 4. This is the highest useful seam and the only test suite needed.

Tests verify:
- **Structural completeness** — required content blocks present and in correct order on each page (Nav, content sections, CTA, Footer)
- **Standalone requirement** — each case study page contains an identity bar, its own metrics, and a CTA (forwarded link test)
- **CanadaHelps framing** — every mention of CanadaHelps includes commercial scale context (CanadaHelps test)
- **Failure arc presence** — Ensemble case study contains the CH1→CH2→CH3 failure arc with specific numbers (depth test)
- **Navigation** — all internal links resolve to valid routes
- **Proof links** — Redline case study contains live app link and GitHub repo link
- **Schema markup** — Person, CreativeWork, and BreadcrumbList present and structurally valid on appropriate pages
- **Meta titles and descriptions** — every page has a unique meta title and description in the HTML head
- **Open Graph tags** — every page has og:title, og:description, og:url (link preview card test)
- **Canonical URLs** — every page declares its canonical URL
- **Heading hierarchy** — each page has exactly one h1, headings do not skip levels
- **Sitemap** — /sitemap.xml exists and includes all 8 routes
- **Responsive behavior** — metric strip renders as 2x2 grid at mobile breakpoint; all content blocks stack vertically on mobile
- **CTA visibility** — contact information accessible on every page
- **Related case studies** — each case study page links to the other three

### Supporting seam: Static export build gate

`next build` succeeds with zero errors. All 8 routes resolve in the exported output. This runs as a build-time check, not a test suite.

### Supporting seam: Lighthouse CI

Automated Lighthouse audits against the built static output on every deploy via GitHub Actions:
- Performance score > 90 (LCP < 2s on mobile 4G)
- Accessibility score > 90 (WCAG 2.1 AA)
- SEO score checked (schema markup, meta tags)

Thresholds configured in a Lighthouse CI config file. Build fails if any threshold is breached.

### Prior art

No existing tests in the codebase (greenfield project). The Redline project (`../Redline/`) has 68 tests across 8 test files using a similar approach (test mocking at HTTP boundary only, engine runs for real). That pattern is a useful reference for test structure, though this project's tests are simpler since there is no API layer.

---

## Out of Scope

- **Writing/Blog page or Substack integration.** LinkedIn content audience is cut from V1 (ADR 0004). Substack is linked, not embedded.
- **Database, auth, or server runtime.** Nothing in V1 requires them (ADR 0010).
- **CMS.** Updates via git commit and Vercel deploy.
- **Custom domain.** Not yet purchased. Initial deploy on Vercel subdomain.
- **Contact form.** Mailto for V1. Third-party form service is a post-launch decision.
- **Additional case studies.** AI Sales Agent folds into CH10. AI Competitive Intelligence replaced by Redline. SBA and QuickBooks cut (ADR 0006).
- **Metrics dashboard or PE/VC summary view.** Hiring managers are Visitor #1 (ADR 0002).
- **Dark mode.** Not in any brief or ADR.
- **Analytics or tracking.** Not specified in V1 scope.
- **Headshot sourcing.** User provides the asset. The build places it.
- **Copy writing.** Actual website copy is written during the build phase and goes through Humanizer Gate and Post Humanizer Gate. This spec defines structure and content inventory, not final prose.

---

## Further Notes

**Build sequence per PRD:** Design (Impeccable visual comps) must be approved before any code is written. This spec defines the buildable structure. The Impeccable surface briefs (`.impeccable/surfaces/`) define the visual direction. Code follows approved comps.

**Font selection:** The serif heading face is TBD, resolved at build time via font-match against The Deal Memo visual world. The spec does not prescribe a specific typeface.

**Headshot:** Required on the landing page (career scope bar, below fold). Not on the about page. Asset to be provided by the user.

**Undecided items (from PRODUCT.md):**
- Custom domain name (not yet purchased)
- Contact form implementation (mailto vs. Formspree)

**Content risk:** The mnookin two-pager contains job-search-specific content (comp ranges, work authorization, in-office mandates) that must be filtered out before use. Only philosophical/values content is appropriate for the public "what drives me" section.

**Post-launch validation:** The PRD defines 8 testable success criteria (Section 4). Five are qualitative tests requiring a human evaluator (60-second test, forwarded link test, CanadaHelps test, depth test, scan test). Three are automated (performance, SEO, maintenance signal). The qualitative tests should be run manually after launch.
