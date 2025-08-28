import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "./components/BusinessList/BusinessList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { search } from "./utils/yelp";



const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = (term, location, sortBy) => {
    search(term, location, sortBy).then(results => {
      setBusinesses(results || []);
    });
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
