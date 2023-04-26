import React from "react";
import { Fade } from "react-awesome-reveal";

export default function ModelY() {
  return (
    <div id="Car_container" className="Car_container">
      <div className="CarTitleBox">
        <Fade direction="up" delay={250}>
          <h2 className="CarTitle">Model Y</h2>
        </Fade>
        <Fade direction="up" delay={750}>
          <p className="CarReserve">Réservez votre essai</p>
        </Fade>
      </div>
      <div className="CarButtonBox">
        <Fade direction="left" delay={750}>
          <button>Découvrir nos véhicules disponibles</button>
        </Fade>
        <Fade direction="right" delay={750}>
          <button>Configuration personnalisée</button>
        </Fade>
      </div>
      <Fade direction="down" delay={1250}>
        <p className="CarInformations">En savoir plus sur Tesla for Business</p>
      </Fade>
    </div>
  );
}
