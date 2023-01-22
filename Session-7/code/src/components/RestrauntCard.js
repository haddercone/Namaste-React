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
    <div className="card-details">
      <div className="card">
        <img src={IMAGE_CDN_URL + cloudinaryImageId} />
        <div className="ratings">
          <p className="restaurant-name">{name}</p>
        </div>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <div className="restaurant-ratings">
          <span
            className="rating"
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
