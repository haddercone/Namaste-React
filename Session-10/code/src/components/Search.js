import { useState } from "react";
import { filteredRestaurants } from "../utils/helpers";
import useRestaurantList from "../utils/useRestaurantList";

const Search = ({ restaurants, actualData, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-4/5 m-auto py-3 flex justify-between items-center ">
      <p className="text-2xl">{restaurants.length} restaurants</p>
      <form
        className="w-1/2 px-3 py-2 text-xl text-right "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-2 border-2 w-3/4 border-gray-500 outline-none  border-r-0 "
          placeholder="Search restaurants.."
          autoFocus={true}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="px-3 py-2 border-2  border-gray-500 bg-gray-700 text-white hover:bg-white hover:text-black "
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
