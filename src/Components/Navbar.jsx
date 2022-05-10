import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";

function Navbar() {
  return (
    //React Fragments ie: empty tags containing multiple elements.
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/logo 184x62px.png" alt="" />
          </Link>

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Link to="/sign-up"></Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in"></Link>
            </li>
          </ul>
          <Button variant="contained" color="secondary">
            SIGN UP
          </Button>
          <Button variant="contained" color="primary" fullWidth="10">
            SIGN IN
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
