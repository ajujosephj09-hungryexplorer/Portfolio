# ADR 0003: V1 Is a Credibility Validator, Not a Distribution Hub

**Status:** Accepted
**Date:** 2026-10-13

## Decision

The V1 portfolio launches as a credibility validator: lean, fast, mostly static. It links outbound to Substack, LinkedIn, and GitHub. It does not embed, aggregate, or replicate content from those platforms.

The "distribution hub" vision (RSS pulls, integrated writing section, SEO content engine) is deferred to V2, after the validator is live and working.

## Alternatives

1. **Launch as a distribution hub from day one.** Substack RSS integration, writing/blog section, SEO investment. Ships slower. Requires ongoing content maintenance from launch. The research says PM portfolios get near zero organic search traffic without a massive content library, so the SEO payoff is months away.
2. **Build on Substack itself.** Use Substack's custom pages to host the portfolio. Loses domain ownership, schema markup control, and design flexibility. Violates the "own your Google result" goal.

## Why

- "PM portfolios get minimal organic search traffic. [...] A portfolio site without a content engine will function as a credibility validator for people who already have your name, not as a discovery tool." (research/summary.md, Section 6, Evidence #3)
- The primary traffic funnel is LinkedIn profile → Portfolio, not organic search → Portfolio. The validator serves this funnel. The hub serves a different, longer term funnel.
- Shipping faster matters. The portfolio is a job search tool. Every week without a live validator is a week where a Google search for "Aju Joseph John" returns uncontrolled results.

## Consequences

- V1 ships with: Landing page, Case Study pages, About page, Contact page. No Writing/Blog page.
- Substack appears as an outbound link ("my writing"), not as embedded content.
- GitHub appears as proof links within relevant case studies and as a social icon in the header/footer. No standalone Projects page.
- LinkedIn "visit my website" points to the portfolio. This is the primary inbound funnel.
- SEO is limited to schema markup (Person, CreativeWork, BreadcrumbList) and controlling the name search result. Content driven SEO is a V2 concern.
