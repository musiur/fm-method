"use client";

import { Button } from "@/components/ui/button";
import I18NSwitch from "@/lib/i18n/i18n-switch";
import Link from "next/link";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { _LOGOUT } from "@/api/auth/_logout";
import { LogOutIcon, SquareActivityIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavActions = () => {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");

    if (accessToken && refreshToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [pathname]);

  const handleLogout = async () => {
    await _LOGOUT();
  };

  return (
    <div className="flex items-center gap-2">
      <I18NSwitch />
      {loggedIn ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-56">
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2"
              >
                <SquareActivityIcon size={16} /> ড্যাশবোর্ড
              </Link>
              <Link
                href="/dashboard/profile"
                className="inline-flex items-center gap-2"
              >
                <UserIcon size={16} /> প্রোফাইল
              </Link>
              <Separator />
              <Button
                variant="outline"
                className="w-full items-center justify-center gap-1"
                onClick={handleLogout}
              >
                <LogOutIcon className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Link href="/login">
          <Button>লগ-ইন</Button>
        </Link>
      )}
    </div>
  );
};

export default NavActions;
