import type { Metadata } from 'next'
import CaseStudyLayout from '../../../components/CaseStudyLayout'

export const metadata: Metadata = {
  title: 'CanadaHelps Turnaround: From Silos to 83% Retention',
  description:
    'How Aju Joseph John inherited four disconnected teams at CanadaHelps, built one coherent operating strategy, restructured into cross functional pods, and deployed AI as an operating lever. Retention rose from 67% to 83%, stickiness from 25% to 77%, NPS from 5 to 33.',
  openGraph: {
    title: 'CanadaHelps Turnaround: From Silos to 83% Retention | Aju Joseph John',
    description:
      'Inherited four disconnected teams at CanadaHelps. Built one coherent operating strategy, restructured into cross functional pods, deployed AI as an operating lever. Retention 67% to 83%. NPS 5 to 33.',
    url: 'https://ajujosephjohn.vercel.app/case-studies/canadahelps-turnaround',
  },
  alternates: {
    canonical: 'https://ajujosephjohn.vercel.app/case-studies/canadahelps-turnaround',
  },
}

const headlineMetrics = [
  { value: '67% → 83%', label: 'Retention' },
  { value: '25% → 77%', label: 'Stickiness' },
  { value: '5 → 33', label: 'NPS' },
  { value: '10K → 16K', label: 'MAU' },
]

const relatedStudies = [
  {
    title: 'Ensemble: 0 to 1 SaaS Incubation',
    metric: '$432K ARR',
    href: '/case-studies/ensemble',
  },
  {
    title: 'HPCC Platform Commercialization',
    metric: '$50M+ Revenue',
    href: '/case-studies/hpcc-platform',
  },
  {
    title: 'Redline: AI Contract Review',
    metric: 'Live AI Product',
    href: '/case-studies/redline',
  },
]

