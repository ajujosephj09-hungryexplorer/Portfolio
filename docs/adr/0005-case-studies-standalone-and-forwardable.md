# ADR 0005: Case Studies Are Standalone and Forwardable

**Status:** Accepted
**Date:** 2026-10-13

## Decision

Every case study page must work as a standalone page: its own context, its own metrics, its own CTA. A visitor who lands on a case study via a forwarded link (no homepage context) must understand who Aju is, what the case study proves, and how to reach him, without navigating elsewhere.

## Alternatives

1. **Case studies as homepage sections.** Cheaper to build, single scroll page. But forwarded links break (anchor links are fragile), panel interviewers cannot reference a specific case study, and the page becomes a wall of text (research/summary.md, Issue #2: 6/8 sources cite this).
2. **Case studies as sub-pages dependent on homepage context.** Assumes the visitor arrived via the homepage. At the VP/GM level, panel hiring means the link gets forwarded. The forwarded link must work cold.

## Why

- At the VP/GM level, interviews are structured. Interviewers prepare by pulling material from the candidate's site. They bring specific claims into the interview ("I saw on your site that you..."). Case studies must contain quotable, referenceable claims.
- Panel hiring means the portfolio link gets forwarded to 2 to 5 evaluators. Each evaluator may land on a different page. Each page must convert independently.
- Research says 70% of sites lack a clear CTA (research/summary.md, Issue #3). A case study without its own CTA is a dead end for a forwarded visitor.

## Consequences

- Each case study page includes: a brief "who is Aju" context line, the full decision narrative, prominent metrics, and a CTA (contact info + link to other case studies).
- Page count increases (one route per case study vs. a single scroll). Worth the cost for forwardability.
- Navigation must make it easy to move between case studies without returning to the homepage.
