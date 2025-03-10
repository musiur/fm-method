"use client";

import * as React from "react";

import { NavLinks } from "./nav-links";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { data } from "../_data/nav-data";
import AssetsBrandLogo from "@/lib/assets/assets-brand-logo";
import { Separator } from "@/components/ui/separator";

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-row items-center gap-2">
        <AssetsBrandLogo className="w-16" />{" "}
        <span className="text-xl font-bold text-primary">Dashboard</span>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavLinks label="Platform" links={data.platform} />
        <NavLinks label="Settings" links={data.settings} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
