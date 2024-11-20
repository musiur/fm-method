import { getDictionary } from "@/app/[lang]/dictionaries";
import { TYPE___I18N } from "@/lib/types/i18n";
 
const Page = async (props: TYPE___I18N) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-24">
      <h1 className="text-5xl font-extrabold text-blue-900 max-w-[800px] leading-[3.5rem] text-center">
        {dictionary.home["hero-section"].heading}
      </h1>
    </main>
  );
}

export default Page;