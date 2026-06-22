import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from './site';

/**
 * Builds a complete, self-describing Metadata object for a page: canonical
 * URL, Open Graph and Twitter cards. The social image is supplied
 * automatically by the file-based `opengraph-image` / `twitter-image`
 * conventions (inherited from the root segment), so it never has to be
 * repeated here.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  keywords,
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  /** When true, bypass the `… | GYM CRM` title template. */
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(type === 'article' && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
  };
}
