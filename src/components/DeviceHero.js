import React from "react";
import DecoLine from "./DecoLine";

const DeviceHero = () => {
  return (
    <div className="hero fading-in">
      <div>
        <div className="hero-text-line-container">
          <h1>HELLO,</h1>
        </div>
        <DecoLine indented={true} />
      </div>
      <div>
        <div className="hero-text-line-container">
          <h1>I'M RADEK.</h1>
        </div>
        <DecoLine indented={true} />
      </div>
      <div>
        <div className="hero-text-line-container">
          <h1>I CREATE</h1>
        </div>
        <DecoLine indented={true} />
      </div>
      <div>
        <div className="hero-text-line-container">
          <h1>WEB APPS.</h1>
        </div>
        <DecoLine indented={true} />
      </div>
    </div>
  );
};

export default DeviceHero;
