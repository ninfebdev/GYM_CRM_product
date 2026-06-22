import type { ReactNode } from 'react';
import { Footer } from '@/components/landing/footer';
import { SiteNav } from '@/components/landing/site-nav';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[rgb(255_251_241)] text-stone-900">
      <SiteNav />
      <main className="relative z-10 pt-32 sm:pt-40">{children}</main>
      <Footer />
    </div>
  );
}
