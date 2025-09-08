import { Search, Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  name: string;
  count?: number;
}

interface SortOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  categories: FilterOption[];
  sortOptions: SortOption[];
  searchPlaceholder?: string;
  className?: string;
}

const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories,
  sortOptions,
  searchPlaceholder = "Rechercher...",
  className = ''
}: FilterBarProps) => {
  return (
    <div className={`py-6 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Search Bar */}
          <div className="w-full flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base bg-white transition"
              />
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 border ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white border-green-600 shadow'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {category.name} 
                  {category.count !== undefined && (
                    <span className="hidden sm:inline"> ({category.count})</span>
                  )}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Filter className="w-4 h-4 text-gray-600" />
              <label htmlFor="sort" className="text-sm text-gray-600 font-medium hidden sm:inline">Trier:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
