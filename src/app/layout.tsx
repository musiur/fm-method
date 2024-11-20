import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FM Method",
  description: "Edtech for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
