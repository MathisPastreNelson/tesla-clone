import React from "react";
import { Fade } from "react-awesome-reveal";

export default function ModelS() {
  return (
    <div id="Car_container5" className="Car_container5">
      <div className="CarTitleBox">
        <Fade direction="up" delay={250}>
          <h2 className="CarTitle">Systèmes d'énergie solaire et Powerwalls</h2>
        </Fade>
        <Fade direction="up" delay={750}>
          <p className="CarInformationSup">
            De l’énergie pour tous vos besoins
          </p>
        </Fade>
      </div>
      <div className="CarButtonBoxEnergy">
        <Fade direction="up" delay={750}>
          <button>En savoir plus</button>
        </Fade>
      </div>
    </div>
  );
}
