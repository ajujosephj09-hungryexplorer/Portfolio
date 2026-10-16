# Post Long Build Checklist

Do these in order after the long build finishes and you've read BUILD-REPORT.md.

---

## 1. Read BUILD-REPORT.md

Check ticket status, decisions made in your absence, content sourcing gaps, and verification gaps. Run whatever commands it says to run first.

## 2. Verify the live site

Visit the Vercel URL. Click through all 8 pages. Check on both desktop and mobile (or use Chrome DevTools device mode). Look for:
- Broken links
- Missing content or placeholder text
- Design violations (wrong colors, rounded corners, shadows)
- Hyphenated words or em dashes in body text (Post Humanizer Gate failures)
- CanadaHelps mentions without commercial framing

## 3. Run the Impeccable finish reviewer

```
/impeccable:impeccable-finish-reviewer
```

This reviews the full site against DESIGN.md and the direction contract. It returns an ordered list of material fixes. Apply all fixes, then re-run once to confirm they resolved.

## 4. Run the Impeccable documenter

```
/impeccable:impeccable-documenter
```

This updates DESIGN.md if the long build introduced any new patterns (e.g., case study layout, timeline component, contact page layout). The documenter extracts from the built artifact, not from intentions.

## 5. Run the five PRD tests

From PRD.md Section 4:

- **60 second test:** Show the homepage to someone who doesn't know Aju. After 60 seconds, ask them to describe him. Target: "He's built products from zero and run the P&L to scale them."
- **Forwarded link test:** Send a single case study URL to someone with no context. Can they answer: who is this person, what did they do, how do I contact them?
- **CanadaHelps test:** Show the Ensemble case study to someone unfamiliar with CanadaHelps. Do they say "payments platform" before "nonprofit"?
- **Depth test:** Ask a product leader to read the Ensemble case study. Can they identify the moment Aju was wrong and what he learned?
- **Scan test:** Give a recruiter the homepage on a phone. Can they find contact info and confirm role level within 90 seconds?

## 6. Check SEO

- Paste a case study URL into Slack or LinkedIn. Does the preview card show a controlled title and description?
- View source on each page. Confirm: meta title, meta description, OG tags, canonical URL, JSON-LD schema markup.
- Visit /sitemap.xml. Confirm all 8 routes are listed.

## 7. Run Lighthouse manually

Open Chrome DevTools → Lighthouse tab. Run on each page type (landing, one case study, about, contact). Check:
- Performance > 90
- Accessibility > 90
- SEO score green

## 8. Commit any fixes

If the finish reviewer or manual checks produced fixes, commit and push. Vercel auto-deploys.

## 9. Update LinkedIn

Point the "Visit my website" link on LinkedIn to the Vercel URL.

## 10. Monitor Google indexing

After 1-2 weeks, Google "Aju Joseph John" and check if the portfolio appears on page 1. If not, submit the URL via Google Search Console.
