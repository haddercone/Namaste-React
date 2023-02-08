import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMAGE_CDN_URL } from "../config";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div className=" p-4 md:w-[19rem] ">
      <div>
        <img src={IMAGE_CDN_URL + cloudinaryImageId} />
        <div className="pt-3 text-lg font-bold">{name}</div>
        <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
        <div className="flex justify-between font-bold">
          <span
            className={
              (avgRating < 3.7 || avgRating == "--"
                ? "bg-orange-500"
                : "bg-green-500") +
              " " +
              "px-2 text-white"
            }
          >
            <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
          </span>
          <span>{lastMileTravelString}</span>
          <span>{costForTwoString}</span>
        </div>
        {/* <span>{user.name}</span>
        <span>{user.email}</span> */}
      </div>
    </div>
  );
};

export default RestrauntCard;
