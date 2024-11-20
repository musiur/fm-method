import { cn } from "@/lib/utils";
import Image from "next/image";
import BrandLogo from "./brandlogo.png";

const ASSETS___BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={BrandLogo}
      alt="Brand Logo"
      width={100}
      height={100}
      className={cn(className, "max-w-[40px] h-auto")}
    />
  );
};

export default ASSETS___BrandLogo;
