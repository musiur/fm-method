const CourseSearchPagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Previous
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
        1
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        2
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        3
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Next
      </button>
    </div>
  );
};

export default CourseSearchPagination;
