# Aju Joseph John — Portfolio

Personal portfolio site for [ajujosephjohn.com](https://ajujosephjohn.com). A credibility validator for an executive job search, styled as an investment memo ("The Deal Memo").

## Live Site

**[ajujosephjohn.com](https://ajujosephjohn.com)**

## Stack

- **Framework:** Next.js 14 (static export)
- **Styling:** Tailwind CSS 3
- **Typography:** Libre Baskerville (serif) + Source Sans 3 (sans)
- **Hosting:** Vercel (auto deploys on push to `main`)
- **Language:** TypeScript 5.5

No database. No auth. No server runtime. No CMS. The entire site is a static export.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with metric strip, case studies, and CTAs |
| `/about` | Career narrative, experience timeline, education |
| `/contact` | Email, LinkedIn, Substack, GitHub |
| `/case-studies/canadahelps-turnaround` | B2B payments business turnaround |
| `/case-studies/fiserv-portfolio` | $150M banking intelligence portfolio |
| `/case-studies/hpcc-platform` | Internal platform to $50M+ commercial business |
| `/case-studies/redline` | AI contract review (with [live product](https://redline-kappa-umber.vercel.app) link) |

## Design System

The visual direction is deliberate: an investment memo, not a designer portfolio.

- **Palette:** 5 tokens only. Near white ground, near black ink, one blue accent (#1D4ED8), secondary gray, rule gray.
- **Rules:** Zero border radius. Zero box shadows. No gradients, glass, or glow. Horizontal rules as the primary structural device.
- **Metrics:** Serif face at pull quote scale with tabular figures.
- **Single accent:** Blue for interactive elements only. No decorative color.

Full design system documented in `DESIGN.md`.

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build static export
npm run build

# Validate build output
npm run validate
```

Requires Node 18+.

## Project Structure

```
app/
  page.tsx                    # Landing page
  about/page.tsx              # About page
  contact/page.tsx            # Contact page
  not-found.tsx               # 404 page
  case-studies/
    canadahelps-turnaround/   # Case study page
    fiserv-portfolio/         # Case study page
    hpcc-platform/            # Case study page
    redline/                  # Case study page
  sitemap.xml/                # Auto generated sitemap
components/
  Nav.tsx                     # Navigation with mobile hamburger
  Footer.tsx                  # Site footer
  CaseStudyLayout.tsx         # Reusable case study template
public/
  og-image.png                # Open Graph image for link previews
```

## SEO

- Unique meta title, description, and OG tags per page
- Canonical URLs on all pages
- JSON-LD structured data (Person, CreativeWork, BreadcrumbList)
- `robots.txt` and `sitemap.xml`
- Semantic heading hierarchy (one h1 per page, no skipped levels)

## License

This is a personal portfolio. The code structure is open for reference, but the content (copy, images, case studies) is not licensed for reuse.
