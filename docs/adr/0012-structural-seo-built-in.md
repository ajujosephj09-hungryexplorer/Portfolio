# ADR 0012: Structural SEO Built In from the Start

**Status:** Accepted
**Date:** 2026-10-14

## Decision

Every page ships with structural SEO infrastructure from day one: meta titles and descriptions, Open Graph tags (og:title, og:description, og:url), canonical URLs, semantic heading hierarchy (one h1 per page, no skipped levels), and an auto-generated sitemap at /sitemap.xml. These are built into the page template and shared layout, not added post-launch.

## Alternatives

1. **Ship without structural SEO, add later.** Faster initial build. But the product goal is to control the Google result for "Aju Joseph John." Launching without meta titles means Google picks the snippet, and the framing is lost before the visitor clicks. Launching without OG tags means forwarded case study links show blank or random preview cards, directly undermining the standalone/forwardable requirement (ADR 0005). Retrofitting later means the site is uncontrolled during its most critical early indexing window.
2. **Add only schema markup, skip the rest.** Schema markup (Person, CreativeWork, BreadcrumbList) was already specified. But schema alone does not control the search snippet or the link preview card. Meta titles and OG tags are what control those.

## Why

- The core product goal is controlling the Google result. Meta titles are the mechanism. Without them, the search result shows whatever Google extracts, which risks surfacing "CanadaHelps" without the commercial framing, the same snap judgment problem the site exists to solve.
- Case study links are forwarded via Slack, email, and LinkedIn (ADR 0005). OG tags control the preview card that appears. A blank preview card is a failed first impression for panel evaluators who never click through.
- The site will initially live on a Vercel subdomain and later move to a custom domain. Canonical URLs prevent duplicate content penalties during the transition.
- The build cost is near zero. These are template-level additions that apply to every page through the shared layout.

## Consequences

- Every page requires a unique meta title and description. These are part of the content inventory, not an afterthought.
- OG tags must be maintained alongside page content. When a case study title changes, the og:title must change too.
- The sitemap must be regenerated on every build. Next.js supports this natively.
- Heading hierarchy becomes a structural constraint: each page gets exactly one h1, and headings cannot skip levels (no h1 followed by h3).
