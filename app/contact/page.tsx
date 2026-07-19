import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the SEO Training team to discuss practical website development and search-engine optimization workshops.",
  alternates: {
    canonical: "/contact",
  },
};

const contactDetails = [
  {
    title: "Training enquiries",
    description:
      "Discuss SEO workshops, practical demonstrations and team learning requirements.",
  },
  {
    title: "Website demonstrations",
    description:
      "Learn how to build, publish, index and measure a website from beginning to end.",
  },
  {
    title: "Response time",
    description:
      "This training project currently demonstrates form validation. Email delivery will be added later.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <section className="bg-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Let&apos;s discuss SEO training
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Share your training requirements and learn how this practical
            website can demonstrate development, deployment, indexing and SEO
            measurement.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-semibold text-blue-700">Get in touch</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-950">
            Plan a practical SEO workshop
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Use the form to demonstrate how a modern website collects and
            validates enquiry information. In the next stage, we can connect
            the submission to email or a database.
          </p>

          <div className="mt-10 space-y-5">
            {contactDetails.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-bold text-gray-950">{item.title}</h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}