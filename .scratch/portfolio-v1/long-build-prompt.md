# Portfolio V1 — Long Build Prompt

Paste this entire prompt into a fresh Claude Code session at `/Users/Juice_Inc/Desktop/AI Learning/Portfolio`.

---

## Framing

You are starting in a fresh session. Nothing from earlier work is in your context, and that is deliberate: everything you need is in the repository.

This is a long build and I will not be here while it runs. Nothing in this prompt needs an answer from me. Where you would normally ask, decide, write the decision and its reason into BUILD-REPORT.md, and keep going.

This prompt is safe to run more than once. If a previous run died, read the Status line of every ticket under `.scratch/portfolio-v1/issues/` first and resume from the first one that is not done.

## How to work

You are the orchestrator, not the builder. Your own context has to last for hours, so keep it small. Read the plan, hand each piece of work to a subagent with a complete brief, check what comes back, and commit. Do not read whole source files into this session unless they are short. Read diff summaries and build output, and let the subagent's brief carry the detail.

For each ticket, write a brief that a fresh agent with no memory of this session can finish alone: the ticket file, the relevant source material paths, the parts of the spec and ADRs it touches, the design rules, the content rules, the technical rules, and the verification command (`next build`).

## What you are building

The remaining 7 tickets of a 9-ticket portfolio website. Tickets 01 (scaffold, visual system) and 02 (landing page) are already built and deployed to Vercel. You are building tickets 03 through 09.

The site is a credibility validator for Aju Joseph John's executive job search. It is NOT a designer portfolio. It is styled as an investment memo ("The Deal Memo"). The visual direction is established and documented; do not redesign it.

## Step 1: Ramp up before anything else

Read these files in this order. Do not build anything until you have read all of them.

### Project context (read all)
1. `CLAUDE.md` — project instructions, content rules, Humanizer Gate, Post Humanizer Gate
2. `PRD.md` — what to build and why, the five tests (60-second, forwarded link, CanadaHelps, depth, scan), content rules
3. `CONTEXT.md` — domain vocabulary (decision narrative, proof link, failure arc, standalone page, takeaway line)
4. `PRODUCT.md` — product purpose, positioning, capabilities, constraints
5. `DESIGN.md` — the design system extracted from the built landing page. Five-token palette, six type roles, four named rules (One Accent, Metric Typography, No Shadow, Sharp Corner), component specs. Follow this exactly.

### Spec and tickets (read all)
6. `.scratch/portfolio-v1/spec.md` — the full spec: problem, solution, 45 user stories, implementation decisions, testing decisions
7. `.scratch/portfolio-v1/issues/03-case-study-template-canadahelps-turnaround.md`
8. `.scratch/portfolio-v1/issues/04-ensemble-case-study-failure-arc.md`
9. `.scratch/portfolio-v1/issues/05-hpcc-case-study.md`
10. `.scratch/portfolio-v1/issues/06-redline-case-study.md`
11. `.scratch/portfolio-v1/issues/07-about-page.md`
12. `.scratch/portfolio-v1/issues/08-contact-page.md`
13. `.scratch/portfolio-v1/issues/09-lighthouse-ci-and-build-gate.md`

### Surface briefs (read all)
14. `.impeccable/surfaces/case-study.md`
15. `.impeccable/surfaces/about.md`
16. `.impeccable/surfaces/contact.md`
17. `.impeccable/surfaces/landing.md` — for reference on established visual patterns

### ADRs (read these specifically)
18. `docs/adr/0005-case-studies-standalone-and-forwardable.md` — standalone page requirement
19. `docs/adr/0006-four-case-studies-in-v1.md` — which case studies and why
20. `docs/adr/0008-canadahelps-named-and-framed.md` — CanadaHelps framing rule
21. `docs/adr/0009-failure-arcs-in-case-studies.md` — failure arc structure for Ensemble

### Built artifact (read to understand established patterns)
22. `app/layout.tsx` — root layout, fonts, metadata template
23. `app/page.tsx` — landing page (the pattern for content pages)
24. `app/globals.css` — CSS custom properties, animations, scrollbar, focus rings
25. `components/Nav.tsx` — navigation component
26. `components/Footer.tsx` — footer component
27. `tailwind.config.ts` — design tokens in Tailwind
28. `package.json` — dependencies and versions

## Step 2: Build the tickets

