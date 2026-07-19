import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "../../components/JsonLd";
import { getSiteUrl } from "../../lib/site-url";

const article = {
  slug: "how-search-engines-discover-websites",
  title: "How Search Engines Discover and Index Websites",
  description:
    "Learn how search engines crawl, index and rank websites using links, XML sitemaps, robots.txt and structured website content.",
  publishedDate: "2026-07-19",
  modifiedDate: "2026-07-19",
  author: "SEO Training Team",
};

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== article.slug) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const siteUrl = getSiteUrl();
  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.description,

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: articleUrl,
      siteName: "SEO Training Demo",
      publishedTime: article.publishedDate,
      modifiedTime: article.modifiedDate,
      authors: [article.author],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  if (slug !== article.slug) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    url: articleUrl,

    author: {
      "@type": "Organization",
      name: article.author,
      url: siteUrl,
    },

    publisher: {
      "@type": "Organization",
      name: "SEO Training Demo",
      url: siteUrl,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <main className="bg-white">
      <JsonLd data={articleStructuredData} />

      <article>
        <header className="bg-blue-800 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/blog"
              className="font-semibold text-blue-200 hover:text-white"
            >
              ← Back to Blog
            </Link>

            <p className="mt-10 text-sm font-bold uppercase tracking-widest text-blue-200">
              Technical SEO
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              {article.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-200">
              <span>Published July 19, 2026</span>
              <span aria-hidden="true">•</span>
              <span>6-minute read</span>
              <span aria-hidden="true">•</span>
              <span>{article.author}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xl leading-9 text-gray-700">
            Search engines must first discover a website before its pages can
            appear in search results. This process generally involves crawling,
            rendering, indexing and ranking.
          </p>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-950">
              1. Website discovery
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Search engines discover webpages by following links from websites
              they already know, reading submitted XML sitemaps and revisiting
              previously crawled pages.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              A completely new website may take longer to discover when no
              external website links to it. Submitting the sitemap through a
              webmaster platform can help search engines locate its URLs.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-950">
              2. Crawling the website
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              A crawler requests website pages in a similar way to a browser. It
              examines text, headings, navigation links, images and other
              resources.
            </p>

            <div className="mt-7 rounded-xl border-l-4 border-blue-700 bg-blue-50 p-6">
              <h3 className="font-bold text-gray-950">Training example</h3>

              <p className="mt-3 leading-7 text-gray-700">
                Our website exposes public URLs through{" "}
                <Link
                  href="/sitemap.xml"
                  className="font-semibold text-blue-700 underline"
                >
                  sitemap.xml
                </Link>{" "}
                and provides crawler instructions through{" "}
                <Link
                  href="/robots.txt"
                  className="font-semibold text-blue-700 underline"
                >
                  robots.txt
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-950">
              3. Understanding robots.txt
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              The robots file provides crawler directives and identifies the
              location of the XML sitemap.
            </p>

            <pre className="mt-6 overflow-x-auto rounded-xl bg-gray-950 p-6 text-sm leading-7 text-gray-100">
              <code>{`User-Agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml`}</code>
            </pre>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-950">
              4. Understanding the XML sitemap
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              The sitemap lists important canonical URLs that search engines
              should know about.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              A sitemap helps discovery, but it does not guarantee that every
              listed page will be indexed or ranked.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-950">
              5. Indexing and ranking
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              After crawling, a search engine may process and store the page in
              its index. Ranking happens when the search engine evaluates
              whether the page is relevant and useful for a particular query.
            </p>
          </section>

          <section className="mt-12 rounded-2xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-950">
              Key takeaway
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Publishing a website is only the beginning. Search engines must
              discover, crawl and understand its pages before those pages can
              appear in search results.
            </p>
          </section>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link
              href="/services"
              className="font-semibold text-blue-700 hover:underline"
            >
              Continue to the SEO training modules →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}