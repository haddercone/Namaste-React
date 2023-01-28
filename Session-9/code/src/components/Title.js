import { Link } from "react-router-dom";
import { SITE_LOGO } from "../config";
const Title = () => (
  <Link to="/">
    <img className="logo" alt="logo" src={SITE_LOGO} />
  </Link>
);

export default Title;
