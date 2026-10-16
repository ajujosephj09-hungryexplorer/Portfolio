import type { Metadata } from 'next'
import CaseStudyLayout from '../../../components/CaseStudyLayout'

export const metadata: Metadata = {
  title: 'HPCC Platform Commercialization at LexisNexis',
  description:
    'How Aju Joseph John turned an internal big data platform at LexisNexis into a $50M+ market facing business. 12 business cases, $38M investment, 100+ enterprise clients, 25,000+ developer community.',
  openGraph: {
    title: 'HPCC Platform Commercialization at LexisNexis | Aju Joseph John',
    description:
      'Turned an internal big data platform at LexisNexis into a $50M+ market facing business. 100+ enterprise clients. 25,000+ developer community. 12 business cases totaling $38M in investment.',
    url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/hpcc-platform',
  },
  alternates: {
    canonical: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/hpcc-platform',
  },
}

const headlineMetrics = [
  { value: '$50M+', label: 'Revenue' },
  { value: '100+', label: 'Enterprise Clients' },
  { value: '25K+', label: 'Developer Community' },
  { value: '$38M', label: 'Investment Secured' },
]

const relatedStudies = [
  {
    title: 'CanadaHelps Turnaround',
    metric: '67% → 83% Retention',
    href: '/case-studies/canadahelps-turnaround',
  },
  {
    title: 'Ensemble: 0 to 1 SaaS Incubation',
    metric: '$432K ARR',
    href: '/case-studies/ensemble',
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
          LexisNexis Risk Solutions had built HPCC Systems, a proprietary big data
          platform, for internal use. The platform powered large scale data processing
          and analytics across the company's risk, insurance, and identity verification
          products. It was fast, capable of handling petabyte scale workloads, and had been
          battle tested across years of internal production use.
        </p>
        <p className="mt-4">
          The platform sat inside a $6B+ data and analytics business owned by Reed Elsevier
          (now RELX). It was not a product. It was infrastructure. No external customers,
          no pricing, no go to market, no partner ecosystem.
        </p>
      </>
    ),
  },
  {
    heading: 'Problem',
    content: (
      <>
        <p>
          The market opportunity was clear. Enterprise demand for big data platforms was
          accelerating, and HPCC had technical advantages over competitors like Cloudera and
          Hortonworks in processing speed and total cost of ownership. But going from
          internal tool to external product is a fundamentally different problem than
          building features.
        </p>
        <p className="mt-4">
          HPCC had no commercial channels, no pricing model, no partner network, no
          developer community, and no market positioning. It was competing against
          platforms with five year ecosystem head starts, established reseller networks,
          and thousands of trained developers. Superior technology alone would not win.
        </p>
        <p className="mt-4">
          The investment required was significant, and every dollar had to be approved
          through a formal business case process that went up to the CEO in the U.S. and
          the Reed Elsevier executive chairman in the U.K.
        </p>
      </>
    ),
  },
  {
    heading: 'Decision',
    content: (
      <>
        <p>
          The strategy was to build the commercial infrastructure from scratch while
          applying lean commercialization loops to refine product market fit along the way.
          Rather than trying to compete on ecosystem maturity from day one, the approach
          focused on three bets: build channels, build community, and prove the economics
          one business case at a time.
        </p>
        <p className="mt-4">
          Each investment required a standalone business case with market sizing,
          competitive gap analysis, and channel economics. Over the course of the
          commercialization effort, I developed 12 business cases requesting a total of
          $38M in investment. Each one went through the U.S. CEO and the Reed Elsevier
          executive chairman for approval.
        </p>
        <p className="mt-4">
          This was not a single big bet. It was a sequence of funded experiments, each
          building on the results of the last.
        </p>
      </>
    ),
  },
  {
    heading: 'Execution',
    content: (
      <>
        <p className="text-sm text-secondary font-semibold">
          Channel Development
        </p>
        <p className="mt-3">
          Built the entire go to market from zero. Established a reseller network to
          reach enterprise buyers who would not evaluate an unknown platform directly.
          Signed delivery partnerships to provide implementation and support capacity
          that LexisNexis did not have in house. Launched HPCC on the AWS Marketplace
          to capture cloud native demand and reduce friction for trial and purchase.
        </p>
        <p className="mt-4">
          After an early competitive loss to Cloudera at TransUnion, where the buyer
          chose ecosystem maturity over a product that was 60% faster, I wrote a business
          case for a Partner and Ecosystem Development Manager. Hired in 2018, that role
          added 3 integration partners and 2 consulting partners, contributing $11M in
          revenue growth and a $6M pipeline for 2019.
        </p>

        <p className="mt-8 text-sm text-secondary font-semibold">
          Developer Community
        </p>
        <p className="mt-3">
          Open sourced HPCC Systems to drive adoption and build the developer base that
          enterprise buyers needed to see before committing. Grew the community to over
          25,000 developers. This addressed the ecosystem gap directly: buyers could now
          find trained talent and community support, which reduced their adoption risk.
        </p>

        <p className="mt-8 text-sm text-secondary font-semibold">
          International Expansion
        </p>
        <p className="mt-3">
          When 7 customers in Brazil completed free trials through the AWS Marketplace and
          wanted to become paying customers, there was no LexisNexis product team in
          Brazil and no established pricing. With less than 2 days to respond, I created
          a pricing model using PPP adjusted GDP conversion. Three customers signed
          immediately. Brazil later ran a full analysis; their price points were only 12%
          different from what I had set. Brazil hired a standalone product team reporting
          to me.
        </p>

        <p className="mt-8 text-sm text-secondary font-semibold">
          Investment Case Process
        </p>
        <p className="mt-3">
          Every major initiative required a formal business case: market sizing, competitive
          positioning, projected returns, and channel economics. Twelve business cases over
          the course of the program, requesting $38M in total investment. Each went through
          two levels of approval: the U.S. CEO and the Reed Elsevier (now RELX) executive
          chairman.
        </p>
      </>
    ),
  },
  {
    heading: 'Outcome',
    content: (
      <>
        <p>
          Over seven years at LexisNexis Risk Solutions, the commercialization effort
          transformed HPCC from internal infrastructure into a market facing business.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <p>
            <span className="text-sm text-secondary font-semibold">Revenue:</span>{' '}
            $50M+
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Enterprise clients:</span>{' '}
            100+
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Developer community:</span>{' '}
            25,000+
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Business cases approved:</span>{' '}
            12 ($38M total)
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Channels built:</span>{' '}
            Reseller, delivery, marketplace, community
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">International expansion:</span>{' '}
            Brazil product team established
          </p>
        </div>
        <p className="mt-6">
          The early TransUnion loss to Cloudera was a turning point. It proved that product
          superiority does not win without ecosystem maturity. Every channel and partnership
          investment that followed was a direct response to that lesson.
        </p>
      </>
    ),
  },
  {
    heading: 'Learning',
    content: (
      <p>
        Platform commercialization is not a product launch. It is a sustained sequence of
        funded experiments: build a channel, prove the economics, secure the next investment,
        repeat. Superior technology is necessary but not sufficient. Buyers evaluate the
        ecosystem around a platform (partners, community, trained talent, marketplace
        presence) as much as the platform itself. The leader's job is to build that ecosystem
        methodically while making the investment case one business case at a time.
      </p>
    ),
  },
]

export default function HpccPlatformPage() {
  return (
    <CaseStudyLayout
      title="HPCC Platform Commercialization"
      companyLine="LexisNexis Risk Solutions: Internal big data platform turned into a $50M+ market facing business."
      metrics={headlineMetrics}
      sections={sections}
      relatedStudies={relatedStudies}
      seo={{
        title: 'HPCC Platform Commercialization at LexisNexis',
        companyName: 'LexisNexis Risk Solutions',
        datePublished: '2026-10-15',
        dateModified: '2026-10-15',
        description:
          'How Aju Joseph John turned an internal big data platform at LexisNexis into a $50M+ market facing business. 100+ enterprise clients. 25,000+ developer community.',
        url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/hpcc-platform',
      }}
    />
  )
}
