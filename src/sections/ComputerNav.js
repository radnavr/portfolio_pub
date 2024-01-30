import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-scroll";

const ComputerNav = () => {
  const { darkMode, handleModeChange } = useContext(AppContext);

  return (
    <nav className="computer-nav">
      <div className="computer-nav-container">
        <span className="ul--computer-style" onClick={handleModeChange}>
          GO {darkMode ? "FRESH" : "SLEEK"}
        </span>
        <ul className="ul--computer-style">
          <li>
            <Link
              activeClass={darkMode ? "col-white" : "col-black"}
              smooth
              spy
              offset={0}
              to="headline"
            >
              HEADLINE
            </Link>
          </li>
          <li>
            <Link
              activeClass={darkMode ? "col-white" : "col-black"}
              smooth
              spy
              offset={0}
              to="aboutMe"
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              activeClass={darkMode ? "col-white" : "col-black"}
              smooth
              spy
              offset={0}
              to="projects"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              activeClass={darkMode ? "col-white" : "col-black"}
              smooth
              spy
              offset={0}
              to="contacts"
            >
              CONTACTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ComputerNav;
