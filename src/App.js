import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import easterEgg from "./easterEgg";

import ComputerNav from "./sections/ComputerNav";
import ComputerHeadline from "./sections/ComputerHeadline";
import DeviceHeadline from "./sections/DeviceHeadline";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";

function App() {
  const { darkMode, scrollBlock } = useContext(AppContext);
  const isComputer = useMediaQuery({ query: "(min-width: 1024px)" });

  const mainClasses = () => {
    if (darkMode && scrollBlock) return "col-white scroll-block";
    if (darkMode && !scrollBlock) return "col-white";
    if (!darkMode && scrollBlock) return "col-black scroll-block";
    if (!darkMode && !scrollBlock) return "col-black";
  };

  easterEgg();

  return (
    <>
      <div
        className={
          darkMode
            ? "background background--dark"
            : "background background--light"
        }
      ></div>
      <main className={mainClasses()}>
        {isComputer && <ComputerNav />}
        {isComputer ? <ComputerHeadline /> : <DeviceHeadline />}
        <AboutMe />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
