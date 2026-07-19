import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Services",
  description:
    "Explore website development, on-page SEO and technical SEO training modules.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Website Development",
    description:
      "Learn how to create responsive pages with Next.js, React, TypeScript and Tailwind CSS.",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize titles, meta descriptions, headings, content, images and internal links.",
  },
  {
    title: "Technical SEO",
    description:
      "Configure canonical URLs, structured data, sitemap.xml, robots.txt and indexing controls.",
  },
  {
    title: "Publishing",
    description:
      "Push the project to GitHub and deploy it securely through Vercel.",
  },
  {
    title: "Google Search Console",
    description:
      "Verify ownership, submit the sitemap, inspect URLs and monitor search performance.",
  },
  {
    title: "SEO Measurement",
    description:
      "Review analytics, Lighthouse reports, Core Web Vitals and search performance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Training Modules
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Website and SEO training services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Explore the complete workflow from website development to
            publishing, indexing and SEO performance analysis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {service.title}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}