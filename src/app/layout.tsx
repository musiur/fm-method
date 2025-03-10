import type { Metadata } from "next";
import "./globals.css";
import RootWrapper from "@/components/layout/root-wrapper";

export const metadata: Metadata = {
  title: "FM Method",
  description: "Edtech for the future",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}
