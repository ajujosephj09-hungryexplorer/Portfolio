import type { Metadata } from 'next'
import CaseStudyLayout from '../../../components/CaseStudyLayout'

export const metadata: Metadata = {
  title: 'Redline: AI Contract Review for Freelancers',
  description:
    'How Aju Joseph John built Redline, a research driven AI contract review system where every risk flag cites its source sentence. 71% of freelancers experience non payment. Redline exists so the reading happens every time.',
  openGraph: {
    title: 'Redline: AI Contract Review for Freelancers | Aju Joseph John',
    description:
      'Research driven AI contract review. Every risk flag cites the exact source sentence from the document. 68 tests, 13 routes, live deployed.',
    url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/redline',
  },
  alternates: {
    canonical: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/redline',
  },
}

const headlineMetrics = [
  { value: '71%', label: 'Freelancer Non Payment Rate' },
  { value: '68', label: 'Tests Passing' },
  { value: '13', label: 'Routes Compiled' },
]

const relatedStudies = [
  {
    title: 'B2B Payments Business Turnaround',
    metric: '$230M → $266M Revenue',
    href: '/case-studies/canadahelps-turnaround',
  },
  {
    title: 'Building a $150M Banking Intelligence Portfolio',
    metric: '~$150M Portfolio',
    href: '/case-studies/fiserv-portfolio',
  },
  {
    title: 'HPCC Platform Commercialization',
    metric: '$50M+ Revenue',
    href: '/case-studies/hpcc-platform',
  },
]

