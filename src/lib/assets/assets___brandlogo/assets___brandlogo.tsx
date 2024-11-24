import { cn } from "@/lib/utils";
import Image from "next/image";
import BrandLogo from "./brandlogo.png";
import Link from "next/link";

const ASSETS___BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src={BrandLogo}
        alt="Brand Logo"
        width={100}
        height={100}
        className={cn(className, "max-w-[40px] h-auto")}
      />
    </Link>
  );
};

export default ASSETS___BrandLogo;
