import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_CDN_URL } from "../config";
import { Link } from "react-router-dom";
function filteredRestaurants(searchText, actualData) {
  const data = actualData.filter((restaurant) => {
    return restaurant.data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [actualData, setActualData] = useState({});
  const [crouselCards, setCrouselCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getRestaurants() {
    setIsLoaded(false);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setCrouselCards(json?.data?.cards[0]?.data?.data?.cards);
      setIsLoaded(true);
      setActualData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <div className="crousel">
        {crouselCards.map((card, index) => {
          return (
            <div className="card-container" key={index}>
              <Link to="/">
                <img
                  className="crousel-image"
                  src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/" +
                    card?.data?.creativeId
                  }
                />
              </Link>
            </div>
          );
        })}
      </div>
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
              console.log(data);
            }}
          >
            Search
          </button>
        </form>
      </div>

      {!isLoaded ? (
        <Shimmer />
      ) : (
        <div>
          <p className="restaurant-count">{restaurants.length} restaurants.</p>
          <div className="restaurant-list">
            {restaurants.length == 0 ? (
              <p
                style={{ textAlign: "center", fontSize: "3rem", width: "100%" }}
              >
                No restaurant found...
              </p>
            ) : (
              restaurants.map((restaurant) => {
                return (
                  <Link
                    to={"/restaurant/" + restaurant.data.id}
                    key={restaurant.data.id}
                  >
                    <RestrauntCard
                      {...restaurant.data}
                      // key={restaurant.data.id}
                    />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
