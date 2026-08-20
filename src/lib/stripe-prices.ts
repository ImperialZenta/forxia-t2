/**
 * Maps package IDs to Stripe Price IDs (server-side only).
 * Create CAD prices in Stripe Dashboard → paste IDs into env vars.
 */
export function getStripePriceId(packageId: string): string | undefined {
  const priceMap: Record<string, string | undefined> = {
    "general-consultation": process.env.STRIPE_PRICE_CONSULTATION,
    "foundation-assessment": process.env.STRIPE_PRICE_FOUNDATION,
    "growth-retainer": process.env.STRIPE_PRICE_RETAINER,
  };

  return priceMap[packageId];
}
