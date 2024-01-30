import React, { useContext } from "react";
import { AppContext } from "../AppContext";

import MenuButton from "../components/MenuButton";
import DeviceHero from "../components/DeviceHero";
import DeviceNav from "./DeviceNav";

const DeviceHeadline = () => {
  const { menu } = useContext(AppContext);

  return (
    <section className="device-headline">
      <div className="headline-top-bar">
        <MenuButton />
      </div>
      {menu ? <DeviceNav /> : <DeviceHero />}
    </section>
  );
};

export default DeviceHeadline;
