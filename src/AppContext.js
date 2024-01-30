import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const handleModeChange = () => setDarkMode(!darkMode);

  const [menu, setMenu] = useState(false);

  const [scrollBlock, setScrollBlock] = useState(false);

  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const handleShowMoreLessClick = () => setShowMoreProjects(!showMoreProjects);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        handleModeChange,
        menu,
        setMenu,
        scrollBlock,
        setScrollBlock,
        showMoreProjects,
        setShowMoreProjects,
        handleShowMoreLessClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
