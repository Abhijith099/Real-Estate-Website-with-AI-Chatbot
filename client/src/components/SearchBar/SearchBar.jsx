import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./SearchBar.css"; // Make sure this exists

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="search-bar-wrapper">
      <HiLocationMarker className="search-icon" />

      <input
        className="search-input"
        placeholder="Search by title / city / country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
