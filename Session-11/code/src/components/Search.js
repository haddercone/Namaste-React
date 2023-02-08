import { useState, useContext, useEffect } from "react";
import { filteredRestaurants } from "../utils/helpers";
// import useRestaurantList from "../utils/useRestaurantList";
// import UserContext from "../utils/UserContext";

const Search = ({ restaurants, actualData, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  // const { user, setUser } = useContext(UserContext);
  const [names, setNames] = useState([]);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchText === "") {
        setNames([]);
        return;
      }
      const data = filteredRestaurants(searchText, actualData);
      setNames(data);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="w-full m-0 md:w-4/5 md:m-auto py-3 flex justify-between items-center ">
      {/* <p className="text-2xl hidden lg:contents">
        {restaurants.length} restaurants
      </p> */}
      <form
        className="text-center w-full px-3 py-2 text-xl relative "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-2 border-2 w-3/5 md:w-1/2 border-gray-500 outline-none  md:border-r-0 "
          placeholder="Search restaurants.."
          autoFocus={true}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          className="px-3 py-2 border-2  border-gray-500 bg-gray-700 text-white hover:bg-white hover:text-black "
          onClick={() => {
            const data = filteredRestaurants(searchText, actualData);
            console.log("filter: ", data);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <div className="absolute md:w-3/4 w-4/5 left-9 shadow-md bg-white ">
          {names.map((res) => {
            return (
              <button
                className="w-full text-left p-2 hover:bg-gray-200"
                key={res.data.id}
                onClick={() => {
                  setSearchText(res.data.name);
                  setNames([]);
                  setRestaurants([].concat(res));
                }}
              >
                {!res.data.name ? "" : res.data.name}
              </button>
            );
          })}
        </div>
        {/* <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        /> */}
      </form>
    </div>
  );
};

export default Search;
