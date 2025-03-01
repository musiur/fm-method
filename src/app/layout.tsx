import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import UnderConstructionBanner from "@/components/layout/under-construction-banner";
import { Toaster } from "sonner";

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
        <UnderConstructionBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
