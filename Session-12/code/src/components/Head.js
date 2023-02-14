import { useState, useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Head = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  const isOnline = useOnline();
  // const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-3 w-full m-0 md:m-auto md:w-4/5  flex justify-between items-center">
        <Title />

        <ul className="fixed bottom-0 flex p-2  justify-around bg-white left-0 w-full  md:flex md:justify-between md:gap-5 md:text-xl md:static md:w-auto ">
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
            <li className="px-3 py-2  text-gray-700 relative text-2xl">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute text-sm font-bold text-white bg-green-500 px-1 right-1 top-[-1px] rounded-full">
                {cartItems.length}
              </span>
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
            <button className="w-auto " onClick={handleLogin}>
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
