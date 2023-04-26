import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/tesla-logo.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);

    // Toggle the blur effect on the body element
    const blurElements = document.querySelectorAll(
      ".Car_container, .Car_container2, .Car_container3, .Car_container4, .Car_container5, .Car_container6,.productHeader_box ,.menuHeader_box"
    );
    if (sidebarOpen) {
      // Sidebar is open, remove blur
      blurElements.forEach((element) => {
        element.classList.remove("blur");
      });
    } else {
      // Sidebar is closed, add blur
      blurElements.forEach((element) => {
        element.classList.add("blur");
      });
    }
  };

  return (
    <header>
      <img src={logo} className="logoHeader" alt="logo" />

      <nav className="productHeader_box">
        <a href="#Car_container">Model S</a>
        <a href="#Car_container2">Model 3</a>
        <a href="#Car_container3">Model X</a>
        <a href="#Car_container4">Model Y</a>
        <a href="#Car_container5">Powerwall</a>
        <a href="#Car_container6">Recharge</a>
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

      <div
        className={`sideBarContainer ${sidebarOpen ? "show" : ""}`}
        ref={sidebarRef}>
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
    </header>
  );
}
