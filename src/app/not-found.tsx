"use client";
import NotFoundIllustration from "@/components/layout/not-found-illustration";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen [&>*]:text-center gap-10">
      <NotFoundIllustration className="w-full max-w-96 h-auto text-primary" />
      <div>
        <h2 className="text-2xl font-semibold">Oops... It looks like you &apos;re lost !</h2>
        <p>
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
      </div>
      <Link href="/" className="text-primary underline flex items-center gap-2">
        Back to home
      </Link>
    </div>
  );
}
