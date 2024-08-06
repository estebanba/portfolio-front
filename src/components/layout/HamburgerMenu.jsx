import { useState } from "react";
import stylesHamburgerMenu from "./HamburgerMenu.module.css";

export const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
  const handleHambugerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
      onClick={handleHambugerMenu}
      className={menuOpen ? stylesHamburgerMenu.open : ""}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
