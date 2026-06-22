import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/json-ld';
import { SectionLabel } from '@/components/landing/section-label';
import { ArrowRight } from '@/components/landing/icons';
import { getAllPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/metadata';
import { absoluteUrl, siteConfig } from '@/lib/site';
import { breadcrumbSchema, jsonLdGraph } from '@/lib/structured-data';

const title = 'Gym Management Blog — Tips, Guides & Software Insights';
const description =
  'Guides on gym management software, gym CRM, membership renewals, gym website builders, and growing your fitness business — from the GYM CRM team.';

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/blog',
  keywords: [
    'gym management software',
    'gym crm',
    'fitness business software',
    'gym software india',
    'gym website builder',
  ],
});

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const jsonLd = jsonLdGraph(
    {
      '@type': 'Blog',
      '@id': `${absoluteUrl('/blog')}#blog`,
      url: absoluteUrl('/blog'),
      name: title,
      description,
      inLanguage: siteConfig.language,
      publisher: { '@id': absoluteUrl('/#organization') },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: absoluteUrl(`/blog/${post.slug}`),
        datePublished: post.datePublished,
        dateModified: post.dateModified,
      })),
    },
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-stone-900">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-stone-700">
              Blog
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl">
          <SectionLabel>Resources</SectionLabel>
          <h1 className="mt-5 text-balance font-caprasimo text-[2.2rem] leading-[1.1] text-stone-900 sm:text-5xl md:text-[3.4rem]">
            Gym Management Insights
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-stone-500 sm:text-lg">
            Practical guides on gym management software, member retention, gym website builders, and
            growing a profitable fitness business — written for gym owners and fitness studios.
          </p>
        </header>

        {/* Post grid */}
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col bg-accent/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300/80 hover:shadow-[0_24px_50px_-24px_rgb(28_25_23_/0.25)]
              [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]"
            >
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-stone-400">
                <span className="text-orange-500">{post.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>

              <h2 className="mt-4 text-balance font-geom text-xl font-semibold tracking-tight text-stone-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors before:absolute group-hover:text-orange-600"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-pretty text-[0.95rem] leading-relaxed text-stone-500">
                {post.excerpt}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900">
                Read article
                <ArrowRight
                  className="text-[14px] transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
