const filters = ["All Tasks", "Pending", "In Progress", "Completed", "Overdue"];
const categories = ["Work", "Personal", "Shopping", "Health"];

const Sidebar = ({
  selectedFilter,
  onFilterChange,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <aside className="w-64 bg-muted/30 border-r border-border p-6">
      <div className="space-y-8">
        {/* Filters */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
            Filter Tasks
          </h3>
          <div className="space-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm bg-white font-medium transition-all ${
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  onCategoryChange(
                    selectedCategory === category ? "" : category
                  )
                }
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
