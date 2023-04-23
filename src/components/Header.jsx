import React, { useState, useEffect } from "react";
import logo from "../assets/tesla-logo.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const background_Navbox = document.querySelector(".background_Navbox");
  const nav_list = document.querySelectorAll(".productHeader_box a");
  console.log(nav_list);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <img src={logo} className="logoHeader" alt="logo" />
      {windowWidth > 1200 ? (
        <div className="textHeader_box">
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
        </div>
      ) : (
        <button className="menuHeader_button" onClick={toggleSidebar}>
          test
        </button>
      )}
    </header>
  );
}
