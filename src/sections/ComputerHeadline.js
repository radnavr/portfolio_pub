import React from "react";

import Button from "../components/Button";
import ComputerHero from "../components/ComputerHero";

const ComputerHeadline = () => {
  return (
    <section className="computer-headline" id="headline">
      <div className="headline-top-bar">
        <a href="mailto:radnavr@gmail.com">
          <Button tag="SEND AN EMAIL" />
        </a>
      </div>
      <ComputerHero />
    </section>
  );
};

export default ComputerHeadline;
