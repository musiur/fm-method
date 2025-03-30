const CourseGridPriceFilter = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm text-muted-foreground hidden sm:block">
        Showing 24 of 142 courses
      </p>
      <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <option>Most Popular</option>
        <option>Newest</option>
        <option>Highest Rated</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
};

export default CourseGridPriceFilter;
