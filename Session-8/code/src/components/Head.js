import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
const Head = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
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
