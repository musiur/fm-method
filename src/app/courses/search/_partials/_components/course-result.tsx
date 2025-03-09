import CourseGrid from "./course-grid";
import CourseGridHeader from "./course-grid-header";
import CourseGridPriceFilter from "./course-grid-price-filter";
import CourseSearchPagination from "./course-search-pagination";
import FilterSidebar from "./filter-sidebar";
import MobileFilters from "./mobile-filters";

export default function CourseResult() {
  return (
    <div className="min-h-screen bg-background section">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar className="hidden md:block w-64 shrink-0" />
          <div className="flex-1">
            <CourseGridHeader />
            <div className="flex items-center justify-between md:justify-end mb-4">
              <MobileFilters />
              <CourseGridPriceFilter />
            </div>
            <CourseGrid />
            <CourseSearchPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
