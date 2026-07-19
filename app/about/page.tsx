import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the SEO Training Demo and its practical website development and search optimization workshop.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            About the Project
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Learn SEO through a practical website
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            This training project demonstrates how a website is developed,
            published, discovered by search engines and measured after launch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-950">
          Purpose of this training
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          The website provides an end-to-end example that trainers can use to
          explain development, deployment, crawling, indexing, metadata,
          structured data, analytics and SEO performance.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Build",
              description:
                "Create responsive pages using Next.js, React, TypeScript and Tailwind CSS.",
            },
            {
              title: "Publish",
              description:
                "Store the project in GitHub and deploy it to the internet using Vercel.",
            },
            {
              title: "Optimize",
              description:
                "Add metadata, structured data, sitemaps, robots.txt and performance improvements.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}