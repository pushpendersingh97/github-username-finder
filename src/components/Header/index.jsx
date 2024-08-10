import { useState } from "react";
import { AiOutlineMoon } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";

const Header = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <span>devFinder</span>
        <button
          className="flex justify-center items-center"
          onClick={darkModeHandler}
        >
          {dark ? (
            <>
              <span className="pr-4">Dark</span> <AiOutlineMoon />
            </>
          ) : (
            <>
              <span className="pr-4">Light</span> <AiFillSun />
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
