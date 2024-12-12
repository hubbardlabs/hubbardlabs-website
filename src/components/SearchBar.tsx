import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { debounce } from '../utils/debounce';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search snippets..."
          className="w-full px-4 py-3 pl-12 rounded-lg bg-dark-card border border-dark-lighter text-secondary placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
      {isLoading && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;