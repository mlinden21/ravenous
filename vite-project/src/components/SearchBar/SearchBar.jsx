import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};


const SearchBar = ({ onSearch }) => {

    const [ searchTerm, setSearchTerm ] = useState("");
    const searchChange = ({target}) => {
    setSearchTerm(target.value);
  };
  const [ location, setLocation ] = useState("");
  const locationChange = ({target}) => {
    setLocation(target.value);
  };
  const [ sortBy, setSortBy ] = useState("best_match");
  const sortByChange = (sortByOption) => {
    setSortBy(sortByOptions[sortByOption]);
  };
  const handleSortClick = (sortByOptionValue) => {
    setSortBy(sortByOptionValue);
  };

    const handleSearch = (event) => {
      event.preventDefault();
      if (onSearch) {
        onSearch(searchTerm, location, sortBy);
      }
    };
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      const isActive = sortBy === sortByOptionValue;
      return (
      <li className={isActive ? styles.active : ''} onClick={() => handleSortClick(sortByOptionValue)}key={sortByOptionValue}>{sortByOption}</li>
    );
    });
  };


  return (
    <div className={styles.SearchBar}>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarSortOptions}>
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={searchChange} value={searchTerm}/>
          <input placeholder="Where?" onChange={locationChange} value={location}/>
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
