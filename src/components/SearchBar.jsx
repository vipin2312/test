import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Jobs, skills etc." className="search-input" />
      <input type="text" placeholder="Location" className="search-input" />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;