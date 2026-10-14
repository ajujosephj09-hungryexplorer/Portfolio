# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js static export on Vercel. No Supabase. No database. No auth. No server runtime. Confirmed in ADR 0010. Deploy initially on a Vercel subdomain; custom domain added later.

## Users

**Primary: Hiring managers** evaluating VP/GM/CEO candidates in B2B SaaS, fintech, payments, and data platforms. They already have the candidate's name from a recruiter, referral, or LinkedIn message. They are doing due diligence. They spend 5 to 10 minutes, may revisit before a final interview, and forward links to 2 to 5 panel members. 93% would examine a portfolio if provided.

**Secondary: PE/VC search firms** who Google candidates before a first meeting. Need P&L evidence and value creation stories. Get what they need from the same content, embedded in narratives rather than a separate dashboard.

**Tertiary: Recruiters** (fast confirmation of role fit, 3 to 5 minutes), **co-founders/partners** (trust signals), **peers/network** (forwardable case study links for referrals).

**Explicitly not served in V1: LinkedIn content audience** (recurring visitors wanting thought leadership depth). They need a Writing/Blog section with Substack integration. That does not exist in V1.

## Product Purpose

A credibility validator and controlled Google result for Aju Joseph John. When a hiring manager, PE search firm, or potential co-founder Googles "Aju Joseph John," they should find a site that communicates P&L ownership, commercial impact, and executive judgment in under 60 seconds. The site is not a job application attachment, a content engine, or a publishing platform. It links outbound to Substack, LinkedIn, and GitHub without embedding or replicating content from those platforms.

The portfolio is a living validator: content is updated with new projects and accomplishments, but architecture stays simple (git commit, Vercel deploy). It is never frozen, but it does not become a distribution hub until that investment is justified.

## Positioning

The one sentence a hiring manager should say after 60 seconds on the homepage: "He's built products from zero and run the P&L to scale them." The two rarest things in the profile are 0 to 1 product incubation AND P&L ownership in the same person. AI expertise is the proof, not the headline.

## Operating Context

- LinkedIn is the primary traffic funnel. LinkedIn "visit my website" points to the portfolio. This is the main inbound path.
- Substack (The Hungry Explorer) is the content engine. The portfolio links to it but does not embed it.
- GitHub has production AI systems. Appears as proof links in relevant case studies and as a social icon.
- The portfolio is not linked in job applications (research shows 37% reduction in recruiter response from embedded portfolio links). It exists to control the Google result and serve visitors who arrive independently.
- All website copy goes through the Humanizer Gate, then the Post Humanizer Gate (strip hyphens between words, replace em dashes with appropriate punctuation), before finalization.

## Capabilities and Constraints

### V1 pages (four page types)

1. **Landing page.** Hero with name, positioning anchor, key metrics. Featured case studies. CTA visible without scrolling.
2. **Case study pages (4 standalone pages).** Each works without homepage context: its own "who is Aju" context line, its own metrics, its own CTA. Decision narrative structure: context, problem, decision, execution, outcome, learning.
   - CanadaHelps Turnaround (executive transformation). Inherited 4 disconnected teams, restructured into pods, deployed AI as operating lever (45 pp conversion lift). Retention 67% to 83%.
   - Ensemble (0 to 1 SaaS incubation at CanadaHelps). Includes a three-part failure arc (CH1→CH2→CH3). $432K ARR, 200+ customers, 86% PLG.
   - HPCC Platform Commercialization (internal tech to $50M+ business at LexisNexis). 100+ enterprise clients, 25K+ developer community.
   - Redline (AI contract review product, Mapleview Partners). Research driven, trust first architecture, full stack execution. Live proof link to deployed app.
3. **About page.** Career narrative, experience timeline, education. Not a resume rehash.
4. **Contact page.** Email, LinkedIn, Substack, GitHub. Mailto or third-party form.

### Content rules

- CanadaHelps is named in every mention and framed with commercial scale in the same breath.
- At least one case study includes a deep, multi-beat failure arc with specific numbers and consequences (Ensemble carries CH1→CH2→CH3).
- Every claim must be supported by source documents. Unsourced claims are bugs.

### Technical constraints

- Sub 2 second LCP. Pass Core Web Vitals.
- Fully mobile responsive.
- WCAG 2.1 compliance.
- Person, CreativeWork, BreadcrumbList schema markup.
- Structural SEO: meta titles and descriptions per page (controls Google snippet), Open Graph tags per page (controls link preview cards when forwarded), canonical URLs per page (prevents duplicate content across Vercel subdomain and future custom domain), semantic heading hierarchy (h1/h2/h3 per page), auto-generated sitemap.
- No database, no auth, no CMS, no server runtime.

### Undecided

- Custom domain name (not yet purchased).
- Contact form implementation (mailto vs. third-party form service like Formspree).

## Brand Commitments

- **Name:** Aju Joseph John
- **Substack name:** The Hungry Explorer
- **Headshot:** Available (to be provided by user).
- **No existing logo, favicon, or brand colors.** Open to recommendation during visual direction.
- **Voice:** Concise and direct. No filler, no buzzwords. State what was done with numbers. Show judgment, not polish.

## Evidence on Hand

Real content and metrics exist for all four V1 case studies. Source material in:

- `output/Aju-summary.md` — complete intake with career highlights, case study content, experience timeline, and weaknesses to address.
- `research/summary.md` — research synthesis with 32 sourced findings.
- `../job-search-os/output/story-bank.md` — 26 interview stories with detailed narratives. The Ensemble failure arc (CH1→CH2→CH3) is fully documented here.
- `../job-search-os/context-library/resume-archetypes.md` — 7 resume variants with full bullet text.
- `../job-search-os/output/mnookin-two-pager.md` — what drives Aju, what he avoids, strengths, weaknesses.

The AI Competitive Intelligence system has a live deployed app (competitive-analysis-ui.vercel.app) and a public GitHub repo.

No testimonials, press, or third-party endorsements exist. The site must not fabricate any.

## Product Principles

1. **Signal density over comprehensiveness.** Four case studies read completely beats six skimmed. Every page earns its existence by serving Visitor #1 (hiring managers).
2. **Decision narratives over outcomes.** The research shows what converts hiring managers is judgment under constraint, not polish. Show the thinking, including when it was wrong.
3. **Name it and frame it.** Do not bury employer names, career gaps, or trade-offs. Control the framing by leading with context and commercial scale.
4. **Every page stands alone.** Panel hiring means links get forwarded. A case study reached via forwarded link must convert without the homepage.
5. **Ship the validator, earn the hub.** The credibility validator ships first. Content integration, SEO investment, and writing pages are V2 features that must justify themselves.

## Accessibility & Inclusion

WCAG 2.1 AA compliance required. 68% of portfolio sites fail this standard (research finding), which also affects SEO rankings and corporate network access. No additional product-specific accessibility requirements established.
