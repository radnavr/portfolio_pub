import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-scroll";

const DeviceNav = () => {
  const {
    darkMode,
    handleModeChange,
    menu,
    setMenu,
    scrollBlock,
    setScrollBlock,
  } = useContext(AppContext);

  const closeMenu = () => {
    setScrollBlock(!scrollBlock);
    setTimeout(() => {
      setMenu(!menu);
    }, 1000);
  };

  return (
    <nav className="device-nav fading-in">
      <ul className="ul--device-style">
        <li>
          <span onClick={handleModeChange}>
            GO {darkMode ? "FRESH" : "SLEEK"}
          </span>
        </li>
        <li>
          <Link smooth offset={0} to="aboutMe" onClick={closeMenu}>
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link smooth offset={0} to="projects" onClick={closeMenu}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link smooth offset={0} to="contacts" onClick={closeMenu}>
            CONTACTS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DeviceNav;
