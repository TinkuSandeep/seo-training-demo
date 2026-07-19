import Link from "next/link";

const learningTopics = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Learn how Next.js, React, TypeScript and Tailwind CSS work together to build modern websites.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    description:
      "Optimize page titles, descriptions, headings, content, images and internal links.",
  },
  {
    number: "03",
    title: "Technical SEO",
    description:
      "Configure sitemaps, robots.txt, canonical URLs, structured data and performance.",
  },
  {
    number: "04",
    title: "Publish Online",
    description:
      "Push code to GitHub, deploy with Vercel and connect a secure custom domain.",
  },
  {
    number: "05",
    title: "Search Console",
    description:
      "Submit the website to Google, request indexing and monitor search performance.",
  },
  {
    number: "06",
    title: "SEO Measurement",
    description:
      "Use analytics, Core Web Vitals and SEO reports to improve website performance.",
  },
];

const statistics = [
  { value: "6", label: "Learning modules" },
  { value: "5", label: "SEO-ready pages" },
  { value: "100%", label: "Hands-on training" },
  { value: "1", label: "Live website project" },
];

const articles = [
  {
    category: "Technical SEO",
    title: "How search engines discover and index a website",
    description:
      "Understand crawling, indexing, sitemaps and the steps required to make a new website visible in search.",
  },
  {
    category: "On-Page SEO",
    title: "How to write better page titles and descriptions",
    description:
      "Learn how metadata helps users and search engines understand the purpose of every page.",
  },
  {
    category: "Performance",
    title: "Why website speed matters for users and SEO",
    description:
      "Explore page speed, mobile responsiveness and Core Web Vitals using practical examples.",
  },
];

const testimonials = [
  {
    quote:
      "The practical website approach makes technical SEO much easier to understand than theory alone.",
    name: "Training Participant",
    role: "SEO Analyst",
  },
  {
    quote:
      "Building and publishing the website helped connect development, deployment and indexing concepts.",
    name: "Workshop Participant",
    role: "Digital Marketing Specialist",
  },
  {
    quote:
      "The project provides a clear end-to-end example that can be reused for future SEO training.",
    name: "Team Member",
    role: "Content Specialist",
  },
];

const faqs = [
  {
    question: "Do I need programming experience for this training?",
    answer:
      "No. The website is built step by step, with explanations of the code, folder structure, publishing process and SEO configuration.",
  },
  {
    question: "Will the website be published on the internet?",
    answer:
      "Yes. The completed project will be pushed to GitHub and deployed through Vercel with HTTPS.",
  },
  {
    question: "Can Google index a newly published website immediately?",
    answer:
      "Google may take time to discover and index a new website. We will submit the sitemap through Google Search Console and request indexing.",
  },
  {
    question: "What SEO features are included in this project?",
    answer:
      "The project includes metadata, canonical URLs, Open Graph tags, structured data, sitemap.xml, robots.txt and responsive design.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
              Practical SEO Workshop
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Build, publish and optimize a website for search engines
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Learn the complete website lifecycle through one practical
              project—from local development and deployment to indexing,
              analytics and SEO improvement.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Explore Training
              </Link>

              <Link
                href="/blog"
                className="rounded-lg border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Read SEO Guides
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-xl bg-white p-6 text-gray-900">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    SEO Training Project
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    End-to-end website lifecycle
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  In Progress
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Build responsive pages",
                  "Configure technical SEO",
                  "Publish using Vercel",
                  "Connect Google tools",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-lg bg-gray-50 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning modules */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-semibold text-blue-700">Training modules</p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Learn the complete website and SEO workflow
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Each module connects website development with practical SEO
              activities that can be demonstrated during the workshop.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {learningTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-blue-700">
                  {topic.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-950">
                  {topic.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold text-blue-700">Practical workflow</p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              From local computer to Google Search
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["1", "Develop", "Build and test the website locally."],
              ["2", "Publish", "Deploy the code securely to Vercel."],
              ["3", "Index", "Submit the sitemap to search engines."],
              ["4", "Measure", "Review traffic, rankings and performance."],
            ].map(([number, title, description]) => (
              <div
                key={title}
                className="rounded-2xl bg-blue-50 p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-gray-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-semibold text-blue-700">Latest learning</p>

              <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
                Practical SEO articles
              </h2>
            </div>

            <Link
              href="/blog"
              className="font-semibold text-blue-700 hover:underline"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="h-40 bg-gradient-to-br from-blue-700 to-indigo-700" />

                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-7 text-gray-950">
                    {article.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold text-blue-200">Training experience</p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built for practical team learning
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-2xl bg-white/10 p-7 backdrop-blur"
              >
                <div className="text-lg text-yellow-300">★★★★★</div>

                <blockquote className="mt-5 leading-8 text-blue-50">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="mt-6 border-t border-white/20 pt-5">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-blue-200">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-semibold text-blue-700">Frequently asked questions</p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Questions about the workshop
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <summary className="cursor-pointer list-none font-semibold text-gray-950">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl text-blue-700 group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold text-blue-300">Ready to continue?</p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Build the website, publish it and demonstrate real SEO
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Complete the project and use it as a practical training platform
            for development, publishing, indexing and performance analysis.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
            >
              View Training Topics
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}