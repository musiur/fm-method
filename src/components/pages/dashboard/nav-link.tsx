"use client";

import { useSidebar } from "@/components/ui/sidebar";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ name, url, icon }: { name: string; url: string; icon: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleSidebar, isMobile } = useSidebar();

  const isActive = pathname === url;

  const HandleOnClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
    router.push(url);
  };

  return (
    <div
      className={clsx(
        "flex items-center gap-2 [&>svg]:w-4 [&>svg]:h-4 text-sm py-1 rounded-md transition ease-in-out duration-500",
        {
          "bg-primary/10 text-primary": isActive,
          "border-transparent hover:bg-primary/5": !isActive,
        }
      )}
      role="button"
      onClick={HandleOnClick}
    >
      <span
        className={clsx("w-[4px] rounded-md h-6 transition ease-in-out duration-500", {
          "bg-transparent": !isActive,
          "bg-primary": isActive,
        })}
      ></span>
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default NavLink;
