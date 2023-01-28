import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredRestaurants } from "../utils/helpers";
import useRestaurantList from "../utils/useRestaurantList";
import Crousel from "./Crousel";
import Search from "./Search";

const Body = () => {
  const [restaurants, actualData, crouselCards, isLoaded, setRestaurants] =
    useRestaurantList();

  return (
    <>
      <Crousel crouselCards={crouselCards} />
      <Search actualData={actualData} setRestaurants={setRestaurants} />

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
                    <RestrauntCard {...restaurant.data} />
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
