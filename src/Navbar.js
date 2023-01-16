import React from "react";
import logo from "./images/Troll Face.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="header">
      <img src={logo} className="header-logo" />
      <h2 className="header-text">Meme Generator</h2>
    </div>
  );
}
