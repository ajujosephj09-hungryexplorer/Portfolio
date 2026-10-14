# 01 — Scaffold, visual system, shared layout with SEO infrastructure

**What to build:** A navigable skeleton site with The Deal Memo visual system applied. The shared layout includes meta title/description, Open Graph tag, and canonical URL infrastructure, where per-page values are passed via Next.js metadata. Sitemap auto-generation is configured and produces /sitemap.xml with all routes. Seven shared components are built and styled: Nav (name left, page links, social icons), Footer (social links, minimal), CTAContact (email, LinkedIn, invitation line), MetricTile (large number + small label in ruled columns), IdentityBar (one-line "who is Aju" context), CaseStudyCard (title, company framing, teaser, metric, link), and RelatedCaseStudies (links to other case studies). All 8 routes exist as stub pages with Nav and Footer. `next build` produces a static export. The site deploys to Vercel.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

- [ ] Next.js project initialized with static export configuration
- [ ] The Deal Memo visual system implemented: #FAFAFA background, #111827 text, #1D4ED8 accent, serif heading face, systematic sans body, horizontal rules as primary structural device
- [ ] Shared layout includes meta title, meta description, Open Graph tags (og:title, og:description, og:url), and canonical URL — driven by per-page metadata
- [ ] Sitemap auto-generated at /sitemap.xml containing all 8 routes
- [ ] Nav component renders on all pages with name, page links, and social icons
- [ ] Footer component renders on all pages with social links
- [ ] CTAContact component renders with email and LinkedIn
- [ ] MetricTile component renders large number with small label in ruled columns
- [ ] IdentityBar component renders one-line context
- [ ] CaseStudyCard component renders title, company framing, teaser, metric, and link
- [ ] RelatedCaseStudies component renders links to other case studies
- [ ] All 8 routes exist as stub pages: /, /case-studies/canadahelps-turnaround, /case-studies/ensemble, /case-studies/hpcc, /case-studies/redline, /about, /contact
- [ ] `next build` succeeds with zero errors
- [ ] Static export produces all routes
- [ ] Site deploys to Vercel
