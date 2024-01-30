import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const DecoLine = ({ indented }) => {
  const { darkMode } = useContext(AppContext);

  const decoLineClasses = () => {
    if (indented && darkMode)
      return "deco-line deco-line--margin deco-line--dark";
    if (indented && !darkMode)
      return "deco-line deco-line--margin deco-line--light";
    if (!indented && darkMode) return "deco-line deco-line--dark";
    if (!indented && !darkMode) return "deco-line deco-line--light";
  };

  return <div className={decoLineClasses()}></div>;
};

export default DecoLine;
