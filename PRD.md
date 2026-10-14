# Portfolio Website — Product Requirements Document

**Date:** 2026-10-13
**Author:** Aju Joseph John
**Status:** Draft

---

## 1. Who this is for

**Primary: Hiring managers evaluating VP/GM/CEO candidates in B2B SaaS, fintech, payments, and data platforms.**

These are people who already have Aju's name. They received it from a recruiter, a referral, or a LinkedIn message. They are now doing due diligence. Today, they Google "Aju Joseph John" and find a LinkedIn profile, possibly a Substack, and whatever else Google surfaces. They spend 5 to 10 minutes forming an opinion. They may revisit the results before a final interview. If they are part of a hiring panel, they forward a link to 2 to 5 other evaluators.

93% of hiring managers would examine a portfolio if one were provided (research/summary.md, Section 5). Only 15% of candidates provide one (research/summary.md, Section 6). The gap is the opportunity.

What they need from a portfolio: projects with business outcomes, decision narratives that show how the candidate thinks under constraint, and evidence of the level they operated at. They are not looking for a resume rehash. They already have the resume.

**Secondary: PE/VC search firms who Google candidates before a first meeting.**

They need P&L evidence, board level communication proof, and value creation stories. They get this from the same case studies that serve hiring managers, embedded in the narrative rather than pulled into a separate dashboard. This may cost them 30 extra seconds. That is acceptable.

**Tertiary: Recruiters (fast confirmation of role fit), co-founders/partners (trust signals), and peers/network (forwardable case study links for referrals).**

These segments benefit from the same site but did not shape its information architecture.

**Explicitly not served in V1: the LinkedIn content audience** (recurring visitors who click through from LinkedIn posts wanting thought leadership depth). They need a Writing/Blog section with Substack integration. That section does not exist in V1. They can follow the outbound Substack link.

---

## 2. The problem

When a hiring manager, PE search firm, or potential co-founder Googles "Aju Joseph John" today, they do not find a site that communicates P&L ownership, commercial impact, or executive judgment. The Google result is uncontrolled. There is no credibility validator.

Building one is not automatically helpful. The research found a counter-intuitive result:

