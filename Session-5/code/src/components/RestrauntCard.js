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
          <p>
            <strong>{name}</strong>
          </p>
        </div>
        <small>{cuisines.join(", ")}</small> <br /> <br />
        <p
          style={{
            margin: "0",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <small style={avgRating > 3 ? { color: "green" } : { color: "red" }}>
            {avgRating}
          </small>
          <small>{lastMileTravelString}</small>{" "}
          <small>{costForTwoString}</small>
        </p>
      </div>
    </div>
  );
};

export default RestrauntCard;
