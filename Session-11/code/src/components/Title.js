import { Link } from "react-router-dom";
import { SITE_LOGO } from "../config";
const Title = () => (
  <Link to="/">
    <img
      className="w-20 min-w-[5rem] rounded-full"
      alt="logo"
      src={SITE_LOGO}
    />
  </Link>
);

export default Title;
