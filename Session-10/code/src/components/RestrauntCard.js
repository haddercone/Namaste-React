import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMAGE_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className=" p-2 w-72 h-96 border-transparent  hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450 ">
      <div className="">
        <img src={IMAGE_CDN_URL + cloudinaryImageId} />
        <div className="pt-3 text-lg font-bold">{name}</div>
        <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
        <div className="flex justify-between">
          <span
            className="px-2 text-white"
            style={
              avgRating < 3.7 || avgRating == "--"
                ? { backgroundColor: "orange" }
                : { backgroundColor: "green" }
            }
          >
            <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
          </span>
          <span>{lastMileTravelString}</span>
          <span>{costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;
