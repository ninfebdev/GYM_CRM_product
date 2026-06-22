import { ArrowRight, Play } from './icons';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-36 text-center md:pt-44"
    >
      {/* Soft glow behind the headline for readability over the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-28 -z-10 h-105 w-190 max-w-[92vw] -translate-x-1/2 rounded-full bg-white/45 blur-3xl"
      />

      {/* Title — Caprasimo. The single H1 for the page. */}
      <h1
        id="hero-heading"
        className="ld-fade-up text-balance font-caprasimo text-[2.4rem] leading-[1.1] tracking-normal text-stone-900 sm:text-5xl md:text-[3.85rem]"
        style={{ animationDelay: '0.05s' }}
      >
        Run Your Entire Gym
        <br className="hidden sm:block" /> From One Platform
      </h1>

      <p
        className="max-w-[750] leading-[1.04] ld-fade-up mt-3 bg-linear-to-r from-amber-600 via-amber-500 to-orange-500 bg-clip-text font-geom text-2xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl"
        style={{ animationDelay: '0.12s' }}
      >
        Members, Diet, Workout, Analytics <span className='text-black'>with</span> Your Personal GYM Website.
      </p>

      {/* Description — naturally seeds the primary keywords */}
      <p
        className="ld-fade-up mt-6 max-w-2xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg"
        style={{ animationDelay: '0.2s' }}
      >
        GYM CRM is all-in-one gym management software to manage members, recover renewals, track
        revenue, and build diet and workout plans — plus your own gym website. The complete fitness
        business software for modern gyms, studios, and trainers.
      </p>

      {/* CTAs */}
      <div
        className="ld-fade-up mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        style={{ animationDelay: '0.28s' }}
      >
        <a
          href="#pricing"
          aria-label="Start your free 1-month GYM CRM trial"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_34px_-10px_rgb(28_25_23_/0.55)] transition-all hover:bg-stone-800 sm:w-auto"
        >
          Start Free Trial
          <ArrowRight className="text-[16px] transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#contact"
          aria-label="Book a demo of the GYM CRM platform"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-stone-700 shadow-sm backdrop-blur transition-all hover:border-stone-300 hover:bg-white sm:w-auto"
        >
          <Play className="text-[12px] text-stone-500" />
          Book a Demo
        </a>
      </div>

      {/* Trust line — natural home for "gym CRM platform" */}
      <p
        className="ld-fade-up mt-5 text-sm text-stone-400 font-geom"
        style={{ animationDelay: '0.34s' }}
      >
        The gym CRM platform trusted to run gyms — free for 1 month, no card
        required.
      </p>
    </section>
  );
}
