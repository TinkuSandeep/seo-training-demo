import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Blog",
  description:
    "Read practical SEO tutorials covering crawling, indexing, technical SEO, website development and performance.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "SEO Blog",
    description:
      "Practical guides covering website development, crawling, indexing and technical SEO.",
    url: "/blog",
    type: "website",
  },
};

const articles = [
  {
    slug: "how-search-engines-discover-websites",
    category: "Technical SEO",
    title: "How Search Engines Discover and Index Websites",
    description:
      "Learn how crawling, indexing, robots.txt and XML sitemaps help search engines discover a website.",
    date: "July 19, 2026",
    readingTime: "6 min read",
    available: true,
  },
  {
    slug: "seo-title-and-meta-description",
    category: "On-Page SEO",
    title: "How to Write SEO Titles and Meta Descriptions",
    description:
      "Understand how titles and descriptions improve search visibility and click-through rates.",
    date: "Coming soon",
    readingTime: "5 min read",
    available: false,
  },
  {
    slug: "website-speed-and-seo",
    category: "Performance",
    title: "Why Website Speed Matters for SEO",
    description:
      "Learn how mobile responsiveness, page speed and Core Web Vitals affect user experience.",
    date: "Coming soon",
    readingTime: "7 min read",
    available: false,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Learning Resources
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Practical SEO Blog
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Step-by-step guides covering website development, technical SEO,
            publishing, indexing and performance measurement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="flex h-48 items-end bg-gradient-to-br from-blue-700 to-indigo-800 p-6">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white">
                  {article.category}
                </span>
              </div>

              <div className="p-7">
                <div className="flex gap-3 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{article.readingTime}</span>
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-8 text-gray-950">
                  {article.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {article.description}
                </p>

                {article.available ? (
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
                  >
                    Read article →
                  </Link>
                ) : (
                  <span className="mt-6 inline-block font-semibold text-gray-400">
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}