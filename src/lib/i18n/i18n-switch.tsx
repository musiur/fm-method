"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const I18NSwitch = () => {
  const pathname = usePathname();
  const _language = pathname?.includes("/en") ? "en" : "bn";

  return (
    <div className="flex items-center justify-center">
      {languages.map((language) => {
        const { id, code, label } = language;
        const match = _language === code;
        const newLink = pathname?.replace(/\/en|\/bn/, code);

        return (
          <Link key={id} href={newLink}>
            <div
              className="border h-9 w-9 flex items-center justify-center"
              style={{
                opacity: match ? 1 : 0.5,
                borderRadius:
                  id === 1 ? "0.5rem 0 0 0.5rem" : "0 0.5rem 0.5rem 0",
              }}
            >
              {label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default I18NSwitch;

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
