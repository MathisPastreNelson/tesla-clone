import React from "react";
import { Fade } from "react-awesome-reveal";

export default function ModelS() {
  return (
    <div id="Car_container4" className="Car_container4">
      <div className="CarTitleBox">
        <Fade direction="up" delay={250}>
          <h2 className="CarTitle">Model X</h2>
        </Fade>
      </div>
      <div className="CarButtonBox">
        <Fade direction="left" delay={750}>
          <button>Configuration personnalisée</button>
        </Fade>
        <Fade direction="right" delay={750}>
          <button>En savoir plus</button>
        </Fade>
      </div>
    </div>
  );
}
