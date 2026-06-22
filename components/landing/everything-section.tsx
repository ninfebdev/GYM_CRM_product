import Image from 'next/image';
import { Check } from './icons';
import { Reveal } from './reveal';
import { SectionLabel } from './section-label';

/* ---------------------------------------------------------------- *
 * Shared building blocks
 * ---------------------------------------------------------------- */

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-x-7 gap-y-3.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-stone-700">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 ring-1 ring-amber-200/70">
            <Check className="text-[11px]" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Clean, floating rounded video frame. */
function VideoFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="ld-float overflow-hidden rounded-none bg-stone-100 shadow-[0_50px_120px_-50px_rgb(28_25_23_/0.45)] ring-1 ring-stone-900/6">
      <video
        className="block aspect-1820/1138 w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

/** Mobile-app screen capture — square corners, lifted for depth. */
function MemberShot({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-none shadow-[0_40px_90px_-30px_rgb(28_25_23_/0.45)] ring-1 ring-stone-900/6 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={852}
        height={1448}
        sizes="(max-width: 768px) 45vw, 280px"
        className="h-auto w-full"
      />
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Section
 * ---------------------------------------------------------------- */

const dashboardFeatures = [
  'Member Management',
  'Revenue & Expense Analytics',
  'Trial & Renewal Tracking',
  'Workout & Diet Plan Builders',
  'Trainer & Staff Management',
];

const websiteFeatures = [
  'Custom Gym Website',
  'Gallery & Testimonials',
  'SEO Friendly Pages',
  'Lead Generation',
  'Mobile Responsive',
];

const memberFeatures = [
  'Membership Tracking',
  'Invoice PDFs',
  'Diet Plans',
  'Workout Plans',
  'Exercise Library',
  'Workout Simulator',
];

export function EverythingSection() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="relative w-full mb-28 sm:mb-40"
    >
      {/* Product reveal — dark + light dashboard mockups.
          Side by side on desktop, stacked on small screens. */}
      <div className="mx-auto mt-16 max-w-300 px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <Image
            src="/IMGs/gym-analytics-dashboard-mock.webp"
            alt="GYM CRM gym management dashboard in dark mode showing member analytics, revenue tracking and renewals"
            width={1080}
            height={1080}
            priority
            sizes="(max-width: 768px) 90vw, 48vw"
            className="h-auto w-full max-w-md md:max-w-none md:flex-1"
          />
          <Image
            src="/IMGs/gym-crm-dashboard-mock.webp"
            alt="GYM CRM gym management dashboard in light mode showing the same revenue and member analytics overview"
            width={1080}
            height={1080}
            sizes="(max-width: 768px) 90vw, 48vw"
            className="h-auto w-full max-w-md md:max-w-none md:flex-1"
          />
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto mt-24 flex max-w-3xl flex-col items-center px-4 text-center sm:mt-36">
        <Reveal>
          <SectionLabel>Everything Included</SectionLabel>
        </Reveal>
        <Reveal delay={80} className="mt-5">
          <h2
            id="product-heading"
            className="text-balance font-caprasimo text-[2.1rem] leading-[1.12] text-stone-900 sm:text-5xl md:text-[3.4rem]"
          >
            Everything Your Gym Needs —{' '}
            <span className="bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Built Together
            </span>
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
            One dashboard to run your gym, a personal website for your business, and a dedicated app
            for every member — all-in-one gym management software, connected and working together as
            one.
          </p>
        </Reveal>
      </div>

      {/* ================= BLOCK 1 — Owner Dashboard ================= */}
      <article className="mt-28 sm:mt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <Reveal>
              <SectionLabel>GYM CRM Dashboard</SectionLabel>
            </Reveal>
            <Reveal delay={70} className="mt-4">
              <h3 className="text-balance font-caprasimo text-[1.9rem] leading-[1.15] text-stone-900 sm:text-4xl md:text-[2.7rem]">
                Manage Your Entire Business From One Dashboard
              </h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
                Track members, payments, renewals, expenses, trainers, and workout plans from a
                single gym dashboard. Built-in gym analytics software turns revenue, expenses, and
                member growth into clear numbers — replacing spreadsheets and disconnected tools with
                one operating system for your gym.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <FeatureList items={dashboardFeatures} />
            </Reveal>
          </div>

          {/* Right — dashboard video */}
          <Reveal delay={120}>
            <VideoFrame
              src="/VIDs/gym-dashboard-software-demo.mp4"
              label="GYM CRM gym dashboard software walkthrough showing member and revenue analytics"
            />
          </Reveal>
        </div>
      </article>

      {/* ================= BLOCK 2 — Personalized Gym Website ================= */}
      <article className="mt-28 sm:mt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={120} className='order-2 lg:order-1'>
            <VideoFrame
              src="/VIDs/gym-website-builder-demo.mp4"
              label="GYM CRM gym website builder demo showing a personalized fitness website"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel>Included For Every Gym</SectionLabel>
            </Reveal>
            <Reveal delay={70} className="mt-4">
              <h3 className="text-balance font-caprasimo text-[1.9rem] leading-[1.15] text-stone-900 sm:text-4xl md:text-[2.7rem]">
                Give Your Gym Its Own Website
              </h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
                Every gym automatically gets a beautiful, personalized website through the built-in
                gym website builder. Showcase facilities, gallery, testimonials, working hours, and
                contact details, and capture new leads from your own gym marketing website — no
                developer required.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <FeatureList items={websiteFeatures} />
            </Reveal>
          </div>
        </div>
      </article>

      {/* ================= BLOCK 3 — Member Experience ================= */}
      <article className="mt-28 sm:mt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="order-1">
            <Reveal>
              <SectionLabel>Member Space</SectionLabel>
            </Reveal>
            <Reveal delay={70} className="mt-4">
              <h3 className="text-balance font-caprasimo text-[1.9rem] leading-[1.15] text-stone-900 sm:text-4xl md:text-[2.7rem]">
                Give Members A Premium Experience
              </h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
                Members get their own dedicated gym member app to access memberships, invoices, diet
                plans, and workout plans anytime. It doubles as a workout plan app and progress
                tracker, while connected member management software keeps everything in sync with
                your dashboard.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <FeatureList items={memberFeatures} />
            </Reveal>
          </div>

          <Reveal className="order-2">
            <div className="relative flex items-center justify-center py-6">
              <div className="ld-float flex w-full max-w-110 items-center justify-center">
                <MemberShot
                  src="/IMGs/gym-member-app.webp"
                  alt="GYM CRM member app home screen showing membership status and workout details"
                  className="w-[52%] -rotate-6"
                />
                <MemberShot
                  src="/IMGs/gym-diet-plans.webp"
                  alt="GYM CRM member app diet plan screen with meals, calories and alternatives"
                  className="z-10 -ml-10 mt-12 w-[52%] rotate-6"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </article>
    </section>
  );
}