### Source material for content (subagents read before writing each page's copy)

**For CanadaHelps Turnaround (ticket 03):**
- `../job-search-os/output/story-bank.md` — read CH10 (first 90 days turnaround) and Story 5 (AI sales agent)
- `output/Aju-summary.md` — career highlights for metrics

**For Ensemble (ticket 04):**
- `../job-search-os/output/story-bank.md` — read CH4 (incubation), CH1 (trial extension failure), CH2 (sales recovery), CH3 (unit economics fix), CH6 (DMS sunset)

**For HPCC (ticket 05):**
- `../job-search-os/output/story-bank.md` — read LN1 (HPCC commercialization), optionally LN2 (Brazil pricing), LN5 (repositioning)
- `output/Aju-summary.md` — career highlights

**For Redline (ticket 06):**
- `../Redline/PRD.md` — Redline product requirements
- `../Redline/BUILD-REPORT.md` — Redline build report
- `output/Aju-summary.md` — brief Redline summary

**For About page (ticket 07):**
- `output/Aju-summary.md` — experience timeline, differentiators, weaknesses to address
- `../job-search-os/output/mnookin-two-pager.md` — what drives Aju, what he avoids. EXCLUDE: comp ranges, work authorization details, in-office mandate opinions
- `../job-search-os/context-library/resume-archetypes.md` — bullet text for proof points per role

**For Contact page (ticket 08):**
- `output/Aju-summary.md` — contact details

### Build order

Follow this exact sequence. Do not skip ahead.

#### Phase 1: Parallel frontier (tickets 03, 07, 08)

Build these three tickets. They have no dependencies on each other (all blocked only by ticket 01, which is done).

Run two subagents at once only when both tickets are unblocked and neither edits the same file. In Phase 1, tickets 03, 07, and 08 are safe to parallelize (different pages, different routes, no shared files edited).

**Ticket 03 — Case study template + CanadaHelps Turnaround**
- Build a reusable case study page layout (template)
- Build the first instance (CanadaHelps Turnaround) using that template
- Read the ticket file for full acceptance criteria
- Read story-bank CH10 and Story 5 for content
- Content rules: CanadaHelps framed with "$260M+ processing volume, $27M+ P&L" in every mention. AI sales agent woven into narrative as operating lever, not standalone AI story
- Template must be reusable: new instances add content and a route, not duplicate layout

**Ticket 07 — About page**
- Read the ticket file for full acceptance criteria
- Read mnookin-two-pager, resume-archetypes, Aju-summary for content
- Career narrative: thematic paragraphs, NOT chronological
- Experience timeline: ruled vertical list, 8 entries
- "What drives me": filtered from mnookin (no comp, no work auth, no office mandate)
- No headshot on this page

**Ticket 08 — Contact page**
- Read the ticket file for full acceptance criteria
- Minimal page. One invitation line, email mailto, LinkedIn, Substack, GitHub
- Generous tap targets on mobile
- No form, no calendar, no decorative content

#### Phase 2: Case study instances (tickets 04, 05, 06)

Build these three after ticket 03 is complete (they use the template from 03). They have no dependencies on each other. Tickets 04, 05, and 06 are safe to parallelize (each creates a new page using the template from 03, no shared files edited).

**Ticket 04 — Ensemble case study (failure arc)**
- The most complex case study. Read the ticket file carefully.
- Read story-bank CH4, CH1, CH2, CH3, CH6 for content
- The three-beat failure arc is the structural centerpiece
- Failure reads as setup for recovery, not as the headline
- CanadaHelps framing rule applies

**Ticket 05 — HPCC case study**
- Read the ticket file for full acceptance criteria
- Read story-bank LN1 (and optionally LN2, LN5) for content
- Internal tech to $50M+ commercial product
- CanadaHelps framing rule does NOT apply (this is LexisNexis)

**Ticket 06 — Redline case study**
- Read the ticket file for full acceptance criteria
- Read Redline PRD.md and BUILD-REPORT.md for content
- Proof links to live app (redline-kappa-umber.vercel.app) and GitHub repo
- CanadaHelps framing rule does NOT apply (this is Mapleview Partners)

#### Phase 3: Quality gate (ticket 09)

Build this last, after all pages exist.

