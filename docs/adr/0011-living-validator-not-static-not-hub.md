# ADR 0011: Living Validator — Updated with New Work, Not a Content Hub

**Status:** Accepted
**Date:** 2026-10-13

## Decision

The portfolio is a living validator: it gets updated with new projects, accomplishments, and work (including fractional/advisory engagements) as they happen. It is never frozen. But it does not evolve into a distribution hub (RSS feeds, writing section, content engine) until that investment is explicitly justified.

This is a middle position between:
- (a) Static: ship once, never touch again, permanent Google result
- (b) Distribution hub: Substack integration, writing page, SEO content engine

The portfolio stays architecturally simple (static export, no CMS, no database) but the content is treated as alive. New case studies are added when new work ships. Existing case studies are updated when metrics change. The About page reflects the current role.

## Alternatives

1. **Fully static (option a).** Ship and forget. The risk: within 6 months the most recent case study is from 2026 and the site signals stagnation. The research says broken links and poor maintenance signal neglect (research/summary.md, Issue #7). A stale portfolio sends the same signal.
2. **Distribution hub from day one (option b).** Requires CMS, RSS integration, content pipeline. Deferred per ADR 0003. Re-evaluated when/if content traffic justifies it.

## Why

- The portfolio's job extends beyond the current job search. New projects, new accomplishments, and fractional work are ongoing evidence of relevance.
- Updating a static Next.js site (edit markdown/content, redeploy) is trivial. No CMS needed. The update mechanism is a git commit and a Vercel deploy.
- A portfolio that shows the Databricks role, Mapleview Partners advisory work, and future projects is a living credibility signal, not a snapshot.

## Consequences

- No CMS investment in V1. Content updates happen directly in code/markdown and deploy via Vercel.
- The site should be structured so adding a new case study is a straightforward, repeatable operation (template, consistent structure).
- "When was this last updated?" should be answerable by the content itself (most recent role, most recent project), not by a visible timestamp.
- The V2 hub decision is independent. The portfolio can stay a living validator indefinitely if the hub never justifies itself.
