"use client";

import { Fragment } from "react";
import UnderConstructionBanner from "./under-construction-banner";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

/**
 * RootWrapper is a component that wraps the entire application.
 * It includes the UnderConstructionBanner, Navbar, main content, Footer, and Toaster.
 * @param {React.ReactNode} children - The child components to be rendered inside the main element.
 * @returns {React.ReactNode} The RootWrapper component.
 */
const RootWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");
  return isDashboard ? (
    <main>{children}</main>
  ) : (
    <Fragment>
      <UnderConstructionBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </Fragment>
  );
};

export default RootWrapper;
