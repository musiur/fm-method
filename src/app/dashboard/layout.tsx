
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { NavHeader, NavSidebar } from "@/components/pages/dashboard";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <SidebarProvider>
      <NavSidebar />
      <SidebarInset>
        <NavHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
