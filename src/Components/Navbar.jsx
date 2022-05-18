import React from "react";
import "./Navbar.css";
import theme from "./theme";
import { ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Navbar() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

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
                onClick={() => setOpenSignUp(true)}
              >
                SIGN UP
              </Button>
              <SignUpForm
                open={openSignUp}
                onClose={() => setOpenSignUp(false)}
              />
            </li>
            <li className="nav-item">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpenSignIn(true)}
              >
                SIGN IN
              </Button>
              <SignInForm
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
