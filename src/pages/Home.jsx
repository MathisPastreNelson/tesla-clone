import React from "react";
import Header from "../components/Header";
import ModelY from "../components/ModelY";
import Model3 from "../components/Model3";
import ModelS from "../components/ModelS";
import ModelX from "../components/ModelX";
import HomeTesla from "../components/HomeTesla";
import Accesory from "../components/Accesory";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="scroll-container">
        <ModelY />
        <Model3 />
        <ModelS />
        <ModelX />
        <HomeTesla />
        <Accesory />
      </div>
    </div>
  );
}
