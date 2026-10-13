# ADR 0004: LinkedIn Content Audience Cut from V1

**Status:** Accepted
**Date:** 2026-10-13

## Decision

The LinkedIn content audience (recurring visitors who click through from LinkedIn posts wanting thought leadership depth) is explicitly not served in V1. No Writing/Blog page. No Substack integration. Substack is linked, not embedded.

## Alternatives

1. **Cut Peers/Network instead.** Keep the writing section, cut shareable case study optimization. But a single forwarded case study link from a well placed referral can shortcut the entire hiring process. Peers/Network has higher immediate interview value than the LinkedIn content audience.
2. **Serve both at reduced quality.** Ship a writing page with minimal integration. Creates a maintenance burden and a half finished section that signals neglect (research/summary.md, Issue #7: broken links and poor maintenance).

## Why

- The LinkedIn content audience needs a Writing/Thought Leadership section with integrated Substack content. This is a content engine play that pays off over months, not a job search tool that pays off this quarter.
- Hiring managers (Visitor #1, ADR 0002) do not need a writing section. They need case studies and a career narrative.
- Cutting this segment removes one page (Writing) and one integration (Substack RSS) from V1 scope. Fewer pages to build, fewer things to break at launch.
- Consistent with ADR 0003 (credibility validator, not distribution hub).

## Consequences

- V1 page list: Landing, Case Studies (one per work example), About, Contact. Four page types.
- LinkedIn content audience visitors who click through from a post and want more depth will find case studies and an About page, not a writing archive. They can follow the Substack link for that.
- If Substack post traffic to the portfolio is higher than expected post launch, this decision should be revisited for V2.
