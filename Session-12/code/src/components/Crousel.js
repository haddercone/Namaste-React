import { Link } from "react-router-dom";
import { CROUSEL_IMAGE_CDN_URL } from "../config";

const Crousel = ({ crouselCards }) => {
  return (
    <div className="crousel">
      {crouselCards.map((card, index) => {
        return (
          <div className="card-container" key={index}>
            <Link to="/">
              <img
                className="crousel-image"
                src={CROUSEL_IMAGE_CDN_URL + card?.data?.creativeId}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Crousel;
