import React, { useState } from 'react';
import './search.css';

interface SearchProps {
  onSearch: (query: string) => void;
}

function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Call the parent function to update the search results
  };

  return (
    <div className="search">
      <input
        type="text"
        className="Search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28px"
        height="28px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default Search;
