'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Barbell } from './icons';

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="ld-fade-in fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border py-2 pl-3 pr-2 transition-all duration-300 ${
          scrolled
            ? 'border-stone-200/80 bg-white/80 shadow-[0_10px_34px_rgb(28_25_23_/0.10)] backdrop-blur-xl'
            : 'border-stone-200/50 bg-white/55 shadow-[0_8px_30px_rgb(28_25_23_/0.05)] backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 pl-1">
          <span className="flex size-8 items-center justify-center rounded-none bg-stone-900 text-amber-400 shadow-sm">
            <Barbell className="text-[18px]" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-stone-900">GYM CRM</span>
        </a>

        {/* Center navigation links */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex items-center gap-1">
          <a
            href="#"
            className="hidden rounded-full px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 sm:inline-flex"
          >
            Login
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-stone-800"
          >
            Start Free Trial
            <ArrowRight className="text-[14px] transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
