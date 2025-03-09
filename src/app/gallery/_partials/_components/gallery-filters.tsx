import { ImageIcon, Video, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Available filters
const categories = [
  "All",
  "Campus",
  "Courses",
  "Events",
  "Facilities",
  "Faculty",
  "Students",
];

interface GalleryFiltersProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const GalleryFilters = ({
  selectedTab,
  setSelectedTab,
  selectedCategory,
  setSelectedCategory,
}: GalleryFiltersProps) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Tabs
        defaultValue="all"
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full sm:w-auto"
      >
        <TabsList>
          <TabsTrigger value="all" className="flex items-center gap-1">
            All
          </TabsTrigger>
          <TabsTrigger value="images" className="flex items-center gap-1">
            <ImageIcon className="h-4 w-4" />
            Photos
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            Videos
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Category: {selectedCategory}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {categories.map((category) => (
            <DropdownMenuItem
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-muted" : ""}
            >
              {category}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default GalleryFilters;