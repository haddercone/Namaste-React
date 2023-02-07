import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../config";

const useRestaurant = () => {
  const { resId } = useParams();
  const [res, setRes] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setRes(json?.data);
    setIsLoaded(true);
  }
  return [res, isLoaded];
};

export default useRestaurant;
