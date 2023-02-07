import { useState, useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import UserContext from "../utils/UserContext";

const Head = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  const isOnline = useOnline();
  // const { user } = useContext(UserContext);

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-3  w-4/5 m-auto flex justify-between items-center">
        <Title />

        <ul className="h-full flex justify-between gap-5 text-xl">
          <Link to="/">
            <li className="px-3 py-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-3 py-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-3 py-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-3 py-2">Instamart</li>
          </Link>
        </ul>

        <ul className="h-full flex justify-between gap-5 text-xl items-center ">
          <Link to="/cart">
            <li className="px-3 py-2  text-gray-700">
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </Link>

          <li className="px-3 py-2 bg-gray-700 border-2  transition duration-0 text-white  hover:bg-white hover:text-gray-700 hover:duration-150 hover:border-gray-700">
            <div
              className=""
              style={
                isOnline
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "gray" }
              }
            ></div>
            <button className="w-20" onClick={handleLogin}>
              {isLogged ? "Logout" : "Login"}
            </button>
          </li>
          {/* <p className="text-xl">{user.name}</p> */}
        </ul>
      </div>
    </div>
  );
};

export default Head;
