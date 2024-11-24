import "server-only";
 
const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("@/lib/i18n/english.json").then((module) => module.default),
  bn: () => import("@/lib/i18n/bangla.json").then((module) => module.default),
};
 
export const getDictionary = async (locale: string) => {
  const dictionaryFn = dictionaries[`${locale ? locale : "en"}`];
  try {
    return await dictionaryFn();
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error while loading dictionary for locale 'sw.js' not found!`
    );
  }
};