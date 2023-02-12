import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Section = ({ title, description, isVisible, setIsvisible }) => {
  //   const [isVisible, setIsvisible] = useState(false);
  return (
    <div className="border-2  my-2 border-gray-900 rounded-sm  duration-200">
      <button
        onClick={() => setIsvisible(!isVisible)}
        className="w-full text-left text-2xl p-2 "
      >
        {title}{" "}
        <span className="text-lg">
          {isVisible ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </span>
      </button>

      {isVisible && <p className="p-2 ">{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");
  return (
    <div className="m-auto w-4/5 my-5 py-2">
      <h1 className="text-3xl font-bold">Instamart</h1>{" "}
      <hr className="my-2 border-gray-500" />
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setIsvisible={() =>
          setIsVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "team"}
        setIsvisible={() =>
          setIsVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title={"Careers at Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "career"}
        setIsvisible={() =>
          setIsVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default InstaMart;
