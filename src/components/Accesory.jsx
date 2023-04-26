import React from "react";
import { Fade } from "react-awesome-reveal";

export default function ModelS() {
  return (
    <div id="Car_container6" className="Car_container6">
      <div className="CarTitleBox">
        <Fade direction="up" delay={250}>
          <h2 className="CarTitle">Accessoires</h2>
        </Fade>
      </div>
      <div className="CarButtonBoxAccesory">
        <Fade direction="up" delay={750}>
          <button>Commander maintenant</button>
        </Fade>
      </div>
      <footer>
        <div className="covoiturage">
          <p>Pensez à covoiturer #SeDéplacerMoinsPolluer</p>
        </div>
        <div>
          <p>Mathis © 2023</p>
          <p>Mentions légales</p>
          <p>Contact</p>
          <p>Carrières</p>
          <p>Actualités</p>
          <p>Localisations</p>
        </div>
        <div>{""}</div>
      </footer>
    </div>
  );
}
