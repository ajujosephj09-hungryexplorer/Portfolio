import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Product and commercial leader with 20 years building products from zero and running the P&L to scale them across B2B SaaS, fintech, payments, and data platforms. Four countries. ~$150M P&L. Three live AI systems.',
  openGraph: {
    title: 'About Aju Joseph John',
    description:
      'Product and commercial leader with 20 years building products from zero and running the P&L to scale them across B2B SaaS, fintech, payments, and data platforms.',
    url: 'https://ajujosephjohn.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aju Joseph John - Product & Commercial Leader' }],
  },
  alternates: {
    canonical: 'https://ajujosephjohn.com/about',
  },
}

const experience = [
  {
    period: 'Oct 2026 to Present',
    role: 'Strategy & Operations',
    company: 'Databricks',
    proofPoints: [
      'Product adoption strategy for Databricks\u2019 data and AI platform across enterprise accounts.',
    ],
  },
  {
    period: 'Nov 2021 to Present',
    role: 'Independent Advisor',
    company: 'Mapleview Partners',
    proofPoints: [
      'Continuous advisory practice. Three consulting engagements during relocation (financial model, investor ready business plan, IT consultancy growth plan). Paused for CanadaHelps Sep 2023; resumed Jul 2026. Current work includes AI QuickBooks Reconciliation, AI Competitive Intelligence, and AI Contract Risk Analysis (Redline).',
    ],
  },
  {
    period: 'Sep 2023 to Jul 2026',
    role: 'General Manager, B2B & New Product Incubation',
    company:
      'CanadaHelps: Canada\u2019s largest online giving and payments platform. $260M+ processing volume. $27M+ P&L.',
    proofPoints: [
      'Incubated Ensemble from stealth to 200+ customers, $36K MRR, NPS 57 in under 18 months. 86% acquired through product led growth.',
      'Deployed a human in the loop AI sales agent that raised lead conversion from 5% to 45%. Quarterly board presenter for 3 consecutive years.',
    ],
  },
  {
    period: 'Oct 2019 to Oct 2021',
    role: 'Senior Director, Product Management',
    company: 'Fiserv',
    proofPoints: [
      'Led a ~$150M banking intelligence portfolio serving ~4,000 banks and credit unions. Drove 10% growth over two years.',
      'Led the cross company initiative deploying SBA loan disbursement rails during Covid: $5B in financing to 100,000+ small businesses in under 3 months.',
    ],
  },
  {
    period: 'Jun 2012 to Oct 2019',
    role: 'Director of Product Management',
    company: 'LexisNexis Risk Solutions',
    proofPoints: [
      'Commercialized an internal big data platform (HPCC) into a $50M+ market facing business. 100+ enterprise clients. 25,000+ developer community.',
      'Developed 12 business cases requesting $38M in total investment; obtained approvals from the CEO and Reed Elsevier executive chairman.',
    ],
  },
  {
    period: 'Aug 2010 to May 2012',
    role: 'MBA',
    company: 'Duke University (Fuqua School of Business)',
    proofPoints: [
      'Raised $225K and created the Dean Yep Jr. Prize in perpetuity for Duke\u2019s annual Startup Challenge.',
    ],
  },
  {
    period: 'Jan 2004 to Jul 2010',
    role: 'Technology Lead',
    company: 'Cognizant Technology Solutions',
    proofPoints: [
      'Global analytics delivery across 3 continents (Japan, U.S., India). $10M revenue. First Cognizant employee at IMS Japan.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD: Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
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
              'Payments',
              'General Management',
              'Go to Market Strategy',
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: 'https://ajujosephjohn.com/about',
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-content px-6">
        {/* ─── Career Narrative ─── */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-tight">
            About
          </h1>

          <div className="mt-8 space-y-5 text-base text-ink leading-relaxed max-w-3xl">
            <p>
              <strong>Four products built from zero across three companies.</strong> Not one product launch repeated across templates, but four distinct commercialization stories: a SaaS product incubated from stealth to 200+ customers and $432K ARR at CanadaHelps, a proprietary big data platform turned into a $50M+ market facing business at LexisNexis, a claims triage product grown to $20M in revenue, and payment APIs brought from concept to 500+ bank adoption at Fiserv. The pattern is the same each time: find the underserved segment, build the business case, ship, then own the revenue line.
            </p>

            <p>
              <strong>Scaling what exists requires a different discipline.</strong> At CanadaHelps (Canada's largest online giving and payments platform, $260M+ processing volume, $27M+ P&L), I grew the core business at 7.8% CAGR, moved customer retention from 67% to 83%, stickiness from 25% to 77%, and NPS from 5 to 33. At Fiserv, I led a ~$150M banking intelligence portfolio and drove 10% growth over two years. The operating work is less visible than a launch: pricing, retention loops, gross margin improvement, annual planning, quarterly board presentations. It compounds quietly.
            </p>

            <p>
              <strong>AI is an operating lever, not a slide deck topic.</strong> I designed and deployed a human in the loop AI sales agent that raised lead conversion from 5% to 45%, a 45 percentage point lift. I built an AI PM system that cut development cycles from many weeks to under two weeks. Outside the enterprise, I have three live AI systems in production: competitive intelligence, contract risk analysis, and the sales agent itself. Every system uses structured output validation and human oversight. No hallucinated outputs reach the user.
            </p>

            <p>
              <strong>Four countries, three disciplines, 20 years.</strong> I started as the first Cognizant employee at IMS Japan, running a $10M global analytics delivery across three continents. An MBA at Duke followed. Then seven years at LexisNexis in the U.S. building and commercializing data platforms. A move to Fiserv for payments and open banking. Cross border relocation to Canada, consulting through Mapleview Partners, and then the GM role at CanadaHelps. The breadth is deliberate: product management, general management, and commercial leadership are different muscles, and I have trained all three.
            </p>
          </div>
        </section>

        <hr />

        {/* ─── Experience Timeline ─── */}
        <section className="py-12 md:py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Experience
          </h2>

          <div className="mt-10">
            {experience.map((entry, i) => (
              <div key={i}>
                {i > 0 && <hr />}
                <div className="py-8 md:py-10">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                    <p className="text-sm text-secondary tabular-nums shrink-0 md:w-48">
                      {entry.period}
                    </p>
                    <div className="mt-1 md:mt-0">
                      <p className="font-serif text-lg font-bold text-ink">
                        {entry.role}
                      </p>
                      <p className="mt-1 text-sm text-secondary leading-relaxed">
                        {entry.company}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {entry.proofPoints.map((point, j) => (
                          <li
                            key={j}
                            className="text-base text-ink leading-relaxed max-w-3xl"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* ─── Education ─── */}
        <section className="py-12 md:py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            Education
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="font-serif text-lg font-bold text-ink">
                MBA, Duke University
              </p>
              <p className="mt-1 text-sm text-secondary">
                Fuqua School of Business
              </p>
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-ink">
                B.Tech, Electronics & Communication Engineering
              </p>
              <p className="mt-1 text-sm text-secondary">
                First Class with Distinction
              </p>
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-ink">
                Pragmatic Institute Certified
              </p>
              <p className="mt-1 text-sm text-secondary">Build</p>
            </div>
          </div>
        </section>

        <hr />

        {/* ─── What Drives Me ─── */}
        <section className="py-12 md:py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
            What Drives Me
          </h2>

          <div className="mt-8 space-y-5 text-base text-ink leading-relaxed max-w-3xl">
            <p>
              <strong>Autonomy with accountability, not consensus by committee.</strong> Give me a business problem, a team, clear metrics, and decision rights; I will present to the board quarterly and own the result. Environments where every decision needs five sign-offs drain the energy that should go into building.
            </p>

            <p>
              <strong>Building people, not just products.</strong> Five promotions in three years. eNPS of 44. I invest in the people around me because durable organizations outlast any single product cycle. Shipping features is the easy part; building a team that keeps shipping after you leave is the actual work.
            </p>

            <p>
              <strong>The arc points toward CRO or CEO, not CPO.</strong> Product leadership without commercial accountability feels incomplete. The line from roadmap to revenue needs to be visible and mine. That conviction shapes every role I take and every decision I make inside it.
            </p>
          </div>
        </section>

        <hr />

        {/* ─── CTA ─── */}
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
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
