import { IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import React from "react";
import logo from "./images/Troll Face.png";
import "./Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="header">
      <img src={logo} className="header-logo" />
      <h2 className="header-text">Meme Generator</h2>
      <Spacer />
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound={true}
        size="lg"
        p={4}
      />
    </div>
  );
}
