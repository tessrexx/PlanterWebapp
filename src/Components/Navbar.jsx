import React from "react";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Navbar() {
  const [isOpened, openSignUp] = useState(false);
  const [isOpen, openSignIn] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="navbar-logo" src="/logo 184x62px.png" alt="" />

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => openSignUp(true)}
              >
                SIGN UP
              </Button>
              {isOpened && <SignUpForm openSignUp={openSignUp} />}
            </li>
            <li className="nav-item">
              <Button
                variant="contained"
                color="primary"
                onClick={() => openSignIn(true)}
              >
                SIGN IN
              </Button>
              {isOpen && <SignInForm openSignIn={openSignIn} />}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
