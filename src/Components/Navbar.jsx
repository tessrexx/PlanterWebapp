import React from "react";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img className="nav-logo" src="/logo 184x62px.png" alt="" />

        <ul className={"nav-menu"}>
          <li className="nav-item">
            <Link to="/signup">
              <Button variant="contained" color="secondary">
                SIGN UP
              </Button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin">
              <Button variant="contained" color="primary">
                SIGN IN
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
