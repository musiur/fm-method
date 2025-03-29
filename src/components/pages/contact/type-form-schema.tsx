import { z } from "zod";
import { SchemaForm } from "./schema-form";

export type FormSchemaType = z.infer<typeof SchemaForm>;
