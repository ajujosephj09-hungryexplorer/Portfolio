import type { Metadata } from 'next'
import CaseStudyLayout from '../../../components/CaseStudyLayout'

export const metadata: Metadata = {
  title: 'Ensemble: 0 to 1 SaaS Incubation at CanadaHelps',
  description:
    'How Aju Joseph John incubated a new SaaS product at CanadaHelps despite false negatives in validation, grew it to $432K ARR and 200+ customers, and navigated a three beat failure arc in trial strategy, sales recovery, and unit economics.',
  openGraph: {
    title: 'Ensemble: 0 to 1 SaaS Incubation at CanadaHelps | Aju Joseph John',
    description:
      'Incubated a new SaaS product at CanadaHelps despite $0 willingness to pay in research. Grew to $432K ARR, 200+ customers, 86% PLG. Navigated a three beat failure arc in trial, sales, and unit economics.',
    url: 'https://ajujosephjohn.vercel.app/case-studies/ensemble',
  },
  alternates: {
    canonical: 'https://ajujosephjohn.vercel.app/case-studies/ensemble',
  },
}

const headlineMetrics = [
  { value: '$432K', label: 'ARR' },
  { value: '200+', label: 'Customers' },
  { value: '86%', label: 'PLG Conversion' },
  { value: '3:1', label: 'LTV:CAC Restored' },
]

