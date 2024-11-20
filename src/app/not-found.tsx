"use client";
import { Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const _language = pathname?.includes("/en") ? "en" : "bn";
  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push(`/${_language}`);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link
        href={`/${_language}`}
        className="text-blue-500 underline flex items-center gap-2"
      >
        <Sun className="w-4 h-4 animate-spin" />
        Loading...
      </Link>
    </div>
  );
}
