import { useState } from "react";
import Title from "./Title";

const Head = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  return (
    <div className="head">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
