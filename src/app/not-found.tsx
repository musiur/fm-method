"use client";
import { Sun } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      No page found!
      <Link
        href="/"
        className="text-blue-500 underline flex items-center gap-2"
      >
        Back to home
      </Link>
    </div>
  );
}
