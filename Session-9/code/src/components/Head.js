import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Head = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  const isOnline = useOnline();
  return (
    <div className="head">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/cart">
            <li>Cart</li>
          </Link>

          <li>
            <div
              className="status"
              style={
                isOnline
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "gray" }
              }
            ></div>
            <button className="login-button" onClick={handleLogin}>
              {isLogged ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
