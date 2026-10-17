import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <article className="mx-auto max-w-content px-6">
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
          Page Not Found
        </h1>
        <p className="mt-6 text-base text-secondary leading-relaxed max-w-3xl">
          The page you are looking for does not exist or has been moved. You can find all four case studies and contact details from the homepage.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-accent text-white px-6 py-3.5 text-sm font-semibold no-underline hover:bg-accent-hover transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <ul className="mt-6 space-y-2">
          <li>
            <Link href="/about" className="text-sm text-accent font-semibold no-underline hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/case-studies/canadahelps-turnaround" className="text-sm text-accent font-semibold no-underline hover:underline">
              B2B Payments Business Turnaround
            </Link>
          </li>
          <li>
            <Link href="/case-studies/fiserv-portfolio" className="text-sm text-accent font-semibold no-underline hover:underline">
              Building a $150M Banking Intelligence Portfolio
            </Link>
          </li>
          <li>
            <Link href="/case-studies/hpcc-platform" className="text-sm text-accent font-semibold no-underline hover:underline">
              HPCC Platform Commercialization
            </Link>
          </li>
          <li>
            <Link href="/case-studies/redline" className="text-sm text-accent font-semibold no-underline hover:underline">
              Redline: AI Contract Review
            </Link>
          </li>
        </ul>
      </section>
    </article>
  )
}
