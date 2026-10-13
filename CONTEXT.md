# Portfolio — Domain Vocabulary

Terms defined during the PRD grilling session. Use these consistently across all project documents.

---

## Visitor #1
The primary audience the portfolio's information architecture is optimized for. Decided: **Hiring Managers** (ADR 0002). All page structure, content depth, and navigation decisions are evaluated against this visitor's needs first.

## Credibility Validator
What the V1 portfolio is. A lean, fast, mostly static site that controls the Google result for "Aju Joseph John" and converts visitors who already have the name. Links outbound to Substack, LinkedIn, GitHub. Does not aggregate or embed content from those platforms. Contrast with **Distribution Hub** (deferred to V2). See ADR 0003.

## Distribution Hub
What the portfolio becomes in V2. Pulls in Substack content via RSS, adds a Writing/Blog section, invests in SEO as a content engine. Not V1 scope. See ADR 0003.

## Decision Narrative
The structure each case study follows. Not "what happened" but "what I chose and why." Format: context, problem, decision, execution, outcome, learning. This is the content that converts hiring managers. A metrics dashboard does not show thinking quality; decision narratives do.

## Proof Link
An inline link within a case study that points to external evidence (live deployed app, GitHub repo, Substack post). Not a standalone section. GitHub and Substack appear as proof links inside case studies, not as embedded pages. See ADR 0004.

## V1 Page Set
Landing, Case Studies (one per work example), About, Contact. No Writing/Blog page. No Projects page. Four page types total. See ADR 0003, ADR 0004.

## Failure Arc
A visible "I was wrong" beat inside a case study. Not a separate section or performative humility. An integrated moment where a decision went wrong, the consequences were real, and recovery required different thinking. The Ensemble case study carries the CH1→CH2→CH3 arc (trial extension failure → sales recovery → unit economics fix). See ADR 0009.

## Living Validator
What the portfolio is after launch. Architecturally simple (static export, no CMS) but content is alive. New case studies added when new work ships. Existing content updated when metrics change. Not static, not a hub. Updates happen via git commit and Vercel deploy. See ADR 0011.

## V1 Stack
Next.js static export on Vercel. No Supabase. No database. No auth. Contact via mailto or third party form. Supabase re-enters the stack when a feature requires it. See ADR 0010.

## Standalone Page
A page that works without homepage context. Every case study is a standalone page: its own context line ("who is Aju"), its own metrics, its own CTA. Designed for the forwarded link use case (panel hiring, referrals). See ADR 0005.

## V1 Case Studies
Four case studies, each proving a distinct capability. (1) Ensemble: 0 to 1 incubation. (2) AI Sales Agent: AI as commercial lever. (3) HPCC: platform commercialization. (4) AI Competitive Intelligence: production AI build. SBA Covid and QuickBooks Reconciliation cut from V1. See ADR 0006.

## Takeaway Line
The one sentence a hiring manager should be able to say after 60 seconds on the homepage: "He's built products from zero and run the P&L to scale them." This is the positioning anchor. AI is the proof, not the headline. See ADR 0007.
