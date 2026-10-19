import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aju Joseph John | Product & Commercial Leader',
  description:
    'Product and P&L leader who builds from zero and deploys AI as an operating lever. B2B SaaS, fintech & payments, and software platforms. Three products built 0 to 1. ~$150M P&L. Three AI systems in production.',
  openGraph: {
    title: 'Aju Joseph John | Product & Commercial Leader',
    description:
      'Product and P&L leader who builds from zero and deploys AI as an operating lever. B2B SaaS, fintech & payments, and software platforms. Three products built 0 to 1. ~$150M P&L. Three AI systems in production.',
    url: 'https://ajujosephjohn.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aju Joseph John - Product & Commercial Leader' }],
  },
  alternates: {
    canonical: 'https://ajujosephjohn.com',
  },
}

const caseStudies = [
  {
    title: 'B2B Payments Business Turnaround',
    company:
      "Canada's largest online giving and payments platform. $260M+ annual processing volume. $27M+ P&L.",
    teaser:
      'Inherited four disconnected teams with no strategy. Rebuilt the operating model and grew processing revenue from $230M to $266M; NPS from 5 to 33.',
    metric: '$230M → $266M',
    metricLabel: 'Processing Revenue',
    href: '/case-studies/canadahelps-turnaround',
  },
  {
    title: 'Building a $150M Banking Intelligence Portfolio',
    company:
      'Fiserv. Senior Director, Product Management. ~$150M banking intelligence portfolio serving ~4,000 banks.',
    teaser:
      'Inherited a declining portfolio after a major acquisition. Built a new SaaS analytics platform to $24.9M ARR, led a crisis response disbursing ~$5B in under 3 weeks, and monetized Apple Pay API across 500+ banks.',
    metric: '~$150M',
    metricLabel: 'Portfolio',
    href: '/case-studies/fiserv-portfolio',
  },
  {
    title: 'HPCC Platform Commercialization',
    company: 'LexisNexis Risk Solutions',
    teaser:
      'Turned an internal big data platform into a $50M+ market facing business, building the go to market from scratch and securing $38M in investment through 12 CEO approved business cases.',
    metric: '$50M+',
    metricLabel: 'Revenue',
    href: '/case-studies/hpcc-platform',
  },
  {
    title: 'Redline',
    company:
      'Personal AI project. Contract review built from user research through production deployment.',
    teaser:
      'Research found 71% of freelancers experience non payment. Built a trust first AI contract review system where every risk flag cites its source sentence: live and inspectable.',
    metric: 'Live',
    metricLabel: 'AI Product',
    href: '/case-studies/redline',
    proof: 'https://redline-kappa-umber.vercel.app',
  },
]

const metrics = [
  { value: '$60M+', label: 'Products Built 0→1' },
  { value: '$266M', label: 'Revenue Grown from $230M' },
  { value: '~$150M', label: 'P&L Owned' },
  { value: '3', label: 'Live AI Systems' },
]

