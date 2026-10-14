---
version: 1
slug: "landing"
primary_target: "landing"
related_targets: []
---

# Landing Page — Surface Brief

## Scope and mode

- **Surface:** Landing page (homepage)
- **Mode:** Persuade
- **Build path:** Code-led

## Audience

Hiring managers doing due diligence on a VP/GM/CEO candidate. Already have the name from a recruiter, referral, or LinkedIn. Skeptical, busy, comparing 3 to 5 candidates. 5 to 10 minutes. May revisit before final interview. May forward the link to panel members.

## Job

After 60 seconds, the visitor says "He's built products from zero and run the P&L to scale them." Primary action: click into a case study or contact.

## Proof and content

- Four case study summaries with headline metrics (retention 67% to 83%, $432K ARR, $50M+ revenue, live AI product)
- Career scope: 20 years, 4 countries, $27M+ P&L, 5 AI systems shipped
- Headshot below the fold (user provides), near career scope or CTA section
- Outbound links: Substack, LinkedIn, GitHub
- Contact info visible without scrolling

## Content blocks

1. Nav: name (left), page links, social icons
2. Hero/Thesis: name, positioning line, one-line context
3. Metric strip: four headline numbers, one per case study
4. Featured case studies: four blocks (title, company framing, 2-3 sentence teaser, metric, link)
5. Career scope: brief proof bar (not full timeline) with headshot
6. CTA/Contact: email, LinkedIn, invitation line
7. Footer: social links, minimal

## Anti-goals

No project thumbnail grid. No dark-mode terminal aesthetic. No buzzword copy. No floating cards. No gradient heroes. No monospace-as-decoration. No stock photography. No animations beyond subtle transitions.

## Constraints

- WCAG 2.1 AA
- Sub 2 second LCP
- Person + BreadcrumbList schema markup
- All copy through Humanizer Gate then Post Humanizer Gate
- Mobile: metric strip collapses to 2x2 grid, case study blocks stack vertically

## Direction contract

**THESIS:** The executive credibility validator as an investment memo. Every section is a paragraph of evidence. The format is so familiar to the audience that the design is invisible and the evidence is all that remains. The category default it refuses: the project-thumbnail grid portfolio with hover animations.

**OWN-WORLD:** Near-white ground (#FAFAFA), near-black type (#111827), one restrained blue (#1D4ED8) for links and CTAs. Clean serif for headings (specific face TBD at build via font-match). Systematic sans for body. Horizontal rules as the primary structural device. Pull-quote sized metrics. No gradients, no glass, no glow, no decorative color. Recognizable with all content removed by its ruled sections, metric typography scale, and the single blue accent on white.

**STORY:** The visitor lands from LinkedIn or Google. Reads the positioning line. Scans the four metrics. Clicks into one case study or scrolls to confirm scope. Leaves with either a case study open in a new mental tab or contact info copied. Returns before the final interview to read a second case study.

**FIRST VIEWPORT:** Name at the top in the serif heading face, medium weight, generous but not wasteful size. Positioning line immediately below in body sans, regular weight. One-line context below that. Then the four metric tiles spanning the width, each in a ruled column: the number large, the label small. CTA below the metrics. The fold falls after the CTA. No image in the first viewport.

**FORM:** The Deal Memo (#2 of 7 grounded candidates). Seed key 2131e553.

**FINISH:** Unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