const sections = [
  {
    heading: 'Context',
    content: (
      <>
        <p>
          Redline is a personal AI project. Not a demo or a concept, but a shipped product
          with inspectable code. It came from a specific question: what would it take to
          build an AI system that freelancers actually trust with their contracts?
        </p>
        <p className="mt-4">
          Freelancers receive contracts written by the other party. The language that hurts
          them is not hidden. It is readable, specific, and sitting in a document they have
          access to. They do not lack the right to read it. They lack the time, the pattern
          recognition, and the confidence to know which sentences matter and what to say back.
        </p>
      </>
    ),
  },
  {
    heading: 'Problem',
    content: (
      <>
        <p>
          71% of freelancers have experienced non payment. Only 28% use written contracts.
          Those who do reduce payment disputes by 73%. The contracts they receive are inbound,
          terms handed to them by someone with more leverage.
        </p>
        <p className="mt-4">
          What freelancers do today: read the contract themselves and miss things, ask a friend
          who "knows legal stuff," pay $300 to $500 for a lawyer to review a $2,000 project,
          or sign without reading. That last option is the most common. Existing AI tools are
          either enterprise priced ($30,000+ per year) or too shallow ($29 to $99 per month
          with no counter offer drafting and no severity ranking). Every existing tool requires
          significant upfront configuration before producing useful output.
        </p>
        <p className="mt-4">
          Courts do not care whether you read the contract. A ruling compelling arbitration
          against an employee stated plainly: "the mere fact that one does not read a contract
          which he has signed is not grounds to invalidate the writing." Redline exists so the
          reading happens every time.
        </p>
      </>
    ),
  },
  {
    heading: 'Decision',
    content: (
      <>
        <p>
          The core design decision was trust first AI. Every risk flag must cite the exact
          source sentence from the uploaded document. A human can find that sentence in the
          original and confirm it exists verbatim. A flag that paraphrases instead of quoting
          is a bug. This is not a black box that says "this clause is risky." It shows you
          exactly which sentence triggered the flag and why.
        </p>
        <p className="mt-4">
          Six default rules ship with the product, each chosen because of what it costs a
          freelancer when it goes wrong: overbroad IP assignment, unfavorable payment terms,
          termination without guaranteed payment, non compete restrictions, overbroad
          indemnification, and forced arbitration with class action waivers. Severity is
          assessed from the specific language in the contract (scope, duration, one sidedness),
          not from the clause category. Two clauses of the same type can have different
          severities.
        </p>
        <p className="mt-4">
          The tool flags aggressively. False positives over false negatives. A false positive
          costs 10 seconds (read the citation, dismiss). A false negative costs whatever the
          contract costs. This only works because every flag cites its source. Without
          citations, aggressive flagging would be noise.
        </p>
        <p className="mt-4">
          Gap analysis flags clauses that should exist but do not: IP assignment, payment
          terms, and termination. It does not flag absence of non compete, indemnification,
          or forced arbitration, because missing is the preferred state.
        </p>
      </>
    ),
  },
  {
    heading: 'Execution',
    content: (
      <>
        <p>
          Full stack execution across nine tickets, from project scaffold through production
          deployment. Auth via Supabase with row level security across all tables. Browser
          side document parsing (no OCR; scanned documents break the citation requirement).
          OpenRouter for model access with strict JSON schema validation on every response.
          Structured output ensures no malformed analysis reaches the user.
        </p>
        <p className="mt-4">
          The analysis engine constructs prompts from the user's rules, runs the contract
          through the model, validates the response against a strict schema, sorts flags by
          severity, filters gaps, and rebuilds the checklist. Tests mock the HTTP call to
          OpenRouter but not the engine itself. Prompt construction, result validation,
          severity sorting, gap filtering, and checklist rebuilding all run for real in the
          test suite.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Scale:</span>{' '}
          13 routes compiled. 68 tests across 8 test files, zero failures. Five Supabase
          migrations with row level security policies. The app works without Supabase for
          anonymous analysis; auth dependent features (library, rules persistence) degrade
          gracefully.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Key modules:</span>{' '}
          Core analysis pipeline, OpenRouter API client, question answering logic, client
          side document parser, rules CRUD with local fallback, and a document library with
          title and date formatting. Every module is independently testable.
        </p>
        <p className="mt-4">
          Beyond the analysis engine: editable red line rules that users can toggle, reword,
          add, or delete. A question box that appears after analysis and answers follow up
          questions grounded in the document and analysis context. A document library for
          saved past contracts. Counter offer drafting for each flag and gap, with language
          specific to the contract shape.
        </p>
      </>
    ),
  },
  {
    heading: 'Outcome',
    content: (
      <>
        <p>
          Redline is live and deployed. The code is public. Every claim on this page is
          verifiable.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <p>
            <span className="text-sm text-secondary font-semibold">Live product:</span>{' '}
            <a
              href="https://redline-kappa-umber.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline hover:underline"
            >
              redline-kappa-umber.vercel.app
            </a>
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Source code:</span>{' '}
            <a
              href="https://github.com/ajujosephj09-hungryexplorer/Redline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent no-underline hover:underline"
            >
              GitHub repository
            </a>
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Test coverage:</span>{' '}
            68 tests, zero failures
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Routes:</span>{' '}
            13 compiled
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Smoke test:</span>{' '}
            6 flags found on risky fixture, all 6 citations verified as verbatim substrings
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Deployment:</span>{' '}
            Vercel, auto deploys from master
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="https://redline-kappa-umber.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3.5 text-sm font-semibold no-underline hover:bg-blue-800 transition-colors"
          >
            Try the Live Product
          </a>
          <a
            href="https://github.com/ajujosephj09-hungryexplorer/Redline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink text-ink px-6 py-3.5 text-sm font-semibold no-underline hover:bg-ink hover:text-ground transition-colors"
          >
            View Source Code
          </a>
        </div>
      </>
    ),
  },
  {
    heading: 'Learning',
    content: (
      <>
        <p>
          AI product development that earns trust starts with research, not technology
          selection. The 71% non payment statistic originated the product. The trust first
          citation architecture shaped every design decision downstream. The six default
          rules were chosen because the research showed where freelancers get hurt, not
          because those are the easiest clause types to detect.
        </p>
        <p className="mt-4">
          The pattern: start with the user's actual problem (documented in research, not
          assumed), make the system's reasoning inspectable (every flag cites its source),
          ship it (live URL, public repo, passing tests), and let the work speak for itself.
        </p>
      </>
    ),
  },
]

export default function RedlinePage() {
  return (
    <CaseStudyLayout
      title="Redline: AI Contract Review"
      companyLine="Personal AI project. Research driven contract review for freelancers. Every risk flag cites the exact source sentence."
      metrics={headlineMetrics}
      sections={sections}
      relatedStudies={relatedStudies}
      seo={{
        title: 'Redline: AI Contract Review for Freelancers',
        companyName: 'Personal AI Project',
        datePublished: '2026-10-15',
        dateModified: '2026-10-15',
        description:
          'How Aju Joseph John built Redline, a research driven AI contract review system where every risk flag cites its source sentence. 71% of freelancers experience non payment. 68 tests, 13 routes, live deployed.',
        url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/redline',
      }}
    />
  )
}