> "Candidates who embed live portfolio URLs in cover letters or resumes receive 37% fewer positive screening responses."
> — Ladders eye tracking study / Carnegie Mellon research ([source](https://lifetips.alibaba.com/tech-efficiency/why-you-shouldnt-link-to-your-web-portfolio-in-your-jo))

A mediocre portfolio is worse than no portfolio. The site must deliver signal faster than the visitor's patience window (3 to 5 minutes for a recruiter, 5 to 10 minutes for a hiring manager) or it actively hurts the candidacy.

Three specific problems make this harder for a VP/GM profile:

1. **No executive portfolio conventions exist.** All portfolio advice, templates, and critique content targets designers and developers. There is a massive gap for VP/GM/CEO level product and commercial leaders (research/summary.md, Section 4, Point 4). There is no playbook. This is also the opportunity: no competition.

2. **The most recent employer name creates a snap judgment.** CanadaHelps sounds like charity work. The commercial reality ($260M+ payments platform, $27M+ P&L, 200+ SaaS customers) is invisible in the name. The site must frame it before the visitor frames it themselves.

3. **Breadth reads as generalist.** A profile that spans product, GTM, P&L, AI, and team building could read as "does everything, masters nothing." Every case study must show depth in one specific area with hard metrics and a decision narrative. The case studies are not a tour of capabilities. Each one proves one thing.

---

## 3. What V1 does

V1 is a credibility validator: a lean, fast, frontend-only website that controls the Google result for "Aju Joseph John" and converts visitors who already have the name. It is not a content engine, a publishing platform, or a job application attachment. It links outbound to Substack, LinkedIn, and GitHub. It does not embed or replicate content from those platforms.

### Pages

1. **Landing page.** Hero section with name, positioning anchor, and key metrics. The visitor should be able to say "He's built products from zero and run the P&L to scale them" after 60 seconds. Featured case studies below the hero. Navigation. CTA (contact info) visible without scrolling.

2. **Case study pages (4).** One standalone page per case study. Each follows the decision narrative structure: context, problem, decision, execution, outcome, learning. Each page works without homepage context (its own "who is Aju" context line, its own metrics, its own CTA). Designed for the forwarded link use case.

   - **CanadaHelps Turnaround** (executive transformation at CanadaHelps). Inherited 4 disconnected teams, built coherent operating strategy, restructured into pods, deployed AI as operating lever (45 pp conversion lift). Retention 67% to 83%, stickiness 25% to 77%, NPS 5 to 33.
   - **Ensemble** (0 to 1 SaaS incubation at CanadaHelps). Includes the CH1→CH2→CH3 failure arc: trial extension kills conversion, sales recovery with discounts, discounts crash unit economics, fix. $432K ARR, 200+ customers, 86% PLG.
   - **HPCC Platform Commercialization** (internal tech to $50M+ business at LexisNexis). 100+ enterprise clients. 25,000+ developer community. 12 business cases, $38M investment.
   - **Redline** (AI contract review product, Mapleview Partners). Research driven product (71% freelancer non payment), trust first architecture (every flag cites its source), full stack execution (auth, database, 68 tests, 13 routes). Live proof link to deployed app. GitHub repo link.

3. **About page.** Career narrative (not resume rehash). Experience timeline from Cognizant through Databricks. Education. What drives Aju, what he avoids. Mapleview Partners shown as continuous advisory practice (Nov 2021 to Aug 2023, paused for CanadaHelps, resumed Jul 2026). CanadaHelps named and framed with commercial scale in every mention.

4. **Contact page.** Email, LinkedIn, Substack link, GitHub link. CTA. Contact method is mailto or a third party form service. No database.

### Content rules

- CanadaHelps is named in every mention and framed with commercial scale in the same breath. Format: "CanadaHelps: Canada's largest online giving and payments platform. $260M+ processing volume. $27M+ P&L." (ADR 0008)
- At least one case study includes a deep, multi-beat failure arc. Ensemble carries the CH1→CH2→CH3 arc. No forced failure in other case studies. (ADR 0009)
- GitHub appears as proof links inside relevant case studies (Redline) and as a social icon in the header/footer. Not a standalone page.
- Substack appears as an outbound link ("my writing") and as a social icon. Not embedded, not an RSS feed.
- All copy goes through the Humanizer Gate before finalization, then the Post Humanizer Gate (strip hyphens between words, replace em dashes with appropriate punctuation).
- Every claim on the site must be supported by source documents. A claim whose source cannot be shown is a bug. (ADR 0001)

### Technical requirements

- **Stack:** Next.js static export on Vercel. No Supabase. No database. No auth. No server runtime.
- **Performance:** Sub 2 second LCP. Pass Core Web Vitals. 63% of portfolio sites fail this (research/summary.md, Section 4, Point 1). This is a free differentiator.
- **Mobile:** Fully responsive. 60%+ of web traffic is mobile. Recruiters review on phones between meetings. 61% of mobile users will not return after a bad experience (research/summary.md, Issue #4).
- **SEO:** Person schema, CreativeWork schema, BreadcrumbList markup. Target page 1 for "Aju Joseph John" name search. Structural SEO built in from the start:
  - **Meta titles and descriptions** per page. The meta title controls the Google search snippet. Without it, Google picks whatever it wants from the page and the framing is lost before the visitor clicks. Same risk as the CanadaHelps name snap judgment, but at the search result level.
  - **Open Graph tags** per page. When a case study link is forwarded via Slack, email, or LinkedIn, OG tags control the preview card. Without them, the link preview is blank or a random text grab. This directly affects the forwarded link use case (ADR 0005).
  - **Canonical URLs** per page. Prevents duplicate content issues when the site is accessible on both a Vercel subdomain and a future custom domain.
  - **Semantic heading hierarchy** (h1/h2/h3 strategy per page). Google uses heading structure to understand page content and extract featured snippets.
  - **Sitemap** (auto-generated). Tells Google all 8 pages exist. For a small new site competing against LinkedIn for "Aju Joseph John," every indexing signal matters.
- **Accessibility:** WCAG 2.1 compliance. 68% of portfolio sites fail this (research/summary.md, Section 4, Point 3). Also affects SEO and corporate network access.
- **Updates:** Content changes happen via git commit and Vercel redeploy. No CMS. Adding a new case study should be a repeatable operation using the same template and structure.

---

## 4. What good looks like

These are testable. Each one can be verified by a person or a tool after V1 ships.

**The 60 second test.** Show the homepage to someone who does not know Aju. After 60 seconds, ask them to describe him in one sentence. If the sentence is close to "He's built products from zero and run the P&L to scale them," the homepage works. If they say "product manager" or "AI guy" or cannot recall, it does not.

**The forwarded link test.** Send a single case study URL (not the homepage) to someone with no context. They should be able to answer three questions from that page alone: who is this person, what did they do, and how do I contact them. If they need to navigate to the homepage to answer any of those, the page fails.

**The CanadaHelps test.** Show the Ensemble case study to someone unfamiliar with CanadaHelps. Ask what kind of company it is. If they say "nonprofit" or "charity" before they say "payments platform" or "SaaS," the framing failed.

**The depth test.** Ask a product leader to read the Ensemble case study. If they can identify the moment Aju was wrong and what he learned, the failure arc is working. If the case study reads as a clean success story, it is not.

**The scan test.** Give a recruiter the homepage on a phone. Time them. If they cannot find contact info and confirm role level within 90 seconds, the page fails for the secondary audience.

**Performance.**
- LCP under 2 seconds on mobile 4G (test with PageSpeed Insights).
- All Core Web Vitals pass (green).
- Lighthouse Performance score above 90.
- Lighthouse Accessibility score above 90.

**SEO.**
- "Aju Joseph John" Google search returns the portfolio on page 1 within 60 days of launch.
- Person, CreativeWork, and BreadcrumbList schema markup present and valid (test with Google Rich Results Test).
- Every page has a meta title and meta description (inspect via View Source or Lighthouse).
- Every page has Open Graph tags (og:title, og:description, og:url). Test by pasting a case study URL into Slack or LinkedIn and verifying the preview card shows a controlled title and description, not a random text grab.
- Canonical URLs present on every page.
- Sitemap exists at /sitemap.xml and includes all 8 routes.
- Each page has exactly one h1. Heading hierarchy does not skip levels.

**Maintenance signal.** The most recent role and most recent project visible on the site should reflect current reality. "When was this last updated?" is answered by the content, not by a timestamp.

---

## 5. The calls I made and what I gave up

**Call 1: Hiring managers are Visitor #1. Not PE/VC search firms.** (ADR 0002)

Chose: Information architecture optimized for a 5 to 10 minute deep read. Case studies written for decision narrative depth.

Chose against: Scannable metrics dashboard optimized for a 90 second PE/VC scan.

Who is worse off: PE/VC search firms spend 30 extra seconds finding the P&L numbers because they are embedded in narratives, not pulled out into a summary view. Recruiters get a site that is deeper than they need for a 3 to 5 minute confirmation visit.

**Call 2: V1 is a credibility validator, not a distribution hub.** (ADR 0003)

Chose: Lean, fast, mostly static site that links outbound to Substack, LinkedIn, and GitHub. Ships faster.

Chose against: Substack RSS integration, writing/blog section, SEO content engine.

Who is worse off: The long term SEO strategy. PM portfolios get near zero organic search traffic without a massive content library (research/summary.md, Section 6, Evidence #3). The validator will not generate organic discovery traffic. It only works for people who already have the name. The content engine that could change this is deferred.

**Call 3: LinkedIn content audience cut from V1.** (ADR 0004)

Chose: No Writing/Blog page. No Substack integration. Four page types: Landing, Case Studies, About, Contact.

Chose against: Serving recurring visitors from LinkedIn posts who want thought leadership depth.

Who is worse off: People who click through from a LinkedIn post and want to read more. They land on case studies and an About page instead of a writing archive. They have to follow the Substack link for that. If this traffic is higher than expected, revisit for V2.

**Call 4: Four case studies, revised lineup.** (ADR 0006)

Chose: CanadaHelps Turnaround (CH10), Ensemble, HPCC, Redline. Two CanadaHelps stories (turnaround and incubation), one LexisNexis, one Mapleview AI product.

Chose against: AI Sales Agent (standalone), AI Competitive Intelligence, SBA Covid Deployment, AI QuickBooks Reconciliation.

Who is worse off: AI Sales Agent's 45 pp lift folds into the CH10 Turnaround as a proof point; the metric is not lost. AI Competitive Intelligence is replaced by Redline, which proves the same capability (production AI build, live proof link) plus product thinking (user research, PRD with trade offs, trust first architecture, 68 tests). SBA and QuickBooks can be referenced in the About page timeline.

**Call 5: CanadaHelps named and framed, not buried.** (ADR 0008)

Chose: Name the company in every mention. Frame with commercial scale in the same breath.

Chose against: Leading with metrics and delaying the company name.

Who is worse off: Nobody, if the framing works. If it does not (if the visitor reads "CanadaHelps" and closes the tab before reaching the numbers), this call is wrong. The CanadaHelps test (Section 4) checks this.

**Call 6: One deep failure arc, not two.** (ADR 0009)

Chose: Ensemble carries the CH1→CH2→CH3 three-part failure arc. No forced failure in other case studies. One deep, multi-beat arc is more authentic than two thin ones.

Chose against: Requiring two failure arcs (original decision) and clean success stories only.

Who is worse off: Visitors who scan quickly and see a "revenue fell 40% below target" line out of context. The case study must be structured so the failure reads as the setup for the recovery, not as the headline. If a visitor reads only the failure and not the recovery, the structure failed.

**Call 7: Drop Supabase from V1.** (ADR 0010)

Chose: Next.js static export on Vercel. No database. No auth. No server runtime.

Chose against: Supabase for future readiness.

Who is worse off: V2 features that need a database (gated content, admin dashboard, analytics). They require a Supabase integration that does not exist yet. The migration cost is low (standard stack) but it is a cost.

**Call 8: Living validator, not static.** (ADR 0011)

Chose: Content gets updated with new projects and accomplishments. Architecture stays simple (git commit, Vercel deploy).

Chose against: Freezing the site after launch. Also chose against building a CMS for easier updates.

Who is worse off: Non-technical contributors who might want to update the site without touching code. This is a one-person portfolio; the owner is the updater; the owner can use git. If this changes, CMS becomes a V2 consideration.

---

## 6. What we are not building

**A Writing/Blog page.** The LinkedIn content audience is cut from V1 (ADR 0004). Substack is the content engine. The portfolio links to it. Adding a writing section without Substack integration creates a half-finished page that signals neglect. Adding it with integration makes V1 a distribution hub, which it is not (ADR 0003).

**Substack RSS integration.** Same reason. Pulling in Substack content turns the validator into a hub. The SEO payoff is months away. The job search is now.

**A standalone Projects or GitHub page.** Executive portfolios do not look like developer portfolios (research/summary.md, Section 3). GitHub appears as proof links inside relevant case studies and as a social icon. That is enough. The hiring manager does not browse commit history.

**AI Sales Agent, AI Competitive Intelligence, SBA Covid, and QuickBooks Reconciliation case studies.** Cut from V1 (ADR 0006). AI Sales Agent's 45 pp lift folds into the CH10 Turnaround case study. AI Competitive Intelligence is replaced by Redline. All stories are preserved in the story bank and can be added as V2 case studies.

**A database, auth system, or server runtime.** Nothing in V1 requires them (ADR 0010). The contact page uses mailto or a third party form service.

**A CMS.** The site is updated via git commit and Vercel deploy. One person maintains it. A CMS adds complexity for a workflow that does not need it yet (ADR 0011).

**A metrics dashboard or summary view.** Hiring managers are Visitor #1 (ADR 0002). They need decision narratives, not dashboards. P&L numbers, board governance, and scale evidence are embedded in the narratives.

**Anything for the LinkedIn content audience in V1.** They are explicitly cut (ADR 0004). If Substack post traffic to the portfolio is unexpectedly high post launch, revisit for V2.

---

## 7. What the research could not tell us

**Whether the takeaway line works.** "He's built products from zero and run the P&L to scale them" is a hypothesis. The research says snap judgments form in seconds and visitors absorb 20 to 28% of page content (research/summary.md, Issue #2). It does not say which words survive that compression. The 60 second test (Section 4) is the only way to validate this. No research finding supports or contradicts the specific sentence.

**How Canadian recruiters and hiring managers behave.** Every survey and study in the research is U.S. centric. Canadian recruiter behavior may differ (research/summary.md, Section 6, Evidence #5). The 37% reduction in recruiter response from portfolio links, the 93% hiring manager examination rate, the 3 to 5 minute visit duration: all of these are U.S. numbers. We are applying them in a Canadian job market with no supporting data.

**What happens when a case study link is forwarded.** The research says panel hiring means the link gets forwarded (ADR 0005). It does not say what the second, third, or fourth evaluator does with it. Do they read the full case study? Do they scan for 30 seconds? Do they look at a different page than the one forwarded? The standalone page test (Section 4) checks whether each page works cold. It does not check whether the forwarding behavior itself helps or hurts.

**Whether the failure arc converts or repels.** The research quotes Emily Backes: "A portfolio with zero visible friction anywhere doesn't read as accomplished. It reads as edited." A VP said the decision narrative converted him. Neither source quantifies how much failure is the right amount, or whether a three-part cascading failure arc (CH1→CH2→CH3) is too much for a hiring manager who is scanning. The depth test (Section 4) is the only check.

**What executive portfolio conventions should be.** The research found that almost zero executive level portfolio content exists (research/summary.md, Section 4, Point 4). All advice targets designers and developers. The Leadership Folios collection (33 annotated portfolios) is the closest reference, and it focuses on design leaders, not product/commercial leaders. Every structural decision in this PRD is a bet with no precedent. The site either creates a convention or proves the format does not work at this seniority level.

**Whether the CanadaHelps framing actually works.** The decision to name it and frame it with commercial scale (ADR 0008) is based on the principle that controlling the framing is better than ceding it. No research finding directly tests whether "CanadaHelps: $260M+ processing volume" neutralizes or reinforces the nonprofit association. The CanadaHelps test (Section 4) is the check.

---

## Decisions Index

All decisions referenced in this PRD are recorded as Architecture Decision Records in `docs/adr/`. Domain vocabulary is defined in `CONTEXT.md`.

| ADR | Decision |
|-----|----------|
| 0001 | Every risk flag cites its source |
| 0002 | Visitor #1 is hiring managers |
| 0003 | V1 is a credibility validator, not a distribution hub |
| 0004 | LinkedIn content audience cut from V1 |
| 0005 | Case studies are standalone and forwardable |
| 0006 | Four case studies in V1 (SBA and QuickBooks cut) |
| 0007 | Homepage takeaway line |
| 0008 | CanadaHelps named and framed, not buried |
| 0009 | Failure arcs in case studies |
| 0010 | Supabase deferred to V2 |
| 0011 | Living validator, not static, not hub |
| 0012 | Structural SEO built in from the start |

---

## Build sequence

1. PRD (this document) — defines what to build.
2. Design (Impeccable) — produces visual comps for each page against this PRD. Comps are approved before any code is written.
3. Tickets — written against approved comps + this PRD. Each ticket is a buildable unit.
4. Build — executes tickets. Next.js static export on Vercel.

All website copy goes through the Humanizer Gate, then the Post Humanizer Gate, before finalization.
