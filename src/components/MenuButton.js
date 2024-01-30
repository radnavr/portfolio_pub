import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const MenuButton = () => {
  const { darkMode, menu, setMenu, scrollBlock, setScrollBlock } =
    useContext(AppContext);

  const handleMenuClick = () => {
    setMenu(!menu);
    setScrollBlock(!scrollBlock);
  };

  return (
    <div className="menu-button-container" onClick={handleMenuClick}>
      {menu ? (
        <div className="menu-button menu-opening">
          <div
            className={
              darkMode
                ? "burger-bar bar-1 bg-white"
                : "burger-bar bar-1 bg-black"
            }
          ></div>
          <div
            className={
              darkMode
                ? "burger-bar bar-2 bg-white"
                : "burger-bar bar-2 bg-black"
            }
          ></div>
          <div
            className={
              darkMode
                ? "burger-bar bar-3 bg-white"
                : "burger-bar bar-3 bg-black"
            }
          ></div>
        </div>
      ) : (
        <div className="menu-button transition">
          <div
            className={
              darkMode
                ? "burger-bar bar-1 bg-white"
                : "burger-bar bar-1 bg-black"
            }
          ></div>
          <div
            className={
              darkMode
                ? "burger-bar bar-2 bg-white"
                : "burger-bar bar-2 bg-black"
            }
          ></div>
          <div
            className={
              darkMode
                ? "burger-bar bar-3 bg-white"
                : "burger-bar bar-3 bg-black"
            }
          ></div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
