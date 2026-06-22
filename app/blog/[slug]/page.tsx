import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { ArrowRight } from '@/components/landing/icons';
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  type ContentBlock,
} from '@/lib/blog';
import { buildMetadata } from '@/lib/metadata';
import {
  articleSchema,
  breadcrumbSchema,
  jsonLdGraph,
} from '@/lib/structured-data';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Article not found', robots: { index: false, follow: false } };
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords: post.keywords,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={i}
              className="mt-12 font-caprasimo text-2xl leading-snug text-stone-900 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="mt-5 space-y-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-stone-600">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mt-5 text-pretty leading-relaxed text-stone-600">
            {block.text}
          </p>
        );
      })}
    </>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug);

  const jsonLd = jsonLdGraph(
    articleSchema(post),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-stone-900">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-stone-900">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="truncate text-stone-700">
              {post.category}
            </li>
          </ol>
        </nav>

        <article>
          {/* Article header */}
          <header>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-stone-400">
              <span className="text-orange-500">{post.category}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTimeMinutes} min read</span>
            </div>
            <h1 className="mt-5 text-balance font-caprasimo text-[2.1rem] leading-[1.12] text-stone-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-stone-500">
              {post.description}
            </p>
          </header>

          {/* Body */}
          <div className="mt-10 border-t border-stone-200/70 pt-2 text-base sm:text-lg">
            <ContentRenderer blocks={post.content} />
          </div>

          {/* In-content CTA — internal link to the product */}
          <aside className="mt-14 bg-accent/80 p-7 [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]">
            <h2 className="font-caprasimo text-xl text-stone-900 sm:text-2xl">
              Run your entire gym from one platform
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-stone-500">
              GYM CRM brings members, billing, analytics, workout plans, and your gym website
              together in one place. Start a free 1-month trial — no credit card required.
            </p>
            <Link
              href="/#pricing"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-stone-800"
            >
              Start Free Trial
              <ArrowRight
                className="text-[15px] transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </aside>
        </article>

        {/* Related posts — internal linking */}
        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-20">
            <h2
              id="related-heading"
              className="font-geom text-sm font-semibold uppercase tracking-widest text-stone-500"
            >
              Related articles
            </h2>
            <ul className="mt-6 divide-y divide-stone-200/70 border-t border-stone-200/70">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="font-geom text-base font-medium text-stone-800 transition-colors group-hover:text-orange-600">
                      {item.title}
                    </span>
                    <ArrowRight
                      className="shrink-0 text-[15px] text-stone-400 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
