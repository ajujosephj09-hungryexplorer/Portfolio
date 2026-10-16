import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach Aju Joseph John. Email, LinkedIn, and links to writing and code.',
  openGraph: {
    title: 'Contact | Aju Joseph John',
    description:
      'Reach Aju Joseph John. Email, LinkedIn, and links to writing and code.',
    url: 'https://ajujosephjohn.com/contact',
  },
  alternates: {
    canonical: 'https://ajujosephjohn.com/contact',
  },
}

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-content px-6">
      {/* ─── Header ─── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-ink leading-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-base text-secondary leading-relaxed max-w-2xl">
          Open to conversations about product leadership, commercial strategy,
          and AI driven product development.
        </p>
      </section>

      <hr />

      {/* ─── Primary Contact ─── */}
      <section className="py-12 md:py-16" aria-label="Primary contact">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
          <a
            href="mailto:ajujosephj09@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3.5 text-sm font-semibold no-underline hover:bg-blue-800 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      <hr />

      {/* ─── Secondary Links ─── */}
      <section className="py-12 md:py-16" aria-label="Additional links">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="https://ajujosephjohn.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary no-underline hover:text-ink transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16" />
              <path d="M4 8h16" />
              <path d="M4 12l8 6 8-6" />
            </svg>
            Substack
          </a>
          <a
            href="https://github.com/ajujosephj09-hungryexplorer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary no-underline hover:text-ink transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </div>
      </section>
    </article>
  )
}
