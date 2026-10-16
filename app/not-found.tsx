import Link from 'next/link'

export default function NotFound() {
  return (
    <article className="mx-auto max-w-content px-6">
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
          Page Not Found
        </h1>
        <p className="mt-6 text-base text-secondary leading-relaxed max-w-3xl">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-accent text-white px-6 py-3.5 text-sm font-semibold no-underline hover:bg-blue-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </article>
  )
}
