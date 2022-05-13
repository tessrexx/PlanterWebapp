import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import Modal from "react-responsive-modal";
import SignInForm from "./SignInForm"

function Navbar() {

  const [signUp] = useState(false)
  const [isOpen, openSignIn] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/logo 184x62px.png" alt="" />
          </Link>

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Button variant="contained" color="secondary"> SIGN UP </Button>
            </li>
            <li className="nav-item">
              <Button variant="contained" color="primary" onClick={() => openSignIn(true)}> SIGN IN </Button>
              {isOpen && <SignInForm openSignIn={openSignIn}/>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
