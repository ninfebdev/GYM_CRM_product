import { ContactSection } from '@/components/landing/contact-section';
import { EverythingSection } from '@/components/landing/everything-section';
import { FaqSection } from '@/components/landing/faq-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { Footer } from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { SiteNav } from '@/components/landing/site-nav';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLdGraph,
  organizationSchema,
  productSchema,
  softwareApplicationSchema,
  webPageSchema,
  websiteSchema,
} from '@/lib/structured-data';

const homeJsonLd = jsonLdGraph(
  organizationSchema(),
  websiteSchema(),
  softwareApplicationSchema(),
  productSchema(),
  webPageSchema({
    path: '/',
    name: siteConfig.title,
    description: siteConfig.description,
  }),
  faqPageSchema(),
  breadcrumbSchema([{ name: 'Home', path: '/' }]),
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[rgb(255_251_241)] text-stone-900">
      <JsonLd data={homeJsonLd} />
      {/* Hero gradient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 h-230 overflow-hidden">
        {/* Warm mesh base */}
        <div className="hero-aurora absolute inset-0" />

        {/* Drifting color blobs for organic depth */}
        <div className="ld-aurora-1 absolute -top-40 left-1/2 h-160 w-250 rounded-full bg-[radial-gradient(closest-side,oklch(0.86_0.16_70/0.55),transparent)] blur-[90px]" />
        <div className="ld-aurora-2 absolute -top-16 right-[5%] h-115 w-115 rounded-full bg-[radial-gradient(closest-side,oklch(0.87_0.12_38/0.45),transparent)] blur-[80px]" />
        <div
          className="ld-aurora-2 absolute top-12 left-[3%] h-105 w-105 rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.15_54/0.42),transparent)] blur-[80px]"
          style={{ animationDelay: '-9s' }}
        />

        {/* Subtle grain */}
        <div className="hero-grain absolute inset-0 opacity-[0.04] mix-blend-soft-light" />

        {/* Fade the gradient into the page background */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-[rgb(255_251_241)] to-transparent" />
      </div>

      <SiteNav />

      <div className="relative z-10">
        <HeroSection />
        <EverythingSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
