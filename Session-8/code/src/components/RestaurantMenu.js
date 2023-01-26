import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStopwatch,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [res, setRes] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=27.8973944&lng=78.0880129&menuId=${resId}`
    );
    const json = await data.json();
    setRes(json?.data);
    setIsLoaded(true);
  }
  if (!res) return null;

  return !isLoaded ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-info">
        <div>
          <img
            className="res-image"
            src={IMAGE_CDN_URL + res?.cloudinaryImageId}
          />
        </div>
        <div className="res-details">
          <p className="res-name">{res?.name}</p>
          <p className="res-cuisines">{res?.cuisines.join(",")}</p>
          <p className="res-locality">{res?.locality}</p>
          <div className="res-ratings">
            <p>
              <FontAwesomeIcon icon={faStar} /> {res?.avgRatingString}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faStopwatch} /> {res?.sla?.slaString}
            </p>
            <p>
              <FontAwesomeIcon icon={faMoneyBill} /> {res?.costForTwoMsg}
            </p>
          </div>
        </div>
        <div className="res-offers">
          <p className="offers">Offers : </p>
          <p>{res?.aggregatedDiscountInfo?.descriptionList[0].meta} </p>
          <p>{res?.aggregatedDiscountInfo?.descriptionList[1].meta} </p>
        </div>
      </div>
      {Object.values(res?.menu?.items).map((item) => {
        return (
          <div className="item-container" key={item.id}>
            {item?.cloudinaryImageId === "" ||
            !item?.cloudinaryImageId ? null : (
              <div className="item">
                <div className="item-description">
                  <p className="item-name">{item?.name}</p>
                  <p className="item-description">{item?.description}</p>
                </div>
                <div className="item-image">
                  <img src={IMAGE_CDN_URL + item?.cloudinaryImageId} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
