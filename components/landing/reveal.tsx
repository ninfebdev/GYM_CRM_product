'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
};

/**
 * Fades + lifts its children into view the first time they enter the viewport.
 *
 * Fail-open by design: content renders **visible** on the server and on first
 * paint. Client JS only *arms* the hidden/animated state for elements that are
 * still below the fold, then reveals them on scroll. So if hydration is slow or
 * never completes, or IntersectionObserver misbehaves on a given device, the
 * page body still shows instead of being stuck at `opacity: 0`. Above-the-fold
 * content is never hidden, avoiding a flash. Pairs with the `.reveal` /
 * `.reveal-armed` / `.is-visible` styles in globals.css.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // armed → JS has applied the hidden/animated state; visible → revealed.
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // No observer support or reduced motion → leave content visible, no animation.
    if (typeof IntersectionObserver === 'undefined' || prefersReduced) return;

    // Already in (or above) the viewport on load: keep it visible, don't animate,
    // so there's no flash of content fading out and back in.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || 0) && rect.bottom > 0;
    if (inView) return;

    // Below the fold (off-screen): safe to arm the hidden state and reveal on scroll.
    setArmed(true);

    // Safety net: a healthy observer always delivers an initial callback shortly
    // after observe() (even with isIntersecting = false). If none ever arrives,
    // the observer is broken on this device — reveal the content rather than
    // leaving it stuck hidden. A working observer clears this timer on its first
    // callback, so normal scroll-triggered animations are unaffected.
    let delivered = false;
    const failSafe = window.setTimeout(() => {
      if (!delivered) setVisible(true);
    }, 1500);

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${armed ? ' reveal-armed' : ''}${visible ? ' is-visible' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
