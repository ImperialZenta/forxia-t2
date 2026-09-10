/**
 * @deprecated Import from @/lib/services instead.
 * Re-exported for backward compatibility with checkout and legacy imports.
 */
export type { Service as Package, PaymentType } from "@/lib/services";
export {
  services as packages,
  getServiceById as getPackageById,
  getStripeServices as getStripePackages,
} from "@/lib/services";
