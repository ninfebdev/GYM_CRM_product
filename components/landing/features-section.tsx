import { Reveal } from './reveal';
import { SectionLabel } from './section-label';

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: 'Member Management',
    description: 'Store member profiles, subscriptions, payments, and complete history in one place.',
  },
   {
    title: 'Personalized Gym Website',
    description: 'Give every gym its own website with gallery, testimonials, SEO, and contact pages.',
  },
  {
    title: 'Member Space',
    description:
      'Provide members with their own web app for memberships, invoices, diet plans, workout plans, and workout tools.',
  },
  {
    title: 'Trial & Lead Management',
    description: 'Track trial members, follow-ups, and convert leads into paying customers.',
  },
  {
    title: 'Renewal Alerts',
    description: 'Never miss renewals with expiry tracking and revenue recovery tools.',
  },
  {
    title: 'Revenue & Expense Tracking',
    description: 'Understand income, expenses, and profitability with powerful analytics.',
  },
  {
    title: 'Workout Plan Builder',
    description: 'Create reusable and branded workout plans for your members.',
  },
  {
    title: 'Diet Plan Builder',
    description: 'Build structured diet plans with calories, meals, and alternatives.',
  },
  {
    title: 'Trainer & Staff Management',
    description: 'Manage trainers, salaries, roles, and staff information.',
  },
  {
    title: 'Calendar & Scheduling',
    description: 'Organize classes, reminders, maintenance, and gym operations.',
  },
  {
    title: 'Membership Plans',
    description: 'Create flexible subscription plans with pricing and discounts.',
  },
  {
    title: 'PDF Templates',
    description: 'Generate branded invoices, workout plans, and diet plans.',
  }
];

function FeatureCard({ title, description }: Feature) {
  return (
    <div
      className="group flex h-full flex-col border-stone-200/80 bg-accent/90 p-6
      shadow-[0_1px_3px_rgb(28_25_23_/0.04)]
      transition-all duration-300
      hover:-translate-y-1 hover:border-stone-300/80
      hover:shadow-[0_24px_50px_-24px_rgb(28_25_23_/0.25)]
      [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]"
    >
      <h3 className="text-[1.05rem] font-semibold tracking-tight text-stone-900/90 font-geom">
        {title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-stone-500">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative w-full my-28 sm:my-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal>
            <SectionLabel>Features</SectionLabel>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 text-balance font-caprasimo text-[2rem] leading-[1.14] text-stone-900 sm:text-4xl md:text-[3rem]">
              Everything You Need To Run And Grow Your Gym
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
              Manage members, track revenue, deliver workout plans, and create a better experience
              for your members — all from one platform.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} className="h-full" delay={(i % 3) * 90}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
