import type { Metadata } from 'next'
import CaseStudyLayout from '../../../components/CaseStudyLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-git-main-aju-joseph-johns-projects.vercel.app'),
  title: 'Building a $150M Banking Intelligence Portfolio at Fiserv',
  description:
    'How Aju Joseph John led a ~$150M banking intelligence portfolio at Fiserv serving ~4,000 banks and credit unions. Built Abiliti from scratch to $24.9M ARR, led SBA PPP crisis response disbursing ~$5B, and drove API monetization across 500+ banks.',
  openGraph: {
    title: 'Building a $150M Banking Intelligence Portfolio at Fiserv | Aju Joseph John',
    description:
      'Led a ~$150M banking intelligence portfolio at Fiserv. Built Abiliti 0 to 1 ($24.9M ARR). Led SBA PPP crisis response (~$5B disbursed). Drove payment API monetization (500+ banks).',
    url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/fiserv-portfolio',
  },
  alternates: {
    canonical: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/fiserv-portfolio',
  },
}

const headlineMetrics = [
  { value: '~$150M', label: 'Portfolio' },
  { value: '$24.9M', label: 'Abiliti ARR' },
  { value: '$5B', label: 'SBA Loans Disbursed' },
  { value: '500+', label: 'Banks on APIs' },
]

