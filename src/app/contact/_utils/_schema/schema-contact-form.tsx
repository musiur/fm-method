import { z } from "zod";

export const SchemaContactForm = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().min(1),
  serviceType: z.enum(["প্রাসঙ্গিক", "অপ্রাসঙ্গিক"]),
});
