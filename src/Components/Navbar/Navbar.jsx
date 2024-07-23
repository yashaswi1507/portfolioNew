/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../../src/assets/logo.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#hero">
            <p onClick={() => setMenu("hero")}>Home</p>
          </AnchorLink>
          {menu == "hero"}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu == "about"}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Skills</p>
          </AnchorLink>
          {menu == "services"}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Project</p>
          </AnchorLink>
          {menu == "work"}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
        {menu == "contact"}
      </div>
    </div>
  );
};

export default Navbar;
