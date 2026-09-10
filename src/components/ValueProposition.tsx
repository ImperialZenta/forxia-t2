import Link from "next/link";

const values = [
  {
    title: "Complexity busting",
    description:
      "We find where work gets stuck in process, politics, or priorities, and strip it back to what leaders need to decide, with coaching support so the change sticks.",
  },
  {
    title: "Product office build-out",
    description:
      "We help you define product ownership, portfolio rhythm, and decision rights so product means outcomes, not just backlogs.",
  },
  {
    title: "Team topology analysis",
    description:
      "We map how teams interact today, where handoffs and dependencies hurt flow, and what structure would serve the strategy better.",
  },
];

export function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Why work with us
          </p>
          <h2 className="heading-section mt-3">
            Complexity is the problem. Clarity is the work.
          </h2>
          <p className="text-lead mt-4">
            Forxia helps leadership teams simplify how work flows, stand up a real
            product office, and align structure to strategy, without enterprise
            overhead.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 md:mx-0">
                <span className="text-lg font-bold text-gold-600" aria-hidden="true">
                  ✓
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-navy-950 px-8 py-10 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Next step
          </p>
          <h3 className="mt-3 text-2xl font-bold">Ready to move forward?</h3>
          <p className="mx-auto mt-3 max-w-xl text-navy-300">
            Share what you&apos;re working on using the contact form.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link
              href="/services"
              className="btn border border-gold-500/50 bg-transparent text-white hover:border-gold-400 hover:bg-white/5"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
