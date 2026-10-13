# ADR 0010: Supabase Deferred to V2

**Status:** Accepted
**Date:** 2026-10-13

## Decision

V1 ships as Next.js with static export on Vercel. Supabase (auth and database) is removed from V1 scope entirely. It re-enters the stack when a feature requires auth or a database.

## Alternatives

1. **Keep Supabase in V1 for future readiness.** Adds a database, auth layer, and API surface to a site that has no V1 use for any of them. The research says 73% of portfolios use heavy JS frameworks for static content and calls it overkill (research/summary.md, Section 4, Point 2). Adding a database to static content is the same pattern.
2. **Replace Next.js with a static site generator (Astro, 11ty).** Lower complexity for pure static content. But Next.js with static export gives the same performance ceiling while preserving the React component model for V2 features. The migration cost from Astro to Next.js later is higher than shipping Next.js static now.

## Why

- V1 is a credibility validator (ADR 0003). Nothing in the V1 page set (Landing, Case Studies, About, Contact) requires auth or a database.
- Contact form submissions can use a third-party service (Formspree, Netlify Forms) or a simple mailto link. No database needed.
- Removing Supabase eliminates: one dependency, one account, one set of credentials, one potential failure point, and one security surface.
- Next.js static export on Vercel gives sub-second loads, zero server cost, edge CDN delivery, and automatic HTTPS.

## Consequences

- The CLAUDE.md stack description should be updated when V1 ships: "Next.js + Vercel" for V1, "Supabase re-enters for V2 if auth/database features are needed."
- Contact page uses a mailto link or third-party form service, not a Supabase-backed API.
- If a V2 feature (gated content, admin dashboard, analytics) requires Supabase, the integration is straightforward because Next.js + Vercel + Supabase is a standard stack.