**Ticket 09 — Lighthouse CI and build gate**
- Read the ticket file for full acceptance criteria
- GitHub Action running Lighthouse CI: Performance > 90, Accessibility > 90
- Cross-page HTML assertions on the static export
- All 8 routes validated, all links resolve, all SEO metadata present

## Step 3: Verify after each ticket

When the subagent returns, verify before committing:

1. Run `next build` and confirm it succeeds with zero errors and all routes export.
2. Read the diff for design rule violations: new colors, shadows, border-radius, gradients, glass, or glow. Any of these is a failure.
3. Check that all copy passes the Post Humanizer Gate: no hyphens between words (cross-functional, 8-person, etc.), no em dashes (—) or double hyphens (--) in body text.
4. Check that content is sourced from the specified source material, not invented.

If it passes: update the ticket's Status line from `ready-for-agent` to `done`, tick its acceptance criteria, commit with a message that says why rather than what, and push to origin/main (Vercel auto-deploys on push).

If it fails: send the ticket back to a subagent once with the exact failures. If it fails twice, mark the ticket blocked in BUILD-REPORT.md and move to the next ticket that does not depend on it.

## Rules

Include these rules in every subagent brief.

### Content rules
- All copy goes through the Humanizer Gate: write like a sharp human, not a language model. No slop words (no "delve", "landscape", "leverage", "robust", "streamline", "cutting-edge", "dive in", "let's unpack", "it's worth noting", "great question").
- Then the Post Humanizer Gate: strip ALL hyphens between words (cross-functional → cross functional, 8-person → 8 person). Replace em dashes (—) and double hyphens (--) with semicolons, commas, colons, or periods.
- Every claim must be supported by source documents. Do not invent metrics or stories.
- CanadaHelps is named and framed with commercial scale in every mention on CanadaHelps-related pages (ADR 0008).

### Design rules
- Follow DESIGN.md exactly. Do not introduce new colors, type roles, shadows, border-radius, gradients, glass, or glow.
- Horizontal rules are the primary structural device.
- Serif (Libre Baskerville) for headings and metrics. Sans (Source Sans 3) for body and labels.
- Metrics at pull-quote scale with tabular figures.
- Zero border-radius on all designed elements. Zero box-shadows.
- Single blue accent (#1D4ED8) for interactive elements only.

### Technical rules
- Next.js 14 static export. No API routes, no server runtime, no database.
- Tailwind CSS 3 (NOT v4 — requires Node 20+, user has Node 18).
- TypeScript 5.5 (NOT v7 — incompatible with Next.js 14).
- Use relative imports (e.g., `../../components/Nav`), NOT @/ path aliases (they don't resolve in this project).
- Do not add dependencies without deciding and documenting the reason in BUILD-REPORT.md. The current package.json has everything needed.
- `prefers-reduced-motion` respected for any animations.

### SEO rules
- Every page: unique meta title, meta description, OG tags (og:title, og:description, og:url), canonical URL.
- Heading hierarchy: exactly one h1 per page, no skipped levels.
- Case study pages: CreativeWork + BreadcrumbList JSON-LD.
- About page: Person JSON-LD.
- Sitemap at /sitemap.xml with all 8 routes.

### Anti-placeholder rules
None of the following counts as done, and a ticket that contains one is still open:
- A page with "coming soon" or placeholder text where real content should be
- A component that renders nothing
- A TODO comment in shipped copy
- Content that was not sourced from the specified source material files
- An empty narrative section in a case study

### Git rules
- Commit after completing each ticket with a message that says why, not what.
- Push to origin/main after each commit (Vercel auto-deploys on push).
- Do not amend commits.

## Step 4: Stop conditions

Stop when every ticket is done, or when you have been blocked twice on the same ticket. Do not invent a way around a blocker. Write it in BUILD-REPORT.md and move to the next ticket that is not blocked by it.

## Step 5: BUILD-REPORT.md

Write BUILD-REPORT.md before you stop. Include:

1. **Ticket status:** which tickets are done and which are not, and why.
2. **Decisions made:** every decision you made in my absence, with its reason.
3. **Content sourcing gaps:** any stories or metrics you could not find in the source material files.
4. **Verification gaps:** anything you could not verify (e.g., OG tag preview cards require pasting into Slack/LinkedIn).
5. **Commands to run first:** the exact commands I should run when I sit down.

Commit BUILD-REPORT.md and push.

Do NOT run the Impeccable finish reviewer or documenter. Those will be run separately.
