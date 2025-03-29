import Grid from "./grid";
import GridHeader from "./grid-header";
import GridPriceFilter from "./grid-price-filter";
import CourseSearchPagination from "./search-pagination";
import FilterSidebar from "./filter-sidebar";
import MobileFilters from "./mobile-filters";

export const Result = () => {
  return (
    <div className="min-h-screen bg-background section">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar className="hidden md:block w-64 shrink-0" />
          <div className="flex-1">
            <GridHeader />
            <div className="flex items-center justify-between md:justify-end mb-4">
              <MobileFilters />
              <GridPriceFilter />
            </div>
            <Grid />
            <CourseSearchPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
