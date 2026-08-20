"use client";

import { useState } from "react";
import Link from "next/link";
import type { Package } from "@/lib/packages";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article
      className={cn(
        "card flex flex-col",
        pkg.highlighted && "border-gold-400 ring-2 ring-gold-500/20"
      )}
    >
      {pkg.highlighted ? (
        <span className="mb-4 inline-flex w-fit rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-800">
          Most popular
        </span>
      ) : null}

      <h3 className="text-xl font-semibold text-navy-900">{pkg.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-600">{pkg.description}</p>

      <div className="mt-6">
        <p className="text-3xl font-bold text-gold-700">{pkg.price}</p>
        {pkg.priceLabel ? (
          <p className="text-sm text-navy-500">{pkg.priceLabel}</p>
        ) : null}
      </div>

      <ul className="mt-6 flex-1 space-y-2">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-navy-700">
            <span className="mt-0.5 text-gold-600" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PackageAction pkg={pkg} />
      </div>
    </article>
  );
}

function PackageAction({ pkg }: { pkg: Package }) {
  if (pkg.payment === "stripe") {
    return <CheckoutButton packageId={pkg.id} label="Pay now" />;
  }

  if (pkg.payment === "contact") {
    return (
      <Link
        href={`/contact?service=${encodeURIComponent(pkg.name)}`}
        className="btn-primary w-full"
      >
        Get in touch
      </Link>
    );
  }

  return (
    <Link href="/contact" className="btn-secondary w-full">
      Get in touch
    </Link>
  );
}

function CheckoutButton({
  packageId,
  label,
}: {
  packageId: string;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Unable to start checkout");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error ? (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
