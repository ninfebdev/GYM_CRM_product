/**
 * Central site configuration — single source of truth for SEO metadata,
 * structured data, sitemap, manifest and social cards.
 *
 * Set `NEXT_PUBLIC_SITE_URL` in your environment (e.g. https://www.gymcrm.in)
 * for production. The default below is a safe placeholder used during local
 * development and previews.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gymcrm.in'
).replace(/\/+$/, '');

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const siteConfig = {
  name: 'GYM CRM',
  /** Used as the metadata title template suffix and brand name. */
  brand: 'GYM CRM',
  title: 'GYM CRM – All-in-One Gym Management Software for Modern Fitness Businesses',
  shortTitle: 'GYM CRM — Run Your Entire Gym From One Platform',
  description:
    'Manage members, payments, renewals, analytics, workout plans, and your gym website from one platform. Built for gyms, fitness studios, and trainers.',
  tagline: 'All-in-one gym management software for modern fitness businesses.',
  url: SITE_URL,
  locale: 'en_IN',
  language: 'en',

  // Social
  twitterHandle: '@gymcrm',
  social: {
    twitter: 'https://twitter.com/gymcrm',
    linkedin: 'https://www.linkedin.com/company/gymcrm',
    instagram: 'https://www.instagram.com/gymcrm',
    facebook: 'https://www.facebook.com/gymcrm',
  },

  // Contact
  email: 'hello@gymcrm.in',
  phone: '+91-98765-43210',

  // Commercial
  price: {
    amount: '12000',
    currency: 'INR',
    display: '₹12,000/year',
    period: 'P1Y',
  },
  freeTrial: '1 Month',

  /**
   * Primary + secondary keyword set. Distributed naturally across the site —
   * not stuffed into a single tag. Kept here for the metadata `keywords` field
   * and as a reference for content writers.
   */
  keywords: [
    'gym crm',
    'gym management software',
    'gym management system',
    'fitness crm',
    'fitness management software',
    'gym membership management software',
    'gym software india',
    'gym billing software',
    'gym member management',
    'gym website builder',
    'gym analytics software',
    'fitness business software',
    'gym owner software',
    'gym membership software',
    'gym administration software',
    'gym renewal tracking software',
    'workout plan software',
    'gym app for members',
    'gym dashboard software',
    'fitness studio management software',
    'all in one gym software',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
