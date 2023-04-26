import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function ModelS() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="Car_container4" className="Car_container4">
      <div className="CarTitleBox">
        <Fade direction="up" delay={250}>
          <h2 className="CarTitle">Model X</h2>
        </Fade>
      </div>
      <div className="CarButtonBox">
        <Fade direction={windowWidth < 1200 ? "up" : "left"} delay={750}>
          <button>Configuration personnalisée</button>
        </Fade>
        <Fade direction={windowWidth < 1200 ? "up" : "right"} delay={750}>
          <button>En savoir plus</button>
        </Fade>
      </div>
    </div>
  );
}
