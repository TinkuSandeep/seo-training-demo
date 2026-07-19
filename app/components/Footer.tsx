import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-white">SEO Training</h2>

          <p className="mt-4 max-w-sm leading-7">
            A practical learning website demonstrating web development,
            publishing, technical SEO and search-engine optimization.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>

          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            Training Topics
          </h2>

          <ul className="mt-4 space-y-3">
            <li>Website Development</li>
            <li>On-Page SEO</li>
            <li>Technical SEO</li>
            <li>Google Search Console</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-5 text-center text-sm">
        © {currentYear} SEO Training Demo. Built for educational purposes.
      </div>
    </footer>
  );
}