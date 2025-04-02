import "server-only";
import { tryCatch } from "../error-handlers/try-catch";

const dictionaries: Record<string, () => Promise<unknown>> = {
  en: () => import("@/lib/i18n/english.json").then((module) => module.default),
  bn: () => import("@/lib/i18n/bangla.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const dictionaryFn = dictionaries[`${locale ? locale : "en"}`];

  const result = await tryCatch(dictionaryFn());

  return result;
};
