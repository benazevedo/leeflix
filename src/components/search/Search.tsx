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
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
