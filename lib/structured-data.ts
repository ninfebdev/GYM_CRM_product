/**
 * JSON-LD structured data builders. All schemas share a common `@id` graph so
 * search engines can resolve relationships (Organization → publishes →
 * WebSite → has → WebPage, SoftwareApplication ↔ Product offer, etc.).
 *
 * Reference: https://schema.org and Google's structured data guidelines.
 */
import { absoluteUrl, siteConfig } from './site';
import { faqs } from './faqs';
import type { BlogPost } from './blog';

const ORG_ID = absoluteUrl('/#organization');
const WEBSITE_ID = absoluteUrl('/#website');
const SOFTWARE_ID = absoluteUrl('/#software');
const PRODUCT_ID = absoluteUrl('/#product');
const LOGO_ID = absoluteUrl('/#logo');

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: absoluteUrl('/icon.svg'),
      caption: `${siteConfig.name} logo`,
    },
    image: { '@id': LOGO_ID },
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: absoluteUrl('/blog?q={search_term_string}'),
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function softwareApplicationSchema() {
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
    name: siteConfig.name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'FitnessApplication',
    operatingSystem: 'Web Browser',
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': ORG_ID },
    softwareVersion: '2026',
    offers: {
      '@type': 'Offer',
      price: siteConfig.price.amount,
      priceCurrency: siteConfig.price.currency,
      priceValidUntil: '2026-12-31',
      url: absoluteUrl('/#pricing'),
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Member management',
      'Gym billing and invoicing',
      'Trial and renewal tracking',
      'Revenue and expense analytics',
      'Workout plan builder',
      'Diet plan builder',
      'Trainer and staff management',
      'Personalized gym website',
      'Dedicated member app',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
  };
}

export function productSchema() {
  return {
    '@type': 'Product',
    '@id': PRODUCT_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    brand: { '@type': 'Brand', name: siteConfig.name },
    category: 'Gym Management Software',
    url: siteConfig.url,
    image: absoluteUrl('/opengraph-image'),
    offers: {
      '@type': 'Offer',
      price: siteConfig.price.amount,
      priceCurrency: siteConfig.price.currency,
      priceValidUntil: '2026-12-31',
      url: absoluteUrl('/#pricing'),
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
  };
}

export function faqPageSchema() {
  return {
    '@type': 'FAQPage',
    '@id': absoluteUrl('/#faq'),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema({
  path = '/',
  name,
  description,
  isPartOf = WEBSITE_ID,
}: {
  path?: string;
  name: string;
  description: string;
  isPartOf?: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': isPartOf },
    about: { '@id': SOFTWARE_ID },
    primaryImageOfPage: absoluteUrl('/opengraph-image'),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: siteConfig.language,
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    image: absoluteUrl('/opengraph-image'),
    author: { '@id': ORG_ID, '@type': 'Organization', name: siteConfig.name },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

/** Wrap one or many schema nodes into a single @graph document. */
export function jsonLdGraph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
