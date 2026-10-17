import Link from 'next/link'
import type { ReactNode } from 'react'

interface Metric {
  value: string
  label: string
}

interface Section {
  heading: string
  content: ReactNode
}

interface RelatedStudy {
  title: string
  metric: string
  href: string
}

interface SEOData {
  title: string
  companyName: string
  datePublished: string
  dateModified: string
  description: string
  url: string
}

interface CaseStudyLayoutProps {
  title: string
  companyLine: string
  metrics: Metric[]
  sections: Section[]
  relatedStudies: RelatedStudy[]
  seo: SEOData
}

export default function CaseStudyLayout({
  title,
  companyLine,
  metrics,
  sections,
  relatedStudies,
  seo,
}: CaseStudyLayoutProps) {
  return (
    <>
      {/* JSON-LD: CreativeWork */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: seo.title,
            author: {
              '@type': 'Person',
              name: 'Aju Joseph John',
              url: 'https://ajujosephjohn.com',
            },
            publisher: {
              '@type': 'Person',
              name: 'Aju Joseph John',
            },
            datePublished: seo.datePublished,
            dateModified: seo.dateModified,
            description: seo.description,
            url: seo.url,
            about: {
              '@type': 'Organization',
              name: seo.companyName,
            },
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Case Studies',
                item: 'https://ajujosephjohn.com/case-studies',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: seo.title,
                item: seo.url,
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-content px-6">
        {/* Breadcrumb */}
        <p className="pt-8 text-sm text-secondary">
          <a href="/case-studies" className="text-secondary no-underline hover:text-ink transition-colors">Case Studies</a>
          <span className="mx-2 text-rule">/</span>
          <span>{title}</span>
        </p>

        {/* IdentityBar */}
        <p className="mt-4 text-sm text-secondary leading-relaxed">
          Aju Joseph John is a product and commercial leader. 20 years across B2B SaaS, fintech, payments, and data platforms.
        </p>

        <hr className="mt-6" />

        {/* Title Block */}
        <section className="py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base text-secondary leading-relaxed max-w-3xl">
            {companyLine}
          </p>

          {/* Headline Metrics */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-8">
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

        {/* Narrative Sections */}
        {sections.map((section, i) => (
          <div key={i}>
            <section className="py-12 md:py-16">
              <h2
                id={section.heading.toLowerCase().replace(/\s+/g, '-')}
                className="font-serif text-2xl md:text-3xl font-bold text-ink"
              >
                {section.heading}
              </h2>
              <div className="mt-6 text-base text-ink leading-relaxed max-w-3xl">
                {section.content}
              </div>
            </section>
            <hr />
          </div>
        ))}

        {/* Related Case Studies */}
        <section className="py-12 md:py-16" aria-label="Related case studies">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Other Case Studies
          </h2>
          <div className="mt-8 space-y-0">
            {relatedStudies.map((study, i) => (
              <div key={i}>
                {i > 0 && <hr />}
                <div className="py-6 md:py-8 grid md:grid-cols-[1fr_auto] gap-4 md:gap-12 items-center">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink">
                      <Link
                        href={study.href}
                        className="text-ink no-underline hover:text-accent transition-colors"
                      >
                        {study.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="md:text-right">
                    <span className="font-serif text-2xl md:text-3xl font-bold text-ink tabular-nums">
                      {study.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* CTA Contact */}
        <section className="py-12 md:py-16" aria-label="Contact">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-secondary leading-relaxed max-w-3xl">
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
