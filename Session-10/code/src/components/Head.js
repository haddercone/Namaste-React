import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Head = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  const isOnline = useOnline();
  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-3  w-4/5 m-auto flex justify-between items-center">
        <Title />
        <div>
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

            <Link to="/cart">
              <li className="px-3 py-2">Cart</li>
            </Link>

            <li className="px-3 py-2 bg-black transition duration-0 text-white hover:bg-white hover:text-black hover:duration-150">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
