import Link from 'next/link';
import { ClipCard } from './clip-card';
import { ArrowRight, Barbell, Play } from './icons';
import { Reveal } from './reveal';
import { SectionLabel } from './section-label';

type FooterLink = { label: string; href: string };

const productLinks: FooterLink[] = [
  { label: 'Dashboard', href: '/#product' },
  { label: 'Member Space', href: '/#product' },
  { label: 'Personalized Website', href: '/#product' },
  { label: 'Pricing', href: '/#pricing' },
];

const resourceLinks: FooterLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Support', href: '/#contact' },
];

const getStartedLinks: FooterLink[] = [
  { label: 'Login', href: '#' },
  { label: 'Start Free Trial', href: '/#pricing' },
  { label: 'Book a Demo', href: '/#contact' },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold font-geom tracking-tight text-stone-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Call to action */}
        <div className="my-20 sm:my-28">
          <Reveal>
            <ClipCard
              border="bg-amber-200"
              className="relative overflow-hidden bg-linear-to-b from-amber-50/80 to-white px-6 py-14 text-center sm:px-12 sm:py-20"
            >
              {/* Soft glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-90 w-170 max-w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.88_0.13_72/0.35),transparent)] blur-3xl"
              />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                <SectionLabel>Ready to Grow?</SectionLabel>
                <h2 className="mt-5 text-balance font-caprasimo text-[2rem] leading-[1.1] text-stone-900 sm:text-5xl md:text-[3.2rem]">
                  Run Your Entire Gym From One Platform
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
                  Manage members, recover renewals, track revenue, create workout plans, and give
                  your members a premium experience — all from one place.
                </p>
                <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/#pricing"
                    aria-label="Start your free GYM CRM trial"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_34px_-10px_rgb(28_25_23_/0.55)] transition-all hover:bg-stone-800 sm:w-auto"
                  >
                    Start Free Trial
                    <ArrowRight className="text-[16px] transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                  <Link
                    href="/#contact"
                    aria-label="Book a demo of GYM CRM"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-stone-700 shadow-sm backdrop-blur transition-all hover:border-stone-300 hover:bg-white sm:w-auto"
                  >
                    <Play className="text-[12px] text-stone-500" aria-hidden />
                    Book a Demo
                  </Link>
                </div>
              </div>
            </ClipCard>
          </Reveal>
        </div>

        {/* Footer content — four columns */}
        <div className="grid grid-cols-2 gap-10 pb-16 md:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="GYM CRM home" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-none bg-stone-900 text-amber-400 shadow-sm">
                <Barbell className="text-[18px]" aria-hidden />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-stone-900">
                GYM CRM
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500 font-geom">
              The complete gym management software for running modern gyms — members, billing,
              analytics, and your gym website in one platform.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Get Started" links={getStartedLinks} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-stone-200/70 py-7 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GYM CRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
