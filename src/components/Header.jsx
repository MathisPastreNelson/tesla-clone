import React from "react";
import logo from "../assets/tesla-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} className="logoHeader" alt="logo" />
      <div className="textHeader_box">
        <div className="productHeader_box">
          <a href="">Model S</a>
          <a href="">Model 3</a>
          <a href="">Model X</a>
          <a href="">Model Y</a>
          <a href="">Powerwall</a>
          <a href="">Recharge</a>
        </div>
        <div className="menuHeader_box">
          <a href="">Assistance</a>
          <a href="">Shop</a>
          <a href="">Compte</a>
          <a href="">Menu</a>
        </div>
      </div>
    </header>
  );
}
