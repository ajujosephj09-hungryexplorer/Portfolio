# Portfolio — Project Instructions

## Purpose
Land interviews at Layer 1/2/3 target firms. Compound Substack, LinkedIn, and GitHub into one distribution hub that builds brand value over time.

## Stack (settled, not open for reinterpretation)
- Next.js + Supabase (auth and database) + Vercel
- Ask before adding any dependency

## External accounts (canonical URLs)
- Substack: https://ajujosephjohn.substack.com/
- GitHub: https://github.com/ajujosephj09-hungryexplorer
- LinkedIn: https://www.linkedin.com/in/aju-joseph-john/

## Key files (open when needed, not memorized)
- `research/summary.md` — user research. Read before any product decision.
- `PRD.md` — the brief, once written. Read before building anything.
- `../job-search-os/output/three-layer-job-analysis.md` — target firms and role layers.

## Scope
Build what PRD.md lists. Stop there. When something looks like the obvious next step and is not on that list, ask first.

## Credentials
Secrets live in `.env.local` (gitignored). Never commit a secret. A pushed key is a compromised key.

## Claims and risk flags
State only what the source document says. If the text does not support a claim, the product does not make it.
Every risk flag cites the exact sentence it came from. A flag whose source cannot be shown is a bug.

## Humanizer Gate
All portfolio website copy, every page, heading, and body text, MUST go through `/humanizer` before being finalized. Then apply the Post Humanizer Gate below.

## Post Humanizer Gate
Strip ALL hyphens between words/numbers in body text. Replace with a space. Includes compound adjectives (cross-functional → cross functional), number-word compounds (8-person → 8 person, 14,000-client → 14,000 client), ALL-CAPS compounds (CROSS-FUNCTIONAL → CROSS FUNCTIONAL). ONLY exceptions: URLs, phone numbers, date ranges (2004 - 2010).

Replace em dashes (—) and double hyphens (--) with grammatically appropriate punctuation: semicolons, commas, colons, or periods. Never leave a bare — or -- in body text.
