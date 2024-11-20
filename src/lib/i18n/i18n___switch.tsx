"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const I18N___Switch = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const _language = params.get("language") === "en" ? "bn" : "en";

  return (
    <div className="flex items-center justify-center">
      {languages.map((language) => {
        const { id, code, label } = language;

        const match = _language === code;
        const newLink = pathname?.replace(/en|bn/, code);
        console.log(match, newLink);
        return (
          <Link key={id} href={newLink}>
            <div
              className={clsx(
                "border rounded-md h-9 w-9 flex items-center justify-center",
                {
                  "bg-primary text-white": match,
                }
              )}
            >
              {label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default I18N___Switch;

const languages = [
  {
    id: 1,
    name: "English",
    code: "en",
    label: "A",
  },
  {
    id: 2,
    name: "Bangla",
    code: "bn",
    label: "অ",
  },
];
