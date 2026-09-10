import Link from "next/link";
import { TaglineCarousel } from "@/components/TaglineCarousel";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-300">
      <div className="container-page section-padding pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <div className="mt-2">
              <TaglineCarousel variant="footer" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/80">
              Pages
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gold-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/80">
              Get in touch
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Questions about services, pricing, or a custom engagement?
            </p>
            <Link href="/contact" className="btn-primary mt-4 inline-flex">
              Go to contact form
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-800 pt-8 text-sm text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p className="text-navy-500">Built for clarity, speed, and results.</p>
        </div>
      </div>
    </footer>
  );
}
