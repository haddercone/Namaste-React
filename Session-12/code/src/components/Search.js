import { useState, useContext, useEffect } from "react";
import { filteredRestaurants } from "../utils/helpers";
// import useRestaurantList from "../utils/useRestaurantList";
// import UserContext from "../utils/UserContext";

const Search = ({ restaurants, actualData, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  // const { user, setUser } = useContext(UserContext);
  const [names, setNames] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
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
    <div className="bg-search-bg bg-cover mb-5">
      <div className="w-full m-0 md:w-4/5 md:m-auto py-3 flex h-64 justify-evenly items-center flex-col md:flex-row">
        {/* <p className="text-2xl hidden lg:contents">
          {restaurants.length} restaurants
        </p> */}
        <h1 className="w-full pl-3 font-bold text-5xl text-white">
          Find restaurants near you..
        </h1>
        <form
          className=" md:text-right w-full px-3 py-2 text-xl relative "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="p-2 border-2 w-4/6 md:w-4/6 border-gray-500 outline-none  md:border-r-0 "
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
          <div className="bg-white absolute">
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
    </div>
  );
};

export default Search;