const sections = [
  {
    heading: 'Context',
    content: (
      <>
        <p>
          CanadaHelps is Canada's largest online giving and payments platform. $260M+ annual
          processing volume. $27M+ P&L. Approximately 14,000 clients across three main
          fundraising products, plus a legacy CRM.
        </p>
        <p className="mt-4">
          I joined as General Manager of the B2B group, reporting to the CEO. The mandate
          was to grow the fundraising business. What I found was a business where four teams
          were each running their own disconnected strategies with no tie back to shared
          objectives.
        </p>
      </>
    ),
  },
  {
    heading: 'Problem',
    content: (
      <>
        <p>
          Every function was operating against its own plan, disconnected from business
          objectives like revenue, retention, stickiness, and CAC payback.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Sales</span> had two
          mandates (acquire new customers and onboard to paying) with separate commissions
          on each. Neither was optimized for overall revenue targets, pipeline health, or
          CAC payback.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Marketing</span> was
          blasting campaigns without strategy. Communications were not driving top of funnel
          acquisition or retention.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Client Success</span> was
          drowning: 14,000 clients, 1,000+ support tickets and escalations, no scalable
          tooling or tiered approach.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Product</span> was a
          feature factory. Three products, but the roadmap had no tie back to business
          outcomes. The legacy CRM (DMS) was losing $115 for every $100 earned.
        </p>
      </>
    ),
  },
  {
    heading: 'Decision',
    content: (
      <>
        <p>
          In the first 30 days, I listened. Spoke to customers, met with product, finance,
          and operations teams. Read every support ticket from the past six months. Met
          every person one on one. Understood the competitive dynamics and financials.
        </p>
        <p className="mt-4">
          In days 30 through 60, I diagnosed. The core issue was not that any individual
          function was failing. The issue was that no one had created a single operating
          model that aligned all four teams to the same objectives across the customer
          lifecycle.
        </p>
        <p className="mt-4">
          In days 60 through 90, I acted. The strategy had two pillars: restructure the
          teams into cross functional pods organized around the customer lifecycle, and
          deploy AI as an operating lever for efficiency and conversion.
        </p>
      </>
    ),
  },
  {
    heading: 'Execution',
    content: (
      <>
        <p className="text-sm text-secondary font-semibold">
          Pillar 1: Pod Restructuring
        </p>
        <p className="mt-3">
          Four disconnected teams became three cross functional pods, each aligned to a
          stage of the customer lifecycle.
        </p>
        <p className="mt-4">
          The <span className="font-semibold">Acquisition Pod</span>, led by Sales, added a
          marketing person for top of funnel lead generation. Sales focused solely on
          converting registrations to paying clients within 30 days. A CS team member was
          assigned to handhold new clients through onboarding.
        </p>
        <p className="mt-4">
          The <span className="font-semibold">Retention and Engagement Pod</span>, led by
          Marketing, shifted from campaign blasting to customer lifecycle engagement:
          retention tactics, product tips, engagement practices throughout the lifecycle.
          Client Success started managing 14,000 clients at scale using new tooling to
          identify at risk clients, churn signals, and RFM segments. Investments included
          Pendo for marketing analytics, Amplitude for product analytics, and a CS platform
          for scaled client management.
        </p>
        <p className="mt-4">
          The <span className="font-semibold">Product Pod</span> sunset the legacy CRM,
          eliminating all six DMS salespeople and four of five CS members (one kept for
          maintenance). The product roadmap was rebuilt, tied to business objectives instead
          of feature requests. This freed headcount, budget, and bandwidth for what became
          CanadaHelps Ensemble.
        </p>

        <p className="mt-8 text-sm text-secondary font-semibold">
          Pillar 2: AI as an Operating Lever
        </p>
        <p className="mt-3">
          AI was not an experiment or an innovation initiative. It was the second pillar of
          the operating strategy, deployed where it would move business metrics directly.
        </p>
        <p className="mt-4">
          The <span className="font-semibold">AI Sales Agent</span> was a human in the loop
          system that researched prospects, generated evidence backed qualification scores,
          and recommended next best actions. The agent did the repeatable research; the rep
          made the judgment call. Discovery to Demo stage conversion went from 5% to 45%.
        </p>
        <p className="mt-4">
          The <span className="font-semibold">AI Product Management System</span> automated
          the PM drafting workflow. A single command generated a complete draft: problem
          statement, requirements, user stories with acceptance criteria, and a full PRD.
          The PM still made every judgment call. The Chief Architect still reviewed for
          technical feasibility. The difference was the PM spent 80% of their time on
          decisions instead of 80% on drafting. Development cycles went from many weeks to
          under two weeks.
        </p>
      </>
    ),
  },
  {
    heading: 'Outcome',
    content: (
      <>
        <p>
          Over approximately two years at CanadaHelps ($260M+ processing volume, $27M+
          P&L), the coherent operating strategy produced measurable results across every
          dimension.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <p>
            <span className="text-sm text-secondary font-semibold">Processing revenue:</span>{' '}
            $230M to $266M (8%+ CAGR)
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Retention:</span>{' '}
            67% to 83%
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Stickiness:</span>{' '}
            25% to 77%
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">NPS:</span>{' '}
            5 to 33
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">MAU:</span>{' '}
            10K to 16K
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">AI sales conversion:</span>{' '}
            5% to 45%
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Dev cycle reduction:</span>{' '}
            65%
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">eNPS:</span>{' '}
            44, with 5 promotions in 3 years
          </p>
        </div>
      </>
    ),
  },
  {
    heading: 'Learning',
    content: (
      <p>
        When teams operate in silos with disconnected strategies, the leader's first job is
        not to optimize any single function. It is to create one coherent operating model
        that aligns everyone to the same objectives across the customer lifecycle. Structure
        enables strategy. Strategy without structure is just a slide deck.
      </p>
    ),
  },
]

export default function CanadaHelpsTurnaroundPage() {
  return (
    <CaseStudyLayout
      title="CanadaHelps Turnaround"
      companyLine="CanadaHelps: Canada's largest online giving and payments platform. $260M+ processing volume. $27M+ P&L."
      metrics={headlineMetrics}
      sections={sections}
      relatedStudies={relatedStudies}
      seo={{
        title: 'CanadaHelps Turnaround: From Silos to 83% Retention',
        companyName: 'CanadaHelps',
        datePublished: '2026-10-15',
        dateModified: '2026-10-15',
        description:
          'How Aju Joseph John inherited four disconnected teams at CanadaHelps, built one coherent operating strategy, and deployed AI as an operating lever. Retention 67% to 83%, NPS 5 to 33.',
        url: 'https://ajujosephjohn.vercel.app/case-studies/canadahelps-turnaround',
      }}
    />
  )
}
