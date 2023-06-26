import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const initialSearchQuery = urlParams.get("query") || "";

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (initialSearchQuery) {
      performSearch(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const performSearch = async (searchQuery) => {
    console.log("입력값 : ", searchQuery);
    try {
      const response = await axios.get("http://localhost:8088/gocamping/comunity/search", {
        params: {
          query: searchQuery,
        },
      });

      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error in search:", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.map((result, index) => (
      <div key={index}>
        <h3>{result.story_title}</h3>
        <p>{result.story_content}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Search Comunities</h2>

      {searchResults.length > 0 && (
        <div>
          <h2>Results:</h2>
          {renderSearchResults()}
        </div>
      )}
    </div>
  );
};

export default Search;
