import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  const STYLES = [
    "btn--primary--filled",
    "btn--secondary--filled",
    "btn--primary--outlined",
  ];

  return (
    <nav className="Navbar">
      <div className="navbar-container"></div>
      <Link to="/" className="navbar-logo">
        <img src="/logo 184x62px.png" alt="" />
      </Link>
      <ul className="menu-options">
        <li className="nav-item">
          <Button buttonStyle="btn--primary--filled">SIGN UP</Button>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