const relatedStudies = [
  {
    title: 'CanadaHelps Turnaround',
    metric: '67% → 83% Retention',
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
          CanadaHelps: Canada's largest online giving and payments platform. $260M+
          processing volume. $27M+ P&L. Approximately 14,000 clients across three
          fundraising products, plus a legacy CRM called DMS.
        </p>
        <p className="mt-4">
          DMS was bleeding money. For every $100 earned, the company lost $115. LTV:CAC
          was below 1. The product sat on a poorly maintained open source CRM with 200+
          features; clients used roughly 10. I made the call to sunset DMS over two years,
          shifting it to maintenance only. The entire DMS sales team was eliminated. Customer
          success went from five people to one.
        </p>
        <p className="mt-4">
          That decision freed headcount, budget, and bandwidth. The question became: what
          do you build with the space you just created?
        </p>
      </>
    ),
  },
  {
    heading: 'Problem',
    content: (
      <>
        <p>
          After 1.5 years leading the B2B group at CanadaHelps ($260M+ processing volume,
          $27M+ P&L), I kept hearing the same signal from clients. Nonprofits needed help
          across all aspects of operations, not just fundraising. The barrier was a lack of
          skills, resources, and tools. Consistent feedback pointed to integrated technology
          solutions outside the core fundraising product.
        </p>
        <p className="mt-4">
          The opportunity was a 0 to 1 SaaS product, a lightweight CRM for nonprofits who
          could not afford Salesforce or Blackbaud. But every validation signal came back
          negative.
        </p>
      </>
    ),
  },
  {
    heading: 'Decision',
    content: (
      <>
        <p>
          A small team built "CRM Lite" in under a month. Then we tested demand.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Signal 1:</span>{' '}
          A large webinar. Average willingness to pay: $0.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Signal 2:</span>{' '}
          Six clients invited to a beta program. All six were no shows.
        </p>
        <p className="mt-4">
          Two rounds of research, both saying the same thing: nobody wants this. The
          conventional read is to kill the idea. I read it differently. Webinar surveys and
          beta invitations test stated preference, not revealed preference. People say they
          will not pay for something they have never used. The only way to test real demand
          was to put it in front of a salesperson and see if anyone would actually buy.
        </p>
        <p className="mt-4">
          I assigned 25% of the sales team to sell Ensemble at $19.99 per month. If the
          first month produced zero, we would stop.
        </p>
      </>
    ),
  },
  {
    heading: 'Execution: Growth',
    content: (
      <>
        <p>
          Ten deals closed in the first month. Real demand, confirmed by actual revenue,
          not surveys.
        </p>
        <p className="mt-4">
          I built a dedicated team and kept pushing. By 50 customers, two bottlenecks
          emerged: the product only captured offline donations (clients wanted online and
          offline in one place), and manual onboarding could not scale. The PM wanted to
          prioritize the online/offline merge, a three month build. I coached her through
          a prioritization framework: revenue potential, strategic fit, ease of
          implementation, and customer value. Automated onboarding via Stripe was a one
          month build that unlocked scale. The merge came after.
        </p>
        <p className="mt-4">
          By Q1, Ensemble hit $100K in quarterly revenue. All sales metrics were healthy:
          $774K pipeline, 7.74x coverage, 12.91% win rate, 18 day sales cycle, 25% PLG
          trial conversion. The business was working.
        </p>
        <p className="mt-4">
          Then I broke it.
        </p>
      </>
    ),
  },
  {
    heading: 'Beat 1: The Trial Extension Mistake',
    content: (
      <>
        <p>
          Marketing and product wanted to push PLG conversion from 25% to 35%. Non
          converting trial users said they needed more time. I proposed extending the trial
          from two weeks to four weeks. Sales pushed back; they argued buying is impulsive.
          I overruled them and ran a three month pilot.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">What happened:</span>{' '}
          PLG conversion dropped from 25% to 10%. Revenue fell to $60K, 40% below the
          $100K target. Win rate collapsed from 12.91% to 7.75%. Sales cycles stretched
          past 30 days. Customers were achieving their goals during the trial, which
          removed all urgency to buy.
        </p>
        <p className="mt-4">
          The deceptive part: headline pipeline metrics still looked healthy. $774K total
          pipeline, $300K weighted, coverage ratios unchanged. The conversion engine was
          broken underneath numbers that said everything was fine.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">What I learned:</span>{' '}
          Buying is a function of trigger, motivation, and ability. More time does not
          create more motivation; it removes urgency. Healthy pipeline can mask broken
          unit economics. Sales was right. I was wrong.
        </p>
      </>
    ),
  },
  {
    heading: 'Beat 2: Sales Recovery',
    content: (
      <>
        <p>
          Q2 ended at $60K against a $100K target. I needed Q3 to hit $140K: the
          quarterly target plus the $40K gap from Q2.
        </p>
        <p className="mt-4">
          I coached the sales manager on four actions. First, flip the trial back to two
          weeks immediately. Second, for deals already on the four week trial, offer up to
          20% discount if they signed within two weeks; new signups got up to 10% for a
          week one commitment. Third, clean 20%+ of stale pipeline to closed lost. No more
          vanity numbers. Fourth, replenish with better qualified leads through targeted
          webinars and conference pitches.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">Result:</span>{' '}
          Q3 forecast hit $140K, 140% of target. Weighted pipeline climbed from $300K to
          $420K. Win rate recovered to 20%. Pipeline quality improved: fewer but better
          opportunities.
        </p>
        <p className="mt-4">
          The recovery worked. But the discounts I used to fix the conversion problem were
          about to create a new one.
        </p>
      </>
    ),
  },
  {
    heading: 'Beat 3: The Unit Economics Collapse',
    content: (
      <>
        <p>
          Before the trial extension, LTV:CAC was 4:1. Healthy. After the Q3 recovery
          discounts, ARPU trended down roughly 7%. Retention settled at about 80%. The
          combined effect: LTV:CAC crashed to 1.3:1. CAC payback stretched to 46 months.
          The business was losing money on every acquired client.
        </p>
        <p className="mt-4">
          Each fix had created the next problem. Extending the trial killed conversion.
          Discounting fixed conversion but destroyed unit economics. The system was
          connected; I had been treating each metric in isolation.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">The fix required
          four coordinated moves:</span>
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">1. Improve product
          value first.</span>{' '}
          Added a Reporting feature and set a new floor price of $75 per month. You cannot
          raise prices without adding value; customers will leave.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">2. Raise renewal
          prices.</span>{' '}
          A 10% price increase on all renewals, justified by the new Reporting capability.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">3. Engagement and
          retention plays.</span>{' '}
          30 day impact summaries, usage tips, 90 day renewal recaps, at risk save plays,
          onboarding checklists. Push retention from 80% toward 85%.
        </p>
        <p className="mt-4">
          <span className="text-sm text-secondary font-semibold">4. PLG funnel
          investment.</span>{' '}
          Target 25 deals per month to bring down CAC through volume.
        </p>
        <p className="mt-4">
          With the price increase and new features at 80% retention, ARPU was expected to
          reach roughly $67, pushing LTV:CAC to 2.13 and payback to 28 months. With the
          engagement push driving retention toward 85%, LTV:CAC climbed toward 3:1.
        </p>
      </>
    ),
  },
  {
    heading: 'Outcome',
    content: (
      <>
        <p>
          Ensemble grew from zero to a functioning SaaS business inside CanadaHelps
          ($260M+ processing volume, $27M+ P&L).
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <p>
            <span className="text-sm text-secondary font-semibold">ARR:</span>{' '}
            $432K
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Customers:</span>{' '}
            200+
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">PLG conversion:</span>{' '}
            86%
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">LTV:CAC:</span>{' '}
            Restored toward 3:1
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">B2B churn:</span>{' '}
            Dropped roughly 40% as CRM clients stuck around and trialed other products
          </p>
          <p>
            <span className="text-sm text-secondary font-semibold">Reporting feature:</span>{' '}
            $324K ARR, $125 per month price mark achieved
          </p>
        </div>
        <p className="mt-6">
          The DMS sunset that freed resources for Ensemble also contributed to the broader
          B2B portfolio growing from roughly $4.5M to roughly $6M over the next two years.
        </p>
      </>
    ),
  },
  {
    heading: 'Learning',
    content: (
      <>
        <p>
          The failure arc taught me that unit economics are a system. You cannot fix ARPU
          without fixing retention. You cannot raise prices without adding value first.
          Pipeline health can mask broken conversion, and conversion fixes can break the
          economics underneath.
        </p>
        <p className="mt-4">
          Each decision I made was locally rational and globally wrong. The trial extension
          made sense if you only looked at user feedback. The discounts made sense if you
          only looked at the revenue gap. The unit economics collapse was the bill for
          treating connected problems as independent variables.
        </p>
        <p className="mt-4">
          A hiring manager reading this should see three things: the moment I was wrong
          (overruling sales on the trial), the speed of correction (one quarter to reverse
          and recover), and the systems fix (four coordinated moves instead of another
          point solution). The pattern I take from this: when your fix creates the next
          problem, stop fixing in isolation and redesign the system.
        </p>
      </>
    ),
  },
]

export default function EnsemblePage() {
  return (
    <CaseStudyLayout
      title="Ensemble: 0 to 1 SaaS Incubation"
      companyLine="CanadaHelps: Canada's largest online giving and payments platform. $260M+ processing volume. $27M+ P&L."
      metrics={headlineMetrics}
      sections={sections}
      relatedStudies={relatedStudies}
      seo={{
        title: 'Ensemble: 0 to 1 SaaS Incubation at CanadaHelps',
        companyName: 'CanadaHelps',
        datePublished: '2026-10-15',
        dateModified: '2026-10-15',
        description:
          'How Aju Joseph John incubated a new SaaS product at CanadaHelps despite false negatives in validation, grew it to $432K ARR and 200+ customers, and navigated a three beat failure arc in trial strategy, sales recovery, and unit economics.',
        url: 'https://ajujosephjohn.vercel.app/case-studies/ensemble',
      }}
    />
  )
}
