import RestrauntCard from "./RestrauntCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import Crousel from "./Crousel";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, actualData, crouselCards, isLoaded, setRestaurants] =
    useRestaurantList();
  console.log(isLoaded);
  return (
    <>
      {/* <Crousel crouselCards={crouselCards} /> */}
      <Search
        restaurants={restaurants}
        actualData={actualData}
        setRestaurants={setRestaurants}
      />

      {!isLoaded ? (
        <Shimmer />
      ) : (
        <div>
          <div className="m-auto w-4/5 flex flex-wrap gap-5 justify-center">
            {restaurants.length == 0 ? (
              <p className="text-center w-full text-3xl">
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
