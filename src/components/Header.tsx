import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-sm font-bold text-gold-100 transition-colors group-hover:bg-brand-600">
            F
          </span>
          <span className="text-lg font-semibold tracking-tight text-navy-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-navy-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-2">
            Get in touch
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="btn-secondary cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <nav
        className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-navy-200 bg-white p-2 shadow-lg"
        aria-label="Mobile"
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-brand-50"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-primary mt-2 w-full"
        >
          Get in touch
        </Link>
      </nav>
    </details>
  );
}
