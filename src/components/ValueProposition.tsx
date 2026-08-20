import Link from "next/link";

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We cut through noise to identify the few decisions that actually move the needle.",
  },
  {
    title: "Actionable from day one",
    description:
      "Every engagement delivers concrete next steps—not slide decks that gather dust.",
  },
  {
    title: "Partner, not vendor",
    description:
      "We embed with your team, challenge assumptions respectfully, and stay accountable to outcomes.",
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
          <h2 className="heading-section mt-3">Consulting that respects your time</h2>
          <p className="text-lead mt-4">
            You need a trusted advisor who understands business reality—not generic
            frameworks. We bring senior-level experience without enterprise overhead.
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
            Book a consultation online or send a request through the contact form.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact form
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
