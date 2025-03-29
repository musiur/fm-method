"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export const CustomBreadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs?.map((crumb, index) => {
          const href = "/" + breadcrumbs.slice(0, index + 1).join("/");
          const isLast = index === breadcrumbs.length - 1;
          return (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="capitalize">
                {isLast ? (
                  <BreadcrumbPage>{crumb}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{crumb}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
