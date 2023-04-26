import React, { useState, useEffect } from "react";
import logo from "../assets/tesla-logo.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <img src={logo} className="logoHeader" alt="logo" />

      <nav className="productHeader_box">
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Powerwall</a>
        <a href="#">Recharge</a>
      </nav>

      <nav className="menuHeader_box">
        <a href="#">Assistance</a>
        <a href="#">Shop</a>
        <a href="#">Compte</a>
        <button className="menuHeader_button" onClick={toggleSidebar}>
          Menu
        </button>
      </nav>
      {/* La sideBar */}
      {sidebarOpen ? (
        <div className={`sideBarContainer ${sidebarOpen ? "show" : ""}`}>
          <button className="sideBarButton" onClick={toggleSidebar}>
            X
          </button>
          <a className="sideBarLink" href="">
            Véhicules disponibles
          </a>
          <a className="sideBarLink" href="">
            Véhicules D'occasion
          </a>
          <a className="sideBarLink" href="">
            Reprise
          </a>
          <a className="sideBarLink" href="">
            Essais
          </a>
          <a className="sideBarLink" href="">
            Véhicules de société
          </a>
          <a className="sideBarLink" href="">
            Cybertruck
          </a>
          <a className="sideBarLink" href="">
            Roadster
          </a>
          <a className="sideBarLink" href="">
            Électricité pour les professionnels
          </a>
          <a className="sideBarLink" href="">
            Industries
          </a>
          <a className="sideBarLink" href="">
            Énergie
          </a>
          <a className="sideBarLink" href="">
            Nous trouver
          </a>
          <a className="sideBarLink" href="">
            Événements
          </a>
          <a className="sideBarLink" href="">
            Assistance
          </a>
          <a className="sideBarLink" href="">
            Relations investisseurs
          </a>
        </div>
      ) : null}
    </header>
  );
}
