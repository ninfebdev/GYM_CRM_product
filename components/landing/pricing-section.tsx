import { ClipCard } from './clip-card';
import { ArrowRight, Check, Close, Play } from './icons';
import { Reveal } from './reveal';
import { SectionLabel } from './section-label';

const traditional = [
  'Spreadsheets and notebooks',
  'Separate billing tools',
  'No renewal tracking',
  'Paper diet and workout plans',
  'No member portal',
  'No website',
  'No business analytics',
  'Manual follow-ups',
  'Multiple subscriptions and software',
];

const platform = [
  'Business Dashboard',
  'Personalized Gym Website',
  'Dedicated Member Web App',
  'Member Management',
  'Trial & Renewal Tracking',
  'Revenue & Expense Analytics',
  'Workout & Diet Plan Builders',
  'Trainer & Staff Management',
  'Calendar & Scheduling',
  'Branded PDF Templates',
  'Exercise Library & Workout Simulator',
  'Support & Feature Requests',
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative w-full my-28 sm:my-40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal>
            <SectionLabel>Pricing</SectionLabel>
          </Reveal>
          <Reveal delay={80} className="mt-5">
            <h2
              id="pricing-heading"
              className="text-balance font-caprasimo text-[2rem] leading-[1.14] text-stone-900 sm:text-4xl md:text-[3rem]"
            >
              One Price. Everything Included.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
              Affordable gym management software with no hidden charges, feature limits, or confusing
              plans. Gym software in India for one flat yearly price — your personalized gym website
              and member app included.
            </p>
          </Reveal>
        </div>

        {/* Pricing card */}
        <Reveal delay={80} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <ClipCard border="bg-stone-300" className="bg-white p-8 text-center sm:p-12">
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-merriweather font-bold text-5xl tracking-tight text-stone-900 sm:text-6xl">
                ₹12,000 / <span className="text-base font-geom tracking-normal text-stone-500">Per Year</span>
              </span>
            </div>

            <p className="mt-7 text-pretty leading-relaxed text-stone-600">
              Start with a free 1-month trial.
              <br />
              No credit card required.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                aria-label="Start your free 1-month GYM CRM trial"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_34px_-10px_rgb(28_25_23_/0.55)] transition-all hover:bg-stone-800 sm:w-auto"
              >
                Start Free Trial
                <ArrowRight className="text-[16px] transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                aria-label="Book a demo of GYM CRM"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-stone-700 shadow-sm backdrop-blur transition-all hover:border-stone-300 hover:bg-white sm:w-auto"
              >
                <Play className="text-[12px] text-stone-500" />
                Book a Demo
              </a>
            </div>
          </ClipCard>
        </Reveal>

        {/* Comparison */}
        <div className="mt-12 grid items-stretch gap-5 sm:mt-14 lg:grid-cols-2">
          {/* Traditional */}
          <Reveal className="h-full">
            <ClipCard border="bg-stone-300" outerClassName="h-full" className="flex h-full flex-col bg-stone-50 p-7 sm:p-8">
              <h3 className="text-lg font-bold font-geom tracking-[-0.015em] text-stone-900">
                Traditional Gym Management
              </h3>
              <ul className="mt-6 space-y-3.5">
                {traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-stone-400">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 ring-1 ring-red-100">
                      <Close className="text-[10px]" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ClipCard>
          </Reveal>

          {/* GYM CRM */}
          <Reveal delay={90} className="h-full">
            <ClipCard border="bg-amber-300" outerClassName="h-full" className="flex h-full flex-col bg-white p-7 sm:p-8">
              <h3 className="text-lg font-bold font-geom tracking-[-0.015em] text-stone-900">
                GYM CRM Platform
              </h3>
              <ul className="mt-6 space-y-3.5">
                {platform.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] font-medium text-stone-700"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <Check className="text-[11px]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ClipCard>
          </Reveal>
        </div>

        {/* Trust message */}
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
              What&apos;s included?
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 font-caprasimo text-4xl text-stone-900 sm:text-5xl">Everything.</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 space-y-1 text-base leading-relaxed text-stone-500 sm:text-lg">
              <p>No feature restrictions.</p>
              <p>No add-ons.</p>
              <p>No hidden fees.</p>
            </div>
          </Reveal>
          <Reveal delay={230}>
            <p className="mt-6 text-pretty text-base font-medium text-stone-700 sm:text-lg">
              Just one platform for running and growing your gym.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
