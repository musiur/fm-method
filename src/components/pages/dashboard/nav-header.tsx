"use client";
import { CustomBreadcrumb } from "@/components/molecules";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import AssetsBrandLogo from "@/lib/assets/assets-brand-logo";
import clsx from "clsx";

export const NavHeader = () => {
  const { isMobile, open } = useSidebar();
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex flex-wrap items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        {isMobile || !open ? (
          <AssetsBrandLogo className={clsx({ "w-16": !isMobile, "w-10": isMobile })} />
        ) : null}
        <Separator orientation="vertical" className="mr-2 h-4" />
        {!isMobile ? <CustomBreadcrumb /> : null}
      </div>
    </header>
  );
};
