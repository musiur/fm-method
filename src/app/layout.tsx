import type { Metadata } from "next";
import "./globals.css";
import RootWrapper from "@/components/layout/root-wrapper";
import localFont from 'next/font/local'

export const customFont = localFont({
    src: './fonts/HelalHafizFont.ttf',
    display: 'swap',
    variable: '--font-helal'
})

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
      <body className={`${customFont.className} ${customFont.variable}`}>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}
