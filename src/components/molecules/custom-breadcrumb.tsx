"use client";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const CustomBreadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbs?.map((crumb, index) => {
          const href = "/" + breadcrumbs.slice(0, index + 1).join("/");
          const isLast = index === breadcrumbs.length - 1;
          return (
            <BreadcrumbItem key={index} className="capitalize">
              {isLast ? (
                <BreadcrumbPage>{crumb}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={href}>{crumb}</BreadcrumbLink>
              )}
              {isLast ? null : <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
