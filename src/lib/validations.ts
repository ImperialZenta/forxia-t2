import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  /** Honeypot — real users leave this empty */
  companyUrl: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const checkoutSchema = z.object({
  packageId: z.string().min(1),
});
