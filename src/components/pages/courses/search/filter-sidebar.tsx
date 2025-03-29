import { Button } from "@/components/ui/button"
import { FilterContent } from "./filter-content"

interface FilterSidebarProps {
  className?: string
}

export default function FilterSidebar({ className }: FilterSidebarProps) {
  return (
    <aside className={className}>
      <div className="sticky top-20 space-y-6">
        <FilterContent />
        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full">
          Reset
        </Button>
      </div>
    </aside>
  )
}