const relatedStudies = [
  {
    title: 'B2B Payments Business Turnaround',
    metric: '$230M → $266M',
    href: '/case-studies/canadahelps-turnaround',
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
          Fiserv is one of the largest financial technology companies in the world,
          serving thousands of banks, credit unions, and financial institutions across
          the United States. After the First Data acquisition, the company operated
          five separate banking cores, each with its own data, product, and engineering
          stack.
        </p>
        <p className="mt-4">
          I joined as Senior Director of Product Management and General Manager of
          Bank Insights, a portfolio of data and analytics products serving ~4,000
          banks and credit unions. The portfolio generated ~$150M in annual revenue.
          My scope covered operational analytics across all five banking cores,
          payment API commercialization, and new product incubation.
        </p>
      </>
    ),
  },
  {
    heading: 'Problem',
    content: (
      <>
        <p>
          The portfolio was declining. NPS sat at 30. Annual churn was 7%. Revenue
          was dropping 10% year over year. 150 basic client requests sat unaddressed.
        </p>
        <p className="mt-4">
          The root cause was structural. The First Data acquisition restructuring
          eliminated 6 of 9 developers, a 70% reduction in engineering capacity.
          Previous resource requests had been denied because leadership saw them as
          product specific asks, not enablers of broader Fiserv growth. There was no
          prioritization process, no roadmap communication, and the largest clients
          dictated the backlog ad hoc.
        </p>
        <p className="mt-4">
          The mandate was clear: stabilize the base, rebuild the team, and find new
          growth. All at the same time.
        </p>
      </>
    ),
  },
  {
    heading: 'Rebuilding on Three Fronts',
    content: (
      <>
        <p className="text-sm text-secondary font-semibold">
          Abiliti: 0 to 1 SaaS Platform
        </p>
        <p className="mt-3">
          In my first two weeks, I listened to ~30 customers. No pitching, no
          solutions. Three pain points kept surfacing: no 360 degree customer view,
          no technical resources for reporting, and data siloed across warehouses.
          I assigned a summer intern to review 500+ backlog items. 70% fell into
          those three buckets.
        </p>
        <p className="mt-4">
          I identified three personas, mapped pain points per persona, and worked
          with UX to build clickable prototypes. Tested with 20 clients over three
          weeks. Feedback was strong. Built a product led growth strategy: released
          BankView FREE to all 3,500 banks to drive engagement. 57% of banks
          expressed interest in paid features. Created a $160M pipeline target and
          a $23M business case for scaling.
        </p>
        <p className="mt-4">
          Branded the suite Abiliti with three tiers: Bronze (free), Silver
          ($6,500/month), and Gold ($10,000/month). The critical design decision was
          the success metric. MAU was the obvious choice but wrong for PLG. A user
          who logs in once and bounces counts the same as a power user. I designed a
          behavioral KPI: stickiness (DAU/WAU), defined as logging in 2+ days out of
          5 per week and running 1+ report per session. Target threshold: 50%.
        </p>
        <p className="mt-4">
          That metric reshaped the entire business. Clients at 70 to 80% stickiness
          converted to paid in 3 to 4 weeks almost automatically. Clients below the
          threshold had long, unpredictable sales cycles. We restructured the upsell
          motion around this insight, focusing sales effort exclusively on clients
          above 50% stickiness.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Results:</span>{' '}
          Free tier hit 73% engagement (target was 50%), NPS 60. Paid tier: 22 to
          28% conversion, NPS 50, churn ~2%, stickiness 85%. ARR reached $11.2M by
          end of 2020 and $24.9M by end of 2021. Projected $100M+ over three years.
        </p>

        <p className="mt-8 text-sm text-secondary font-semibold">
          SBA PPP Crisis Response
        </p>
        <p className="mt-3">
          Covid hit. The U.S. government announced the Paycheck Protection Program,
          ~$600B in emergency loans for 30M+ small businesses. SBA announced around
          March 15, 2020, with loans to be disbursed by end of April. Traditional
          loans take 45 to 60 days.
        </p>
        <p className="mt-4">
          As GM of Bank Insights, I worked across all five banking cores and knew
          every product and dev leader. I went directly to my EVP and proposed
          leading the cross company coordination. Before the first meeting of the
          ~23 person task force, I reviewed the 90 page SBA guidance document and
          created a high level four stage flow. I took personal ownership of the
          Application Process UI and project management for the full effort.
        </p>
        <p className="mt-4">
          Built the application UI from scratch: reviewed SBA guidance, sketched the
          journey, mocked up the UI, ran UX wireframes, tested with 3 customers,
          got a dev MVP in 2 days, stress tested, beta tested, and rolled out to
          production by April 6. Less than three weeks from start to launch. SBA
          changed rules almost daily. 16 hour days for ~2 months including weekends.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Results:</span>{' '}
          ~600 lenders sourced ~130K loans worth ~$5B. Fiserv earned ~$84M in one
          time revenue. Near 100% renewal rate for the 600 banks over the following
          12 months.
        </p>

        <p className="mt-8 text-sm text-secondary font-semibold">
          Apple Pay and API Monetization
        </p>
        <p className="mt-3">
          Led GTM for payment API commercialization through Developer Studio,
          Fiserv's open banking platform. Built the business case for bank issued
          card transaction processing, including Apple Pay integration. The work
          involved positioning the product, securing early adopters, and projecting
          revenue.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Results:</span>{' '}
          500+ banks onboarded. ~$10.5M annual processing revenue at ~150 bps on
          $700M volume. $10M in projected three year revenue.
        </p>
      </>
    ),
  },
  {
    heading: 'The Hard Call',
    content: (
      <>
        <p>
          The FDIC launched a competition to replace quarterly bank Call Reports with
          more frequent submissions for supervising 6,000+ community banks. The
          contract was worth ~$250M over five years. Fiserv assembled a 12 person
          task force. I was the product lead and de facto team lead. 35 initial
          entrants, including AWS, FIS, S&P, and Palantir.
        </p>
        <p className="mt-4">
          We advanced to the semifinal (top 9 of 35). Before building a working
          prototype for the next round, I insisted on testing the concept with actual
          end users. Showed clickable prototypes to 12 banks. The feedback was
          devastating: banks were not hearing about this from FDIC directly, did not
          want to add monthly reporting on top of quarterly, saw no clear benefit,
          and had invested millions in existing processes.
        </p>
        <p className="mt-4">
          I laid out the case to the team: without customer willingness, adoption
          would fail even if we won. Only 3 weeks remained for a working prototype.
          If we reached finals, the 6 month proof of concept would cost ~$500K.
          Sales disagreed and wanted to proceed. UX, dev, and professional services
          agreed with me.
        </p>
        <p className="mt-4">
          I recommended we withdraw. We did.
        </p>
        <p className="mt-4">
          FDIC selected 4 finalists, Palantir among them. Then FDIC cancelled the
          entire program in early 2022 after the banking industry confirmed near
          100% unwillingness to participate. That was exactly the signal we had
          already captured. Fiserv saved ~$500K and 6 months of wasted effort.
          Palantir, the finalist, later sought Fiserv's help for core banking data.
        </p>
      </>
    ),
  },
  {
    heading: 'Outcome',
    content: (
      <>
        <p>
          Over two years, the portfolio reversed its decline and grew 10%.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <p>
            <span className="text-sm text-secondary font-semibold">Abiliti ARR:</span>{' '}
            $0 to $24.9M in 2 years
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">SBA PPP:</span>{' '}
            ~$5B disbursed, $84M revenue
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">API monetization:</span>{' '}
            500+ banks, ~$10.5M annual revenue
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">FDIC withdrawal:</span>{' '}
            ~$500K saved, decision validated
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">NPS:</span>{' '}
            30 to 40 (first year)
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Churn:</span>{' '}
            7% to 4% (first year)
          </p>
        </div>
        <p className="mt-6">
          The team was rebuilt from 3 remaining developers back to strength.
          Resource requests that had been denied for years were approved after
          framing them as enterprise wide enablers: $20M in retained revenue at
          risk, $100M in Abiliti revenue dependent on fixes, $300M in core banking
          deals at risk.
        </p>
      </>
    ),
  },
  {
    heading: 'Learning',
    content: (
      <p>
        Stabilizing a declining portfolio and building new products at the same time
        requires the same discipline: listen to customers first, measure behavior
        not vanity, and have the courage to walk away from revenue that will not
        materialize.
      </p>
    ),
  },
]

export default function FiservPortfolioPage() {
  return (
    <CaseStudyLayout
      title="Building a $150M Banking Intelligence Portfolio"
      companyLine="Fiserv: Global financial technology leader. Senior Director, Product Management. ~$150M banking intelligence portfolio serving ~4,000 banks and credit unions."
      metrics={headlineMetrics}
      sections={sections}
      relatedStudies={relatedStudies}
      seo={{
        title: 'Building a $150M Banking Intelligence Portfolio at Fiserv',
        companyName: 'Fiserv',
        datePublished: '2026-10-16',
        dateModified: '2026-10-16',
        description:
          'How Aju Joseph John led a ~$150M banking intelligence portfolio at Fiserv serving ~4,000 banks and credit unions. Built Abiliti from scratch to $24.9M ARR. Led SBA PPP crisis response disbursing ~$5B. Drove API monetization across 500+ banks.',
        url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/fiserv-portfolio',
      }}
    />
  )
}
