import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Button = ({ className, onClick, tag }) => {
  const { darkMode } = useContext(AppContext);

  return (
    <button
      className={
        darkMode ? `button--white ${className}` : `button--blue ${className}`
      }
      onClick={onClick}
    >
      {tag}
    </button>
  );
};

export default Button;
