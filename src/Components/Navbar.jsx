import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/logo 184x62px.png" alt="" />
          </Link>

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Link to="/sign-up"></Link>
              <Button variant="contained" color="secondary">
                SIGN UP
              </Button>
            </li>
            <li className="nav-item">
              <Link to="/sign-in"></Link>
              <Button variant="contained" color="primary">
                SIGN IN
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
