import { useState } from "react";
import { filteredRestaurants } from "../utils/helpers";

const Search = ({ actualData, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          autoFocus={true}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filteredRestaurants(searchText, actualData);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
