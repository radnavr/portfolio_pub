import React, { useContext } from "react";
import DecoLine from "./DecoLine";

const ComputerHero = () => {
  return (
    <div className="hero">
      <div className="computer-hero-line-container">
        <div className="hero-text-line-container">
          <h1>HELLO,</h1>
        </div>
        <DecoLine indented={true} />
      </div>
      <div className="computer-hero-line-container">
        <div className="hero-text-line-container">
          <h1>I AM RADEK.</h1>
        </div>
        <DecoLine indented={true} />
      </div>
      <div className="computer-hero-line-container">
        <div className="hero-text-line-container">
          <h1>I CREATE WEB APPS.</h1>
        </div>
        <DecoLine indented={true} />
      </div>
    </div>
  );
};

export default ComputerHero;
