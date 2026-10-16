# BUILD-REPORT.md

**Date:** 2026-10-15
**Tickets built:** 03, 04, 05, 06, 07, 08, 09 (all 7 remaining tickets)
**Status:** All tickets done. Zero blocked.

---

## Ticket Status

| Ticket | Description | Status |
|--------|-------------|--------|
| 01 | Scaffold, visual system | done (pre-existing) |
| 02 | Landing page | done (pre-existing) |
| 03 | Case study template + CanadaHelps Turnaround | done |
| 04 | Ensemble case study (failure arc) | done |
| 05 | HPCC case study | done |
| 06 | Redline case study | done |
| 07 | About page | done |
| 08 | Contact page | done |
| 09 | Lighthouse CI and build gate | done |

---

## Decisions Made

**1. About page has 7 timeline entries, not 8.**
Ticket 07 specifies "eight entries from Cognizant through Databricks." The source material (Aju-summary.md and resume-archetypes.md) yielded 7 distinct entries: Databricks, Mapleview Partners, CanadaHelps, Fiserv, LexisNexis, Duke University (MBA), Cognizant. The 8th entry was not identifiable from the source material. Decision: ship with 7 rather than invent content.

**2. Ensemble case study uses 9 sections instead of 6.**
The standard decision narrative has 6 sections. Ensemble's three-beat failure arc required more structure to flow naturally. The template accepts any section headings, so 9 sections were used: Context, Problem, Decision, Execution: Growth, Beat 1: The Trial Extension Mistake, Beat 2: Sales Recovery, Beat 3: The Unit Economics Collapse, Outcome, Learning. The extra sections make each failure beat visible without burying them inside a long Execution section.

**3. Redline has 3 headline metrics instead of 4.**
The other case studies have 4 headline metrics. Redline's meaningful metrics are: 71% (freelancer non-payment rate), 68 (tests), 13 (routes). A fourth metric was not forced. The 3-column layout works on both mobile and desktop.

**4. "competitive landscape" changed to "competitive dynamics" in CanadaHelps Turnaround.**
The word "landscape" is flagged as a slop word in the content rules. The phrase "competitive landscape" in the CanadaHelps Turnaround was replaced with "competitive dynamics."

**5. No new dependencies added.**
All 7 tickets were built using existing dependencies. The validation script uses Node.js built-ins only. Lighthouse CI installs globally in the GitHub Action, not in package.json.

**6. Validation script is plain JavaScript (.mjs), not TypeScript.**
The cross-page HTML validation script runs via `node scripts/validate-build.mjs`. Plain JavaScript avoids needing a TypeScript compilation step for a build tool. It reads HTML files from the `out/` directory using built-in `fs` and `path`.

---

## Content Sourcing Gaps

**1. About page 8th timeline entry.**
Could not identify an 8th entry from Aju-summary.md or resume-archetypes.md. The 7 entries cover Cognizant through Databricks with Mapleview Partners and Duke. If there is an 8th role (e.g., a specific client engagement at Cognizant/IMS Japan split out separately), it can be added with the correct source text.

**2. Ensemble DMS client count.**
Story-bank CH6 mentions "~70 clients" for DMS. This figure is used in the case study. Confirm this is the correct number.

---

## Verification Gaps

**1. OG tag preview cards.**
Open Graph tags are present on every page (verified by the validation script parsing the HTML). However, the actual preview card rendering when pasting a URL into Slack or LinkedIn cannot be verified programmatically. Paste each case study URL into Slack/LinkedIn to confirm the cards show controlled titles and descriptions.

**2. Lighthouse CI scores.**
The GitHub Action is configured and committed but has not run yet (it triggers on push to main, so the next push will be the first run). The scores are not known until the action runs. If Performance or Accessibility scores are below 90, the action will fail and the specific violations will be logged.

**3. Google Rich Results Test.**
Schema markup (Person, CreativeWork, BreadcrumbList) is present and structurally valid (confirmed by validation script). Actual Google Rich Results Test validation requires pasting URLs into Google's tool after the site is indexed.

**4. Mobile responsiveness.**
All pages use responsive Tailwind classes matching the landing page patterns. Actual mobile device testing (especially tap target sizing on the Contact page) should be done manually.

---

## Commands to Run First

```bash
# 1. Confirm build passes
cd /Users/Juice_Inc/Desktop/AI\ Learning/Portfolio
npx next build

# 2. Run validation (92 checks)
node scripts/validate-build.mjs

# 3. Check Vercel deployment
# Visit https://ajujosephjohn.vercel.app and click through all pages

# 4. Test OG previews
# Paste these URLs into Slack or LinkedIn to verify preview cards:
# https://ajujosephjohn.vercel.app/case-studies/canadahelps-turnaround
# https://ajujosephjohn.vercel.app/case-studies/ensemble
# https://ajujosephjohn.vercel.app/case-studies/hpcc-platform
# https://ajujosephjohn.vercel.app/case-studies/redline

# 5. Check GitHub Action
# Visit the repo Actions tab to see if Lighthouse CI ran on the latest push

# 6. Mobile spot check
# Open the Contact page on a phone and verify tap targets
```

---

## Files Created/Modified

### New files (13)
- `components/CaseStudyLayout.tsx` -- Reusable case study template
- `app/case-studies/canadahelps-turnaround/page.tsx` -- CanadaHelps Turnaround case study
- `app/case-studies/ensemble/page.tsx` -- Ensemble case study (failure arc)
- `app/case-studies/hpcc-platform/page.tsx` -- HPCC case study
- `app/case-studies/redline/page.tsx` -- Redline case study
- `app/about/page.tsx` -- About page
- `app/contact/page.tsx` -- Contact page
- `app/sitemap.ts` -- Sitemap generator (7 routes)
- `scripts/validate-build.mjs` -- Cross-page HTML validation (92 checks)
- `.github/workflows/lighthouse-ci.yml` -- Lighthouse CI GitHub Action
- `lighthouserc.js` -- Lighthouse CI configuration
- `BUILD-REPORT.md` -- This file

### Modified files (1)
- `package.json` -- Added `validate` script
