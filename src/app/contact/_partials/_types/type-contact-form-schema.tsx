import { z } from "zod";
import { SchemaContactForm } from "../_schema/schema-contact-form";

export type ContactFormSchemaType = z.infer<typeof SchemaContactForm>;
