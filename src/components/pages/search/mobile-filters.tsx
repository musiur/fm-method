"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import { FilterContent } from "./filter-content";

export default function MobileFilters() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[85vh]">
          <DrawerHeader>
            <DrawerTitle>Filter Courses</DrawerTitle>
            <DrawerDescription>
              Narrow down courses to find exactly what you&apos;re looking for
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 overflow-y-auto pb-0">
            <FilterContent />
          </div>
          <DrawerFooter className="pt-2">
            <Button className="w-full">Apply Filters</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
