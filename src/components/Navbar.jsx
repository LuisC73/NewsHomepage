import logo from "../assets/logo.svg";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import React, { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <figure className="navbar__figure">
          <img src={logo} alt="logo" className="navbar__img" />
        </figure>
        <ul
          className={
            !menuActive ? "navbar__ul" : "navbar__ul navbar__ul--active"
          }
        >
          <IoCloseOutline
            className="navbar__icon navbar__icon--close"
            onClick={() => setMenuActive(!menuActive)}
          />
          <li className="navbar__li">Home</li>
          <li className="navbar__li">New</li>
          <li className="navbar__li">Popular</li>
          <li className="navbar__li">Trending</li>
          <li className="navbar__li">Categories</li>
        </ul>
        <IoMenuOutline
          className="navbar__icon"
          onClick={() => setMenuActive(!menuActive)}
        />
      </nav>
    </header>
  );
}

export default Navbar;
