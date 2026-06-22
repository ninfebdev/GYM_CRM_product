import { ClipCard } from './clip-card';
import { ArrowRight } from './icons';
import { Reveal } from './reveal';
import { SectionLabel } from './section-label';

function Field({
  id,
  label,
  type,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 ml-4 block text-sm font-medium text-stone-700">
        {label}
      </label>
      <div className="rounded-full bg-stone-300 p-[1.5px] transition-colors [--notch:12px] focus-within:bg-amber-500">
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="rounded-full w-full bg-white px-4 py-3 text-[15px] text-stone-900 outline-none placeholder:text-stone-400"
        />
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full my-28 sm:my-40"
    >
      <div className="mx-auto max-w-150 px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <SectionLabel>Contact Us</SectionLabel>
          </Reveal>
          <Reveal delay={80} className="mt-5">
            <h2
              id="contact-heading"
              className="text-balance font-caprasimo text-[2rem] leading-[1.14] text-stone-900 sm:text-4xl md:text-[2.8rem]"
            >
              Let&apos;s Talk About Your Gym
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
              Request a demo, start your free trial, or reach gym software support. Contact the GYM
              CRM team and we&apos;ll get in touch to help you set up your gym.
            </p>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={120} className="mt-12 sm:mt-14">
          <form aria-label="Contact GYM CRM — request a demo or support">
            <ClipCard border="bg-stone-300" className="bg-white p-7 text-left sm:p-9">
              <div className='flex flex-col gap-4'>
                <Field
                  id="name"
                  label="Full Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@yourgym.com"
                />
                <Field
                  id="mobile"
                  label="Mobile Number"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                />
              </div>

              <button
                type="button"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_34px_-10px_rgb(28_25_23_/0.55)] transition-all hover:bg-stone-800"
              >
                Send Message
                <ArrowRight className="text-[16px] transition-transform group-hover:translate-x-0.5" />
              </button>
            </ClipCard>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