const careerScope = [
  { value: '20', label: 'Years' },
  { value: '4', label: 'Countries' },
  { value: '3', label: 'Industries' },
  { value: 'Duke', label: 'MBA' },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': 'https://ajujosephjohn.com/#person',
            name: 'Aju Joseph John',
            jobTitle: 'Product & Commercial Leader',
            url: 'https://ajujosephjohn.com',
            sameAs: [
              'https://www.linkedin.com/in/aju-joseph-john/',
              'https://github.com/ajujosephj09-hungryexplorer',
              'https://ajujosephjohn.substack.com/',
            ],
            email: 'mailto:ajujosephj09@gmail.com',
            alumniOf: [
              {
                '@type': 'CollegeOrUniversity',
                name: 'Duke University, Fuqua School of Business',
              },
            ],
            knowsAbout: [
              'Product Management',
              'P&L Management',
              'B2B SaaS',
              'AI Systems',
              'Fintech',
            ],
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://ajujosephjohn.com',
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-content px-6">
        {/* ─── Hero / Thesis ─── */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 animate-thesis">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
            Aju Joseph John
          </h1>
          <div className="mt-6 md:mt-0 md:flex md:items-start md:gap-10">
            <div className="flex-1">
              <p className="mt-4 md:mt-4 text-lg md:text-xl text-ink leading-relaxed max-w-2xl">
                Product and P&L leader who builds from zero and deploys AI as an operating lever.
              </p>
              <p className="mt-3 text-base text-secondary leading-relaxed max-w-2xl">
                B2B SaaS, fintech & payments, and software platforms.
                Four countries. Three products built from zero. Three AI systems in production.
              </p>
            </div>
            <img
              src="/hd-1791323747777-99d17db7-ba6b-4b64-9584-a139bd203213.png"
              alt="Aju Joseph John"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="mt-6 md:mt-4 w-32 h-32 md:w-40 md:h-40 object-cover border border-rule headshot flex-shrink-0"
            />
          </div>
        </section>

        <hr />

        {/* ─── Metric Strip ─── */}
        <section className="py-10 md:py-14 animate-thesis-delay" aria-label="Key metrics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`${
                  i > 0 ? 'md:border-l md:border-rule md:pl-8' : ''
                } ${i % 2 !== 0 ? 'pl-6 border-l border-rule md:pl-8' : ''}`}
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-ink tabular-nums">
                  {m.value}
                </p>
                <p className="mt-1 text-sm text-secondary">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* ─── CTA (above the fold) ─── */}
        <section className="py-8 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6" aria-label="Contact">
          <a
            href="mailto:ajujosephj09@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3.5 text-sm font-semibold no-underline hover:bg-accent-hover transition-colors"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="0" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            ajujosephj09@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aju-joseph-john/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink text-ink px-6 py-3.5 text-sm font-semibold no-underline hover:bg-ink hover:text-ground transition-colors"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" rx="0" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </section>

        <hr />

        {/* ─── Featured Case Studies ─── */}
        <section id="case-studies" className="py-12 md:py-16" aria-label="Case studies">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Case Studies
          </h2>

          <div className="mt-10 space-y-0">
            {caseStudies.map((cs, i) => (
              <div key={i}>
                {i > 0 && <hr />}
                <div className="py-10 md:py-12 grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-start">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">
                      <Link
                        href={cs.href}
                        className="text-ink no-underline hover:text-accent transition-colors"
                      >
                        {cs.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-secondary leading-relaxed">
                      {cs.company}
                    </p>
                    {/* Metric inline on mobile, hidden on desktop (shown in right column) */}
                    <div className="mt-3 md:hidden">
                      <span className="font-serif text-2xl font-bold text-ink tabular-nums">
                        {cs.metric}
                      </span>
                      <span className="ml-2 text-sm text-secondary">
                        {cs.metricLabel}
                      </span>
                    </div>
                    <p className="mt-4 text-base text-ink leading-relaxed max-w-prose">
                      {cs.teaser}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <Link
                        href={cs.href}
                        className="text-sm text-accent font-semibold no-underline hover:underline"
                      >
                        Read the case study
                      </Link>
                      {cs.proof && (
                        <a
                          href={cs.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-secondary no-underline hover:text-ink transition-colors"
                        >
                          View live product
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Metric column on desktop only */}
                  <div className="hidden md:block md:text-right">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-ink tabular-nums">
                      {cs.metric}
                    </p>
                    <p className="mt-1 text-sm text-secondary">
                      {cs.metricLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* ─── Career Scope ─── */}
        <section className="py-12 md:py-16" aria-label="Career scope">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Career Scope
          </h2>

          <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
            {careerScope.map((s, i) => (
              <div
                key={i}
                className={`${
                  i > 0
                    ? 'sm:border-l sm:border-rule sm:pl-6'
                    : ''
                } ${i % 2 !== 0 ? 'pl-6 border-l border-rule sm:pl-6' : ''}`}
              >
                <p className="font-serif text-2xl md:text-3xl font-bold text-ink tabular-nums">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-secondary leading-relaxed max-w-prose">
            From Cognizant in Tokyo to Databricks in Toronto. Product management,
            general management, and commercial leadership across B2B SaaS, fintech,
            payments, and data platforms. Duke MBA. Three products built from zero. Three live AI systems.
          </p>
        </section>

        <hr />

        {/* ─── Bottom CTA ─── */}
        <section className="py-12 md:py-16" aria-label="Contact">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-secondary leading-relaxed max-w-prose">
            Open to conversations about product leadership, commercial strategy,
            and AI driven product development.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
            <a
              href="mailto:ajujosephj09@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3.5 text-sm font-semibold no-underline hover:bg-accent-hover transition-colors"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="0" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              ajujosephj09@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/aju-joseph-john/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink text-ink px-6 py-3.5 text-sm font-semibold no-underline hover:bg-ink hover:text-ground transition-colors"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" rx="0" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
